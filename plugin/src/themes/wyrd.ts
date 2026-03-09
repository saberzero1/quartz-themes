import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wyrd",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["architects-daughter", "neucha", "space-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 270;
  --accent-l: 58.8%;
  --accent-s: 65%;
  --background-modifier-active-hover: rgba(150, 82, 218, 0.15);
  --background-modifier-border: rgb(255, 157, 0);
  --background-modifier-border-focus: rgb(166, 154, 177);
  --background-modifier-border-hover: rgb(128, 117, 138);
  --background-modifier-error: rgb(226, 18, 88);
  --background-modifier-error-hover: rgb(226, 18, 88);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: rgb(51, 46, 56);
  --background-modifier-form-field-hover: rgb(51, 46, 56);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: rgba(61, 165, 9, 0);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: rgb(38, 34, 42);
  --background-primary-alt: rgb(46, 41, 50);
  --background-secondary: rgb(38, 34, 42);
  --background-secondary-alt: rgb(89, 82, 96);
  --bases-cards-background: rgb(38, 34, 42);
  --bases-cards-cover-background: rgb(46, 41, 50);
  --bases-cards-shadow: 0 0 0 1px rgb(255, 157, 0);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(128, 117, 138);
  --bases-embed-border-color: rgb(255, 157, 0);
  --bases-group-heading-property-color: rgb(186, 179, 193);
  --bases-table-border-color: rgb(255, 157, 0);
  --bases-table-cell-background-active: rgb(38, 34, 42);
  --bases-table-cell-background-disabled: rgb(46, 41, 50);
  --bases-table-cell-background-selected: rgba(150, 82, 218, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(166, 154, 177);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(150, 82, 218);
  --bases-table-group-background: rgb(46, 41, 50);
  --bases-table-header-background: rgb(38, 34, 42);
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: rgb(186, 179, 193);
  --bases-table-summary-background: rgb(38, 34, 42);
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-border-color: rgb(150, 82, 218);
  --blur-background: color-mix(in srgb, rgb(89, 82, 96) 65%, transparent) linear-gradient(rgb(89, 82, 96), color-mix(in srgb, rgb(89, 82, 96) 65%, transparent));
  --bold-color: rgb(221, 120, 95);
  --callout-bug: 228, 18, 88;
  --callout-error: 228, 18, 88;
  --callout-fail: 228, 18, 88;
  --callout-success: 51, 138, 7;
  --canvas-background: rgb(38, 34, 42);
  --canvas-card-label-color: rgb(166, 154, 177);
  --canvas-color-1: 228, 18, 88;
  --canvas-color-4: 51, 138, 7;
  --canvas-dot-pattern: rgb(89, 82, 96);
  --caret-color: rgb(191, 185, 198);
  --checkbox-border-color: rgb(166, 154, 177);
  --checkbox-border-color-hover: rgb(186, 179, 193);
  --checkbox-color: rgb(150, 82, 218);
  --checkbox-color-hover: rgb(168, 120, 227);
  --checkbox-marker-color: rgb(38, 34, 42);
  --checklist-done-color: rgb(186, 179, 193);
  --code-background: rgb(46, 41, 50);
  --code-border-color: rgb(255, 157, 0);
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: rgb(166, 154, 177);
  --code-function: rgb(255, 157, 0);
  --code-important: rgb(236, 109, 19);
  --code-keyword: rgb(222, 18, 120);
  --code-normal: rgb(191, 185, 198);
  --code-operator: rgb(226, 18, 88);
  --code-property: rgba(0, 255, 234, 0);
  --code-punctuation: rgb(186, 179, 193);
  --code-string: rgba(61, 165, 9, 0);
  --code-tag: rgb(226, 18, 88);
  --code-value: rgb(150, 82, 218);
  --collapse-icon-color: rgb(166, 154, 177);
  --collapse-icon-color-collapsed: rgb(168, 120, 227);
  --color-accent: rgb(150, 82, 218);
  --color-accent-1: rgb(168, 120, 227);
  --color-accent-2: rgb(187, 152, 235);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: rgb(33, 30, 36);
  --color-base-10: rgb(38, 34, 42);
  --color-base-100: rgb(204, 199, 209);
  --color-base-20: rgb(46, 41, 50);
  --color-base-25: rgb(51, 46, 56);
  --color-base-30: rgb(89, 82, 96);
  --color-base-35: rgb(128, 117, 138);
  --color-base-40: rgb(166, 154, 177);
  --color-base-50: rgb(186, 179, 193);
  --color-base-60: rgb(191, 185, 198);
  --color-base-70: rgb(199, 193, 205);
  --color-blue: rgb(0, 111, 133);
  --color-cyan: rgba(0, 255, 234, 0);
  --color-green: rgba(61, 165, 9, 0);
  --color-green-rgb: 51, 138, 7;
  --color-orange: rgb(236, 109, 19);
  --color-pink: rgb(222, 18, 120);
  --color-purple: rgb(150, 82, 218);
  --color-red: rgb(226, 18, 88);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: rgb(255, 157, 0);
  --divider-color: rgb(255, 157, 0);
  --divider-color-hover: rgb(150, 82, 218);
  --dropdown-background: rgb(89, 82, 96);
  --dropdown-background-hover: rgb(128, 117, 138);
  --embed-block-shadow-hover: 0 0 0 1px rgb(255, 157, 0), inset 0 0 0 1px rgb(255, 157, 0);
  --embed-border-start: 2px solid rgb(150, 82, 218);
  --file-header-background: rgb(38, 34, 42);
  --file-header-background-focused: rgb(38, 34, 42);
  --file-header-font: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(89, 82, 96);
  --flair-color: rgb(191, 185, 198);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Neucha;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Space Mono";
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Neucha;
  --footnote-divider-color: rgb(255, 157, 0);
  --footnote-id-color: rgb(186, 179, 193);
  --footnote-id-color-no-occurrences: rgb(166, 154, 177);
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --graph-line: rgb(204, 126, 0);
  --graph-node: rgb(186, 179, 193);
  --graph-node-attachment: rgb(236, 109, 19);
  --graph-node-focused: rgb(255, 157, 0);
  --graph-node-tag: rgba(61, 165, 9, 0);
  --graph-node-unresolved: rgb(166, 154, 177);
  --graph-text: rgb(191, 185, 198);
  --h1-color: rgb(150, 82, 218);
  --h1-font: "Architects Daughter", Neucha;
  --h2-color: rgb(222, 18, 120);
  --h2-font: "Architects Daughter", Neucha;
  --h3-color: rgb(94, 51, 204);
  --h3-font: "Architects Daughter", Neucha;
  --h4-color: rgba(61, 165, 9, 0);
  --h4-font: "Architects Daughter", Neucha;
  --h5-color: rgb(0, 184, 122);
  --h5-font: "Architects Daughter", Neucha;
  --h6-color: rgb(0, 111, 133);
  --h6-font: "Architects Daughter", Neucha;
  --heading-formatting: rgb(186, 179, 193);
  --hr-color: rgb(255, 157, 0);
  --icon-color: rgb(186, 179, 193);
  --icon-color-active: rgb(168, 120, 227);
  --icon-color-focused: rgb(191, 185, 198);
  --icon-color-hover: rgb(186, 179, 193);
  --inline-title-color: rgb(150, 82, 218);
  --inline-title-font: "Architects Daughter", Neucha;
  --input-date-separator: rgb(166, 154, 177);
  --input-placeholder-color: rgb(166, 154, 177);
  --interactive-accent: rgb(150, 82, 218);
  --interactive-accent-hover: rgb(168, 120, 227);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: rgb(128, 117, 138);
  --interactive-normal: rgb(89, 82, 96);
  --italic-color: rgb(216, 75, 108);
  --link-color: rgb(255, 157, 0);
  --link-color-hover: rgb(255, 177, 51);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgba(0, 204, 187, 0);
  --link-external-color-hover: rgba(0, 255, 234, 0);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(189, 88, 15);
  --link-unresolved-color-hover: rgb(236, 109, 19);
  --link-unresolved-decoration-color: rgba(150, 82, 218, 0.5);
  --link-unresolved-opacity: 0.8;
  --list-marker-color: rgb(166, 154, 177);
  --list-marker-color-collapsed: rgb(168, 120, 227);
  --list-marker-color-hover: rgb(186, 179, 193);
  --menu-background: rgb(38, 34, 42);
  --menu-border-color: rgb(128, 117, 138);
  --metadata-border-color: rgb(255, 157, 0);
  --metadata-divider-color: rgb(255, 157, 0);
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-font: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(191, 185, 198);
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-font: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(186, 179, 193);
  --metadata-label-text-color-hover: rgb(186, 179, 193);
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(166, 154, 177);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(128, 117, 138);
  --modal-background: rgb(38, 34, 42);
  --modal-border-color: rgb(166, 154, 177);
  --nav-collapse-icon-color: rgb(166, 154, 177);
  --nav-collapse-icon-color-collapsed: rgb(166, 154, 177);
  --nav-heading-color: rgb(191, 185, 198);
  --nav-heading-color-collapsed: rgb(166, 154, 177);
  --nav-heading-color-collapsed-hover: rgb(186, 179, 193);
  --nav-heading-color-hover: rgb(191, 185, 198);
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: rgba(150, 82, 218, 0.15);
  --nav-item-color: rgb(186, 179, 193);
  --nav-item-color-active: rgb(191, 185, 198);
  --nav-item-color-highlighted: rgb(187, 152, 235);
  --nav-item-color-hover: rgb(191, 185, 198);
  --nav-item-color-selected: rgb(191, 185, 198);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(166, 154, 177);
  --nav-tag-color-active: rgb(186, 179, 193);
  --nav-tag-color-hover: rgb(186, 179, 193);
  --pdf-background: rgb(38, 34, 42);
  --pdf-page-background: rgb(38, 34, 42);
  --pdf-shadow: 0 0 0 1px rgb(255, 157, 0);
  --pdf-sidebar-background: rgb(38, 34, 42);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(255, 157, 0);
  --pill-border-color: rgb(255, 157, 0);
  --pill-border-color-hover: rgb(128, 117, 138);
  --pill-color: rgb(186, 179, 193);
  --pill-color-hover: rgb(191, 185, 198);
  --pill-color-remove: rgb(166, 154, 177);
  --pill-color-remove-hover: rgb(168, 120, 227);
  --prompt-background: rgb(38, 34, 42);
  --prompt-border-color: rgb(166, 154, 177);
  --raised-background: color-mix(in srgb, rgb(89, 82, 96) 65%, transparent) linear-gradient(rgb(89, 82, 96), color-mix(in srgb, rgb(89, 82, 96) 65%, transparent));
  --ribbon-background: rgb(38, 34, 42);
  --ribbon-background-collapsed: rgb(38, 34, 42);
  --search-clear-button-color: rgb(186, 179, 193);
  --search-icon-color: rgb(186, 179, 193);
  --search-result-background: rgb(38, 34, 42);
  --setting-group-heading-color: rgb(191, 185, 198);
  --setting-items-background: rgb(46, 41, 50);
  --setting-items-border-color: rgb(255, 157, 0);
  --slider-thumb-border-color: rgb(128, 117, 138);
  --slider-track-background: rgb(255, 157, 0);
  --status-bar-background: rgb(38, 34, 42);
  --status-bar-border-color: rgb(255, 157, 0);
  --status-bar-text-color: rgb(186, 179, 193);
  --suggestion-background: rgb(38, 34, 42);
  --sync-avatar-color-1: rgb(226, 18, 88);
  --sync-avatar-color-2: rgb(236, 109, 19);
  --sync-avatar-color-3: rgb(255, 157, 0);
  --sync-avatar-color-4: rgba(61, 165, 9, 0);
  --sync-avatar-color-5: rgba(0, 255, 234, 0);
  --sync-avatar-color-6: rgb(0, 111, 133);
  --sync-avatar-color-7: rgb(150, 82, 218);
  --sync-avatar-color-8: rgb(222, 18, 120);
  --tab-background-active: rgb(38, 34, 42);
  --tab-container-background: rgb(46, 41, 50);
  --tab-divider-color: rgb(128, 117, 138);
  --tab-outline-color: rgb(255, 157, 0);
  --tab-switcher-background: rgb(38, 34, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 34, 42), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(150, 82, 218);
  --tab-text-color: rgb(166, 154, 177);
  --tab-text-color-active: rgb(186, 179, 193);
  --tab-text-color-focused: rgb(186, 179, 193);
  --tab-text-color-focused-active: rgb(191, 185, 198);
  --tab-text-color-focused-active-current: rgb(191, 185, 198);
  --tab-text-color-focused-highlighted: rgb(168, 120, 227);
  --table-add-button-border-color: rgb(255, 157, 0);
  --table-border-color: rgb(255, 157, 0);
  --table-drag-handle-background-active: rgb(150, 82, 218);
  --table-drag-handle-color: rgb(166, 154, 177);
  --table-header-border-color: rgb(255, 157, 0);
  --table-header-color: rgb(191, 185, 198);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-selection: rgba(150, 82, 218, 0.1);
  --table-selection-border-color: rgb(150, 82, 218);
  --table-white-space: normal;
  --tag-background: rgba(150, 82, 218, 0.1);
  --tag-background-hover: rgba(150, 82, 218, 0.2);
  --tag-border-color: rgba(150, 82, 218, 0.15);
  --tag-border-color-hover: rgba(150, 82, 218, 0.15);
  --tag-color: rgb(168, 120, 227);
  --tag-color-hover: rgb(168, 120, 227);
  --text-accent: rgb(168, 120, 227);
  --text-accent-hover: rgb(187, 152, 235);
  --text-error: rgb(226, 18, 88);
  --text-faint: rgb(166, 154, 177);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: rgb(186, 179, 193);
  --text-normal: rgb(191, 185, 198);
  --text-selection: rgba(150, 82, 218, 0.33);
  --text-success: rgba(61, 165, 9, 0);
  --text-warning: rgb(236, 109, 19);
  --titlebar-background: rgb(38, 34, 42);
  --titlebar-background-focused: rgb(46, 41, 50);
  --titlebar-border-color: rgb(255, 157, 0);
  --titlebar-text-color: rgb(186, 179, 193);
  --titlebar-text-color-focused: rgb(191, 185, 198);
  --titlebar-text-color-highlighted: rgb(187, 152, 235);
  --vault-name-color: rgb(255, 157, 0);
  --vault-profile-color: rgb(191, 185, 198);
  --vault-profile-color-hover: rgb(191, 185, 198);
  --wyrd-base-00: rgb(33, 30, 36);
  --wyrd-base-10: rgb(38, 34, 42);
  --wyrd-base-100: rgb(212, 207, 216);
  --wyrd-base-20: rgb(46, 41, 50);
  --wyrd-base-30: rgb(51, 46, 56);
  --wyrd-base-40: rgb(89, 82, 96);
  --wyrd-base-50: rgb(128, 117, 138);
  --wyrd-base-50-rgb: 128, 117, 138;
  --wyrd-base-60: rgb(166, 154, 177);
  --wyrd-base-70: rgb(186, 179, 193);
  --wyrd-base-80: rgb(191, 185, 198);
  --wyrd-base-90: rgb(199, 193, 205);
  --wyrd-base-95: rgb(204, 199, 209);
  --wyrd-blue: rgb(0, 111, 133);
  --wyrd-blue-dark: rgb(0, 68, 82);
  --wyrd-blue-light: rgb(0, 153, 184);
  --wyrd-blue-rgb: 0, 153, 184;
  --wyrd-cyan: rgba(0, 255, 234, 0);
  --wyrd-cyan-dark: rgba(0, 204, 187, 0);
  --wyrd-cyan-light: rgba(51, 255, 238, 0);
  --wyrd-cyan-rgb: 0, 255, 234;
  --wyrd-green: rgba(61, 165, 9, 0);
  --wyrd-green-dark: rgba(43, 116, 6, 0);
  --wyrd-green-light: rgba(79, 213, 11, 0);
  --wyrd-green-rgb: 51, 138, 7;
  --wyrd-indigo: rgb(94, 51, 204);
  --wyrd-indigo-dark: rgb(75, 41, 163);
  --wyrd-indigo-light: rgb(126, 92, 214);
  --wyrd-indigo-rgb: 94, 51, 204;
  --wyrd-orange: rgb(236, 109, 19);
  --wyrd-orange-dark: rgb(189, 88, 15);
  --wyrd-orange-light: rgb(240, 139, 66);
  --wyrd-orange-rgb: 236, 109, 19;
  --wyrd-pink: rgb(222, 18, 120);
  --wyrd-pink-dark: rgb(175, 14, 94);
  --wyrd-pink-light: rgb(239, 52, 145);
  --wyrd-pink-rgb: 223, 18, 120;
  --wyrd-purple: rgb(150, 82, 218);
  --wyrd-purple-dark: rgb(125, 44, 206);
  --wyrd-purple-light: rgb(176, 125, 227);
  --wyrd-purple-rgb: 150, 82, 218;
  --wyrd-red: rgb(226, 18, 88);
  --wyrd-red-dark: rgb(179, 15, 69);
  --wyrd-red-light: rgb(239, 57, 118);
  --wyrd-red-rgb: 228, 18, 88;
  --wyrd-strike-color: rgb(89, 82, 96);
  --wyrd-strike-color-hover: rgb(166, 154, 177);
  --wyrd-teal: rgb(0, 184, 122);
  --wyrd-teal-dark: rgb(0, 133, 88);
  --wyrd-teal-light: rgb(0, 235, 156);
  --wyrd-teal-rgb: 0, 184, 122;
  --wyrd-yellow: rgb(255, 157, 0);
  --wyrd-yellow-dark: rgb(204, 126, 0);
  --wyrd-yellow-dark-rgb: 204, 126, 0;
  --wyrd-yellow-light: rgb(255, 177, 51);
  --wyrd-yellow-light-rgb: 255, 177, 51;
  --wyrd-yellow-rgb: 255, 157, 0;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(45, 40, 49);
  color: rgb(191, 185, 198);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 34, 42);
  color: rgb(191, 185, 198);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 34, 42);
  color: rgb(191, 185, 198);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 157, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(45, 40, 49);
  border-left-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
}

