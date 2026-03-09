import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "githubdhc",
    modes: ["dark"],
    variations: [],
    fonts: ["fira-code", "noto-sans"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 220;
  --accent-h-theme: 220;
  --accent-l: 70%;
  --accent-l-theme: 70%;
  --accent-s: 13%;
  --accent-s-theme: 13%;
  --background-modifier-active-hover: rgba(169, 175, 188, 0.15);
  --background-modifier-border: #b7bdc8;
  --background-modifier-border-focus: #b7bdc8;
  --background-modifier-border-hover: #b7bdc8;
  --background-modifier-error: #ff9492;
  --background-modifier-error-hover: #ff9492;
  --background-modifier-error-rgb: 255, 148, 146;
  --background-modifier-form-field: #010409;
  --background-modifier-form-field-hover: #010409;
  --background-modifier-hover: rgba(183, 189, 200, 0.12);
  --background-modifier-hover-alpha: 0.12;
  --background-modifier-success: #2bd853;
  --background-modifier-success-rgb: 43, 216, 83;
  --background-primary: #010409;
  --background-primary-alt: #151b23;
  --background-secondary: #010409;
  --background-secondary-alt: #010409;
  --bases-cards-background: #010409;
  --bases-cards-cover-background: #151b23;
  --bases-cards-shadow: 0 0 0 1px #b7bdc8;
  --bases-cards-shadow-hover: 0 0 0 1px #b7bdc8;
  --bases-embed-border-color: #b7bdc8;
  --bases-group-heading-property-color: #b7bdc8;
  --bases-table-border-color: #b7bdc8;
  --bases-table-cell-background-active: #010409;
  --bases-table-cell-background-disabled: #151b23;
  --bases-table-cell-background-selected: rgba(169, 175, 188, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #b7bdc8;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b7bdc8;
  --bases-table-group-background: #151b23;
  --bases-table-header-background: #010409;
  --bases-table-header-background-hover: rgba(183, 189, 200, 0.12);
  --bases-table-header-color: #b7bdc8;
  --bases-table-summary-background: #010409;
  --bases-table-summary-background-hover: rgba(183, 189, 200, 0.12);
  --blockquote-border-color: #7a828e;
  --blockquote-border-thickness: .25em;
  --blur-background: color-mix(in srgb, #3d444d 65%, transparent) linear-gradient(#3d444d, color-mix(in srgb, #3d444d 65%, transparent));
  --bold-weight: 600;
  --callout-bug: 255, 148, 146;
  --callout-error: 255, 148, 146;
  --callout-fail: 255, 148, 146;
  --callout-success: 43, 216, 83;
  --canvas-background: #010409;
  --canvas-card-label-color: #7a828e;
  --canvas-color-1: 255, 148, 146;
  --canvas-color-4: 43, 216, 83;
  --canvas-dot-pattern: #b7bdc8;
  --caret-color: #ffffff;
  --checkbox-border-color: #7a828e;
  --checkbox-border-color-hover: #b7bdc8;
  --checkbox-color: #b7bdc8;
  --checkbox-color-hover: #9ea7b3;
  --checkbox-marker-color: #010409;
  --checkbox-size: 15px;
  --checklist-done-color: #b7bdc8;
  --code-background: #161b22;
  --code-border-color: #b7bdc8;
  --code-bracket-background: rgba(183, 189, 200, 0.12);
  --code-comment: #7a828e;
  --code-function: #ffa657;
  --code-important: #ffa657;
  --code-keyword: #ff9492;
  --code-normal: #ffffff;
  --code-operator: #ff9492;
  --code-property: #71b7ff;
  --code-punctuation: #b7bdc8;
  --code-string: #a5d6ff;
  --code-tag: #ff9492;
  --code-value: #d2a8ff;
  --collapse-icon-color: #7a828e;
  --collapse-icon-color-collapsed: #71b7ff;
  --color-accent: #b7bdc8;
  --color-accent-1: #9ea7b3;
  --color-accent-2: #d1d9e0;
  --color-accent-hsl: 220, 13%, 70%;
  --color-base-00: #010409;
  --color-base-10: #151b23;
  --color-base-100: #ffffff;
  --color-base-20: #151b23;
  --color-base-25: #010409;
  --color-base-30: #b7bdc8;
  --color-base-35: #3d444d;
  --color-base-40: #b7bdc8;
  --color-base-50: #7a828e;
  --color-base-60: #999;
  --color-base-70: #b7bdc8;
  --color-blue: #71b7ff;
  --color-btn-primary-bg: #09b43a;
  --color-btn-primary-hover-bg: #0c8e33;
  --color-cyan: #a5d6ff;
  --color-green: #2bd853;
  --color-green-rgb: 43, 216, 83;
  --color-orange: #ffa657;
  --color-pink: #f778ba;
  --color-purple: #d2a8ff;
  --color-red: #ff9492;
  --color-red-rgb: 255, 148, 146;
  --color-white: #ffffff;
  --color-yellow: #f0b72f;
  --divider-color: #b7bdc8;
  --divider-color-hover: #b7bdc8;
  --dropdown-background: #3d444d;
  --dropdown-background-hover: #6e7781;
  --embed-block-shadow-hover: 0 0 0 1px #b7bdc8,
        inset 0 0 0 1px #b7bdc8;
  --embed-border-left: 2px solid #b7bdc8;
  --embed-border-right: none;
  --embed-border-start: 2px solid #b7bdc8;
  --file-header-background: #010409;
  --file-header-background-focused: #010409;
  --file-header-font: '??', -apple-system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 32px;
  --flair-background: #3d444d;
  --flair-color: #ffffff;
  --font-interface: '??', -apple-system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  --font-mermaid: '??', -apple-system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mono: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-monospace: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-print: '??', '??', -apple-system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Arial';
  --font-sans: system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  --font-text: '??', -apple-system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  --footnote-divider-color: #b7bdc8;
  --footnote-id-color: #b7bdc8;
  --footnote-id-color-no-occurrences: #7a828e;
  --footnote-input-background-active: rgba(183, 189, 200, 0.12);
  --graph-line: #3d444d;
  --graph-node: #b7bdc8;
  --graph-node-attachment: #f0b72f;
  --graph-node-focused: #71b7ff;
  --graph-node-tag: #2bd853;
  --graph-node-unresolved: #7a828e;
  --graph-text: #ffffff;
  --h-color-theme: #ffffff;
  --h1-color: #ffffff;
  --h1-color-theme: #ffffff;
  --h1-size: 2em;
  --h1-weight: 600;
  --h2-color: #ffffff;
  --h2-color-theme: #ffffff;
  --h2-size: 1.5em;
  --h2-weight: 600;
  --h3-color: #ffffff;
  --h3-color-theme: #ffffff;
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-color: #ffffff;
  --h4-color-theme: #ffffff;
  --h4-size: 1em;
  --h4-weight: 600;
  --h5-color: #ffffff;
  --h5-color-theme: #ffffff;
  --h5-size: .875em;
  --h5-weight: 600;
  --h6-color: #ffffff;
  --h6-color-theme: #ffffff;
  --h6-size: .85em;
  --heading-formatting: #7a828e;
  --hr-color: #7a828e;
  --hr-thickness: .25em;
  --icon-color: #b7bdc8;
  --icon-color-active: #71b7ff;
  --icon-color-focused: #ffffff;
  --icon-color-hover: #b7bdc8;
  --inline-code-background: rgba(158, 167, 179, 0.4);
  --inline-title-color: #ffffff;
  --inline-title-size: 2em;
  --inline-title-weight: 600;
  --input-date-separator: #7a828e;
  --input-placeholder-color: #7a828e;
  --input-shadow: inset 0 0 0 1px #f0f6fc1a;
  --input-shadow-hover: inset 0 0 0 1px #b7bdc8;
  --interactive-accent: #b7bdc8;
  --interactive-accent-hover: #9ea7b3;
  --interactive-accent-hsl: 220, 13%, 70%;
  --interactive-hover: #6e7781;
  --interactive-normal: #3d444d;
  --kanban-background: #010409;
  --kanban-item-background: #151b23;
  --kanban-lane-background: #010409;
  --kanban-lane-border: #3d444d;
  --kanban-lane-count: #3d444d;
  --kanban-options-btn: #b7bdc8;
  --link-color: #71b7ff;
  --link-color-hover: #a5d6ff;
  --link-decoration: none;
  --link-external-color: #71b7ff;
  --link-external-color-hover: #a5d6ff;
  --link-external-decoration: none;
  --link-unresolved-color: #71b7ff;
  --link-unresolved-decoration-color: rgba(169, 175, 188, 0.3);
  --list-bullet-size: 5px;
  --list-indent: 2em;
  --list-marker-color: #ffffff;
  --list-marker-color-collapsed: #71b7ff;
  --list-marker-color-hover: #b7bdc8;
  --menu-background: #010409;
  --menu-border-color: #b7bdc8;
  --menu-shadow: none;
  --metadata-border-color: #b7bdc8;
  --metadata-divider-color: #b7bdc8;
  --metadata-input-background-active: rgba(183, 189, 200, 0.12);
  --metadata-input-font: '??', -apple-system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #ffffff;
  --metadata-label-background-active: rgba(183, 189, 200, 0.12);
  --metadata-label-font: '??', -apple-system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #b7bdc8;
  --metadata-label-text-color-hover: #b7bdc8;
  --metadata-property-background-active: rgba(183, 189, 200, 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px #b7bdc8;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b7bdc8;
  --modal-background: #010409;
  --modal-border-color: #b7bdc8;
  --modal-radius: 10px;
  --nav-collapse-icon-color: #7a828e;
  --nav-collapse-icon-color-collapsed: #7a828e;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed: #7a828e;
  --nav-heading-color-collapsed-hover: #b7bdc8;
  --nav-heading-color-hover: #ffffff;
  --nav-item-background-active: rgba(183, 189, 200, 0.12);
  --nav-item-background-hover: rgba(183, 189, 200, 0.12);
  --nav-item-background-selected: rgba(169, 175, 188, 0.2);
  --nav-item-color: #b7bdc8;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #a5d6ff;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #ffffff;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #7a828e;
  --nav-tag-color-active: #b7bdc8;
  --nav-tag-color-hover: #b7bdc8;
  --pdf-background: #010409;
  --pdf-page-background: #010409;
  --pdf-shadow: 0 0 0 1px #b7bdc8;
  --pdf-sidebar-background: #010409;
  --pdf-thumbnail-shadow: 0 0 0 1px #b7bdc8;
  --pill-border-color: #b7bdc8;
  --pill-border-color-hover: #b7bdc8;
  --pill-color: #b7bdc8;
  --pill-color-hover: #ffffff;
  --pill-color-remove: #7a828e;
  --pill-color-remove-hover: #71b7ff;
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #010409;
  --prompt-border-color: #b7bdc8;
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, #3d444d 65%, transparent) linear-gradient(#3d444d, color-mix(in srgb, #3d444d 65%, transparent));
  --rgb-hover: 183, 189, 200;
  --ribbon-background: #010409;
  --ribbon-background-collapsed: #010409;
  --scrollbar-radius: 10px;
  --search-clear-button-color: #b7bdc8;
  --search-icon-color: #b7bdc8;
  --search-result-background: #010409;
  --setting-group-heading-color: #ffffff;
  --setting-items-background: #151b23;
  --setting-items-border-color: #b7bdc8;
  --setting-items-radius: 10px;
  --shadow-l: none;
  --shadow-s: none;
  --slider-thumb-border-color: #b7bdc8;
  --slider-thumb-radius: 50%;
  --slider-track-background: #b7bdc8;
  --status-bar-background: #010409;
  --status-bar-border-color: #b7bdc8;
  --status-bar-text-color: #b7bdc8;
  --suggestion-background: #010409;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #ff9492;
  --sync-avatar-color-2: #ffa657;
  --sync-avatar-color-3: #f0b72f;
  --sync-avatar-color-4: #2bd853;
  --sync-avatar-color-5: #a5d6ff;
  --sync-avatar-color-6: #71b7ff;
  --sync-avatar-color-7: #d2a8ff;
  --sync-avatar-color-8: #f778ba;
  --tab-background-active: #010409;
  --tab-container-background: #010409;
  --tab-divider-color: #b7bdc8;
  --tab-outline-color: #b7bdc8;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #010409;
  --tab-switcher-menubar-background: linear-gradient(to top, #010409, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #b7bdc8;
  --tab-text-color: #7a828e;
  --tab-text-color-active: #b7bdc8;
  --tab-text-color-focused: #b7bdc8;
  --tab-text-color-focused-active: #ffffff;
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: #71b7ff;
  --table-add-button-border-color: #b7bdc8;
  --table-border-color: #b7bdc8;
  --table-drag-handle-background-active: #b7bdc8;
  --table-drag-handle-color: #7a828e;
  --table-drag-handle-color-active: black;
  --table-header-border-color: #b7bdc8;
  --table-header-color: #ffffff;
  --table-header-weight: 600;
  --table-row-alt-background: #151b23;
  --table-selection: rgba(169, 175, 188, 0.1);
  --table-selection-border-color: #b7bdc8;
  --table-white-space: normal;
  --tag-background: rgba(169, 175, 188, 0.1);
  --tag-background-hover: rgba(169, 175, 188, 0.2);
  --tag-border-color: rgba(169, 175, 188, 0.15);
  --tag-border-color-hover: rgba(169, 175, 188, 0.15);
  --tag-color: #71b7ff;
  --tag-color-hover: #71b7ff;
  --text-accent: #71b7ff;
  --text-accent-hover: #a5d6ff;
  --text-error: #ff9492;
  --text-faint: #7a828e;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #b7bdc8;
  --text-normal: #ffffff;
  --text-on-accent: black;
  --text-selection: rgba(169, 175, 188, 0.4);
  --text-success: #2bd853;
  --text-warning: #ffa657;
  --titlebar-background: #010409;
  --titlebar-background-focused: #010409;
  --titlebar-border-color: #b7bdc8;
  --titlebar-text-color: #b7bdc8;
  --titlebar-text-color-focused: #ffffff;
  --titlebar-text-color-highlighted: #a5d6ff;
  --toggle-background-color: #b7bdc8;
  --toggle-background-color-off: #3d444d;
  --toggle-border-color: #b7bdc8;
  --vault-name-color: #ffffff;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(183, 189, 200);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(1, 4, 9);
  border-left-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(183, 189, 200) none 0px;
  text-decoration: rgb(183, 189, 200);
  text-decoration-color: rgb(183, 189, 200);
}`,
    links: `body a.external, footer a {
  color: rgb(113, 183, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 183, 255) none 0px;
  text-decoration: underline rgb(113, 183, 255);
  text-decoration-color: rgb(113, 183, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(113, 183, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 183, 255) none 0px;
  text-decoration: underline rgb(113, 183, 255);
  text-decoration-color: rgb(113, 183, 255);
}

body a.internal.broken {
  color: rgb(113, 183, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 183, 255) none 0px;
  text-decoration: underline rgb(113, 183, 255);
  text-decoration-color: rgb(113, 183, 255);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(122, 130, 142);
  text-decoration: underline rgb(122, 130, 142);
}

body blockquote {
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 211.062px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(21, 27, 35);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(1, 4, 9);
}

body td {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "DM Mono", "Fira Code", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 166, 87);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 166, 87);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 166, 87);
  border-left-color: rgb(255, 166, 87);
  border-right-color: rgb(255, 166, 87);
  border-top-color: rgb(255, 166, 87);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}

body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(21, 27, 35);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(183, 189, 200);
  text-decoration: line-through rgb(183, 189, 200);
  text-decoration-color: rgb(183, 189, 200);
}

body input[type=checkbox] {
  border-bottom-color: rgb(122, 130, 142);
  border-left-color: rgb(122, 130, 142);
  border-right-color: rgb(122, 130, 142);
  border-top-color: rgb(122, 130, 142);
  margin-left: -22.5px;
  width: 15px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(113, 183, 255);
  border-left-color: rgb(113, 183, 255);
  border-right-color: rgb(113, 183, 255);
  border-top-color: rgb(113, 183, 255);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 148, 146;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: #ff9492;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 148, 146);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 148, 146;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  --callout-color: #71b7ff;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 183, 255);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  --callout-color: #71b7ff;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 183, 255);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: #2bd853;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 216, 83);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  --callout-color: #2bd853;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 216, 83);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  --callout-color: #f0b72f;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(240, 183, 47);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(183, 189, 200, 0.12);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(183, 189, 200);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(183, 189, 200);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(183, 189, 200);
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(183, 189, 200, 0.12);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(183, 189, 200, 0.12);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(169, 175, 188, 0.1);
  border-bottom-color: rgba(169, 175, 188, 0.15);
  border-left-color: rgba(169, 175, 188, 0.15);
  border-right-color: rgba(169, 175, 188, 0.15);
  border-top-color: rgba(169, 175, 188, 0.15);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(113, 183, 255);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
}`,
    scrollbars: `body .callout {
  --callout-color: #71b7ff;
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 183, 255);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 11px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 11px;
}

body ::-webkit-scrollbar {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

body ::-webkit-scrollbar-corner {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

body ::-webkit-scrollbar-track {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(183, 189, 200);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(183, 189, 200);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(183, 189, 200);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(183, 189, 200, 0.12);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
}`,
    footer: `body footer {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(183, 189, 200);
  text-decoration: rgb(183, 189, 200);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(183, 189, 200);
  text-decoration: rgb(183, 189, 200);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(183, 189, 200);
  text-decoration: rgb(183, 189, 200);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
}

body .darkmode svg {
  color: rgb(183, 189, 200);
  stroke: rgb(183, 189, 200);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
}

body .breadcrumb-element p {
  color: rgb(122, 130, 142);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(1, 4, 9);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  margin-bottom: 16px;
  margin-top: 16px;
}

body input[type=text] {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-bottom-width: 1px;
  border-left-color: rgb(183, 189, 200);
  border-left-width: 1px;
  border-right-color: rgb(183, 189, 200);
  border-right-width: 1px;
  border-top-color: rgb(183, 189, 200);
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "DM Mono", "Fira Code", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 600;
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
