import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neo",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 250;
  --accent-l: 75%;
  --accent-s: 80%;
  --anim-duration-moderate: 250ms;
  --anim-duration-slow: 400ms;
  --background-modifier-active-hover: rgba(138, 117, 240, 0.1);
  --background-modifier-border: rgb(44, 45, 53);
  --background-modifier-border-focus: rgb(83, 85, 95);
  --background-modifier-border-hover: rgb(59, 60, 69);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: rgb(219 75 75);
  --background-modifier-error-hover: rgb(219 75 75);
  --background-modifier-error-rgb: 219, 75, 75;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-hover: rgba(179, 187, 230, 0.05);
  --background-modifier-success: rgb(34 208 162);
  --background-modifier-success-rgb: 34, 208, 162;
  --background-primary: rgb(19, 21, 27);
  --background-primary-alt: rgb(27, 28, 34);
  --background-secondary: rgb(27, 28, 34);
  --background-secondary-alt: rgb(27, 28, 34);
  --base-05: rgb(237, 237, 238);
  --base-10: rgb(208, 208, 210);
  --base-15: rgb(189, 190, 194);
  --base-20: rgb(161, 163, 170);
  --base-25: rgb(136, 138, 150);
  --base-30: rgb(110, 113, 124);
  --base-35: rgb(83, 85, 95);
  --base-40: rgb(59, 60, 69);
  --base-45: rgb(44, 45, 53);
  --base-50: rgb(34, 35, 42);
  --base-55: rgb(27, 28, 34);
  --base-60: rgb(19, 21, 27);
  --base-hue: 230;
  --bases-cards-background: rgb(19, 21, 27);
  --bases-cards-cover-background: rgb(27, 28, 34);
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px rgb(44, 45, 53);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(59, 60, 69);
  --bases-embed-border-color: rgb(44, 45, 53);
  --bases-group-heading-property-color: rgb(161, 163, 170);
  --bases-table-border-color: rgb(44, 45, 53);
  --bases-table-cell-background-active: rgb(19, 21, 27);
  --bases-table-cell-background-disabled: rgb(27, 28, 34);
  --bases-table-cell-background-selected: rgba(138, 117, 240, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(83, 85, 95);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 117, 240);
  --bases-table-group-background: rgb(27, 28, 34);
  --bases-table-header-background: rgb(19, 21, 27);
  --bases-table-header-background-hover: rgba(179, 187, 230, 0.05);
  --bases-table-header-color: rgb(161, 163, 170);
  --bases-table-summary-background: rgb(19, 21, 27);
  --bases-table-summary-background-hover: rgba(179, 187, 230, 0.05);
  --blockquote-border-color: rgb(138, 117, 240);
  --blur-background: color-mix(in srgb, rgb(44, 45, 53) 65%, transparent) linear-gradient(rgb(44, 45, 53), color-mix(in srgb, rgb(44, 45, 53) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: rgb(208, 208, 210);
  --callout-border-opacity: 0.15;
  --callout-border-width: 1px;
  --callout-bug: 219, 75, 75;
  --callout-default: 149, 128, 255;
  --callout-error: 219, 75, 75;
  --callout-example: 149, 128, 255;
  --callout-fail: 219, 75, 75;
  --callout-important: 82, 183, 213;
  --callout-info: 122, 162, 247;
  --callout-padding: 16px 16px 16px 24px;
  --callout-question: 224, 222, 113;
  --callout-quote: 139, 148, 158;
  --callout-success: 34, 208, 162;
  --callout-summary: 82, 183, 213;
  --callout-tip: 82, 183, 213;
  --callout-todo: 122, 162, 247;
  --callout-warning: 237, 139, 79;
  --canvas-background: rgb(19, 21, 27);
  --canvas-card-label-color: rgb(83, 85, 95);
  --canvas-color-1: 219, 75, 75;
  --canvas-color-2: 237, 139, 79;
  --canvas-color-4: 34, 208, 162;
  --canvas-color-5: 82, 183, 213;
  --canvas-color-6: 149, 128, 255;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(150px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 150px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: rgb(189, 190, 194);
  --checkbox-border-color: rgb(83, 85, 95);
  --checkbox-border-color-hover: rgb(161, 163, 170);
  --checkbox-color: rgb(138, 117, 240);
  --checkbox-color-hover: rgb(157, 140, 242);
  --checkbox-marker-color: rgb(19, 21, 27);
  --checkbox-progress-width: 32px;
  --checklist-done-color: rgb(83, 85, 95);
  --checklist-done-decoration: none;
  --clickable-icon-radius: 6px;
  --code-background: rgb(27, 28, 34);
  --code-border-color: rgb(44, 45, 53);
  --code-bracket-background: rgba(179, 187, 230, 0.05);
  --code-comment: rgb(83, 85, 95);
  --code-function: rgb(82 183 213);
  --code-important: rgb(219 75 75);
  --code-keyword: rgb(149, 128, 255);
  --code-normal: rgb(189, 190, 194);
  --code-operator: rgb(237 139 79);
  --code-property: rgb(122 176 247);
  --code-punctuation: rgb(255 151 207);
  --code-string: rgb(34 208 162);
  --code-tag: rgb(230 232 118);
  --code-value: rgb(82 183 213);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(83, 85, 95);
  --collapse-icon-color-collapsed: rgb(155, 137, 245);
  --color-accent: rgb(138, 117, 240);
  --color-accent-1: rgb(138, 117, 240);
  --color-accent-2: rgb(157, 140, 242);
  --color-accent-hsl: 250, 80%, 70%;
  --color-black: rgb(14 19 25);
  --color-black-rgb: 14, 19, 25;
  --color-blue: rgb(122 176 247);
  --color-blue-rgb: 122, 162, 247;
  --color-cyan: rgb(82 183 213);
  --color-cyan-rgb: 82, 183, 213;
  --color-green: rgb(34 208 162);
  --color-green-rgb: 34, 208, 162;
  --color-muted: rgb(139 148 158);
  --color-muted-rgb: 139, 148, 158;
  --color-orange: rgb(237 139 79);
  --color-orange-rgb: 237, 139, 79;
  --color-pink: rgb(255 151 207);
  --color-purple: rgb(149, 128, 255);
  --color-purple-rgb: 149, 128, 255;
  --color-red: rgb(219 75 75);
  --color-red-rgb: 219, 75, 75;
  --color-teal: rgb(62 180 191);
  --color-teal-rgb: 62, 180, 191;
  --color-white: rgb(230 230 230);
  --color-white-rgb: 230, 230, 230;
  --color-yellow: rgb(230 232 118);
  --cursor: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(44, 45, 53);
  --divider-color-hover: rgb(138, 117, 240);
  --dropdown-background: rgb(44, 45, 53);
  --dropdown-background-hover: rgb(59, 60, 69);
  --embed-block-shadow-hover: 0 0 0 1px rgb(44, 45, 53), inset 0 0 0 1px rgb(44, 45, 53);
  --embed-border-start: 2px solid rgb(138, 117, 240);
  --file-header-background: rgb(19, 21, 27);
  --file-header-background-focused: rgb(19, 21, 27);
  --file-header-font: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(44, 45, 53);
  --flair-color: rgb(189, 190, 194);
  --font-editor-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-interface: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mermaid: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace;
  --font-print: '??', '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, 'Arial';
  --font-text: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --footnote-divider-color: rgb(44, 45, 53);
  --footnote-id-color: rgb(161, 163, 170);
  --footnote-id-color-no-occurrences: rgb(83, 85, 95);
  --footnote-input-background-active: rgba(179, 187, 230, 0.05);
  --footnote-line-height: 1.6;
  --frame-left-space: 6px;
  --frame-right-space: 132px;
  --graph-node: rgb(161, 163, 170);
  --graph-node-attachment: rgb(230 232 118);
  --graph-node-focused: rgb(155, 137, 245);
  --graph-node-tag: rgb(34 208 162);
  --graph-node-unresolved: rgb(83, 85, 95);
  --graph-text: rgb(189, 190, 194);
  --gray: var(--text-muted);
  --h1-color: rgb(159, 146, 221);
  --h1-size: 1.8rem;
  --h2-color: rgb(145, 131, 216);
  --h2-size: 1.5rem;
  --h2-weight: 600;
  --h3-color: rgb(131, 115, 211);
  --h3-size: 1.45rem;
  --h3-weight: 600;
  --h4-color: rgb(119, 102, 204);
  --h4-size: 1.25rem;
  --h4-weight: 600;
  --h5-color: rgb(100, 84, 182);
  --h5-line-height: 1.6;
  --h5-size: 1.125rem;
  --h5-weight: 600;
  --h6-color: rgb(88, 73, 162);
  --h6-line-height: 1.6;
  --h6-size: 1rem;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(83, 85, 95);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(170, 159, 223, 0.1);
  --icon-color: rgb(161, 163, 170);
  --icon-color-active: rgb(155, 137, 245);
  --icon-color-focused: rgb(189, 190, 194);
  --icon-color-hover: rgb(161, 163, 170);
  --indentation-guide-color: rgb(44, 45, 53);
  --indentation-guide-color-active: rgb(83, 85, 95);
  --inline-title-color: rgb(237, 237, 238);
  --inline-title-size: 2rem;
  --input-date-separator: rgb(83, 85, 95);
  --input-placeholder-color: rgb(83, 85, 95);
  --interactive-accent: rgb(138, 117, 240);
  --interactive-accent-hover: rgb(157, 140, 242);
  --interactive-accent-hsl: 250, 80%, 70%;
  --interactive-hover: rgb(59, 60, 69);
  --interactive-normal: rgb(44, 45, 53);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.6;
  --link-color: rgb(155, 137, 245);
  --link-color-hover: rgb(190, 177, 251);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(155, 137, 245);
  --link-external-color-hover: rgb(190, 177, 251);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(155, 137, 245);
  --link-unresolved-decoration-color: rgba(138, 117, 240, 0.3);
  --list-marker-color: rgb(83, 85, 95);
  --list-marker-color-collapsed: rgb(155, 137, 245);
  --list-marker-color-hover: rgb(161, 163, 170);
  --menu-background: rgb(27, 28, 34);
  --menu-border-color: rgb(59, 60, 69);
  --menu-radius: 6px;
  --metadata-border-color: rgb(44, 45, 53);
  --metadata-divider-color: rgb(44, 45, 53);
  --metadata-input-background-active: rgba(179, 187, 230, 0.05);
  --metadata-input-font: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(189, 190, 194);
  --metadata-label-background-active: rgba(179, 187, 230, 0.05);
  --metadata-label-font: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(161, 163, 170);
  --metadata-label-text-color-hover: rgb(161, 163, 170);
  --metadata-property-background-active: rgba(179, 187, 230, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(83, 85, 95);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(59, 60, 69);
  --modal-background: rgb(19, 21, 27);
  --modal-border-color: rgb(44, 45, 53);
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(83, 85, 95);
  --nav-collapse-icon-color-collapsed: rgb(83, 85, 95);
  --nav-heading-color: rgb(189, 190, 194);
  --nav-heading-color-collapsed: rgb(83, 85, 95);
  --nav-heading-color-collapsed-hover: rgb(161, 163, 170);
  --nav-heading-color-hover: rgb(189, 190, 194);
  --nav-indentation-guide-color: rgb(44, 45, 53);
  --nav-item-background-active: rgba(179, 187, 230, 0.05);
  --nav-item-background-hover: rgba(179, 187, 230, 0.05);
  --nav-item-background-selected: rgba(138, 117, 240, 0.15);
  --nav-item-color: rgb(161, 163, 170);
  --nav-item-color-active: rgb(189, 190, 194);
  --nav-item-color-highlighted: rgb(155, 137, 245);
  --nav-item-color-hover: rgb(189, 190, 194);
  --nav-item-color-selected: rgb(189, 190, 194);
  --nav-tag-color: rgb(83, 85, 95);
  --nav-tag-color-active: rgb(161, 163, 170);
  --nav-tag-color-hover: rgb(161, 163, 170);
  --pdf-background: rgb(19, 21, 27);
  --pdf-page-background: rgb(19, 21, 27);
  --pdf-shadow: 0 0 0 1px rgb(44, 45, 53);
  --pdf-sidebar-background: rgb(19, 21, 27);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(44, 45, 53);
  --pill-border-color: rgb(44, 45, 53);
  --pill-border-color-hover: rgb(59, 60, 69);
  --pill-color: rgb(161, 163, 170);
  --pill-color-hover: rgb(189, 190, 194);
  --pill-color-remove: rgb(83, 85, 95);
  --pill-color-remove-hover: rgb(155, 137, 245);
  --prompt-background: rgb(19, 21, 27);
  --prompt-border-color: rgb(34, 35, 42);
  --radius-l: 10px;
  --radius-m: 6px;
  --raised-background: color-mix(in srgb, rgb(44, 45, 53) 65%, transparent) linear-gradient(rgb(44, 45, 53), color-mix(in srgb, rgb(44, 45, 53) 65%, transparent));
  --ribbon-background: rgb(27, 28, 34);
  --ribbon-background-collapsed: rgb(27, 28, 34);
  --ribbon-padding: 8px 0px;
  --ribbon-width: 40px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.15);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-opacity: 0;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.08);
  --search-clear-button-color: rgb(161, 163, 170);
  --search-icon-color: rgb(161, 163, 170);
  --search-result-background: rgb(19, 21, 27);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(189, 190, 194);
  --setting-items-background: rgb(27, 28, 34);
  --setting-items-border-color: rgb(44, 45, 53);
  --setting-items-radius: 10px;
  --slider-thumb-border-color: rgb(59, 60, 69);
  --slider-track-background: rgb(44, 45, 53);
  --status-bar-background: rgb(27, 28, 34);
  --status-bar-border-color: rgb(44, 45, 53);
  --status-bar-border-width: 1px 0 0 0px;
  --status-bar-height: 24px;
  --status-bar-radius: 0;
  --status-bar-text-color: rgb(161, 163, 170);
  --suggestion-background: rgb(19, 21, 27);
  --sync-avatar-color-1: rgb(219 75 75);
  --sync-avatar-color-2: rgb(237 139 79);
  --sync-avatar-color-3: rgb(230 232 118);
  --sync-avatar-color-4: rgb(34 208 162);
  --sync-avatar-color-5: rgb(82 183 213);
  --sync-avatar-color-6: rgb(122 176 247);
  --sync-avatar-color-7: rgb(149, 128, 255);
  --sync-avatar-color-8: rgb(255 151 207);
  --tab-active-color: rgb(44, 45, 53);
  --tab-background-active: rgb(19, 21, 27);
  --tab-container-background: rgb(27, 28, 34);
  --tab-divider-color: transparent;
  --tab-min-width: 92px;
  --tab-outline-color: rgb(44, 45, 53);
  --tab-switcher-background: rgb(27, 28, 34);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 28, 34), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 117, 240);
  --tab-text-color: rgb(83, 85, 95);
  --tab-text-color-active: rgb(161, 163, 170);
  --tab-text-color-focused: rgb(161, 163, 170);
  --tab-text-color-focused-active: rgb(161, 163, 170);
  --tab-text-color-focused-active-current: rgb(189, 190, 194);
  --tab-text-color-focused-highlighted: rgb(155, 137, 245);
  --table-add-button-border-color: rgb(44, 45, 53);
  --table-border-color: rgb(44, 45, 53);
  --table-drag-handle-background-active: rgb(138, 117, 240);
  --table-drag-handle-color: rgb(83, 85, 95);
  --table-header-background: rgb(27, 28, 34);
  --table-header-background-hover: rgb(27, 28, 34);
  --table-header-border-color: rgb(44, 45, 53);
  --table-header-color: rgb(189, 190, 194);
  --table-selection: rgba(138, 117, 240, 0.1);
  --table-selection-border-color: rgb(138, 117, 240);
  --tag-background: rgba(138, 117, 240, 0.1);
  --tag-background-hover: rgba(138, 117, 240, 0.2);
  --tag-border-color: rgba(138, 117, 240, 0.15);
  --tag-border-color-hover: rgba(138, 117, 240, 0.15);
  --tag-color: rgb(155, 137, 245);
  --tag-color-hover: rgb(155, 137, 245);
  --tag-radius: 6px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(155, 137, 245);
  --text-accent-hover: rgb(190, 177, 251);
  --text-error: rgb(219 75 75);
  --text-faint: rgb(83, 85, 95);
  --text-highlight-bg: rgb(59, 60, 69);
  --text-muted: rgb(161, 163, 170);
  --text-normal: rgb(189, 190, 194);
  --text-selection: rgb(34, 35, 42);
  --text-success: rgb(34 208 162);
  --text-warning: rgb(237 139 79);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(27, 28, 34);
  --titlebar-background-focused: rgb(27, 28, 34);
  --titlebar-border-color: rgb(44, 45, 53);
  --titlebar-text-color: rgb(161, 163, 170);
  --titlebar-text-color-focused: rgb(189, 190, 194);
  --vault-profile-color: rgb(189, 190, 194);
  --vault-profile-color-hover: rgb(189, 190, 194);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 28, 34);
  color: rgb(189, 190, 194);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(19, 21, 27);
  color: rgb(189, 190, 194);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 28, 34);
  color: rgb(189, 190, 194);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 45, 53);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 28, 34);
  border-left-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
}

