import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "friendly",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Lexend Deca",
        style: "normal",
        weight: "normal",
        file: "lexend-deca.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Recursive Sn Csl St",
        style: "italic",
        weight: "normal",
        file: "recursive-sn-csl-st.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Harlow Solid",
        style: "normal",
        weight: "normal",
        file: "harlow-solid.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Ranille Normal",
        style: "normal",
        weight: "normal",
        file: "ranille-normal.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro V",
        style: "italic",
        weight: "normal",
        file: "ia-writer-quattro-v.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro V",
        style: "normal",
        weight: "normal",
        file: "ia-writer-quattro-v-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --alt-font: "Harlow Solid", serif;
  --alt-size: 133%;
  --background-modifier-border: var(--background-primary, #002c3d);
  --background-modifier-error: var(--text-error, #540b0e);
  --background-modifier-error-hover: var(--text-error-hover, #9b2226);
  --background-modifier-form-field: var(--background-primary, #002c3d);
  --background-modifier-form-field-highlighted: #001f2b;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #002c3d);
  --background-modifier-success: var(--interactive-normal, #94d2bd);
  --background-primary: var(--color-base-00, #002c3d);
  --background-primary-alt: var(--background-primary, #002c3d);
  --background-secondary: var(--color-base-20, #264653);
  --background-secondary-alt: var(--background-primary, #002c3d);
  --bases-cards-background: var(--background-primary, #002c3d);
  --bases-cards-cover-background: var(--background-primary-alt, #002c3d);
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, #002c3d);
  --bases-group-heading-property-color: var(--text-muted, #0a9396);
  --bases-table-border-color: var(--table-border-color, #002c3d);
  --bases-table-cell-background-active: var(--background-primary, #002c3d);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #002c3d);
  --bases-table-group-background: var(--background-primary-alt, #002c3d);
  --bases-table-header-background: var(--background-primary, #002c3d);
  --bases-table-header-color: var(--text-muted, #0a9396);
  --bases-table-summary-background: var(--background-primary, #002c3d);
  --blockquote-border-color: var(--interactive-accent, #e9c46a);
  --box-shadow: 6px 8px 7px var(--background-modifier-form-field-highlighted);
  --canvas-background: var(--background-primary, #002c3d);
  --canvas-card-label-color: var(--text-faint, #005f73);
  --caret-color: var(--text-normal, #e9d8a6);
  --checkbox-border-color: var(--text-faint, #005f73);
  --checkbox-border-color-hover: var(--text-muted, #0a9396);
  --checkbox-color: var(--interactive-accent, #e9c46a);
  --checkbox-color-hover: var(--interactive-accent-hover, #f4a261);
  --checkbox-marker-color: var(--background-primary, #002c3d);
  --checklist-done-color: var(--text-muted, #0a9396);
  --code-background: var(--background-primary-alt, #002c3d);
  --code-border-color: var(--background-modifier-border, #002c3d);
  --code-comment: var(--text-faint, #005f73);
  --code-normal: var(--text-normal, #e9d8a6);
  --code-punctuation: var(--text-muted, #0a9396);
  --collapse-icon-color: var(--text-faint, #005f73);
  --collapse-icon-color-collapsed: var(--text-accent, #e9c46a);
  --dark: var(--text-normal, var(--color-base-100, #e9d8a6));
  --darkgray: var(--text-normal, var(--color-base-100, #e9d8a6));
  --default-font: "iA Writer Quattro V", monospace;
  --divider-color: var(--background-modifier-border, #002c3d);
  --divider-color-hover: var(--interactive-accent, #e9c46a);
  --dropdown-background: var(--interactive-normal, #94d2bd);
  --dropdown-background-hover: var(--interactive-hover, #0a9396);
  --file-header-background: var(--background-primary, #002c3d);
  --file-header-background-focused: var(--background-primary, #002c3d);
  --file-header-font: var(--font-interface, "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #94d2bd);
  --flair-color: var(--text-normal, #e9d8a6);
  --footnote-divider-color: var(--metadata-divider-color, #002c3d);
  --footnote-id-color: var(--text-muted, #0a9396);
  --footnote-id-color-no-occurrences: var(--text-faint, #005f73);
  --graph-node: var(--text-muted, #0a9396);
  --graph-node-focused: var(--text-accent, #e9c46a);
  --graph-node-unresolved: var(--text-faint, #005f73);
  --graph-text: var(--text-normal, #e9d8a6);
  --gray: var(--text-muted, var(--color-base-70, #0a9396));
  --h1: 2.5em;
  --h2: 2em;
  --h3: 1.6em;
  --h4: 1.25em;
  --h5: 1.12em;
  --h6: 1.12em;
  --header-font: "Ranille Normal", serif;
  --header-size: 110%;
  --headerheight: 36px;
  --heading-formatting: var(--text-faint, #005f73);
  --highlight: var(--text-highlight-bg, var(--interactive-normal, #94d2bd));
  --hr-color: var(--background-modifier-border, #002c3d);
  --hr-sym: " // ";
  --icon-color: var(--text-muted, #0a9396);
  --icon-color-active: var(--text-accent, #e9c46a);
  --icon-color-focused: var(--text-normal, #e9d8a6);
  --icon-color-hover: var(--text-muted, #0a9396);
  --input-date-separator: var(--text-faint, #005f73);
  --input-placeholder-color: var(--text-faint, #005f73);
  --interactive-accent: var(--text-accent, #e9c46a);
  --interactive-accent-b: var(--text-accent-b, #e9c46a);
  --interactive-accent-hover: var(--text-accent-hover, #f4a261);
  --interactive-accent-rgb: 233, 196, 106;
  --interactive-hover: var(--text-muted, #0a9396);
  --interactive-normal: var(--color-base-30, #94d2bd);
  --interactive-success: var(--interactive-normal, #94d2bd);
  --light: var(--background-primary, var(--color-base-00, #002c3d));
  --lightgray: var(--background-secondary, var(--color-base-20, #264653));
  --link-color: var(--text-accent, #e9c46a);
  --link-color-hover: var(--text-accent-hover, #f4a261);
  --link-external-color: var(--text-accent, #e9c46a);
  --link-external-color-hover: var(--text-accent-hover, #f4a261);
  --link-unresolved-color: var(--text-accent, #e9c46a);
  --list-marker-color: var(--text-faint, #005f73);
  --list-marker-color-collapsed: var(--text-accent, #e9c46a);
  --list-marker-color-hover: var(--text-muted, #0a9396);
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: var(--background-secondary, #264653);
  --menu-radius: var(--radius-m, 4px);
  --mermaid-font: "Ranille Normal", "Segoe UI", serif;
  --metadata-border-color: var(--background-modifier-border, #002c3d);
  --metadata-divider-color: var(--background-modifier-border, #002c3d);
  --metadata-input-font: var(--font-interface, "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #e9d8a6);
  --metadata-label-font: var(--font-interface, "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #0a9396);
  --metadata-label-text-color-hover: var(--text-muted, #0a9396);
  --micro: 70px;
  --modal-background: var(--background-primary, #002c3d);
  --modal-radius: var(--radius-l, 11px);
  --monospace-size: 100%;
  --monospaced-font: "JetBrains Mono", monospace;
  --nav-collapse-icon-color: var(--collapse-icon-color, #005f73);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #005f73);
  --nav-heading-color: var(--text-normal, #e9d8a6);
  --nav-heading-color-collapsed: var(--text-faint, #005f73);
  --nav-heading-color-collapsed-hover: var(--text-muted, #0a9396);
  --nav-heading-color-hover: var(--text-normal, #e9d8a6);
  --nav-item-color: var(--text-muted, #0a9396);
  --nav-item-color-active: var(--text-normal, #e9d8a6);
  --nav-item-color-highlighted: var(--text-accent, #e9c46a);
  --nav-item-color-hover: var(--text-normal, #e9d8a6);
  --nav-item-color-selected: var(--text-normal, #e9d8a6);
  --nav-tag-color: var(--text-faint, #005f73);
  --nav-tag-color-active: var(--text-muted, #0a9396);
  --nav-tag-color-hover: var(--text-muted, #0a9396);
  --opacity-background: #001f2b55;
  --opacity-filter: blur(15px) saturate(133%);
  --opacity-translucency: 0.85;
  --pdf-background: var(--background-primary, #002c3d);
  --pdf-page-background: var(--background-primary, #002c3d);
  --pdf-sidebar-background: var(--background-primary, #002c3d);
  --pill-border-color: var(--background-modifier-border, #002c3d);
  --pill-color: var(--text-muted, #0a9396);
  --pill-color-hover: var(--text-normal, #e9d8a6);
  --pill-color-remove: var(--text-faint, #005f73);
  --pill-color-remove-hover: var(--text-accent, #e9c46a);
  --prompt-background: var(--background-primary, #002c3d);
  --radius: 0px;
  --radius-full: 11px 4px 0px 4px;
  --radius-l: 11px;
  --radius-m: 4px;
  --raised-background: var(--blur-background, color-mix(in srgb, #94d2bd 65%, transparent) linear-gradient(#94d2bd, color-mix(in srgb, #94d2bd 65%, transparent)));
  --reveal-font: "Ranille Normal", "Segoe UI", serif;
  --ribbon-background: var(--background-secondary, #264653);
  --ribbon-background-collapsed: var(--background-primary, #002c3d);
  --scrollbar-radius: var(--radius-l, 11px);
  --search-clear-button-color: var(--text-muted, #0a9396);
  --search-icon-color: var(--text-muted, #0a9396);
  --search-result-background: var(--background-primary, #002c3d);
  --secondary: var(--text-accent, var(--color-accent-1, #e9c46a));
  --setting-group-heading-color: var(--text-normal, #e9d8a6);
  --setting-items-background: var(--background-primary-alt, #002c3d);
  --setting-items-border-color: var(--background-modifier-border, #002c3d);
  --setting-items-radius: var(--radius-l, 11px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #0a9396);
  --shiki-code-background: var(--code-background, #002c3d);
  --shiki-code-comment: var(--text-faint, #005f73);
  --shiki-code-normal: var(--text-muted, #0a9396);
  --shiki-code-punctuation: var(--text-muted, #0a9396);
  --shiki-gutter-border-color: var(--background-modifier-border, #002c3d);
  --shiki-gutter-text-color: var(--text-faint, #005f73);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #0a9396);
  --shiki-highlight-neutral: var(--shiki-code-normal, #0a9396);
  --shiki-terminal-dots-color: var(--text-faint, #005f73);
  --slider-track-background: var(--background-modifier-border, #002c3d);
  --small: 200px;
  --small-med: 300px;
  --status-bar-background: var(--background-secondary, #264653);
  --status-bar-border-color: var(--divider-color, #002c3d);
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #0a9396);
  --suggestion-background: var(--background-primary, #002c3d);
  --tab-background-active: var(--background-primary, #002c3d);
  --tab-container-background: var(--background-secondary, #264653);
  --tab-outline-color: var(--divider-color, #002c3d);
  --tab-switcher-background: var(--background-secondary, #264653);
  --tab-text-color: var(--text-faint, #005f73);
  --tab-text-color-active: var(--text-muted, #0a9396);
  --tab-text-color-focused: var(--text-muted, #0a9396);
  --tab-text-color-focused-active: var(--text-muted, #0a9396);
  --tab-text-color-focused-active-current: var(--text-normal, #e9d8a6);
  --tab-text-color-focused-highlighted: var(--text-accent, #e9c46a);
  --table-add-button-border-color: var(--background-modifier-border, #002c3d);
  --table-border-color: var(--background-modifier-border, #002c3d);
  --table-drag-handle-background-active: var(--table-selection-border-color, #e9c46a);
  --table-drag-handle-color: var(--text-faint, #005f73);
  --table-drag-handle-color-active: var(--text-on-accent, #002c3d);
  --table-header-border-color: var(--table-border-color, #002c3d);
  --table-header-color: var(--text-normal, #e9d8a6);
  --table-selection-border-color: var(--interactive-accent, #e9c46a);
  --tag-color: var(--text-accent, #e9c46a);
  --tag-color-hover: var(--text-accent, #e9c46a);
  --tall: 700px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #f4a261));
  --text-accent: var(--color-accent-1, #e9c46a);
  --text-accent-b: #e9c46a;
  --text-accent-hover: var(--color-accent-2, #f4a261);
  --text-error: var(--color-red, #540b0e);
  --text-error-hover: #9b2226;
  --text-faint: var(--color-base-50, #005f73);
  --text-highlight-bg: var(--interactive-normal, #94d2bd);
  --text-highlight-bg-active: #e9c46a40;
  --text-muted: var(--color-base-70, #0a9396);
  --text-normal: var(--color-base-100, #e9d8a6);
  --text-on-accent: var(--background-primary, #002c3d);
  --text-selection: var(--text-muted, #0a9396);
  --textHighlight: var(--text-highlight-bg, var(--interactive-normal, #94d2bd));
  --tiny: 100px;
  --titlebar-background: var(--background-secondary, #264653);
  --titlebar-background-focused: var(--background-secondary-alt, #002c3d);
  --titlebar-border-color: var(--background-modifier-border, #002c3d);
  --titlebar-text-color: var(--text-muted, #0a9396);
  --titlebar-text-color-focused: var(--text-normal, #e9d8a6);
  --vault-profile-color: var(--text-normal, #e9d8a6);
  --vault-profile-color-hover: var(--vault-profile-color, #e9d8a6);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #264653);
  background-color: var(--tab-container-background, rgb(38, 70, 83));
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(0, 44, 61));
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(38, 70, 83));
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 44, 61);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #264653);
  background-color: var(--tab-container-background, rgb(38, 70, 83));
  border-left-color: rgb(0, 44, 61);
  color: rgb(233, 216, 166);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #002c3d;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #540b0e;
  --background-modifier-error-hover: #9b2226;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #002c3d;
  --background-modifier-form-field-hover: #002c3d;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #94d2bd;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #002c3d;
  --background-primary-alt: #002c3d;
  --background-secondary: #264653;
  --background-secondary-alt: #002c3d;
  --blockquote-border-color: #e9c46a;
  --blur-background: color-mix(in srgb, #94d2bd 65%, transparent) linear-gradient(#94d2bd, color-mix(in srgb, #94d2bd 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --box-shadow: 6px 8px 7px #001f2b;
  --button-corner-shape: round;
  --button-radius: 5px;
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
  --canvas-background: #002c3d;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e9d8a6;
  --checkbox-border-color: #005f73;
  --checkbox-border-color-hover: #0a9396;
  --checkbox-color: #e9c46a;
  --checkbox-color-hover: #f4a261;
  --checkbox-marker-color: #002c3d;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #0a9396;
  --clickable-icon-radius: 4px;
  --code-background: #002c3d;
  --code-border-color: #002c3d;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #005f73;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e9d8a6;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #0a9396;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #005f73;
  --collapse-icon-color-collapsed: #e9c46a;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #002c3d;
  --divider-color-hover: #e9c46a;
  --divider-vertical-height: 100%;
  --dropdown-background: #94d2bd;
  --dropdown-background-hover: #0a9396;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #94d2bd;
  --flair-color: #e9d8a6;
  --font-interface: '??', '??', "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "JetBrains Mono", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #3f3f3f;
  --graph-node: #0a9396;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #e9c46a;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #005f73;
  --graph-text: #e9d8a6;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #005f73;
  --heading-spacing: 2.5rem;
  --hr-color: #002c3d;
  --interactive-accent: #e9c46a;
  --interactive-accent-b: #e9c46a;
  --interactive-accent-hover: #f4a261;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #0a9396;
  --interactive-normal: #94d2bd;
  --interactive-success: #94d2bd;
  --link-color: #e9c46a;
  --link-color-hover: #f4a261;
  --link-external-color: #e9c46a;
  --link-external-color-hover: #f4a261;
  --link-unresolved-color: #e9c46a;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #264653;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #002c3d;
  --pdf-page-background: #002c3d;
  --pdf-shadow: 0 0 0 1px #002c3d;
  --pdf-sidebar-background: #002c3d;
  --pdf-thumbnail-shadow: 0 0 0 1px #002c3d;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #94d2bd 65%, transparent) linear-gradient(#94d2bd, color-mix(in srgb, #94d2bd 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 11px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #0a9396;
  --search-icon-color: #0a9396;
  --search-result-background: #002c3d;
  --setting-group-heading-color: #e9d8a6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #002c3d;
  --setting-items-border-color: #002c3d;
  --setting-items-padding: 20px;
  --setting-items-radius: 11px;
  --shiki-active-tab-border-color: #0a9396;
  --shiki-code-background: #002c3d;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #005f73;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #0a9396;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #0a9396;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #002c3d;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #005f73;
  --shiki-gutter-text-color-highlight: #0a9396;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #0a9396;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #005f73;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #002c3d;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #002c3d;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #002c3d;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #264653;
  --tab-switcher-menubar-background: linear-gradient(to top, #264653, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #005f73;
  --tab-text-color-active: #0a9396;
  --tab-text-color-focused: #0a9396;
  --tab-text-color-focused-active: #0a9396;
  --tab-text-color-focused-active-current: #e9d8a6;
  --tab-text-color-focused-highlighted: #e9c46a;
  --table-add-button-border-color: #002c3d;
  --table-add-button-border-width: 1px;
  --table-border-color: #002c3d;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #e9c46a;
  --table-drag-handle-color: #005f73;
  --table-drag-handle-color-active: #002c3d;
  --table-header-background: transparent;
  --table-header-border-color: #002c3d;
  --table-header-border-width: 1px;
  --table-header-color: #e9d8a6;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #e9c46a;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #e9c46a;
  --tag-color-hover: #e9c46a;
  --tag-size: 0.875em;
  --text-accent: #e9c46a;
  --text-accent-hover: #f4a261;
  --text-error: #540b0e;
  --text-faint: #005f73;
  --text-highlight-bg: #94d2bd;
  --text-muted: #0a9396;
  --text-normal: #e9d8a6;
  --text-on-accent: #002c3d;
  --text-selection: #0a9396;
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
  border-bottom-color: rgb(0, 95, 115);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 95, 115);
  border-left-width: 0px;
  border-right-color: rgb(0, 95, 115);
  border-right-width: 0px;
  border-top-color: rgb(0, 95, 115);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(0, 95, 115));
  content: "#   ";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1, 20px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.6px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--interactive-accent-b, rgb(233, 196, 106));
  font-family: var(--header-font, "Ranille Normal", serif);
  outline: rgb(233, 196, 106) none 0px;
  text-decoration-color: rgb(233, 196, 106);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--interactive-normal, rgb(148, 210, 189));
  font-family: var(--default-font, "iA Writer Quattro V", monospace);
  outline: rgb(148, 210, 189) none 0px;
  text-decoration-color: rgb(148, 210, 189);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--interactive-normal, rgb(148, 210, 189));
  font-family: var(--default-font, "iA Writer Quattro V", monospace);
  outline: rgb(148, 210, 189) none 0px;
  text-decoration-color: rgb(148, 210, 189);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--interactive-accent-b, rgb(233, 196, 106));
  font-family: var(--header-font, "Ranille Normal", serif);
  outline: rgb(233, 196, 106) none 0px;
  text-decoration-color: rgb(233, 196, 106);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(148, 210, 189));
  color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  outline: rgb(0, 31, 43) none 0px;
  text-decoration-color: rgb(0, 31, 43);
}

html[saved-theme="dark"] body del {
  color: var(--text-faint, rgb(0, 95, 115));
  outline: rgb(0, 95, 115) none 0px;
  text-decoration: line-through rgb(84, 11, 14);
  text-decoration-color: var(--text-error, rgb(84, 11, 14));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(0, 0, 0);
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(255, 255, 255);
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(0, 0, 0));
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(10, 147, 150));
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(10, 147, 150) none 0px;
  text-decoration-color: rgb(10, 147, 150);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(233, 196, 106));
  outline: rgb(233, 196, 106) none 0px;
  text-decoration-color: rgb(233, 196, 106);
  transition: 0.2s;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(233, 196, 106));
  outline: rgb(233, 196, 106) none 0px;
  text-decoration-color: rgb(233, 196, 106);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(233, 196, 106));
  outline: rgb(233, 196, 106) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(233, 196, 106));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body dt {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(0, 95, 115));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body table {
  border-top-left-radius: var(--radius-l, 11px);
  color: rgb(233, 216, 166);
  width: 1042.88px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(233, 216, 166);
  border-bottom-width: 0px;
  border-left-color: rgb(233, 216, 166);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(233, 216, 166);
  border-right-width: 0px;
  border-top-color: rgb(233, 216, 166);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(233, 216, 166));
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body th {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  border-bottom-color: rgb(233, 196, 106);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 44, 61);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(0, 44, 61);
  border-right-width: 0px;
  border-top-color: rgb(0, 44, 61);
  border-top-left-radius: var(--radius-l, 11px);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-accent-b, rgb(233, 196, 106));
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body tr {
  border-bottom-left-radius: var(--radius-m, 4px);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  border-bottom-color: rgb(0, 44, 61);
  border-left-color: rgb(0, 44, 61);
  border-right-color: rgb(0, 44, 61);
  border-top-color: rgb(0, 44, 61);
  color: var(--interactive-accent-b, rgb(233, 196, 106));
  font-family: var(--font-monospace, "JetBrains Mono", monospace);
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 44, 61));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(233, 216, 166);
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #002c3d);
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(0, 44, 61));
  border-bottom-color: rgb(10, 147, 150);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(10, 147, 150);
  border-right-color: rgb(10, 147, 150);
  border-top-color: rgb(10, 147, 150);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(233, 216, 166);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 196, 106);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 7px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 7px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(10, 147, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(10, 147, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(233, 216, 166);
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 44, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 44, 61);
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
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(233, 216, 166);
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
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  border-bottom-color: rgb(0, 44, 61);
  border-left-color: rgb(0, 44, 61);
  border-right-color: rgb(0, 44, 61);
  border-top-color: rgb(0, 44, 61);
  color: var(--text-normal, rgb(233, 216, 166));
  font-family: var(--default-font, "iA Writer Quattro V", monospace);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--opacity-background, rgba(0, 31, 43, 0.333));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  box-shadow: var(--box-shadow, rgb(0, 31, 43) 6px 8px 7px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(233, 216, 166);
  outline: rgb(233, 216, 166) none 0px;
  text-decoration-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--interactive-accent-hover, rgb(244, 162, 97));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(244, 162, 97);
  border-left-color: rgb(244, 162, 97);
  border-right-color: rgb(244, 162, 97);
  border-top-color: rgb(244, 162, 97);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--interactive-accent-hover, rgb(244, 162, 97));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  color: var(--interactive-accent-hover, rgb(244, 162, 97));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  border-bottom-color: rgb(233, 196, 106);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  border-bottom-color: rgb(244, 162, 97);
  border-left-color: rgb(244, 162, 97);
  border-right-color: rgb(244, 162, 97);
  border-top-color: rgb(244, 162, 97);
  color: var(--interactive-accent-hover, rgb(244, 162, 97));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  color: var(--interactive-accent-hover, rgb(244, 162, 97));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #e9c46a);
  --pill-color-hover: var(--tag-color-hover, #e9c46a);
  --pill-color-remove: var(--tag-color, #e9c46a);
  --pill-color-remove-hover: var(--tag-color-hover, #e9c46a);
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(233, 196, 106);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(233, 216, 166));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 44, 61);
  border-left-color: rgb(0, 44, 61);
  border-right-color: rgb(0, 44, 61);
  margin-bottom: 10px;
  margin-top: 10px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(10, 147, 150));
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(10, 147, 150));
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(233, 216, 166);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(10, 147, 150);
  border-left-color: rgb(10, 147, 150);
  border-right-color: rgb(10, 147, 150);
  border-top-color: rgb(10, 147, 150);
  color: var(--icon-color, rgb(10, 147, 150));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(38, 70, 83));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(0, 44, 61);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(10, 147, 150));
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(10, 147, 150);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(233, 216, 166);
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(10, 147, 150));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(10, 147, 150);
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(10, 147, 150);
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(10, 147, 150));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(10, 147, 150);
  border-left-color: rgb(10, 147, 150);
  border-right-color: rgb(10, 147, 150);
  border-top-color: rgb(10, 147, 150);
  color: var(--icon-color, rgb(10, 147, 150));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(10, 147, 150);
  stroke: rgb(10, 147, 150);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(10, 147, 150);
  border-left-color: rgb(10, 147, 150);
  border-right-color: rgb(10, 147, 150);
  border-top-color: rgb(10, 147, 150);
  color: rgb(10, 147, 150);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(0, 95, 115));
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(233, 216, 166));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(38, 70, 83));
  border-color: rgb(233, 216, 166);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: var(--background-modifier-form-field-highlighted, rgb(0, 31, 43));
  border-color: rgb(0, 44, 61) rgb(0, 44, 61) rgb(233, 196, 106);
  color: var(--text-accent-b, rgb(233, 196, 106));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(0, 44, 61);
  border-left-color: rgb(0, 44, 61);
  border-right-color: rgb(0, 44, 61);
  border-top-color: rgb(0, 44, 61);
  color: var(--text-muted, rgb(10, 147, 150));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(10, 147, 150);
  border-left-color: rgb(10, 147, 150);
  border-right-color: rgb(10, 147, 150);
  border-top-color: rgb(10, 147, 150);
  color: rgb(10, 147, 150);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(0, 44, 61);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(10, 147, 150);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(10, 147, 150);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, #e9c46a);
  --pill-color-hover: var(--tag-color-hover, #e9c46a);
  --pill-color-remove: var(--tag-color, #e9c46a);
  --pill-color-remove-hover: var(--tag-color-hover, #e9c46a);
  color: var(--pill-color, rgb(233, 196, 106));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(10, 147, 150);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(0, 44, 61));
  color: var(--text-normal, rgb(233, 216, 166));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(38, 70, 83));
  border-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--background-secondary, rgb(38, 70, 83));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(233, 216, 166);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(38, 70, 83));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(233, 216, 166));
  font-family: "??", "??", "iA Writer Quattro V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(10, 147, 150);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--text-normal, rgb(10, 147, 150));
  font-family: var(--default-font, "iA Writer Quattro V", monospace);
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(0, 44, 61));
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
  color: var(--code-normal, rgb(233, 216, 166));
  font-family: var(--font-monospace, "JetBrains Mono", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(233, 216, 166);
  border-left-color: rgb(233, 216, 166);
  border-right-color: rgb(233, 216, 166);
  border-top-color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body sub {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body summary {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body sup {
  color: rgb(233, 216, 166);
}

html[saved-theme="dark"] body ul.tags > li {
  color: var(--tag-color, rgb(233, 196, 106));
}`,
  },
  light: {
    base: `:root:root {
  --alt-font: 'Recursive Sn Csl St', serif;
  --alt-size: 100%;
  --background-modifier-border: var(--background-primary, #292929);
  --background-modifier-error: var(--text-error, darkred);
  --background-modifier-error-hover: var(--text-error-hover, red);
  --background-modifier-form-field: var(--background-primary, #292929);
  --background-modifier-form-field-highlighted: #121212;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #292929);
  --background-modifier-success: var(--interactive-normal, #CBFF8C);
  --background-primary: var(--color-base-00, #292929);
  --background-primary-alt: var(--background-primary, #292929);
  --background-secondary: var(--color-base-20, #1f1f1f);
  --background-secondary-alt: var(--background-primary, #292929);
  --bases-cards-background: var(--background-primary, #292929);
  --bases-cards-cover-background: var(--background-primary-alt, #292929);
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, #292929);
  --bases-group-heading-property-color: var(--text-muted, #999999);
  --bases-table-border-color: var(--table-border-color, #292929);
  --bases-table-cell-background-active: var(--background-primary, #292929);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #292929);
  --bases-table-group-background: var(--background-primary-alt, #292929);
  --bases-table-header-background: var(--background-primary, #292929);
  --bases-table-header-color: var(--text-muted, #999999);
  --bases-table-summary-background: var(--background-primary, #292929);
  --blockquote-border-color: var(--interactive-accent, #ee1166);
  --box-shadow: 6px 8px 7px var(--background-modifier-form-field-highlighted);
  --canvas-background: var(--background-primary, #292929);
  --canvas-card-label-color: var(--text-faint, #606060);
  --caret-color: var(--text-normal, #cccccc);
  --checkbox-border-color: var(--text-faint, #606060);
  --checkbox-border-color-hover: var(--text-muted, #999999);
  --checkbox-color: var(--interactive-accent, #ee1166);
  --checkbox-color-hover: var(--interactive-accent-hover, #FFFFFF);
  --checkbox-marker-color: var(--background-primary, #292929);
  --checklist-done-color: var(--text-muted, #999999);
  --code-background: var(--background-primary-alt, #292929);
  --code-border-color: var(--background-modifier-border, #292929);
  --code-comment: var(--text-faint, #606060);
  --code-normal: var(--text-normal, #cccccc);
  --code-punctuation: var(--text-muted, #999999);
  --collapse-icon-color: var(--text-faint, #606060);
  --collapse-icon-color-collapsed: var(--text-accent, #ee1166);
  --dark: var(--text-normal, var(--color-base-100, #cccccc));
  --darkgray: var(--text-normal, var(--color-base-100, #cccccc));
  --default-font: "Lexend Deca Light", monospace;
  --divider-color: var(--background-modifier-border, #292929);
  --divider-color-hover: var(--interactive-accent, #ee1166);
  --dropdown-background: var(--interactive-normal, #CBFF8C);
  --dropdown-background-hover: var(--interactive-hover, #999999);
  --file-header-background: var(--background-primary, #292929);
  --file-header-background-focused: var(--background-primary, #292929);
  --file-header-font: var(--font-interface, "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #CBFF8C);
  --flair-color: var(--text-normal, #cccccc);
  --footnote-divider-color: var(--metadata-divider-color, #292929);
  --footnote-id-color: var(--text-muted, #999999);
  --footnote-id-color-no-occurrences: var(--text-faint, #606060);
  --graph-node: var(--text-muted, #999999);
  --graph-node-focused: var(--text-accent, #ee1166);
  --graph-node-unresolved: var(--text-faint, #606060);
  --graph-text: var(--text-normal, #cccccc);
  --gray: var(--text-muted, var(--color-base-70, #999999));
  --h1: 2.5em;
  --h2: 2em;
  --h3: 1.6em;
  --h4: 1.25em;
  --h5: 1.12em;
  --h6: 1.12em;
  --header-font: "iA Writer Quattro V Black", serif;
  --header-size: 100%;
  --headerheight: 37px;
  --heading-formatting: var(--text-faint, #606060);
  --hr-color: var(--background-modifier-border, #292929);
  --hr-sym: " // ";
  --icon-color: var(--text-muted, #999999);
  --icon-color-active: var(--text-accent, #ee1166);
  --icon-color-focused: var(--text-normal, #cccccc);
  --icon-color-hover: var(--text-muted, #999999);
  --input-date-separator: var(--text-faint, #606060);
  --input-placeholder-color: var(--text-faint, #606060);
  --interactive-accent: var(--text-accent, #ee1166);
  --interactive-accent-b: var(--text-accent-b, #FFFFFF);
  --interactive-accent-hover: var(--text-accent-hover, #FFFFFF);
  --interactive-accent-rgb: 238, 17, 102;
  --interactive-hover: var(--text-muted, #999999);
  --interactive-normal: var(--color-base-00, #CBFF8C);
  --interactive-success: var(--interactive-normal, #CBFF8C);
  --light: var(--background-primary, var(--color-base-00, #292929));
  --lightgray: var(--background-secondary, var(--color-base-20, #1f1f1f));
  --link-color: var(--text-accent, #ee1166);
  --link-color-hover: var(--text-accent-hover, #FFFFFF);
  --link-external-color: var(--text-accent, #ee1166);
  --link-external-color-hover: var(--text-accent-hover, #FFFFFF);
  --link-unresolved-color: var(--text-accent, #ee1166);
  --list-marker-color: var(--text-faint, #606060);
  --list-marker-color-collapsed: var(--text-accent, #ee1166);
  --list-marker-color-hover: var(--text-muted, #999999);
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: var(--background-secondary, #1f1f1f);
  --menu-radius: var(--radius-m, 4px);
  --mermaid-font: "iA Writer Quattro V", "Segoe UI", serif;
  --metadata-border-color: var(--background-modifier-border, #292929);
  --metadata-divider-color: var(--background-modifier-border, #292929);
  --metadata-input-font: var(--font-interface, "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #cccccc);
  --metadata-label-font: var(--font-interface, "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #999999);
  --metadata-label-text-color-hover: var(--text-muted, #999999);
  --micro: 70px;
  --modal-background: var(--background-primary, #292929);
  --modal-radius: var(--radius-l, 11px);
  --monospace-size: 90%;
  --monospaced-font: "JetBrains Mono Black", monospace;
  --nav-collapse-icon-color: var(--collapse-icon-color, #606060);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #606060);
  --nav-heading-color: var(--text-normal, #cccccc);
  --nav-heading-color-collapsed: var(--text-faint, #606060);
  --nav-heading-color-collapsed-hover: var(--text-muted, #999999);
  --nav-heading-color-hover: var(--text-normal, #cccccc);
  --nav-item-color: var(--text-muted, #999999);
  --nav-item-color-active: var(--text-normal, #cccccc);
  --nav-item-color-highlighted: var(--text-accent, #ee1166);
  --nav-item-color-hover: var(--text-normal, #cccccc);
  --nav-item-color-selected: var(--text-normal, #cccccc);
  --nav-tag-color: var(--text-faint, #606060);
  --nav-tag-color-active: var(--text-muted, #999999);
  --nav-tag-color-hover: var(--text-muted, #999999);
  --opacity-background: #29292960;
  --opacity-filter: blur(15px) saturate(133%);
  --opacity-translucency: 0.85;
  --pdf-background: var(--background-primary, #292929);
  --pdf-page-background: var(--background-primary, #292929);
  --pdf-sidebar-background: var(--background-primary, #292929);
  --pill-border-color: var(--background-modifier-border, #292929);
  --pill-color: var(--text-muted, #999999);
  --pill-color-hover: var(--text-normal, #cccccc);
  --pill-color-remove: var(--text-faint, #606060);
  --pill-color-remove-hover: var(--text-accent, #ee1166);
  --prompt-background: var(--background-primary, #292929);
  --radius: 0px;
  --radius-full: 11px 4px 0px 4px;
  --radius-l: 11px;
  --radius-m: 4px;
  --raised-background: var(--blur-background, color-mix(in srgb, #292929 65%, transparent) linear-gradient(#292929, color-mix(in srgb, #292929 65%, transparent)));
  --reveal-font: "iA Writer Quattro V", "Segoe UI", serif;
  --ribbon-background: var(--background-secondary, #1f1f1f);
  --ribbon-background-collapsed: var(--background-primary, #292929);
  --scrollbar-radius: var(--radius-l, 11px);
  --search-clear-button-color: var(--text-muted, #999999);
  --search-icon-color: var(--text-muted, #999999);
  --search-result-background: var(--background-primary, #292929);
  --secondary: var(--text-accent, var(--color-accent, #ee1166));
  --setting-group-heading-color: var(--text-normal, #cccccc);
  --setting-items-background: var(--background-primary-alt, #292929);
  --setting-items-border-color: var(--background-modifier-border, #292929);
  --setting-items-radius: var(--radius-l, 11px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #999999);
  --shiki-code-background: var(--code-background, #292929);
  --shiki-code-comment: var(--text-faint, #606060);
  --shiki-code-normal: var(--text-muted, #999999);
  --shiki-code-punctuation: var(--text-muted, #999999);
  --shiki-gutter-border-color: var(--background-modifier-border, #292929);
  --shiki-gutter-text-color: var(--text-faint, #606060);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #999999);
  --shiki-highlight-neutral: var(--shiki-code-normal, #999999);
  --shiki-terminal-dots-color: var(--text-faint, #606060);
  --slider-track-background: var(--background-modifier-border, #292929);
  --small: 200px;
  --small-med: 300px;
  --status-bar-background: var(--background-secondary, #1f1f1f);
  --status-bar-border-color: var(--divider-color, #292929);
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #999999);
  --suggestion-background: var(--background-primary, #292929);
  --tab-background-active: var(--background-primary, #292929);
  --tab-container-background: var(--background-secondary, #1f1f1f);
  --tab-outline-color: var(--divider-color, #292929);
  --tab-switcher-background: var(--background-secondary, #1f1f1f);
  --tab-text-color: var(--text-faint, #606060);
  --tab-text-color-active: var(--text-muted, #999999);
  --tab-text-color-focused: var(--text-muted, #999999);
  --tab-text-color-focused-active: var(--text-muted, #999999);
  --tab-text-color-focused-active-current: var(--text-normal, #cccccc);
  --tab-text-color-focused-highlighted: var(--text-accent, #ee1166);
  --table-add-button-border-color: var(--background-modifier-border, #292929);
  --table-border-color: var(--background-modifier-border, #292929);
  --table-drag-handle-background-active: var(--table-selection-border-color, #ee1166);
  --table-drag-handle-color: var(--text-faint, #606060);
  --table-drag-handle-color-active: var(--text-on-accent, #292929);
  --table-header-border-color: var(--table-border-color, #292929);
  --table-header-color: var(--text-normal, #cccccc);
  --table-selection-border-color: var(--interactive-accent, #ee1166);
  --tag-color: var(--text-accent, #ee1166);
  --tag-color-hover: var(--text-accent, #ee1166);
  --tall: 700px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #FFFFFF));
  --text-accent: var(--color-accent, #ee1166);
  --text-accent-b: #FFFFFF;
  --text-accent-hover: var(--color-accent-2, #FFFFFF);
  --text-error: var(--color-red, darkred);
  --text-error-hover: red;
  --text-faint: var(--color-base-50, #606060);
  --text-highlight-bg-active: #E7CC8855;
  --text-muted: var(--color-base-70, #999999);
  --text-normal: var(--color-base-100, #cccccc);
  --text-on-accent: var(--background-primary, #292929);
  --text-selection: var(--text-highlight-bg-active, #E7CC8855);
  --tiny: 100px;
  --titlebar-background: var(--background-secondary, #1f1f1f);
  --titlebar-background-focused: var(--background-secondary-alt, #292929);
  --titlebar-border-color: var(--background-modifier-border, #292929);
  --titlebar-text-color: var(--text-muted, #999999);
  --titlebar-text-color-focused: var(--text-normal, #cccccc);
  --vault-profile-color: var(--text-normal, #cccccc);
  --vault-profile-color-hover: var(--vault-profile-color, #cccccc);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #1f1f1f);
  background-color: var(--tab-container-background, rgb(31, 31, 31));
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(41, 41, 41));
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(31, 31, 31));
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 41, 41);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #1f1f1f);
  background-color: var(--tab-container-background, rgb(31, 31, 31));
  border-left-color: rgb(41, 41, 41);
  color: rgb(204, 204, 204);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #292929;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: darkred;
  --background-modifier-error-hover: red;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #292929;
  --background-modifier-form-field-hover: #292929;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #CBFF8C;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #292929;
  --background-primary-alt: #292929;
  --background-secondary: #1f1f1f;
  --background-secondary-alt: #292929;
  --blockquote-border-color: #ee1166;
  --blur-background: color-mix(in srgb, #292929 65%, transparent) linear-gradient(#292929, color-mix(in srgb, #292929 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --box-shadow: 6px 8px 7px #121212;
  --button-corner-shape: round;
  --button-radius: 5px;
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
  --canvas-background: #292929;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #cccccc;
  --checkbox-border-color: #606060;
  --checkbox-border-color-hover: #999999;
  --checkbox-color: #ee1166;
  --checkbox-color-hover: #FFFFFF;
  --checkbox-marker-color: #292929;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #999999;
  --clickable-icon-radius: 4px;
  --code-background: #292929;
  --code-border-color: #292929;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #606060;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #cccccc;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #999999;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #606060;
  --collapse-icon-color-collapsed: #ee1166;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #292929;
  --divider-color-hover: #ee1166;
  --divider-vertical-height: 100%;
  --dropdown-background: #CBFF8C;
  --dropdown-background-hover: #999999;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #CBFF8C;
  --flair-color: #cccccc;
  --font-interface: '??', '??', "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "JetBrains Mono Black", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #d4d4d4;
  --graph-node: #999999;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: #ee1166;
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #606060;
  --graph-text: #cccccc;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #606060;
  --heading-spacing: 2.5rem;
  --hr-color: #292929;
  --interactive-accent: #ee1166;
  --interactive-accent-b: #FFFFFF;
  --interactive-accent-hover: #FFFFFF;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #999999;
  --interactive-normal: #CBFF8C;
  --interactive-success: #CBFF8C;
  --link-color: #ee1166;
  --link-color-hover: #FFFFFF;
  --link-external-color: #ee1166;
  --link-external-color-hover: #FFFFFF;
  --link-unresolved-color: #ee1166;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #1f1f1f;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #292929;
  --pdf-page-background: #292929;
  --pdf-sidebar-background: #292929;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #292929 65%, transparent) linear-gradient(#292929, color-mix(in srgb, #292929 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 11px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #999999;
  --search-icon-color: #999999;
  --search-result-background: #292929;
  --setting-group-heading-color: #cccccc;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #292929;
  --setting-items-border-color: #292929;
  --setting-items-padding: 20px;
  --setting-items-radius: 11px;
  --shiki-active-tab-border-color: #999999;
  --shiki-code-background: #292929;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #606060;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #999999;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #999999;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #292929;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #606060;
  --shiki-gutter-text-color-highlight: #999999;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #999999;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #606060;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #292929;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #292929;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #292929;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #1f1f1f;
  --tab-switcher-menubar-background: linear-gradient(to top, #1f1f1f, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #606060;
  --tab-text-color-active: #999999;
  --tab-text-color-focused: #999999;
  --tab-text-color-focused-active: #999999;
  --tab-text-color-focused-active-current: #cccccc;
  --tab-text-color-focused-highlighted: #ee1166;
  --table-add-button-border-color: #292929;
  --table-add-button-border-width: 1px;
  --table-border-color: #292929;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #ee1166;
  --table-drag-handle-color: #606060;
  --table-drag-handle-color-active: #292929;
  --table-header-background: transparent;
  --table-header-border-color: #292929;
  --table-header-border-width: 1px;
  --table-header-color: #cccccc;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #ee1166;
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #ee1166;
  --tag-color-hover: #ee1166;
  --tag-size: 0.875em;
  --text-accent: #ee1166;
  --text-accent-hover: #FFFFFF;
  --text-error: darkred;
  --text-faint: #606060;
  --text-highlight-bg: #E7CC88FF;
  --text-muted: #999999;
  --text-normal: #cccccc;
  --text-on-accent: #292929;
  --text-selection: #E7CC8855;
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
  border-bottom-color: rgb(96, 96, 96);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(96, 96, 96);
  border-left-width: 0px;
  border-right-color: rgb(96, 96, 96);
  border-right-width: 0px;
  border-top-color: rgb(96, 96, 96);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--interactive-accent-b, rgb(96, 96, 96));
  content: "#   ";
  font-family: var(--h1-font, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1, 20px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.6px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
  font-family: var(--header-font, "iA Writer Quattro V Black", serif);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
  font-family: var(--alt-font, "Recursive Sn Csl St", serif);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
  font-family: var(--alt-font, "Recursive Sn Csl St", serif);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
  font-family: var(--header-font, "iA Writer Quattro V Black", serif);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(231, 204, 136));
  color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  outline: rgb(18, 18, 18) none 0px;
  text-decoration-color: rgb(18, 18, 18);
}

html[saved-theme="light"] body del {
  color: var(--text-faint, rgb(96, 96, 96));
  outline: rgb(96, 96, 96) none 0px;
  text-decoration: line-through rgb(139, 0, 0);
  text-decoration-color: var(--text-error, rgb(139, 0, 0));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(0, 0, 0);
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(0, 0, 0);
  border-width: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(0, 0, 0));
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(238, 17, 102));
  font-weight: var(--link-weight, 700);
  outline: rgb(238, 17, 102) none 0px;
  text-decoration-color: rgb(238, 17, 102);
  transition: 0.2s;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(238, 17, 102));
  font-weight: var(--link-weight, 700);
  outline: rgb(238, 17, 102) none 0px;
  text-decoration-color: rgb(238, 17, 102);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(238, 17, 102));
  font-weight: var(--link-weight, 700);
  outline: rgb(238, 17, 102) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(238, 17, 102));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body dt {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body ol > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body ul > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(96, 96, 96));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  font-family: var(--header-font, "iA Writer Quattro V Black", serif);
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body table {
  border-top-left-radius: var(--radius-l, 11px);
  color: rgb(204, 204, 204);
  width: 1042.88px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(204, 204, 204);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(204, 204, 204);
  border-right-width: 0px;
  border-top-color: rgb(204, 204, 204);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(204, 204, 204));
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body th {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  border-bottom-color: rgb(238, 17, 102);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 41, 41);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(41, 41, 41);
  border-right-width: 0px;
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: var(--radius-l, 11px);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-accent-b, rgb(255, 255, 255));
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body tr {
  border-bottom-left-radius: var(--radius-m, 4px);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: var(--interactive-accent-b, rgb(255, 255, 255));
  font-family: var(--font-monospace, "JetBrains Mono Black", monospace);
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(41, 41, 41));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body figcaption {
  color: rgb(204, 204, 204);
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #292929);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(41, 41, 41));
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(238, 17, 102);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 7px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 7px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 41, 41);
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
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(204, 204, 204);
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
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: var(--text-normal, rgb(204, 204, 204));
  font-family: var(--default-font, "Lexend Deca Light", monospace);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--opacity-background, rgba(41, 41, 41, 0.376));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  box-shadow: var(--box-shadow, rgb(18, 18, 18) 6px 8px 7px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--interactive-accent-hover, rgb(255, 255, 255));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--interactive-accent-hover, rgb(255, 255, 255));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  color: var(--interactive-accent-hover, rgb(255, 255, 255));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  border-bottom-color: rgb(238, 17, 102);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 11px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--interactive-accent-hover, rgb(255, 255, 255));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  color: var(--interactive-accent-hover, rgb(255, 255, 255));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #ee1166);
  --pill-color-hover: var(--tag-color-hover, #ee1166);
  --pill-color-remove: var(--tag-color, #ee1166);
  --pill-color-remove-hover: var(--tag-color-hover, #ee1166);
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(238, 17, 102);
}

html[saved-theme="light"] body h1 {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(204, 204, 204));
}

html[saved-theme="light"] body h2 {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(204, 204, 204));
}

html[saved-theme="light"] body h3 {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
}

html[saved-theme="light"] body h4 {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
}

html[saved-theme="light"] body h5 {
  color: var(--interactive-accent-b, rgb(255, 255, 255));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(204, 204, 204));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  margin-bottom: 10px;
  margin-top: 10px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(204, 204, 204);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: var(--icon-color, rgb(153, 153, 153));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(31, 31, 31));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(153, 153, 153));
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(153, 153, 153);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(204, 204, 204);
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: var(--icon-color, rgb(153, 153, 153));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(96, 96, 96));
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(204, 204, 204));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(41, 41, 41));
  border-color: rgb(204, 204, 204);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: var(--background-modifier-form-field-highlighted, rgb(18, 18, 18));
  border-color: rgb(41, 41, 41) rgb(41, 41, 41) rgb(238, 17, 102);
  color: var(--text-accent-b, rgb(255, 255, 255));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: var(--text-muted, rgb(153, 153, 153));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(41, 41, 41);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, #ee1166);
  --pill-color-hover: var(--tag-color-hover, #ee1166);
  --pill-color-remove: var(--tag-color, #ee1166);
  --pill-color-remove-hover: var(--tag-color-hover, #ee1166);
  color: var(--pill-color, rgb(238, 17, 102));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(41, 41, 41));
  color: var(--text-normal, rgb(204, 204, 204));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(31, 31, 31));
  border-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--background-secondary, rgb(31, 31, 31));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(204, 204, 204);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(31, 31, 31));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(204, 204, 204));
  font-family: "??", "??", "Lexend Deca Light", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--text-normal, rgb(153, 153, 153));
  font-family: var(--default-font, "Lexend Deca Light", monospace);
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(41, 41, 41));
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: var(--code-normal, rgb(204, 204, 204));
  font-family: var(--font-monospace, "JetBrains Mono Black", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="light"] body sub {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body summary {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body sup {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body ul.tags > li {
  color: var(--tag-color, rgb(238, 17, 102));
}`,
  },
};
