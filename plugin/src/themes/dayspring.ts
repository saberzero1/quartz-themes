import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dayspring",
    modes: ["light"],
    variations: [],
    fonts: ["crimson-pro", "figtree"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 80;
  --accent-l: 45%;
  --accent-s: 45%;
  --alpha-background: rgba(183, 179, 159, 0.2);
  --background-modifier-active-hover: rgba(132, 166, 63, 0.1);
  --background-modifier-border: rgb(217, 215, 206);
  --background-modifier-border-focus: rgb(166, 162, 140);
  --background-modifier-border-hover: rgb(195, 192, 177);
  --background-modifier-error: rgb(185, 39, 73);
  --background-modifier-error-hover: rgb(185, 39, 73);
  --background-modifier-error-rgb: 186, 39, 74;
  --background-modifier-form-field: rgb(246, 246, 243);
  --background-modifier-form-field-hover: rgb(246, 246, 243);
  --background-modifier-success: rgb(132, 166, 63);
  --background-modifier-success-rgb: 132, 166, 63;
  --background-primary: rgb(242, 241, 238);
  --background-primary-alt: rgb(242, 241, 238);
  --background-secondary: rgb(246, 246, 243);
  --background-secondary-alt: rgb(244, 243, 241);
  --bases-cards-background: rgb(242, 241, 238);
  --bases-cards-cover-background: rgb(242, 241, 238);
  --bases-cards-font-size: 0.8em;
  --bases-cards-shadow: 0 0 0 1px rgb(217, 215, 206);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(195, 192, 177);
  --bases-embed-border-color: rgb(217, 215, 206);
  --bases-group-heading-property-color: rgb(130, 125, 100);
  --bases-group-heading-property-size: 13px;
  --bases-group-heading-value-size: 0.8em;
  --bases-table-border-color: rgb(217, 215, 206);
  --bases-table-cell-background-active: rgb(242, 241, 238);
  --bases-table-cell-background-disabled: rgb(242, 241, 238);
  --bases-table-cell-background-selected: rgba(132, 166, 63, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(166, 162, 140);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(147, 185, 70);
  --bases-table-font-size: 0.8em;
  --bases-table-group-background: rgb(242, 241, 238);
  --bases-table-header-background: rgb(242, 241, 238);
  --bases-table-header-color: rgb(130, 125, 100);
  --bases-table-summary-background: rgb(242, 241, 238);
  --blockquote-background-color: rgba(183, 179, 159, 0.2);
  --blockquote-border-color: rgb(121, 53, 113);
  --blockquote-border-thickness: 0;
  --blur-background: color-mix(in srgb, rgb(242, 241, 238) 65%, transparent) linear-gradient(rgb(242, 241, 238), color-mix(in srgb, rgb(242, 241, 238) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: rgb(67, 132, 163);
  --callout-bug: 186, 39, 74;
  --callout-default: 67, 132, 163;
  --callout-error: 186, 39, 74;
  --callout-example: 121, 53, 113;
  --callout-fail: 186, 39, 74;
  --callout-info: 67, 132, 163;
  --callout-question: 235, 136, 55;
  --callout-success: 132, 166, 63;
  --callout-todo: 67, 132, 163;
  --callout-warning: 235, 136, 55;
  --canvas-background: rgb(242, 241, 238);
  --canvas-card-label-color: rgb(195, 192, 177);
  --canvas-color-1: 186, 39, 74;
  --canvas-color-2: 235, 136, 55;
  --canvas-color-4: 132, 166, 63;
  --canvas-color-6: 121, 53, 113;
  --canvas-dot-pattern: rgb(217, 215, 206);
  --caret-color: rgb(52, 50, 40);
  --checkbox-border-color: rgb(195, 192, 177);
  --checkbox-border-color-hover: rgb(130, 125, 100);
  --checkbox-color: rgb(147, 185, 70);
  --checkbox-color-hover: rgb(157, 192, 89);
  --checkbox-marker-color: rgb(242, 241, 238);
  --checklist-done-color: rgb(130, 125, 100);
  --code-background: rgba(183, 179, 159, 0.2);
  --code-block-background-color: rgba(183, 179, 159, 0.2);
  --code-border-color: rgb(217, 215, 206);
  --code-comment: rgb(195, 192, 177);
  --code-function: rgb(235, 136, 55);
  --code-important: rgb(235, 136, 55);
  --code-keyword: rgb(185, 39, 73);
  --code-normal: rgb(235, 136, 55);
  --code-operator: rgb(185, 39, 73);
  --code-property: rgb(67, 132, 163);
  --code-punctuation: rgb(130, 125, 100);
  --code-size: 0.8em;
  --code-string: rgb(132, 166, 63);
  --code-tag: rgb(185, 39, 73);
  --code-value: rgb(121, 53, 113);
  --codeFont: var(--font-text);
  --collapse-icon-color: rgb(195, 192, 177);
  --collapse-icon-color-collapsed: rgb(132, 166, 63);
  --color-accent: rgb(132, 166, 63);
  --color-accent-1: rgb(147, 185, 70);
  --color-accent-2: rgb(157, 192, 89);
  --color-accent-hsl: 80, 45%, 45%;
  --color-base-00: rgb(246, 246, 243);
  --color-base-05: rgb(244, 243, 241);
  --color-base-10: rgb(242, 241, 238);
  --color-base-100: rgb(52, 50, 40);
  --color-base-20: rgb(235, 234, 229);
  --color-base-25: rgb(231, 229, 223);
  --color-base-30: rgb(217, 215, 206);
  --color-base-35: rgb(195, 192, 177);
  --color-base-40: rgb(166, 162, 140);
  --color-base-50: rgb(144, 139, 111);
  --color-base-60: rgb(130, 125, 100);
  --color-base-70: rgb(101, 97, 78);
  --color-blue: rgb(67, 132, 163);
  --color-blue-rgb: 67, 132, 163;
  --color-green: rgb(132, 166, 63);
  --color-green-rgb: 132, 166, 63;
  --color-orange: rgb(235, 136, 55);
  --color-orange-rgb: 235, 136, 55;
  --color-pink: rgb(223, 104, 131);
  --color-purple: rgb(121, 53, 113);
  --color-purple-rgb: 121, 53, 113;
  --color-red: rgb(185, 39, 73);
  --color-red-rgb: 186, 39, 74;
  --color-yellow: rgb(252, 186, 64);
  --color-yellow-lightest: rgba(249, 222, 164, 0.753);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(217, 215, 206);
  --divider-color-hover: rgb(147, 185, 70);
  --dropdown-background: rgb(246, 246, 243);
  --dropdown-background-hover: rgb(242, 241, 238);
  --embed-background: rgba(183, 179, 159, 0.2);
  --embed-block-shadow-hover: 0 0 0 1px rgb(217, 215, 206), inset 0 0 0 1px rgb(217, 215, 206);
  --embed-border-end: 0;
  --embed-border-left: 0;
  --embed-border-start: 0;
  --embed-padding: 16px 32px 16px
		48px;
  --file-header-background: rgb(242, 241, 238);
  --file-header-background-focused: rgb(242, 241, 238);
  --file-header-font: '??', figtree, metropolis, raleway, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 14px;
  --file-margins: 24px 48px;
  --flair-background: rgb(246, 246, 243);
  --flair-color: rgb(52, 50, 40);
  --font-interface: '??', figtree, metropolis, raleway, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: figtree, metropolis, raleway;
  --font-mermaid: '??', figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', figtree, metropolis, raleway, 'Arial';
  --font-serif: "Crimson Pro";
  --font-small: 0.9em;
  --font-smaller: 0.8em;
  --font-smallest: 0.7em;
  --font-text: '??', figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: figtree, metropolis, raleway;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: rgb(217, 215, 206);
  --footnote-id-color: rgb(130, 125, 100);
  --footnote-id-color-no-occurrences: rgb(195, 192, 177);
  --footnote-size: 0.9em;
  --graph-line: rgb(195, 192, 177);
  --graph-node: rgb(130, 125, 100);
  --graph-node-attachment: rgb(252, 186, 64);
  --graph-node-focused: rgb(132, 166, 63);
  --graph-node-tag: rgb(132, 166, 63);
  --graph-node-unresolved: rgb(195, 192, 177);
  --graph-text: rgb(52, 50, 40);
  --gray: var(--text-muted);
  --h1-color: rgb(67, 132, 163);
  --h1-line-height: 1.3;
  --h1-size: 2.5em;
  --h1-weight: 600;
  --h2-color: rgb(67, 132, 163);
  --h2-line-height: 1.3;
  --h2-size: 2em;
  --h2-weight: 500;
  --h3-color: rgb(67, 132, 163);
  --h3-size: 1.75em;
  --h3-weight: 500;
  --h4-color: rgb(67, 132, 163);
  --h4-line-height: 1.3;
  --h4-size: 1.5em;
  --h4-weight: 500;
  --h5-color: rgb(67, 132, 163);
  --h5-line-height: 1.3;
  --h5-size: 1.25em;
  --h5-weight: 500;
  --h6-color: rgb(195, 192, 177);
  --h6-line-height: 0;
  --h6-size: 0.7em;
  --headerFont: var(--font-text);
  --heading-color: rgb(67, 132, 163);
  --heading-formatting: rgb(195, 192, 177);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(217, 215, 206);
  --icon-color: rgb(130, 125, 100);
  --icon-color-active: rgb(132, 166, 63);
  --icon-color-focused: rgb(52, 50, 40);
  --icon-color-hover: rgb(130, 125, 100);
  --inline-title-color: rgb(67, 132, 163);
  --inline-title-line-height: 1.3;
  --inline-title-size: 2.5em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(195, 192, 177);
  --input-placeholder-color: rgb(195, 192, 177);
  --interactive-accent: rgb(147, 185, 70);
  --interactive-accent-hover: rgb(157, 192, 89);
  --interactive-accent-hsl: 80, 45%, 45%;
  --interactive-hover: rgb(242, 241, 238);
  --interactive-normal: rgb(246, 246, 243);
  --italic-color: rgb(121, 53, 113);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(132, 166, 63);
  --link-color-hover: rgb(157, 192, 89);
  --link-external-color: rgb(132, 166, 63);
  --link-external-color-hover: rgb(157, 192, 89);
  --link-unresolved-color: rgb(132, 166, 63);
  --link-unresolved-decoration-color: rgba(132, 166, 63, 0.3);
  --list-marker-color: rgb(195, 192, 177);
  --list-marker-color-collapsed: rgb(132, 166, 63);
  --list-marker-color-hover: rgb(130, 125, 100);
  --menu-background: rgb(246, 246, 243);
  --menu-border-color: rgb(195, 192, 177);
  --metadata-border-color: rgb(217, 215, 206);
  --metadata-divider-color: rgb(217, 215, 206);
  --metadata-input-font: '??', figtree, metropolis, raleway, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.8em;
  --metadata-input-text-color: rgb(52, 50, 40);
  --metadata-label-font: '??', figtree, metropolis, raleway, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.8em;
  --metadata-label-text-color: rgb(130, 125, 100);
  --metadata-label-text-color-hover: rgb(130, 125, 100);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(166, 162, 140);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(195, 192, 177);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: rgb(242, 241, 238);
  --modal-border-color: rgb(166, 162, 140);
  --nav-collapse-icon-color: rgb(195, 192, 177);
  --nav-collapse-icon-color-collapsed: rgb(195, 192, 177);
  --nav-heading-color: rgb(52, 50, 40);
  --nav-heading-color-collapsed: rgb(195, 192, 177);
  --nav-heading-color-collapsed-hover: rgb(130, 125, 100);
  --nav-heading-color-hover: rgb(52, 50, 40);
  --nav-item-background-active: rgb(132, 166, 63);
  --nav-item-background-selected: rgba(132, 166, 63, 0.15);
  --nav-item-color: rgb(130, 125, 100);
  --nav-item-color-active: rgb(246, 246, 243);
  --nav-item-color-highlighted: rgb(132, 166, 63);
  --nav-item-color-hover: rgb(52, 50, 40);
  --nav-item-color-selected: rgb(52, 50, 40);
  --nav-item-size: 15px;
  --nav-tag-color: rgb(195, 192, 177);
  --nav-tag-color-active: rgb(130, 125, 100);
  --nav-tag-color-hover: rgb(130, 125, 100);
  --pdf-background: rgb(242, 241, 238);
  --pdf-page-background: rgb(242, 241, 238);
  --pdf-sidebar-background: rgb(242, 241, 238);
  --pill-border-color: rgb(217, 215, 206);
  --pill-border-color-hover: rgb(195, 192, 177);
  --pill-color: rgb(130, 125, 100);
  --pill-color-hover: rgb(52, 50, 40);
  --pill-color-remove: rgb(195, 192, 177);
  --pill-color-remove-hover: rgb(132, 166, 63);
  --prompt-background: rgb(242, 241, 238);
  --prompt-border-color: rgb(166, 162, 140);
  --raised-background: color-mix(in srgb, rgb(242, 241, 238) 65%, transparent) linear-gradient(rgb(242, 241, 238), color-mix(in srgb, rgb(242, 241, 238) 65%, transparent));
  --ribbon-background: rgb(246, 246, 243);
  --ribbon-background-collapsed: rgb(242, 241, 238);
  --search-clear-button-color: rgb(130, 125, 100);
  --search-icon-color: rgb(130, 125, 100);
  --search-result-background: rgb(242, 241, 238);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(52, 50, 40);
  --setting-items-background: rgb(242, 241, 238);
  --setting-items-border-color: rgb(217, 215, 206);
  --slider-thumb-border-color: rgb(195, 192, 177);
  --slider-track-background: rgb(217, 215, 206);
  --status-bar-background: rgb(246, 246, 243);
  --status-bar-border-color: rgb(217, 215, 206);
  --status-bar-font-size: 13px;
  --status-bar-text-color: rgb(130, 125, 100);
  --suggestion-background: rgb(242, 241, 238);
  --sync-avatar-color-1: rgb(185, 39, 73);
  --sync-avatar-color-2: rgb(235, 136, 55);
  --sync-avatar-color-3: rgb(252, 186, 64);
  --sync-avatar-color-4: rgb(132, 166, 63);
  --sync-avatar-color-6: rgb(67, 132, 163);
  --sync-avatar-color-7: rgb(121, 53, 113);
  --sync-avatar-color-8: rgb(223, 104, 131);
  --tab-background-active: rgb(242, 241, 238);
  --tab-container-background: rgb(246, 246, 243);
  --tab-divider-color: rgb(195, 192, 177);
  --tab-font-size: 14px;
  --tab-outline-color: rgb(217, 215, 206);
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: rgb(246, 246, 243);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(246, 246, 243), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(132, 166, 63);
  --tab-text-color: rgb(195, 192, 177);
  --tab-text-color-active: rgb(130, 125, 100);
  --tab-text-color-focused: rgb(130, 125, 100);
  --tab-text-color-focused-active: rgb(130, 125, 100);
  --tab-text-color-focused-active-current: rgb(52, 50, 40);
  --tab-text-color-focused-highlighted: rgb(132, 166, 63);
  --table-add-button-border-color: rgb(217, 215, 206);
  --table-border-color: rgb(217, 215, 206);
  --table-drag-handle-background-active: rgb(147, 185, 70);
  --table-drag-handle-color: rgb(195, 192, 177);
  --table-header-background: rgb(235, 234, 229);
  --table-header-background-hover: rgb(235, 234, 229);
  --table-header-border-color: rgb(217, 215, 206);
  --table-header-color: rgb(67, 132, 163);
  --table-header-size: 400;
  --table-header-weight: 500;
  --table-selection: rgba(132, 166, 63, 0.1);
  --table-selection-border-color: rgb(147, 185, 70);
  --tag-background: rgba(132, 166, 63, 0.1);
  --tag-background-hover: rgba(132, 166, 63, 0.2);
  --tag-border-color: rgba(132, 166, 63, 0.15);
  --tag-border-color-hover: rgba(132, 166, 63, 0.15);
  --tag-color: rgb(132, 166, 63);
  --tag-color-hover: rgb(132, 166, 63);
  --tag-size: 0.8em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(132, 166, 63);
  --text-accent-hover: rgb(157, 192, 89);
  --text-error: rgb(185, 39, 73);
  --text-faint: rgb(195, 192, 177);
  --text-highlight-bg: rgba(249, 222, 164, 0.753);
  --text-muted: rgb(130, 125, 100);
  --text-normal: rgb(52, 50, 40);
  --text-selection: rgba(132, 166, 63, 0.2);
  --text-success: rgb(132, 166, 63);
  --text-warning: rgb(235, 136, 55);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(244, 243, 241);
  --titlebar-background-focused: rgb(244, 243, 241);
  --titlebar-border-color: rgb(217, 215, 206);
  --titlebar-text-color: rgb(130, 125, 100);
  --titlebar-text-color-focused: rgb(52, 50, 40);
  --vault-profile-color: rgb(52, 50, 40);
  --vault-profile-color-hover: rgb(52, 50, 40);
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 246, 243);
  color: rgb(52, 50, 40);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 241, 238);
  color: rgb(52, 50, 40);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 246, 243);
  color: rgb(52, 50, 40);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(217, 215, 206);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 246, 243);
  border-left-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
}

