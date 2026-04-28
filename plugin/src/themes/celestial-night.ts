import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "celestial-night",
    modes: ["dark"],
    variations: [],
    fonts: ["bookerly", "hatolie", "merienda"],
    fontFiles: [
      {
        family: "Bookerly",
        style: "italic",
        weight: "normal",
        file: "bookerly.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Bookerly",
        style: "normal",
        weight: "bold",
        file: "bookerly-1.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Bookerly",
        style: "italic",
        weight: "bold",
        file: "bookerly-2.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Bookerly",
        style: "italic",
        weight: "300",
        file: "bookerly-3.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Bookerly",
        style: "normal",
        weight: "300",
        file: "bookerly-4.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Bookerly",
        style: "normal",
        weight: "normal",
        file: "bookerly-5.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Hatolie",
        style: "normal",
        weight: "normal",
        file: "hatolie.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Merienda",
        style: "normal",
        weight: "bold",
        file: "merienda.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Merienda",
        style: "normal",
        weight: "normal",
        file: "merienda-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "celestial-night-theme",
  },
  dark: {
    base: `:root:root {
  --accent-h: 41;
  --accent-l: 100%;
  --accent-s: 100%;
  --background-modifier-active-hover: hsla(41, 100%, 100%, 0.1);
  --background-modifier-border: #3b3f56;
  --background-modifier-border-focus: #515b71;
  --background-modifier-border-hover: #3b445d;
  --background-modifier-error: #e46f7d;
  --background-modifier-error-hover: #e46f7d;
  --background-modifier-error-rgb: 228, 111, 125;
  --background-modifier-form-field: #313952;
  --background-modifier-form-field-hover: #313952;
  --background-modifier-success: #a5d18c;
  --background-modifier-success-rgb: 165, 209, 140;
  --background-primary: #2a3141;
  --background-primary-alt: #222a38;
  --background-secondary: #262b3b;
  --background-secondary-alt: #1d232f;
  --bases-cards-background: #2a3141;
  --bases-cards-cover-background: #222a38;
  --bases-cards-radius: 26px;
  --bases-cards-shadow: 0 0 0 1px #3b3f56;
  --bases-cards-shadow-hover: 0 0 0 1px #3b445d;
  --bases-embed-border-color: #3b3f56;
  --bases-embed-border-radius: 20px;
  --bases-group-heading-property-color: #8890a6;
  --bases-table-border-color: #3b3f56;
  --bases-table-cell-background-active: #2a3141;
  --bases-table-cell-background-disabled: #222a38;
  --bases-table-cell-background-selected: hsla(41, 100%, 100%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #515b71;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(41, 100%, 100%);
  --bases-table-container-border-radius: 20px;
  --bases-table-group-background: #222a38;
  --bases-table-header-background: #2a3141;
  --bases-table-header-color: #8890a6;
  --bases-table-summary-background: #2a3141;
  --blockquote-background-color: #262b3b;
  --blockquote-border-color: #8890a6;
  --blockquote-color: white;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, #1d232f 65%, transparent) linear-gradient(#1d232f, color-mix(in srgb, #1d232f 65%, transparent));
  --bodyFont: var(--font-text, Bookerly, Source Han Serif, Noto Serif JP, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --callout-blend-mode: normal;
  --callout-bug: 228, 111, 125;
  --callout-default: 86, 174, 214;
  --callout-error: 228, 111, 125;
  --callout-example: 181, 132, 199;
  --callout-fail: 228, 111, 125;
  --callout-important: 111, 210, 194;
  --callout-info: 86, 174, 214;
  --callout-question: 251, 179, 108;
  --callout-radius: 2em;
  --callout-success: 165, 209, 140;
  --callout-summary: 111, 210, 194;
  --callout-tip: 111, 210, 194;
  --callout-title-color: white;
  --callout-todo: 86, 174, 214;
  --callout-warning: 251, 179, 108;
  --canvas-background: #2a3141;
  --canvas-card-label-color: #5f6980;
  --canvas-color-1: 228, 111, 125;
  --canvas-color-2: 251, 179, 108;
  --canvas-color-3: 255, 222, 115;
  --canvas-color-4: 165, 209, 140;
  --canvas-color-5: 111, 210, 194;
  --canvas-color-6: 181, 132, 199;
  --canvas-controls-radius: 20px;
  --canvas-dot-pattern: #1d232f;
  --caret-color: #cdd1df;
  --checkbox-border-color: #5f6980;
  --checkbox-border-color-hover: #8890a6;
  --checkbox-color: white;
  --checkbox-color-hover: #cdd1df;
  --checkbox-marker-color: transparent;
  --checkbox-radius: 20px;
  --checkbox-size: 20px;
  --checklist-done-color: white;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 20px;
  --code-background: #222a38;
  --code-border-color: #3b3f56;
  --code-comment: #5f6980;
  --code-function: #ffde73;
  --code-important: #fbb36c;
  --code-keyword: #ff94c8;
  --code-normal: #cdd1df;
  --code-operator: #e46f7d;
  --code-property: #6fd2c2;
  --code-punctuation: #8890a6;
  --code-radius: 20px;
  --code-string: #a5d18c;
  --code-tag: #e46f7d;
  --code-value: #b584c7;
  --codeFont: var(--font-text, Bookerly, Source Han Serif, Noto Serif JP, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: #5f6980;
  --collapse-icon-color-collapsed: hsl(38, 102%, 115%);
  --color-accent: hsl(41, 100%, 100%);
  --color-accent-1: hsl(38, 102%, 115%);
  --color-accent-2: hsl(36, 105%, 129%);
  --color-accent-hsl: 41, 100%, 100%;
  --color-base-00: #2a3141;
  --color-base-05: #252b3a;
  --color-base-10: #222a38;
  --color-base-100: #cdd1df;
  --color-base-20: #262b3b;
  --color-base-25: #313952;
  --color-base-30: #1d232f;
  --color-base-35: #3b445d;
  --color-base-40: #515b71;
  --color-base-50: #5f6980;
  --color-base-60: #080b17;
  --color-base-70: #8890a6;
  --color-blue: #56aed6;
  --color-blue-rgb: 86, 174, 214;
  --color-cyan: #6fd2c2;
  --color-cyan-rgb: 111, 210, 194;
  --color-green: #a5d18c;
  --color-green-rgb: 165, 209, 140;
  --color-orange: #fbb36c;
  --color-orange-rgb: 251, 179, 108;
  --color-pink: #ff94c8;
  --color-pink-rgb: 255, 148, 200;
  --color-purple: #b584c7;
  --color-purple-rgb: 181, 132, 199;
  --color-red: #e46f7d;
  --color-red-rgb: 228, 111, 125;
  --color-yellow: #ffde73;
  --color-yellow-rgb: 255, 222, 115;
  --dark: var(--text-normal, #cdd1df);
  --darkgray: var(--text-normal, #cdd1df);
  --divider-color: #3b3f56;
  --divider-color-hover: hsl(41, 100%, 100%);
  --dropdown-background: #1d232f;
  --dropdown-background-hover: #3b445d;
  --embed-block-shadow-hover: 0 0 0 1px #3b3f56, inset 0 0 0 1px #3b3f56;
  --embed-border-start: 2px solid hsl(41, 100%, 100%);
  --file-header-background: #2a3141;
  --file-header-background-focused: #2a3141;
  --file-header-font: Avenir Next, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #1d232f;
  --flair-color: #cdd1df;
  --font-cursive: 'Merienda';
  --font-headings: 'Merienda';
  --font-interface: Avenir Next, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'Avenir Next';
  --font-mermaid: Bookerly, Source Han Serif, Noto Serif JP, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: Bookerly, Source Han Serif, Noto Serif JP, Arial';
  --font-sans: 'Avenir Next';
  --font-serif: 'Bookerly';
  --font-text: Bookerly, Source Han Serif, Noto Serif JP, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Bookerly', 'Source Han Serif', 'Noto Serif JP';
  --footnote-divider-color: #3b3f56;
  --footnote-id-color: #8890a6;
  --footnote-id-color-no-occurrences: #5f6980;
  --footnote-radius: 20px;
  --glow-color: white;
  --glow-effect-m: 0px 0px 30px rgb(255, 255, 255) , 0px 0px 10px rgba(93, 182, 255, 0.577);
  --glow-effect-s: 0px 0px 20px rgba(255, 255, 255, 0.535) , 0px 0px 5px rgba(93, 182, 255, 0.586);
  --graph-line: #3b445d;
  --graph-node: #8890a6;
  --graph-node-attachment: #ffde73;
  --graph-node-focused: hsl(38, 102%, 115%);
  --graph-node-tag: #a5d18c;
  --graph-node-unresolved: #5f6980;
  --graph-text: #cdd1df;
  --gray: var(--text-muted, #8890a6);
  --h1-font: 'Merienda';
  --h1-size: 2em;
  --h1-weight: 900;
  --h2-font: 'Merienda';
  --h2-weight: 800;
  --h3-font: 'Merienda';
  --h3-weight: 700;
  --h4-font: 'Merienda';
  --h4-weight: 600;
  --h5-font: 'Merienda';
  --h5-weight: 500;
  --h6-font: 'Merienda';
  --h6-weight: 400;
  --headerFont: var(--font-text, Bookerly, Source Han Serif, Noto Serif JP, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-font: 'Merienda';
  --heading-formatting: #5f6980;
  --highlight: var(--background-modifier-active-hover, hsla(41, 100%, 100%, 0.1));
  --hr-color: #3b3f56;
  --icon-color: #8890a6;
  --icon-color-active: hsl(38, 102%, 115%);
  --icon-color-focused: #cdd1df;
  --icon-color-hover: #8890a6;
  --inline-title-font: Hatolie, Bookerly, Source Han Serif, Noto Serif JP, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --inline-title-size: 4em;
  --inline-title-weight: normal;
  --input-date-separator: #5f6980;
  --input-placeholder-color: #5f6980;
  --interactive-accent: hsl(41, 100%, 100%);
  --interactive-accent-hover: hsl(38, 102%, 115%);
  --interactive-accent-hsl: 41, 100%, 100%;
  --interactive-hover: #3b445d;
  --interactive-normal: #1d232f;
  --light: var(--background-primary, #2a3141);
  --lightgray: var(--background-secondary, #262b3b);
  --link-color: hsl(38, 102%, 115%);
  --link-color-hover: hsl(36, 105%, 129%);
  --link-decoration-color-active: hsla(41, 100%, 100%, 0.5);
  --link-external-color: hsl(38, 102%, 115%);
  --link-external-color-hover: hsl(36, 105%, 129%);
  --link-unresolved-color: hsl(38, 102%, 115%);
  --link-unresolved-decoration-color: hsla(41, 100%, 100%, 0.3);
  --list-bullet-size: 0.25em;
  --list-marker-color: white;
  --list-marker-color-collapsed: hsl(38, 102%, 115%);
  --list-marker-color-hover: white;
  --menu-background: #262b3b;
  --menu-border-color: #3b445d;
  --menu-radius: 26px;
  --metadata-border-color: #3b3f56;
  --metadata-divider-color: #3b3f56;
  --metadata-input-font: Avenir Next, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #cdd1df;
  --metadata-label-font: Avenir Next, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #8890a6;
  --metadata-label-text-color-hover: #8890a6;
  --metadata-property-box-shadow-focus: 0 0 0 2px #515b71;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3b445d;
  --modal-background: #2a3141;
  --modal-border-color: #515b71;
  --modal-radius: 30px;
  --nav-collapse-icon-color: #5f6980;
  --nav-collapse-icon-color-collapsed: #5f6980;
  --nav-heading-color: #cdd1df;
  --nav-heading-color-collapsed: #5f6980;
  --nav-heading-color-collapsed-hover: #8890a6;
  --nav-heading-color-hover: #cdd1df;
  --nav-item-background-selected: hsla(41, 100%, 100%, 0.15);
  --nav-item-color: #8890a6;
  --nav-item-color-active: #cdd1df;
  --nav-item-color-highlighted: hsl(38, 102%, 115%);
  --nav-item-color-hover: #cdd1df;
  --nav-item-color-selected: #cdd1df;
  --nav-item-radius: 20px;
  --nav-tag-color: #5f6980;
  --nav-tag-color-active: #8890a6;
  --nav-tag-color-hover: #8890a6;
  --nav-tag-radius: 20px;
  --pdf-background: #2a3141;
  --pdf-page-background: #2a3141;
  --pdf-shadow: 0 0 0 1px #3b3f56;
  --pdf-sidebar-background: #2a3141;
  --pdf-thumbnail-shadow: 0 0 0 1px #3b3f56;
  --pill-border-color: #3b3f56;
  --pill-border-color-hover: #3b445d;
  --pill-color: #8890a6;
  --pill-color-hover: #cdd1df;
  --pill-color-remove: #5f6980;
  --pill-color-remove-hover: hsl(38, 102%, 115%);
  --prompt-background: #2a3141;
  --prompt-border-color: #515b71;
  --radius-l: 30px;
  --radius-m: 26px;
  --radius-s: 20px;
  --radius-xl: 45px;
  --raised-background: color-mix(in srgb, #1d232f 65%, transparent) linear-gradient(#1d232f, color-mix(in srgb, #1d232f 65%, transparent));
  --ribbon-background: #262b3b;
  --ribbon-background-collapsed: #2a3141;
  --scrollbar-radius: 30px;
  --search-clear-button-color: #8890a6;
  --search-icon-color: #8890a6;
  --search-result-background: #2a3141;
  --secondary: var(--text-accent, hsl(38, 102%, 115%));
  --setting-group-heading-color: #cdd1df;
  --setting-items-background: #222a38;
  --setting-items-border-color: #3b3f56;
  --setting-items-radius: 30px;
  --shiki-active-tab-border-color: #8890a6;
  --shiki-code-background: #222a38;
  --shiki-code-block-border-radius: 20px;
  --shiki-code-comment: #5f6980;
  --shiki-code-function: #a5d18c;
  --shiki-code-important: #fbb36c;
  --shiki-code-keyword: #ff94c8;
  --shiki-code-normal: #8890a6;
  --shiki-code-property: #6fd2c2;
  --shiki-code-punctuation: #8890a6;
  --shiki-code-string: #ffde73;
  --shiki-code-value: #b584c7;
  --shiki-gutter-border-color: #3b3f56;
  --shiki-gutter-text-color: #5f6980;
  --shiki-gutter-text-color-highlight: #8890a6;
  --shiki-highlight-green: rgba(165, 209, 140, 0.5);
  --shiki-highlight-green-background: rgba(165, 209, 140, 0.1);
  --shiki-highlight-neutral: #8890a6;
  --shiki-highlight-red: rgba(228, 111, 125, 0.5);
  --shiki-highlight-red-background: rgba(228, 111, 125, 0.1);
  --shiki-terminal-dots-color: #5f6980;
  --slider-thumb-border-color: #3b445d;
  --slider-track-background: #3b3f56;
  --status-bar-background: #262b3b;
  --status-bar-border-color: #3b3f56;
  --status-bar-radius: 26px 0 0 0;
  --status-bar-text-color: #8890a6;
  --suggestion-background: #2a3141;
  --sync-avatar-color-1: #e46f7d;
  --sync-avatar-color-2: #fbb36c;
  --sync-avatar-color-3: #ffde73;
  --sync-avatar-color-4: #a5d18c;
  --sync-avatar-color-5: #6fd2c2;
  --sync-avatar-color-6: #56aed6;
  --sync-avatar-color-7: #b584c7;
  --sync-avatar-color-8: #ff94c8;
  --tab-background-active: #2a3141;
  --tab-container-background: #262b3b;
  --tab-divider-color: #3b445d;
  --tab-outline-color: #3b3f56;
  --tab-radius: 20px;
  --tab-switcher-background: #262b3b;
  --tab-switcher-menubar-background: linear-gradient(to top, #262b3b, transparent);
  --tab-switcher-preview-radius: 45px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(41, 100%, 100%);
  --tab-text-color: #5f6980;
  --tab-text-color-active: #8890a6;
  --tab-text-color-focused: #8890a6;
  --tab-text-color-focused-active: #8890a6;
  --tab-text-color-focused-active-current: #cdd1df;
  --tab-text-color-focused-highlighted: hsl(38, 102%, 115%);
  --table-add-button-border-color: #3b3f56;
  --table-border-color: #3b3f56;
  --table-drag-handle-background-active: hsl(41, 100%, 100%);
  --table-drag-handle-color: #5f6980;
  --table-drag-handle-color-active: #2a3141;
  --table-header-border-color: #3b3f56;
  --table-header-color: #cdd1df;
  --table-selection: hsla(41, 100%, 100%, 0.1);
  --table-selection-border-color: hsl(41, 100%, 100%);
  --tag-background: #262b3b;
  --tag-background-hover: hsla(41, 100%, 100%, 0.2);
  --tag-border-color: hsla(41, 100%, 100%, 0.15);
  --tag-border-color-hover: hsla(41, 100%, 100%, 0.15);
  --tag-border-width: 1px;
  --tag-color: hsl(38, 102%, 115%);
  --tag-color-hover: hsl(38, 102%, 115%);
  --tag-radius: 1em;
  --tag-weight: 300;
  --tertiary: var(--text-accent-hover, hsl(36, 105%, 129%));
  --text-accent: hsl(38, 102%, 115%);
  --text-accent-hover: hsl(36, 105%, 129%);
  --text-error: #e46f7d;
  --text-faint: #5f6980;
  --text-muted: #8890a6;
  --text-normal: #cdd1df;
  --text-on-accent: #2a3141;
  --text-selection: hsla(41, 100%, 100%, 0.33);
  --text-success: #a5d18c;
  --text-warning: #fbb36c;
  --textHighlight: var(--background-modifier-active-hover, hsla(41, 100%, 100%, 0.1));
  --titleFont: var(--font-text, Bookerly, Source Han Serif, Noto Serif JP, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: #262b3b;
  --titlebar-background-focused: #1d232f;
  --titlebar-border-color: #3b3f56;
  --titlebar-text-color: #8890a6;
  --titlebar-text-color-focused: #cdd1df;
  --vault-profile-color: #cdd1df;
  --vault-profile-color-hover: #cdd1df;
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 43, 59);
  color: rgb(205, 209, 223);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(42, 49, 65);
  color: rgb(205, 209, 223);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 43, 59);
  color: rgb(205, 209, 223);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 63, 86);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 43, 59);
  border-left-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration-color: rgb(205, 209, 223);
}

html body .markdown-rendered p > em, html em {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration-color: rgb(205, 209, 223);
}

html body .markdown-rendered p > i, html i {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration-color: rgb(205, 209, 223);
}

html body .markdown-rendered p > strong, html strong {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration-color: rgb(205, 209, 223);
}

html body .text-highlight {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration-color: rgb(205, 209, 223);
}

html body del {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration-color: rgb(205, 209, 223);
}

html body h1.article-title {
  color: rgb(205, 209, 223);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(95, 105, 128);
  border-radius: 20px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
}

html body p {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(136, 144, 166) none 0px;
  text-decoration-color: rgb(136, 144, 166);
}`,
    links: `html body a.external-link, html footer a {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
  transition: 0.25s;
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
}

html body a.internal-link.broken {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
}`,
    lists: `html body dd {
  color: rgb(205, 209, 223);
}

html body dt {
  color: rgb(205, 209, 223);
}

html body ol > li {
  color: rgb(205, 209, 223);
}

html body ul > li {
  color: rgb(205, 209, 223);
}

html body ul.overflow {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(95, 105, 128);
}

html body blockquote {
  background-color: rgb(38, 43, 59);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body table {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 201.891px;
}

html body td {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}

html body th {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}`,
    code: `html body code {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body pre:has(> code) {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body figcaption {
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html body img {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-radius: 20px;
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  filter: brightness(0.9);
}

html body video {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html body .footnotes {
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

html body .transclude {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body .transclude-inner {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  margin-left: -30px;
  width: 20px;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(205, 209, 223);
}

html li.task-list-item[data-task="body"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="."] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="="] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(255, 255, 255);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(255, 255, 255);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="y"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 179, 108);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(95, 105, 128);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 222, 115);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 210, 194);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 174, 214);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 111, 125);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 111, 125);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 111, 125);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 111, 125);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 174, 214);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 222, 115);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 222, 115);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 132, 199);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 111, 125);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 209, 140);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 209, 140);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 209, 140);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="bug"] {
  --callout-color: 228, 111, 125;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="danger"] {
  --callout-color: 228, 111, 125;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="failure"] {
  --callout-color: 228, 111, 125;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="info"] {
  --callout-color: 86, 174, 214;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="note"] {
  --callout-color: 86, 174, 214;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="question"] {
  --callout-color: 251, 179, 108;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="success"] {
  --callout-color: 165, 209, 140;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="todo"] {
  --callout-color: 86, 174, 214;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="warning"] {
  --callout-color: 251, 179, 108;
  background: rgb(34, 42, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
  color: rgb(86, 174, 214);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(205, 209, 223);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(49, 57, 82);
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(42, 49, 65);
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration-color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 43, 59);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html body a.internal-link.tag-link::before {
  color: rgb(255, 255, 255);
}

html body h1 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h1.article-title {
  color: rgb(255, 255, 255);
  font-size: 64px;
  font-weight: 400;
}

html body h2 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Hatolie, "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h3 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h4 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h5 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h6 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body hr {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
}`,
    scrollbars: `html body .callout {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  padding-left: 25px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(205, 209, 223);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}`,
    footer: `html body footer {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 26px;
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(136, 144, 166);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 144, 166);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body li.section-li > .section .meta {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 144, 166);
}

html body ul.section-ul {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}

html body .darkmode svg {
  color: rgb(136, 144, 166);
  stroke: rgb(136, 144, 166);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}

html body .breadcrumb-element p {
  color: rgb(95, 105, 128);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(205, 209, 223);
}

html body .canvas-node-content {
  color: rgb(205, 209, 223);
}

html body .canvas-node-file {
  color: rgb(205, 209, 223);
}

html body .canvas-node-group {
  border-color: rgb(205, 209, 223);
}

html body .canvas-sidebar {
  background-color: rgb(38, 43, 59);
  border-color: rgb(205, 209, 223);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}`,
    properties: `html body .metadata {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
}

html body .metadata-properties {
  border-bottom-color: rgb(136, 144, 166);
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  color: rgb(136, 144, 166);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .note-properties {
  background-color: rgb(38, 43, 59);
  border-color: rgb(59, 63, 86) rgb(59, 63, 86) rgb(59, 63, 86) rgb(255, 255, 255);
  border-radius: 20px;
}

html body .note-properties-key {
  color: rgb(136, 144, 166);
}

html body .note-properties-row {
  border-color: rgb(136, 144, 166);
}

html body .note-properties-tags {
  background-color: rgb(38, 43, 59);
  border-radius: 14px;
  color: rgb(255, 255, 255);
}

html body .note-properties-value {
  color: rgb(136, 144, 166);
}

html body div#quartz-root {
  background-color: rgb(42, 49, 65);
  color: rgb(205, 209, 223);
}

html body ol.overflow {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    stacked: `html body .stacked-page {
  background-color: rgb(38, 43, 59);
  border-color: rgb(205, 209, 223);
}

html body .stacked-page-header {
  background-color: rgb(29, 35, 47);
}

html body .stacked-page.active {
  border-color: rgb(205, 209, 223);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

html body .navigation-progress {
  background-color: rgb(38, 43, 59);
}

html body .page-header h2.page-title {
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(205, 209, 223);
}

html body details {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body input[type=text] {
  border-bottom-color: rgb(136, 144, 166);
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body progress {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body sub {
  color: rgb(205, 209, 223);
}

html body summary {
  color: rgb(205, 209, 223);
}

html body sup {
  color: rgb(205, 209, 223);
}

html body ul.tags > li {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 12.25px;
  border-bottom-right-radius: 12.25px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 12.25px;
  border-top-right-radius: 12.25px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
  classSettings: {
    "theme-midnight": `.theme-dark, .theme-light {
--color-base-05: #2a3141;
--color-base-00: #25273a;
--color-base-10: #2e3046;
--color-base-20: #1d1f2f;
--color-base-25: #3a435d;
--color-base-30: #1d1f2f;
--color-base-35: #3b445d;
--color-base-40: #515b71;
--color-base-50: #5f6980;
--color-base-60: #70778e;
--color-base-70: #8890a6;
--color-base-100: #cdd1df;
--glow-color: rgb(206, 206, 247);
}
.theme-dark, .theme-light {
--color-base-05: #2a3141;
--color-base-00: #25273a;
--color-base-10: #2e3046;
--color-base-20: #1d1f2f;
--color-base-25: #3a435d;
--color-base-30: #1d1f2f;
--color-base-35: #3b445d;
--color-base-40: #515b71;
--color-base-50: #5f6980;
--color-base-60: #70778e;
--color-base-70: #8890a6;
--color-base-100: #cdd1df;
--glow-color: rgb(206, 206, 247);
}`,
    "theme-crescent": `.theme-dark, .theme-light {
--color-base-05: #2a3141;
--color-base-00: #1b1c2a;
--color-base-10: #25273a;
--color-base-20: #1d1f2f;
--color-base-25: #3a435d;
--color-base-30: #1d1f2f;
--color-base-35: #3b445d;
--color-base-40: #515b71;
--color-base-50: #5f6980;
--color-base-60: #70778e;
--color-base-70: #8890a6;
--color-base-100: #cdd1df;
--glow-color: rgb(190, 202, 220);
}
.theme-dark, .theme-light {
--color-base-05: #2a3141;
--color-base-00: #1b1c2a;
--color-base-10: #25273a;
--color-base-20: #1d1f2f;
--color-base-25: #3a435d;
--color-base-30: #1d1f2f;
--color-base-35: #3b445d;
--color-base-40: #515b71;
--color-base-50: #5f6980;
--color-base-60: #70778e;
--color-base-70: #8890a6;
--color-base-100: #cdd1df;
--glow-color: rgb(190, 202, 220);
}`,
    "theme-black": `.theme-dark, .theme-light {
--color-base-05: #1a242d;
--color-base-00: #14141e;
--color-base-10: #1d1f2e;
--color-base-20: #161721;
--color-base-25: #3a435d;
--color-base-30: #0d0d15;
--color-base-35: #2f3850;
--color-base-40: #424d63;
--color-base-50: #4f5971;
--color-base-60: #606882;
--color-base-70: #737b94;
--color-base-100: #b1b7cc;
--glow-color: rgb(145, 175, 243);
}
.theme-dark, .theme-light {
--color-base-05: #1a242d;
--color-base-00: #14141e;
--color-base-10: #1d1f2e;
--color-base-20: #161721;
--color-base-25: #3a435d;
--color-base-30: #0d0d15;
--color-base-35: #2f3850;
--color-base-40: #424d63;
--color-base-50: #4f5971;
--color-base-60: #606882;
--color-base-70: #737b94;
--color-base-100: #b1b7cc;
--glow-color: rgb(145, 175, 243);
}`,
  },
};