body div#quartz-root {
  background-color: rgb(38, 34, 42);
  color: rgb(191, 185, 198);
}`,
    typography: `body .page article p > b, b {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration: rgb(191, 185, 198);
  text-decoration-color: rgb(191, 185, 198);
}

body .page article p > em, em {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

body .page article p > i, i {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

body .page article p > strong, strong {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration: rgb(191, 185, 198);
  text-decoration-color: rgb(191, 185, 198);
}

body .text-highlight {
  background-color: rgba(255, 157, 0, 0.7);
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration: rgb(191, 185, 198);
  text-decoration-color: rgb(191, 185, 198);
  transition: background-color 0.25s ease-in-out;
}

body del {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
  transition: color 0.25s ease-in-out;
}

body p {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(185, 178, 192) none 0px;
  text-decoration: rgb(185, 178, 192);
  text-decoration-color: rgb(185, 178, 192);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 204, 187);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration: rgb(0, 204, 187);
  text-decoration-color: rgb(0, 204, 187);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 157, 0);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration: rgb(255, 157, 0);
  text-decoration-color: rgb(255, 157, 0);
}

body a.internal.broken {
  color: rgb(189, 88, 15);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 88, 15) none 0px;
  text-decoration: rgba(150, 82, 218, 0.5);
  text-decoration-color: rgba(150, 82, 218, 0.5);
}`,
    lists: `body dd {
  color: rgb(191, 185, 198);
}

