import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "zen",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "number-font",
        style: "normal",
        weight: "100",
        file: "number-font.woff",
        format: "woff",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "zen",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --active-border-color: rgba(0, 157, 255, 0.8);
  --app-model-bg-color: rgba(28, 28, 28, 0.8);
  --background-modifier-border: var(--color-base-30, rgba(245, 245, 245, 0.15));
  --background-modifier-form-field: var(--color-base-25, rgba(245, 245, 245, 0.04));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(245, 245, 245, 0.04));
  --background-primary: var(--color-base-00, rgb(28, 28, 28));
  --background-secondary: var(--color-base-20, rgb(42, 42, 42));
  --background-secondary-alt: var(--color-base-30, rgba(18, 18, 18, 0.1));
  --background-setting: rgba(18, 18, 18);
  --background-setting-item: #242424;
  --base-d: 0%;
  --bases-cards-background: var(--background-primary, rgb(28, 28, 28));
  --bases-embed-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --bases-table-border-color: var(--table-border-color, rgba(245, 245, 245, 0.15));
  --bases-table-cell-background-active: var(--background-primary, rgb(28, 28, 28));
  --bases-table-header-background: var(--table-header-background, rgba(245, 245, 245, 0.1));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --bases-table-row-height: 40px;
  --bases-table-summary-background: var(--background-primary, rgb(28, 28, 28));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --block-border-color: rgba(245, 245, 245, 0.3);
  --blockquote-border-color: var(--interactive-accent, rgba(245, 245, 245, 0.2));
  --blockquote-border-thickness: 0.5px;
  --button-radius: var(--input-radius, 14px);
  --callout-content-padding: 4px;
  --canvas-background: var(--background-primary, rgb(28, 28, 28));
  --checkbox-marker-color: var(--background-primary, rgb(28, 28, 28));
  --code-background: var(--background-primary-alt, rgba(245, 245, 245, 0.15));
  --code-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --code-bracket-background: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --divider-color: var(--background-modifier-border, rgba(255, 255, 255, 0.01));
  --editor-bg-color: rgba(28, 28, 28, 0);
  --editor-brightness: 1;
  --editor-list-formatting-margin-right: -7.5px;
  --editor-list-guide-content-offset: 13px;
  --editor-list-guide-offset: 5px;
  --editor-list-ol-font-size: 20px;
  --editor-list-ol-margin-left: -10px;
  --editor-list-ol-padding-right: 8.4px;
  --editor-list-ol-width: 40px;
  --editor-list-ul-font-size: 14px;
  --editor-list-ul-margin-left: -10.5px;
  --editor-list-ul-margin-right: 8px;
  --editor-list-ul-translate-y: -3px;
  --editor-list-ul-width: 26px;
  --editor-task-label-margin-left: -9.5px;
  --editor-task-label-nested-margin-left: -12px;
  --file-header-background: var(--background-primary, rgb(28, 28, 28));
  --file-header-background-focused: var(--background-primary, rgb(28, 28, 28));
  --floating-toc-background-color: transparent;
  --footnote-divider-color: var(--metadata-divider-color, rgba(245, 245, 245, 0.15));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(245, 245, 245, 0.1));
  --glass-bg-color: rgba(28, 28, 28, 0.7);
  --h1-color: rgb(231, 77, 71);
  --h2-color: rgb(215, 148, 64);
  --h3-color: rgb(7, 170, 246);
  --h4-color: rgb(163, 110, 251);
  --h5-color: rgb(109, 215, 215);
  --h6-color: rgb(175, 191, 5);
  --highlight: var(--text-highlight-bg, var(--blockquote-border-color, rgba(245, 245, 245, 0.2)));
  --hr-color: var(--background-modifier-border, rgba(245, 245, 245, 0.2));
  --indentation-guide-color-active: var(--indentation-guide-color, rgba(245, 245, 245, 0.1));
  --inline-title-color: var(--h1-color, rgb(231, 77, 71));
  --input-radius: 14px;
  --italic-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --light: var(--background-primary, var(--color-base-00, rgb(28, 28, 28)));
  --lightgray: var(--background-secondary, var(--color-base-20, rgb(42, 42, 42)));
  --list-bullet-end-padding: 1.4rem;
  --list-marker-color: var(--text-faint, rgba(245, 245, 245, 0.25));
  --mac-window-opacity: 0;
  --menu-background: var(--background-secondary, rgb(42, 42, 42));
  --metadata-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --metadata-divider-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --modal-background: var(--background-primary, rgb(28, 28, 28));
  --model-bg-color: rgba(28, 28, 28, 0.1);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(245, 245, 245, 0.1));
  --nav-item-background-active: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  --nav-item-children-padding-start: var(--size-2-2, 1px);
  --nav-item-color-active: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --pdf-background: var(--background-primary, rgb(28, 28, 28));
  --pdf-page-background: var(--background-primary, rgb(28, 28, 28));
  --pdf-sidebar-background: var(--background-primary, rgb(28, 28, 28));
  --pill-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --prompt-background: var(--background-primary, rgb(28, 28, 28));
  --radius-xxl: 20px;
  --ribbon-background: var(--background-secondary, rgb(42, 42, 42));
  --ribbon-background-collapsed: var(--background-primary, rgb(28, 28, 28));
  --scrollbar-thumb-color: rgba(255, 255, 255, 0.2);
  --search-result-background: var(--background-primary, rgb(28, 28, 28));
  --setting-items-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --shadow-color: rgba(245, 245, 245, 0.08);
  --shiki-code-background: var(--code-background, rgba(245, 245, 245, 0.15));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --side-split-bg-color: rgba(28, 28, 28, 0.3);
  --slider-track-background: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --status-bar-background: var(--background-secondary, rgb(42, 42, 42));
  --status-bar-border-color: var(--divider-color, rgba(255, 255, 255, 0.01));
  --statusbar-bg-color: rgba(28, 28, 28, 0.7);
  --suggestion-background: var(--background-primary, rgb(28, 28, 28));
  --suggestion-bg-color: rgba(28, 28, 28, 0.1);
  --tab-background-active: var(--background-primary, rgb(28, 28, 28));
  --tab-container-background: var(--background-secondary, rgb(42, 42, 42));
  --tab-outline-color: var(--divider-color, rgba(255, 255, 255, 0.01));
  --tab-switcher-background: var(--background-secondary, rgb(42, 42, 42));
  --table-add-button-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --table-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --table-header-background: var(--table-background, rgba(245, 245, 245, 0.1));
  --table-header-border-color: var(--table-border-color, rgba(245, 245, 245, 0.15));
  --text-color: rgb(240, 240, 240);
  --text-highlight-bg: var(--blockquote-border-color, rgba(245, 245, 245, 0.2));
  --text-line-height: 36px;
  --text-paragraph-gap: 3.4px;
  --text-shadow-color: white;
  --textHighlight: var(--text-highlight-bg, var(--blockquote-border-color, rgba(245, 245, 245, 0.2)));
  --titlebar-background: var(--background-secondary, rgb(42, 42, 42));
  --titlebar-background-focused: var(--background-secondary-alt, rgba(18, 18, 18, 0.1));
  --titlebar-border-color: var(--background-modifier-border, rgba(245, 245, 245, 0.15));
  --tree-item-color: rgba(210, 210, 210, 0.8);
  --win-bg-image-url: url('');
  --win-blur: 20px;
  --win-editor-bg-color: #121212a6;
  --win-window-brightness: 0.9;
  --win-window-opacity: 0.2;
  --window-brightness: 0.96;
  --window-font-size: 15;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.01);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(255, 255, 255, 0.01);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(245, 245, 245, 0.15);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: rgba(245, 245, 245, 0.04);
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04);
  --background-modifier-hover: rgba(245, 245, 245, 0.1);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(28, 28, 28);
  --background-primary-alt: #242424;
  --background-secondary: rgb(42, 42, 42);
  --background-secondary-alt: rgba(18, 18, 18, 0.1);
  --blockquote-border-color: rgba(245, 245, 245, 0.2);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(28, 28, 28);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(28, 28, 28);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: rgba(245, 245, 245, 0.15);
  --code-border-color: rgba(245, 245, 245, 0.15);
  --code-bracket-background: rgba(245, 245, 245, 0.1);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(255, 255, 255, 0.01);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(245, 245, 245, 0.2);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(42, 42, 42);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(28, 28, 28);
  --pdf-page-background: rgb(28, 28, 28);
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pdf-sidebar-background: rgb(28, 28, 28);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: rgb(28, 28, 28);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: rgba(245, 245, 245, 0.15);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: rgba(245, 245, 245, 0.15);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(245, 245, 245, 0.15);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(28, 28, 28);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(28, 28, 28);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(255, 255, 255, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(42, 42, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: rgba(245, 245, 245, 0.15);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(245, 245, 245, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(245, 245, 245, 0.1);
  --table-header-border-color: rgba(245, 245, 245, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(245, 245, 245, 0.2);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(231, 77, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 77, 71);
  border-left-width: 0px;
  border-right-color: rgb(231, 77, 71);
  border-right-width: 0px;
  border-top-color: rgb(231, 77, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(231, 77, 71));
  content: "H1";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 10px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.312px);
  line-height: var(--h1-line-height, 12px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--text-accent, rgb(166, 138, 249));
  outline: rgb(166, 138, 249) none 0px;
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(166, 138, 249));
  outline: rgb(166, 138, 249) none 0px;
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(166, 138, 249));
  outline: rgb(166, 138, 249) none 0px;
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--text-accent, rgb(166, 138, 249));
  outline: rgb(166, 138, 249) none 0px;
  text-decoration-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(from var(--text-accent) r g b / 0.4);
}

