import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 13%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(66, 0, 0, 0.1);
  --background-modifier-border: #6e6e6e;
  --background-modifier-border-focus: #5a5a5a;
  --background-modifier-border-hover: #828282;
  --background-modifier-error: #2a0000;
  --background-modifier-error-hover: #440000;
  --background-modifier-error-rgb: 138, 46, 46;
  --background-modifier-form-field: #3d3d3d;
  --background-modifier-form-field-hover: #3d3d3d;
  --background-modifier-hover: #440000;
  --background-modifier-message: #5a5a5a;
  --background-modifier-success: #5a5a5a;
  --background-modifier-success-rgb: 90, 122, 77;
  --background-primary: #0c0c0c;
  --background-primary-alt: #202020;
  --background-secondary: #2a0000;
  --background-secondary-alt: #474747;
  --bases-cards-background: #0c0c0c;
  --bases-cards-cover-background: #202020;
  --bases-cards-shadow: 0 0 0 1px #6e6e6e;
  --bases-cards-shadow-hover: 0 0 0 1px #828282;
  --bases-embed-border-color: #6e6e6e;
  --bases-group-heading-property-color: rgba(249, 246, 238, 0.85);
  --bases-table-border-color: #6e6e6e;
  --bases-table-cell-background-active: #0c0c0c;
  --bases-table-cell-background-disabled: #202020;
  --bases-table-cell-background-selected: rgba(66, 0, 0, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #5a5a5a;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(66, 0, 0);
  --bases-table-group-background: #202020;
  --bases-table-header-background: #0c0c0c;
  --bases-table-header-background-hover: #333333;
  --bases-table-header-color: rgba(249, 246, 238, 0.85);
  --bases-table-summary-background: #0c0c0c;
  --bases-table-summary-background-hover: #440000;
  --blockquote-background-color: rgba(110, 110, 110, 0.2);
  --blockquote-border-color: #e2752c;
  --blur-background: color-mix(in srgb, #474747 65%, transparent) linear-gradient(#474747, color-mix(in srgb, #474747 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-accent-ink: #64ad4b;
  --bold-color: #64ad4b;
  --button-radius: 50px;
  --callout-border-width: 2px;
  --callout-bug: 138, 46, 46;
  --callout-default: 26, 69, 89;
  --callout-error: 138, 46, 46;
  --callout-example: 95, 74, 140;
  --callout-fail: 138, 46, 46;
  --callout-important: 67, 143, 147;
  --callout-info: 26, 69, 89;
  --callout-question: 179, 104, 42;
  --callout-success: 90, 122, 77;
  --callout-summary: 67, 143, 147;
  --callout-tip: 67, 143, 147;
  --callout-todo: 26, 69, 89;
  --callout-warning: 179, 104, 42;
  --canvas-background: #0c0c0c;
  --canvas-card-label-color: rgba(249, 246, 238, 0.65);
  --canvas-color-1: 138, 46, 46;
  --canvas-color-2: 179, 104, 42;
  --canvas-color-3: 194, 153, 56;
  --canvas-color-4: 90, 122, 77;
  --canvas-color-5: 67, 143, 147;
  --canvas-color-6: 95, 74, 140;
  --canvas-dot-pattern: rgba(226, 117, 44, 0.4);
  --caret-color: #959595;
  --checkbox-border-color: #f9f6ee;
  --checkbox-border-color-hover: rgba(249, 246, 238, 0.65);
  --checkbox-color: #e2752c;
  --checkbox-color-hover: rgba(226, 117, 44, 0.85);
  --checkbox-marker-color: #202020;
  --checklist-done-color: rgba(226, 117, 44, 0.65);
  --code-background: rgba(110, 110, 110, 0.2);
  --code-border-color: #6e6e6e;
  --code-bracket-background: #440000;
  --code-comment: rgba(249, 246, 238, 0.65);
  --code-function: #c29938;
  --code-important: #b3682a;
  --code-keyword: #b16982;
  --code-normal: #f9f6ee;
  --code-operator: #8a2e2e;
  --code-property: #438f93;
  --code-punctuation: rgba(249, 246, 238, 0.85);
  --code-string: #5a7a4d;
  --code-tag: #8a2e2e;
  --code-value: #5f4a8c;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgba(249, 246, 238, 0.65);
  --collapse-icon-color-collapsed: hsl(-3, 102%, 14.95%);
  --color-accent: rgb(66, 0, 0);
  --color-accent-1: hsl(-3, 102%, 14.95%);
  --color-accent-2: hsl(-5, 105%, 16.77%);
  --color-accent-hsl: 0, 100%, 13%;
  --color-base-00: #0c0c0c;
  --color-base-00-rgb: 12, 12, 12;
  --color-base-05: #161616;
  --color-base-10: #202020;
  --color-base-100: #d0d0d0;
  --color-base-20: #333333;
  --color-base-25: #3d3d3d;
  --color-base-30: #474747;
  --color-base-35: #515151;
  --color-base-40: #5a5a5a;
  --color-base-50: #6e6e6e;
  --color-base-50-rgb: 110, 110, 110;
  --color-base-60: #828282;
  --color-base-70: #959595;
  --color-blue: #1a4559;
  --color-blue-rgb: 26, 69, 89;
  --color-cyan: #438f93;
  --color-cyan-rgb: 67, 143, 147;
  --color-green: #5a7a4d;
  --color-green-rgb: 90, 122, 77;
  --color-orange: #b3682a;
  --color-orange-rgb: 179, 104, 42;
  --color-pink: #b16982;
  --color-pink-rgb: 177, 105, 130;
  --color-purple: #5f4a8c;
  --color-purple-rgb: 95, 74, 140;
  --color-red: #8a2e2e;
  --color-red-rgb: 138, 46, 46;
  --color-yellow: #c29938;
  --color-yellow-rgb: 194, 153, 56;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #6e6e6e;
  --divider-color-hover: rgb(66, 0, 0);
  --dropdown-background: #474747;
  --dropdown-background-hover: #515151;
  --embed-background: rgba(110, 110, 110, 0.15);
  --embed-block-shadow-hover: 0 0 0 1px #6e6e6e, inset 0 0 0 1px #6e6e6e;
  --embed-border-start: 2px solid rgba(226, 117, 44, 0.85);
  --fainted: 0.65;
  --file-header-background: #0c0c0c;
  --file-header-background-focused: #0c0c0c;
  --file-header-font: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #474747;
  --flair-color: #f9f6ee;
  --font-interface: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Mono', monospace;
  --font-mermaid: '??', 'IBM Plex Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'IBM Plex Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'IBM Plex Mono', monospace;
  --font-print: '??', '??', 'IBM Plex Mono', monospace, 'Arial';
  --font-text: '??', 'IBM Plex Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Mono', monospace;
  --footnote-divider-color: #6e6e6e;
  --footnote-id-color: rgba(249, 246, 238, 0.85);
  --footnote-id-color-no-occurrences: rgba(249, 246, 238, 0.65);
  --footnote-input-background-active: #161616;
  --graph-line: #515151;
  --graph-node: rgba(249, 246, 238, 0.85);
  --graph-node-attachment: #c29938;
  --graph-node-focused: #e2752c;
  --graph-node-tag: #64ad4b;
  --graph-node-unresolved: rgba(249, 246, 238, 0.65);
  --graph-text: #f9f6ee;
  --gray: var(--text-muted);
  --h1-color: #e2752c;
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: #e2752c;
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: #e2752c;
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: #e2752c;
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: #e2752c;
  --h5-line-height: 1.5em;
  --h5-size: 1.4em;
  --h6-color: #e2752c;
  --h6-line-height: 1.5em;
  --h6-size: 1.2em;
  --headerFont: var(--font-text);
  --heading-formatting: rgba(249, 246, 238, 0.65);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(226, 117, 44, 0.85);
  --icon-color: rgba(249, 246, 238, 0.85);
  --icon-color-active: hsl(-3, 102%, 14.95%);
  --icon-color-focused: #f9f6ee;
  --icon-color-hover: rgba(249, 246, 238, 0.85);
  --indentation-guide-color: rgba(226, 117, 44, 0.65);
  --indentation-guide-color-active: rgba(226, 117, 44, 0.85);
  --inline-title-color: #e2752c;
  --inline-title-line-height: 1.5em;
  --inline-title-size: 2.2em;
  --input-date-separator: rgba(249, 246, 238, 0.65);
  --input-placeholder-color: rgba(249, 246, 238, 0.65);
  --interactive-accent: rgb(66, 0, 0);
  --interactive-accent-hover: hsl(-3, 102%, 14.95%);
  --interactive-accent-hsl: 0, 100%, 13%;
  --interactive-hover: #515151;
  --interactive-normal: #474747;
  --italic-accent-ink: #4caddd;
  --italic-color: #4caddd;
  --leather-color: #2a0000;
  --leather-color-alt: #440000;
  --leather-color-rgb: 75, 0, 0;
  --light: var(--background-primary);
  --light-ink: #f9f6ee;
  --light-ink-alt: #e2d6d6;
  --light-ink-fainted: rgba(249, 246, 238, 0.65);
  --light-ink-muted: rgba(249, 246, 238, 0.85);
  --lightgray: var(--background-secondary);
  --link-color: #e2752c;
  --link-color-hover: rgba(226, 117, 44, 0.85);
  --link-external-color: #e2752c;
  --link-external-color-hover: rgba(226, 117, 44, 0.85);
  --link-unresolved-color: rgba(226, 117, 44, 0.85);
  --link-unresolved-color-hover: #e2752c;
  --link-unresolved-decoration-color: #e2752c;
  --list-marker-color: rgba(226, 117, 44, 0.65);
  --list-marker-color-collapsed: #e2752c;
  --list-marker-color-hover: rgba(226, 117, 44, 0.65);
  --main-ink: #f9f6ee;
  --main-ink-fainted: rgba(249, 246, 238, 0.65);
  --main-ink-muted: rgba(249, 246, 238, 0.85);
  --main-ink-rgb: 249,246,238;
  --menu-background: #2a0000;
  --menu-border-color: #828282;
  --metadata-background: #202020;
  --metadata-border-color: #6e6e6e;
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: #6e6e6e;
  --metadata-gap: 4px;
  --metadata-input-background-active: #161616;
  --metadata-input-background-hover: #202020;
  --metadata-input-font: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #f9f6ee;
  --metadata-label-background-active: #202020;
  --metadata-label-background-hover: #202020;
  --metadata-label-font: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(249, 246, 238, 0.85);
  --metadata-label-text-color-hover: rgba(249, 246, 238, 0.85);
  --metadata-padding: 16px;
  --metadata-property-background-active: #333333;
  --metadata-property-background-hover: #333333;
  --metadata-property-box-shadow-focus: 0 0 0 2px #5a5a5a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #828282;
  --modal-background: #202020;
  --modal-border-color: #5a5a5a;
  --modal-border-width: 2px;
  --muted: 0.85;
  --nav-collapse-icon-color: #6e6e6e;
  --nav-collapse-icon-color-collapsed: rgba(249, 246, 238, 0.65);
  --nav-heading-color: #f9f6ee;
  --nav-heading-color-collapsed: rgba(249, 246, 238, 0.65);
  --nav-heading-color-collapsed-hover: rgba(249, 246, 238, 0.85);
  --nav-heading-color-hover: #f9f6ee;
  --nav-indentation-guide-color: rgba(249, 246, 238, 0.65);
  --nav-item-background-active: #440000;
  --nav-item-background-hover: #440000;
  --nav-item-background-selected: rgba(66, 0, 0, 0.15);
  --nav-item-color: #f9f6ee;
  --nav-item-color-active: #e2d6d6;
  --nav-item-color-highlighted: hsl(-3, 102%, 14.95%);
  --nav-item-color-hover: #e2d6d6;
  --nav-item-color-selected: #e2d6d6;
  --nav-tag-color: rgba(249, 246, 238, 0.65);
  --nav-tag-color-active: rgba(249, 246, 238, 0.85);
  --nav-tag-color-hover: rgba(249, 246, 238, 0.85);
  --pdf-background: #0c0c0c;
  --pdf-page-background: #0c0c0c;
  --pdf-shadow: 0 0 0 1px #6e6e6e;
  --pdf-sidebar-background: #0c0c0c;
  --pdf-thumbnail-shadow: 0 0 0 1px #6e6e6e;
  --pill-background: #333333;
  --pill-background-hover: #474747;
  --pill-border-color: #6e6e6e;
  --pill-border-color-hover: #828282;
  --pill-color: rgba(249, 246, 238, 0.85);
  --pill-color-hover: #f9f6ee;
  --pill-color-remove: rgba(249, 246, 238, 0.65);
  --pill-color-remove-hover: hsl(-3, 102%, 14.95%);
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: #0c0c0c;
  --prompt-border-color: rgba(226, 117, 44, 0.85);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, #474747 65%, transparent) linear-gradient(#474747, color-mix(in srgb, #474747 65%, transparent));
  --ribbon-background: #2a0000;
  --ribbon-background-collapsed: #440000;
  --search-clear-button-color: rgba(249, 246, 238, 0.85);
  --search-icon-color: rgba(249, 246, 238, 0.85);
  --search-result-background: #0c0c0c;
  --secondary: var(--text-accent);
  --secondary-ink: #e2752c;
  --secondary-ink-fainted: rgba(226, 117, 44, 0.65);
  --secondary-ink-muted: rgba(226, 117, 44, 0.85);
  --secondary-ink-rgb: 226, 117, 44;
  --setting-group-heading-color: #f9f6ee;
  --setting-items-background: #202020;
  --setting-items-border-color: #6e6e6e;
  --slider-thumb-border-color: #828282;
  --slider-track-background: #6e6e6e;
  --status-bar-background: #333333;
  --status-bar-border-color: #6e6e6e;
  --status-bar-text-color: rgba(249, 246, 238, 0.85);
  --suggestion-background: #0c0c0c;
  --sync-avatar-color-1: #8a2e2e;
  --sync-avatar-color-2: #b3682a;
  --sync-avatar-color-3: #c29938;
  --sync-avatar-color-4: #5a7a4d;
  --sync-avatar-color-5: #438f93;
  --sync-avatar-color-6: #1a4559;
  --sync-avatar-color-7: #5f4a8c;
  --sync-avatar-color-8: #b16982;
  --tab-background-active: #202020;
  --tab-container-background: #2a0000;
  --tab-divider-color: none;
  --tab-font-weight: 600;
  --tab-outline-color: #474747;
  --tab-switcher-background: #2a0000;
  --tab-switcher-menubar-background: linear-gradient(to top, #2a0000, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(66, 0, 0);
  --tab-text-color-focused-active-current: #f9f6ee;
  --table-add-button-border-color: #6e6e6e;
  --table-border-color: #6e6e6e;
  --table-drag-handle-background-active: rgb(66, 0, 0);
  --table-drag-handle-color: rgba(249, 246, 238, 0.65);
  --table-drag-handle-color-active: #e2d6d6;
  --table-header-border-color: #6e6e6e;
  --table-header-color: #e2752c;
  --table-selection: rgba(66, 0, 0, 0.1);
  --table-selection-border-color: rgb(66, 0, 0);
  --tag-background: rgba(226, 117, 44, 0.85);
  --tag-background-hover: rgba(226, 117, 44, 0.85);
  --tag-border-color: rgba(66, 0, 0, 0.15);
  --tag-border-color-hover: rgba(66, 0, 0, 0.15);
  --tag-color: #0c0c0c;
  --tag-color-hover: #202020;
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(-3, 102%, 14.95%);
  --text-accent-hover: hsl(-5, 105%, 16.77%);
  --text-error: #8a2e2e;
  --text-faint: rgba(249, 246, 238, 0.65);
  --text-fainted: rgba(249, 246, 238, 0.65);
  --text-highlight-bg: rgba(194, 153, 56, 0.4);
  --text-muted: rgba(249, 246, 238, 0.85);
  --text-normal: #f9f6ee;
  --text-on-accent: #e2d6d6;
  --text-on-accent-inverted: #e2d6d6;
  --text-selection: rgba(110, 110, 110, 0.5);
  --text-success: #5a7a4d;
  --text-warning: #b3682a;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #2a0000;
  --titlebar-background-focused: #2a0000;
  --titlebar-border-color: #6e6e6e;
  --titlebar-text-color: rgba(249, 246, 238, 0.85);
  --titlebar-text-color-focused: #f9f6ee;
  --vault-profile-color: #f9f6ee;
  --vault-profile-color-hover: #f9f6ee;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(42, 0, 0);
  color: rgb(249, 246, 238);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(12, 12, 12);
  color: rgb(249, 246, 238);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 0, 0);
  color: rgb(249, 246, 238);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(110, 110, 110);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(42, 0, 0);
  border-left-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
}

body div#quartz-root {
  background-color: rgb(12, 12, 12);
  color: rgb(249, 246, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(100, 173, 75);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 173, 75) none 0px;
  text-decoration: rgb(100, 173, 75);
  text-decoration-color: rgb(100, 173, 75);
}