body dt {
  color: rgb(191, 185, 198);
}

body ol > li {
  color: rgb(191, 185, 198);
}

body ol.overflow {
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body ul > li {
  color: rgb(191, 185, 198);
}

body ul.overflow {
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(223, 18, 120);
  text-decoration: rgb(223, 18, 120);
}

body blockquote {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body table {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 230.281px;
  margin-right: 230.281px;
  width: 201.438px;
}

body td {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
}

body th {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 157, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 157, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body pre:has(> code) {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body figcaption {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body img {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body video {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    embeds: `body .file-embed {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
}

body .footnotes {
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

body .transclude {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body .transclude-inner {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(89, 82, 96);
  text-decoration: line-through rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body li.task-list-item[data-task='!'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='*'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='-'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='/'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='>'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='?'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='I'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='S'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='b'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='c'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='d'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='f'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='i'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='k'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='l'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='p'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='u'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body li.task-list-item[data-task='w'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 153, 184;
  background-color: rgba(0, 153, 184, 0.1);
  border-bottom-color: rgba(0, 153, 184, 0.25);
  border-left-color: rgba(0, 153, 184, 0.25);
  border-right-color: rgba(0, 153, 184, 0.25);
  border-top-color: rgba(0, 153, 184, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 94, 51, 204;
  background-color: rgba(94, 51, 204, 0.1);
  border-bottom-color: rgba(94, 51, 204, 0.25);
  border-left-color: rgba(94, 51, 204, 0.25);
  border-right-color: rgba(94, 51, 204, 0.25);
  border-top-color: rgba(94, 51, 204, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 150, 82, 218;
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 0, 184, 122;
  background-color: rgba(0, 184, 122, 0.1);
  border-bottom-color: rgba(0, 184, 122, 0.25);
  border-left-color: rgba(0, 184, 122, 0.25);
  border-right-color: rgba(0, 184, 122, 0.25);
  border-top-color: rgba(0, 184, 122, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 128, 117, 138;
  background-color: rgba(128, 117, 138, 0.1);
  border-bottom-color: rgba(128, 117, 138, 0.25);
  border-left-color: rgba(128, 117, 138, 0.25);
  border-right-color: rgba(128, 117, 138, 0.25);
  border-top-color: rgba(128, 117, 138, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 51, 138, 7;
  background-color: rgba(51, 138, 7, 0.1);
  border-bottom-color: rgba(51, 138, 7, 0.25);
  border-left-color: rgba(51, 138, 7, 0.25);
  border-right-color: rgba(51, 138, 7, 0.25);
  border-top-color: rgba(51, 138, 7, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 223, 18, 120;
  background-color: rgba(223, 18, 120, 0.1);
  border-bottom-color: rgba(223, 18, 120, 0.25);
  border-left-color: rgba(223, 18, 120, 0.25);
  border-right-color: rgba(223, 18, 120, 0.25);
  border-top-color: rgba(223, 18, 120, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 157, 0;
  background-color: rgba(255, 157, 0, 0.1);
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(51, 46, 56);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(166, 154, 177);
  border-left-color: rgb(166, 154, 177);
  border-right-color: rgb(166, 154, 177);
  border-top-color: rgb(166, 154, 177);
}

body .search > .search-container > .search-space > * {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration: rgb(191, 185, 198);
  text-decoration-color: rgb(191, 185, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(191, 185, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(191, 185, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(191, 185, 198);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(166, 154, 177);
  border-left-color: rgb(166, 154, 177);
  border-right-color: rgb(166, 154, 177);
  border-top-color: rgb(166, 154, 177);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 34, 42);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(191, 185, 198);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(167, 118, 227);
}

body h1 {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h2 {
  color: rgb(223, 18, 120);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h2.page-title, h2.page-title a {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
}

body h3 {
  color: rgb(94, 51, 204);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h4 {
  color: rgb(60, 162, 9);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h5 {
  color: rgb(0, 184, 122);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h6 {
  color: rgb(0, 110, 133);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body hr {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

body ::-webkit-scrollbar-corner {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

body ::-webkit-scrollbar-track {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(185, 178, 192);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(185, 178, 192);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(185, 178, 192);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 126, 0);
  border-left-color: rgb(204, 126, 0);
  border-right-color: rgb(204, 126, 0);
  border-top-color: rgb(204, 126, 0);
  color: rgb(204, 126, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
}`,
    footer: `body footer {
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(185, 178, 192);
  text-decoration: rgb(185, 178, 192);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(191, 185, 198);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(185, 178, 192);
  text-decoration: rgb(185, 178, 192);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

body li.section-li > .section .meta {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(185, 178, 192);
  text-decoration: rgb(185, 178, 192);
}

body ul.section-ul {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
}

body .darkmode svg {
  color: rgb(185, 178, 192);
  stroke: rgb(185, 178, 192);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
}

body .breadcrumb-element p {
  color: rgb(166, 154, 177);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

body .metadata {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(38, 34, 42);
}

body .page-header h2.page-title {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(191, 185, 198);
  text-decoration: underline dotted rgb(191, 185, 198);
}

body details {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body input[type=text] {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

body sub {
  color: rgb(191, 185, 198);
}

body summary {
  color: rgb(191, 185, 198);
}

body sup {
  color: rgb(191, 185, 198);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 270;
  --accent-l: 58.8%;
  --accent-s: 65%;
  --background-modifier-active-hover: rgba(150, 82, 218, 0.15);
  --background-modifier-border: rgb(255, 157, 0);
  --background-modifier-border-focus: rgb(89, 82, 96);
  --background-modifier-border-hover: rgb(128, 117, 138);
  --background-modifier-error: rgb(226, 18, 88);
  --background-modifier-error-hover: rgb(226, 18, 88);
  --background-modifier-error-rgb: 228, 18, 88;
  --background-modifier-form-field: rgb(212, 207, 216);
  --background-modifier-form-field-hover: rgb(212, 207, 216);
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: rgba(61, 165, 9, 0);
  --background-modifier-success-rgb: 51, 138, 7;
  --background-primary: rgb(199, 193, 205);
  --background-primary-alt: rgb(191, 185, 198);
  --background-secondary: rgb(199, 193, 205);
  --background-secondary-alt: rgb(204, 199, 209);
  --bases-cards-background: rgb(199, 193, 205);
  --bases-cards-cover-background: rgb(191, 185, 198);
  --bases-cards-shadow: 0 0 0 1px rgb(255, 157, 0);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(128, 117, 138);
  --bases-embed-border-color: rgb(255, 157, 0);
  --bases-group-heading-property-color: rgb(51, 46, 56);
  --bases-table-border-color: rgb(255, 157, 0);
  --bases-table-cell-background-active: rgb(199, 193, 205);
  --bases-table-cell-background-disabled: rgb(191, 185, 198);
  --bases-table-cell-background-selected: rgba(150, 82, 218, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 82, 96);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(159, 98, 223);
  --bases-table-group-background: rgb(191, 185, 198);
  --bases-table-header-background: rgb(199, 193, 205);
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: rgb(51, 46, 56);
  --bases-table-summary-background: rgb(199, 193, 205);
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --blockquote-border-color: rgb(159, 98, 223);
  --blur-background: color-mix(in srgb, rgb(199, 193, 205) 65%, transparent) linear-gradient(rgb(199, 193, 205), color-mix(in srgb, rgb(199, 193, 205) 65%, transparent));
  --bold-color: rgb(221, 120, 95);
  --callout-bug: 228, 18, 88;
  --callout-error: 228, 18, 88;
  --callout-fail: 228, 18, 88;
  --callout-success: 51, 138, 7;
  --canvas-background: rgb(199, 193, 205);
  --canvas-card-label-color: rgb(46, 41, 50);
  --canvas-color-1: 228, 18, 88;
  --canvas-color-4: 51, 138, 7;
  --canvas-dot-pattern: rgb(166, 154, 177);
  --caret-color: rgb(89, 82, 96);
  --checkbox-border-color: rgb(46, 41, 50);
  --checkbox-border-color-hover: rgb(51, 46, 56);
  --checkbox-color: rgb(159, 98, 223);
  --checkbox-color-hover: rgb(168, 120, 227);
  --checkbox-marker-color: rgb(199, 193, 205);
  --checklist-done-color: rgb(51, 46, 56);
  --code-background: rgb(191, 185, 198);
  --code-border-color: rgb(255, 157, 0);
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: rgb(46, 41, 50);
  --code-function: rgb(255, 157, 0);
  --code-important: rgb(236, 109, 19);
  --code-keyword: rgb(222, 18, 120);
  --code-normal: rgb(89, 82, 96);
  --code-operator: rgb(226, 18, 88);
  --code-property: rgba(0, 255, 234, 0);
  --code-punctuation: rgb(51, 46, 56);
  --code-string: rgba(61, 165, 9, 0);
  --code-tag: rgb(226, 18, 88);
  --code-value: rgb(150, 82, 218);
  --collapse-icon-color: rgb(46, 41, 50);
  --collapse-icon-color-collapsed: rgb(150, 82, 218);
  --color-accent: rgb(150, 82, 218);
  --color-accent-1: rgb(159, 98, 223);
  --color-accent-2: rgb(168, 120, 227);
  --color-accent-hsl: 270, 65%, 58.8%;
  --color-base-00: rgb(212, 207, 216);
  --color-base-05: rgb(204, 199, 209);
  --color-base-10: rgb(199, 193, 205);
  --color-base-100: rgb(33, 30, 36);
  --color-base-20: rgb(191, 185, 198);
  --color-base-25: rgb(186, 179, 193);
  --color-base-30: rgb(166, 154, 177);
  --color-base-35: rgb(128, 117, 138);
  --color-base-40: rgb(89, 82, 96);
  --color-base-50: rgb(51, 46, 56);
  --color-base-60: rgb(46, 41, 50);
  --color-base-70: rgb(38, 34, 42);
  --color-blue: rgb(0, 111, 133);
  --color-cyan: rgba(0, 255, 234, 0);
  --color-green: rgba(61, 165, 9, 0);
  --color-green-rgb: 51, 138, 7;
  --color-orange: rgb(236, 109, 19);
  --color-pink: rgb(222, 18, 120);
  --color-purple: rgb(150, 82, 218);
  --color-red: rgb(226, 18, 88);
  --color-red-rgb: 228, 18, 88;
  --color-yellow: rgb(255, 157, 0);
  --divider-color: rgb(255, 157, 0);
  --divider-color-hover: rgb(159, 98, 223);
  --dropdown-background: rgb(212, 207, 216);
  --dropdown-background-hover: rgb(199, 193, 205);
  --embed-block-shadow-hover: 0 0 0 1px rgb(255, 157, 0), inset 0 0 0 1px rgb(255, 157, 0);
  --embed-border-start: 2px solid rgb(159, 98, 223);
  --file-header-background: rgb(199, 193, 205);
  --file-header-background-focused: rgb(199, 193, 205);
  --file-header-font: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(212, 207, 216);
  --flair-color: rgb(89, 82, 96);
  --font-interface: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Neucha;
  --font-mermaid: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Space Mono";
  --font-print: '??', '??', Neucha, 'Arial';
  --font-text: '??', Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Neucha;
  --footnote-divider-color: rgb(255, 157, 0);
  --footnote-id-color: rgb(51, 46, 56);
  --footnote-id-color-no-occurrences: rgb(46, 41, 50);
  --footnote-input-background-active: rgba(0, 0, 0, 0.075);
  --graph-line: rgb(204, 126, 0);
  --graph-node: rgb(51, 46, 56);
  --graph-node-attachment: rgb(236, 109, 19);
  --graph-node-focused: rgb(255, 157, 0);
  --graph-node-tag: rgba(61, 165, 9, 0);
  --graph-node-unresolved: rgb(46, 41, 50);
  --graph-text: rgb(89, 82, 96);
  --h1-color: rgb(150, 82, 218);
  --h1-font: "Architects Daughter", Neucha;
  --h2-color: rgb(222, 18, 120);
  --h2-font: "Architects Daughter", Neucha;
  --h3-color: rgb(94, 51, 204);
  --h3-font: "Architects Daughter", Neucha;
  --h4-color: rgba(61, 165, 9, 0);
  --h4-font: "Architects Daughter", Neucha;
  --h5-color: rgb(0, 184, 122);
  --h5-font: "Architects Daughter", Neucha;
  --h6-color: rgb(0, 111, 133);
  --h6-font: "Architects Daughter", Neucha;
  --heading-formatting: rgb(51, 46, 56);
  --hr-color: rgb(255, 157, 0);
  --icon-color: rgb(51, 46, 56);
  --icon-color-active: rgb(150, 82, 218);
  --icon-color-focused: rgb(89, 82, 96);
  --icon-color-hover: rgb(51, 46, 56);
  --inline-title-color: rgb(150, 82, 218);
  --inline-title-font: "Architects Daughter", Neucha;
  --input-date-separator: rgb(46, 41, 50);
  --input-placeholder-color: rgb(46, 41, 50);
  --interactive-accent: rgb(159, 98, 223);
  --interactive-accent-hover: rgb(168, 120, 227);
  --interactive-accent-hsl: 270, 65%, 58.8%;
  --interactive-hover: rgb(199, 193, 205);
  --interactive-normal: rgb(212, 207, 216);
  --italic-color: rgb(216, 75, 108);
  --link-color: rgb(255, 157, 0);
  --link-color-hover: rgb(255, 177, 51);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgba(0, 204, 187, 0);
  --link-external-color-hover: rgba(0, 255, 234, 0);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(189, 88, 15);
  --link-unresolved-color-hover: rgb(236, 109, 19);
  --link-unresolved-decoration-color: rgba(150, 82, 218, 0.5);
  --link-unresolved-opacity: 0.8;
  --list-marker-color: rgb(46, 41, 50);
  --list-marker-color-collapsed: rgb(150, 82, 218);
  --list-marker-color-hover: rgb(51, 46, 56);
  --menu-background: rgb(199, 193, 205);
  --menu-border-color: rgb(128, 117, 138);
  --metadata-border-color: rgb(255, 157, 0);
  --metadata-divider-color: rgb(255, 157, 0);
  --metadata-input-background-active: rgba(0, 0, 0, 0.075);
  --metadata-input-font: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(89, 82, 96);
  --metadata-label-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-font: '??', Neucha, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(51, 46, 56);
  --metadata-label-text-color-hover: rgb(51, 46, 56);
  --metadata-property-background-active: rgba(0, 0, 0, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 82, 96);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(128, 117, 138);
  --modal-background: rgb(199, 193, 205);
  --modal-border-color: rgb(89, 82, 96);
  --nav-collapse-icon-color: rgb(46, 41, 50);
  --nav-collapse-icon-color-collapsed: rgb(46, 41, 50);
  --nav-heading-color: rgb(89, 82, 96);
  --nav-heading-color-collapsed: rgb(46, 41, 50);
  --nav-heading-color-collapsed-hover: rgb(51, 46, 56);
  --nav-heading-color-hover: rgb(89, 82, 96);
  --nav-item-background-active: rgba(0, 0, 0, 0.075);
  --nav-item-background-hover: rgba(0, 0, 0, 0.075);
  --nav-item-background-selected: rgba(150, 82, 218, 0.15);
  --nav-item-color: rgb(51, 46, 56);
  --nav-item-color-active: rgb(89, 82, 96);
  --nav-item-color-highlighted: rgb(168, 120, 227);
  --nav-item-color-hover: rgb(89, 82, 96);
  --nav-item-color-selected: rgb(89, 82, 96);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(46, 41, 50);
  --nav-tag-color-active: rgb(51, 46, 56);
  --nav-tag-color-hover: rgb(51, 46, 56);
  --pdf-background: rgb(199, 193, 205);
  --pdf-page-background: rgb(199, 193, 205);
  --pdf-sidebar-background: rgb(199, 193, 205);
  --pill-border-color: rgb(255, 157, 0);
  --pill-border-color-hover: rgb(128, 117, 138);
  --pill-color: rgb(51, 46, 56);
  --pill-color-hover: rgb(89, 82, 96);
  --pill-color-remove: rgb(46, 41, 50);
  --pill-color-remove-hover: rgb(150, 82, 218);
  --prompt-background: rgb(199, 193, 205);
  --prompt-border-color: rgb(89, 82, 96);
  --raised-background: color-mix(in srgb, rgb(199, 193, 205) 65%, transparent) linear-gradient(rgb(199, 193, 205), color-mix(in srgb, rgb(199, 193, 205) 65%, transparent));
  --ribbon-background: rgb(199, 193, 205);
  --ribbon-background-collapsed: rgb(199, 193, 205);
  --search-clear-button-color: rgb(51, 46, 56);
  --search-icon-color: rgb(51, 46, 56);
  --search-result-background: rgb(199, 193, 205);
  --setting-group-heading-color: rgb(89, 82, 96);
  --setting-items-background: rgb(191, 185, 198);
  --setting-items-border-color: rgb(255, 157, 0);
  --slider-thumb-border-color: rgb(128, 117, 138);
  --slider-track-background: rgb(255, 157, 0);
  --status-bar-background: rgb(199, 193, 205);
  --status-bar-border-color: rgb(255, 157, 0);
  --status-bar-text-color: rgb(51, 46, 56);
  --suggestion-background: rgb(199, 193, 205);
  --sync-avatar-color-1: rgb(226, 18, 88);
  --sync-avatar-color-2: rgb(236, 109, 19);
  --sync-avatar-color-3: rgb(255, 157, 0);
  --sync-avatar-color-4: rgba(61, 165, 9, 0);
  --sync-avatar-color-5: rgba(0, 255, 234, 0);
  --sync-avatar-color-6: rgb(0, 111, 133);
  --sync-avatar-color-7: rgb(150, 82, 218);
  --sync-avatar-color-8: rgb(222, 18, 120);
  --tab-background-active: rgb(199, 193, 205);
  --tab-container-background: rgb(191, 185, 198);
  --tab-divider-color: rgb(128, 117, 138);
  --tab-outline-color: rgb(255, 157, 0);
  --tab-switcher-background: rgb(199, 193, 205);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(199, 193, 205), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(150, 82, 218);
  --tab-text-color: rgb(46, 41, 50);
  --tab-text-color-active: rgb(51, 46, 56);
  --tab-text-color-focused: rgb(51, 46, 56);
  --tab-text-color-focused-active: rgb(89, 82, 96);
  --tab-text-color-focused-active-current: rgb(89, 82, 96);
  --tab-text-color-focused-highlighted: rgb(150, 82, 218);
  --table-add-button-border-color: rgb(255, 157, 0);
  --table-border-color: rgb(255, 157, 0);
  --table-drag-handle-background-active: rgb(159, 98, 223);
  --table-drag-handle-color: rgb(46, 41, 50);
  --table-header-border-color: rgb(255, 157, 0);
  --table-header-color: rgb(89, 82, 96);
  --table-header-size: 0.875em;
  --table-header-weight: 700;
  --table-selection: rgba(150, 82, 218, 0.1);
  --table-selection-border-color: rgb(159, 98, 223);
  --table-white-space: normal;
  --tag-background: rgba(150, 82, 218, 0.1);
  --tag-background-hover: rgba(150, 82, 218, 0.2);
  --tag-border-color: rgba(150, 82, 218, 0.15);
  --tag-border-color-hover: rgba(150, 82, 218, 0.15);
  --tag-color: rgb(150, 82, 218);
  --tag-color-hover: rgb(150, 82, 218);
  --text-accent: rgb(150, 82, 218);
  --text-accent-hover: rgb(168, 120, 227);
  --text-error: rgb(226, 18, 88);
  --text-faint: rgb(46, 41, 50);
  --text-highlight-bg: rgba(255, 157, 0, 0.7);
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8);
  --text-muted: rgb(51, 46, 56);
  --text-normal: rgb(89, 82, 96);
  --text-selection: rgba(150, 82, 218, 0.2);
  --text-success: rgba(61, 165, 9, 0);
  --text-warning: rgb(236, 109, 19);
  --titlebar-background: rgb(199, 193, 205);
  --titlebar-background-focused: rgb(191, 185, 198);
  --titlebar-border-color: rgb(255, 157, 0);
  --titlebar-text-color: rgb(51, 46, 56);
  --titlebar-text-color-focused: rgb(89, 82, 96);
  --titlebar-text-color-highlighted: rgb(168, 120, 227);
  --vault-name-color: rgb(255, 157, 0);
  --vault-profile-color: rgb(89, 82, 96);
  --vault-profile-color-hover: rgb(89, 82, 96);
  --wyrd-base-00: rgb(33, 30, 36);
  --wyrd-base-10: rgb(38, 34, 42);
  --wyrd-base-100: rgb(212, 207, 216);
  --wyrd-base-20: rgb(46, 41, 50);
  --wyrd-base-30: rgb(51, 46, 56);
  --wyrd-base-40: rgb(89, 82, 96);
  --wyrd-base-50: rgb(128, 117, 138);
  --wyrd-base-50-rgb: 128, 117, 138;
  --wyrd-base-60: rgb(166, 154, 177);
  --wyrd-base-70: rgb(186, 179, 193);
  --wyrd-base-80: rgb(191, 185, 198);
  --wyrd-base-90: rgb(199, 193, 205);
  --wyrd-base-95: rgb(204, 199, 209);
  --wyrd-blue: rgb(0, 111, 133);
  --wyrd-blue-dark: rgb(0, 68, 82);
  --wyrd-blue-light: rgb(0, 153, 184);
  --wyrd-blue-rgb: 0, 153, 184;
  --wyrd-cyan: rgba(0, 255, 234, 0);
  --wyrd-cyan-dark: rgba(0, 204, 187, 0);
  --wyrd-cyan-light: rgba(51, 255, 238, 0);
  --wyrd-cyan-rgb: 0, 255, 234;
  --wyrd-green: rgba(61, 165, 9, 0);
  --wyrd-green-dark: rgba(43, 116, 6, 0);
  --wyrd-green-light: rgba(79, 213, 11, 0);
  --wyrd-green-rgb: 51, 138, 7;
  --wyrd-indigo: rgb(94, 51, 204);
  --wyrd-indigo-dark: rgb(75, 41, 163);
  --wyrd-indigo-light: rgb(126, 92, 214);
  --wyrd-indigo-rgb: 94, 51, 204;
  --wyrd-orange: rgb(236, 109, 19);
  --wyrd-orange-dark: rgb(189, 88, 15);
  --wyrd-orange-light: rgb(240, 139, 66);
  --wyrd-orange-rgb: 236, 109, 19;
  --wyrd-pink: rgb(222, 18, 120);
  --wyrd-pink-dark: rgb(175, 14, 94);
  --wyrd-pink-light: rgb(239, 52, 145);
  --wyrd-pink-rgb: 223, 18, 120;
  --wyrd-purple: rgb(150, 82, 218);
  --wyrd-purple-dark: rgb(125, 44, 206);
  --wyrd-purple-light: rgb(176, 125, 227);
  --wyrd-purple-rgb: 150, 82, 218;
  --wyrd-red: rgb(226, 18, 88);
  --wyrd-red-dark: rgb(179, 15, 69);
  --wyrd-red-light: rgb(239, 57, 118);
  --wyrd-red-rgb: 228, 18, 88;
  --wyrd-strike-color: rgb(166, 154, 177);
  --wyrd-strike-color-hover: rgb(46, 41, 50);
  --wyrd-teal: rgb(0, 184, 122);
  --wyrd-teal-dark: rgb(0, 133, 88);
  --wyrd-teal-light: rgb(0, 235, 156);
  --wyrd-teal-rgb: 0, 184, 122;
  --wyrd-yellow: rgb(255, 157, 0);
  --wyrd-yellow-dark: rgb(204, 126, 0);
  --wyrd-yellow-dark-rgb: 204, 126, 0;
  --wyrd-yellow-light: rgb(255, 177, 51);
  --wyrd-yellow-light-rgb: 255, 177, 51;
  --wyrd-yellow-rgb: 255, 157, 0;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(191, 185, 198);
  color: rgb(89, 82, 96);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(198, 192, 203);
  color: rgb(89, 82, 96);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(198, 192, 203);
  color: rgb(89, 82, 96);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 157, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(191, 185, 198);
  border-left-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
}

body div#quartz-root {
  background-color: rgb(198, 192, 203);
  color: rgb(89, 82, 96);
}`,
    typography: `body .page article p > b, b {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body .page article p > em, em {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

body .page article p > i, i {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

body .page article p > strong, strong {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body .text-highlight {
  background-color: rgba(255, 157, 0, 0.7);
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
  transition: background-color 0.25s ease-in-out;
}

body del {
  color: rgb(166, 154, 177);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 154, 177) none 0px;
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
  transition: color 0.25s ease-in-out;
}

body p {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 46, 56) none 0px;
  text-decoration: rgb(51, 46, 56);
  text-decoration-color: rgb(51, 46, 56);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 204, 187);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration: rgb(0, 204, 187);
  text-decoration-color: rgb(0, 204, 187);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 157, 0);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration: rgb(255, 157, 0);
  text-decoration-color: rgb(255, 157, 0);
}

body a.internal.broken {
  color: rgb(189, 88, 15);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 88, 15) none 0px;
  text-decoration: rgba(150, 82, 218, 0.5);
  text-decoration-color: rgba(150, 82, 218, 0.5);
}`,
    lists: `body dd {
  color: rgb(89, 82, 96);
}

body dt {
  color: rgb(89, 82, 96);
}

body ol > li {
  color: rgb(89, 82, 96);
}

body ol.overflow {
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body ul > li {
  color: rgb(89, 82, 96);
}

body ul.overflow {
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(223, 18, 120);
  text-decoration: rgb(223, 18, 120);
}

body blockquote {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body table {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 230.281px;
  margin-right: 230.281px;
  width: 201.438px;
}

body td {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
}

body th {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 157, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 157, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body pre:has(> code) {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body figcaption {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body img {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body video {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    embeds: `body .file-embed {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
}

body .footnotes {
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

body .transclude {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(159, 100, 223);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body .transclude-inner {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(159, 100, 223);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 154, 177);
  text-decoration: line-through rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

body li.task-list-item[data-task='!'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='*'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='-'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='/'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='>'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='?'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='I'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='S'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='b'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='c'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='d'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='f'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='i'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='k'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='l'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='p'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='u'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

body li.task-list-item[data-task='w'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 153, 184;
  background-color: rgba(0, 153, 184, 0.1);
  border-bottom-color: rgba(0, 153, 184, 0.25);
  border-left-color: rgba(0, 153, 184, 0.25);
  border-right-color: rgba(0, 153, 184, 0.25);
  border-top-color: rgba(0, 153, 184, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 94, 51, 204;
  background-color: rgba(94, 51, 204, 0.1);
  border-bottom-color: rgba(94, 51, 204, 0.25);
  border-left-color: rgba(94, 51, 204, 0.25);
  border-right-color: rgba(94, 51, 204, 0.25);
  border-top-color: rgba(94, 51, 204, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 150, 82, 218;
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 0, 184, 122;
  background-color: rgba(0, 184, 122, 0.1);
  border-bottom-color: rgba(0, 184, 122, 0.25);
  border-left-color: rgba(0, 184, 122, 0.25);
  border-right-color: rgba(0, 184, 122, 0.25);
  border-top-color: rgba(0, 184, 122, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 128, 117, 138;
  background-color: rgba(128, 117, 138, 0.1);
  border-bottom-color: rgba(128, 117, 138, 0.25);
  border-left-color: rgba(128, 117, 138, 0.25);
  border-right-color: rgba(128, 117, 138, 0.25);
  border-top-color: rgba(128, 117, 138, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 51, 138, 7;
  background-color: rgba(51, 138, 7, 0.1);
  border-bottom-color: rgba(51, 138, 7, 0.25);
  border-left-color: rgba(51, 138, 7, 0.25);
  border-right-color: rgba(51, 138, 7, 0.25);
  border-top-color: rgba(51, 138, 7, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 223, 18, 120;
  background-color: rgba(223, 18, 120, 0.1);
  border-bottom-color: rgba(223, 18, 120, 0.25);
  border-left-color: rgba(223, 18, 120, 0.25);
  border-right-color: rgba(223, 18, 120, 0.25);
  border-top-color: rgba(223, 18, 120, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 157, 0;
  background-color: rgba(255, 157, 0, 0.1);
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(210, 206, 215);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body .search > .search-container > .search-space > * {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 82, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(89, 82, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(89, 82, 96);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(198, 192, 203);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(89, 82, 96);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(150, 82, 218);
}

body h1 {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h2 {
  color: rgb(223, 18, 120);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h2.page-title, h2.page-title a {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
}

body h3 {
  color: rgb(94, 51, 204);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h4 {
  color: rgb(60, 162, 9);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h5 {
  color: rgb(0, 184, 122);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body h6 {
  color: rgb(0, 110, 133);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

body hr {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

body ::-webkit-scrollbar-corner {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

body ::-webkit-scrollbar-track {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(51, 46, 56);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(51, 46, 56);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(51, 46, 56);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 126, 0);
  border-left-color: rgb(204, 126, 0);
  border-right-color: rgb(204, 126, 0);
  border-top-color: rgb(204, 126, 0);
  color: rgb(204, 126, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
}`,
    footer: `body footer {
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(51, 46, 56);
  text-decoration: rgb(51, 46, 56);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(89, 82, 96);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 46, 56);
  text-decoration: rgb(51, 46, 56);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

body li.section-li > .section .meta {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 46, 56);
  text-decoration: rgb(51, 46, 56);
}

body ul.section-ul {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
}

body .darkmode svg {
  color: rgb(51, 46, 56);
  stroke: rgb(51, 46, 56);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
}

body .breadcrumb-element p {
  color: rgb(45, 40, 49);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

body .metadata {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(198, 192, 203);
}

body .page-header h2.page-title {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(89, 82, 96);
  text-decoration: underline dotted rgb(89, 82, 96);
}

body details {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body input[type=text] {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

body sub {
  color: rgb(89, 82, 96);
}

body summary {
  color: rgb(89, 82, 96);
}

body sup {
  color: rgb(89, 82, 96);
}`,
  },
};
