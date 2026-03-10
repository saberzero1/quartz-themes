import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "camena",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["avenir", "cascadia-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: rgb(138, 92, 245);
  --accent-rgb: from rgb(138, 92, 245) r g b;
  --background-modifier-border: rgb(79, 63, 115);
  --background-modifier-border-focus: rgb(101, 81, 148);
  --background-modifier-border-hover: rgb(90, 72, 132);
  --background-modifier-error: rgb(245, 105, 92);
  --background-modifier-error-hover: rgb(245, 105, 92);
  --background-modifier-error-rgb: from rgb(245, 105, 92) r g b;
  --background-modifier-form-field: rgb(45, 36, 66);
  --background-modifier-form-field-hover: rgb(45, 36, 66);
  --background-modifier-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --background-modifier-message: rgb(138, 92, 245);
  --background-modifier-success: rgb(143, 245, 92);
  --background-modifier-success-rgb: from rgb(143, 245, 92) r g b;
  --background-primary: rgb(23, 18, 33);
  --background-primary-alt: rgb(45, 36, 66);
  --background-secondary: rgb(34, 27, 49);
  --background-secondary-alt: rgb(34, 27, 49);
  --bases-cards-background: rgb(23, 18, 33);
  --bases-cards-cover-background: rgb(45, 36, 66);
  --bases-cards-font-size: 0.875rem;
  --bases-cards-shadow: 0 0 0 1px rgb(79, 63, 115);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(90, 72, 132);
  --bases-embed-border-color: rgb(79, 63, 115);
  --bases-group-heading-property-color: rgb(113, 91, 164);
  --bases-group-heading-value-size: 0.875rem;
  --bases-table-border-color: rgb(138, 92, 245);
  --bases-table-cell-background-active: rgb(23, 18, 33);
  --bases-table-cell-background-disabled: rgb(45, 36, 66);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(101, 81, 148);
  --bases-table-font-size: 0.875rem;
  --bases-table-group-background: rgb(45, 36, 66);
  --bases-table-header-background: rgb(23, 18, 33);
  --bases-table-header-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --bases-table-header-color: rgb(23, 18, 33);
  --bases-table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.15);
  --bases-table-summary-background: rgb(23, 18, 33);
  --bases-table-summary-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --blue-h: 210;
  --blur-background: color-mix(in srgb, rgb(34, 27, 49) 65%, transparent) linear-gradient(rgb(34, 27, 49), color-mix(in srgb, rgb(34, 27, 49) 65%, transparent));
  --bodyFont: var(--font-text);
  --callout-bug: from rgb(245, 105, 92) r g b;
  --callout-color: from rgb(138, 92, 245) r g b;
  --callout-default: from rgb(92, 168, 245) r g b;
  --callout-error: from rgb(245, 105, 92) r g b;
  --callout-example: from rgb(168, 92, 245) r g b;
  --callout-fail: from rgb(245, 105, 92) r g b;
  --callout-important: from rgb(92, 232, 245) r g b;
  --callout-info: from rgb(92, 168, 245) r g b;
  --callout-question: from rgb(245, 156, 92) r g b;
  --callout-quote: from rgb(138, 92, 245) r g b;
  --callout-success: from rgb(143, 245, 92) r g b;
  --callout-summary: from rgb(92, 232, 245) r g b;
  --callout-tip: from rgb(92, 232, 245) r g b;
  --callout-todo: from rgb(92, 168, 245) r g b;
  --callout-warning: from rgb(245, 156, 92) r g b;
  --canvas-background: rgb(23, 18, 33);
  --canvas-card-label-color: rgb(79, 63, 115);
  --canvas-color-1: from rgb(245, 105, 92) r g b;
  --canvas-color-2: from rgb(245, 156, 92) r g b;
  --canvas-color-3: from rgb(245, 219, 92) r g b;
  --canvas-color-4: from rgb(143, 245, 92) r g b;
  --canvas-color-5: from rgb(92, 232, 245) r g b;
  --canvas-color-6: from rgb(168, 92, 245) r g b;
  --canvas-dot-pattern: rgb(79, 63, 115);
  --caret-color: rgb(198, 189, 219);
  --checkbox-border-color: rgb(79, 63, 115);
  --checkbox-border-color-hover: rgb(138, 92, 245);
  --checkbox-color: rgb(113, 91, 164);
  --checkbox-color-hover: rgb(138, 92, 245);
  --checkbox-marker-color: rgb(23, 18, 33);
  --checklist-done-color: rgb(113, 91, 164);
  --code-background: rgba(from rgb(138, 92, 245) r g b / 0.15);
  --code-border-color: rgb(79, 63, 115);
  --code-bracket-background: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --code-comment: rgb(101, 81, 148);
  --code-function: rgb(245, 219, 92);
  --code-important: rgb(245, 156, 92);
  --code-keyword: rgb(245, 92, 194);
  --code-normal: rgb(138, 92, 245);
  --code-operator: rgb(245, 105, 92);
  --code-property: rgb(92, 232, 245);
  --code-punctuation: rgb(113, 91, 164);
  --code-string: rgb(143, 245, 92);
  --code-tag: rgb(245, 105, 92);
  --code-value: rgb(168, 92, 245);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(79, 63, 115);
  --color-base-00: rgb(23, 18, 33);
  --color-base-05: rgb(34, 27, 49);
  --color-base-10: rgb(45, 36, 66);
  --color-base-100: rgb(198, 189, 219);
  --color-base-20: rgb(56, 45, 82);
  --color-base-25: rgb(68, 54, 99);
  --color-base-30: rgb(79, 63, 115);
  --color-base-35: rgb(90, 72, 132);
  --color-base-40: rgb(101, 81, 148);
  --color-base-50: rgb(113, 91, 164);
  --color-base-60: rgb(141, 123, 183);
  --color-base-70: rgb(170, 156, 201);
  --color-blue: rgb(92, 168, 245);
  --color-blue-rgb: from rgb(92, 168, 245) r g b;
  --color-cyan: rgb(92, 232, 245);
  --color-cyan-rgb: from rgb(92, 232, 245) r g b;
  --color-green: rgb(143, 245, 92);
  --color-green-rgb: from rgb(143, 245, 92) r g b;
  --color-grey: rgb(168, 168, 168);
  --color-grey-rgb: from rgb(168, 168, 168) r g b;
  --color-orange: rgb(245, 156, 92);
  --color-orange-rgb: from rgb(245, 156, 92) r g b;
  --color-pink: rgb(245, 92, 194);
  --color-pink-rgb: from rgb(245, 92, 194) r g b;
  --color-purple: rgb(168, 92, 245);
  --color-purple-rgb: from rgb(168, 92, 245) r g b;
  --color-red: rgb(245, 105, 92);
  --color-red-rgb: from rgb(245, 105, 92) r g b;
  --color-yellow: rgb(245, 219, 92);
  --color-yellow-rgb: from rgb(245, 219, 92) r g b;
  --cyan-h: 185;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(79, 63, 115);
  --dropdown-background: rgb(34, 27, 49);
  --dropdown-background-hover: rgb(56, 45, 82);
  --embed-block-shadow-hover: 0 0 0 1px rgb(79, 63, 115), inset 0 0 0 1px rgb(79, 63, 115);
  --embed-max-height: 80vh;
  --embed-padding: 0;
  --file-header-background: rgb(23, 18, 33);
  --file-header-background-focused: rgb(23, 18, 33);
  --file-header-font: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(34, 27, 49);
  --flair-color: rgb(198, 189, 219);
  --font-heading-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --font-interface: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --font-mermaid: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --font-print: '??', '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, 'Arial';
  --font-small: 0.933rem;
  --font-smaller: 0.875rem;
  --font-smallest: 0.8rem;
  --font-text: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --footnote-divider-color: rgb(79, 63, 115);
  --footnote-id-color: rgb(113, 91, 164);
  --footnote-id-color-no-occurrences: rgb(79, 63, 115);
  --footnote-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --footnote-size: 0.875rem;
  --graph-line: rgb(79, 63, 115);
  --graph-node: rgb(245, 105, 92);
  --graph-node-attachment: rgb(92, 168, 245);
  --graph-node-tag: rgb(245, 219, 92);
  --graph-node-unresolved: rgba(from rgb(245, 105, 92) r g b / 0.8);
  --graph-text: rgb(198, 189, 219);
  --gray: var(--text-muted);
  --green-h: 100;
  --h1-color: rgb(138, 92, 245);
  --h1-size: 2.488em;
  --h2-color: rgb(138, 92, 245);
  --h2-size: 2.047em;
  --h3-color: rgb(138, 92, 245);
  --h3-size: 1.728em;
  --h4-color: rgb(138, 92, 245);
  --h4-size: 1.44em;
  --h5-color: rgb(138, 92, 245);
  --h5-size: 1.2em;
  --h6-color: rgb(138, 92, 245);
  --headerFont: var(--font-text);
  --heading-formatting: rgb(79, 63, 115);
  --heading-spacing: 1.2em;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(138, 92, 245);
  --hr-thickness: 0.1rem;
  --icon-color: rgb(113, 91, 164);
  --icon-color-focused: rgb(141, 123, 183);
  --icon-color-hover: rgb(113, 91, 164);
  --indentation-guide-color: rgba(255, 255, 255 / 0.12);
  --indentation-guide-color-active: rgba(255, 255, 255 / 0.3);
  --inline-title-color: rgb(138, 92, 245);
  --inline-title-size: 2.488em;
  --input-date-separator: rgb(79, 63, 115);
  --input-placeholder-color: rgb(79, 63, 115);
  --interactive-hover: rgb(56, 45, 82);
  --interactive-normal: rgb(34, 27, 49);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(138, 92, 245);
  --link-decoration: none;
  --link-decoration-hover: wavy;
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(138, 92, 245);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(from rgb(138, 92, 245) r g b / 0.3);
  --list-marker-color: rgb(113, 91, 164);
  --list-marker-color-hover: rgb(113, 91, 164);
  --menu-background: rgb(34, 27, 49);
  --menu-border-color: rgb(90, 72, 132);
  --metadata-border-color: rgb(79, 63, 115);
  --metadata-divider-color: rgb(79, 63, 115);
  --metadata-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --metadata-input-font: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.875rem;
  --metadata-input-text-color: rgb(198, 189, 219);
  --metadata-label-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --metadata-label-font: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.875rem;
  --metadata-label-text-color: rgb(113, 91, 164);
  --metadata-label-text-color-hover: rgb(113, 91, 164);
  --metadata-property-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(101, 81, 148);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(90, 72, 132);
  --modal-background: rgb(23, 18, 33);
  --modal-border-color: rgb(101, 81, 148);
  --nav-collapse-icon-color: rgb(79, 63, 115);
  --nav-collapse-icon-color-collapsed: rgb(79, 63, 115);
  --nav-heading-color: rgb(198, 189, 219);
  --nav-heading-color-collapsed: rgb(79, 63, 115);
  --nav-heading-color-collapsed-hover: rgb(113, 91, 164);
  --nav-heading-color-hover: rgb(198, 189, 219);
  --nav-indentation-guide-color: rgba(255, 255, 255 / 0.12);
  --nav-item-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --nav-item-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --nav-item-color: rgb(113, 91, 164);
  --nav-item-color-active: rgb(141, 123, 183);
  --nav-item-color-hover: rgb(198, 189, 219);
  --nav-item-color-selected: rgb(198, 189, 219);
  --nav-tag-color: rgb(79, 63, 115);
  --nav-tag-color-active: rgb(113, 91, 164);
  --nav-tag-color-hover: rgb(113, 91, 164);
  --opacity: 0.15;
  --orange-h: 25;
  --p-spacing: 1.5rem;
  --pdf-background: rgb(23, 18, 33);
  --pdf-page-background: rgb(23, 18, 33);
  --pdf-shadow: 0 0 0 1px rgb(79, 63, 115);
  --pdf-sidebar-background: rgb(23, 18, 33);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(79, 63, 115);
  --pill-border-color: rgb(79, 63, 115);
  --pill-border-color-hover: rgb(90, 72, 132);
  --pill-color: rgb(113, 91, 164);
  --pill-color-hover: rgb(198, 189, 219);
  --pill-color-remove: rgb(79, 63, 115);
  --pink-h: 320;
  --prompt-background: rgb(23, 18, 33);
  --prompt-border-color: rgb(101, 81, 148);
  --purple-h: 270;
  --raised-background: color-mix(in srgb, rgb(34, 27, 49) 65%, transparent) linear-gradient(rgb(34, 27, 49), color-mix(in srgb, rgb(34, 27, 49) 65%, transparent));
  --red-h: 5;
  --ribbon-background: rgb(34, 27, 49);
  --ribbon-background-collapsed: rgb(23, 18, 33);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255 / 0.2);
  --scrollbar-bg: rgba(255, 255, 255 / 0.05);
  --scrollbar-thumb-bg: rgba(255, 255, 255 / 0.1);
  --search-clear-button-color: rgb(113, 91, 164);
  --search-icon-color: rgb(113, 91, 164);
  --search-result-background: rgb(23, 18, 33);
  --setting-group-heading-color: rgb(198, 189, 219);
  --setting-items-background: rgb(45, 36, 66);
  --setting-items-border-color: rgb(79, 63, 115);
  --slider-thumb-border-color: rgb(90, 72, 132);
  --slider-track-background: rgb(79, 63, 115);
  --status-bar-background: rgb(34, 27, 49);
  --status-bar-border-color: rgb(113, 91, 164);
  --status-bar-text-color: rgb(113, 91, 164);
  --suggestion-background: rgb(23, 18, 33);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255 / 0.15);
  --sync-avatar-color-1: rgb(245, 105, 92);
  --sync-avatar-color-2: rgb(245, 156, 92);
  --sync-avatar-color-3: rgb(245, 219, 92);
  --sync-avatar-color-4: rgb(143, 245, 92);
  --sync-avatar-color-5: rgb(92, 232, 245);
  --sync-avatar-color-6: rgb(92, 168, 245);
  --sync-avatar-color-7: rgb(168, 92, 245);
  --sync-avatar-color-8: rgb(245, 92, 194);
  --tab-background-active: rgb(23, 18, 33);
  --tab-container-background: rgb(34, 27, 49);
  --tab-divider-color: rgb(90, 72, 132);
  --tab-outline-color: rgb(79, 63, 115);
  --tab-switcher-background: rgb(34, 27, 49);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(34, 27, 49), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255 / 0.05);
  --tab-text-color: rgb(79, 63, 115);
  --tab-text-color-active: rgb(113, 91, 164);
  --tab-text-color-focused: rgb(113, 91, 164);
  --tab-text-color-focused-active: rgb(113, 91, 164);
  --tab-text-color-focused-active-current: rgb(141, 123, 183);
  --table-add-button-border-color: rgb(79, 63, 115);
  --table-add-button-border-width: 0.1rem;
  --table-border-color: rgb(138, 92, 245);
  --table-border-width: 0.1rem;
  --table-column-first-border-width: 0.1rem;
  --table-column-last-border-width: 0.1rem;
  --table-drag-handle-color: rgb(79, 63, 115);
  --table-header-background: rgb(138, 92, 245);
  --table-header-background-hover: rgb(138, 92, 245);
  --table-header-border-color: rgb(138, 92, 245);
  --table-header-border-width: 0.1rem;
  --table-header-color: rgb(23, 18, 33);
  --table-row-alt-background: rgba(from rgb(138, 92, 245) r g b / 0.15);
  --table-row-alt-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.3);
  --table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.15);
  --table-row-last-border-width: 0.1rem;
  --tag-size: 0.875rem;
  --text-error: rgb(245, 105, 92);
  --text-faint: rgb(79, 63, 115);
  --text-highlight-bg: rgba(from rgb(138, 92, 245) r g b / 0.25);
  --text-highlight-bg-rgb: from rgb(138, 92, 245) r g b;
  --text-muted: rgb(113, 91, 164);
  --text-normal: rgb(198, 189, 219);
  --text-success: rgb(143, 245, 92);
  --text-warning: rgb(245, 156, 92);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(34, 27, 49);
  --titlebar-background-focused: rgb(34, 27, 49);
  --titlebar-border-color: rgb(79, 63, 115);
  --titlebar-text-color: rgb(113, 91, 164);
  --titlebar-text-color-focused: rgb(198, 189, 219);
  --vault-profile-color: rgb(141, 123, 183);
  --vault-profile-color-hover: rgb(141, 123, 183);
  --workspace-background-translucent: rgba(0, 0, 0 / 0.6);
  --yellow-h: 50;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 27, 49);
  color: rgb(198, 189, 219);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 18, 33);
  color: rgb(198, 189, 219);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 27, 49);
  color: rgb(198, 189, 219);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(79, 63, 115);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 27, 49);
  border-left-color: rgb(79, 63, 115);
  color: rgb(198, 189, 219);
}

