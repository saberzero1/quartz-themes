import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "poimandres-extended",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 200;
  --accent-l: 75%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgb(33, 36, 47);
  --background-modifier-border: rgb(33, 36, 47);
  --background-modifier-border-focus: rgb(33, 36, 47);
  --background-modifier-border-hover: rgb(33, 36, 47);
  --background-modifier-cover: rgba(27, 30, 40, 0.8);
  --background-modifier-error: rgb(208, 103, 157);
  --background-modifier-error-hover: rgb(208, 103, 157);
  --background-modifier-form-field: rgb(27, 30, 40);
  --background-modifier-form-field-highlighted: rgb(27, 30, 40);
  --background-modifier-form-field-hover: rgb(27, 30, 40);
  --background-modifier-hover: rgb(33, 36, 47);
  --background-modifier-message: rgba(33, 36, 47, 0.9);
  --background-modifier-success: rgb(93, 228, 199);
  --background-primary: rgb(27, 30, 40);
  --background-primary-alt: rgb(27, 30, 40);
  --background-secondary: rgb(27, 30, 40);
  --background-secondary-alt: rgb(27, 30, 40);
  --bases-cards-background: rgb(27, 30, 40);
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: rgb(27, 30, 40);
  --bases-cards-shadow: 0 0 0 1px rgb(33, 36, 47);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(33, 36, 47);
  --bases-embed-border-color: rgb(33, 36, 47);
  --bases-group-heading-property-color: rgb(118, 124, 157);
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(33, 36, 47);
  --bases-table-cell-background-active: rgb(27, 30, 40);
  --bases-table-cell-background-disabled: rgb(27, 30, 40);
  --bases-table-cell-background-selected: rgba(128, 212, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(33, 36, 47);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(128, 212, 255);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: rgb(27, 30, 40);
  --bases-table-header-background: rgb(27, 30, 40);
  --bases-table-header-background-hover: rgb(33, 36, 47);
  --bases-table-header-color: rgb(118, 124, 157);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(27, 30, 40);
  --bases-table-summary-background-hover: rgb(33, 36, 47);
  --bg: rgb(27, 30, 40);
  --bg_dark: rgb(27, 30, 40);
  --bg_dark2: rgb(32, 36, 48);
  --bg_dark2_x: 32, 36, 48;
  --bg_dark_x: 27, 30, 40;
  --bg_highlight: rgb(33, 36, 47);
  --bg_highlight_dark: rgb(32, 36, 48);
  --bg_highlight_dark_x: 32, 36, 48;
  --bg_highlight_x: 33, 36, 47;
  --bg_x: 27, 30, 40;
  --blockquote-background-color: rgb(27, 30, 40);
  --blockquote-border-color: rgb(128, 212, 255);
  --blue: rgb(173, 215, 255);
  --blue0: rgb(137, 221, 255);
  --blue0_x: 137, 221, 255;
  --blue_x: 173, 215, 255;
  --blur-background: color-mix(in srgb, rgb(27, 30, 40) 65%, transparent) linear-gradient(rgb(27, 30, 40), color-mix(in srgb, rgb(27, 30, 40) 65%, transparent));
  --bold-color: rgba(137, 221, 255, 0.65);
  --border-width: 2px;
  --callout-bug: 208, 103, 157;
  --callout-default: 173, 215, 255;
  --callout-error: 208, 103, 157;
  --callout-example: 240, 135, 189;
  --callout-fail: 208, 103, 157;
  --callout-important: 93, 228, 199;
  --callout-info: 173, 215, 255;
  --callout-question: 255, 250, 194;
  --callout-quote: 118, 124, 157;
  --callout-success: 66, 103, 90;
  --callout-summary: 173, 215, 255;
  --callout-tip: 173, 215, 255;
  --callout-todo: 173, 215, 255;
  --callout-warning: 255, 250, 194;
  --canvas-background: rgb(27, 30, 40);
  --canvas-card-label-color: rgb(118, 124, 157);
  --caret-color: rgb(166, 172, 205);
  --checkbox-border-color: rgb(118, 124, 157);
  --checkbox-border-color-hover: rgb(118, 124, 157);
  --checkbox-color: rgb(93, 228, 199);
  --checkbox-color-hover: rgb(93, 228, 199);
  --checkbox-marker-color: rgb(27, 30, 40);
  --checklist-done-color: rgb(118, 124, 157);
  --code-background: rgb(32, 36, 48);
  --code-border-color: rgb(33, 36, 47);
  --code-bracket-background: rgb(33, 36, 47);
  --code-comment: rgb(118, 124, 157);
  --code-function: rgb(173, 215, 255);
  --code-important: rgb(208, 103, 157);
  --code-keyword: rgb(166, 172, 205);
  --code-normal: rgb(166, 172, 205);
  --code-operator: rgb(173, 215, 255);
  --code-property: rgb(173, 215, 255);
  --code-punctuation: rgb(166, 172, 205);
  --code-string: rgb(93, 228, 199);
  --code-tag: rgb(93, 228, 199);
  --code-value: rgb(93, 228, 199);
  --collapse-icon-color: rgb(118, 124, 157);
  --collapse-icon-color-collapsed: rgb(173, 215, 255);
  --color-accent: rgb(128, 212, 255);
  --color-accent-1: hsl(197, 102%, 86.25%);
  --color-accent-2: hsl(195, 105%, 96.75%);
  --color-accent-hsl: 200, 100%, 75%;
  --color-blue: rgb(173, 215, 255);
  --color-cyan: rgb(173, 215, 255);
  --color-green: rgb(93, 228, 199);
  --color-orange: rgb(255, 250, 194);
  --color-pink: rgb(240, 135, 189);
  --color-purple: rgb(240, 135, 189);
  --color-red: rgb(208, 103, 157);
  --color-yellow: rgb(255, 250, 194);
  --color_blue_rgb: 173, 215, 255;
  --color_cyan_rgb: 173, 215, 255;
  --color_green_rgb: 93, 228, 199;
  --color_orange_rgb: 255, 250, 194;
  --color_pink_rgb: 240, 135, 189;
  --color_purple_rgb: 240, 135, 189;
  --color_red_rgb: 208, 103, 157;
  --color_yellow_rgb: 255, 250, 194;
  --comment: rgb(118, 124, 157);
  --comment_x: 118, 124, 157;
  --cyan: rgb(173, 215, 255);
  --cyan0: rgb(137, 221, 255);
  --cyan0_x: 137, 221, 255;
  --cyan_x: 173, 215, 255;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --date-background-color: rgb(33, 36, 47);
  --date-color: rgb(173, 215, 255);
  --divider-color: rgb(33, 36, 47);
  --divider-color-hover: rgb(128, 212, 255);
  --dropdown-background: rgb(27, 30, 40);
  --dropdown-background-hover: rgb(27, 30, 40);
  --embed-background: rgb(27, 30, 40);
  --embed-block-shadow-hover: 0 0 0 1px rgb(33, 36, 47), inset 0 0 0 1px rgb(33, 36, 47);
  --embed-border-start: 2px solid rgb(128, 212, 255);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --fg: rgb(166, 172, 205);
  --fg_dark: rgb(118, 124, 157);
  --fg_dark_x: 118, 124, 157;
  --fg_x: 166, 172, 205;
  --file-header-background: rgb(27, 30, 40);
  --file-header-background-focused: rgb(27, 30, 40);
  --file-header-border: 2px solid transparent;
  --flair-background: rgb(27, 30, 40);
  --flair-color: rgb(166, 172, 205);
  --flashing-background: rgba(137, 221, 255, 0.3);
  --footnote-divider-color: rgb(33, 36, 47);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(118, 124, 157);
  --footnote-id-color-no-occurrences: rgb(118, 124, 157);
  --footnote-input-background-active: rgb(33, 36, 47);
  --graph-line: rgb(118, 124, 157);
  --graph-node: rgb(166, 172, 205);
  --graph-node-attachment: rgb(173, 215, 255);
  --graph-node-focused: rgb(173, 215, 255);
  --graph-node-tag: rgb(255, 250, 194);
  --graph-node-unresolved: rgb(118, 124, 157);
  --graph-text: rgb(166, 172, 205);
  --gray: var(--text-muted);
  --green: rgb(93, 228, 199);
  --green0: rgb(95, 179, 161);
  --green0_x: 95, 179, 161;
  --green_x: 93, 228, 199;
  --h1-color: rgb(173, 215, 255);
  --h2-color: rgb(173, 215, 255);
  --h3-color: rgb(173, 215, 255);
  --h4-color: rgb(173, 215, 255);
  --h5-color: rgb(173, 215, 255);
  --h6-color: rgb(173, 215, 255);
  --heading-formatting: rgb(118, 124, 157);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(33, 36, 47);
  --icon-color: rgb(118, 124, 157);
  --icon-color-active: rgb(240, 135, 189);
  --icon-color-focused: rgb(240, 135, 189);
  --icon-color-hover: rgb(173, 215, 255);
  --image-radius: 0px;
  --indentation-guide-color: rgb(118, 124, 157);
  --indentation-guide-color-active: rgb(118, 124, 157);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: rgb(173, 215, 255);
  --input-border-width: 2px;
  --input-date-separator: rgb(118, 124, 157);
  --input-placeholder-color: rgb(118, 124, 157);
  --interactive-accent: rgb(128, 212, 255);
  --interactive-accent-hover: rgb(173, 215, 255);
  --interactive-accent-hsl: 200, 100%, 75%;
  --interactive-hover: rgb(27, 30, 40);
  --interactive-normal: rgb(27, 30, 40);
  --interactive-success: rgb(93, 228, 199);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(173, 215, 255);
  --link-color-hover: rgb(255, 250, 194);
  --link-external-color: rgba(95, 179, 161, 0.85);
  --link-external-color-hover: rgb(173, 215, 255);
  --link-external-filter: invert(35%) sepia(28%) saturate(681%)
    hue-rotate(192deg) brightness(94%) contrast(85%);
  --link-unresolved-color: rgb(173, 215, 255);
  --link-unresolved-decoration-color: rgba(128, 212, 255, 0.3);
  --list-marker-color: rgb(118, 124, 157);
  --list-marker-color-collapsed: rgb(173, 215, 255);
  --list-marker-color-hover: rgb(118, 124, 157);
  --magenta: rgb(240, 135, 189);
  --magenta_x: 240, 135, 189;
  --menu-background: rgb(27, 30, 40);
  --menu-border-color: rgb(33, 36, 47);
  --menu-border-width: 2px;
  --mermaid-actor: rgb(118, 124, 157);
  --mermaid-loopline: rgb(173, 215, 255);
  --mermaid-note: rgb(137, 221, 255);
  --metadata-border-color: rgb(33, 36, 47);
  --metadata-divider-color: rgb(33, 36, 47);
  --metadata-input-background-active: rgb(33, 36, 47);
  --metadata-input-text-color: rgb(166, 172, 205);
  --metadata-label-background-active: rgb(33, 36, 47);
  --metadata-label-text-color: rgb(118, 124, 157);
  --metadata-label-text-color-hover: rgb(118, 124, 157);
  --metadata-property-background-active: rgb(33, 36, 47);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(33, 36, 47);
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(33, 36, 47);
  --modal-background: rgb(27, 30, 40);
  --modal-border-color: rgb(33, 36, 47);
  --modal-border-width: 2px;
  --nav-collapse-icon-color: rgb(118, 124, 157);
  --nav-collapse-icon-color-collapsed: rgb(118, 124, 157);
  --nav-file-tag: rgba(255, 250, 194, 0.9);
  --nav-heading-color: rgb(166, 172, 205);
  --nav-heading-color-collapsed: rgb(118, 124, 157);
  --nav-heading-color-collapsed-hover: rgb(118, 124, 157);
  --nav-heading-color-hover: rgb(166, 172, 205);
  --nav-indentation-guide-color: rgb(33, 36, 47);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(33, 36, 47);
  --nav-item-background-hover: rgb(33, 36, 47);
  --nav-item-background-selected: rgba(128, 212, 255, 0.15);
  --nav-item-color: rgb(118, 124, 157);
  --nav-item-color-active: rgb(208, 103, 157);
  --nav-item-color-highlighted: rgb(173, 215, 255);
  --nav-item-color-hover: rgb(166, 172, 205);
  --nav-item-color-selected: rgb(166, 172, 205);
  --nav-tag-color: rgb(118, 124, 157);
  --nav-tag-color-active: rgb(118, 124, 157);
  --nav-tag-color-hover: rgb(118, 124, 157);
  --orange: rgb(255, 250, 194);
  --orange_x: 255, 250, 194;
  --pdf-background: rgb(27, 30, 40);
  --pdf-page-background: rgb(27, 30, 40);
  --pdf-shadow: 0 0 0 1px rgb(33, 36, 47);
  --pdf-sidebar-background: rgb(27, 30, 40);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(33, 36, 47);
  --pill-border-color: rgb(33, 36, 47);
  --pill-border-color-hover: rgb(33, 36, 47);
  --pill-border-width: 2px;
  --pill-color: rgb(118, 124, 157);
  --pill-color-hover: rgb(166, 172, 205);
  --pill-color-remove: rgb(118, 124, 157);
  --pill-color-remove-hover: rgb(173, 215, 255);
  --pink: rgb(240, 135, 189);
  --pink_x: 240, 135, 189;
  --prompt-background: rgb(27, 30, 40);
  --prompt-border-color: rgb(33, 36, 47);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, rgb(27, 30, 40) 65%, transparent) linear-gradient(rgb(27, 30, 40), color-mix(in srgb, rgb(27, 30, 40) 65%, transparent));
  --red: rgb(208, 103, 157);
  --red1: rgb(208, 103, 157);
  --red1_x: 208, 103, 157;
  --red_x: 208, 103, 157;
  --ribbon-background: rgb(27, 30, 40);
  --ribbon-background-collapsed: rgb(27, 30, 40);
  --scrollbar-active-thumb-bg: rgba(118, 124, 157, 0.5);
  --scrollbar-bg: rgb(27, 30, 40);
  --scrollbar-thumb-bg: rgba(118, 124, 157, 0.35);
  --scrollbar-width: 7px;
  --search-clear-button-color: rgb(118, 124, 157);
  --search-icon-color: rgb(118, 124, 157);
  --search-result-background: rgb(27, 30, 40);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(166, 172, 205);
  --setting-items-background: rgb(27, 30, 40);
  --setting-items-border-color: rgb(33, 36, 47);
  --slider-thumb-border-color: rgb(33, 36, 47);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgb(33, 36, 47);
  --status-bar-background: rgb(27, 30, 40);
  --status-bar-border-color: rgb(33, 36, 47);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-text-color: rgb(118, 124, 157);
  --suggestion-background: rgb(27, 30, 40);
  --sync-avatar-color-1: rgb(208, 103, 157);
  --sync-avatar-color-2: rgb(255, 250, 194);
  --sync-avatar-color-3: rgb(255, 250, 194);
  --sync-avatar-color-4: rgb(93, 228, 199);
  --sync-avatar-color-5: rgb(173, 215, 255);
  --sync-avatar-color-6: rgb(173, 215, 255);
  --sync-avatar-color-7: rgb(240, 135, 189);
  --sync-avatar-color-8: rgb(240, 135, 189);
  --tab-background-active: rgb(27, 30, 40);
  --tab-container-background: rgb(27, 30, 40);
  --tab-divider-color: rgb(33, 36, 47);
  --tab-outline-color: rgb(33, 36, 47);
  --tab-switcher-background: rgb(27, 30, 40);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 30, 40), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(128, 212, 255);
  --tab-text-color: rgb(118, 124, 157);
  --tab-text-color-active: rgb(118, 124, 157);
  --tab-text-color-focused: rgb(118, 124, 157);
  --tab-text-color-focused-active: rgba(208, 103, 157, 0.8);
  --tab-text-color-focused-active-current: rgb(208, 103, 157);
  --tab-text-color-focused-highlighted: rgb(173, 215, 255);
  --table-add-button-border-color: rgb(33, 36, 47);
  --table-border-color: rgb(33, 36, 47);
  --table-drag-handle-background-active: rgb(128, 212, 255);
  --table-drag-handle-color: rgb(118, 124, 157);
  --table-drag-handle-color-active: rgb(27, 30, 40);
  --table-header-background: rgb(32, 36, 48);
  --table-header-background-hover: rgb(32, 36, 48);
  --table-header-border-color: rgb(33, 36, 47);
  --table-header-color: rgb(166, 172, 205);
  --table-selection: rgba(128, 212, 255, 0.1);
  --table-selection-border-color: rgb(128, 212, 255);
  --table-width: 88cqw;
  --tag-background: rgba(95, 179, 161, 0.25);
  --tag-background-hover: rgba(173, 215, 255, 0.15);
  --tag-border-color: rgba(128, 212, 255, 0.15);
  --tag-border-color-hover: rgba(128, 212, 255, 0.15);
  --tag-color: rgb(95, 179, 161);
  --tag-color-hover: rgb(173, 215, 255);
  --tag-radius: 4px;
  --teal: rgb(66, 103, 90);
  --teal_x: 66, 103, 90;
  --terminal_black: rgb(48, 51, 64);
  --terminal_black_x: 48, 51, 64;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(173, 215, 255);
  --text-accent-hover: rgb(173, 215, 255);
  --text-error: rgb(208, 103, 157);
  --text-error-hover: rgb(208, 103, 157);
  --text-faint: rgb(118, 124, 157);
  --text-highlight-bg: rgba(255, 250, 194, 0.25);
  --text-muted: rgb(118, 124, 157);
  --text-normal: rgb(166, 172, 205);
  --text-on-accent: rgb(27, 30, 40);
  --text-selection: rgba(113, 124, 180, 0.15);
  --text-success: rgb(93, 228, 199);
  --text-warning: rgb(255, 250, 194);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(27, 30, 40);
  --titlebar-background-focused: rgb(27, 30, 40);
  --titlebar-border-color: rgb(33, 36, 47);
  --titlebar-text-color: rgb(118, 124, 157);
  --titlebar-text-color-focused: rgb(166, 172, 205);
  --toggle-thumb-color: rgb(27, 30, 40);
  --unknown: #ffffff;
  --vault-profile-color: rgb(166, 172, 205);
  --vault-profile-color-hover: rgb(166, 172, 205);
  --yellow: rgb(255, 250, 194);
  --yellow_x: 255, 250, 194;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 30, 40);
  color: rgb(166, 172, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(27, 30, 40);
  color: rgb(166, 172, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 30, 40);
  color: rgb(166, 172, 205);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(33, 36, 47);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 30, 40);
  border-left-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