body .page article p > em, em {
  color: rgb(76, 173, 221);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 173, 221) none 0px;
  text-decoration: rgb(76, 173, 221);
  text-decoration-color: rgb(76, 173, 221);
}

body .page article p > i, i {
  color: rgb(76, 173, 221);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 173, 221) none 0px;
  text-decoration: rgb(76, 173, 221);
  text-decoration-color: rgb(76, 173, 221);
}

body .page article p > strong, strong {
  color: rgb(100, 173, 75);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 173, 75) none 0px;
  text-decoration: rgb(100, 173, 75);
  text-decoration-color: rgb(100, 173, 75);
}

body .text-highlight {
  background-color: rgba(194, 153, 56, 0.4);
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 246, 238) none 0px;
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body del {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 246, 238) none 0px;
  text-decoration: line-through rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body p {
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(249, 246, 238, 0.85) none 0px;
  text-decoration: rgba(249, 246, 238, 0.85);
  text-decoration-color: rgba(249, 246, 238, 0.85);
}`,
    links: `body a.external, footer a {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration: underline rgb(226, 117, 44);
  text-decoration-color: rgb(226, 117, 44);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration: underline rgb(226, 117, 44);
  text-decoration-color: rgb(226, 117, 44);
}

body a.internal.broken {
  color: rgba(226, 117, 44, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(226, 117, 44, 0.85) none 0px;
  text-decoration: underline rgb(226, 117, 44);
  text-decoration-color: rgb(226, 117, 44);
}`,
    lists: `body dd {
  color: rgb(249, 246, 238);
}

body dt {
  color: rgb(249, 246, 238);
}

body ol > li {
  color: rgb(249, 246, 238);
}

body ol.overflow {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body ul > li {
  color: rgb(249, 246, 238);
}

body ul.overflow {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(249, 246, 238, 0.65);
  text-decoration: rgba(249, 246, 238, 0.65);
}

body blockquote {
  background-color: rgba(110, 110, 110, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body table {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

body td {
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
}

body th {
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(226, 117, 44);
}`,
    code: `body code {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
}

body pre > code > [data-line] {
  border-left-color: rgb(194, 153, 56);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(194, 153, 56);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(194, 153, 56);
  border-left-color: rgb(194, 153, 56);
  border-right-color: rgb(194, 153, 56);
  border-top-color: rgb(194, 153, 56);
}

body pre > code, pre:has(> code) {
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
}

body pre:has(> code) {
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
}`,
    images: `body audio {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body figcaption {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body img {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body video {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
}

body .footnotes {
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

body .transclude {
  background-color: rgba(110, 110, 110, 0.15);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgba(226, 117, 44, 0.85);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body .transclude-inner {
  background-color: rgba(110, 110, 110, 0.15);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgba(226, 117, 44, 0.85);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(226, 117, 44, 0.65);
  text-decoration: line-through rgba(226, 117, 44, 0.65);
  text-decoration-color: rgba(226, 117, 44, 0.65);
}

body input[type=checkbox] {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='!'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='*'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='-'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='/'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='>'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='?'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='I'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='S'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='b'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='c'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='f'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='i'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='k'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='l'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='p'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='u'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

body li.task-list-item[data-task='w'] {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-left-color: rgba(226, 117, 44, 0.85);
  border-right-color: rgba(226, 117, 44, 0.85);
  border-top-color: rgba(226, 117, 44, 0.85);
}

body .callout[data-callout="abstract"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(226, 214, 214);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 214, 214) none 0px;
  text-decoration: rgb(226, 214, 214);
  text-decoration-color: rgb(226, 214, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 246, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(249, 246, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(68, 0, 0);
  color: rgb(249, 246, 238);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(42, 0, 0);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(68, 0, 0);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(68, 0, 0);
  color: rgb(249, 246, 238);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(226, 117, 44, 0.85);
  border-bottom-color: rgba(66, 0, 0, 0.15);
  border-left-color: rgba(66, 0, 0, 0.15);
  border-right-color: rgba(66, 0, 0, 0.15);
  border-top-color: rgba(66, 0, 0, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(12, 12, 12);
}

body h1 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
}`,
    scrollbars: `body .callout {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-corner {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-track {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(249, 246, 238);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(249, 246, 238);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(249, 246, 238);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(68, 0, 0);
  border-bottom-color: rgb(226, 214, 214);
  border-left-color: rgb(226, 214, 214);
  border-right-color: rgb(226, 214, 214);
  border-top-color: rgb(226, 214, 214);
  color: rgb(226, 214, 214);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}`,
    footer: `body footer {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgba(249, 246, 238, 0.85);
  text-decoration: rgba(249, 246, 238, 0.85);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body li.section-li > .section .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
}

body ul.section-ul {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(226, 214, 214);
  border-left-color: rgb(226, 214, 214);
  border-right-color: rgb(226, 214, 214);
  border-top-color: rgb(226, 214, 214);
  color: rgb(226, 214, 214);
}

body .darkmode svg {
  color: rgb(226, 214, 214);
  stroke: rgb(226, 214, 214);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
  color: rgba(249, 246, 238, 0.85);
}

body .breadcrumb-element p {
  color: rgba(249, 246, 238, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

body .metadata {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 1px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 1px;
  border-top-color: rgb(110, 110, 110);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(51, 51, 51);
}

body .page-header h2.page-title {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(249, 246, 238);
  text-decoration: underline dotted rgb(249, 246, 238);
}

body details {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body input[type=text] {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(68, 0, 0);
  border-bottom-color: rgb(226, 214, 214);
  border-left-color: rgb(226, 214, 214);
  border-right-color: rgb(226, 214, 214);
  border-top-color: rgb(226, 214, 214);
  color: rgb(226, 214, 214);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body sub {
  color: rgb(249, 246, 238);
}

body summary {
  color: rgb(249, 246, 238);
}

body sup {
  color: rgb(249, 246, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 43.5;
  --accent-l: 49.4%;
  --accent-s: 47.6%;
  --background-modifier-active-hover: rgba(185, 152, 65, 0.1);
  --background-modifier-border: #ba9942;
  --background-modifier-border-focus: #c6a95d;
  --background-modifier-border-hover: #9d8137;
  --background-modifier-error: #632335;
  --background-modifier-error-hover: #762a3f;
  --background-modifier-error-rgb: 180, 60, 60;
  --background-modifier-form-field: #e5d7b4;
  --background-modifier-form-field-hover: #e5d7b4;
  --background-modifier-hover: #762a3f;
  --background-modifier-message: #c6a95d;
  --background-modifier-success: #c6a95d;
  --background-modifier-success-rgb: 113, 148, 97;
  --background-primary: #f9f6ee;
  --background-primary-alt: #efe7d1;
  --background-secondary: #632335;
  --background-secondary-alt: #f4eee0;
  --bases-cards-background: #f9f6ee;
  --bases-cards-cover-background: #efe7d1;
  --bases-cards-shadow: 0 0 0 1px #ba9942;
  --bases-cards-shadow-hover: 0 0 0 1px #9d8137;
  --bases-embed-border-color: #ba9942;
  --bases-group-heading-property-color: rgba(30, 61, 109, 0.85);
  --bases-table-border-color: #ba9942;
  --bases-table-cell-background-active: #f9f6ee;
  --bases-table-cell-background-disabled: #efe7d1;
  --bases-table-cell-background-selected: rgba(185, 152, 65, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #c6a95d;
  --bases-table-cell-shadow-focus: 0 0 0 2px #762a3f;
  --bases-table-group-background: #efe7d1;
  --bases-table-header-background: #f9f6ee;
  --bases-table-header-background-hover: #e5d7b4;
  --bases-table-header-color: rgba(30, 61, 109, 0.85);
  --bases-table-summary-background: #f9f6ee;
  --bases-table-summary-background-hover: #762a3f;
  --blockquote-background-color: rgba(186, 153, 66, 0.2);
  --blockquote-border-color: #9c2d32;
  --blur-background: color-mix(in srgb, #f9f6ee 65%, transparent) linear-gradient(#f9f6ee, color-mix(in srgb, #f9f6ee 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-accent-ink: #4f6c4f;
  --bold-color: #4f6c4f;
  --button-radius: 50px;
  --callout-border-width: 2px;
  --callout-bug: 180, 60, 60;
  --callout-default: 34, 89, 115;
  --callout-error: 180, 60, 60;
  --callout-example: 119, 92, 176;
  --callout-fail: 180, 60, 60;
  --callout-important: 83, 179, 184;
  --callout-info: 34, 89, 115;
  --callout-question: 219, 129, 52;
  --callout-success: 113, 148, 97;
  --callout-summary: 83, 179, 184;
  --callout-tip: 83, 179, 184;
  --callout-todo: 34, 89, 115;
  --callout-warning: 219, 129, 52;
  --canvas-background: #f9f6ee;
  --canvas-card-label-color: rgba(30, 61, 109, 0.65);
  --canvas-color-1: 180, 60, 60;
  --canvas-color-2: 219, 129, 52;
  --canvas-color-3: 242, 186, 68;
  --canvas-color-4: 113, 148, 97;
  --canvas-color-5: 83, 179, 184;
  --canvas-color-6: 119, 92, 176;
  --canvas-dot-pattern: rgba(156, 45, 50, 0.4);
  --caret-color: #80692d;
  --checkbox-border-color: #1e3d6d;
  --checkbox-border-color-hover: rgba(30, 61, 109, 0.65);
  --checkbox-color: #9c2d32;
  --checkbox-color-hover: rgba(156, 45, 50, 0.85);
  --checkbox-marker-color: #e5d7b4;
  --checklist-done-color: rgba(156, 45, 50, 0.65);
  --code-background: rgba(186, 153, 66, 0.2);
  --code-border-color: #ba9942;
  --code-bracket-background: #762a3f;
  --code-comment: rgba(30, 61, 109, 0.65);
  --code-function: #f2ba44;
  --code-important: #db8134;
  --code-keyword: #dc84a3;
  --code-normal: #1e3d6d;
  --code-operator: #b43c3c;
  --code-property: #53b3b8;
  --code-punctuation: rgba(30, 61, 109, 0.85);
  --code-string: #719461;
  --code-tag: #b43c3c;
  --code-value: #775cb0;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgba(30, 61, 109, 0.65);
  --collapse-icon-color-collapsed: rgb(185, 152, 65);
  --color-accent: rgb(185, 152, 65);
  --color-accent-1: rgb(193, 159, 78);
  --color-accent-2: rgb(199, 164, 92);
  --color-accent-hsl: 43.5, 47.6%, 49.4%;
  --color-base-00: #f9f6ee;
  --color-base-00-rgb: 249,246,238;
  --color-base-05: #f4eee0;
  --color-base-10: #efe7d1;
  --color-base-100: #29220e;
  --color-base-20: #e5d7b4;
  --color-base-25: #dfd0a6;
  --color-base-30: #dac897;
  --color-base-35: #d5c089;
  --color-base-40: #c6a95d;
  --color-base-50: #ba9942;
  --color-base-50-rgb: 186,153,66;
  --color-base-60: #9d8137;
  --color-base-70: #80692d;
  --color-blue: #225973;
  --color-blue-rgb: 34, 89, 115;
  --color-cyan: #53b3b8;
  --color-cyan-rgb: 83, 179, 184;
  --color-green: #719461;
  --color-green-rgb: 113, 148, 97;
  --color-orange: #db8134;
  --color-orange-rgb: 219, 129, 52;
  --color-pink: #dc84a3;
  --color-pink-rgb: 220, 132, 163;
  --color-purple: #775cb0;
  --color-purple-rgb: 119, 92, 176;
  --color-red: #b43c3c;
  --color-red-rgb: 180, 60, 60;
  --color-yellow: #f2ba44;
  --color-yellow-rgb: 242, 186, 68;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #ba9942;
  --divider-color-hover: #762a3f;
  --dropdown-background: #dac897;
  --dropdown-background-hover: #e5d7b4;
  --embed-background: rgba(186, 153, 66, 0.15);
  --embed-block-shadow-hover: 0 0 0 1px #ba9942, inset 0 0 0 1px #ba9942;
  --embed-border-start: 2px solid #762a3f;
  --fainted: 0.65;
  --file-header-background: #f9f6ee;
  --file-header-background-focused: #f9f6ee;
  --file-header-font: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #dac897;
  --flair-color: #1e3d6d;
  --font-interface: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Mono', monospace;
  --font-mermaid: '??', 'IBM Plex Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'IBM Plex Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'IBM Plex Mono', monospace;
  --font-print: '??', '??', 'IBM Plex Mono', monospace, 'Arial';
  --font-text: '??', 'IBM Plex Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Mono', monospace;
  --footnote-divider-color: #ba9942;
  --footnote-id-color: rgba(30, 61, 109, 0.85);
  --footnote-id-color-no-occurrences: rgba(30, 61, 109, 0.65);
  --footnote-input-background-active: #f4eee0;
  --graph-line: #d5c089;
  --graph-node: rgba(30, 61, 109, 0.85);
  --graph-node-attachment: #f2ba44;
  --graph-node-focused: #9c2d32;
  --graph-node-tag: #4f6c4f;
  --graph-node-unresolved: rgba(30, 61, 109, 0.65);
  --graph-text: #1e3d6d;
  --gray: var(--text-muted);
  --h1-color: #9c2d32;
  --h1-line-height: 1.5em;
  --h1-size: 2.2em;
  --h2-color: #9c2d32;
  --h2-line-height: 1.5em;
  --h2-size: 2em;
  --h3-color: #9c2d32;
  --h3-line-height: 1.5em;
  --h3-size: 1.8em;
  --h4-color: #9c2d32;
  --h4-line-height: 1.5em;
  --h4-size: 1.6em;
  --h5-color: #9c2d32;
  --h5-line-height: 1.5em;
  --h5-size: 1.4em;
  --h6-color: #9c2d32;
  --h6-line-height: 1.5em;
  --h6-size: 1.2em;
  --headerFont: var(--font-text);
  --heading-formatting: rgba(30, 61, 109, 0.65);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(156, 45, 50, 0.85);
  --icon-color: rgba(30, 61, 109, 0.85);
  --icon-color-active: rgb(185, 152, 65);
  --icon-color-focused: #1e3d6d;
  --icon-color-hover: rgba(30, 61, 109, 0.85);
  --indentation-guide-color: rgba(156, 45, 50, 0.65);
  --indentation-guide-color-active: rgba(156, 45, 50, 0.85);
  --inline-title-color: #9c2d32;
  --inline-title-line-height: 1.5em;
  --inline-title-size: 2.2em;
  --input-date-separator: rgba(30, 61, 109, 0.65);
  --input-placeholder-color: rgba(30, 61, 109, 0.65);
  --interactive-accent: #762a3f;
  --interactive-accent-hover: #632335;
  --interactive-accent-hsl: 43.5, 47.6%, 49.4%;
  --interactive-hover: #e5d7b4;
  --interactive-normal: #dac897;
  --italic-accent-ink: #9c2d32;
  --italic-color: #9c2d32;
  --leather-color: #632335;
  --leather-color-alt: #762a3f;
  --leather-color-rgb: 99, 35, 53;
  --light: var(--background-primary);
  --light-ink: #f9f6ee;
  --light-ink-alt: #e5d7b4;
  --light-ink-fainted: rgba(249, 246, 238, 0.65);
  --light-ink-muted: rgba(249, 246, 238, 0.85);
  --lightgray: var(--background-secondary);
  --link-color: #9c2d32;
  --link-color-hover: rgba(156, 45, 50, 0.85);
  --link-external-color: #9c2d32;
  --link-external-color-hover: rgba(156, 45, 50, 0.85);
  --link-unresolved-color: rgba(156, 45, 50, 0.85);
  --link-unresolved-color-hover: #9c2d32;
  --link-unresolved-decoration-color: #9c2d32;
  --list-marker-color: rgba(156, 45, 50, 0.65);
  --list-marker-color-collapsed: #9c2d32;
  --list-marker-color-hover: rgba(156, 45, 50, 0.65);
  --main-ink: #1e3d6d;
  --main-ink-fainted: rgba(30, 61, 109, 0.65);
  --main-ink-muted: rgba(30, 61, 109, 0.85);
  --main-ink-rgb: 30, 61, 109;
  --menu-background: #632335;
  --menu-border-color: #9d8137;
  --metadata-background: #efe7d1;
  --metadata-border-color: #ba9942;
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-divider-color: #ba9942;
  --metadata-gap: 4px;
  --metadata-input-background-active: #f4eee0;
  --metadata-input-background-hover: #efe7d1;
  --metadata-input-font: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #1e3d6d;
  --metadata-label-background-active: #efe7d1;
  --metadata-label-background-hover: #efe7d1;
  --metadata-label-font: '??', 'IBM Plex Mono', monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(30, 61, 109, 0.85);
  --metadata-label-text-color-hover: rgba(30, 61, 109, 0.85);
  --metadata-padding: 16px;
  --metadata-property-background-active: #e5d7b4;
  --metadata-property-background-hover: #e5d7b4;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c6a95d;
  --metadata-property-box-shadow-hover: 0 0 0 1px #9d8137;
  --modal-background: #efe7d1;
  --modal-border-color: #c6a95d;
  --modal-border-width: 2px;
  --muted: 0.85;
  --nav-collapse-icon-color: #ba9942;
  --nav-collapse-icon-color-collapsed: rgba(30, 61, 109, 0.65);
  --nav-heading-color: #1e3d6d;
  --nav-heading-color-collapsed: rgba(30, 61, 109, 0.65);
  --nav-heading-color-collapsed-hover: rgba(30, 61, 109, 0.85);
  --nav-heading-color-hover: #1e3d6d;
  --nav-indentation-guide-color: rgba(186, 153, 66, 0.65);
  --nav-item-background-active: #762a3f;
  --nav-item-background-hover: #762a3f;
  --nav-item-background-selected: rgba(185, 152, 65, 0.15);
  --nav-item-color: #f9f6ee;
  --nav-item-color-active: #e5d7b4;
  --nav-item-color-highlighted: rgb(185, 152, 65);
  --nav-item-color-hover: #e5d7b4;
  --nav-item-color-selected: #e5d7b4;
  --nav-tag-color: rgba(30, 61, 109, 0.65);
  --nav-tag-color-active: rgba(30, 61, 109, 0.85);
  --nav-tag-color-hover: rgba(30, 61, 109, 0.85);
  --pdf-background: #f9f6ee;
  --pdf-page-background: #f9f6ee;
  --pdf-sidebar-background: #f9f6ee;
  --pill-background: #e5d7b4;
  --pill-background-hover: #dac897;
  --pill-border-color: #ba9942;
  --pill-border-color-hover: #9d8137;
  --pill-color: rgba(30, 61, 109, 0.85);
  --pill-color-hover: #1e3d6d;
  --pill-color-remove: rgba(30, 61, 109, 0.65);
  --pill-color-remove-hover: rgb(185, 152, 65);
  --pill-padding-x: 4px;
  --pill-padding-y: 2px;
  --plexmono: 'IBM Plex Mono', monospace;
  --prompt-background: #f9f6ee;
  --prompt-border-color: rgba(156, 45, 50, 0.85);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, #f9f6ee 65%, transparent) linear-gradient(#f9f6ee, color-mix(in srgb, #f9f6ee 65%, transparent));
  --ribbon-background: #632335;
  --ribbon-background-collapsed: #762a3f;
  --search-clear-button-color: rgba(30, 61, 109, 0.85);
  --search-icon-color: rgba(30, 61, 109, 0.85);
  --search-result-background: #f9f6ee;
  --secondary: var(--text-accent);
  --secondary-ink: #9c2d32;
  --secondary-ink-fainted: rgba(156, 45, 50, 0.65);
  --secondary-ink-muted: rgba(156, 45, 50, 0.85);
  --secondary-ink-rgb: 156, 45, 50;
  --setting-group-heading-color: #1e3d6d;
  --setting-items-background: #efe7d1;
  --setting-items-border-color: #ba9942;
  --slider-thumb-border-color: #9d8137;
  --slider-track-background: #ba9942;
  --status-bar-background: #e5d7b4;
  --status-bar-border-color: #ba9942;
  --status-bar-text-color: rgba(30, 61, 109, 0.85);
  --suggestion-background: #f9f6ee;
  --sync-avatar-color-1: #b43c3c;
  --sync-avatar-color-2: #db8134;
  --sync-avatar-color-3: #f2ba44;
  --sync-avatar-color-4: #719461;
  --sync-avatar-color-5: #53b3b8;
  --sync-avatar-color-6: #225973;
  --sync-avatar-color-7: #775cb0;
  --sync-avatar-color-8: #dc84a3;
  --tab-background-active: #efe7d1;
  --tab-container-background: #632335;
  --tab-divider-color: none;
  --tab-font-weight: 600;
  --tab-outline-color: #dac897;
  --tab-switcher-background: #632335;
  --tab-switcher-menubar-background: linear-gradient(to top, #632335, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(185, 152, 65);
  --tab-text-color-focused-active-current: #1e3d6d;
  --table-add-button-border-color: #ba9942;
  --table-border-color: #ba9942;
  --table-drag-handle-background-active: #762a3f;
  --table-drag-handle-color: rgba(30, 61, 109, 0.65);
  --table-drag-handle-color-active: #e5d7b4;
  --table-header-border-color: #ba9942;
  --table-header-color: #9c2d32;
  --table-selection: rgba(185, 152, 65, 0.1);
  --table-selection-border-color: #762a3f;
  --tag-background: rgba(156, 45, 50, 0.85);
  --tag-background-hover: rgba(156, 45, 50, 0.85);
  --tag-border-color: rgba(185, 152, 65, 0.15);
  --tag-border-color-hover: rgba(185, 152, 65, 0.15);
  --tag-color: #efe7d1;
  --tag-color-hover: #efe7d1;
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.12em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(185, 152, 65);
  --text-accent-hover: rgb(199, 164, 92);
  --text-error: #b43c3c;
  --text-faint: rgba(30, 61, 109, 0.65);
  --text-fainted: rgba(30, 61, 109, 0.65);
  --text-highlight-bg: rgba(242, 186, 68, 0.4);
  --text-muted: rgba(30, 61, 109, 0.85);
  --text-normal: #1e3d6d;
  --text-on-accent: #e5d7b4;
  --text-on-accent-inverted: #e5d7b4;
  --text-selection: rgba(186, 153, 66, 0.5);
  --text-success: #719461;
  --text-warning: #db8134;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #632335;
  --titlebar-background-focused: #632335;
  --titlebar-border-color: #ba9942;
  --titlebar-text-color: rgba(30, 61, 109, 0.85);
  --titlebar-text-color-focused: #1e3d6d;
  --vault-profile-color: #1e3d6d;
  --vault-profile-color-hover: #1e3d6d;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(99, 35, 53);
  color: rgb(30, 61, 109);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(249, 246, 238);
  color: rgb(30, 61, 109);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(99, 35, 53);
  color: rgb(30, 61, 109);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(186, 153, 66);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(99, 35, 53);
  border-left-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
}

body div#quartz-root {
  background-color: rgb(249, 246, 238);
  color: rgb(30, 61, 109);
}`,
    typography: `body .page article p > b, b {
  color: rgb(79, 108, 79);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(79, 108, 79) none 0px;
  text-decoration: rgb(79, 108, 79);
  text-decoration-color: rgb(79, 108, 79);
}

body .page article p > em, em {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration: rgb(156, 45, 50);
  text-decoration-color: rgb(156, 45, 50);
}

body .page article p > i, i {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration: rgb(156, 45, 50);
  text-decoration-color: rgb(156, 45, 50);
}

body .page article p > strong, strong {
  color: rgb(79, 108, 79);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(79, 108, 79) none 0px;
  text-decoration: rgb(79, 108, 79);
  text-decoration-color: rgb(79, 108, 79);
}

body .text-highlight {
  background-color: rgba(242, 186, 68, 0.4);
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body del {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration: line-through rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body p {
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(249, 246, 238, 0.85) none 0px;
  text-decoration: rgba(249, 246, 238, 0.85);
  text-decoration-color: rgba(249, 246, 238, 0.85);
}`,
    links: `body a.external, footer a {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration: underline rgb(156, 45, 50);
  text-decoration-color: rgb(156, 45, 50);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration: underline rgb(156, 45, 50);
  text-decoration-color: rgb(156, 45, 50);
}

body a.internal.broken {
  color: rgba(156, 45, 50, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(156, 45, 50, 0.85) none 0px;
  text-decoration: underline rgb(156, 45, 50);
  text-decoration-color: rgb(156, 45, 50);
}`,
    lists: `body dd {
  color: rgb(30, 61, 109);
}

body dt {
  color: rgb(30, 61, 109);
}

body ol > li {
  color: rgb(30, 61, 109);
}

body ol.overflow {
  background-color: rgb(249, 246, 238);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body ul > li {
  color: rgb(30, 61, 109);
}

body ul.overflow {
  background-color: rgb(249, 246, 238);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(30, 61, 109, 0.65);
  text-decoration: rgba(30, 61, 109, 0.65);
}

body blockquote {
  background-color: rgba(186, 153, 66, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body table {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

body td {
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
}

body th {
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(156, 45, 50);
}`,
    code: `body code {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
}

body pre > code > [data-line] {
  border-left-color: rgb(242, 186, 68);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 186, 68);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 186, 68);
  border-left-color: rgb(242, 186, 68);
  border-right-color: rgb(242, 186, 68);
  border-top-color: rgb(242, 186, 68);
}

body pre > code, pre:has(> code) {
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
}

body pre:has(> code) {
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
}`,
    images: `body audio {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body figcaption {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body img {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body video {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    embeds: `body .file-embed {
  background-color: rgb(239, 231, 209);
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
}

body .footnotes {
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

body .transclude {
  background-color: rgba(186, 153, 66, 0.15);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(118, 42, 63);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body .transclude-inner {
  background-color: rgba(186, 153, 66, 0.15);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(118, 42, 63);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(156, 45, 50, 0.65);
  text-decoration: line-through rgba(156, 45, 50, 0.65);
  text-decoration-color: rgba(156, 45, 50, 0.65);
}

body input[type=checkbox] {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='!'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='*'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='-'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='/'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='>'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='?'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='I'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='S'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='b'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='c'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='d'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='f'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='i'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='k'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='l'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='p'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='u'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

body li.task-list-item[data-task='w'] {
  color: rgb(30, 61, 109);
  text-decoration: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-left-color: rgba(156, 45, 50, 0.85);
  border-right-color: rgba(156, 45, 50, 0.85);
  border-top-color: rgba(156, 45, 50, 0.85);
}

body .callout[data-callout="abstract"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(229, 215, 180);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(249, 246, 238);
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(229, 215, 180);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 215, 180) none 0px;
  text-decoration: rgb(229, 215, 180);
  text-decoration-color: rgb(229, 215, 180);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(30, 61, 109);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(30, 61, 109);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(118, 42, 63);
  color: rgb(30, 61, 109);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(99, 35, 53);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(118, 42, 63);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(118, 42, 63);
  color: rgb(30, 61, 109);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(156, 45, 50, 0.85);
  border-bottom-color: rgba(186, 153, 66, 0.15);
  border-left-color: rgba(186, 153, 66, 0.15);
  border-right-color: rgba(186, 153, 66, 0.15);
  border-top-color: rgba(186, 153, 66, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(239, 231, 209);
}

body h1 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
}`,
    scrollbars: `body .callout {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

body ::-webkit-scrollbar-corner {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

body ::-webkit-scrollbar-track {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(249, 246, 238);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(249, 246, 238);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(249, 246, 238);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(118, 42, 63);
  border-bottom-color: rgb(229, 215, 180);
  border-left-color: rgb(229, 215, 180);
  border-right-color: rgb(229, 215, 180);
  border-top-color: rgb(229, 215, 180);
  color: rgb(229, 215, 180);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}`,
    footer: `body footer {
  background-color: rgb(229, 215, 180);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgba(30, 61, 109, 0.85);
  text-decoration: rgba(30, 61, 109, 0.85);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body li.section-li > .section .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
  text-decoration: rgb(249, 246, 238);
}

body ul.section-ul {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(229, 215, 180);
  border-left-color: rgb(229, 215, 180);
  border-right-color: rgb(229, 215, 180);
  border-top-color: rgb(229, 215, 180);
  color: rgb(229, 215, 180);
}

body .darkmode svg {
  color: rgb(229, 215, 180);
  stroke: rgb(229, 215, 180);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
  color: rgba(30, 61, 109, 0.85);
}

body .breadcrumb-element p {
  color: rgba(30, 61, 109, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

body .metadata {
  background-color: rgb(239, 231, 209);
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 1px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 1px;
  border-top-color: rgb(186, 153, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(229, 215, 180);
}

body .page-header h2.page-title {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(30, 61, 109);
  text-decoration: underline dotted rgb(30, 61, 109);
}

body details {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body input[type=text] {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(118, 42, 63);
  border-bottom-color: rgb(229, 215, 180);
  border-left-color: rgb(229, 215, 180);
  border-right-color: rgb(229, 215, 180);
  border-top-color: rgb(229, 215, 180);
  color: rgb(229, 215, 180);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

body sub {
  color: rgb(30, 61, 109);
}

body summary {
  color: rgb(30, 61, 109);
}

body sup {
  color: rgb(30, 61, 109);
}`,
  },
};
