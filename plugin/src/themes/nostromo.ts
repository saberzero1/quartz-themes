import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nostromo",
    modes: ["dark"],
    variations: [],
    fonts: ["share-tech-mono", "vt323"],
    fontFiles: [
      {
        family: "VT323",
        style: "normal",
        weight: "400",
        file: "vt323.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Share Tech Mono",
        style: "normal",
        weight: "400",
        file: "share-tech-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(232, 216, 163, 0.12);
  --background-modifier-border: rgba(168, 168, 168, 0.2);
  --background-modifier-border-focus: #e8d8a3;
  --background-modifier-border-hover: rgba(168, 168, 168, 0.3);
  --background-modifier-cover: rgba(29, 32, 33, 0.8);
  --background-modifier-form-field: #3c3836;
  --background-modifier-form-field-hover: #3c3836;
  --background-modifier-hover: rgba(232, 216, 163, 0.08);
  --background-primary: #1d2021;
  --background-secondary: #282828;
  --background-secondary-alt: #3c3836;
  --bases-cards-background: #1d2021;
  --bases-cards-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2);
  --bases-cards-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.3);
  --bases-embed-border-color: rgba(168, 168, 168, 0.2);
  --bases-group-heading-property-color: #d5c4a1;
  --bases-table-border-color: rgba(168, 168, 168, 0.2);
  --bases-table-cell-background-active: #1d2021;
  --bases-table-cell-shadow-active: 0 0 0 2px #e8d8a3;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e8d8a3;
  --bases-table-header-background: #1d2021;
  --bases-table-header-background-hover: rgba(232, 216, 163, 0.08);
  --bases-table-header-color: #d5c4a1;
  --bases-table-summary-background: #1d2021;
  --bases-table-summary-background-hover: rgba(232, 216, 163, 0.08);
  --bg-accent: #504945;
  --bg-primary: #1d2021;
  --bg-secondary: #282828;
  --bg-tertiary: #3c3836;
  --blockquote-border-color: #e8d8a3;
  --blue: #6b8ca4;
  --blue-rgb: 107, 140, 164;
  --blur-background: color-mix(in srgb, #3c3836 65%, transparent) linear-gradient(#3c3836, color-mix(in srgb, #3c3836 65%, transparent));
  --bodyFont: var(--font-text, system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --border-radius: 4px;
  --callout-color-abstract: 156, 122, 153;
  --callout-color-bug: 176, 108, 90;
  --callout-color-danger: 176, 108, 90;
  --callout-color-example: 156, 122, 153;
  --callout-color-failure: 176, 108, 90;
  --callout-color-info: 107, 140, 164;
  --callout-color-note: 107, 140, 164;
  --callout-color-question: 232, 216, 163;
  --callout-color-quote: 168, 168, 168;
  --callout-color-success: 122, 143, 113;
  --callout-color-tip: 122, 143, 113;
  --callout-color-todo: 168, 168, 168;
  --callout-color-warning: 194, 140, 92;
  --canvas-background: #1d2021;
  --canvas-card-label-color: #bdae93;
  --caret-color: #ebdbb2;
  --checkbox-border-color: #bdae93;
  --checkbox-border-color-hover: #d5c4a1;
  --checkbox-color: #e8d8a3;
  --checkbox-color-hover: #c28c5c;
  --checkbox-marker-color: #1d2021;
  --checklist-done-color: #d5c4a1;
  --code-border-color: rgba(168, 168, 168, 0.2);
  --code-bracket-background: rgba(232, 216, 163, 0.08);
  --code-comment: #bdae93;
  --code-normal: #ebdbb2;
  --code-punctuation: #d5c4a1;
  --codeFont: var(--font-monospace, "VT323", "Share Tech Mono", "Courier New", monospace);
  --collapse-icon-color: #bdae93;
  --collapse-icon-color-collapsed: #e8d8a3;
  --dark: var(--text-normal, #ebdbb2);
  --darkgray: var(--text-normal, #ebdbb2);
  --divider-color: rgba(168, 168, 168, 0.2);
  --divider-color-hover: rgba(168, 168, 168, 0.3);
  --dropdown-background: #3c3836;
  --dropdown-background-hover: rgba(232, 216, 163, 0.1);
  --embed-block-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.2), inset 0 0 0 1px rgba(168, 168, 168, 0.2);
  --embed-border-start: 2px solid #e8d8a3;
  --fg-primary: #ebdbb2;
  --fg-secondary: #d5c4a1;
  --fg-tertiary: #bdae93;
  --file-header-background: #1d2021;
  --file-header-background-focused: #1d2021;
  --file-header-font: "Share Tech Mono", "Courier New", monospace;
  --flair-background: #3c3836;
  --flair-color: #ebdbb2;
  --font-heading: "Share Tech Mono", "Courier New", monospace;
  --font-interface: "Share Tech Mono", "Courier New", monospace;
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-monospace: "VT323", "Share Tech Mono", "Courier New", monospace;
  --font-terminal: "VT323", "Share Tech Mono", "Courier New", monospace;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --footnote-divider-color: rgba(168, 168, 168, 0.2);
  --footnote-id-color: #d5c4a1;
  --footnote-id-color-no-occurrences: #bdae93;
  --footnote-input-background-active: rgba(232, 216, 163, 0.08);
  --graph-node: #d5c4a1;
  --graph-node-focused: #e8d8a3;
  --graph-node-unresolved: #bdae93;
  --graph-text: #ebdbb2;
  --gray: #a8a8a8;
  --gray-rgb: 168, 168, 168;
  --green: #7a8f71;
  --green-rgb: 122, 143, 113;
  --h1-color: #e8d8a3;
  --h1-size: 5rem;
  --h2-color: #e8d8a3;
  --h2-size: 4.5rem;
  --h3-color: #e8d8a3;
  --h3-line-height: 1.2;
  --h3-size: 4rem;
  --h4-color: #e8d8a3;
  --h4-line-height: 1.2;
  --h4-size: 3.5rem;
  --h5-color: #e8d8a3;
  --h5-line-height: 1.2;
  --h5-size: 3rem;
  --h6-color: #e8d8a3;
  --h6-line-height: 1.2;
  --h6-size: 2.5rem;
  --headerFont: var(--font-text, system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --heading-formatting: #bdae93;
  --heading-line-height: 1.2;
  --highlight: var(--text-highlight-bg, rgba(232, 216, 163, 0.3));
  --hr-color: #e8d8a3;
  --icon-color: #d5c4a1;
  --icon-color-active: #e8d8a3;
  --icon-color-focused: #ebdbb2;
  --icon-color-hover: #d5c4a1;
  --inline-title-color: #e8d8a3;
  --inline-title-font: "VT323", "Share Tech Mono", "Courier New", monospace;
  --inline-title-size: 5rem;
  --input-date-separator: #bdae93;
  --input-placeholder-color: #bdae93;
  --interactive-accent: #e8d8a3;
  --interactive-accent-hover: #c28c5c;
  --interactive-hover: rgba(232, 216, 163, 0.1);
  --interactive-normal: #3c3836;
  --light: var(--background-primary, #1d2021);
  --lightgray: var(--background-secondary, #282828);
  --link-color: #b06c5a;
  --link-color-hover: #b06c5a;
  --link-external-color: #b06c5a;
  --link-external-color-hover: #b06c5a;
  --link-unresolved-color: #e8d8a3;
  --list-marker-color: #bdae93;
  --list-marker-color-collapsed: #e8d8a3;
  --list-marker-color-hover: #d5c4a1;
  --menu-background: #282828;
  --menu-border-color: rgba(168, 168, 168, 0.3);
  --metadata-border-color: rgba(168, 168, 168, 0.2);
  --metadata-divider-color: rgba(168, 168, 168, 0.2);
  --metadata-input-background-active: rgba(232, 216, 163, 0.08);
  --metadata-input-font: "Share Tech Mono", "Courier New", monospace;
  --metadata-input-text-color: #ebdbb2;
  --metadata-label-background-active: rgba(232, 216, 163, 0.08);
  --metadata-label-font: "Share Tech Mono", "Courier New", monospace;
  --metadata-label-text-color: #d5c4a1;
  --metadata-label-text-color-hover: #d5c4a1;
  --metadata-property-background-active: rgba(232, 216, 163, 0.08);
  --metadata-property-box-shadow-focus: 0 0 0 2px #e8d8a3;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.3);
  --modal-background: #1d2021;
  --nav-collapse-icon-color: #bdae93;
  --nav-collapse-icon-color-collapsed: #bdae93;
  --nav-heading-color: #ebdbb2;
  --nav-heading-color-collapsed: #bdae93;
  --nav-heading-color-collapsed-hover: #d5c4a1;
  --nav-heading-color-hover: #ebdbb2;
  --nav-item-background-active: rgba(232, 216, 163, 0.08);
  --nav-item-background-hover: rgba(232, 216, 163, 0.08);
  --nav-item-color: #d5c4a1;
  --nav-item-color-active: #ebdbb2;
  --nav-item-color-highlighted: #e8d8a3;
  --nav-item-color-hover: #ebdbb2;
  --nav-item-color-selected: #ebdbb2;
  --nav-tag-color: #bdae93;
  --nav-tag-color-active: #d5c4a1;
  --nav-tag-color-hover: #d5c4a1;
  --orange: #c28c5c;
  --orange-rgb: 194, 140, 92;
  --padding: 12px;
  --pdf-background: #1d2021;
  --pdf-page-background: #1d2021;
  --pdf-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2);
  --pdf-sidebar-background: #1d2021;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2);
  --pill-border-color: rgba(168, 168, 168, 0.2);
  --pill-border-color-hover: rgba(168, 168, 168, 0.3);
  --pill-color: #d5c4a1;
  --pill-color-hover: #ebdbb2;
  --pill-color-remove: #bdae93;
  --pill-color-remove-hover: #e8d8a3;
  --prompt-background: #1d2021;
  --purple: #9c7a99;
  --purple-rgb: 156, 122, 153;
  --raised-background: color-mix(in srgb, #3c3836 65%, transparent) linear-gradient(#3c3836, color-mix(in srgb, #3c3836 65%, transparent));
  --red: #b06c5a;
  --red-rgb: 176, 108, 90;
  --ribbon-background: #282828;
  --ribbon-background-collapsed: #1d2021;
  --search-clear-button-color: #d5c4a1;
  --search-icon-color: #d5c4a1;
  --search-result-background: #1d2021;
  --secondary: var(--text-accent, #e8d8a3);
  --setting-group-heading-color: #ebdbb2;
  --setting-items-border-color: rgba(168, 168, 168, 0.2);
  --shiki-active-tab-border-color: #d5c4a1;
  --shiki-code-comment: #bdae93;
  --shiki-code-normal: #d5c4a1;
  --shiki-code-punctuation: #d5c4a1;
  --shiki-gutter-border-color: rgba(168, 168, 168, 0.2);
  --shiki-gutter-text-color: #bdae93;
  --shiki-gutter-text-color-highlight: #d5c4a1;
  --shiki-highlight-neutral: #d5c4a1;
  --shiki-terminal-dots-color: #bdae93;
  --slider-thumb-border-color: rgba(168, 168, 168, 0.3);
  --slider-track-background: rgba(168, 168, 168, 0.2);
  --status-bar-background: #282828;
  --status-bar-border-color: rgba(168, 168, 168, 0.2);
  --status-bar-text-color: #d5c4a1;
  --suggestion-background: #1d2021;
  --tab-background-active: #3c3836;
  --tab-container-background: #282828;
  --tab-divider-color: rgba(168, 168, 168, 0.3);
  --tab-outline-color: rgba(168, 168, 168, 0.2);
  --tab-switcher-background: #282828;
  --tab-switcher-menubar-background: linear-gradient(to top, #282828, transparent);
  --tab-text-color: #bdae93;
  --tab-text-color-active: #ebdbb2;
  --tab-text-color-focused: #d5c4a1;
  --tab-text-color-focused-active: #e8d8a3;
  --tab-text-color-focused-active-current: #ebdbb2;
  --tab-text-color-focused-highlighted: #e8d8a3;
  --table-add-button-border-color: rgba(168, 168, 168, 0.2);
  --table-border-color: rgba(168, 168, 168, 0.2);
  --table-drag-handle-background-active: #e8d8a3;
  --table-drag-handle-color: #bdae93;
  --table-drag-handle-color-active: #1d2021;
  --table-header-border-color: rgba(168, 168, 168, 0.2);
  --table-header-color: #ebdbb2;
  --table-selection-border-color: #e8d8a3;
  --tag-color: #e8d8a3;
  --tag-color-hover: #e8d8a3;
  --tertiary: var(--text-accent-hover, #c28c5c);
  --text-accent: #e8d8a3;
  --text-accent-hover: #c28c5c;
  --text-error: #b06c5a;
  --text-faint: #bdae93;
  --text-highlight-bg: rgba(232, 216, 163, 0.3);
  --text-muted: #d5c4a1;
  --text-normal: #ebdbb2;
  --text-on-accent: #1d2021;
  --text-selection: rgba(232, 216, 163, 0.2);
  --text-success: #7a8f71;
  --text-warning: #c28c5c;
  --textHighlight: var(--text-highlight-bg, rgba(232, 216, 163, 0.3));
  --titleFont: var(--font-text, system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  --titlebar-background: #1d2021;
  --titlebar-background-focused: #1d2021;
  --titlebar-border-color: rgba(168, 168, 168, 0.2);
  --titlebar-text-color: #d5c4a1;
  --titlebar-text-color-focused: #ebdbb2;
  --vault-profile-color: #ebdbb2;
  --vault-profile-color-hover: #ebdbb2;
  --yellow: #e8d8a3;
  --yellow-rgb: 232, 216, 163;
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(107, 140, 164) 20%, rgb(232, 216, 163) 50%, rgb(107, 140, 164) 80%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgb(235, 219, 178) 0px 0px 5px 0px;
  color: rgb(235, 219, 178);
  content: "";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, 867.642, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(168, 168, 168, 0.2);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 40, 40);
  border-left-color: rgba(168, 168, 168, 0.2);
  color: rgb(235, 219, 178);
}`,
    typography: `html body .markdown-rendered > h1 {
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(232, 216, 163) 0%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgba(232, 216, 163, 0.6);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 216, 163, 0.6);
  border-left-width: 0px;
  border-right-color: rgba(232, 216, 163, 0.6);
  border-right-width: 0px;
  border-top-color: rgba(232, 216, 163, 0.6);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgb(232, 216, 163) 0px 0px 5px 0px;
  color: rgba(232, 216, 163, 0.6);
  content: "▓▒░";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 48px;
  letter-spacing: -1.2px;
  line-height: 57.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body .markdown-rendered p > b, html b {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-weight: 700;
  outline: rgb(232, 216, 163) none 0px;
  text-decoration-color: rgb(232, 216, 163);
}

html body .markdown-rendered p > em, html em {
  color: rgb(194, 140, 92);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(194, 140, 92) none 0px;
  text-decoration-color: rgb(194, 140, 92);
}

html body .markdown-rendered p > i, html i {
  color: rgb(194, 140, 92);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(194, 140, 92) none 0px;
  text-decoration-color: rgb(194, 140, 92);
}

html body .markdown-rendered p > strong, html strong {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-weight: 700;
  outline: rgb(232, 216, 163) none 0px;
  text-decoration-color: rgb(232, 216, 163);
}

html body .text-highlight {
  background-color: rgba(232, 216, 163, 0.3);
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body del {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: glitch-flicker;
  animation-timing-function: ease-in-out;
  color: rgb(176, 108, 90);
  font-family: "Share Tech Mono", "Courier New", monospace;
  outline: rgb(176, 108, 90) none 0px;
  text-decoration-color: rgb(176, 108, 90);
  transform: matrix(1, 0, 0, 1, 0.192855, 0);
}

html body h1.article-title {
  color: rgb(235, 219, 178);
}

html body h2 {
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(232, 216, 163) 0%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgba(232, 216, 163, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 216, 163, 0.5);
  border-left-width: 0px;
  border-right-color: rgba(232, 216, 163, 0.5);
  border-right-width: 0px;
  border-top-color: rgba(232, 216, 163, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgb(232, 216, 163) 0px 0px 5px 0px;
  color: rgba(232, 216, 163, 0.5);
  content: "▒░";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 50.4px;
  letter-spacing: -0.792px;
  line-height: 60.48px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6.4px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h3 {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 216, 163, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 216, 163, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(232, 216, 163, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(232, 216, 163, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(232, 216, 163, 0.4);
  content: "░";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 51.2px;
  letter-spacing: -0.512px;
  line-height: 61.44px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 4.8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h4 {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 216, 163, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 216, 163, 0.5);
  border-left-width: 0px;
  border-right-color: rgba(232, 216, 163, 0.5);
  border-right-width: 0px;
  border-top-color: rgba(232, 216, 163, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(232, 216, 163, 0.5);
  content: "▸";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 50.4px;
  letter-spacing: -0.28px;
  line-height: 60.48px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 4.8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h5 {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 216, 163, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 216, 163, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(232, 216, 163, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(232, 216, 163, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(232, 216, 163, 0.4);
  content: "◦";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 48px;
  letter-spacing: -0.096px;
  line-height: 57.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 4.8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h6 {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-width: 0px;
  border-right-color: rgba(232, 216, 163, 0.3);
  border-right-width: 0px;
  border-top-color: rgba(232, 216, 163, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(232, 216, 163, 0.3);
  content: "·";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 48px;
  line-height: 57.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 4.8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 174, 147);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(232, 216, 163);
  border-color: rgb(232, 216, 163);
}

html body p {
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `html body a.external-link, html footer a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(156, 122, 153);
  border-bottom-color: rgb(156, 122, 153);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(156, 122, 153);
  border-left-width: 0px;
  border-right-color: rgb(156, 122, 153);
  border-right-width: 0px;
  border-top-color: rgb(156, 122, 153);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgb(156, 122, 153) 0px 0px 3px 0px;
  color: rgb(156, 122, 153);
  content: "";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(156, 122, 153) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(156, 122, 153);
  text-shadow: rgba(0, 0, 0, 0) 0px 0px 5px;
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(176, 108, 90);
  border-bottom-color: rgb(176, 108, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(176, 108, 90);
  border-left-width: 0px;
  border-right-color: rgb(176, 108, 90);
  border-right-width: 0px;
  border-top-color: rgb(176, 108, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgb(176, 108, 90) 0px 0px 3px 0px;
  color: rgb(176, 108, 90);
  content: "";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(176, 108, 90) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(176, 108, 90);
  text-shadow: rgba(0, 0, 0, 0) 0px 0px 5px;
}

html body a.internal-link.broken {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgb(232, 216, 163);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgb(232, 216, 163) 0px 0px 3px 0px;
  color: rgb(232, 216, 163);
  content: "";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(232, 216, 163) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(0, 0, 0, 0) 0px 0px 5px;
}`,
    lists: `html body ol > li {
  color: rgb(235, 219, 178);
}

html body ul > li {
  color: rgb(235, 219, 178);
}

html body ul.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(189, 174, 147);
}

html body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body table {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(232, 216, 163, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(232, 216, 163, 0.3);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin-top: 24px;
  width: 662px;
}

html body td {
  border-bottom-color: rgba(232, 216, 163, 0.15);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(232, 216, 163, 0.2);
  border-top-color: rgb(235, 219, 178);
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html body th {
  border-bottom-color: rgba(232, 216, 163, 0.4);
  border-bottom-width: 2px;
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(232, 216, 163);
  font-weight: 400;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  text-align: left;
}

html body thead {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-right-color: rgba(232, 216, 163, 0.3);
  border-top-color: rgba(232, 216, 163, 0.3);
}

html body tr {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-right-color: rgba(232, 216, 163, 0.3);
  border-top-color: rgba(232, 216, 163, 0.3);
}`,
    code: `html body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(122, 143, 113);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(122, 143, 113);
  border-right-color: rgb(122, 143, 113);
  border-top-color: rgba(122, 143, 113, 0.3);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(122, 143, 113);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
  padding-bottom: 19.2px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 19.2px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  overflow-x: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body figcaption {
  color: rgb(235, 219, 178);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body img {
  border-bottom-color: rgb(232, 216, 163);
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
}

html body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgba(232, 216, 163, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 2px;
  border-left-color: rgba(232, 216, 163, 0.5);
  border-left-width: 2px;
  border-right-color: rgba(232, 216, 163, 0.5);
  border-right-width: 2px;
  border-top-color: rgba(232, 216, 163, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 2px;
  margin-right: 12.8px;
  transition: 0.2s;
}

html body li.task-list-item[data-task="!"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(235, 219, 178);
}

html li.task-list-item[data-task="body"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="*"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="+"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="-"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="."] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="/"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="0"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="="] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task=">"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="?"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="@"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="I"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="J"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="S"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="T"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(213, 196, 161);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="b"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="c"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="d"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="e"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="f"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="g"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="i"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="j"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="k"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="l"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="m"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="p"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="q"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="u"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="v"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="w"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 0px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 0px;
  border-top-color: rgb(232, 216, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(232, 216, 163);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body li.task-list-item[data-task="x"] {
  color: rgb(213, 196, 161);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}`,
    callouts: `html body .callout .callout-content {
  --callout-color: 2, 122, 255;
  --current-callout-color: 107, 140, 164;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1d2021 50%);
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(circle, rgba(107, 140, 164, 0.02) 1px, rgba(0, 0, 0, 0) 1px);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout-title {
  --callout-color: 2, 122, 255;
  --current-callout-color: 107, 140, 164;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1d2021 50%);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 45%, rgba(107, 140, 164, 0.8) 50%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(107, 140, 164, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(107, 140, 164, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(107, 140, 164, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(107, 140, 164, 0.4);
  content: "▓▒░";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 12.8px;
  letter-spacing: 2.56px;
  line-height: 16.64px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-transform: uppercase;
}

html body .callout-title > .callout-title-inner > p {
  --callout-color: 2, 122, 255;
  --current-callout-color: 107, 140, 164;
  --font-weight: 600;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1d2021 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(107, 140, 164, 0.6);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(107, 140, 164, 0.6);
  border-left-width: 0px;
  border-right-color: rgba(107, 140, 164, 0.6);
  border-right-width: 0px;
  border-top-color: rgba(107, 140, 164, 0.6);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(107, 140, 164, 0.6);
  content: "▓";
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-size: 9.6px;
  font-weight: 600;
  letter-spacing: 1.6px;
  line-height: 12.48px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-transform: uppercase;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  --current-callout-color: 156, 122, 153;
  --table-border-color: color-mix(in srgb, rgb(83, 223, 221) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(156, 122, 153) 0%, rgba(156, 122, 153, 0.8) 25%, rgba(156, 122, 153, 0.4) 50%, rgba(156, 122, 153, 0.2) 75%, rgba(156, 122, 153, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="abstract"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  --current-callout-color: 176, 108, 90;
  --table-border-color: color-mix(in srgb, rgb(251, 70, 76) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(176, 108, 90) 0%, rgba(176, 108, 90, 0.8) 25%, rgba(176, 108, 90, 0.4) 50%, rgba(176, 108, 90, 0.2) 75%, rgba(176, 108, 90, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="bug"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  --current-callout-color: 176, 108, 90;
  --table-border-color: color-mix(in srgb, rgb(251, 70, 76) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(176, 108, 90) 0%, rgba(176, 108, 90, 0.8) 25%, rgba(176, 108, 90, 0.4) 50%, rgba(176, 108, 90, 0.2) 75%, rgba(176, 108, 90, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="danger"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  --current-callout-color: 156, 122, 153;
  --table-border-color: color-mix(in srgb, rgb(168, 130, 255) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(156, 122, 153) 0%, rgba(156, 122, 153, 0.8) 25%, rgba(156, 122, 153, 0.4) 50%, rgba(156, 122, 153, 0.2) 75%, rgba(156, 122, 153, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="example"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  --current-callout-color: 176, 108, 90;
  --table-border-color: color-mix(in srgb, rgb(251, 70, 76) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(176, 108, 90) 0%, rgba(176, 108, 90, 0.8) 25%, rgba(176, 108, 90, 0.4) 50%, rgba(176, 108, 90, 0.2) 75%, rgba(176, 108, 90, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="failure"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  --current-callout-color: 107, 140, 164;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(107, 140, 164) 0%, rgba(107, 140, 164, 0.8) 25%, rgba(107, 140, 164, 0.4) 50%, rgba(107, 140, 164, 0.2) 75%, rgba(107, 140, 164, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="info"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  --current-callout-color: 107, 140, 164;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(107, 140, 164) 0%, rgba(107, 140, 164, 0.8) 25%, rgba(107, 140, 164, 0.4) 50%, rgba(107, 140, 164, 0.2) 75%, rgba(107, 140, 164, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="note"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  --current-callout-color: 232, 216, 163;
  --table-border-color: color-mix(in srgb, rgb(233, 151, 63) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(232, 216, 163) 0%, rgba(232, 216, 163, 0.8) 25%, rgba(232, 216, 163, 0.4) 50%, rgba(232, 216, 163, 0.2) 75%, rgba(232, 216, 163, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="question"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  --current-callout-color: 168, 168, 168;
  --table-border-color: color-mix(in srgb, rgb(158, 158, 158) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(168, 168, 168) 0%, rgba(168, 168, 168, 0.8) 25%, rgba(168, 168, 168, 0.4) 50%, rgba(168, 168, 168, 0.2) 75%, rgba(168, 168, 168, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="quote"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  --current-callout-color: 122, 143, 113;
  --table-border-color: color-mix(in srgb, rgb(68, 207, 110) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(122, 143, 113) 0%, rgba(122, 143, 113, 0.8) 25%, rgba(122, 143, 113, 0.4) 50%, rgba(122, 143, 113, 0.2) 75%, rgba(122, 143, 113, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="success"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  --current-callout-color: 122, 143, 113;
  --table-border-color: color-mix(in srgb, rgb(83, 223, 221) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(122, 143, 113) 0%, rgba(122, 143, 113, 0.8) 25%, rgba(122, 143, 113, 0.4) 50%, rgba(122, 143, 113, 0.2) 75%, rgba(122, 143, 113, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="tip"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  --current-callout-color: 168, 168, 168;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(168, 168, 168) 0%, rgba(168, 168, 168, 0.8) 25%, rgba(168, 168, 168, 0.4) 50%, rgba(168, 168, 168, 0.2) 75%, rgba(168, 168, 168, 0.1) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="todo"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  --current-callout-color: 194, 140, 92;
  --table-border-color: color-mix(in srgb, rgb(233, 151, 63) 25%, #1d2021 50%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(135deg, rgb(194, 140, 92) 0%, rgba(194, 140, 92, 0.7) 20%, rgba(194, 140, 92, 0.3) 40%, rgba(194, 140, 92, 0.1) 60%, rgba(194, 140, 92, 0.05) 80%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  content: "▓▓▒▒░░";
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0px;
  line-height: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(90deg, rgba(107, 140, 164, 0.3) 0%, rgba(107, 140, 164, 0.15) 50%, rgba(107, 140, 164, 0.05) 100%);
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout[data-callout="warning"] > .callout-content {
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(rgba(107, 140, 164, 0.02) 0%, rgba(0, 0, 0, 0) 30%);
  color: rgb(235, 219, 178);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-width: 2px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 2px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 2px;
  border-top-color: rgb(232, 216, 163);
  border-top-width: 2px;
  box-shadow: rgba(232, 216, 163, 0.5) 0px 0px 20px 0px, rgba(232, 216, 163, 0.1) 0px 0px 20px 0px inset;
}

html body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(232, 216, 163, 0.08);
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-width: 2px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 2px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 2px;
  border-top-color: rgb(232, 216, 163);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(232, 216, 163, 0.08);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(232, 216, 163, 0.08);
  color: rgb(235, 219, 178);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body a.internal-link.tag-link::before {
  color: rgb(232, 216, 163);
}

html body h1 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h1.article-title {
  color: rgb(232, 216, 163);
  font-size: 80px;
  font-weight: 400;
}

html body h2 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(232, 216, 163);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
}

html body h3 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h4 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h5 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h6 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body hr {
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(235, 219, 178);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}`,
    footer: `html body footer {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body footer ul li a {
  color: rgb(213, 196, 161);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html body .breadcrumb-element p {
  color: rgb(189, 174, 147);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(235, 219, 178);
}

html body .canvas-node-content {
  color: rgb(235, 219, 178);
}

html body .canvas-node-file {
  color: rgb(235, 219, 178);
}

html body .canvas-node-group {
  border-color: rgb(235, 219, 178);
}

html body .canvas-sidebar {
  background-color: rgb(40, 40, 40);
  border-color: rgb(235, 219, 178);
}`,
    bases: `html body .bases-table {
  border-color: rgba(232, 216, 163, 0.3);
}

html body .bases-table thead th {
  border-color: rgba(168, 168, 168, 0.2) rgba(168, 168, 168, 0.2) rgba(232, 216, 163, 0.4) rgba(232, 216, 163, 0.3);
  color: rgb(232, 216, 163);
  font-weight: 400;
}`,
    properties: `html body .metadata {
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .note-properties {
  border-color: rgba(168, 168, 168, 0.2);
}

html body .note-properties-key {
  color: rgb(213, 196, 161);
}

html body .note-properties-row {
  border-color: rgb(213, 196, 161);
}

html body .note-properties-tags {
  color: rgb(232, 216, 163);
}

html body .note-properties-value {
  color: rgb(213, 196, 161);
}

html body div#quartz-root {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

html body ol.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    stacked: `html body .stacked-page {
  background-color: rgb(40, 40, 40);
  border-color: rgba(107, 140, 164, 0.2);
}

html body .stacked-page-header {
  background-color: rgb(29, 32, 33);
}

html body .stacked-page.active {
  border-color: rgba(107, 140, 164, 0.2);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(156, 122, 153, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(156, 122, 153, 0.4);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(156, 122, 153, 0.4);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(156, 122, 153, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(156, 122, 153);
}

html body .navigation-progress {
  background-color: rgb(40, 40, 40);
}

html body .page-header h2.page-title {
  color: rgb(235, 219, 178);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body abbr {
  color: rgb(235, 219, 178);
}

html body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body kbd {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
}

html body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body summary {
  color: rgb(235, 219, 178);
}

html body sup {
  color: rgb(235, 219, 178);
}

html body ul.tags > li {
  background-color: rgba(122, 143, 113, 0.1);
  border-bottom-color: rgba(122, 143, 113, 0.3);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgba(122, 143, 113, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(122, 143, 113, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(122, 143, 113, 0.3);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: rgb(122, 143, 113);
}`,
  },
  light: {},
  extras: `/* Scanlines overlay for authentic CRT effect */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0px,
    rgba(0, 255, 0, 0.03) 1px,
    transparent 2px
  );
  background-size: 100% 2px;
  pointer-events: none;
  z-index: 1000;
  animation: scanlines 0.1s linear infinite;
}

@keyframes scanlines {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(2px);
  }
}

/* Subtle screen flicker */
.workspace {
  animation: flicker 3s infinite alternate;
}

@keyframes flicker {
  0%,
  100% {
    opacity: 1;
  }
  98% {
    opacity: 0.98;
  }
  99% {
    opacity: 1;
  }
}

/* Retro glow effect for main content */
.workspace-leaf-content {
  box-shadow:
    inset 0 0 20px rgba(var(--yellow-rgb), 0.1),
    0 0 20px rgba(var(--yellow-rgb), 0.05);
}
`,
};