body div#quartz-root {
  background-color: rgb(19, 21, 27);
  color: rgb(189, 190, 194);
}`,
    typography: `body .page article p > b, b {
  color: rgb(208, 208, 210);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 210) none 0px;
  text-decoration: rgb(208, 208, 210);
  text-decoration-color: rgb(208, 208, 210);
}

body .page article p > em, em {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body .page article p > i, i {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body .page article p > strong, strong {
  color: rgb(208, 208, 210);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 210) none 0px;
  text-decoration: rgb(208, 208, 210);
  text-decoration-color: rgb(208, 208, 210);
}

body .text-highlight {
  background-color: rgb(59, 60, 69);
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body del {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration: line-through rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body p {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(161, 163, 170) none 0px;
  text-decoration: rgb(161, 163, 170);
  text-decoration-color: rgb(161, 163, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(155, 137, 245);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration: rgb(155, 137, 245);
  text-decoration-color: rgb(155, 137, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(155, 137, 245);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration: rgb(155, 137, 245);
  text-decoration-color: rgb(155, 137, 245);
}

body a.internal.broken {
  color: rgb(155, 137, 245);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration: rgba(138, 117, 240, 0.3);
  text-decoration-color: rgba(138, 117, 240, 0.3);
}`,
    lists: `body dd {
  color: rgb(189, 190, 194);
}

body dt {
  color: rgb(189, 190, 194);
}

body ol > li {
  color: rgb(189, 190, 194);
}

body ol.overflow {
  background-color: rgb(19, 21, 27);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body ul > li {
  color: rgb(189, 190, 194);
}

body ul.overflow {
  background-color: rgb(19, 21, 27);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(83, 85, 95);
  text-decoration: rgb(83, 85, 95);
}

body blockquote {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body table {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 216.406px;
}

body td {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

body tr {
  background-color: rgb(27, 28, 34);
}`,
    code: `body code {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
}

body pre > code > [data-line] {
  border-left-color: rgb(82, 183, 213);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(82, 183, 213);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(82, 183, 213);
  border-left-color: rgb(82, 183, 213);
  border-right-color: rgb(82, 183, 213);
  border-top-color: rgb(82, 183, 213);
}

body pre > code, pre:has(> code) {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
}

body pre:has(> code) {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
}`,
    images: `body audio {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body figcaption {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body img {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body video {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    embeds: `body .file-embed {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

body .transclude {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(138, 117, 240);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body .transclude-inner {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(138, 117, 240);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(83, 85, 95);
  text-decoration: rgb(83, 85, 95);
  text-decoration-color: rgb(83, 85, 95);
}

body input[type=checkbox] {
  border-bottom-color: rgb(83, 85, 95);
  border-left-color: rgb(83, 85, 95);
  border-right-color: rgb(83, 85, 95);
  border-top-color: rgb(83, 85, 95);
}

body li.task-list-item[data-task='!'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='*'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='-'] {
  color: rgb(83, 85, 95);
  text-decoration: line-through 1px rgb(83, 85, 95);
  text-decoration-color: rgb(83, 85, 95);
}

body li.task-list-item[data-task='/'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='>'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='?'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='I'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='S'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='b'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='c'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='d'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='f'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='i'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='k'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='l'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='p'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='u'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body li.task-list-item[data-task='w'] {
  color: rgb(189, 190, 194);
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 82, 183, 213;
  background-color: rgba(82, 183, 213, 0.07);
  border-bottom-color: rgba(82, 183, 213, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(82, 183, 213, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(82, 183, 213, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(82, 183, 213, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 149, 128, 255;
  background-color: rgba(149, 128, 255, 0.07);
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.07);
  border-bottom-color: rgba(122, 162, 247, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(122, 162, 247, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(122, 162, 247, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(122, 162, 247, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 149, 128, 255;
  background-color: rgba(149, 128, 255, 0.07);
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.07);
  border-bottom-color: rgba(224, 222, 113, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(224, 222, 113, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(224, 222, 113, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(224, 222, 113, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 139, 148, 158;
  background-color: rgba(139, 148, 158, 0.07);
  border-bottom-color: rgba(139, 148, 158, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(139, 148, 158, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(139, 148, 158, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(139, 148, 158, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 34, 208, 162;
  background-color: rgba(34, 208, 162, 0.07);
  border-bottom-color: rgba(34, 208, 162, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(34, 208, 162, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(34, 208, 162, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(34, 208, 162, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 82, 183, 213;
  background-color: rgba(82, 183, 213, 0.07);
  border-bottom-color: rgba(82, 183, 213, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(82, 183, 213, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(82, 183, 213, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(82, 183, 213, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.07);
  border-bottom-color: rgba(122, 162, 247, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(122, 162, 247, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(122, 162, 247, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(122, 162, 247, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 237, 139, 79;
  background-color: rgba(237, 139, 79, 0.07);
  border-bottom-color: rgba(237, 139, 79, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 139, 79, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(237, 139, 79, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(237, 139, 79, 0.15);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 35, 42);
  border-bottom-color: rgb(34, 35, 42);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 190, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(189, 190, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(179, 187, 230, 0.05);
  color: rgb(189, 190, 194);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(34, 35, 42);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 28, 34);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(179, 187, 230, 0.05);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(179, 187, 230, 0.05);
  color: rgb(189, 190, 194);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 117, 240, 0.1);
  border-bottom-color: rgba(138, 117, 240, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(138, 117, 240, 0.15);
  border-right-color: rgba(138, 117, 240, 0.15);
  border-top-color: rgba(138, 117, 240, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(155, 137, 245);
}

body h1 {
  color: rgb(159, 146, 221);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(145, 131, 216);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(237, 237, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(131, 115, 211);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(119, 102, 204);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(100, 84, 182);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(88, 73, 162);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
}`,
    scrollbars: `body .callout {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(19, 21, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(161, 163, 170);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(161, 163, 170);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(161, 163, 170);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(161, 163, 170);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(161, 163, 170);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(161, 163, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(179, 187, 230, 0.05);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(161, 163, 170);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-left-width: 0px;
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 0px;
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(161, 163, 170);
  text-decoration: rgb(161, 163, 170);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(161, 163, 170);
  text-decoration: rgb(161, 163, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body li.section-li > .section .meta {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(161, 163, 170);
  text-decoration: rgb(161, 163, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(161, 163, 170);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(161, 163, 170);
  stroke: rgb(161, 163, 170);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
}

body .breadcrumb-element p {
  color: rgb(83, 85, 95);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

body .metadata {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(27, 28, 34);
}

body .page-header h2.page-title {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(189, 190, 194);
  text-decoration: underline dotted rgb(189, 190, 194);
}

body details {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body input[type=text] {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(27, 28, 34);
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

body sub {
  color: rgb(189, 190, 194);
}

body summary {
  color: rgb(189, 190, 194);
}

body sup {
  color: rgb(189, 190, 194);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 250;
  --accent-l: 75%;
  --accent-s: 80%;
  --anim-duration-moderate: 250ms;
  --anim-duration-slow: 400ms;
  --background-modifier-active-hover: rgba(157, 140, 242, 0.1);
  --background-modifier-border: rgb(212, 215, 226);
  --background-modifier-border-focus: rgb(148, 152, 168);
  --background-modifier-border-hover: rgb(190, 193, 207);
  --background-modifier-cover: rgba(0, 0, 0, 0.5);
  --background-modifier-error: rgb(250, 55, 62);
  --background-modifier-error-hover: rgb(250, 55, 62);
  --background-modifier-error-rgb: 250, 55, 62;
  --background-modifier-form-field: rgba(255, 255, 255, 0.5);
  --background-modifier-form-field-hover: rgba(255, 255, 255, 0.5);
  --background-modifier-hover: rgba(219, 223, 240, 0.8);
  --background-modifier-success: rgb(14, 192, 67);
  --background-modifier-success-rgb: 14, 192, 67;
  --background-primary: rgb(249, 249, 251);
  --background-primary-alt: rgb(242, 243, 247);
  --background-secondary: rgb(242, 243, 247);
  --background-secondary-alt: rgb(242, 243, 247);
  --base-05: rgb(18, 18, 23);
  --base-10: rgb(27, 28, 34);
  --base-15: rgb(34, 35, 42);
  --base-20: rgb(44, 45, 53);
  --base-25: rgb(57, 59, 70);
  --base-30: rgb(80, 83, 98);
  --base-35: rgb(148, 152, 168);
  --base-40: rgb(190, 193, 207);
  --base-45: rgb(212, 215, 226);
  --base-50: rgb(228, 231, 241);
  --base-55: rgb(242, 243, 247);
  --base-60: rgb(249, 249, 251);
  --base-hue: 230;
  --bases-cards-background: rgb(249, 249, 251);
  --bases-cards-cover-background: rgb(242, 243, 247);
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px rgb(212, 215, 226);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(190, 193, 207);
  --bases-embed-border-color: rgb(212, 215, 226);
  --bases-group-heading-property-color: rgb(44, 45, 53);
  --bases-table-border-color: rgb(212, 215, 226);
  --bases-table-cell-background-active: rgb(249, 249, 251);
  --bases-table-cell-background-disabled: rgb(242, 243, 247);
  --bases-table-cell-background-selected: rgba(157, 140, 242, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(148, 152, 168);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(157, 140, 242);
  --bases-table-group-background: rgb(242, 243, 247);
  --bases-table-header-background: rgb(249, 249, 251);
  --bases-table-header-background-hover: rgba(219, 223, 240, 0.8);
  --bases-table-header-color: rgb(44, 45, 53);
  --bases-table-summary-background: rgb(249, 249, 251);
  --bases-table-summary-background-hover: rgba(219, 223, 240, 0.8);
  --blockquote-border-color: rgb(157, 140, 242);
  --blur-background: color-mix(in srgb, rgb(249, 249, 251) 65%, transparent) linear-gradient(rgb(249, 249, 251), color-mix(in srgb, rgb(249, 249, 251) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: rgb(27, 28, 34);
  --callout-border-opacity: 0.15;
  --callout-border-width: 1px;
  --callout-bug: 250, 55, 62;
  --callout-default: 111, 85, 241;
  --callout-error: 250, 55, 62;
  --callout-example: 111, 85, 241;
  --callout-fail: 250, 55, 62;
  --callout-important: 61, 155, 184;
  --callout-info: 86, 128, 219;
  --callout-padding: 16px 16px 16px 24px;
  --callout-question: 229, 199, 0;
  --callout-quote: 138, 147, 158;
  --callout-success: 14, 192, 67;
  --callout-summary: 61, 155, 184;
  --callout-tip: 61, 155, 184;
  --callout-todo: 86, 128, 219;
  --callout-warning: 248, 119, 33;
  --canvas-background: rgb(249, 249, 251);
  --canvas-card-label-color: rgb(148, 152, 168);
  --canvas-color-1: 250, 55, 62;
  --canvas-color-2: 248, 119, 33;
  --canvas-color-3: 229, 199, 0;
  --canvas-color-4: 14, 192, 67;
  --canvas-color-5: 61, 155, 184;
  --canvas-color-6: 111, 85, 241;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(150px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 150px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: rgb(34, 35, 42);
  --checkbox-border-color: rgb(148, 152, 168);
  --checkbox-border-color-hover: rgb(44, 45, 53);
  --checkbox-color: rgb(157, 140, 242);
  --checkbox-color-hover: rgb(138, 117, 240);
  --checkbox-marker-color: rgb(249, 249, 251);
  --checkbox-progress-width: 32px;
  --checklist-done-color: rgb(148, 152, 168);
  --checklist-done-decoration: none;
  --clickable-icon-radius: 6px;
  --code-background: rgb(242, 243, 247);
  --code-border-color: rgb(212, 215, 226);
  --code-bracket-background: rgba(219, 223, 240, 0.8);
  --code-comment: rgb(148, 152, 168);
  --code-function: rgb(61 155 184);
  --code-important: rgb(250, 55, 62);
  --code-keyword: rgb(111, 85, 241);
  --code-normal: rgb(34, 35, 42);
  --code-operator: rgb(248, 119, 33);
  --code-property: rgb(86 128 219);
  --code-punctuation: rgb(212, 73, 147);
  --code-string: rgb(14, 192, 67);
  --code-tag: rgb(229, 199, 0);
  --code-value: rgb(61 155 184);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(148, 152, 168);
  --collapse-icon-color-collapsed: rgb(115, 90, 242);
  --color-accent: rgb(157, 140, 242);
  --color-accent-1: rgb(157, 140, 242);
  --color-accent-2: rgb(138, 117, 240);
  --color-accent-hsl: 250, 80%, 75%;
  --color-black: rgb(15, 20, 26);
  --color-black-rgb: 15, 20, 26;
  --color-blue: rgb(86 128 219);
  --color-blue-rgb: 86, 128, 219;
  --color-cyan: rgb(61 155 184);
  --color-cyan-rgb: 61, 155, 184;
  --color-green: rgb(14, 192, 67);
  --color-green-rgb: 14, 192, 67;
  --color-muted: rgb(138, 147, 158);
  --color-muted-rgb: 138, 147, 158;
  --color-orange: rgb(248, 119, 33);
  --color-orange-rgb: 248, 119, 33;
  --color-pink: rgb(212, 73, 147);
  --color-pink-rgb: 212, 73, 147;
  --color-purple: rgb(111, 85, 241);
  --color-purple-rgb: 111, 85, 241;
  --color-red: rgb(250, 55, 62);
  --color-red-rgb: 250, 55, 62;
  --color-teal: rgb(44, 174, 186);
  --color-teal-rgb: 44, 174, 186;
  --color-white: rgb(222, 222, 222);
  --color-white-rgb: 222, 222, 222;
  --color-yellow: rgb(229, 199, 0);
  --color-yellow-rgb: 229, 199, 0;
  --cursor: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(212, 215, 226);
  --divider-color-hover: rgb(157, 140, 242);
  --dropdown-background: rgb(242, 243, 247);
  --dropdown-background-hover: rgb(228, 231, 241);
  --embed-block-shadow-hover: 0 0 0 1px rgb(212, 215, 226), inset 0 0 0 1px rgb(212, 215, 226);
  --embed-border-start: 2px solid rgb(157, 140, 242);
  --file-header-background: rgb(249, 249, 251);
  --file-header-background-focused: rgb(249, 249, 251);
  --file-header-font: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(242, 243, 247);
  --flair-color: rgb(34, 35, 42);
  --font-editor-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-interface: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mermaid: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace;
  --font-print: '??', '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, 'Arial';
  --font-text: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --footnote-divider-color: rgb(212, 215, 226);
  --footnote-id-color: rgb(44, 45, 53);
  --footnote-id-color-no-occurrences: rgb(148, 152, 168);
  --footnote-input-background-active: rgba(219, 223, 240, 0.8);
  --footnote-line-height: 1.6;
  --frame-left-space: 6px;
  --frame-right-space: 132px;
  --graph-node: rgb(44, 45, 53);
  --graph-node-attachment: rgb(229, 199, 0);
  --graph-node-focused: rgb(115, 90, 242);
  --graph-node-tag: rgb(14, 192, 67);
  --graph-node-unresolved: rgb(148, 152, 168);
  --graph-text: rgb(34, 35, 42);
  --gray: var(--text-muted);
  --h1-color: rgb(159, 146, 221);
  --h1-size: 1.8rem;
  --h2-color: rgb(145, 131, 216);
  --h2-size: 1.5rem;
  --h2-weight: 600;
  --h3-color: rgb(131, 115, 211);
  --h3-size: 1.45rem;
  --h3-weight: 600;
  --h4-color: rgb(119, 102, 204);
  --h4-size: 1.25rem;
  --h4-weight: 600;
  --h5-color: rgb(100, 84, 182);
  --h5-line-height: 1.6;
  --h5-size: 1.125rem;
  --h5-weight: 600;
  --h6-color: rgb(88, 73, 162);
  --h6-line-height: 1.6;
  --h6-size: 1rem;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(148, 152, 168);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(170, 159, 223, 0.1);
  --icon-color: rgb(44, 45, 53);
  --icon-color-active: rgb(115, 90, 242);
  --icon-color-focused: rgb(34, 35, 42);
  --icon-color-hover: rgb(44, 45, 53);
  --indentation-guide-color: rgb(212, 215, 226);
  --indentation-guide-color-active: rgb(148, 152, 168);
  --inline-title-color: rgb(18, 18, 23);
  --inline-title-size: 2rem;
  --input-date-separator: rgb(148, 152, 168);
  --input-placeholder-color: rgb(148, 152, 168);
  --interactive-accent: rgb(157, 140, 242);
  --interactive-accent-hover: rgb(138, 117, 240);
  --interactive-accent-hsl: 250, 80%, 75%;
  --interactive-hover: rgb(228, 231, 241);
  --interactive-normal: rgb(242, 243, 247);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.6;
  --link-color: rgb(115, 90, 242);
  --link-color-hover: rgb(69, 46, 184);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(115, 90, 242);
  --link-external-color-hover: rgb(69, 46, 184);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(115, 90, 242);
  --link-unresolved-decoration-color: rgba(157, 140, 242, 0.3);
  --list-marker-color: rgb(148, 152, 168);
  --list-marker-color-collapsed: rgb(115, 90, 242);
  --list-marker-color-hover: rgb(44, 45, 53);
  --menu-background: rgb(242, 243, 247);
  --menu-border-color: rgb(190, 193, 207);
  --menu-radius: 6px;
  --metadata-border-color: rgb(212, 215, 226);
  --metadata-divider-color: rgb(212, 215, 226);
  --metadata-input-background-active: rgba(219, 223, 240, 0.8);
  --metadata-input-font: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(34, 35, 42);
  --metadata-label-background-active: rgba(219, 223, 240, 0.8);
  --metadata-label-font: '??', Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(44, 45, 53);
  --metadata-label-text-color-hover: rgb(44, 45, 53);
  --metadata-property-background-active: rgba(219, 223, 240, 0.8);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(148, 152, 168);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(190, 193, 207);
  --modal-background: rgb(249, 249, 251);
  --modal-border-color: rgb(212, 215, 226);
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(148, 152, 168);
  --nav-collapse-icon-color-collapsed: rgb(148, 152, 168);
  --nav-heading-color: rgb(34, 35, 42);
  --nav-heading-color-collapsed: rgb(148, 152, 168);
  --nav-heading-color-collapsed-hover: rgb(44, 45, 53);
  --nav-heading-color-hover: rgb(34, 35, 42);
  --nav-indentation-guide-color: rgb(212, 215, 226);
  --nav-item-background-active: rgba(219, 223, 240, 0.8);
  --nav-item-background-hover: rgba(219, 223, 240, 0.8);
  --nav-item-background-selected: rgba(157, 140, 242, 0.15);
  --nav-item-color: rgb(44, 45, 53);
  --nav-item-color-active: rgb(34, 35, 42);
  --nav-item-color-highlighted: rgb(115, 90, 242);
  --nav-item-color-hover: rgb(34, 35, 42);
  --nav-item-color-selected: rgb(34, 35, 42);
  --nav-tag-color: rgb(148, 152, 168);
  --nav-tag-color-active: rgb(44, 45, 53);
  --nav-tag-color-hover: rgb(44, 45, 53);
  --pdf-background: rgb(249, 249, 251);
  --pdf-page-background: rgb(249, 249, 251);
  --pdf-sidebar-background: rgb(249, 249, 251);
  --pill-border-color: rgb(212, 215, 226);
  --pill-border-color-hover: rgb(190, 193, 207);
  --pill-color: rgb(44, 45, 53);
  --pill-color-hover: rgb(34, 35, 42);
  --pill-color-remove: rgb(148, 152, 168);
  --pill-color-remove-hover: rgb(115, 90, 242);
  --prompt-background: rgb(249, 249, 251);
  --prompt-border-color: rgb(228, 231, 241);
  --radius-l: 10px;
  --radius-m: 6px;
  --raised-background: color-mix(in srgb, rgb(249, 249, 251) 65%, transparent) linear-gradient(rgb(249, 249, 251), color-mix(in srgb, rgb(249, 249, 251) 65%, transparent));
  --ribbon-background: rgb(242, 243, 247);
  --ribbon-background-collapsed: rgb(242, 243, 247);
  --ribbon-padding: 8px 0px;
  --ribbon-width: 40px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-opacity: 0;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: rgb(44, 45, 53);
  --search-icon-color: rgb(44, 45, 53);
  --search-result-background: rgb(249, 249, 251);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(34, 35, 42);
  --setting-items-background: rgb(242, 243, 247);
  --setting-items-border-color: rgb(212, 215, 226);
  --setting-items-radius: 10px;
  --slider-thumb-border-color: rgb(190, 193, 207);
  --slider-track-background: rgb(212, 215, 226);
  --status-bar-background: rgb(242, 243, 247);
  --status-bar-border-color: rgb(212, 215, 226);
  --status-bar-border-width: 1px 0 0 0px;
  --status-bar-height: 24px;
  --status-bar-radius: 0;
  --status-bar-text-color: rgb(44, 45, 53);
  --suggestion-background: rgb(249, 249, 251);
  --sync-avatar-color-1: rgb(250, 55, 62);
  --sync-avatar-color-2: rgb(248, 119, 33);
  --sync-avatar-color-3: rgb(229, 199, 0);
  --sync-avatar-color-4: rgb(14, 192, 67);
  --sync-avatar-color-5: rgb(61 155 184);
  --sync-avatar-color-6: rgb(86 128 219);
  --sync-avatar-color-7: rgb(111, 85, 241);
  --sync-avatar-color-8: rgb(212, 73, 147);
  --tab-active-color: rgb(249, 249, 251);
  --tab-active-shadow: inset 0 0 0 1px rgb(212, 215, 226);
  --tab-background-active: rgb(249, 249, 251);
  --tab-container-background: rgb(242, 243, 247);
  --tab-divider-color: transparent;
  --tab-min-width: 92px;
  --tab-outline-color: rgb(212, 215, 226);
  --tab-switcher-background: rgb(242, 243, 247);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(242, 243, 247), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(157, 140, 242);
  --tab-text-color: rgb(148, 152, 168);
  --tab-text-color-active: rgb(44, 45, 53);
  --tab-text-color-focused: rgb(44, 45, 53);
  --tab-text-color-focused-active: rgb(44, 45, 53);
  --tab-text-color-focused-active-current: rgb(34, 35, 42);
  --tab-text-color-focused-highlighted: rgb(115, 90, 242);
  --table-add-button-border-color: rgb(212, 215, 226);
  --table-border-color: rgb(212, 215, 226);
  --table-drag-handle-background-active: rgb(157, 140, 242);
  --table-drag-handle-color: rgb(148, 152, 168);
  --table-header-background: rgb(242, 243, 247);
  --table-header-background-hover: rgb(242, 243, 247);
  --table-header-border-color: rgb(212, 215, 226);
  --table-header-color: rgb(34, 35, 42);
  --table-selection: rgba(157, 140, 242, 0.1);
  --table-selection-border-color: rgb(157, 140, 242);
  --tag-background: rgba(157, 140, 242, 0.1);
  --tag-background-hover: rgba(157, 140, 242, 0.2);
  --tag-border-color: rgba(157, 140, 242, 0.15);
  --tag-border-color-hover: rgba(157, 140, 242, 0.15);
  --tag-color: rgb(115, 90, 242);
  --tag-color-hover: rgb(115, 90, 242);
  --tag-radius: 6px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(115, 90, 242);
  --text-accent-hover: rgb(69, 46, 184);
  --text-error: rgb(250, 55, 62);
  --text-faint: rgb(148, 152, 168);
  --text-highlight-bg: rgb(212, 215, 226);
  --text-muted: rgb(44, 45, 53);
  --text-normal: rgb(34, 35, 42);
  --text-selection: rgb(228, 231, 241);
  --text-success: rgb(14, 192, 67);
  --text-warning: rgb(248, 119, 33);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(242, 243, 247);
  --titlebar-background-focused: rgb(242, 243, 247);
  --titlebar-border-color: rgb(212, 215, 226);
  --titlebar-text-color: rgb(44, 45, 53);
  --titlebar-text-color-focused: rgb(34, 35, 42);
  --vault-profile-color: rgb(34, 35, 42);
  --vault-profile-color-hover: rgb(34, 35, 42);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 247);
  color: rgb(34, 35, 42);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(249, 249, 251);
  color: rgb(34, 35, 42);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 247);
  color: rgb(34, 35, 42);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(212, 215, 226);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 247);
  border-left-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
}

body div#quartz-root {
  background-color: rgb(249, 249, 251);
  color: rgb(34, 35, 42);
}`,
    typography: `body .page article p > b, b {
  color: rgb(27, 28, 34);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(27, 28, 34) none 0px;
  text-decoration: rgb(27, 28, 34);
  text-decoration-color: rgb(27, 28, 34);
}

body .page article p > em, em {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body .page article p > i, i {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body .page article p > strong, strong {
  color: rgb(27, 28, 34);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(27, 28, 34) none 0px;
  text-decoration: rgb(27, 28, 34);
  text-decoration-color: rgb(27, 28, 34);
}

body .text-highlight {
  background-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body del {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration: line-through rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body p {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(44, 45, 53) none 0px;
  text-decoration: rgb(44, 45, 53);
  text-decoration-color: rgb(44, 45, 53);
}`,
    links: `body a.external, footer a {
  color: rgb(115, 90, 242);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration: rgb(115, 90, 242);
  text-decoration-color: rgb(115, 90, 242);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(115, 90, 242);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration: rgb(115, 90, 242);
  text-decoration-color: rgb(115, 90, 242);
}

body a.internal.broken {
  color: rgb(115, 90, 242);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration: rgba(157, 140, 242, 0.3);
  text-decoration-color: rgba(157, 140, 242, 0.3);
}`,
    lists: `body dd {
  color: rgb(34, 35, 42);
}

body dt {
  color: rgb(34, 35, 42);
}

body ol > li {
  color: rgb(34, 35, 42);
}

body ol.overflow {
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body ul > li {
  color: rgb(34, 35, 42);
}

body ul.overflow {
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(148, 152, 168);
  text-decoration: rgb(148, 152, 168);
}

body blockquote {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body table {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 216.406px;
}

body td {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

body tr {
  background-color: rgb(242, 243, 247);
}`,
    code: `body code {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
}

body pre > code > [data-line] {
  border-left-color: rgb(61, 155, 184);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(61, 155, 184);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(61, 155, 184);
  border-left-color: rgb(61, 155, 184);
  border-right-color: rgb(61, 155, 184);
  border-top-color: rgb(61, 155, 184);
}

body pre > code, pre:has(> code) {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
}

body pre:has(> code) {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
}`,
    images: `body audio {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body figcaption {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body img {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body video {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    embeds: `body .file-embed {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

body .transclude {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(157, 140, 242);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body .transclude-inner {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(157, 140, 242);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(148, 152, 168);
  text-decoration: rgb(148, 152, 168);
  text-decoration-color: rgb(148, 152, 168);
}

body input[type=checkbox] {
  border-bottom-color: rgb(148, 152, 168);
  border-left-color: rgb(148, 152, 168);
  border-right-color: rgb(148, 152, 168);
  border-top-color: rgb(148, 152, 168);
}

body li.task-list-item[data-task='!'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='*'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='-'] {
  color: rgb(148, 152, 168);
  text-decoration: line-through 1px rgb(148, 152, 168);
  text-decoration-color: rgb(148, 152, 168);
}

body li.task-list-item[data-task='/'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='>'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='?'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='I'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='S'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='b'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='c'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='d'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='f'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='i'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='k'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='l'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='p'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='u'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body li.task-list-item[data-task='w'] {
  color: rgb(34, 35, 42);
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 61, 155, 184;
  background-color: rgba(61, 155, 184, 0.07);
  border-bottom-color: rgba(61, 155, 184, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(61, 155, 184, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(61, 155, 184, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(61, 155, 184, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 250, 55, 62;
  background-color: rgba(250, 55, 62, 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 250, 55, 62;
  background-color: rgba(250, 55, 62, 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 111, 85, 241;
  background-color: rgba(111, 85, 241, 0.07);
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 250, 55, 62;
  background-color: rgba(250, 55, 62, 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 86, 128, 219;
  background-color: rgba(86, 128, 219, 0.07);
  border-bottom-color: rgba(86, 128, 219, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(86, 128, 219, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(86, 128, 219, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(86, 128, 219, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 111, 85, 241;
  background-color: rgba(111, 85, 241, 0.07);
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 229, 199, 0;
  background-color: rgba(229, 199, 0, 0.07);
  border-bottom-color: rgba(229, 199, 0, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(229, 199, 0, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(229, 199, 0, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(229, 199, 0, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 138, 147, 158;
  background-color: rgba(138, 147, 158, 0.07);
  border-bottom-color: rgba(138, 147, 158, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 147, 158, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(138, 147, 158, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(138, 147, 158, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 14, 192, 67;
  background-color: rgba(14, 192, 67, 0.07);
  border-bottom-color: rgba(14, 192, 67, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(14, 192, 67, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(14, 192, 67, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(14, 192, 67, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 61, 155, 184;
  background-color: rgba(61, 155, 184, 0.07);
  border-bottom-color: rgba(61, 155, 184, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(61, 155, 184, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(61, 155, 184, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(61, 155, 184, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 86, 128, 219;
  background-color: rgba(86, 128, 219, 0.07);
  border-bottom-color: rgba(86, 128, 219, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(86, 128, 219, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(86, 128, 219, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(86, 128, 219, 0.15);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 248, 119, 33;
  background-color: rgba(248, 119, 33, 0.07);
  border-bottom-color: rgba(248, 119, 33, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(248, 119, 33, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(248, 119, 33, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(248, 119, 33, 0.15);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(228, 231, 241);
  border-bottom-color: rgb(228, 231, 241);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(228, 231, 241);
  border-right-color: rgb(228, 231, 241);
  border-top-color: rgb(228, 231, 241);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(34, 35, 42);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(34, 35, 42);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(219, 223, 240, 0.8);
  color: rgb(34, 35, 42);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(228, 231, 241);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(228, 231, 241);
  border-right-color: rgb(228, 231, 241);
  border-top-color: rgb(228, 231, 241);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 247);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(219, 223, 240, 0.8);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(219, 223, 240, 0.8);
  color: rgb(34, 35, 42);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(157, 140, 242, 0.1);
  border-bottom-color: rgba(157, 140, 242, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(157, 140, 242, 0.15);
  border-right-color: rgba(157, 140, 242, 0.15);
  border-top-color: rgba(157, 140, 242, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(115, 90, 242);
}

body h1 {
  color: rgb(159, 146, 221);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(145, 131, 216);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(18, 18, 23);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(131, 115, 211);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(119, 102, 204);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(100, 84, 182);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(88, 73, 162);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
}`,
    scrollbars: `body .callout {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(249, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 249, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(44, 45, 53);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(44, 45, 53);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(44, 45, 53);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(44, 45, 53);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(44, 45, 53);
  cursor: pointer;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(44, 45, 53);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(219, 223, 240, 0.8);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 45, 53);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-left-width: 0px;
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  border-top-left-radius: 0px;
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(44, 45, 53);
  text-decoration: rgb(44, 45, 53);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(44, 45, 53);
  text-decoration: rgb(44, 45, 53);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body li.section-li > .section .meta {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(44, 45, 53);
  text-decoration: rgb(44, 45, 53);
}

body ul.section-ul {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 45, 53);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(44, 45, 53);
  stroke: rgb(44, 45, 53);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
}

body .breadcrumb-element p {
  color: rgb(148, 152, 168);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

body .metadata {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(242, 243, 247);
}

body .page-header h2.page-title {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(34, 35, 42);
  text-decoration: underline dotted rgb(34, 35, 42);
}

body details {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body input[type=text] {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(242, 243, 247);
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
  font-family: "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

body sub {
  color: rgb(34, 35, 42);
}

body summary {
  color: rgb(34, 35, 42);
}

body sup {
  color: rgb(34, 35, 42);
}`,
  },
};