body div#quartz-root {
  background-color: rgb(242, 241, 238);
  color: rgb(52, 50, 40);
}`,
    typography: `body .page article p > b, b {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 132, 163) none 0px;
  text-decoration: rgb(67, 132, 163);
  text-decoration-color: rgb(67, 132, 163);
}

body .page article p > em, em {
  color: rgb(121, 53, 113);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(121, 53, 113) none 0px;
  text-decoration: rgb(121, 53, 113);
  text-decoration-color: rgb(121, 53, 113);
}

body .page article p > i, i {
  color: rgb(121, 53, 113);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(121, 53, 113) none 0px;
  text-decoration: rgb(121, 53, 113);
  text-decoration-color: rgb(121, 53, 113);
}

body .page article p > strong, strong {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 132, 163) none 0px;
  text-decoration: rgb(67, 132, 163);
  text-decoration-color: rgb(67, 132, 163);
}

body .text-highlight {
  background-color: rgba(249, 222, 164, 0.753);
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body del {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration: line-through rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body p {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(130, 125, 100) none 0px;
  text-decoration: rgb(130, 125, 100);
  text-decoration-color: rgb(130, 125, 100);
}`,
    links: `body a.external, footer a {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration: underline rgb(132, 166, 63);
  text-decoration-color: rgb(132, 166, 63);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration: underline rgb(132, 166, 63);
  text-decoration-color: rgb(132, 166, 63);
}

body a.internal.broken {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration: underline rgba(132, 166, 63, 0.3);
  text-decoration-color: rgba(132, 166, 63, 0.3);
}`,
    lists: `body dd {
  color: rgb(52, 50, 40);
}

body dt {
  color: rgb(52, 50, 40);
  font-weight: 300;
}

body ol > li {
  color: rgb(52, 50, 40);
}

body ol.overflow {
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body ul > li {
  color: rgb(52, 50, 40);
}

body ul.overflow {
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(195, 192, 177);
  text-decoration: rgb(195, 192, 177);
}

body blockquote {
  background-color: rgba(183, 179, 159, 0.2);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body table {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 191.547px;
}

body td {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
  font-weight: 300;
}

body th {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(67, 132, 163);
  font-weight: 500;
}

body tr {
  background-color: rgb(235, 234, 229);
}`,
    code: `body code {
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
  color: rgb(235, 136, 55);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
}

body pre > code > [data-line] {
  border-left-color: rgb(235, 136, 55);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 136, 55);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
}

body pre > code, pre:has(> code) {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
}

body pre:has(> code) {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
}`,
    images: `body audio {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body figcaption {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body img {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body video {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}`,
    embeds: `body .file-embed {
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
}

body .footnotes {
  border-top-color: rgb(52, 50, 40);
  color: rgb(52, 50, 40);
}

body .transclude {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(52, 50, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(52, 50, 40);
  border-left-width: 0px;
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .transclude-inner {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(52, 50, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(52, 50, 40);
  border-left-width: 0px;
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: start;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(130, 125, 100);
  text-decoration: line-through rgb(130, 125, 100);
  text-decoration-color: rgb(130, 125, 100);
}

body input[type=checkbox] {
  border-bottom-color: rgb(195, 192, 177);
  border-left-color: rgb(195, 192, 177);
  border-right-color: rgb(195, 192, 177);
  border-top-color: rgb(195, 192, 177);
}

body li.task-list-item[data-task='!'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='*'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='-'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='/'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='>'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='?'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='I'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='S'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='b'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='c'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='d'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='f'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='i'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='k'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='l'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='p'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='u'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body li.task-list-item[data-task='w'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(67, 132, 163);
  border-left-color: rgb(67, 132, 163);
  border-right-color: rgb(67, 132, 163);
  border-top-color: rgb(67, 132, 163);
}

body .callout[data-callout="abstract"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 186, 39, 74;
  background-color: rgba(186, 39, 74, 0.1);
  border-bottom-color: rgba(186, 39, 74, 0.25);
  border-left-color: rgba(186, 39, 74, 0.25);
  border-right-color: rgba(186, 39, 74, 0.25);
  border-top-color: rgba(186, 39, 74, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 186, 39, 74;
  background-color: rgba(186, 39, 74, 0.1);
  border-bottom-color: rgba(186, 39, 74, 0.25);
  border-left-color: rgba(186, 39, 74, 0.25);
  border-right-color: rgba(186, 39, 74, 0.25);
  border-top-color: rgba(186, 39, 74, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 121, 53, 113;
  background-color: rgba(121, 53, 113, 0.1);
  border-bottom-color: rgba(121, 53, 113, 0.25);
  border-left-color: rgba(121, 53, 113, 0.25);
  border-right-color: rgba(121, 53, 113, 0.25);
  border-top-color: rgba(121, 53, 113, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 186, 39, 74;
  background-color: rgba(186, 39, 74, 0.1);
  border-bottom-color: rgba(186, 39, 74, 0.25);
  border-left-color: rgba(186, 39, 74, 0.25);
  border-right-color: rgba(186, 39, 74, 0.25);
  border-top-color: rgba(186, 39, 74, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 132, 166, 63;
  background-color: rgba(132, 166, 63, 0.1);
  border-bottom-color: rgba(132, 166, 63, 0.25);
  border-left-color: rgba(132, 166, 63, 0.25);
  border-right-color: rgba(132, 166, 63, 0.25);
  border-top-color: rgba(132, 166, 63, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 132, 166, 63;
  background-color: rgba(132, 166, 63, 0.1);
  border-bottom-color: rgba(132, 166, 63, 0.25);
  border-left-color: rgba(132, 166, 63, 0.25);
  border-right-color: rgba(132, 166, 63, 0.25);
  border-top-color: rgba(132, 166, 63, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 235, 136, 55;
  background-color: rgba(235, 136, 55, 0.1);
  border-bottom-color: rgba(235, 136, 55, 0.25);
  border-left-color: rgba(235, 136, 55, 0.25);
  border-right-color: rgba(235, 136, 55, 0.25);
  border-top-color: rgba(235, 136, 55, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(246, 246, 243);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(166, 162, 140);
  border-left-color: rgb(166, 162, 140);
  border-right-color: rgb(166, 162, 140);
  border-top-color: rgb(166, 162, 140);
}

body .search > .search-container > .search-space > * {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(52, 50, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(52, 50, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(52, 50, 40);
  font-weight: 300;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(166, 162, 140);
  border-left-color: rgb(166, 162, 140);
  border-right-color: rgb(166, 162, 140);
  border-top-color: rgb(166, 162, 140);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 246, 243);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  color: rgb(52, 50, 40);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(52, 50, 40);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(132, 166, 63, 0.1);
  border-bottom-color: rgba(132, 166, 63, 0.15);
  border-bottom-left-radius: 25.6px;
  border-bottom-right-radius: 25.6px;
  border-left-color: rgba(132, 166, 63, 0.15);
  border-right-color: rgba(132, 166, 63, 0.15);
  border-top-color: rgba(132, 166, 63, 0.15);
  border-top-left-radius: 25.6px;
  border-top-right-radius: 25.6px;
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

body a.internal.tag-link::before {
  color: rgb(132, 166, 63);
}

body h1 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(195, 192, 177);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
}`,
    scrollbars: `body .callout {
  --callout-color: 67, 132, 163;
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  text-decoration: rgb(130, 125, 100);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  text-decoration: rgb(130, 125, 100);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  text-decoration: rgb(130, 125, 100);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(132, 166, 63);
  border-bottom-color: rgb(246, 246, 243);
  border-left-color: rgb(246, 246, 243);
  border-right-color: rgb(246, 246, 243);
  border-top-color: rgb(246, 246, 243);
  color: rgb(246, 246, 243);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
}`,
    footer: `body footer {
  background-color: rgb(246, 246, 243);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(130, 125, 100);
  text-decoration: rgb(130, 125, 100);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  color: rgb(52, 50, 40);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 125, 100);
  text-decoration: rgb(130, 125, 100);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body li.section-li > .section .meta {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 125, 100);
  text-decoration: rgb(130, 125, 100);
}

body ul.section-ul {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
}

body .darkmode svg {
  color: rgb(130, 125, 100);
  stroke: rgb(130, 125, 100);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
}

body .breadcrumb-element p {
  color: rgb(195, 192, 177);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
  color: rgb(235, 136, 55);
}

body .metadata {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(246, 246, 243);
}

body .page-header h2.page-title {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(52, 50, 40);
  text-decoration: underline dotted rgb(52, 50, 40);
}

body details {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body input[type=text] {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
  color: rgb(235, 136, 55);
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

body sub {
  color: rgb(52, 50, 40);
  font-size: 11.2px;
}

body summary {
  color: rgb(52, 50, 40);
  font-weight: 300;
}

body sup {
  color: rgb(52, 50, 40);
  font-size: 11.2px;
}`,
  },
};
