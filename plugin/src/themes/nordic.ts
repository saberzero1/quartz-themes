import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nordic",
    modes: ["light"],
    variations: [],
    fonts: ["deadhead-script", "gentium-book-basic", "norwester"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-color: rgb(129, 161, 193);
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: rgba(129, 161, 193, 0.1);
  --background-modifier-border: #E5E9F0;
  --background-modifier-border-focus: #D8DEE9;
  --background-modifier-border-hover: #D8DEE9;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: white;
  --background-modifier-form-field-hover: white;
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: white;
  --background-primary-alt: #ECEFF4;
  --background-secondary: #ECEFF4;
  --background-secondary-alt: white;
  --bases-cards-background: white;
  --bases-cards-cover-background: #ECEFF4;
  --bases-cards-shadow: 0 0 0 1px #E5E9F0;
  --bases-cards-shadow-hover: 0 0 0 1px #D8DEE9;
  --bases-embed-border-color: #E5E9F0;
  --bases-group-heading-property-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --bases-table-border-color: rgba(0, 0, 0, 0.5);
  --bases-table-cell-background-active: white;
  --bases-table-cell-background-disabled: #ECEFF4;
  --bases-table-cell-background-selected: rgba(129, 161, 193, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #D8DEE9;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(146, 174, 201);
  --bases-table-group-background: #ECEFF4;
  --bases-table-header-background: white;
  --bases-table-header-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --bases-table-row-background-hover: rgba(255, 255, 255, 0.1);
  --bases-table-summary-background: white;
  --blockquote-border-color: rgb(146, 174, 201);
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-weight: 700;
  --callout-bug: 191, 97, 106;
  --callout-default: 97, 153, 191;
  --callout-error: 191, 97, 106;
  --callout-example: 149, 142, 180;
  --callout-fail: 191, 97, 106;
  --callout-important: 97, 177, 191;
  --callout-info: 97, 153, 191;
  --callout-question: 208, 135, 112;
  --callout-success: 163, 190, 140;
  --callout-summary: 97, 177, 191;
  --callout-tip: 97, 177, 191;
  --callout-todo: 97, 153, 191;
  --callout-warning: 208, 135, 112;
  --canvas-background: white;
  --canvas-card-label-color: #4C566A;
  --canvas-color-1: 191, 97, 106;
  --canvas-color-2: 208, 135, 112;
  --canvas-color-3: 235, 203, 139;
  --canvas-color-4: 163, 190, 140;
  --canvas-color-5: 97, 177, 191;
  --canvas-color-6: 149, 142, 180;
  --canvas-dot-pattern: #E5E9F0;
  --caret-color: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --checkbox-border-color: #4C566A;
  --checkbox-border-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --checkbox-color: rgb(146, 174, 201);
  --checkbox-color-hover: rgb(159, 186, 209);
  --checkbox-marker-color: white;
  --checklist-done-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --code-background: #ECEFF4;
  --code-border-color: #E5E9F0;
  --code-comment: #4C566A;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-keyword: #b48ead;
  --code-normal: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --code-operator: #bf616a;
  --code-property: #61b1bf;
  --code-punctuation: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #958eb4;
  --codeFont: var(--font-text);
  --collapse-icon-color: #4C566A;
  --collapse-icon-color-collapsed: rgb(129, 161, 193);
  --color-accent: rgb(129, 161, 193);
  --color-accent-1: rgb(146, 174, 201);
  --color-accent-2: rgb(159, 186, 209);
  --color-accent-hsl: 210, 34%, 63%;
  --color-base-00: white;
  --color-base-05: white;
  --color-base-10: #ECEFF4;
  --color-base-100: #2E3440;
  --color-base-20: #ECEFF4;
  --color-base-25: #E5E9F0;
  --color-base-30: #E5E9F0;
  --color-base-35: #D8DEE9;
  --color-base-40: #D8DEE9;
  --color-base-50: #4C566A;
  --color-base-60: #434C5E;
  --color-base-70: #3B4252;
  --color-blue: #6199bf;
  --color-blue-rgb: 97, 153, 191;
  --color-cyan: #61b1bf;
  --color-cyan-rgb: 97, 177, 191;
  --color-green: #a3be8c;
  --color-green-rgb: 163, 190, 140;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-pink: #b48ead;
  --color-pink-rgb: 180, 142, 173;
  --color-purple: #958eb4;
  --color-purple-rgb: 149, 142, 180;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 235, 203, 139;
  --dark: var(--text-normal);
  --dark0: #2e3440;
  --dark0-raw: 46, 52, 64;
  --dark1: #3b4252;
  --dark1-raw: 59, 66, 82;
  --dark2: #434c5e;
  --dark2-raw: 67, 76, 94;
  --dark3: #4c566a;
  --dark3-raw: 76, 86, 106;
  --darkgray: var(--text-normal);
  --divider-color: #E5E9F0;
  --divider-color-hover: rgb(146, 174, 201);
  --dropdown-background: white;
  --dropdown-background-hover: #ECEFF4;
  --embed-block-shadow-hover: 0 0 0 1px #E5E9F0, inset 0 0 0 1px #E5E9F0;
  --embed-border-start: 2px solid rgb(146, 174, 201);
  --file-header-background: white;
  --file-header-background-focused: white;
  --flair-background: white;
  --flair-color: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --font-mermaid: '??', 'Avenir', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Avenir', 'Arial';
  --font-text: '??', 'Avenir', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Avenir';
  --footnote-divider-color: #E5E9F0;
  --footnote-id-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --footnote-id-color-no-occurrences: #4C566A;
  --frost0: #8fbcbb;
  --frost0-raw: 143, 188, 187;
  --frost1: #88c0d0;
  --frost1-raw: 136, 192, 208;
  --frost2: #81a1c1;
  --frost2-raw: 129, 161, 193;
  --frost3: #5e81ac;
  --frost3-raw: 94, 129, 172;
  --graph-line: #D8DEE9;
  --graph-node: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: rgb(129, 161, 193);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #4C566A;
  --graph-text: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --gray: var(--text-muted);
  --h1-color: rgb(129, 161, 193);
  --h2-color: rgb(129, 161, 193);
  --h3-color: rgb(129, 161, 193);
  --h4-color: rgb(129, 161, 193);
  --h5-color: rgb(129, 161, 193);
  --h6-color: rgb(129, 161, 193);
  --header-color: rgb(129, 161, 193);
  --header-font: "Norwester";
  --headerFont: var(--font-text);
  --heading-formatting: #4C566A;
  --highlight: var(--text-highlight-bg);
  --hr-color: #E5E9F0;
  --icon-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --icon-color-active: rgb(129, 161, 193);
  --icon-color-focused: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --icon-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --inline-title-color: rgb(129, 161, 193);
  --inline-title-font: "Norwester";
  --input-date-separator: #4C566A;
  --input-placeholder-color: #4C566A;
  --interactive-accent: rgb(146, 174, 201);
  --interactive-accent-hover: rgb(159, 186, 209);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #ECEFF4;
  --interactive-normal: white;
  --light: var(--background-primary);
  --light0: #d8dee9;
  --light0-raw: 216, 222, 233;
  --light1: #e5e9f0;
  --light1-raw: 229, 233, 240;
  --light2: #eceff4;
  --light2-raw: 236, 239, 244;
  --light3: #ffffff;
  --light3-raw: 255, 255, 255;
  --lightgray: var(--background-secondary);
  --link-color: rgb(129, 161, 193);
  --link-color-hover: rgb(159, 186, 209);
  --link-external-color: rgb(129, 161, 193);
  --link-external-color-hover: rgb(159, 186, 209);
  --link-unresolved-color: rgb(129, 161, 193);
  --link-unresolved-decoration-color: rgba(129, 161, 193, 0.3);
  --list-marker-color: rgb(129, 161, 193);
  --list-marker-color-collapsed: rgb(129, 161, 193);
  --list-marker-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --menu-background: #ECEFF4;
  --menu-border-color: #D8DEE9;
  --metadata-border-color: #E5E9F0;
  --metadata-divider-color: #E5E9F0;
  --metadata-input-text-color: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --metadata-label-text-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --metadata-label-text-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --metadata-property-box-shadow-focus: 0 0 0 2px #D8DEE9;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D8DEE9;
  --modal-background: white;
  --modal-border-color: #D8DEE9;
  --nav-collapse-icon-color: #4C566A;
  --nav-collapse-icon-color-collapsed: #4C566A;
  --nav-heading-color: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --nav-heading-color-collapsed: #4C566A;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --nav-heading-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --nav-item-background-selected: rgba(129, 161, 193, 0.15);
  --nav-item-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --nav-item-color-active: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --nav-item-color-highlighted: rgb(129, 161, 193);
  --nav-item-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --nav-item-color-selected: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --nav-tag-color: #4C566A;
  --nav-tag-color-active: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --nav-tag-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --nord-color-base-00: white;
  --nord-color-base-05: white;
  --nord-color-base-10: #ECEFF4;
  --nord-color-base-100: #2E3440;
  --nord-color-base-20: #ECEFF4;
  --nord-color-base-25: #E5E9F0;
  --nord-color-base-30: #E5E9F0;
  --nord-color-base-35: #D8DEE9;
  --nord-color-base-40: #D8DEE9;
  --nord-color-base-50: #4C566A;
  --nord-color-base-60: #434C5E;
  --nord-color-base-70: #3B4252;
  --nordic-darken: 0%;
  --pdf-background: white;
  --pdf-page-background: white;
  --pdf-sidebar-background: white;
  --pill-border-color: #E5E9F0;
  --pill-border-color-hover: #D8DEE9;
  --pill-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --pill-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --pill-color-remove: #4C566A;
  --pill-color-remove-hover: rgb(129, 161, 193);
  --prompt-background: white;
  --prompt-border-color: #D8DEE9;
  --raised-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --ribbon-background: #ECEFF4;
  --ribbon-background-collapsed: white;
  --search-clear-button-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --search-icon-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --search-result-background: white;
  --secondary: var(--text-accent);
  --setting-group-heading-color: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --setting-items-background: #ECEFF4;
  --setting-items-border-color: #E5E9F0;
  --slider-thumb-border-color: #D8DEE9;
  --slider-track-background: #E5E9F0;
  --statblock-background-color: rgba(0, 0, 0, 0.05);
  --statblock-bar-color: #5e81ac;
  --statblock-border-color: #eceff4;
  --statblock-box-shadow-color: #eceff4;
  --statblock-font-color: #81a1c1;
  --statblock-heading-font-color: #5e81ac;
  --statblock-image-border-color: #81a1c1;
  --statblock-primary-color: #81a1c1;
  --statblock-property-font-color: #81a1c1;
  --statblock-property-name-font-color: #5e81ac;
  --statblock-rule-color: #5e81ac;
  --statblock-section-heading-border-color: #81a1c1;
  --statblock-section-heading-font-color: #5e81ac;
  --status-bar-background: #ECEFF4;
  --status-bar-border-color: #E5E9F0;
  --status-bar-text-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --suggestion-background: white;
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #61b1bf;
  --sync-avatar-color-6: #6199bf;
  --sync-avatar-color-7: #958eb4;
  --sync-avatar-color-8: #b48ead;
  --tab-background-active: white;
  --tab-container-background: #ECEFF4;
  --tab-curve: 0;
  --tab-divider-color: #D8DEE9;
  --tab-outline-color: rgb(129, 161, 193);
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-switcher-background: #ECEFF4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(129, 161, 193);
  --tab-text-color: #4C566A;
  --tab-text-color-active: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --tab-text-color-focused: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --tab-text-color-focused-active: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --tab-text-color-focused-active-current: #81a1c1;
  --tab-text-color-focused-highlighted: rgb(129, 161, 193);
  --table-add-button-border-color: #E5E9F0;
  --table-background: rgba(255, 255, 255, 0.05);
  --table-border-color: rgba(0, 0, 0, 0.5);
  --table-drag-handle-background-active: rgb(146, 174, 201);
  --table-drag-handle-color: #4C566A;
  --table-header-background: rgba(0, 0, 0, 0.25);
  --table-header-background-hover: rgba(255, 255, 255, 0.1);
  --table-header-border-color: rgba(0, 0, 0, 0.5);
  --table-header-color: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --table-header-font: "Norwester";
  --table-row-alt-background: rgba(0, 0, 0, 0.05);
  --table-row-alt-background-hover: rgba(255, 255, 255, 0.1);
  --table-row-background-hover: rgba(255, 255, 255, 0.1);
  --table-selection: rgba(129, 161, 193, 0.1);
  --table-selection-border-color: rgb(146, 174, 201);
  --tag-background: rgba(129, 161, 193, 0.1);
  --tag-background-hover: rgba(129, 161, 193, 0.2);
  --tag-border-color: rgba(129, 161, 193, 0.15);
  --tag-border-color-hover: rgba(129, 161, 193, 0.15);
  --tag-color: rgb(129, 161, 193);
  --tag-color-hover: rgb(129, 161, 193);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(129, 161, 193);
  --text-accent-hover: rgb(159, 186, 209);
  --text-error: #bf616a;
  --text-faint: #4C566A;
  --text-highlight-bg: rgb(129, 161, 193);
  --text-muted: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --text-normal: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --text-selection: rgba(129, 161, 193, 0.2);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #ECEFF4;
  --titlebar-background-focused: white;
  --titlebar-border-color: #E5E9F0;
  --titlebar-text-color: color-mix(in srgb, rgb(129, 161, 193), #000 20%);
  --titlebar-text-color-focused: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --vault-profile-color: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --vault-profile-color-hover: color-mix(in srgb, rgb(129, 161, 193), #000 45%);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 239, 244);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 239, 244);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 233, 240);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 239, 244);
  border-left-color: rgb(229, 233, 240);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body div#quartz-root {
  color: color(srgb 0.27731 0.3465 0.41569);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body .page article p > em, em {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body .page article p > i, i {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body .page article p > strong, strong {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body .text-highlight {
  background-color: rgb(129, 161, 193);
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body del {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration: line-through color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body p {
  color: color(srgb 0.40336 0.504 0.60464);
  outline: color(srgb 0.40336 0.504 0.60464) none 0px;
  text-decoration: color(srgb 0.40336 0.504 0.60464);
  text-decoration-color: color(srgb 0.40336 0.504 0.60464);
}`,
    links: `body a.external, footer a {
  color: rgb(129, 161, 193);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 161, 193);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal.broken {
  color: rgb(129, 161, 193);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgba(129, 161, 193, 0.3);
  text-decoration-color: rgba(129, 161, 193, 0.3);
}`,
    lists: `body dd {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body dt {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body ol > li {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body ol.overflow {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body ul > li {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body ul.overflow {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
}

body blockquote {
  background-color: rgb(236, 239, 244);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body table {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.125px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body tr {
  background-color: rgba(0, 0, 0, 0.25);
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body pre > code, pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}

body pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body figcaption {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body img {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body video {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    embeds: `body .file-embed {
  background-color: rgb(236, 239, 244);
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
}

body .footnotes {
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .transclude {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: rgb(144, 174, 201);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body .transclude-inner {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: rgb(144, 174, 201);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.40336 0.504 0.60464);
  text-decoration: line-through color(srgb 0.40336 0.504 0.60464);
  text-decoration-color: color(srgb 0.40336 0.504 0.60464);
}

body input[type=checkbox] {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

body .callout > .callout-content {
  padding-left: 10px;
  padding-right: 10px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 97, 177, 191;
  background-color: rgba(97, 177, 191, 0.1);
  border-bottom-color: rgba(97, 177, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 177, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 177, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 177, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 149, 142, 180;
  background-color: rgba(149, 142, 180, 0.1);
  border-bottom-color: rgba(149, 142, 180, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(149, 142, 180, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(149, 142, 180, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(149, 142, 180, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 97, 153, 191;
  background-color: rgba(97, 153, 191, 0.1);
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 97, 153, 191;
  background-color: rgba(97, 153, 191, 0.1);
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 135, 112, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(208, 135, 112, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(208, 135, 112, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(163, 190, 140, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(163, 190, 140, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(163, 190, 140, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 97, 177, 191;
  background-color: rgba(97, 177, 191, 0.1);
  border-bottom-color: rgba(97, 177, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 177, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 177, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 177, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 97, 153, 191;
  background-color: rgba(97, 153, 191, 0.1);
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 135, 112, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(208, 135, 112, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(208, 135, 112, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(129, 161, 193);
}

body h1 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

body h2 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

body h2.page-title, h2.page-title a {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

body h3 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

body h4 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

body h5 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

body h6 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

body hr {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
}`,
    scrollbars: `body .callout {
  --callout-color: 97, 153, 191;
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.40336 0.504 0.60464);
  text-decoration: color(srgb 0.40336 0.504 0.60464);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.40336 0.504 0.60464);
  text-decoration: color(srgb 0.40336 0.504 0.60464);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.40336 0.504 0.60464);
  text-decoration: color(srgb 0.40336 0.504 0.60464);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    footer: `body footer {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.40336 0.504 0.60464);
}

body footer ul li a {
  color: color(srgb 0.40336 0.504 0.60464);
  text-decoration: color(srgb 0.40336 0.504 0.60464);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.40336 0.504 0.60464);
  text-decoration: color(srgb 0.40336 0.504 0.60464);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body li.section-li > .section .meta {
  color: color(srgb 0.40336 0.504 0.60464);
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.40336 0.504 0.60464);
  text-decoration: color(srgb 0.40336 0.504 0.60464);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}

body .darkmode svg {
  color: color(srgb 0.40336 0.504 0.60464);
  stroke: color(srgb 0.40336 0.504 0.60464);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}

body .breadcrumb-element p {
  color: rgb(76, 86, 106);
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body .metadata {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.40336 0.504 0.60464);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(236, 239, 244);
}

body .page-header h2.page-title {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body abbr {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration: underline dotted color(srgb 0.27731 0.3465 0.41569);
}

body details {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}

body kbd {
  background-color: rgb(236, 239, 244);
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

body progress {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

body sub {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body summary {
  color: color(srgb 0.27731 0.3465 0.41569);
}

body sup {
  color: color(srgb 0.27731 0.3465 0.41569);
}`,
  },
};
