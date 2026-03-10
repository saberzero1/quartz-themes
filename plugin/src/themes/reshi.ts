import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "reshi",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "noto-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: 45%;
  --accent-h: 84;
  --accent-s: 25%;
  --background-modifier-active-hover: ((#849e5f), 0.15);
  --background-modifier-border: #9d9d9d;
  --background-modifier-border-focus: #9d9d9d;
  --background-modifier-border-hover: #9d9d9d;
  --background-modifier-error: #8e4646;
  --background-modifier-error-hover: #8e4646;
  --background-modifier-error-rgb: rgb(142, 70, 70);
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-message: #202020;
  --background-modifier-success: #778e55;
  --background-modifier-success-rgb: rgb(145, 168, 110);
  --background-primary: #252525;
  --background-primary-alt: #1f1f1f;
  --background-secondary: #1d1d1d;
  --background-secondary-alt: #151515;
  --bases-cards-background: #252525;
  --bases-cards-cover-background: #1f1f1f;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #9d9d9d;
  --bases-cards-shadow-hover: 0 0 0 1px #9d9d9d;
  --bases-embed-border-color: #9d9d9d;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #707070;
  --bases-table-border-color: #9d9d9d;
  --bases-table-cell-background-active: #252525;
  --bases-table-cell-background-disabled: #1f1f1f;
  --bases-table-cell-background-selected: #404040;
  --bases-table-cell-shadow-active: 0 0 0 2px #9d9d9d;
  --bases-table-cell-shadow-focus: 0 0 0 2px #778e55;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #1f1f1f;
  --bases-table-header-background: #252525;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #707070;
  --bases-table-row-background-hover: none;
  --bases-table-summary-background: #252525;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --black: #202020;
  --blockquote-background-color: none;
  --blockquote-border-color: #778e55;
  --blockquote-color: #707070;
  --bodyFont: var(--font-text);
  --bold-color: #778e55;
  --bold-weight: 600;
  --button-radius: 6px;
  --callout-blend-mode: normal;
  --callout-border-opacity: 100%;
  --callout-border-width: 1px;
  --callout-bug: 223, 191, 116;
  --callout-content-background: normal;
  --callout-content-padding: 0p;
  --callout-default: 145, 168, 110;
  --callout-error: 142, 70, 70;
  --callout-example: 155, 122, 209;
  --callout-fail: 142, 70, 70;
  --callout-important: 145, 168, 110;
  --callout-info: 123, 171, 212;
  --callout-padding: 12px;
  --callout-question: 155, 122, 209;
  --callout-quote: 223, 191, 116;
  --callout-radius: 6px;
  --callout-success: 145, 168, 110;
  --callout-summary: 223, 191, 116;
  --callout-tip: 155, 122, 209;
  --callout-title-size: 18px;
  --callout-todo: 123, 171, 212;
  --callout-warning: 142, 70, 70;
  --canvas-background: #252525;
  --canvas-card-label-color: #707070;
  --canvas-color-1: rgb(142, 70, 70);
  --canvas-color-2: rgb(207, 132, 79);
  --canvas-color-3: rgb(223, 191, 116);
  --canvas-color-4: rgb(145, 168, 110);
  --canvas-color-5: rgb(127, 187, 184);
  --canvas-color-6: rgb(155, 122, 209);
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #333333;
  --caret-color: #9d9d9d;
  --checkbox-border-color: #778e55;
  --checkbox-border-color-hover: #778e55;
  --checkbox-color: none;
  --checkbox-color-hover: #1f1f1f;
  --checkbox-marker-color: #778e55;
  --checkbox-radius: 50%;
  --checklist-done-color: #6a6a6a;
  --clickable-icon-radius: 0px;
  --code-background: #1d1d1d;
  --code-border-color: #9d9d9d;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #6a6a6a;
  --code-function: #7fbbb8;
  --code-important: #7babd4;
  --code-keyword: #9b7ad1;
  --code-normal: #707070;
  --code-operator: #9b7ad1;
  --code-property: #7babd4;
  --code-punctuation: #b96b88;
  --code-radius: 0px;
  --code-size: 0.8em;
  --code-string: #91a86e;
  --code-tag: #7fbbb8;
  --code-value: #b96b88;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #6a6a6a;
  --collapse-icon-color-collapsed: #778e55;
  --color-accent: rgb(173, 190, 147);
  --color-accent-1: rgb(199, 210, 178);
  --color-accent-2: rgb(220, 227, 207);
  --color-accent-hsl: #778e55;
  --color-blue: #7babd4;
  --color-blue-rgb: rgb(123, 171, 212);
  --color-cyan: #7fbbb8;
  --color-cyan-rgb: rgb(127, 187, 184);
  --color-green: #91a86e;
  --color-green-rgb: rgb(145, 168, 110);
  --color-orange: #cf844f;
  --color-orange-rgb: rgb(207, 132, 79);
  --color-pink: #b96b88;
  --color-pink-rgb: rgb(185, 107, 136);
  --color-purple: #9b7ad1;
  --color-purple-rgb: rgb(155, 122, 209);
  --color-red: #8e4646;
  --color-red-rgb: rgb(142, 70, 70);
  --color-yellow: #dfbf74;
  --color-yellow-rgb: rgb(223, 191, 116);
  --dark: var(--text-normal);
  --dark-grey-1: #1d1d1d;
  --dark-grey-2: #1f1f1f;
  --dark-grey-3: #151515;
  --dark-white: #9d9d9d;
  --darkgray: var(--text-normal);
  --dialog-max-width: 85vh;
  --divider-color: #9d9d9d;
  --divider-color-hover: #778e55;
  --divider-vertical-height: 100% - 40px;
  --divider-width-hover: 2px;
  --drag-ghost-background: #333333;
  --drag-ghost-text-color: #c4c4c4;
  --embed-block-shadow-hover: 0 0 0 1px #9d9d9d;
  --embed-border-bottom: 1px solid #9d9d9d;
  --embed-border-left: 1px solid #9d9d9d;
  --embed-border-right: 1px solid #9d9d9d;
  --embed-border-start: 2px solid #778e55;
  --embed-border-top: 1px solid #9d9d9d;
  --embed-padding: 0 0 0 0;
  --file-header-background: #252525;
  --file-header-background-focused: #252525;
  --file-header-font: '??', '??', '??', 'Noto Sans', sans-serif;
  --file-margins: 32px;
  --flair-color: #9d9d9d;
  --font-default: 'Noto Sans', sans-serif;
  --font-interface: '??', '??', '??', 'Noto Sans', sans-serif;
  --font-mermaid: '??', 'Noto Sans', sans-serif, 'Noto Sans', sans-serif;
  --font-monospace: '??', '??', 'JetBrains Mono', monospace;
  --font-monospace-default: 'JetBrains Mono', monospace;
  --font-print: '??', '??', 'Noto Sans', sans-serif, 'Arial';
  --font-text: '??', 'Noto Sans', sans-serif, 'Noto Sans', sans-serif;
  --font-text-theme: 'Noto Sans', sans-serif;
  --footnote-divider-color: none;
  --footnote-divider-color-active: none;
  --footnote-id-color: #707070;
  --footnote-id-color-no-occurrences: #6a6a6a;
  --footnote-input-background: none;
  --footnote-input-background-active: #1d1d1d;
  --footnote-radius: 0px;
  --gold-01: #f4e8be;
  --gold-02: #f0e0a8;
  --gold-03: #ecd993;
  --gold-04: #e8d17d;
  --gold-05: #e4c967;
  --gold-06: #e0c252;
  --gold-07: #ddba3c;
  --graph-line: #333333;
  --graph-node: #778e55;
  --graph-node-attachment: #707070;
  --graph-node-focused: #778e55;
  --graph-node-tag: #404040;
  --graph-node-unresolved: #c4c4c4;
  --graph-text: #555555;
  --gray: var(--text-muted);
  --green-01: #829f55;
  --green-02: #748e4c;
  --green-03: #677e43;
  --green-04: #596d3a;
  --green-05: #4b5c31;
  --green-06: #3e4c28;
  --green-07: #303b1f;
  --green-08: #9db27e;
  --green-09: #91a86e;
  --green-10: #849e5f;
  --green-11: #778e55;
  --green-12: #6a7e4b;
  --green-13: #5c6e42;
  --green-14: #4f5e38;
  --h1-color: #778e55;
  --h1-font: 'Noto Sans', sans-serif;
  --h1-size: 1.802em;
  --h1-weight: 650;
  --h2-color: #e0c252;
  --h2-font: 'Noto Sans', sans-serif;
  --h2-size: 1.602em;
  --h2-weight: 650;
  --h3-color: #849e5f;
  --h3-font: 'Noto Sans', sans-serif;
  --h3-size: 1.424em;
  --h3-weight: 650;
  --h4-color: #e4c967;
  --h4-font: 'Noto Sans', sans-serif;
  --h4-size: 1.266em;
  --h4-weight: 650;
  --h5-color: #91a86e;
  --h5-font: 'Noto Sans', sans-serif;
  --h5-size: 1.125em;
  --h5-weight: 650;
  --h6-color: #e8d17d;
  --h6-font: 'Noto Sans', sans-serif;
  --h6-weight: 650;
  --headerFont: var(--font-text);
  --heading-formatting: #9d9d9d;
  --highlight: var(--text-highlight-bg);
  --hr-color: #333333;
  --hr-thickness: 1px;
  --icon-color: #778e55;
  --icon-color-active: #9db27e;
  --icon-color-focused: #9db27e;
  --icon-color-hover: #9db27e;
  --icon-opacity: 100%;
  --icon-opacity-active: 100%;
  --icon-opacity-hover: 100%;
  --icon-size: 16px;
  --icon-stroke: 2px;
  --indentation-guide-color: #404040;
  --indentation-guide-color-active: #778e55;
  --indentation-guide-editing-indent: 13.5px;
  --inline-title-color: #9d9d9d;
  --inline-title-font: 'Noto Sans', sans-serif;
  --inline-title-line-height: 1.3;
  --inline-title-size: 2.3em;
  --inline-title-weight: 650;
  --input-date-separator: #6a6a6a;
  --input-placeholder-color: #6a6a6a;
  --input-radius: 6px;
  --interactive-accent: #778e55;
  --interactive-accent-hover: #849e5f;
  --interactive-accent-hsl: #778e55;
  --italic-color: #ecd993;
  --light: var(--background-primary);
  --light-black: #404040;
  --light-gold: #f8f1d8;
  --light-green: #cdd3c3;
  --light-grey: #ececec;
  --lightgray: var(--background-secondary);
  --link-color: #778e55;
  --link-color-hover: #9db27e;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-decoration-thickness: none;
  --link-external-color: #6a6a6a;
  --link-external-color-hover: #9d9d9d;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #e4c967;
  --link-unresolved-decoration-color: none;
  --link-unresolved-decoration-style: none;
  --link-unresolved-opacity: 100%;
  --list-bullet-size: 0.275em;
  --list-indent: 1.55em;
  --list-marker-align: left;
  --list-marker-color: #6a6a6a;
  --list-marker-color-collapsed: #6a6a6a;
  --list-marker-color-hover: #707070;
  --list-marker-min-width: 1.55em;
  --medium-dark-grey: #252525;
  --medium-grey-1: #707070;
  --medium-grey-2: #6a6a6a;
  --medium-grey-3: #555555;
  --medium-grey-4: #404040;
  --medium-grey-5: #333333;
  --medium-grey-6: #202020;
  --medium-light-grey-1: #e1e1e1;
  --medium-light-grey-2: #d7d7d7;
  --medium-light-grey-3: #c4c4c4;
  --menu-background: #1d1d1d;
  --menu-border-color: #9d9d9d;
  --menu-radius: 0px;
  --metadata-background: #1d1d1d;
  --metadata-border-color: #9d9d9d;
  --metadata-border-radius: 6px;
  --metadata-border-width: 1px;
  --metadata-divider-color: none;
  --metadata-divider-color-focus: none;
  --metadata-divider-color-hover: none;
  --metadata-divider-width: 0px;
  --metadata-gap: 0px;
  --metadata-input-background: none;
  --metadata-input-background-active: #1d1d1d;
  --metadata-input-background-hover: #1d1d1d;
  --metadata-input-font: '??', '??', '??', 'Noto Sans', sans-serif;
  --metadata-input-font-size: 12px;
  --metadata-input-text-color: #707070;
  --metadata-label-background-active: none;
  --metadata-label-background-hover: none;
  --metadata-label-font: '??', '??', '??', 'Noto Sans', sans-serif;
  --metadata-label-font-size: 16px;
  --metadata-label-font-weight: 500;
  --metadata-label-text-color: #707070;
  --metadata-label-text-color-hover: #9d9d9d;
  --metadata-max-width: 700px;
  --metadata-padding: 12px;
  --metadata-property-background: none;
  --metadata-property-background-active: none;
  --metadata-property-background-hover: none;
  --metadata-property-box-shadow-focus: 0 0 0 2px #9d9d9d;
  --metadata-property-box-shadow-hover: 0 0 0 1px #9d9d9d;
  --metadata-property-padding: 6px;
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 16px;
  --modal-background: #252525;
  --modal-border-color: #9d9d9d;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #6a6a6a;
  --nav-collapse-icon-color-collapsed: #6a6a6a;
  --nav-heading-color: #9d9d9d;
  --nav-heading-color-collapsed: #6a6a6a;
  --nav-heading-color-collapsed-hover: #707070;
  --nav-heading-color-hover: #9d9d9d;
  --nav-indentation-guide-color: #1d1d1d;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: #1d1d1d;
  --nav-item-background-hover: #151515;
  --nav-item-background-selected: #1d1d1d;
  --nav-item-children-margin-left: 20px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #9d9d9d;
  --nav-item-color-active: #778e55;
  --nav-item-color-highlighted: #778e55;
  --nav-item-color-hover: #9d9d9d;
  --nav-item-color-selected: #778e55;
  --nav-item-padding: 4px/**/8px/**/4px/**/24px;
  --nav-item-parent-padding: 4px/**/8px/**/4px/**/24px;
  --nav-item-radius: 0px;
  --nav-item-size: 12px;
  --nav-item-weight: 400;
  --nav-item-weight-active: 500;
  --nav-item-weight-hover: 500;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #6a6a6a;
  --nav-tag-color-active: #707070;
  --nav-tag-color-hover: #707070;
  --nav-tag-radius: 0px;
  --pdf-background: #252525;
  --pdf-page-background: #252525;
  --pdf-shadow: 0 0 0 1px #9d9d9d;
  --pdf-sidebar-background: #252525;
  --pdf-thumbnail-shadow: 0 0 0 1px #9d9d9d;
  --pill-background: #778e55;
  --pill-background-hover: #9db27e;
  --pill-border-color: #778e55;
  --pill-border-color-hover: #9db27e;
  --pill-border-width: none;
  --pill-color: #252525;
  --pill-color-hover: #252525;
  --pill-color-remove: none;
  --pill-color-remove-hover: none;
  --pill-decoration: #9d9d9d;
  --pill-decoration-hover: #151515;
  --pill-padding-x: 0;
  --pill-padding-y: 0;
  --pill-radius: 6px;
  --pill-weight: 400;
  --popover-font-size: 13px;
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --popover-width: 300px;
  --prompt-background: #252525;
  --prompt-border-color: #9d9d9d;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background: #252525;
  --ribbon-background-collapsed: #252525;
  --scrollbar-active-thumb-bg: #151515;
  --scrollbar-bg: #202020;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: #1d1d1d;
  --search-clear-button-color: #9d9d9d;
  --search-icon-color: #778e55;
  --search-result-background: #252525;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #9d9d9d;
  --setting-items-background: #1f1f1f;
  --setting-items-border-color: #9d9d9d;
  --setting-items-radius: 0px;
  --slider-s-thumb-size: 13px;
  --slider-thumb-border-color: #9d9d9d;
  --slider-thumb-height: 16px;
  --slider-thumb-radius: 6px;
  --slider-thumb-width: 16px;
  --slider-track-background: #151515;
  --slider-track-height: 2px;
  --status-bar-background: #1d1d1d;
  --status-bar-border-color: #9d9d9d;
  --status-bar-radius: 6px 0px;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #9d9d9d;
  --suggestion-background: #252525;
  --swatch-height: 16px;
  --swatch-radius: 6px;
  --swatch-shadow: none;
  --swatch-width: 16px;
  --sync-avatar-color-1: #8e4646;
  --sync-avatar-color-2: #cf844f;
  --sync-avatar-color-3: #dfbf74;
  --sync-avatar-color-4: #91a86e;
  --sync-avatar-color-5: #7fbbb8;
  --sync-avatar-color-6: #7babd4;
  --sync-avatar-color-7: #9b7ad1;
  --sync-avatar-color-8: #b96b88;
  --tab-background-active: #252525;
  --tab-container-background: #1d1d1d;
  --tab-divider-color: #9d9d9d;
  --tab-font-size: 12px;
  --tab-font-weight: 400;
  --tab-outline-color: #9d9d9d;
  --tab-radius: 6px 6px 0px 0px;
  --tab-radius-active: 6px 6px 0px 0px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-shadow: -1px 0 1px 0 #9d9d9d;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #1d1d1d;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d1d1d, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(173, 190, 147);
  --tab-text-color: #9d9d9d;
  --tab-text-color-active: #9d9d9d;
  --tab-text-color-focused: #9d9d9d;
  --tab-text-color-focused-active: #9d9d9d;
  --tab-text-color-focused-active-current: #9d9d9d;
  --tab-text-color-focused-highlighted: #9d9d9d;
  --table-add-button-border-color: #9d9d9d;
  --table-background: #252525;
  --table-border-color: #9d9d9d;
  --table-column-alt-background: none;
  --table-drag-handle-background: none;
  --table-drag-handle-background-active: #9d9d9d;
  --table-drag-handle-color: #6a6a6a;
  --table-drag-handle-color-active: #151515;
  --table-header-background: #1f1f1f;
  --table-header-background-hover: #151515;
  --table-header-border-color: #9d9d9d;
  --table-header-color: #778e55;
  --table-header-font: 'Noto Sans', sans-serif;
  --table-header-weight: 650;
  --table-last-border-width: 1px;
  --table-row-alt-background: none;
  --table-row-alt-background-hover: #252525;
  --table-row-background-hover: none;
  --table-selection: #404040;
  --table-selection-border-color: #9d9d9d;
  --table-selection-border-radius: none;
  --table-selection-border-width: 1px;
  --table-text-color: #9d9d9d;
  --table-text-size: 14px;
  --tag-background: #778e55;
  --tag-background-hover: #9db27e;
  --tag-border-color: #778e55;
  --tag-border-color-hover: #9db27e;
  --tag-border-width: 2px;
  --tag-color: #252525;
  --tag-color-hover: #252525;
  --tag-decoration: #252525;
  --tag-decoration-hover: #252525;
  --tag-padding-x: 2px;
  --tag-padding-y: 2px;
  --tag-radius: 6px;
  --tag-size: 12px;
  --tag-weight: 400;
  --tertiary: var(--text-accent-hover);
  --text-accent: #778e55;
  --text-accent-hover: #9db27e;
  --text-error: #8e4646;
  --text-faint: #6a6a6a;
  --text-highlight-bg: #404040;
  --text-muted: #707070;
  --text-normal: #9d9d9d;
  --text-on-accent: #151515;
  --text-on-accent-inverted: #9d9d9d;
  --text-selection: #404040;
  --text-success: #778e55;
  --text-warning: #8e4646;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #252525;
  --titlebar-background-focused: #252525;
  --titlebar-border-color: none;
  --titlebar-text-color: #c4c4c4;
  --titlebar-text-color-focused: #9d9d9d;
  --titlebar-text-focused: #d7d7d7;
  --titlebar-text-weight: 600;
  --toggle-border-width: 1px;
  --toggle-radius: 6px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 24px;
  --toggle-thumb-color: #1d1d1d;
  --toggle-thumb-height: 16px;
  --toggle-thumb-radius: 6px;
  --toggle-thumb-width: 16px;
  --toggle-width: 32px;
  --vault-name-color: #c4c4c4;
  --vault-name-font-size: 12px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #9d9d9d;
  --vault-profile-color-hover: #9d9d9d;
  --white: #a3a3a3;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 29, 29);
  color: rgb(157, 157, 157);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(37, 37, 37);
  color: rgb(157, 157, 157);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 29, 29);
  color: rgb(157, 157, 157);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(157, 157, 157);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 29, 29);
  border-left-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