html[saved-theme="dark"] body del {
  color: rgb(240, 240, 240);
  outline: rgb(240, 240, 240) none 0px;
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body h2 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(245, 245, 245, 0.15);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: rgba(245, 245, 245, 0.04);
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04);
  --background-modifier-hover: rgba(245, 245, 245, 0.1);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(28, 28, 28);
  --background-primary-alt: #242424;
  --background-secondary: rgb(42, 42, 42);
  --background-secondary-alt: rgba(18, 18, 18, 0.1);
  --blockquote-border-color: rgba(245, 245, 245, 0.2);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(28, 28, 28);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(28, 28, 28);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: rgba(245, 245, 245, 0.15);
  --code-border-color: rgba(245, 245, 245, 0.15);
  --code-bracket-background: rgba(245, 245, 245, 0.1);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(255, 255, 255, 0.01);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 680);
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(245, 245, 245, 0.2);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(42, 42, 42);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(28, 28, 28);
  --pdf-page-background: rgb(28, 28, 28);
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pdf-sidebar-background: rgb(28, 28, 28);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: rgb(28, 28, 28);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: rgba(245, 245, 245, 0.15);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: rgba(245, 245, 245, 0.15);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(245, 245, 245, 0.15);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(28, 28, 28);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(28, 28, 28);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(255, 255, 255, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(42, 42, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: rgba(245, 245, 245, 0.15);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(245, 245, 245, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(245, 245, 245, 0.1);
  --table-header-border-color: rgba(245, 245, 245, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(245, 245, 245, 0.2);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(215, 148, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(215, 148, 64);
  border-left-width: 0px;
  border-right-color: rgb(215, 148, 64);
  border-right-width: 0px;
  border-top-color: rgb(215, 148, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(215, 148, 64));
  content: "H2";
  font-family: var(--h2-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 10px);
  font-weight: var(--font-weight, 680);
  letter-spacing: var(--h2-letter-spacing, -0.22px);
  line-height: var(--h2-line-height, 12px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(245, 245, 245, 0.15);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: rgba(245, 245, 245, 0.04);
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04);
  --background-modifier-hover: rgba(245, 245, 245, 0.1);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(28, 28, 28);
  --background-primary-alt: #242424;
  --background-secondary: rgb(42, 42, 42);
  --background-secondary-alt: rgba(18, 18, 18, 0.1);
  --blockquote-border-color: rgba(245, 245, 245, 0.2);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(28, 28, 28);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(28, 28, 28);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: rgba(245, 245, 245, 0.15);
  --code-border-color: rgba(245, 245, 245, 0.15);
  --code-bracket-background: rgba(245, 245, 245, 0.1);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(255, 255, 255, 0.01);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 660);
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(245, 245, 245, 0.2);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(42, 42, 42);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(28, 28, 28);
  --pdf-page-background: rgb(28, 28, 28);
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pdf-sidebar-background: rgb(28, 28, 28);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: rgb(28, 28, 28);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: rgba(245, 245, 245, 0.15);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: rgba(245, 245, 245, 0.15);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(245, 245, 245, 0.15);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(28, 28, 28);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(28, 28, 28);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(255, 255, 255, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(42, 42, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: rgba(245, 245, 245, 0.15);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(245, 245, 245, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(245, 245, 245, 0.1);
  --table-header-border-color: rgba(245, 245, 245, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(245, 245, 245, 0.2);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(7, 170, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(7, 170, 246);
  border-left-width: 0px;
  border-right-color: rgb(7, 170, 246);
  border-right-width: 0px;
  border-top-color: rgb(7, 170, 246);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(7, 170, 246));
  content: "H3";
  font-family: var(--h3-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 10px);
  font-weight: var(--font-weight, 660);
  letter-spacing: var(--h3-letter-spacing, -0.1536px);
  line-height: var(--h3-line-height, 13px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(245, 245, 245, 0.15);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: rgba(245, 245, 245, 0.04);
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04);
  --background-modifier-hover: rgba(245, 245, 245, 0.1);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(28, 28, 28);
  --background-primary-alt: #242424;
  --background-secondary: rgb(42, 42, 42);
  --background-secondary-alt: rgba(18, 18, 18, 0.1);
  --blockquote-border-color: rgba(245, 245, 245, 0.2);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(28, 28, 28);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(28, 28, 28);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: rgba(245, 245, 245, 0.15);
  --code-border-color: rgba(245, 245, 245, 0.15);
  --code-bracket-background: rgba(245, 245, 245, 0.1);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(255, 255, 255, 0.01);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 640);
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(245, 245, 245, 0.2);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(42, 42, 42);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(28, 28, 28);
  --pdf-page-background: rgb(28, 28, 28);
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pdf-sidebar-background: rgb(28, 28, 28);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: rgb(28, 28, 28);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: rgba(245, 245, 245, 0.15);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: rgba(245, 245, 245, 0.15);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(245, 245, 245, 0.15);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(28, 28, 28);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(28, 28, 28);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(255, 255, 255, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(42, 42, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: rgba(245, 245, 245, 0.15);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(245, 245, 245, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(245, 245, 245, 0.1);
  --table-header-border-color: rgba(245, 245, 245, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(245, 245, 245, 0.2);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(163, 110, 251);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(163, 110, 251);
  border-left-width: 0px;
  border-right-color: rgb(163, 110, 251);
  border-right-width: 0px;
  border-top-color: rgb(163, 110, 251);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(163, 110, 251));
  content: "H4";
  font-family: var(--h4-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 10px);
  font-weight: var(--font-weight, 640);
  letter-spacing: var(--h4-letter-spacing, -0.092px);
  line-height: var(--h4-line-height, 14px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h5 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(245, 245, 245, 0.15);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: rgba(245, 245, 245, 0.04);
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04);
  --background-modifier-hover: rgba(245, 245, 245, 0.1);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(28, 28, 28);
  --background-primary-alt: #242424;
  --background-secondary: rgb(42, 42, 42);
  --background-secondary-alt: rgba(18, 18, 18, 0.1);
  --blockquote-border-color: rgba(245, 245, 245, 0.2);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(28, 28, 28);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(28, 28, 28);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: rgba(245, 245, 245, 0.15);
  --code-border-color: rgba(245, 245, 245, 0.15);
  --code-bracket-background: rgba(245, 245, 245, 0.1);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(255, 255, 255, 0.01);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 620);
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(245, 245, 245, 0.2);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(42, 42, 42);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(28, 28, 28);
  --pdf-page-background: rgb(28, 28, 28);
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pdf-sidebar-background: rgb(28, 28, 28);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: rgb(28, 28, 28);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: rgba(245, 245, 245, 0.15);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: rgba(245, 245, 245, 0.15);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(245, 245, 245, 0.15);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(28, 28, 28);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(28, 28, 28);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(255, 255, 255, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(42, 42, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: rgba(245, 245, 245, 0.15);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(245, 245, 245, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(245, 245, 245, 0.1);
  --table-header-border-color: rgba(245, 245, 245, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(245, 245, 245, 0.2);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(109, 215, 215);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(109, 215, 215);
  border-left-width: 0px;
  border-right-color: rgb(109, 215, 215);
  border-right-width: 0px;
  border-top-color: rgb(109, 215, 215);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(109, 215, 215));
  content: "H5";
  font-family: var(--h5-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 10px);
  font-weight: var(--font-weight, 620);
  letter-spacing: var(--h5-letter-spacing, -0.0352px);
  line-height: var(--h5-line-height, 15px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h6 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(245, 245, 245, 0.15);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: rgba(245, 245, 245, 0.04);
  --background-modifier-form-field-hover: rgba(245, 245, 245, 0.04);
  --background-modifier-hover: rgba(245, 245, 245, 0.1);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(28, 28, 28);
  --background-primary-alt: #242424;
  --background-secondary: rgb(42, 42, 42);
  --background-secondary-alt: rgba(18, 18, 18, 0.1);
  --blockquote-border-color: rgba(245, 245, 245, 0.2);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(28, 28, 28);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(28, 28, 28);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: rgba(245, 245, 245, 0.15);
  --code-border-color: rgba(245, 245, 245, 0.15);
  --code-bracket-background: rgba(245, 245, 245, 0.1);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(255, 255, 255, 0.01);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 600);
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666666;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(245, 245, 245, 0.2);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --italic-color: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(42, 42, 42);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(28, 28, 28);
  --pdf-page-background: rgb(28, 28, 28);
  --pdf-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --pdf-sidebar-background: rgb(28, 28, 28);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(245, 245, 245, 0.15);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: rgb(28, 28, 28);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: rgba(245, 245, 245, 0.15);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: rgba(245, 245, 245, 0.15);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(245, 245, 245, 0.15);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(28, 28, 28);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(28, 28, 28);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(255, 255, 255, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(42, 42, 42);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(42, 42, 42), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: rgba(245, 245, 245, 0.15);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(245, 245, 245, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(245, 245, 245, 0.1);
  --table-header-border-color: rgba(245, 245, 245, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(245, 245, 245, 0.2);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(175, 191, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(175, 191, 5);
  border-left-width: 0px;
  border-right-color: rgb(175, 191, 5);
  border-right-width: 0px;
  border-top-color: rgb(175, 191, 5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(175, 191, 5));
  content: "H6";
  font-family: var(--h6-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 10px);
  font-weight: var(--font-weight, 600);
  line-height: var(--h6-line-height, 15px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body dt {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body table {
  color: rgb(240, 240, 240);
  width: 1794px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
  color: var(--table-text-color, rgb(240, 240, 240));
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgba(245, 245, 245, 0.1));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(245, 245, 245, 0.15));
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(245, 245, 245, 0.15));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(231, 77, 71);
  border-left-color: rgb(231, 77, 71);
  border-right-color: rgb(231, 77, 71);
  border-top-color: rgb(231, 77, 71);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  margin-left: 3px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgba(245, 245, 245, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  margin-left: 3px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(240, 240, 240);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(28, 28, 28));
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.2) 1px 1px 6px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(240, 240, 240);
  outline: rgb(240, 240, 240) none 0px;
  text-decoration-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(245, 245, 245, 0.1));
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.6px;
  border-bottom-right-radius: 27.6px;
  border-top-left-radius: 27.6px;
  border-top-right-radius: 27.6px;
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(231, 77, 71));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-color, rgb(240, 240, 240));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(215, 148, 64));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--text-color, rgb(240, 240, 240));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(7, 170, 246));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(163, 110, 251));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(109, 215, 215));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(175, 191, 5));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.01);
  border-left-color: rgba(255, 255, 255, 0.01);
  border-right-color: rgba(255, 255, 255, 0.01);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  padding-left: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(245, 245, 245, 0.1);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--tree-item-color, rgba(210, 210, 210, 0.8));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--tree-item-color, rgba(210, 210, 210, 0.8));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(240, 240, 240);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(28, 28, 28, 0.7));
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-color, rgb(240, 240, 240));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(240, 240, 240);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--tree-item-color, rgba(210, 210, 210, 0.8));
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: var(--tree-item-color, rgba(210, 210, 210, 0.8));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-color, rgb(240, 240, 240));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--model-bg-color, rgba(28, 28, 28, 0.1));
  border-color: rgb(240, 240, 240);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(245, 245, 245, 0.15) rgba(245, 245, 245, 0.15) rgb(218, 218, 218);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(245, 245, 245, 0.15);
  border-left-color: rgba(245, 245, 245, 0.15);
  border-right-color: rgba(245, 245, 245, 0.15);
  border-top-color: rgba(245, 245, 245, 0.15);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(245, 245, 245, 0.15);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 27.6px;
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(28, 28, 28));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(28, 28, 28, 0.7));
}