body div#quartz-root {
  background-color: rgb(32, 36, 48);
  color: rgb(166, 172, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgba(137, 221, 255, 0.65);
  outline: rgba(137, 221, 255, 0.65) none 0px;
  text-decoration: rgba(137, 221, 255, 0.65);
  text-decoration-color: rgba(137, 221, 255, 0.65);
}

body .page article p > em, em {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body .page article p > i, i {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body .page article p > strong, strong {
  color: rgba(137, 221, 255, 0.65);
  outline: rgba(137, 221, 255, 0.65) none 0px;
  text-decoration: rgba(137, 221, 255, 0.65);
  text-decoration-color: rgba(137, 221, 255, 0.65);
}

body .text-highlight {
  background-color: rgba(255, 250, 194, 0.25);
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body del {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: line-through rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body p {
  color: rgb(118, 124, 157);
  outline: rgb(118, 124, 157) none 0px;
  text-decoration: rgb(118, 124, 157);
  text-decoration-color: rgb(118, 124, 157);
}`,
    links: `body a.external, footer a {
  color: rgba(95, 179, 161, 0.85);
  outline: rgba(95, 179, 161, 0.85) none 0px;
  text-decoration: underline rgba(95, 179, 161, 0.85);
  text-decoration-color: rgba(95, 179, 161, 0.85);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(173, 215, 255);
  outline: rgb(173, 215, 255) none 0px;
  text-decoration: underline rgb(173, 215, 255);
  text-decoration-color: rgb(173, 215, 255);
}

body a.internal.broken {
  color: rgb(173, 215, 255);
  outline: rgb(173, 215, 255) none 0px;
  text-decoration: underline rgba(128, 213, 255, 0.3);
  text-decoration-color: rgba(128, 213, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(166, 172, 205);
}

body dt {
  color: rgb(166, 172, 205);
}

body ol > li {
  color: rgb(166, 172, 205);
}

body ol.overflow {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body ul > li {
  color: rgb(166, 172, 205);
}

body ul.overflow {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

body blockquote {
  background-color: rgb(27, 30, 40);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body table {
  color: rgb(166, 172, 205);
}

body td {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

body th {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

body tr {
  background-color: rgb(32, 36, 48);
}`,
    code: `body code {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

body pre > code > [data-line] {
  border-left-color: rgb(173, 215, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(173, 215, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(173, 215, 255);
  border-left-color: rgb(173, 215, 255);
  border-right-color: rgb(173, 215, 255);
  border-top-color: rgb(173, 215, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
}

body pre:has(> code) {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
}`,
    images: `body audio {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body figcaption {
  color: rgb(166, 172, 205);
}

body figure {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body img {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body video {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
}

body .footnotes {
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body .transclude {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(128, 213, 255);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body .transclude-inner {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(128, 213, 255);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(118, 124, 157);
  text-decoration: line-through rgb(118, 124, 157);
  text-decoration-color: rgb(118, 124, 157);
}

body input[type=checkbox] {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
}

body li.task-list-item[data-task='!'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='/'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(173, 215, 255);
  border-left-color: rgb(173, 215, 255);
  border-right-color: rgb(173, 215, 255);
  border-top-color: rgb(173, 215, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 208, 103, 157;
  background-color: rgba(208, 103, 157, 0.1);
  border-bottom-color: rgba(208, 103, 157, 0.25);
  border-left-color: rgba(208, 103, 157, 0.25);
  border-right-color: rgba(208, 103, 157, 0.25);
  border-top-color: rgba(208, 103, 157, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 208, 103, 157;
  background-color: rgba(208, 103, 157, 0.1);
  border-bottom-color: rgba(208, 103, 157, 0.25);
  border-left-color: rgba(208, 103, 157, 0.25);
  border-right-color: rgba(208, 103, 157, 0.25);
  border-top-color: rgba(208, 103, 157, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 240, 135, 189;
  background-color: rgba(240, 135, 189, 0.1);
  border-bottom-color: rgba(240, 135, 189, 0.25);
  border-left-color: rgba(240, 135, 189, 0.25);
  border-right-color: rgba(240, 135, 189, 0.25);
  border-top-color: rgba(240, 135, 189, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 208, 103, 157;
  background-color: rgba(208, 103, 157, 0.1);
  border-bottom-color: rgba(208, 103, 157, 0.25);
  border-left-color: rgba(208, 103, 157, 0.25);
  border-right-color: rgba(208, 103, 157, 0.25);
  border-top-color: rgba(208, 103, 157, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 250, 194;
  background-color: rgba(255, 250, 194, 0.1);
  border-bottom-color: rgba(255, 250, 194, 0.25);
  border-left-color: rgba(255, 250, 194, 0.25);
  border-right-color: rgba(255, 250, 194, 0.25);
  border-top-color: rgba(255, 250, 194, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 118, 124, 157;
  background-color: rgba(118, 124, 157, 0.1);
  border-bottom-color: rgba(118, 124, 157, 0.25);
  border-left-color: rgba(118, 124, 157, 0.25);
  border-right-color: rgba(118, 124, 157, 0.25);
  border-top-color: rgba(118, 124, 157, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 66, 103, 90;
  background-color: rgba(66, 103, 90, 0.1);
  border-bottom-color: rgba(66, 103, 90, 0.25);
  border-left-color: rgba(66, 103, 90, 0.25);
  border-right-color: rgba(66, 103, 90, 0.25);
  border-top-color: rgba(66, 103, 90, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 250, 194;
  background-color: rgba(255, 250, 194, 0.1);
  border-bottom-color: rgba(255, 250, 194, 0.25);
  border-left-color: rgba(255, 250, 194, 0.25);
  border-right-color: rgba(255, 250, 194, 0.25);
  border-top-color: rgba(255, 250, 194, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(33, 36, 47);
  border-bottom-width: 2px;
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-right-width: 2px;
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
  color: rgb(166, 172, 205);
}

body .search > .search-container > .search-space {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(33, 36, 47);
  border-bottom-width: 2px;
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-right-width: 2px;
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(166, 172, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(166, 172, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(33, 36, 47);
  border-bottom-width: 2px;
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-right-width: 2px;
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 30, 40);
  border-bottom-width: 2px;
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(33, 36, 47);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(95, 179, 161, 0.25);
  border-bottom-color: rgba(128, 213, 255, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(128, 213, 255, 0.15);
  border-right-color: rgba(128, 213, 255, 0.15);
  border-top-color: rgba(128, 213, 255, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(95, 179, 161);
}

body h1 {
  color: rgb(173, 215, 255);
}

body h2 {
  color: rgb(173, 215, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(173, 215, 255);
}

body h3 {
  color: rgb(173, 215, 255);
}

body h4 {
  color: rgb(173, 215, 255);
}

body h5 {
  color: rgb(173, 215, 255);
}

body h6 {
  color: rgb(173, 215, 255);
}

body hr {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
}`,
    scrollbars: `body .callout {
  --callout-color: 173, 215, 255;
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(33, 36, 47);
  border-bottom-color: rgb(208, 103, 157);
  border-left-color: rgb(208, 103, 157);
  border-right-color: rgb(208, 103, 157);
  border-top-color: rgb(208, 103, 157);
  color: rgb(208, 103, 157);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}`,
    footer: `body footer {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
  color: rgb(118, 124, 157);
}

body footer ul li a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(166, 172, 205);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(118, 124, 157);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body li.section-li > .section .meta {
  color: rgb(118, 124, 157);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

body ul.section-ul {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

body .darkmode svg {
  color: rgb(118, 124, 157);
  stroke: rgb(118, 124, 157);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

body .breadcrumb-element p {
  color: rgb(118, 124, 157);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body .metadata {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(118, 124, 157);
}

body .metadata-properties {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

body .navigation-progress {
  background-color: rgb(27, 30, 40);
}

body .page-header h2.page-title {
  color: rgb(166, 172, 205);
}

body abbr {
  color: rgb(166, 172, 205);
  text-decoration: underline dotted rgb(166, 172, 205);
}

body details {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body input[type=text] {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

body kbd {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body progress {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body sub {
  color: rgb(166, 172, 205);
}

body summary {
  color: rgb(166, 172, 205);
}

body sup {
  color: rgb(166, 172, 205);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 198;
  --accent-l: 50%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgb(192, 208, 223);
  --background-modifier-border: rgb(192, 208, 223);
  --background-modifier-border-focus: rgb(192, 208, 223);
  --background-modifier-border-hover: rgb(192, 208, 223);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(254, 254, 255, 0.8);
  --background-modifier-error: rgb(255, 32, 144);
  --background-modifier-error-hover: rgb(255, 32, 144);
  --background-modifier-form-field: rgb(254, 254, 255);
  --background-modifier-form-field-highlighted: rgb(254, 254, 255);
  --background-modifier-form-field-hover: rgb(254, 254, 255);
  --background-modifier-hover: rgb(192, 208, 223);
  --background-modifier-message: rgba(192, 208, 223, 0.9);
  --background-modifier-success: rgb(1, 218, 178);
  --background-primary: rgb(254, 254, 255);
  --background-primary-alt: rgb(254, 254, 255);
  --background-secondary: rgb(254, 254, 255);
  --background-secondary-alt: rgb(254, 254, 255);
  --bases-cards-background: rgb(254, 254, 255);
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: rgb(254, 254, 255);
  --bases-cards-shadow: 0 0 0 1px rgb(192, 208, 223);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(192, 208, 223);
  --bases-embed-border-color: rgb(192, 208, 223);
  --bases-group-heading-property-color: rgb(150, 156, 189);
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(192, 208, 223);
  --bases-table-cell-background-active: rgb(254, 254, 255);
  --bases-table-cell-background-disabled: rgb(254, 254, 255);
  --bases-table-cell-background-selected: rgba(0, 179, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(192, 208, 223);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 179, 255);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: rgb(254, 254, 255);
  --bases-table-header-background: rgb(254, 254, 255);
  --bases-table-header-background-hover: rgb(192, 208, 223);
  --bases-table-header-color: rgb(150, 156, 189);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(254, 254, 255);
  --bases-table-summary-background-hover: rgb(192, 208, 223);
  --bg: rgb(254, 254, 255);
  --bg_dark: rgb(254, 254, 255);
  --bg_dark2: rgb(192, 208, 223);
  --bg_dark2_x: 192, 208, 223;
  --bg_dark_x: 254, 254, 255;
  --bg_highlight: rgb(192, 208, 223);
  --bg_highlight_dark: rgb(255, 255, 255);
  --bg_highlight_dark_x: 255, 255, 255;
  --bg_highlight_x: 192, 208, 223;
  --bg_x: 254, 254, 255;
  --blockquote-background-color: rgb(254, 254, 255);
  --blockquote-border-color: rgb(0, 179, 255);
  --blue: rgb(14, 191, 255);
  --blue0: rgb(138, 186, 205);
  --blue0_x: 138, 186, 205;
  --blue_x: 14, 191, 255;
  --blur-background: color-mix(in srgb, rgb(254, 254, 255) 65%, transparent) linear-gradient(rgb(254, 254, 255), color-mix(in srgb, rgb(254, 254, 255) 65%, transparent));
  --bold-color: rgba(98, 170, 155, 0.72);
  --border-width: 2px;
  --callout-bug: 255, 32, 144;
  --callout-default: 14, 191, 255;
  --callout-error: 255, 32, 144;
  --callout-example: 235, 131, 148;
  --callout-fail: 255, 32, 144;
  --callout-important: 1, 218, 178;
  --callout-info: 14, 191, 255;
  --callout-question: 255, 212, 103;
  --callout-quote: 150, 156, 189;
  --callout-success: 98, 170, 155;
  --callout-summary: 14, 191, 255;
  --callout-tip: 14, 191, 255;
  --callout-todo: 14, 191, 255;
  --callout-warning: 255, 212, 103;
  --canvas-background: rgb(254, 254, 255);
  --canvas-card-label-color: rgb(192, 208, 223);
  --canvas-color: 192, 208, 223;
  --caret-color: rgb(59, 62, 72);
  --checkbox-border-color: rgb(192, 208, 223);
  --checkbox-border-color-hover: rgb(192, 208, 223);
  --checkbox-color: rgb(1, 218, 178);
  --checkbox-color-hover: rgb(1, 218, 178);
  --checkbox-marker-color: rgb(254, 254, 255);
  --checklist-done-color: rgb(150, 156, 189);
  --code-background: rgba(192, 208, 223, 0.35);
  --code-border-color: rgb(192, 208, 223);
  --code-bracket-background: rgb(192, 208, 223);
  --code-comment: rgb(150, 156, 189);
  --code-function: rgb(14, 191, 255);
  --code-important: rgb(255, 32, 144);
  --code-keyword: rgb(59, 62, 72);
  --code-normal: rgb(59, 62, 72);
  --code-operator: rgb(14, 191, 255);
  --code-property: rgb(14, 191, 255);
  --code-punctuation: rgb(59, 62, 72);
  --code-string: rgb(1, 218, 178);
  --code-tag: rgb(1, 218, 178);
  --code-value: rgb(1, 218, 178);
  --collapse-icon-color: rgb(192, 208, 223);
  --collapse-icon-color-collapsed: rgb(14, 191, 255);
  --color-accent: rgb(0, 179, 255);
  --color-accent-1: hsl(197, 101%, 53.75%);
  --color-accent-2: hsl(195, 102%, 57.5%);
  --color-accent-hsl: 198, 100%, 50%;
  --color-blue: rgb(14, 191, 255);
  --color-cyan: rgb(14, 191, 255);
  --color-green: rgb(1, 218, 178);
  --color-orange: rgb(255, 212, 103);
  --color-pink: rgb(235, 131, 148);
  --color-purple: rgb(235, 131, 148);
  --color-red: rgb(255, 32, 144);
  --color-yellow: rgb(255, 212, 103);
  --color_blue_rgb: 14, 191, 255;
  --color_cyan_rgb: 14, 191, 255;
  --color_green_rgb: 1, 218, 178;
  --color_orange_rgb: 255, 212, 103;
  --color_pink_rgb: 235, 131, 148;
  --color_purple_rgb: 235, 131, 148;
  --color_red_rgb: 255, 32, 144;
  --color_yellow_rgb: 255, 212, 103;
  --comment: rgb(192, 208, 223);
  --comment_x: 192, 208, 223;
  --cyan: rgb(14, 191, 255);
  --cyan0: rgb(138, 186, 205);
  --cyan0_x: 138, 186, 205;
  --cyan_x: 14, 191, 255;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --date-background-color: rgb(192, 208, 223);
  --date-color: rgb(14, 191, 255);
  --divider-color: rgb(192, 208, 223);
  --divider-color-hover: rgb(0, 179, 255);
  --dropdown-background: rgb(254, 254, 255);
  --dropdown-background-hover: rgb(254, 254, 255);
  --embed-background: rgb(254, 254, 255);
  --embed-block-shadow-hover: 0 0 0 1px rgb(192, 208, 223), inset 0 0 0 1px rgb(192, 208, 223);
  --embed-border-start: 2px solid rgb(0, 179, 255);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --fg: rgb(59, 62, 72);
  --fg_dark: rgb(150, 156, 189);
  --fg_dark_x: 150, 156, 189;
  --fg_x: 59, 62, 72;
  --file-header-background: rgb(254, 254, 255);
  --file-header-background-focused: rgb(254, 254, 255);
  --file-header-border: 2px solid transparent;
  --flair-background: rgb(254, 254, 255);
  --flair-color: rgb(59, 62, 72);
  --flashing-background: rgba(138, 186, 205, 0.3);
  --footnote-divider-color: rgb(192, 208, 223);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(150, 156, 189);
  --footnote-id-color-no-occurrences: rgb(192, 208, 223);
  --footnote-input-background-active: rgb(192, 208, 223);
  --graph-line: rgb(192, 208, 223);
  --graph-node: rgb(59, 62, 72);
  --graph-node-attachment: rgb(14, 191, 255);
  --graph-node-focused: rgb(14, 191, 255);
  --graph-node-tag: rgb(255, 212, 103);
  --graph-node-unresolved: rgb(192, 208, 223);
  --graph-text: rgb(59, 62, 72);
  --gray: var(--text-muted);
  --green: rgb(1, 218, 178);
  --green0: rgb(98, 170, 155);
  --green0_x: 98, 170, 155;
  --green_x: 1, 218, 178;
  --h1-color: rgb(138, 186, 205);
  --h2-color: rgb(138, 186, 205);
  --h3-color: rgb(138, 186, 205);
  --h4-color: rgb(138, 186, 205);
  --h5-color: rgb(138, 186, 205);
  --h6-color: rgb(138, 186, 205);
  --heading-formatting: rgb(192, 208, 223);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(192, 208, 223);
  --icon-color: rgb(150, 156, 189);
  --icon-color-active: rgb(235, 131, 148);
  --icon-color-focused: rgb(235, 131, 148);
  --icon-color-hover: rgb(14, 191, 255);
  --image-radius: 0px;
  --indentation-guide-color: rgb(192, 208, 223);
  --indentation-guide-color-active: rgb(192, 208, 223);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: rgb(138, 186, 205);
  --input-border-width: 2px;
  --input-date-separator: rgb(192, 208, 223);
  --input-placeholder-color: rgb(192, 208, 223);
  --interactive-accent: rgb(0, 179, 255);
  --interactive-accent-hover: rgb(14, 191, 255);
  --interactive-accent-hsl: 198, 100%, 50%;
  --interactive-hover: rgb(254, 254, 255);
  --interactive-normal: rgb(254, 254, 255);
  --interactive-success: rgb(1, 218, 178);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(14, 191, 255);
  --link-color-hover: rgb(255, 212, 103);
  --link-external-color: rgba(98, 170, 155, 0.85);
  --link-external-color-hover: rgb(14, 191, 255);
  --link-external-filter: invert(31%) sepia(96%) saturate(1412%)
    hue-rotate(173deg) brightness(102%) contrast(104%);
  --link-unresolved-color: rgb(14, 191, 255);
  --link-unresolved-decoration-color: rgba(0, 179, 255, 0.3);
  --list-marker-color: rgb(192, 208, 223);
  --list-marker-color-collapsed: rgb(14, 191, 255);
  --list-marker-color-hover: rgb(150, 156, 189);
  --magenta: rgb(235, 131, 148);
  --magenta_x: 235, 131, 148;
  --menu-background: rgb(254, 254, 255);
  --menu-border-color: rgb(192, 208, 223);
  --menu-border-width: 2px;
  --mermaid-actor: rgb(150, 156, 189);
  --mermaid-loopline: rgb(14, 191, 255);
  --mermaid-note: rgb(138, 186, 205);
  --metadata-border-color: rgb(192, 208, 223);
  --metadata-divider-color: rgb(192, 208, 223);
  --metadata-input-background-active: rgb(192, 208, 223);
  --metadata-input-text-color: rgb(59, 62, 72);
  --metadata-label-background-active: rgb(192, 208, 223);
  --metadata-label-text-color: rgb(150, 156, 189);
  --metadata-label-text-color-hover: rgb(150, 156, 189);
  --metadata-property-background-active: rgb(192, 208, 223);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(192, 208, 223);
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(192, 208, 223);
  --modal-background: rgb(254, 254, 255);
  --modal-border-color: rgb(192, 208, 223);
  --modal-border-width: 2px;
  --nav-collapse-icon-color: rgb(192, 208, 223);
  --nav-collapse-icon-color-collapsed: rgb(192, 208, 223);
  --nav-file-tag: rgba(255, 212, 103, 0.9);
  --nav-heading-color: rgb(59, 62, 72);
  --nav-heading-color-collapsed: rgb(192, 208, 223);
  --nav-heading-color-collapsed-hover: rgb(150, 156, 189);
  --nav-heading-color-hover: rgb(59, 62, 72);
  --nav-indentation-guide-color: rgb(192, 208, 223);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(192, 208, 223);
  --nav-item-background-hover: rgb(192, 208, 223);
  --nav-item-background-selected: rgba(0, 179, 255, 0.15);
  --nav-item-color: rgb(150, 156, 189);
  --nav-item-color-active: rgb(255, 32, 144);
  --nav-item-color-highlighted: rgb(14, 191, 255);
  --nav-item-color-hover: rgb(59, 62, 72);
  --nav-item-color-selected: rgb(59, 62, 72);
  --nav-tag-color: rgb(192, 208, 223);
  --nav-tag-color-active: rgb(150, 156, 189);
  --nav-tag-color-hover: rgb(150, 156, 189);
  --orange: rgb(255, 212, 103);
  --orange_x: 255, 212, 103;
  --pdf-background: rgb(254, 254, 255);
  --pdf-page-background: rgb(254, 254, 255);
  --pdf-sidebar-background: rgb(254, 254, 255);
  --pill-border-color: rgb(192, 208, 223);
  --pill-border-color-hover: rgb(192, 208, 223);
  --pill-border-width: 2px;
  --pill-color: rgb(150, 156, 189);
  --pill-color-hover: rgb(59, 62, 72);
  --pill-color-remove: rgb(192, 208, 223);
  --pill-color-remove-hover: rgb(14, 191, 255);
  --pink: rgb(235, 131, 148);
  --pink_x: 235, 131, 148;
  --prompt-background: rgb(254, 254, 255);
  --prompt-border-color: rgb(192, 208, 223);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, rgb(254, 254, 255) 65%, transparent) linear-gradient(rgb(254, 254, 255), color-mix(in srgb, rgb(254, 254, 255) 65%, transparent));
  --red: rgb(255, 32, 144);
  --red1: rgb(255, 32, 144);
  --red1_x: 255, 32, 144;
  --red_x: 255, 32, 144;
  --ribbon-background: rgb(254, 254, 255);
  --ribbon-background-collapsed: rgb(254, 254, 255);
  --scrollbar-active-thumb-bg: rgba(150, 156, 189, 0.5);
  --scrollbar-bg: rgb(254, 254, 255);
  --scrollbar-thumb-bg: rgba(150, 156, 189, 0.35);
  --scrollbar-width: 7px;
  --search-clear-button-color: rgb(150, 156, 189);
  --search-icon-color: rgb(150, 156, 189);
  --search-result-background: rgb(254, 254, 255);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(59, 62, 72);
  --setting-items-background: rgb(254, 254, 255);
  --setting-items-border-color: rgb(192, 208, 223);
  --slider-thumb-border-color: rgb(192, 208, 223);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgb(192, 208, 223);
  --status-bar-background: rgb(254, 254, 255);
  --status-bar-border-color: rgb(192, 208, 223);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-text-color: rgb(150, 156, 189);
  --suggestion-background: rgb(254, 254, 255);
  --sync-avatar-color-1: rgb(255, 32, 144);
  --sync-avatar-color-2: rgb(255, 212, 103);
  --sync-avatar-color-3: rgb(255, 212, 103);
  --sync-avatar-color-4: rgb(1, 218, 178);
  --sync-avatar-color-5: rgb(14, 191, 255);
  --sync-avatar-color-6: rgb(14, 191, 255);
  --sync-avatar-color-7: rgb(235, 131, 148);
  --sync-avatar-color-8: rgb(235, 131, 148);
  --tab-background-active: rgb(254, 254, 255);
  --tab-container-background: rgb(254, 254, 255);
  --tab-divider-color: rgb(192, 208, 223);
  --tab-outline-color: rgb(192, 208, 223);
  --tab-switcher-background: rgb(254, 254, 255);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(254, 254, 255), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 179, 255);
  --tab-text-color: rgb(192, 208, 223);
  --tab-text-color-active: rgb(150, 156, 189);
  --tab-text-color-focused: rgb(150, 156, 189);
  --tab-text-color-focused-active: rgba(255, 32, 144, 0.8);
  --tab-text-color-focused-active-current: rgb(255, 32, 144);
  --tab-text-color-focused-highlighted: rgb(14, 191, 255);
  --table-add-button-border-color: rgb(192, 208, 223);
  --table-border-color: rgb(192, 208, 223);
  --table-drag-handle-background-active: rgb(0, 179, 255);
  --table-drag-handle-color: rgb(192, 208, 223);
  --table-drag-handle-color-active: rgb(254, 254, 255);
  --table-header-background: rgb(192, 208, 223);
  --table-header-background-hover: rgb(192, 208, 223);
  --table-header-border-color: rgb(192, 208, 223);
  --table-header-color: rgb(59, 62, 72);
  --table-selection: rgba(0, 179, 255, 0.1);
  --table-selection-border-color: rgb(0, 179, 255);
  --table-width: 88cqw;
  --tag-background: rgba(98, 170, 155, 0.25);
  --tag-background-hover: rgba(14, 191, 255, 0.15);
  --tag-border-color: rgba(0, 179, 255, 0.15);
  --tag-border-color-hover: rgba(0, 179, 255, 0.15);
  --tag-color: rgb(98, 170, 155);
  --tag-color-hover: rgb(14, 191, 255);
  --tag-radius: 4px;
  --teal: rgb(98, 170, 155);
  --teal_x: 98, 170, 155;
  --terminal_black: rgb(59, 62, 72);
  --terminal_black_x: 59, 62, 72;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(14, 191, 255);
  --text-accent-hover: rgb(14, 191, 255);
  --text-error: rgb(255, 32, 144);
  --text-error-hover: rgb(255, 32, 144);
  --text-faint: rgb(192, 208, 223);
  --text-highlight-bg: rgba(255, 212, 103, 0.25);
  --text-muted: rgb(150, 156, 189);
  --text-normal: rgb(59, 62, 72);
  --text-on-accent: rgb(254, 254, 255);
  --text-selection: rgba(113, 124, 180, 0.15);
  --text-success: rgb(1, 218, 178);
  --text-warning: rgb(255, 212, 103);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(254, 254, 255);
  --titlebar-background-focused: rgb(254, 254, 255);
  --titlebar-border-color: rgb(192, 208, 223);
  --titlebar-text-color: rgb(150, 156, 189);
  --titlebar-text-color-focused: rgb(59, 62, 72);
  --toggle-thumb-color: rgb(254, 254, 255);
  --unknown: #000000;
  --vault-profile-color: rgb(59, 62, 72);
  --vault-profile-color-hover: rgb(59, 62, 72);
  --yellow: rgb(255, 212, 103);
  --yellow_x: 255, 212, 103;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(192, 208, 223);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(254, 254, 255);
  border-left-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

body div#quartz-root {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}`,
    typography: `body .page article p > b, b {
  color: rgba(98, 170, 155, 0.72);
  outline: rgba(98, 170, 155, 0.72) none 0px;
  text-decoration: rgba(98, 170, 155, 0.72);
  text-decoration-color: rgba(98, 170, 155, 0.72);
}

body .page article p > em, em {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body .page article p > i, i {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body .page article p > strong, strong {
  color: rgba(98, 170, 155, 0.72);
  outline: rgba(98, 170, 155, 0.72) none 0px;
  text-decoration: rgba(98, 170, 155, 0.72);
  text-decoration-color: rgba(98, 170, 155, 0.72);
}

body .text-highlight {
  background-color: rgba(255, 212, 103, 0.25);
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body del {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: line-through rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body p {
  color: rgb(150, 156, 189);
  outline: rgb(150, 156, 189) none 0px;
  text-decoration: rgb(150, 156, 189);
  text-decoration-color: rgb(150, 156, 189);
}`,
    links: `body a.external, footer a {
  color: rgba(98, 170, 155, 0.85);
  outline: rgba(98, 170, 155, 0.85) none 0px;
  text-decoration: underline rgba(98, 170, 155, 0.85);
  text-decoration-color: rgba(98, 170, 155, 0.85);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(14, 191, 255);
  outline: rgb(14, 191, 255) none 0px;
  text-decoration: underline rgb(14, 191, 255);
  text-decoration-color: rgb(14, 191, 255);
}

body a.internal.broken {
  color: rgb(14, 191, 255);
  outline: rgb(14, 191, 255) none 0px;
  text-decoration: underline rgba(0, 178, 255, 0.3);
  text-decoration-color: rgba(0, 178, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(59, 62, 72);
}

body dt {
  color: rgb(59, 62, 72);
}

body ol > li {
  color: rgb(59, 62, 72);
}

body ol.overflow {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body ul > li {
  color: rgb(59, 62, 72);
}

body ul.overflow {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(192, 208, 223);
  text-decoration: rgb(192, 208, 223);
}

body blockquote {
  background-color: rgb(254, 254, 255);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body table {
  color: rgb(59, 62, 72);
}

body td {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

body th {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

body tr {
  background-color: rgb(192, 208, 223);
}`,
    code: `body code {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

body pre > code > [data-line] {
  border-left-color: rgb(14, 191, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(14, 191, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(14, 191, 255);
  border-left-color: rgb(14, 191, 255);
  border-right-color: rgb(14, 191, 255);
  border-top-color: rgb(14, 191, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}

body pre:has(> code) {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}`,
    images: `body audio {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body figcaption {
  color: rgb(59, 62, 72);
}

body figure {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body img {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body video {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    embeds: `body .file-embed {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
}

body .footnotes {
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

body .transclude {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(0, 178, 255);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body .transclude-inner {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(0, 178, 255);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(150, 156, 189);
  text-decoration: line-through rgb(150, 156, 189);
  text-decoration-color: rgb(150, 156, 189);
}

body input[type=checkbox] {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}

body li.task-list-item[data-task='!'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='*'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='-'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='/'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='>'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='?'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='I'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='S'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='b'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='c'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='d'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='f'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='i'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='k'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='l'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='p'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='u'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body li.task-list-item[data-task='w'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(14, 191, 255);
  border-left-color: rgb(14, 191, 255);
  border-right-color: rgb(14, 191, 255);
  border-top-color: rgb(14, 191, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 32, 144;
  background-color: rgba(255, 32, 144, 0.1);
  border-bottom-color: rgba(255, 32, 144, 0.25);
  border-left-color: rgba(255, 32, 144, 0.25);
  border-right-color: rgba(255, 32, 144, 0.25);
  border-top-color: rgba(255, 32, 144, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 32, 144;
  background-color: rgba(255, 32, 144, 0.1);
  border-bottom-color: rgba(255, 32, 144, 0.25);
  border-left-color: rgba(255, 32, 144, 0.25);
  border-right-color: rgba(255, 32, 144, 0.25);
  border-top-color: rgba(255, 32, 144, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 235, 131, 148;
  background-color: rgba(235, 131, 148, 0.1);
  border-bottom-color: rgba(235, 131, 148, 0.25);
  border-left-color: rgba(235, 131, 148, 0.25);
  border-right-color: rgba(235, 131, 148, 0.25);
  border-top-color: rgba(235, 131, 148, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 32, 144;
  background-color: rgba(255, 32, 144, 0.1);
  border-bottom-color: rgba(255, 32, 144, 0.25);
  border-left-color: rgba(255, 32, 144, 0.25);
  border-right-color: rgba(255, 32, 144, 0.25);
  border-top-color: rgba(255, 32, 144, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 212, 103;
  background-color: rgba(255, 212, 103, 0.1);
  border-bottom-color: rgba(255, 212, 103, 0.25);
  border-left-color: rgba(255, 212, 103, 0.25);
  border-right-color: rgba(255, 212, 103, 0.25);
  border-top-color: rgba(255, 212, 103, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 150, 156, 189;
  background-color: rgba(150, 156, 189, 0.1);
  border-bottom-color: rgba(150, 156, 189, 0.25);
  border-left-color: rgba(150, 156, 189, 0.25);
  border-right-color: rgba(150, 156, 189, 0.25);
  border-top-color: rgba(150, 156, 189, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 98, 170, 155;
  background-color: rgba(98, 170, 155, 0.1);
  border-bottom-color: rgba(98, 170, 155, 0.25);
  border-left-color: rgba(98, 170, 155, 0.25);
  border-right-color: rgba(98, 170, 155, 0.25);
  border-top-color: rgba(98, 170, 155, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 212, 103;
  background-color: rgba(255, 212, 103, 0.1);
  border-bottom-color: rgba(255, 212, 103, 0.25);
  border-left-color: rgba(255, 212, 103, 0.25);
  border-right-color: rgba(255, 212, 103, 0.25);
  border-top-color: rgba(255, 212, 103, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(192, 208, 223);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-right-width: 2px;
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
  color: rgb(59, 62, 72);
}

body .search > .search-container > .search-space {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(192, 208, 223);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-right-width: 2px;
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(59, 62, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(59, 62, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(192, 208, 223);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-right-width: 2px;
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(254, 254, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(192, 208, 223);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(98, 170, 155, 0.25);
  border-bottom-color: rgba(0, 178, 255, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 178, 255, 0.15);
  border-right-color: rgba(0, 178, 255, 0.15);
  border-top-color: rgba(0, 178, 255, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(98, 170, 155);
}

body h1 {
  color: rgb(138, 186, 205);
}

body h2 {
  color: rgb(138, 186, 205);
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 186, 205);
}

body h3 {
  color: rgb(138, 186, 205);
}

body h4 {
  color: rgb(138, 186, 205);
}

body h5 {
  color: rgb(138, 186, 205);
}

body h6 {
  color: rgb(138, 186, 205);
}

body hr {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
}`,
    scrollbars: `body .callout {
  --callout-color: 14, 191, 255;
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(192, 208, 223);
  border-bottom-color: rgb(255, 32, 144);
  border-left-color: rgb(255, 32, 144);
  border-right-color: rgb(255, 32, 144);
  border-top-color: rgb(255, 32, 144);
  color: rgb(255, 32, 144);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}`,
    footer: `body footer {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
  color: rgb(150, 156, 189);
}

body footer ul li a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(59, 62, 72);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(150, 156, 189);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body li.section-li > .section .meta {
  color: rgb(150, 156, 189);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

body ul.section-ul {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

body .darkmode svg {
  color: rgb(150, 156, 189);
  stroke: rgb(150, 156, 189);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

body .breadcrumb-element p {
  color: rgb(192, 208, 223);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

body .metadata {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(150, 156, 189);
}

body .metadata-properties {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

body .navigation-progress {
  background-color: rgb(254, 254, 255);
}

body .page-header h2.page-title {
  color: rgb(59, 62, 72);
}

body abbr {
  color: rgb(59, 62, 72);
  text-decoration: underline dotted rgb(59, 62, 72);
}

body details {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body input[type=text] {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

body kbd {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

body progress {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

body sub {
  color: rgb(59, 62, 72);
}

body summary {
  color: rgb(59, 62, 72);
}

body sup {
  color: rgb(59, 62, 72);
}`,
  },
};