body div#quartz-root {
  background-color: rgb(37, 37, 37);
  color: rgb(157, 157, 157);
}`,
    typography: `body .page article p > b, b {
  color: rgb(119, 142, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(119, 142, 85) none 0px;
  text-decoration: rgb(119, 142, 85);
  text-decoration-color: rgb(119, 142, 85);
}

body .page article p > em, em {
  color: rgb(236, 217, 147);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(236, 217, 147) none 0px;
  text-decoration: rgb(236, 217, 147);
  text-decoration-color: rgb(236, 217, 147);
}

body .page article p > i, i {
  color: rgb(236, 217, 147);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(236, 217, 147) none 0px;
  text-decoration: rgb(236, 217, 147);
  text-decoration-color: rgb(236, 217, 147);
}

body .page article p > strong, strong {
  color: rgb(119, 142, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(119, 142, 85) none 0px;
  text-decoration: rgb(119, 142, 85);
  text-decoration-color: rgb(119, 142, 85);
}

body .text-highlight {
  background-color: rgb(64, 64, 64);
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(157, 157, 157) none 0px;
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body del {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(157, 157, 157) none 0px;
  text-decoration: line-through rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body p {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}`,
    links: `body a.external, footer a {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration: rgb(106, 106, 106);
  text-decoration-color: rgb(106, 106, 106);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(119, 142, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(119, 142, 85) none 0px;
  text-decoration: rgb(119, 142, 85);
  text-decoration-color: rgb(119, 142, 85);
}

body a.internal.broken {
  color: rgb(228, 201, 103);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(228, 201, 103) none 0px;
  text-decoration: rgb(228, 201, 103);
  text-decoration-color: rgb(228, 201, 103);
}`,
    lists: `body dd {
  color: rgb(157, 157, 157);
}

body dt {
  color: rgb(157, 157, 157);
}

body ol > li {
  color: rgb(157, 157, 157);
}

body ol.overflow {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body ul > li {
  color: rgb(157, 157, 157);
}

body ul.overflow {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(106, 106, 106);
  text-decoration: rgb(106, 106, 106);
}

body blockquote {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body table {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  width: 201.359px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(37, 37, 37);
}

body td {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

body th {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(119, 142, 85);
  font-weight: 650;
}

body tr {
  background-color: rgb(31, 31, 31);
}`,
    code: `body code {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(157, 157, 157);
}

body pre > code > [data-line] {
  border-left-color: rgb(127, 187, 184);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(127, 187, 184);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(127, 187, 184);
  border-left-color: rgb(127, 187, 184);
  border-right-color: rgb(127, 187, 184);
  border-top-color: rgb(127, 187, 184);
}

body pre > code, pre:has(> code) {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body figcaption {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body figure {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body img {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body video {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}`,
    embeds: `body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

body .transclude {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(106, 106, 106);
  text-decoration: line-through rgb(106, 106, 106);
  text-decoration-color: rgb(106, 106, 106);
}

body input[type=checkbox] {
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='*'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='-'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='/'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='>'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='?'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='I'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='S'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='b'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='c'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='d'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='f'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='i'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='k'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='l'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='p'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='u'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body li.task-list-item[data-task='w'] {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(145, 168, 110);
  border-left-color: rgb(145, 168, 110);
  border-right-color: rgb(145, 168, 110);
  border-top-color: rgb(145, 168, 110);
}

body .callout[data-callout="abstract"] {
  --callout-color: 223, 191, 116;
  background-color: rgba(223, 191, 116, 0.1);
  border-bottom-color: rgb(223, 191, 116);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(223, 191, 116);
  border-left-width: 1px;
  border-right-color: rgb(223, 191, 116);
  border-right-width: 1px;
  border-top-color: rgb(223, 191, 116);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 223, 191, 116;
  background-color: rgba(223, 191, 116, 0.1);
  border-bottom-color: rgb(223, 191, 116);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(223, 191, 116);
  border-left-width: 1px;
  border-right-color: rgb(223, 191, 116);
  border-right-width: 1px;
  border-top-color: rgb(223, 191, 116);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 142, 70, 70;
  background-color: rgba(142, 70, 70, 0.1);
  border-bottom-color: rgb(142, 70, 70);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(142, 70, 70);
  border-left-width: 1px;
  border-right-color: rgb(142, 70, 70);
  border-right-width: 1px;
  border-top-color: rgb(142, 70, 70);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 155, 122, 209;
  background-color: rgba(155, 122, 209, 0.1);
  border-bottom-color: rgb(155, 122, 209);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 122, 209);
  border-left-width: 1px;
  border-right-color: rgb(155, 122, 209);
  border-right-width: 1px;
  border-top-color: rgb(155, 122, 209);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 142, 70, 70;
  background-color: rgba(142, 70, 70, 0.1);
  border-bottom-color: rgb(142, 70, 70);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(142, 70, 70);
  border-left-width: 1px;
  border-right-color: rgb(142, 70, 70);
  border-right-width: 1px;
  border-top-color: rgb(142, 70, 70);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 123, 171, 212;
  background-color: rgba(123, 171, 212, 0.1);
  border-bottom-color: rgb(123, 171, 212);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(123, 171, 212);
  border-left-width: 1px;
  border-right-color: rgb(123, 171, 212);
  border-right-width: 1px;
  border-top-color: rgb(123, 171, 212);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 145, 168, 110;
  background-color: rgba(145, 168, 110, 0.1);
  border-bottom-color: rgb(145, 168, 110);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 168, 110);
  border-left-width: 1px;
  border-right-color: rgb(145, 168, 110);
  border-right-width: 1px;
  border-top-color: rgb(145, 168, 110);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 155, 122, 209;
  background-color: rgba(155, 122, 209, 0.1);
  border-bottom-color: rgb(155, 122, 209);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 122, 209);
  border-left-width: 1px;
  border-right-color: rgb(155, 122, 209);
  border-right-width: 1px;
  border-top-color: rgb(155, 122, 209);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 223, 191, 116;
  background-color: rgba(223, 191, 116, 0.1);
  border-bottom-color: rgb(223, 191, 116);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(223, 191, 116);
  border-left-width: 1px;
  border-right-color: rgb(223, 191, 116);
  border-right-width: 1px;
  border-top-color: rgb(223, 191, 116);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 145, 168, 110;
  background-color: rgba(145, 168, 110, 0.1);
  border-bottom-color: rgb(145, 168, 110);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 168, 110);
  border-left-width: 1px;
  border-right-color: rgb(145, 168, 110);
  border-right-width: 1px;
  border-top-color: rgb(145, 168, 110);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 155, 122, 209;
  background-color: rgba(155, 122, 209, 0.1);
  border-bottom-color: rgb(155, 122, 209);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 122, 209);
  border-left-width: 1px;
  border-right-color: rgb(155, 122, 209);
  border-right-width: 1px;
  border-top-color: rgb(155, 122, 209);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 123, 171, 212;
  background-color: rgba(123, 171, 212, 0.1);
  border-bottom-color: rgb(123, 171, 212);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(123, 171, 212);
  border-left-width: 1px;
  border-right-color: rgb(123, 171, 212);
  border-right-width: 1px;
  border-top-color: rgb(123, 171, 212);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 142, 70, 70;
  background-color: rgba(142, 70, 70, 0.1);
  border-bottom-color: rgb(142, 70, 70);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(142, 70, 70);
  border-left-width: 1px;
  border-right-color: rgb(142, 70, 70);
  border-right-width: 1px;
  border-top-color: rgb(142, 70, 70);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(157, 157, 157) none 0px;
  text-decoration: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(157, 157, 157);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(157, 157, 157);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(157, 157, 157);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 29, 29);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(157, 157, 157);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(157, 157, 157);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(119, 142, 85);
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(119, 142, 85);
  border-left-width: 2px;
  border-right-color: rgb(119, 142, 85);
  border-right-width: 2px;
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(37, 37, 37);
}

body h1 {
  color: rgb(119, 142, 85);
  font-family: "Noto Sans", sans-serif;
}

body h2 {
  color: rgb(224, 194, 82);
  font-family: "Noto Sans", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(157, 157, 157);
  font-family: "Noto Sans", sans-serif;
}

body h3 {
  color: rgb(132, 158, 95);
  font-family: "Noto Sans", sans-serif;
}

body h4 {
  color: rgb(228, 201, 103);
  font-family: "Noto Sans", sans-serif;
}

body h5 {
  color: rgb(145, 168, 110);
  font-family: "Noto Sans", sans-serif;
}

body h6 {
  color: rgb(232, 209, 125);
  font-family: "Noto Sans", sans-serif;
}

body hr {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
}`,
    scrollbars: `body .callout {
  --callout-color: 145, 168, 110;
  border-bottom-color: rgb(145, 168, 110);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 168, 110);
  border-left-width: 1px;
  border-right-color: rgb(145, 168, 110);
  border-right-width: 1px;
  border-top-color: rgb(145, 168, 110);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-left: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

body ::-webkit-scrollbar-corner {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

body ::-webkit-scrollbar-track {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  text-decoration: rgb(157, 157, 157);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  text-decoration: rgb(157, 157, 157);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  text-decoration: rgb(157, 157, 157);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 142, 85);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 142, 85);
}`,
    footer: `body footer {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-right-radius: 6px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 6px;
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body footer ul li a {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body li.section-li > .section .meta {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(157, 157, 157);
  text-decoration: rgb(157, 157, 157);
}

body ul.section-ul {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 142, 85);
}

body .darkmode svg {
  color: rgb(119, 142, 85);
  stroke: rgb(119, 142, 85);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
}

body .breadcrumb-element p {
  color: rgb(106, 106, 106);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

body .metadata {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(157, 157, 157);
  border-left-width: 1px;
  border-right-color: rgb(157, 157, 157);
  border-right-width: 1px;
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: rgb(112, 112, 112);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

body .metadata-properties {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body .navigation-progress {
  background-color: rgb(29, 29, 29);
}

body .page-header h2.page-title {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body abbr {
  color: rgb(157, 157, 157);
  text-decoration: underline dotted rgb(157, 157, 157);
}

body details {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body input[type=text] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body kbd {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

body sub {
  color: rgb(157, 157, 157);
}

body summary {
  color: rgb(157, 157, 157);
}

body sup {
  color: rgb(157, 157, 157);
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: 33%;
  --accent-h: 84;
  --accent-s: 31%;
  --background-modifier-active-hover: ((#4b5c31), 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #404040;
  --background-modifier-border-hover: #404040;
  --background-modifier-error: #802020;
  --background-modifier-error-hover: #802020;
  --background-modifier-error-rgb: rgb(128, 32, 32);
  --background-modifier-form-field: #ececec;
  --background-modifier-form-field-hover: #ececec;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-message: #a3a3a3;
  --background-modifier-success: #596d3a;
  --background-modifier-success-rgb: rgb(89, 109, 58);
  --background-primary: #ececec;
  --background-primary-alt: #d7d7d7;
  --background-secondary: #e1e1e1;
  --background-secondary-alt: #c4c4c4;
  --bases-cards-background: #ececec;
  --bases-cards-cover-background: #d7d7d7;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #404040;
  --bases-cards-shadow-hover: 0 0 0 1px #404040;
  --bases-embed-border-color: #404040;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #555555;
  --bases-table-border-color: #404040;
  --bases-table-cell-background-active: #ececec;
  --bases-table-cell-background-disabled: #d7d7d7;
  --bases-table-cell-background-selected: #cdd3c3;
  --bases-table-cell-shadow-active: 0 0 0 2px #404040;
  --bases-table-cell-shadow-focus: 0 0 0 2px #596d3a;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #d7d7d7;
  --bases-table-header-background: #ececec;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: #555555;
  --bases-table-row-background-hover: none;
  --bases-table-summary-background: #ececec;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --black: #202020;
  --blockquote-background-color: none;
  --blockquote-border-color: #596d3a;
  --blockquote-color: #555555;
  --blur-background: color-mix(in srgb, #ececec 65%, transparent) linear-gradient(#ececec, color-mix(in srgb, #ececec 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #596d3a;
  --bold-weight: 600;
  --button-radius: 6px;
  --callout-blend-mode: normal;
  --callout-border-opacity: 100%;
  --callout-border-width: 1px;
  --callout-bug: 211, 152, 12;
  --callout-content-background: normal;
  --callout-content-padding: 0p;
  --callout-default: 89, 109, 58;
  --callout-error: 128, 32, 32;
  --callout-example: 69, 44, 108;
  --callout-fail: 128, 32, 32;
  --callout-important: 89, 109, 58;
  --callout-info: 49, 103, 147;
  --callout-padding: 12px;
  --callout-question: 69, 44, 108;
  --callout-quote: 211, 152, 12;
  --callout-radius: 6px;
  --callout-success: 89, 109, 58;
  --callout-summary: 211, 152, 12;
  --callout-tip: 69, 44, 108;
  --callout-title-size: 18px;
  --callout-todo: 49, 103, 147;
  --callout-warning: 128, 32, 32;
  --canvas-background: #ececec;
  --canvas-card-label-color: #6a6a6a;
  --canvas-color-1: rgb(128, 32, 32);
  --canvas-color-2: rgb(207, 94, 14);
  --canvas-color-3: rgb(211, 152, 12);
  --canvas-color-4: rgb(89, 109, 58);
  --canvas-color-5: rgb(43, 139, 135);
  --canvas-color-6: rgb(69, 44, 108);
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #d7d7d7;
  --caret-color: #404040;
  --checkbox-border-color: #596d3a;
  --checkbox-border-color-hover: #596d3a;
  --checkbox-color: none;
  --checkbox-color-hover: #d7d7d7;
  --checkbox-marker-color: #596d3a;
  --checkbox-radius: 50%;
  --checklist-done-color: #6a6a6a;
  --clickable-icon-radius: 0px;
  --code-background: #e1e1e1;
  --code-border-color: #404040;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #6a6a6a;
  --code-function: #2b8b87;
  --code-important: #316793;
  --code-keyword: #452c6c;
  --code-normal: #555555;
  --code-operator: #452c6c;
  --code-property: #316793;
  --code-punctuation: #c62f46;
  --code-radius: 0px;
  --code-size: 0.8em;
  --code-string: #596d3a;
  --code-tag: #2b8b87;
  --code-value: #c62f46;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #6a6a6a;
  --collapse-icon-color-collapsed: #596d3a;
  --color-accent: rgb(174, 195, 141);
  --color-accent-1: rgb(186, 204, 158);
  --color-accent-2: rgb(200, 213, 174);
  --color-accent-hsl: #596d3a;
  --color-blue: #316793;
  --color-blue-rgb: rgb(49, 103, 147);
  --color-cyan: #2b8b87;
  --color-cyan-rgb: rgb(43, 139, 135);
  --color-green: #596d3a;
  --color-green-rgb: rgb(89, 109, 58);
  --color-orange: #cf5e0e;
  --color-orange-rgb: rgb(207, 94, 14);
  --color-pink: #c62f46;
  --color-pink-rgb: rgb(198, 47, 70);
  --color-purple: #452c6c;
  --color-purple-rgb: rgb(69, 44, 108);
  --color-red: #802020;
  --color-red-rgb: rgb(128, 32, 32);
  --color-yellow: #d3980c;
  --color-yellow-rgb: rgb(211, 152, 12);
  --dark: var(--text-normal);
  --dark-grey-1: #1d1d1d;
  --dark-grey-2: #1f1f1f;
  --dark-grey-3: #151515;
  --dark-white: #9d9d9d;
  --darkgray: var(--text-normal);
  --dialog-max-width: 85vh;
  --divider-color: #404040;
  --divider-color-hover: #596d3a;
  --divider-vertical-height: 100% - 40px;
  --divider-width-hover: 2px;
  --drag-ghost-background: #555555;
  --drag-ghost-text-color: #ececec;
  --dropdown-background: #e1e1e1;
  --dropdown-background-hover: #c4c4c4;
  --embed-block-shadow-hover: 0 0 0 1px #404040;
  --embed-border-bottom: 1px solid #404040;
  --embed-border-left: 1px solid #404040;
  --embed-border-right: 1px solid #404040;
  --embed-border-start: 2px solid #596d3a;
  --embed-border-top: 1px solid #404040;
  --embed-padding: 0 0 0 0;
  --file-header-background: #ececec;
  --file-header-background-focused: #ececec;
  --file-header-font: '??', '??', '??', 'Noto Sans', sans-serif;
  --file-margins: 32px;
  --flair-background: #e1e1e1;
  --flair-color: #404040;
  --font-default: 'Noto Sans', sans-serif;
  --font-interface: '??', '??', '??', 'Noto Sans', sans-serif;
  --font-mermaid: '??', 'Noto Sans', sans-serif, 'Noto Sans', sans-serif;
  --font-monospace: '??', '??', 'JetBrains Mono', monospace;
  --font-monospace-default: 'JetBrains Mono', monospace;
  --font-print: '??', '??', 'Noto Sans', sans-serif, 'Arial';
  --font-text: '??', 'Noto Sans', sans-serif, 'Noto Sans', sans-serif;
  --font-text-theme: 'Noto Sans', sans-serif;
  --footnote-divider-color: none;
  --footnote-divider-color-active: none;
  --footnote-id-color: #555555;
  --footnote-id-color-no-occurrences: #6a6a6a;
  --footnote-input-background: none;
  --footnote-input-background-active: #e1e1e1;
  --footnote-radius: 0px;
  --gold-01: #f4e8be;
  --gold-02: #f0e0a8;
  --gold-03: #ecd993;
  --gold-04: #e8d17d;
  --gold-05: #e4c967;
  --gold-06: #e0c252;
  --gold-07: #ddba3c;
  --graph-line: #c4c4c4;
  --graph-node: #596d3a;
  --graph-node-attachment: #6a6a6a;
  --graph-node-focused: #596d3a;
  --graph-node-tag: #707070;
  --graph-node-unresolved: #151515;
  --graph-text: #555555;
  --gray: var(--text-muted);
  --green-01: #829f55;
  --green-02: #748e4c;
  --green-03: #677e43;
  --green-04: #596d3a;
  --green-05: #4b5c31;
  --green-06: #3e4c28;
  --green-07: #303b1f;
  --green-08: #9db27e;
  --green-09: #91a86e;
  --green-10: #849e5f;
  --green-11: #778e55;
  --green-12: #6a7e4b;
  --green-13: #5c6e42;
  --green-14: #4f5e38;
  --h1-color: #596d3a;
  --h1-font: 'Noto Sans', sans-serif;
  --h1-size: 1.802em;
  --h1-weight: 650;
  --h2-color: #404040;
  --h2-font: 'Noto Sans', sans-serif;
  --h2-size: 1.602em;
  --h2-weight: 650;
  --h3-color: #4b5c31;
  --h3-font: 'Noto Sans', sans-serif;
  --h3-size: 1.424em;
  --h3-weight: 650;
  --h4-color: #333333;
  --h4-font: 'Noto Sans', sans-serif;
  --h4-size: 1.266em;
  --h4-weight: 650;
  --h5-color: #3e4c28;
  --h5-font: 'Noto Sans', sans-serif;
  --h5-size: 1.125em;
  --h5-weight: 650;
  --h6-color: #202020;
  --h6-font: 'Noto Sans', sans-serif;
  --h6-weight: 650;
  --headerFont: var(--font-text);
  --heading-formatting: #404040;
  --highlight: var(--text-highlight-bg);
  --hr-color: #c4c4c4;
  --hr-thickness: 1px;
  --icon-color: #596d3a;
  --icon-color-active: #303b1f;
  --icon-color-focused: #303b1f;
  --icon-color-hover: #303b1f;
  --icon-opacity: 100%;
  --icon-opacity-active: 100%;
  --icon-opacity-hover: 100%;
  --icon-size: 16px;
  --icon-stroke: 2px;
  --indentation-guide-color: #c4c4c4;
  --indentation-guide-color-active: #596d3a;
  --indentation-guide-editing-indent: 13.5px;
  --inline-title-color: #404040;
  --inline-title-font: 'Noto Sans', sans-serif;
  --inline-title-line-height: 1.3;
  --inline-title-size: 2.3em;
  --inline-title-weight: 650;
  --input-date-separator: #6a6a6a;
  --input-placeholder-color: #6a6a6a;
  --input-radius: 6px;
  --interactive-accent: #596d3a;
  --interactive-accent-hover: #4b5c31;
  --interactive-accent-hsl: #596d3a;
  --interactive-hover: #c4c4c4;
  --interactive-normal: #e1e1e1;
  --italic-color: #6a6a6a;
  --light: var(--background-primary);
  --light-black: #404040;
  --light-gold: #f8f1d8;
  --light-green: #cdd3c3;
  --light-grey: #ececec;
  --lightgray: var(--background-secondary);
  --link-color: #596d3a;
  --link-color-hover: #303b1f;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-decoration-thickness: none;
  --link-external-color: #6a6a6a;
  --link-external-color-hover: #404040;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #3e4c28;
  --link-unresolved-decoration-color: none;
  --link-unresolved-decoration-style: none;
  --link-unresolved-opacity: 100%;
  --list-bullet-size: 0.275em;
  --list-indent: 1.55em;
  --list-marker-align: left;
  --list-marker-color: #6a6a6a;
  --list-marker-color-collapsed: #6a6a6a;
  --list-marker-color-hover: #555555;
  --list-marker-min-width: 1.55em;
  --medium-dark-grey: #252525;
  --medium-grey-1: #707070;
  --medium-grey-2: #6a6a6a;
  --medium-grey-3: #555555;
  --medium-grey-4: #404040;
  --medium-grey-5: #333333;
  --medium-grey-6: #202020;
  --medium-light-grey-1: #e1e1e1;
  --medium-light-grey-2: #d7d7d7;
  --medium-light-grey-3: #c4c4c4;
  --menu-background: #e1e1e1;
  --menu-border-color: #404040;
  --menu-radius: 0px;
  --metadata-background: #e1e1e1;
  --metadata-border-color: #404040;
  --metadata-border-radius: 6px;
  --metadata-border-width: 1px;
  --metadata-divider-color: none;
  --metadata-divider-color-focus: none;
  --metadata-divider-color-hover: none;
  --metadata-divider-width: 0px;
  --metadata-gap: 0px;
  --metadata-input-background: none;
  --metadata-input-background-active: #e1e1e1;
  --metadata-input-background-hover: #e1e1e1;
  --metadata-input-font: '??', '??', '??', 'Noto Sans', sans-serif;
  --metadata-input-font-size: 12px;
  --metadata-input-text-color: #555555;
  --metadata-label-background-active: none;
  --metadata-label-background-hover: none;
  --metadata-label-font: '??', '??', '??', 'Noto Sans', sans-serif;
  --metadata-label-font-size: 16px;
  --metadata-label-font-weight: 500;
  --metadata-label-text-color: #555555;
  --metadata-label-text-color-hover: #404040;
  --metadata-max-width: 700px;
  --metadata-padding: 12px;
  --metadata-property-background: none;
  --metadata-property-background-active: none;
  --metadata-property-background-hover: none;
  --metadata-property-box-shadow-focus: 0 0 0 2px #404040;
  --metadata-property-box-shadow-hover: 0 0 0 1px #404040;
  --metadata-property-padding: 6px;
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 16px;
  --modal-background: #ececec;
  --modal-border-color: #404040;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #6a6a6a;
  --nav-collapse-icon-color-collapsed: #6a6a6a;
  --nav-heading-color: #404040;
  --nav-heading-color-collapsed: #6a6a6a;
  --nav-heading-color-collapsed-hover: #555555;
  --nav-heading-color-hover: #404040;
  --nav-indentation-guide-color: #e1e1e1;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-active: #e1e1e1;
  --nav-item-background-hover: #c4c4c4;
  --nav-item-background-selected: #e1e1e1;
  --nav-item-children-margin-left: 20px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #404040;
  --nav-item-color-active: #596d3a;
  --nav-item-color-highlighted: #596d3a;
  --nav-item-color-hover: #404040;
  --nav-item-color-selected: #596d3a;
  --nav-item-padding: 4px/**/8px/**/4px/**/24px;
  --nav-item-parent-padding: 4px/**/8px/**/4px/**/24px;
  --nav-item-radius: 0px;
  --nav-item-size: 12px;
  --nav-item-weight: 400;
  --nav-item-weight-active: 500;
  --nav-item-weight-hover: 500;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #6a6a6a;
  --nav-tag-color-active: #555555;
  --nav-tag-color-hover: #555555;
  --nav-tag-radius: 0px;
  --pdf-background: #ececec;
  --pdf-page-background: #ececec;
  --pdf-sidebar-background: #ececec;
  --pill-background: #596d3a;
  --pill-background-hover: #3e4c28;
  --pill-border-color: #596d3a;
  --pill-border-color-hover: #3e4c28;
  --pill-border-width: none;
  --pill-color: #ececec;
  --pill-color-hover: #ececec;
  --pill-color-remove: none;
  --pill-color-remove-hover: none;
  --pill-decoration: #9d9d9d;
  --pill-decoration-hover: #151515;
  --pill-padding-x: 0;
  --pill-padding-y: 0;
  --pill-radius: 6px;
  --pill-weight: 400;
  --popover-font-size: 13px;
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --popover-width: 300px;
  --prompt-background: #ececec;
  --prompt-border-color: #404040;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #ececec 65%, transparent) linear-gradient(#ececec, color-mix(in srgb, #ececec 65%, transparent));
  --ribbon-background: #ececec;
  --ribbon-background-collapsed: #ececec;
  --scrollbar-active-thumb-bg: #c4c4c4;
  --scrollbar-bg: #a3a3a3;
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: #e1e1e1;
  --search-clear-button-color: #404040;
  --search-icon-color: #596d3a;
  --search-result-background: #ececec;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #404040;
  --setting-items-background: #d7d7d7;
  --setting-items-border-color: #404040;
  --setting-items-radius: 0px;
  --slider-s-thumb-size: 13px;
  --slider-thumb-border-color: #404040;
  --slider-thumb-height: 16px;
  --slider-thumb-radius: 6px;
  --slider-thumb-width: 16px;
  --slider-track-background: #c4c4c4;
  --slider-track-height: 2px;
  --status-bar-background: #e1e1e1;
  --status-bar-border-color: #404040;
  --status-bar-radius: 6px 0px;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #404040;
  --suggestion-background: #ececec;
  --swatch-height: 16px;
  --swatch-radius: 6px;
  --swatch-shadow: none;
  --swatch-width: 16px;
  --sync-avatar-color-1: #802020;
  --sync-avatar-color-2: #cf5e0e;
  --sync-avatar-color-3: #d3980c;
  --sync-avatar-color-4: #596d3a;
  --sync-avatar-color-5: #2b8b87;
  --sync-avatar-color-6: #316793;
  --sync-avatar-color-7: #452c6c;
  --sync-avatar-color-8: #c62f46;
  --tab-background-active: #ececec;
  --tab-container-background: #e1e1e1;
  --tab-divider-color: #404040;
  --tab-font-size: 12px;
  --tab-font-weight: 400;
  --tab-outline-color: #404040;
  --tab-radius: 6px 6px 0px 0px;
  --tab-radius-active: 6px 6px 0px 0px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-shadow: -1px 0 1px 0 #404040;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #e1e1e1;
  --tab-switcher-menubar-background: linear-gradient(to top, #e1e1e1, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(174, 195, 141);
  --tab-text-color: #404040;
  --tab-text-color-active: #404040;
  --tab-text-color-focused: #404040;
  --tab-text-color-focused-active: #404040;
  --tab-text-color-focused-active-current: #404040;
  --tab-text-color-focused-highlighted: #404040;
  --table-add-button-border-color: #404040;
  --table-background: #ececec;
  --table-border-color: #404040;
  --table-column-alt-background: none;
  --table-drag-handle-background: none;
  --table-drag-handle-background-active: #404040;
  --table-drag-handle-color: #6a6a6a;
  --table-drag-handle-color-active: #ececec;
  --table-header-background: #d7d7d7;
  --table-header-background-hover: #c4c4c4;
  --table-header-border-color: #404040;
  --table-header-color: #596d3a;
  --table-header-font: 'Noto Sans', sans-serif;
  --table-header-weight: 650;
  --table-last-border-width: 1px;
  --table-row-alt-background: none;
  --table-row-alt-background-hover: #ececec;
  --table-row-background-hover: none;
  --table-selection: #cdd3c3;
  --table-selection-border-color: #404040;
  --table-selection-border-radius: none;
  --table-selection-border-width: 1px;
  --table-text-color: #404040;
  --table-text-size: 14px;
  --tag-background: #596d3a;
  --tag-background-hover: #303b1f;
  --tag-border-color: #596d3a;
  --tag-border-color-hover: #303b1f;
  --tag-border-width: 2px;
  --tag-color: #ececec;
  --tag-color-hover: #ececec;
  --tag-decoration: #ececec;
  --tag-decoration-hover: #ececec;
  --tag-padding-x: 2px;
  --tag-padding-y: 2px;
  --tag-radius: 6px;
  --tag-size: 12px;
  --tag-weight: 400;
  --tertiary: var(--text-accent-hover);
  --text-accent: #596d3a;
  --text-accent-hover: #303b1f;
  --text-error: #802020;
  --text-faint: #6a6a6a;
  --text-highlight-bg: #cdd3c3;
  --text-muted: #555555;
  --text-normal: #404040;
  --text-on-accent: #ececec;
  --text-on-accent-inverted: #404040;
  --text-selection: #d7d7d7;
  --text-success: #596d3a;
  --text-warning: #802020;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #ececec;
  --titlebar-background-focused: #ececec;
  --titlebar-border-color: none;
  --titlebar-text-color: #6a6a6a;
  --titlebar-text-color-focused: #404040;
  --titlebar-text-focused: #555555;
  --titlebar-text-weight: 600;
  --toggle-border-width: 1px;
  --toggle-radius: 6px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 24px;
  --toggle-thumb-color: #e1e1e1;
  --toggle-thumb-height: 16px;
  --toggle-thumb-radius: 6px;
  --toggle-thumb-width: 16px;
  --toggle-width: 32px;
  --vault-name-color: #151515;
  --vault-name-font-size: 12px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #404040;
  --vault-profile-color-hover: #404040;
  --white: #a3a3a3;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(225, 225, 225);
  color: rgb(64, 64, 64);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(236, 236, 236);
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(225, 225, 225);
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(225, 225, 225);
  border-left-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body div#quartz-root {
  background-color: rgb(236, 236, 236);
  color: rgb(64, 64, 64);
}`,
    typography: `body .page article p > b, b {
  color: rgb(89, 109, 58);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(89, 109, 58) none 0px;
  text-decoration: rgb(89, 109, 58);
  text-decoration-color: rgb(89, 109, 58);
}

body .page article p > em, em {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration: rgb(106, 106, 106);
  text-decoration-color: rgb(106, 106, 106);
}

body .page article p > i, i {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration: rgb(106, 106, 106);
  text-decoration-color: rgb(106, 106, 106);
}

body .page article p > strong, strong {
  color: rgb(89, 109, 58);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(89, 109, 58) none 0px;
  text-decoration: rgb(89, 109, 58);
  text-decoration-color: rgb(89, 109, 58);
}

body .text-highlight {
  background-color: rgb(205, 211, 195);
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body del {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: line-through rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body p {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `body a.external, footer a {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration: rgb(106, 106, 106);
  text-decoration-color: rgb(106, 106, 106);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 109, 58);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(89, 109, 58) none 0px;
  text-decoration: rgb(89, 109, 58);
  text-decoration-color: rgb(89, 109, 58);
}

body a.internal.broken {
  color: rgb(62, 76, 40);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(62, 76, 40) none 0px;
  text-decoration: rgb(62, 76, 40);
  text-decoration-color: rgb(62, 76, 40);
}`,
    lists: `body dd {
  color: rgb(64, 64, 64);
}

body dt {
  color: rgb(64, 64, 64);
}

body ol > li {
  color: rgb(64, 64, 64);
}

body ol.overflow {
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ul > li {
  color: rgb(64, 64, 64);
}

body ul.overflow {
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(106, 106, 106);
  text-decoration: rgb(106, 106, 106);
}

body blockquote {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body table {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  width: 201.359px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(236, 236, 236);
}

body td {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body th {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(89, 109, 58);
  font-weight: 650;
}

body tr {
  background-color: rgb(215, 215, 215);
}`,
    code: `body code {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 85, 85);
  font-family: "??", "??", "JetBrains Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(64, 64, 64);
}

body pre > code > [data-line] {
  border-left-color: rgb(43, 139, 135);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(43, 139, 135);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(43, 139, 135);
  border-left-color: rgb(43, 139, 135);
  border-right-color: rgb(43, 139, 135);
  border-top-color: rgb(43, 139, 135);
}

body pre > code, pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body figcaption {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body img {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `body .file-embed {
  background-color: rgb(215, 215, 215);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .transclude {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(106, 106, 106);
  text-decoration: line-through rgb(106, 106, 106);
  text-decoration-color: rgb(106, 106, 106);
}

body input[type=checkbox] {
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='-'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(89, 109, 58);
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
}

body .callout[data-callout="abstract"] {
  --callout-color: 211, 152, 12;
  background-color: rgba(211, 152, 12, 0.1);
  border-bottom-color: rgb(211, 152, 12);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 152, 12);
  border-left-width: 1px;
  border-right-color: rgb(211, 152, 12);
  border-right-width: 1px;
  border-top-color: rgb(211, 152, 12);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 211, 152, 12;
  background-color: rgba(211, 152, 12, 0.1);
  border-bottom-color: rgb(211, 152, 12);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 152, 12);
  border-left-width: 1px;
  border-right-color: rgb(211, 152, 12);
  border-right-width: 1px;
  border-top-color: rgb(211, 152, 12);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 128, 32, 32;
  background-color: rgba(128, 32, 32, 0.1);
  border-bottom-color: rgb(128, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(128, 32, 32);
  border-left-width: 1px;
  border-right-color: rgb(128, 32, 32);
  border-right-width: 1px;
  border-top-color: rgb(128, 32, 32);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 69, 44, 108;
  background-color: rgba(69, 44, 108, 0.1);
  border-bottom-color: rgb(69, 44, 108);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 44, 108);
  border-left-width: 1px;
  border-right-color: rgb(69, 44, 108);
  border-right-width: 1px;
  border-top-color: rgb(69, 44, 108);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 128, 32, 32;
  background-color: rgba(128, 32, 32, 0.1);
  border-bottom-color: rgb(128, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(128, 32, 32);
  border-left-width: 1px;
  border-right-color: rgb(128, 32, 32);
  border-right-width: 1px;
  border-top-color: rgb(128, 32, 32);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 49, 103, 147;
  background-color: rgba(49, 103, 147, 0.1);
  border-bottom-color: rgb(49, 103, 147);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 103, 147);
  border-left-width: 1px;
  border-right-color: rgb(49, 103, 147);
  border-right-width: 1px;
  border-top-color: rgb(49, 103, 147);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 89, 109, 58;
  background-color: rgba(89, 109, 58, 0.1);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 1px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 1px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 69, 44, 108;
  background-color: rgba(69, 44, 108, 0.1);
  border-bottom-color: rgb(69, 44, 108);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 44, 108);
  border-left-width: 1px;
  border-right-color: rgb(69, 44, 108);
  border-right-width: 1px;
  border-top-color: rgb(69, 44, 108);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 211, 152, 12;
  background-color: rgba(211, 152, 12, 0.1);
  border-bottom-color: rgb(211, 152, 12);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 152, 12);
  border-left-width: 1px;
  border-right-color: rgb(211, 152, 12);
  border-right-width: 1px;
  border-top-color: rgb(211, 152, 12);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 89, 109, 58;
  background-color: rgba(89, 109, 58, 0.1);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 1px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 1px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 69, 44, 108;
  background-color: rgba(69, 44, 108, 0.1);
  border-bottom-color: rgb(69, 44, 108);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 44, 108);
  border-left-width: 1px;
  border-right-color: rgb(69, 44, 108);
  border-right-width: 1px;
  border-top-color: rgb(69, 44, 108);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 49, 103, 147;
  background-color: rgba(49, 103, 147, 0.1);
  border-bottom-color: rgb(49, 103, 147);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 103, 147);
  border-left-width: 1px;
  border-right-color: rgb(49, 103, 147);
  border-right-width: 1px;
  border-top-color: rgb(49, 103, 147);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 128, 32, 32;
  background-color: rgba(128, 32, 32, 0.1);
  border-bottom-color: rgb(128, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(128, 32, 32);
  border-left-width: 1px;
  border-right-color: rgb(128, 32, 32);
  border-right-width: 1px;
  border-top-color: rgb(128, 32, 32);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(64, 64, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(64, 64, 64);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(89, 109, 58);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 2px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 2px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(236, 236, 236);
}

body h1 {
  color: rgb(89, 109, 58);
  font-family: "Noto Sans", sans-serif;
}

body h2 {
  color: rgb(64, 64, 64);
  font-family: "Noto Sans", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(64, 64, 64);
  font-family: "Noto Sans", sans-serif;
}

body h3 {
  color: rgb(75, 92, 49);
  font-family: "Noto Sans", sans-serif;
}

body h4 {
  color: rgb(51, 51, 51);
  font-family: "Noto Sans", sans-serif;
}

body h5 {
  color: rgb(62, 76, 40);
  font-family: "Noto Sans", sans-serif;
}

body h6 {
  color: rgb(32, 32, 32);
  font-family: "Noto Sans", sans-serif;
}

body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
}`,
    scrollbars: `body .callout {
  --callout-color: 89, 109, 58;
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 1px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 1px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-left: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

body ::-webkit-scrollbar-corner {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

body ::-webkit-scrollbar-track {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  text-decoration: rgb(64, 64, 64);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  text-decoration: rgb(64, 64, 64);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  text-decoration: rgb(64, 64, 64);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(89, 109, 58);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(89, 109, 58);
}`,
    footer: `body footer {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-right-radius: 6px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 6px;
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body footer ul li a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body li.section-li > .section .meta {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}

body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(89, 109, 58);
}

body .darkmode svg {
  color: rgb(89, 109, 58);
  stroke: rgb(89, 109, 58);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 85, 85);
}

body .breadcrumb-element p {
  color: rgb(106, 106, 106);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .metadata {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

body .navigation-progress {
  background-color: rgb(225, 225, 225);
}

body .page-header h2.page-title {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body abbr {
  color: rgb(64, 64, 64);
  text-decoration: underline dotted rgb(64, 64, 64);
}

body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body input[type=text] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

body kbd {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 85, 85);
  font-family: "??", "??", "JetBrains Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body sub {
  color: rgb(64, 64, 64);
}

body summary {
  color: rgb(64, 64, 64);
}

body sup {
  color: rgb(64, 64, 64);
}`,
  },
};