html[saved-theme="dark"] body abbr {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(245, 245, 245, 0.15));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body sub {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body summary {
  color: rgb(240, 240, 240);
}

html[saved-theme="dark"] body sup {
  color: rgb(240, 240, 240);
}`,
  },
  light: {
    base: `:root:root {
  --active-border-color: rgb(0, 121, 172);
  --app-model-bg-color: rgba(248, 248, 248, 0.8);
  --background-modifier-border: var(--color-base-30, rgba(28, 28, 28, 0.09));
  --background-modifier-form-field: var(--color-base-00, rgba(230, 230, 230, 0.5));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(230, 230, 230, 0.5));
  --background-primary: var(--color-base-00, rgb(248, 248, 248));
  --background-secondary: var(--color-base-20, rgb(249, 249, 249));
  --background-secondary-alt: var(--color-base-05, rgba(240, 240, 240, 0.1));
  --background-setting: rgba(255, 255, 255);
  --background-setting-item: rgba(255, 255, 255, 0.6);
  --base-d: 0%;
  --bases-cards-background: var(--background-primary, rgb(248, 248, 248));
  --bases-embed-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --bases-table-border-color: var(--table-border-color, rgba(28, 28, 28, 0.09));
  --bases-table-cell-background-active: var(--background-primary, rgb(248, 248, 248));
  --bases-table-header-background: var(--table-header-background, rgba(28, 28, 28, 0.1));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  --bases-table-row-height: 40px;
  --bases-table-summary-background: var(--background-primary, rgb(248, 248, 248));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  --block-border-color: rgba(28, 28, 28, 0.25);
  --blockquote-border-color: var(--interactive-accent, rgba(28, 28, 28, 0.2));
  --blockquote-border-thickness: 0.5px;
  --button-radius: var(--input-radius, 14px);
  --callout-content-padding: 4px;
  --canvas-background: var(--background-primary, rgb(248, 248, 248));
  --checkbox-marker-color: var(--background-primary, rgb(248, 248, 248));
  --code-background: var(--background-primary-alt, rgba(28, 28, 28, 0.1));
  --code-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --code-bracket-background: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  --divider-color: var(--background-modifier-border, rgba(0, 0, 0, 0.01));
  --editor-bg-color: rgba(255, 255, 255, 0);
  --editor-brightness: 1;
  --editor-list-formatting-margin-right: -7.5px;
  --editor-list-guide-content-offset: 13px;
  --editor-list-guide-offset: 5px;
  --editor-list-ol-font-size: 20px;
  --editor-list-ol-margin-left: -10px;
  --editor-list-ol-padding-right: 8.4px;
  --editor-list-ol-width: 40px;
  --editor-list-ul-font-size: 14px;
  --editor-list-ul-margin-left: -10.5px;
  --editor-list-ul-margin-right: 8px;
  --editor-list-ul-translate-y: -3px;
  --editor-list-ul-width: 26px;
  --editor-task-label-margin-left: -9.5px;
  --editor-task-label-nested-margin-left: -12px;
  --file-header-background: var(--background-primary, rgb(248, 248, 248));
  --file-header-background-focused: var(--background-primary, rgb(248, 248, 248));
  --floating-toc-background-color: transparent;
  --footnote-divider-color: var(--metadata-divider-color, rgba(28, 28, 28, 0.09));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(28, 28, 28, 0.1));
  --glass-bg-color: rgba(248, 248, 248, 0.6);
  --h1-color: rgb(231, 77, 71);
  --h2-color: rgb(215, 148, 64);
  --h3-color: rgb(7, 170, 246);
  --h4-color: rgb(163, 110, 251);
  --h5-color: rgb(109, 215, 215);
  --h6-color: rgb(175, 191, 5);
  --highlight: var(--text-highlight-bg, var(--blockquote-border-color, rgba(28, 28, 28, 0.2)));
  --hr-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --indentation-guide-color-active: var(--indentation-guide-color, rgba(28, 28, 28, 0.05));
  --inline-title-color: var(--h1-color, rgb(231, 77, 71));
  --input-radius: 14px;
  --italic-color: var(--text-accent, hsl(258, 88%, 66%));
  --light: var(--background-primary, var(--color-base-00, rgb(248, 248, 248)));
  --lightgray: var(--background-secondary, var(--color-base-20, rgb(249, 249, 249)));
  --list-bullet-end-padding: 1.4rem;
  --mac-window-opacity: 0;
  --menu-background: var(--background-secondary, rgb(249, 249, 249));
  --metadata-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --metadata-divider-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  --modal-background: var(--background-primary, rgb(248, 248, 248));
  --model-bg-color: rgba(248, 248, 248, 0.1);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(28, 28, 28, 0.05));
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  --nav-item-children-padding-start: var(--size-2-2, 1px);
  --nav-item-color-active: var(--text-accent, hsl(258, 88%, 66%));
  --pdf-background: var(--background-primary, rgb(248, 248, 248));
  --pdf-page-background: var(--background-primary, rgb(248, 248, 248));
  --pdf-sidebar-background: var(--background-primary, rgb(248, 248, 248));
  --pill-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --prompt-background: var(--background-primary, rgb(248, 248, 248));
  --radius-xxl: 20px;
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(249, 249, 249));
  --ribbon-background-collapsed: var(--background-primary, rgb(248, 248, 248));
  --scrollbar-thumb-color: rgba(0, 0, 0, 0.2);
  --search-result-background: var(--background-primary, rgb(248, 248, 248));
  --setting-items-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --shadow-color: rgba(0, 0, 0, 0.06);
  --shiki-code-background: var(--code-background, rgba(28, 28, 28, 0.1));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --side-split-bg-color: rgba(248, 248, 248, 0.3);
  --slider-track-background: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --status-bar-background: var(--background-secondary, rgb(249, 249, 249));
  --status-bar-border-color: var(--divider-color, rgba(0, 0, 0, 0.01));
  --statusbar-bg-color: rgba(248, 248, 248, 0.7);
  --suggestion-background: var(--background-primary, rgb(248, 248, 248));
  --suggestion-bg-color: rgba(248, 248, 248, 0.1);
  --tab-background-active: var(--background-primary, rgb(248, 248, 248));
  --tab-container-background: var(--background-secondary, rgb(249, 249, 249));
  --tab-outline-color: var(--divider-color, rgba(0, 0, 0, 0.01));
  --tab-switcher-background: var(--background-secondary, rgb(249, 249, 249));
  --table-add-button-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --table-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --table-header-background: var(--table-background, rgba(28, 28, 28, 0.1));
  --table-header-border-color: var(--table-border-color, rgba(28, 28, 28, 0.09));
  --text-color: rgb(8, 8, 8);
  --text-highlight-bg: var(--blockquote-border-color, rgba(28, 28, 28, 0.2));
  --text-line-height: 36px;
  --text-paragraph-gap: 3.4px;
  --text-shadow-color: black;
  --textHighlight: var(--text-highlight-bg, var(--blockquote-border-color, rgba(28, 28, 28, 0.2)));
  --titlebar-background: var(--background-secondary, rgb(248, 248, 248));
  --titlebar-background-focused: var(--background-secondary-alt, rgba(240, 240, 240, 0.1));
  --titlebar-border-color: var(--background-modifier-border, rgba(28, 28, 28, 0.09));
  --tree-item-color: rgb(20, 20, 20, 0.8);
  --win-bg-image-url: url('');
  --win-blur: 15px;
  --win-editor-bg-color: #f0f0f0a6;
  --win-window-brightness: 0.9;
  --win-window-opacity: 0.15;
  --window-brightness: 0.96;
  --window-font-size: 15;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.01);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0.01);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(28, 28, 28, 0.09);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: rgba(230, 230, 230, 0.5);
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5);
  --background-modifier-hover: rgba(28, 28, 28, 0.1);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(248, 248, 248);
  --background-primary-alt: #fafafa;
  --background-secondary: rgb(249, 249, 249);
  --background-secondary-alt: rgba(240, 240, 240, 0.1);
  --blockquote-border-color: rgba(28, 28, 28, 0.2);
  --blur-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(248, 248, 248);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(248, 248, 248);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: rgba(28, 28, 28, 0.1);
  --code-border-color: rgba(28, 28, 28, 0.09);
  --code-bracket-background: rgba(28, 28, 28, 0.1);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(0, 0, 0, 0.01);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(28, 28, 28, 0.09);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(258, 88%, 66%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(249, 249, 249);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(248, 248, 248);
  --pdf-page-background: rgb(248, 248, 248);
  --pdf-sidebar-background: rgb(248, 248, 248);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: rgb(248, 248, 248);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: rgba(28, 28, 28, 0.09);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: rgba(28, 28, 28, 0.1);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgba(28, 28, 28, 0.09);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(248, 248, 248);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(248, 248, 248);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(0, 0, 0, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(249, 249, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: rgba(28, 28, 28, 0.09);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(28, 28, 28, 0.09);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(28, 28, 28, 0.1);
  --table-header-border-color: rgba(28, 28, 28, 0.09);
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(28, 28, 28, 0.2);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(231, 77, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 77, 71);
  border-left-width: 0px;
  border-right-color: rgb(231, 77, 71);
  border-right-width: 0px;
  border-top-color: rgb(231, 77, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(231, 77, 71));
  content: "H1";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 10px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.312px);
  line-height: var(--h1-line-height, 12px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--text-accent, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--text-accent, rgb(138, 92, 245));
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(from var(--text-accent) r g b / 0.4);
}

html[saved-theme="light"] body del {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body h2 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(28, 28, 28, 0.09);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: rgba(230, 230, 230, 0.5);
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5);
  --background-modifier-hover: rgba(28, 28, 28, 0.1);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(248, 248, 248);
  --background-primary-alt: #fafafa;
  --background-secondary: rgb(249, 249, 249);
  --background-secondary-alt: rgba(240, 240, 240, 0.1);
  --blockquote-border-color: rgba(28, 28, 28, 0.2);
  --blur-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(248, 248, 248);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(248, 248, 248);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: rgba(28, 28, 28, 0.1);
  --code-border-color: rgba(28, 28, 28, 0.09);
  --code-bracket-background: rgba(28, 28, 28, 0.1);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(0, 0, 0, 0.01);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h2-weight, 680);
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(28, 28, 28, 0.09);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(258, 88%, 66%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(249, 249, 249);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(248, 248, 248);
  --pdf-page-background: rgb(248, 248, 248);
  --pdf-sidebar-background: rgb(248, 248, 248);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: rgb(248, 248, 248);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: rgba(28, 28, 28, 0.09);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: rgba(28, 28, 28, 0.1);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgba(28, 28, 28, 0.09);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(248, 248, 248);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(248, 248, 248);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(0, 0, 0, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(249, 249, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: rgba(28, 28, 28, 0.09);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(28, 28, 28, 0.09);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(28, 28, 28, 0.1);
  --table-header-border-color: rgba(28, 28, 28, 0.09);
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(28, 28, 28, 0.2);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(215, 148, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(215, 148, 64);
  border-left-width: 0px;
  border-right-color: rgb(215, 148, 64);
  border-right-width: 0px;
  border-top-color: rgb(215, 148, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(215, 148, 64));
  content: "H2";
  font-family: var(--h2-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 10px);
  font-weight: var(--font-weight, 680);
  letter-spacing: var(--h2-letter-spacing, -0.22px);
  line-height: var(--h2-line-height, 12px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(28, 28, 28, 0.09);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: rgba(230, 230, 230, 0.5);
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5);
  --background-modifier-hover: rgba(28, 28, 28, 0.1);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(248, 248, 248);
  --background-primary-alt: #fafafa;
  --background-secondary: rgb(249, 249, 249);
  --background-secondary-alt: rgba(240, 240, 240, 0.1);
  --blockquote-border-color: rgba(28, 28, 28, 0.2);
  --blur-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(248, 248, 248);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(248, 248, 248);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: rgba(28, 28, 28, 0.1);
  --code-border-color: rgba(28, 28, 28, 0.09);
  --code-bracket-background: rgba(28, 28, 28, 0.1);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(0, 0, 0, 0.01);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h3-weight, 660);
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(28, 28, 28, 0.09);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(258, 88%, 66%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(249, 249, 249);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(248, 248, 248);
  --pdf-page-background: rgb(248, 248, 248);
  --pdf-sidebar-background: rgb(248, 248, 248);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: rgb(248, 248, 248);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: rgba(28, 28, 28, 0.09);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: rgba(28, 28, 28, 0.1);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgba(28, 28, 28, 0.09);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(248, 248, 248);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(248, 248, 248);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(0, 0, 0, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(249, 249, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: rgba(28, 28, 28, 0.09);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(28, 28, 28, 0.09);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(28, 28, 28, 0.1);
  --table-header-border-color: rgba(28, 28, 28, 0.09);
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(28, 28, 28, 0.2);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(7, 170, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(7, 170, 246);
  border-left-width: 0px;
  border-right-color: rgb(7, 170, 246);
  border-right-width: 0px;
  border-top-color: rgb(7, 170, 246);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(7, 170, 246));
  content: "H3";
  font-family: var(--h3-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 10px);
  font-weight: var(--font-weight, 660);
  letter-spacing: var(--h3-letter-spacing, -0.1536px);
  line-height: var(--h3-line-height, 13px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(28, 28, 28, 0.09);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: rgba(230, 230, 230, 0.5);
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5);
  --background-modifier-hover: rgba(28, 28, 28, 0.1);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(248, 248, 248);
  --background-primary-alt: #fafafa;
  --background-secondary: rgb(249, 249, 249);
  --background-secondary-alt: rgba(240, 240, 240, 0.1);
  --blockquote-border-color: rgba(28, 28, 28, 0.2);
  --blur-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(248, 248, 248);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(248, 248, 248);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: rgba(28, 28, 28, 0.1);
  --code-border-color: rgba(28, 28, 28, 0.09);
  --code-bracket-background: rgba(28, 28, 28, 0.1);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(0, 0, 0, 0.01);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h4-weight, 640);
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(28, 28, 28, 0.09);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(258, 88%, 66%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(249, 249, 249);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(248, 248, 248);
  --pdf-page-background: rgb(248, 248, 248);
  --pdf-sidebar-background: rgb(248, 248, 248);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: rgb(248, 248, 248);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: rgba(28, 28, 28, 0.09);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: rgba(28, 28, 28, 0.1);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgba(28, 28, 28, 0.09);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(248, 248, 248);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(248, 248, 248);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(0, 0, 0, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(249, 249, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: rgba(28, 28, 28, 0.09);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(28, 28, 28, 0.09);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(28, 28, 28, 0.1);
  --table-header-border-color: rgba(28, 28, 28, 0.09);
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(28, 28, 28, 0.2);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(163, 110, 251);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(163, 110, 251);
  border-left-width: 0px;
  border-right-color: rgb(163, 110, 251);
  border-right-width: 0px;
  border-top-color: rgb(163, 110, 251);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(163, 110, 251));
  content: "H4";
  font-family: var(--h4-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 10px);
  font-weight: var(--font-weight, 640);
  letter-spacing: var(--h4-letter-spacing, -0.092px);
  line-height: var(--h4-line-height, 14px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h5 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(28, 28, 28, 0.09);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: rgba(230, 230, 230, 0.5);
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5);
  --background-modifier-hover: rgba(28, 28, 28, 0.1);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(248, 248, 248);
  --background-primary-alt: #fafafa;
  --background-secondary: rgb(249, 249, 249);
  --background-secondary-alt: rgba(240, 240, 240, 0.1);
  --blockquote-border-color: rgba(28, 28, 28, 0.2);
  --blur-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(248, 248, 248);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(248, 248, 248);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: rgba(28, 28, 28, 0.1);
  --code-border-color: rgba(28, 28, 28, 0.09);
  --code-bracket-background: rgba(28, 28, 28, 0.1);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(0, 0, 0, 0.01);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h5-weight, 620);
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(28, 28, 28, 0.09);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(258, 88%, 66%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(249, 249, 249);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(248, 248, 248);
  --pdf-page-background: rgb(248, 248, 248);
  --pdf-sidebar-background: rgb(248, 248, 248);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: rgb(248, 248, 248);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: rgba(28, 28, 28, 0.09);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: rgba(28, 28, 28, 0.1);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgba(28, 28, 28, 0.09);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(248, 248, 248);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(248, 248, 248);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(0, 0, 0, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(249, 249, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: rgba(28, 28, 28, 0.09);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(28, 28, 28, 0.09);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(28, 28, 28, 0.1);
  --table-header-border-color: rgba(28, 28, 28, 0.09);
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(28, 28, 28, 0.2);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(109, 215, 215);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(109, 215, 215);
  border-left-width: 0px;
  border-right-color: rgb(109, 215, 215);
  border-right-width: 0px;
  border-top-color: rgb(109, 215, 215);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(109, 215, 215));
  content: "H5";
  font-family: var(--h5-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 10px);
  font-weight: var(--font-weight, 620);
  letter-spacing: var(--h5-letter-spacing, -0.0352px);
  line-height: var(--h5-line-height, 15px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h6 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(28, 28, 28, 0.09);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: rgba(230, 230, 230, 0.5);
  --background-modifier-form-field-hover: rgba(230, 230, 230, 0.5);
  --background-modifier-hover: rgba(28, 28, 28, 0.1);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(248, 248, 248);
  --background-primary-alt: #fafafa;
  --background-secondary: rgb(249, 249, 249);
  --background-secondary-alt: rgba(240, 240, 240, 0.1);
  --blockquote-border-color: rgba(28, 28, 28, 0.2);
  --blur-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 14px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(248, 248, 248);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(248, 248, 248);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: rgba(28, 28, 28, 0.1);
  --code-border-color: rgba(28, 28, 28, 0.09);
  --code-bracket-background: rgba(28, 28, 28, 0.1);
  --code-comment: #ababab;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #5c5c5c;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(0, 0, 0, 0.01);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h6-weight, 600);
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #ababab;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(28, 28, 28, 0.09);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --italic-color: hsl(258, 88%, 66%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: rgb(249, 249, 249);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(248, 248, 248);
  --pdf-page-background: rgb(248, 248, 248);
  --pdf-sidebar-background: rgb(248, 248, 248);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(248, 248, 248) 65%, transparent) linear-gradient(rgb(248, 248, 248), color-mix(in srgb, rgb(248, 248, 248) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: rgb(248, 248, 248);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: rgba(28, 28, 28, 0.09);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: rgba(28, 28, 28, 0.1);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgba(28, 28, 28, 0.09);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(248, 248, 248);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(248, 248, 248);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(0, 0, 0, 0.01);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(249, 249, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(249, 249, 249), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: rgba(28, 28, 28, 0.09);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(28, 28, 28, 0.09);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: white;
  --table-header-background: rgba(28, 28, 28, 0.1);
  --table-header-border-color: rgba(28, 28, 28, 0.09);
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #ababab;
  --text-highlight-bg: rgba(28, 28, 28, 0.2);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(175, 191, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(175, 191, 5);
  border-left-width: 0px;
  border-right-color: rgb(175, 191, 5);
  border-right-width: 0px;
  border-top-color: rgb(175, 191, 5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(175, 191, 5));
  content: "H6";
  font-family: var(--h6-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 10px);
  font-weight: var(--font-weight, 600);
  line-height: var(--h6-line-height, 15px);
  margin-bottom: 0px;
  margin-left: -13px;
  margin-right: 1px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body table {
  color: rgb(8, 8, 8);
  width: 1794px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
  color: var(--table-text-color, rgb(8, 8, 8));
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgba(28, 28, 28, 0.1));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(28, 28, 28, 0.1));
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(28, 28, 28, 0.1));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(231, 77, 71);
  border-left-color: rgb(231, 77, 71);
  border-right-color: rgb(231, 77, 71);
  border-top-color: rgb(231, 77, 71);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  margin-left: 3px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgba(28, 28, 28, 0.2);
  border-left-width: 1px;
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  margin-left: 3px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(248, 248, 248));
  border-bottom-color: rgba(255, 255, 255, 0.25);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-right-color: rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.25);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.2) 0px 2px 8px 0px, rgba(255, 255, 255, 0.6) 0px 1px 2px 0px inset);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.25);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-right-color: rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(28, 28, 28, 0.1));
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.6px;
  border-bottom-right-radius: 27.6px;
  border-top-left-radius: 27.6px;
  border-top-right-radius: 27.6px;
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(231, 77, 71));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-color, rgb(8, 8, 8));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(215, 148, 64));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--text-color, rgb(8, 8, 8));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(7, 170, 246));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(163, 110, 251));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(109, 215, 215));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(175, 191, 5));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.01);
  border-left-color: rgba(0, 0, 0, 0.01);
  border-right-color: rgba(0, 0, 0, 0.01);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  padding-left: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(28, 28, 28, 0.05);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--tree-item-color, rgba(20, 20, 20, 0.8));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--tree-item-color, rgba(20, 20, 20, 0.8));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(8, 8, 8);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(248, 248, 248, 0.6));
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--text-color, rgb(8, 8, 8));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(8, 8, 8);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--tree-item-color, rgba(20, 20, 20, 0.8));
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: var(--tree-item-color, rgba(20, 20, 20, 0.8));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-color, rgb(8, 8, 8));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--model-bg-color, rgba(248, 248, 248, 0.1));
  border-color: rgb(8, 8, 8);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(28, 28, 28, 0.09) rgba(28, 28, 28, 0.09) rgb(34, 34, 34);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(28, 28, 28, 0.09);
  border-left-color: rgba(28, 28, 28, 0.09);
  border-right-color: rgba(28, 28, 28, 0.09);
  border-top-color: rgba(28, 28, 28, 0.09);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(28, 28, 28, 0.09);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 27.6px;
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(248, 248, 248));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(248, 248, 248, 0.6));
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(28, 28, 28, 0.1));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 8, 8);
}`,
  },
  extras: `.workspace {
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
}

.workspace-leaf-content {
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
}

.modal {
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
}

.status-bar {
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
}
`,
  classSettings: {
    "text-justify": `body.text-justify .mod-cm6 .cm-editor .cm-line, body.text-justify p:not([align="right"]):not([align="left"]), body.text-justify li, body.text-justify ol {
text-align: justify;
}`,
  },
};