body div#quartz-root {
  background-color: rgb(23, 18, 33);
  color: rgb(198, 189, 219);
}`,
    typography: `body .page article p > b, b {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body .page article p > em, em {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body .page article p > i, i {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body .page article p > strong, strong {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body del {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: line-through rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body p {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 90, 165) none 0px;
  text-decoration: rgb(113, 90, 165);
  text-decoration-color: rgb(113, 90, 165);
}`,
    links: `body a.external, footer a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body a.internal.broken {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  text-decoration-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
}`,
    lists: `body dd {
  color: rgb(198, 189, 219);
}

body dt {
  color: rgb(198, 189, 219);
}

body ol > li {
  color: rgb(198, 189, 219);
}

body ol.overflow {
  background-color: rgb(23, 18, 33);
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body ul > li {
  color: rgb(198, 189, 219);
}

body ul.overflow {
  background-color: rgb(23, 18, 33);
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(79, 63, 115);
  text-decoration: rgb(79, 63, 115);
}

body blockquote {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body table {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 237.469px;
  margin-right: 237.469px;
  margin-top: 24px;
  width: 195.062px;
}

body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(198, 189, 219);
}

body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(23, 18, 33);
}

body tr {
  background-color: rgb(138, 92, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  color: rgb(198, 189, 219);
}

body pre > code > [data-line] {
  border-left-color: rgb(245, 219, 92);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 219, 92);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 219, 92);
  border-left-color: rgb(245, 219, 92);
  border-right-color: rgb(245, 219, 92);
  border-top-color: rgb(245, 219, 92);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
}

body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
}`,
    images: `body audio {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body figcaption {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  text-align: center;
}

body figure {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body img {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(198, 189, 219);
  border-radius: 8px;
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}`,
    embeds: `body .file-embed {
  background-color: rgb(45, 36, 66);
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
}

body .footnotes {
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

body .transclude {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .transclude-inner {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(113, 90, 165);
  text-decoration: line-through rgb(113, 90, 165);
  text-decoration-color: rgb(113, 90, 165);
}

body input[type=checkbox] {
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  transition: 0.2s ease-in-out;
}

body li.task-list-item[data-task='!'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='*'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='-'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='/'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='>'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='?'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='I'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='S'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='b'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='c'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='d'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='f'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='i'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='k'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='l'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='p'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='u'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body li.task-list-item[data-task='w'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-top-color: color(srgb 0.3608 0.66 0.9592);
}

body .callout[data-callout="abstract"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: from rgb(168, 92, 245) r g b;
  background-color: color(srgb 0.66 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: from rgb(138, 92, 245) r g b;
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: from rgb(143, 245, 92) r g b;
  background-color: color(srgb 0.560267 0.9592 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(45, 36, 66);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(23, 18, 33);
  border-bottom-color: rgb(101, 81, 148);
  border-left-color: rgb(101, 81, 148);
  border-right-color: rgb(101, 81, 148);
  border-top-color: rgb(101, 81, 148);
}

body .search > .search-container > .search-space > * {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 189, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(198, 189, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(198, 189, 219);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(101, 81, 148);
  border-left-color: rgb(101, 81, 148);
  border-right-color: rgb(101, 81, 148);
  border-top-color: rgb(101, 81, 148);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 27, 49);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(198, 189, 219);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

body h2 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

body h4 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
}`,
    scrollbars: `body .callout {
  --callout-color: from rgb(92, 168, 245) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(113, 90, 165);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(113, 90, 165);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(113, 90, 165);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
}`,
    footer: `body footer {
  background-color: rgb(34, 27, 49);
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(113, 90, 165);
  text-decoration: rgb(113, 90, 165);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(113, 90, 165);
  text-decoration: rgb(113, 90, 165);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body li.section-li > .section .meta {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(113, 90, 165);
  text-decoration: rgb(113, 90, 165);
}

body ul.section-ul {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
}

body .darkmode svg {
  color: rgb(113, 90, 165);
  stroke: rgb(113, 90, 165);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
}

body .breadcrumb-element p {
  color: rgb(79, 63, 115);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

body .metadata {
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(34, 27, 49);
}

body .page-header h2.page-title {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(198, 189, 219);
  text-decoration: underline dotted rgb(198, 189, 219);
}

body details {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 8px;
  padding-left: 26.6953px;
  padding-right: 8px;
  padding-top: 8px;
}

body input[type=text] {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

body sub {
  color: rgb(198, 189, 219);
}

body summary {
  color: rgb(138, 92, 245);
}

body sup {
  color: rgb(198, 189, 219);
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: rgb(138, 92, 245);
  --accent-rgb: from rgb(138, 92, 245) r g b;
  --background-modifier-border: rgb(184, 173, 210);
  --background-modifier-border-focus: rgb(155, 140, 192);
  --background-modifier-border-hover: rgb(170, 156, 201);
  --background-modifier-error: rgb(245, 105, 92);
  --background-modifier-error-hover: rgb(245, 105, 92);
  --background-modifier-error-rgb: from rgb(245, 105, 92) r g b;
  --background-modifier-form-field: rgb(249, 248, 251);
  --background-modifier-form-field-hover: rgb(249, 248, 251);
  --background-modifier-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --background-modifier-message: rgb(138, 92, 245);
  --background-modifier-success: rgb(143, 245, 92);
  --background-modifier-success-rgb: from rgb(143, 245, 92) r g b;
  --background-primary: rgb(249, 248, 251);
  --background-primary-alt: rgb(227, 222, 237);
  --background-secondary: rgb(241, 239, 246);
  --background-secondary-alt: rgb(241, 239, 246);
  --bases-cards-background: rgb(249, 248, 251);
  --bases-cards-cover-background: rgb(227, 222, 237);
  --bases-cards-font-size: 0.875rem;
  --bases-cards-shadow: 0 0 0 1px rgb(184, 173, 210);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(170, 156, 201);
  --bases-embed-border-color: rgb(184, 173, 210);
  --bases-group-heading-property-color: rgb(141, 123, 183);
  --bases-group-heading-value-size: 0.875rem;
  --bases-table-border-color: rgb(138, 92, 245);
  --bases-table-cell-background-active: rgb(249, 248, 251);
  --bases-table-cell-background-disabled: rgb(227, 222, 237);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(155, 140, 192);
  --bases-table-font-size: 0.875rem;
  --bases-table-group-background: rgb(227, 222, 237);
  --bases-table-header-background: rgb(249, 248, 251);
  --bases-table-header-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --bases-table-header-color: rgb(249, 248, 251);
  --bases-table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.1);
  --bases-table-summary-background: rgb(249, 248, 251);
  --bases-table-summary-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --blue-h: 210;
  --blur-background: color-mix(in srgb, rgb(249, 248, 251) 65%, transparent) linear-gradient(rgb(249, 248, 251), color-mix(in srgb, rgb(249, 248, 251) 65%, transparent));
  --bodyFont: var(--font-text);
  --callout-bug: from rgb(245, 105, 92) r g b;
  --callout-color: from rgb(138, 92, 245) r g b;
  --callout-default: from rgb(92, 168, 245) r g b;
  --callout-error: from rgb(245, 105, 92) r g b;
  --callout-example: from rgb(168, 92, 245) r g b;
  --callout-fail: from rgb(245, 105, 92) r g b;
  --callout-important: from rgb(92, 232, 245) r g b;
  --callout-info: from rgb(92, 168, 245) r g b;
  --callout-question: from rgb(245, 156, 92) r g b;
  --callout-quote: from rgb(138, 92, 245) r g b;
  --callout-success: from rgb(143, 245, 92) r g b;
  --callout-summary: from rgb(92, 232, 245) r g b;
  --callout-tip: from rgb(92, 232, 245) r g b;
  --callout-todo: from rgb(92, 168, 245) r g b;
  --callout-warning: from rgb(245, 156, 92) r g b;
  --canvas-background: rgb(249, 248, 251);
  --canvas-card-label-color: rgb(184, 173, 210);
  --canvas-color-1: from rgb(245, 105, 92) r g b;
  --canvas-color-2: from rgb(245, 156, 92) r g b;
  --canvas-color-3: from rgb(245, 219, 92) r g b;
  --canvas-color-4: from rgb(143, 245, 92) r g b;
  --canvas-color-5: from rgb(92, 232, 245) r g b;
  --canvas-color-6: from rgb(168, 92, 245) r g b;
  --canvas-dot-pattern: rgb(184, 173, 210);
  --caret-color: rgb(45, 36, 66);
  --checkbox-border-color: rgb(184, 173, 210);
  --checkbox-border-color-hover: rgb(138, 92, 245);
  --checkbox-color: rgb(141, 123, 183);
  --checkbox-color-hover: rgb(138, 92, 245);
  --checkbox-marker-color: rgb(249, 248, 251);
  --checklist-done-color: rgb(141, 123, 183);
  --code-background: rgba(from rgb(138, 92, 245) r g b / 0.1);
  --code-border-color: rgb(184, 173, 210);
  --code-bracket-background: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --code-comment: rgb(155, 140, 192);
  --code-function: rgb(245, 219, 92);
  --code-important: rgb(245, 156, 92);
  --code-keyword: rgb(245, 92, 194);
  --code-normal: rgb(138, 92, 245);
  --code-operator: rgb(245, 105, 92);
  --code-property: rgb(92, 232, 245);
  --code-punctuation: rgb(141, 123, 183);
  --code-string: rgb(143, 245, 92);
  --code-tag: rgb(245, 105, 92);
  --code-value: rgb(168, 92, 245);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(184, 173, 210);
  --color-base-00: rgb(249, 248, 251);
  --color-base-05: rgb(241, 239, 246);
  --color-base-10: rgb(227, 222, 237);
  --color-base-100: rgb(45, 36, 66);
  --color-base-20: rgb(212, 206, 228);
  --color-base-25: rgb(198, 189, 219);
  --color-base-30: rgb(184, 173, 210);
  --color-base-35: rgb(170, 156, 201);
  --color-base-40: rgb(155, 140, 192);
  --color-base-50: rgb(141, 123, 183);
  --color-base-60: rgb(90, 72, 132);
  --color-base-70: rgb(68, 54, 99);
  --color-blue: rgb(92, 168, 245);
  --color-blue-rgb: from rgb(92, 168, 245) r g b;
  --color-cyan: rgb(92, 232, 245);
  --color-cyan-rgb: from rgb(92, 232, 245) r g b;
  --color-green: rgb(143, 245, 92);
  --color-green-rgb: from rgb(143, 245, 92) r g b;
  --color-grey: rgb(168, 168, 168);
  --color-grey-rgb: from rgb(168, 168, 168) r g b;
  --color-orange: rgb(245, 156, 92);
  --color-orange-rgb: from rgb(245, 156, 92) r g b;
  --color-pink: rgb(245, 92, 194);
  --color-pink-rgb: from rgb(245, 92, 194) r g b;
  --color-purple: rgb(168, 92, 245);
  --color-purple-rgb: from rgb(168, 92, 245) r g b;
  --color-red: rgb(245, 105, 92);
  --color-red-rgb: from rgb(245, 105, 92) r g b;
  --color-yellow: rgb(245, 219, 92);
  --color-yellow-rgb: from rgb(245, 219, 92) r g b;
  --cyan-h: 185;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(184, 173, 210);
  --dropdown-background: rgb(249, 248, 251);
  --dropdown-background-hover: rgb(227, 222, 237);
  --embed-block-shadow-hover: 0 0 0 1px rgb(184, 173, 210), inset 0 0 0 1px rgb(184, 173, 210);
  --embed-max-height: 80vh;
  --embed-padding: 0;
  --file-header-background: rgb(249, 248, 251);
  --file-header-background-focused: rgb(249, 248, 251);
  --file-header-font: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(249, 248, 251);
  --flair-color: rgb(45, 36, 66);
  --font-heading-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --font-interface: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --font-mermaid: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --font-print: '??', '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, 'Arial';
  --font-small: 0.933rem;
  --font-smaller: 0.875rem;
  --font-smallest: 0.8rem;
  --font-text: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --footnote-divider-color: rgb(184, 173, 210);
  --footnote-id-color: rgb(141, 123, 183);
  --footnote-id-color-no-occurrences: rgb(184, 173, 210);
  --footnote-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --footnote-size: 0.875rem;
  --graph-line: rgb(184, 173, 210);
  --graph-node: rgb(245, 105, 92);
  --graph-node-attachment: rgb(92, 168, 245);
  --graph-node-tag: rgb(245, 219, 92);
  --graph-node-unresolved: rgba(from rgb(245, 105, 92) r g b / 0.8);
  --graph-text: rgb(45, 36, 66);
  --gray: var(--text-muted);
  --green-h: 100;
  --h1-color: rgb(138, 92, 245);
  --h1-size: 2.488em;
  --h2-color: rgb(138, 92, 245);
  --h2-size: 2.047em;
  --h3-color: rgb(138, 92, 245);
  --h3-size: 1.728em;
  --h4-color: rgb(138, 92, 245);
  --h4-size: 1.44em;
  --h5-color: rgb(138, 92, 245);
  --h5-size: 1.2em;
  --h6-color: rgb(138, 92, 245);
  --headerFont: var(--font-text);
  --heading-formatting: rgb(184, 173, 210);
  --heading-spacing: 1.2em;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(138, 92, 245);
  --hr-thickness: 0.1rem;
  --icon-color: rgb(141, 123, 183);
  --icon-color-focused: rgb(90, 72, 132);
  --icon-color-hover: rgb(141, 123, 183);
  --indentation-guide-color: rgba(0, 0, 0 / 0.12);
  --indentation-guide-color-active: rgba(0, 0, 0 / 0.2);
  --inline-title-color: rgb(138, 92, 245);
  --inline-title-size: 2.488em;
  --input-date-separator: rgb(184, 173, 210);
  --input-placeholder-color: rgb(184, 173, 210);
  --interactive-hover: rgb(227, 222, 237);
  --interactive-normal: rgb(249, 248, 251);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color-hover: rgb(138, 92, 245);
  --link-decoration: none;
  --link-decoration-hover: wavy;
  --link-external-color-hover: rgb(138, 92, 245);
  --link-external-decoration: none;
  --link-unresolved-decoration-color: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --list-marker-color: rgb(141, 123, 183);
  --list-marker-color-hover: rgb(141, 123, 183);
  --menu-background: rgb(241, 239, 246);
  --menu-border-color: rgb(170, 156, 201);
  --metadata-border-color: rgb(184, 173, 210);
  --metadata-divider-color: rgb(184, 173, 210);
  --metadata-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --metadata-input-font: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.875rem;
  --metadata-input-text-color: rgb(45, 36, 66);
  --metadata-label-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --metadata-label-font: '??', Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.875rem;
  --metadata-label-text-color: rgb(141, 123, 183);
  --metadata-label-text-color-hover: rgb(141, 123, 183);
  --metadata-property-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(155, 140, 192);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(170, 156, 201);
  --modal-background: rgb(249, 248, 251);
  --modal-border-color: rgb(155, 140, 192);
  --nav-collapse-icon-color: rgb(184, 173, 210);
  --nav-collapse-icon-color-collapsed: rgb(184, 173, 210);
  --nav-heading-color: rgb(45, 36, 66);
  --nav-heading-color-collapsed: rgb(184, 173, 210);
  --nav-heading-color-collapsed-hover: rgb(141, 123, 183);
  --nav-heading-color-hover: rgb(45, 36, 66);
  --nav-indentation-guide-color: rgba(0, 0, 0 / 0.12);
  --nav-item-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --nav-item-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --nav-item-color: rgb(141, 123, 183);
  --nav-item-color-active: rgb(90, 72, 132);
  --nav-item-color-hover: rgb(45, 36, 66);
  --nav-item-color-selected: rgb(45, 36, 66);
  --nav-tag-color: rgb(184, 173, 210);
  --nav-tag-color-active: rgb(141, 123, 183);
  --nav-tag-color-hover: rgb(141, 123, 183);
  --opacity: 0.1;
  --orange-h: 25;
  --p-spacing: 1.5rem;
  --pdf-background: rgb(249, 248, 251);
  --pdf-page-background: rgb(249, 248, 251);
  --pdf-sidebar-background: rgb(249, 248, 251);
  --pill-border-color: rgb(184, 173, 210);
  --pill-border-color-hover: rgb(170, 156, 201);
  --pill-color: rgb(141, 123, 183);
  --pill-color-hover: rgb(45, 36, 66);
  --pill-color-remove: rgb(184, 173, 210);
  --pink-h: 320;
  --prompt-background: rgb(249, 248, 251);
  --prompt-border-color: rgb(155, 140, 192);
  --purple-h: 270;
  --raised-background: color-mix(in srgb, rgb(249, 248, 251) 65%, transparent) linear-gradient(rgb(249, 248, 251), color-mix(in srgb, rgb(249, 248, 251) 65%, transparent));
  --red-h: 5;
  --ribbon-background: rgb(241, 239, 246);
  --ribbon-background-collapsed: rgb(249, 248, 251);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0 / 0.2);
  --scrollbar-bg: rgba(0, 0, 0 / 0.05);
  --scrollbar-thumb-bg: rgba(0, 0, 0 / 0.1);
  --search-clear-button-color: rgb(141, 123, 183);
  --search-icon-color: rgb(141, 123, 183);
  --search-result-background: rgb(249, 248, 251);
  --setting-group-heading-color: rgb(45, 36, 66);
  --setting-items-background: rgb(227, 222, 237);
  --setting-items-border-color: rgb(184, 173, 210);
  --slider-thumb-border-color: rgb(170, 156, 201);
  --slider-track-background: rgb(184, 173, 210);
  --status-bar-background: rgb(241, 239, 246);
  --status-bar-border-color: rgb(141, 123, 183);
  --status-bar-text-color: rgb(141, 123, 183);
  --suggestion-background: rgb(249, 248, 251);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0 / 0.1);
  --sync-avatar-color-1: rgb(245, 105, 92);
  --sync-avatar-color-2: rgb(245, 156, 92);
  --sync-avatar-color-3: rgb(245, 219, 92);
  --sync-avatar-color-4: rgb(143, 245, 92);
  --sync-avatar-color-5: rgb(92, 232, 245);
  --sync-avatar-color-6: rgb(92, 168, 245);
  --sync-avatar-color-7: rgb(168, 92, 245);
  --sync-avatar-color-8: rgb(245, 92, 194);
  --tab-background-active: rgb(249, 248, 251);
  --tab-container-background: rgb(241, 239, 246);
  --tab-divider-color: rgb(170, 156, 201);
  --tab-outline-color: rgb(184, 173, 210);
  --tab-switcher-background: rgb(241, 239, 246);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(241, 239, 246), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0 / 0.05);
  --tab-text-color: rgb(184, 173, 210);
  --tab-text-color-active: rgb(141, 123, 183);
  --tab-text-color-focused: rgb(141, 123, 183);
  --tab-text-color-focused-active: rgb(141, 123, 183);
  --tab-text-color-focused-active-current: rgb(90, 72, 132);
  --table-add-button-border-color: rgb(184, 173, 210);
  --table-add-button-border-width: 0.1rem;
  --table-border-color: rgb(138, 92, 245);
  --table-border-width: 0.1rem;
  --table-column-first-border-width: 0.1rem;
  --table-column-last-border-width: 0.1rem;
  --table-drag-handle-color: rgb(184, 173, 210);
  --table-header-background: rgb(138, 92, 245);
  --table-header-background-hover: rgb(138, 92, 245);
  --table-header-border-color: rgb(138, 92, 245);
  --table-header-border-width: 0.1rem;
  --table-header-color: rgb(249, 248, 251);
  --table-row-alt-background: rgba(from rgb(138, 92, 245) r g b / 0.1);
  --table-row-alt-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2);
  --table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.1);
  --table-row-last-border-width: 0.1rem;
  --tag-size: 0.875rem;
  --text-error: rgb(245, 105, 92);
  --text-faint: rgb(184, 173, 210);
  --text-highlight-bg: rgba(from rgb(138, 92, 245) r g b / 0.25);
  --text-highlight-bg-rgb: from rgb(138, 92, 245) r g b;
  --text-muted: rgb(141, 123, 183);
  --text-normal: rgb(45, 36, 66);
  --text-success: rgb(143, 245, 92);
  --text-warning: rgb(245, 156, 92);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(241, 239, 246);
  --titlebar-background-focused: rgb(241, 239, 246);
  --titlebar-border-color: rgb(184, 173, 210);
  --titlebar-text-color: rgb(141, 123, 183);
  --titlebar-text-color-focused: rgb(45, 36, 66);
  --vault-profile-color: rgb(90, 72, 132);
  --vault-profile-color-hover: rgb(90, 72, 132);
  --workspace-background-translucent: rgba(255, 255, 255 / 0.6);
  --yellow-h: 50;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 239, 246);
  color: rgb(45, 36, 66);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(249, 248, 251);
  color: rgb(45, 36, 66);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(241, 239, 246);
  color: rgb(45, 36, 66);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(184, 173, 210);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 239, 246);
  border-left-color: rgb(184, 173, 210);
  color: rgb(45, 36, 66);
}

body div#quartz-root {
  background-color: rgb(249, 248, 251);
  color: rgb(45, 36, 66);
}`,
    typography: `body .page article p > b, b {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body .page article p > em, em {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body .page article p > i, i {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body .page article p > strong, strong {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body del {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: line-through rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body p {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 123, 183) none 0px;
  text-decoration: rgb(141, 123, 183);
  text-decoration-color: rgb(141, 123, 183);
}`,
    links: `body a.external, footer a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  text-decoration-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
}`,
    lists: `body dd {
  color: rgb(45, 36, 66);
}

body dt {
  color: rgb(45, 36, 66);
}

body ol > li {
  color: rgb(45, 36, 66);
}

body ol.overflow {
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body ul > li {
  color: rgb(45, 36, 66);
}

body ul.overflow {
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(184, 173, 210);
  text-decoration: rgb(184, 173, 210);
}

body blockquote {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body table {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 237.469px;
  margin-right: 237.469px;
  margin-top: 24px;
  width: 195.062px;
}

body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
}

body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(45, 36, 66);
}

body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(249, 248, 251);
}

body tr {
  background-color: rgb(138, 92, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  color: rgb(45, 36, 66);
}

body pre > code > [data-line] {
  border-left-color: rgb(245, 219, 92);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 219, 92);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 219, 92);
  border-left-color: rgb(245, 219, 92);
  border-right-color: rgb(245, 219, 92);
  border-top-color: rgb(245, 219, 92);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
}

body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
}`,
    images: `body audio {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body figcaption {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  text-align: center;
}

body figure {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body img {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(45, 36, 66);
  border-radius: 8px;
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}`,
    embeds: `body .file-embed {
  background-color: rgb(227, 222, 237);
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
}

body .footnotes {
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

body .transclude {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .transclude-inner {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 123, 183);
  text-decoration: line-through rgb(141, 123, 183);
  text-decoration-color: rgb(141, 123, 183);
}

body input[type=checkbox] {
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  transition: 0.2s ease-in-out;
}

body li.task-list-item[data-task='!'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='*'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='-'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='/'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='>'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='?'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='I'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='S'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='b'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='c'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='d'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='f'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='i'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='k'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='l'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='p'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='u'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body li.task-list-item[data-task='w'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-top-color: color(srgb 0.3608 0.66 0.9592);
}

body .callout[data-callout="abstract"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: from rgb(168, 92, 245) r g b;
  background-color: color(srgb 0.66 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: from rgb(138, 92, 245) r g b;
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: from rgb(143, 245, 92) r g b;
  background-color: color(srgb 0.560267 0.9592 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(155, 140, 192);
  border-left-color: rgb(155, 140, 192);
  border-right-color: rgb(155, 140, 192);
  border-top-color: rgb(155, 140, 192);
}

body .search > .search-container > .search-space > * {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 36, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(45, 36, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(45, 36, 66);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(155, 140, 192);
  border-left-color: rgb(155, 140, 192);
  border-right-color: rgb(155, 140, 192);
  border-top-color: rgb(155, 140, 192);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 239, 246);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(45, 36, 66);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

body h2 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

body h4 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
}`,
    scrollbars: `body .callout {
  --callout-color: from rgb(92, 168, 245) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(141, 123, 183);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(141, 123, 183);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(141, 123, 183);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(90, 72, 132);
  border-left-color: rgb(90, 72, 132);
  border-right-color: rgb(90, 72, 132);
  border-top-color: rgb(90, 72, 132);
  color: rgb(90, 72, 132);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
}`,
    footer: `body footer {
  background-color: rgb(241, 239, 246);
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(141, 123, 183);
  text-decoration: rgb(141, 123, 183);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(141, 123, 183);
  text-decoration: rgb(141, 123, 183);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body li.section-li > .section .meta {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(141, 123, 183);
  text-decoration: rgb(141, 123, 183);
}

body ul.section-ul {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
}

body .darkmode svg {
  color: rgb(141, 123, 183);
  stroke: rgb(141, 123, 183);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
}

body .breadcrumb-element p {
  color: rgb(184, 173, 210);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

body .metadata {
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(241, 239, 246);
}

body .page-header h2.page-title {
  color: rgb(90, 72, 132);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(45, 36, 66);
  text-decoration: underline dotted rgb(45, 36, 66);
}

body details {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 8px;
  padding-left: 26.6953px;
  padding-right: 8px;
  padding-top: 8px;
}

body input[type=text] {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

body sub {
  color: rgb(45, 36, 66);
}

body summary {
  color: rgb(138, 92, 245);
}

body sup {
  color: rgb(45, 36, 66);
}`,
  },
};
