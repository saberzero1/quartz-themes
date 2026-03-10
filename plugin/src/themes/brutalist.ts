import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "brutalist",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "ai-writer-duo",
      "ai-writer-quattro",
      "ai-writer-mono",
      "libre-baskerville",
      "literata",
      "marcellus",
      "montserrat",
      "sen",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 75%;
  --accent-s: 0%;
  --background-modifier-active-hover: rgba(191, 191, 191, 0.1);
  --background-modifier-border: transparent;
  --background-modifier-border-focus: #FFFFFF;
  --background-modifier-form-field: #323232;
  --background-modifier-form-field-hover: #323232;
  --background-primary: #3c3c3c;
  --background-primary-alt: #323232;
  --background-secondary: #323232;
  --background-secondary-alt: #323232;
  --bases-cards-background: #3c3c3c;
  --bases-cards-cover-background: #323232;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #B3B3B3;
  --bases-table-border-color: #c0c0c0;
  --bases-table-cell-background-active: #3c3c3c;
  --bases-table-cell-background-disabled: #323232;
  --bases-table-cell-background-selected: rgba(191, 191, 191, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #FFFFFF;
  --bases-table-cell-shadow-focus: 0 0 0 2px #cdcdcd;
  --bases-table-container-border-radius: 0;
  --bases-table-group-background: #323232;
  --bases-table-header-background: #3c3c3c;
  --bases-table-header-color: #B3B3B3;
  --bases-table-summary-background: #3c3c3c;
  --bases-text-color: #C5C5C5;
  --blockquote-border-color: #cdcdcd;
  --blur-background: color-mix(in srgb, #323232 65%, transparent) linear-gradient(#323232, color-mix(in srgb, #323232 65%, transparent));
  --body-font-color-dark: #a0a0a0;
  --body-font-color-light: #000000;
  --bodyFont: var(--font-text);
  --bold-weight: 600;
  --button-bg-dynamic: #000000;
  --button-bg-hover-dynamic: #000000;
  --button-radius: 0;
  --button-text-dynamic: #a0a0a0;
  --button-text-hover-dynamic: #ffffff;
  --calendar-dot-bg: #feb43f;
  --calendar-header-color: #d0d0d0;
  --calendar-today-color: #feb43f;
  --callout-abstract: 109, 163, 174;
  --callout-border-width: 1px;
  --callout-example: 166, 117, 176;
  --callout-fail: 209, 109, 103;
  --callout-info: 93, 148, 166;
  --callout-note: 96, 138, 176;
  --callout-quote: 119, 119, 119;
  --callout-radius: 0;
  --callout-tip: 122, 163, 125;
  --callout-title-weight: 600;
  --callout-warning: 212, 163, 85;
  --canvas-background: #3c3c3c;
  --canvas-card-label-color: #858585;
  --canvas-controls-radius: 0;
  --canvas-node-border-color: #c0c0c0;
  --caret-color: #a0a0a0;
  --checkbox-border-color: #858585;
  --checkbox-border-color-hover: #B3B3B3;
  --checkbox-border-width: 1px;
  --checkbox-color: #cdcdcd;
  --checkbox-color-hover: #ffffff;
  --checkbox-marker-color: #3c3c3c;
  --checkbox-radius: 0;
  --checklist-done-color: #B3B3B3;
  --clickable-icon-radius: 0;
  --code-background: #1f1f1f;
  --code-border-color: transparent;
  --code-comment: #B3B3B3;
  --code-normal: #a0a0a0;
  --code-punctuation: #B3B3B3;
  --code-radius: 0px;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #858585;
  --collapse-icon-color-collapsed: #cdcdcd;
  --color-accent: rgb(191, 191, 191);
  --color-accent-1: rgb(219, 219, 219);
  --color-accent-2: rgb(247, 247, 247);
  --color-accent-hsl: 0, 0%, 75%;
  --cta-bg-dynamic: #cdcdcd;
  --cta-bg-hover-dynamic: #E0E0E0;
  --cta-text-dynamic: #000000;
  --dark: var(--text-normal);
  --dark-accent-custom: #cdcdcd;
  --darkgray: var(--text-normal);
  --dashboard-banner-height: 600px;
  --dashboard-banner-offset: 150px;
  --dashboard-banner-opacity: 1.0;
  --dashboard-border-width: 1px;
  --dashboard-card-transparency: 20%;
  --dashboard-col-width: 300px;
  --dashboard-gap: 4px;
  --divider-color: transparent;
  --divider-color-hover: #cdcdcd;
  --drag-bg: color-mix(in srgb, #00526E, transparent 85%);
  --drag-border: dashed #00526E;
  --drag-border-width: 3px;
  --dropdown-background: #323232;
  --editor-width: 600px;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --embed-border-start: 2px solid #cdcdcd;
  --file-header-background: #3c3c3c;
  --file-header-background-focused: #3c3c3c;
  --file-header-font: 'Sen', sans-serif;
  --flair-background: #323232;
  --flair-color: #a0a0a0;
  --font-colour-dark-grey-33: #333333;
  --font-colour-light-grey-70: #707070;
  --font-colour-light-grey-bd: #BDBDBD;
  --font-default: 'Sen', sans-serif;
  --font-interface: 'Sen', sans-serif;
  --font-mermaid: 'iA Writer Quattro S', sans-serif;
  --font-monospace: 'Noto Sans Mono', monospace;
  --font-monospace-override: 'Noto Sans Mono', monospace;
  --font-print: '??', 'iA Writer Quattro S', sans-serif, 'iA Writer Quattro S', sans-serif, 'Arial';
  --font-text: 'iA Writer Quattro S', sans-serif;
  --font-text-destructive: #ff4b4b;
  --font-text-override: 'iA Writer Quattro S', sans-serif;
  --font-text-theme: 'iA Writer Quattro S', sans-serif;
  --font-ui: 'Sen', sans-serif;
  --font-ui-override: 'Sen', sans-serif;
  --footnote-divider-color: transparent;
  --footnote-id-color: #B3B3B3;
  --footnote-id-color-no-occurrences: #858585;
  --footnote-line-height: 1.6;
  --footnote-radius: 0;
  --graph-line: #B3B3B3;
  --graph-node: #B3B3B3;
  --graph-node-focused: #cdcdcd;
  --graph-node-unresolved: #858585;
  --graph-text: #a0a0a0;
  --gray: var(--text-muted);
  --h1-color: #cdcdcd;
  --h2-color: #cdcdcd;
  --h3-color: #cdcdcd;
  --h4-color: #cdcdcd;
  --h5-color: #cdcdcd;
  --h5-line-height: 1.6;
  --h6-color: #cdcdcd;
  --h6-line-height: 1.6;
  --headerFont: var(--font-text);
  --heading-formatting: #858585;
  --heading-spacing: 1.5em;
  --highlight: var(--text-highlight-bg);
  --hr-color: transparent;
  --icon-color: #B3B3B3;
  --icon-color-active: #cdcdcd;
  --icon-color-focused: #a0a0a0;
  --icon-color-hover: #cdcdcd;
  --icon-size: 20px;
  --indentation-guide-color: #cdcdcd;
  --indentation-guide-color-active: #cdcdcd;
  --inline-title-align: left;
  --inline-title-color: #cdcdcd;
  --inline-title-size: 3em;
  --input-bg-std: #000000;
  --input-border: transparent;
  --input-border-width: 0px;
  --input-date-separator: #858585;
  --input-placeholder-color: #858585;
  --input-radius: 0;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: #cdcdcd;
  --interactive-accent-hover: #ffffff;
  --interactive-accent-hsl: 0, 0%, 75%;
  --interactive-normal: #323232;
  --light: var(--background-primary);
  --light-accent-custom: #000000;
  --lightgray: var(--background-secondary);
  --line-height: 1.6;
  --line-height-normal: 1.6;
  --link-color: #e2e2e2;
  --link-color-hover: #ffffff;
  --link-external-color: #e2e2e2;
  --link-external-color-hover: #ffffff;
  --link-unresolved-color: #cdcdcd;
  --link-unresolved-decoration-color: rgba(191, 191, 191, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #cdcdcd;
  --list-marker-color-collapsed: #cdcdcd;
  --list-marker-color-hover: #B3B3B3;
  --menu-background: #323232;
  --menu-radius: 0;
  --menu-shadow: none;
  --metadata-border-color: transparent;
  --metadata-content-radius: 8px;
  --metadata-divider-color: transparent;
  --metadata-input-font: 'Sen', sans-serif;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #a0a0a0;
  --metadata-label-font: 'Sen', sans-serif;
  --metadata-label-text-color: #B3B3B3;
  --metadata-label-text-color-hover: #B3B3B3;
  --metadata-property-box-shadow-focus: 0 0 0 2px #FFFFFF;
  --mobile-active-bg: #505050;
  --mobile-drawer-bg: #3c3c3c;
  --mobile-drawer-color-dark: #3c3c3c;
  --mobile-drawer-color-light: #323232;
  --mobile-navbar-border-color-dark: #6a6a6a;
  --mobile-navbar-border-style-dark: solid;
  --mobile-navbar-border-style-light: solid;
  --mobile-navbar-border-width-dark: 0px;
  --mobile-navbar-border-width-light: 0px;
  --mobile-navbar-color-dark: #3c3c3c;
  --mobile-navbar-color-light: #3c3c3c;
  --mobile-navbar-opacity-dark: 0.7;
  --mobile-navbar-opacity-light: 0.7;
  --mobile-navbar-radius: 20px;
  --modal-background: #323232;
  --modal-radius: 0;
  --nav-collapse-icon-color: #858585;
  --nav-collapse-icon-color-collapsed: #858585;
  --nav-guide-border-width: 1px;
  --nav-heading-color: #a0a0a0;
  --nav-heading-color-collapsed: #858585;
  --nav-heading-color-collapsed-hover: #B3B3B3;
  --nav-heading-color-hover: #a0a0a0;
  --nav-indentation-guide-color: #cdcdcd;
  --nav-item-background-selected: rgba(191, 191, 191, 0.15);
  --nav-item-color: #B3B3B3;
  --nav-item-color-active: #a0a0a0;
  --nav-item-color-highlighted: #cdcdcd;
  --nav-item-color-hover: #a0a0a0;
  --nav-item-color-selected: #a0a0a0;
  --nav-item-radius: 0;
  --nav-tag-color: #858585;
  --nav-tag-color-active: #B3B3B3;
  --nav-tag-color-hover: #B3B3B3;
  --nav-tag-radius: 0;
  --new-tab-hover-bg: color-mix(in srgb, #BFBFBF, transparent 85%);
  --new-tab-hover-text: #ffffff;
  --pdf-background: #3c3c3c;
  --pdf-page-background: #3c3c3c;
  --pdf-shadow: 0 0 0 1px transparent;
  --pdf-sidebar-background: #3c3c3c;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent;
  --pill-border-color: transparent;
  --pill-color: #B3B3B3;
  --pill-color-hover: #a0a0a0;
  --pill-color-remove: #858585;
  --pill-color-remove-hover: #cdcdcd;
  --prompt-background: #323232;
  --prompt-border-radius: 0;
  --quote-opening-modifier: #c0c0c0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, #323232 65%, transparent) linear-gradient(#323232, color-mix(in srgb, #323232 65%, transparent));
  --ribbon-background: #323232;
  --ribbon-background-collapsed: #3c3c3c;
  --scrollbar-active-thumb-bg: color-mix(in srgb, #B3B3B3, transparent 80%);
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: color-mix(in srgb, #B3B3B3, transparent 85%);
  --scrollbar-track-bg: #3c3c3c;
  --search-clear-button-color: #B3B3B3;
  --search-icon-color: #B3B3B3;
  --search-result-background: #3c3c3c;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #a0a0a0;
  --setting-items-background: #323232;
  --setting-items-border-color: transparent;
  --setting-items-radius: 0;
  --settings-bg-color: #3c3c3c;
  --settings-border-color: #6a6a6a;
  --settings-border-width: 0px;
  --settings-icon-fill: #B3B3B3;
  --shadow-checkbox-inset: inset 0 0 0 2px #3c3c3c;
  --shadow-floating-card: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25));
  --shadow-focus-inset: inset 0 0 0 1px #a0a0a0;
  --shadow-focus-ring: 0 0 0 2px #cdcdcd;
  --shadow-navbar-separator-dark: inset 0 -0.5px 0 0 rgba(255, 255, 255, 0.1);
  --shadow-navbar-separator-light: inset 0 -0.5px 0 0 rgba(0, 0, 0, 0.1);
  --shadow-s: none;
  --sidebar-markdown-font-size: 14.4px;
  --slider-track-background: #ffffff;
  --status-bar-background: #323232;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0;
  --status-bar-text-color: #B3B3B3;
  --suggestion-background: #3c3c3c;
  --suggestion-item-border-radius: 0;
  --suggestion-radius: 4px;
  --tab-active-bg-sidebar: color-mix(in srgb, #ffffff, transparent 95%);
  --tab-background-active: #3c3c3c;
  --tab-container-background: #323232;
  --tab-curve: 0;
  --tab-hover-bg-doc: #000000;
  --tab-hover-bg-ui: color-mix(in srgb, #B3B3B3, transparent 90%);
  --tab-hover-text-ui: #B3B3B3;
  --tab-outline-color: transparent;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-switcher-background: #323232;
  --tab-switcher-menubar-background: linear-gradient(to top, #323232, transparent);
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(191, 191, 191);
  --tab-text-color: #858585;
  --tab-text-color-active: #B3B3B3;
  --tab-text-color-focused: #B3B3B3;
  --tab-text-color-focused-active: #B3B3B3;
  --tab-text-color-focused-active-current: #a0a0a0;
  --tab-text-color-focused-highlighted: #cdcdcd;
  --table-add-button-border-color: transparent;
  --table-border-color: #c0c0c0;
  --table-drag-handle-background-active: #cdcdcd;
  --table-drag-handle-color: #858585;
  --table-drag-handle-color-active: #323232;
  --table-header-border-color: #c0c0c0;
  --table-header-color: #a0a0a0;
  --table-header-weight: 600;
  --table-selection: rgba(191, 191, 191, 0.1);
  --table-selection-border-color: #cdcdcd;
  --table-selection-border-radius: 0;
  --tag-background: color-mix(in srgb, #cdcdcd, transparent 80%);
  --tag-background-hover: #000000;
  --tag-border-color: #cdcdcd;
  --tag-border-color-hover: rgba(191, 191, 191, 0.15);
  --tag-color: #cdcdcd;
  --tag-color-hover: #cdcdcd;
  --tag-radius: 0;
  --tertiary: var(--text-accent-hover);
  --text-accent: #cdcdcd;
  --text-accent-hover: #ffffff;
  --text-align-mode: left;
  --text-faint: #858585;
  --text-highlight-bg: color-mix(in srgb, #0066FF, transparent 80%);
  --text-muted: #B3B3B3;
  --text-normal: #a0a0a0;
  --text-on-accent: #323232;
  --text-selection: #00526E;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #323232;
  --titlebar-background-focused: #323232;
  --titlebar-border-color: transparent;
  --titlebar-text-color: #B3B3B3;
  --titlebar-text-color-focused: #a0a0a0;
  --toggle-thumb-radius: 50%;
  --toggle-track-radius: 0;
  --ui-font-color-dark: #B3B3B3;
  --ui-font-color-light: #222222;
  --vault-profile-color: #a0a0a0;
  --vault-profile-color-hover: #a0a0a0;
  --vertical-tab-active-color: #B3B3B3;
  --vertical-tab-header-color: #E0E0E0;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 50, 50);
  color: rgb(160, 160, 160);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(60, 60, 60);
  color: rgb(160, 160, 160);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 50, 50);
  color: rgb(160, 160, 160);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(50, 50, 50);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(160, 160, 160);
}

body div#quartz-root {
  background-color: rgb(60, 60, 60);
  color: rgb(160, 160, 160);
}`,
    typography: `body .page article p > b, b {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body .page article p > em, em {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body .page article p > i, i {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body .page article p > strong, strong {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body .text-highlight {
  background-color: color(srgb 0 0.4 1 / 0.2);
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body del {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body p {
  font-family: Sen, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(226, 226, 226);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(226, 226, 226) none 0px;
  text-decoration: underline rgb(226, 226, 226);
  text-decoration-color: rgb(226, 226, 226);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 226, 226);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(226, 226, 226) none 0px;
  text-decoration: underline rgb(226, 226, 226);
  text-decoration-color: rgb(226, 226, 226);
}

body a.internal.broken {
  color: rgb(205, 205, 205);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgba(191, 191, 191, 0.3);
  text-decoration-color: rgba(191, 191, 191, 0.3);
}`,
    lists: `body dd {
  color: rgb(160, 160, 160);
}

body dt {
  color: rgb(160, 160, 160);
}

body ol > li {
  color: rgb(160, 160, 160);
}

body ol.overflow {
  background-color: rgb(60, 60, 60);
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body ul > li {
  color: rgb(160, 160, 160);
}

body ul.overflow {
  background-color: rgb(60, 60, 60);
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(133, 133, 133);
  text-decoration: rgb(133, 133, 133);
}

body blockquote {
  font-family: "iA Writer Quattro S", sans-serif;
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body table {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  width: 562px;
}

body td {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(160, 160, 160);
}

body th {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(160, 160, 160);
}`,
    code: `body code {
  background-color: rgb(50, 50, 50);
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
  font-family: "Noto Sans Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
  font-family: "Noto Sans Mono", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body figcaption {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
}

body figure {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body img {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body video {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    embeds: `body .file-embed {
  background-color: rgb(50, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .transclude {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body .transclude-inner {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "iA Writer Quattro S", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "iA Writer Quattro S", sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='*'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='/'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='>'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='?'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='I'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='S'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='b'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='c'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='d'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='f'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='i'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='k'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='l'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='p'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='u'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='w'] {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(96, 138, 176);
  border-left-color: rgb(96, 138, 176);
  border-right-color: rgb(96, 138, 176);
  border-top-color: rgb(96, 138, 176);
}

body .callout[data-callout="abstract"] {
  --callout-color: 109, 163, 174;
  background-color: rgba(109, 163, 174, 0.15);
  border-bottom-color: rgba(109, 163, 174, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(109, 163, 174);
  border-left-width: 4px;
  border-right-color: rgba(109, 163, 174, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(109, 163, 174, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 209, 109, 103;
  background-color: rgba(209, 109, 103, 0.15);
  border-bottom-color: rgba(209, 109, 103, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 109, 103);
  border-left-width: 4px;
  border-right-color: rgba(209, 109, 103, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(209, 109, 103, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 209, 109, 103;
  background-color: rgba(209, 109, 103, 0.15);
  border-bottom-color: rgba(209, 109, 103, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 109, 103);
  border-left-width: 4px;
  border-right-color: rgba(209, 109, 103, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(209, 109, 103, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 166, 117, 176;
  background-color: rgba(166, 117, 176, 0.15);
  border-bottom-color: rgba(166, 117, 176, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(166, 117, 176);
  border-left-width: 4px;
  border-right-color: rgba(166, 117, 176, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(166, 117, 176, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 209, 109, 103;
  background-color: rgba(209, 109, 103, 0.15);
  border-bottom-color: rgba(209, 109, 103, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(209, 109, 103);
  border-left-width: 4px;
  border-right-color: rgba(209, 109, 103, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(209, 109, 103, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 93, 148, 166;
  background-color: rgba(93, 148, 166, 0.15);
  border-bottom-color: rgba(93, 148, 166, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(93, 148, 166);
  border-left-width: 4px;
  border-right-color: rgba(93, 148, 166, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(93, 148, 166, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 96, 138, 176;
  background-color: rgba(96, 138, 176, 0.15);
  border-bottom-color: rgba(96, 138, 176, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(96, 138, 176);
  border-left-width: 4px;
  border-right-color: rgba(96, 138, 176, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(96, 138, 176, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 212, 163, 85;
  background-color: rgba(212, 163, 85, 0.15);
  border-bottom-color: rgba(212, 163, 85, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 163, 85);
  border-left-width: 4px;
  border-right-color: rgba(212, 163, 85, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(212, 163, 85, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 119, 119, 119;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(119, 119, 119, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(119, 119, 119);
  border-left-width: 4px;
  border-right-color: rgba(119, 119, 119, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(119, 119, 119, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 122, 163, 125;
  background-color: rgba(122, 163, 125, 0.15);
  border-bottom-color: rgba(122, 163, 125, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(122, 163, 125);
  border-left-width: 4px;
  border-right-color: rgba(122, 163, 125, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(122, 163, 125, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 122, 163, 125;
  background-color: rgba(122, 163, 125, 0.15);
  border-bottom-color: rgba(122, 163, 125, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(122, 163, 125);
  border-left-width: 4px;
  border-right-color: rgba(122, 163, 125, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(122, 163, 125, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 212, 163, 85;
  background-color: rgba(212, 163, 85, 0.15);
  border-bottom-color: rgba(212, 163, 85, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 163, 85);
  border-left-width: 4px;
  border-right-color: rgba(212, 163, 85, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(212, 163, 85, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 212, 163, 85;
  background-color: rgba(212, 163, 85, 0.15);
  border-bottom-color: rgba(212, 163, 85, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 163, 85);
  border-left-width: 4px;
  border-right-color: rgba(212, 163, 85, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(212, 163, 85, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(160, 160, 160);
  font-family: Sen, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(50, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(160, 160, 160);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(160, 160, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(160, 160, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(160, 160, 160);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.803922 0.803922 0.803922 / 0.2);
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: Sen, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(205, 205, 205);
}

body h1 {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body h2 {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body h3 {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body h4 {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body h5 {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body h6 {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 96, 138, 176;
  border-bottom-color: rgba(96, 138, 176, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(96, 138, 176);
  border-left-width: 4px;
  border-right-color: rgba(96, 138, 176, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(96, 138, 176, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

body ::-webkit-scrollbar-corner {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}

body ::-webkit-scrollbar-track {
  background: rgb(60, 60, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(60, 60, 60);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Sen, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Sen, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Sen, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  background-color: rgb(50, 50, 50);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-left-width: 0px;
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body footer ul li a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(160, 160, 160);
  font-family: Sen, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
  font-family: Sen, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
  font-family: Sen, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .breadcrumb-element p {
  color: rgb(133, 133, 133);
  font-family: Sen, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body .navigation-progress {
  background-color: rgb(50, 50, 50);
}

body .page-header h2.page-title {
  color: rgb(205, 205, 205);
  font-family: Sen, sans-serif;
}

body abbr {
  color: rgb(160, 160, 160);
  text-decoration: underline dotted rgb(160, 160, 160);
}

body details {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(160, 160, 160);
  font-family: Sen, sans-serif;
}

body kbd {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 160, 160);
  font-family: "Noto Sans Mono", monospace;
}

body progress {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body sub {
  color: rgb(160, 160, 160);
}

body summary {
  color: rgb(160, 160, 160);
}

body sup {
  color: rgb(160, 160, 160);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 0;
  --accent-l: 28%;
  --accent-s: 0%;
  --background-modifier-active-hover: rgba(71, 71, 71, 0.1);
  --background-modifier-border: transparent;
  --background-modifier-border-focus: #1A3319;
  --background-modifier-form-field: #B0B0B0;
  --background-modifier-form-field-hover: #B0B0B0;
  --background-primary: #C5C5C5;
  --background-primary-alt: #B0B0B0;
  --background-secondary: #B0B0B0;
  --background-secondary-alt: #B0B0B0;
  --bases-cards-background: #C5C5C5;
  --bases-cards-cover-background: #B0B0B0;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #222222;
  --bases-table-border-color: #232323;
  --bases-table-cell-background-active: #C5C5C5;
  --bases-table-cell-background-disabled: #B0B0B0;
  --bases-table-cell-background-selected: rgba(71, 71, 71, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #1A3319;
  --bases-table-cell-shadow-focus: 0 0 0 2px #000000;
  --bases-table-container-border-radius: 0;
  --bases-table-group-background: #B0B0B0;
  --bases-table-header-background: #C5C5C5;
  --bases-table-header-color: #222222;
  --bases-table-summary-background: #C5C5C5;
  --bases-text-color: #000000;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #C5C5C5 65%, transparent) linear-gradient(#C5C5C5, color-mix(in srgb, #C5C5C5 65%, transparent));
  --body-font-color-dark: #a0a0a0;
  --body-font-color-light: #000000;
  --bodyFont: var(--font-text);
  --bold-weight: 600;
  --button-bg-dynamic: #d0d0d0;
  --button-bg-hover-dynamic: #ffffff;
  --button-radius: 0;
  --button-text-dynamic: #000000;
  --button-text-hover-dynamic: #000000;
  --calendar-dot-bg: #d10000;
  --calendar-header-color: #111111;
  --calendar-today-color: #d10000;
  --callout-abstract: 88, 139, 150;
  --callout-border-width: 1px;
  --callout-example: 143, 94, 153;
  --callout-fail: 186, 84, 78;
  --callout-info: 74, 130, 148;
  --callout-note: 84, 122, 155;
  --callout-quote: 136, 136, 136;
  --callout-radius: 0;
  --callout-tip: 99, 138, 102;
  --callout-title-weight: 600;
  --callout-warning: 191, 140, 59;
  --canvas-background: #C5C5C5;
  --canvas-card-label-color: #7e7e7e;
  --canvas-color-arrow: #000000;
  --canvas-color-edge: #000000;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: color-mix(in srgb, #505050, transparent 70%);
  --canvas-ink-light: #505050;
  --canvas-node-border-color: #232323;
  --caret-color: #000000;
  --checkbox-border-color: #7e7e7e;
  --checkbox-border-color-hover: #222222;
  --checkbox-border-width: 1px;
  --checkbox-color: #000000;
  --checkbox-color-hover: #000000;
  --checkbox-marker-color: #C5C5C5;
  --checkbox-radius: 0;
  --checklist-done-color: #222222;
  --clickable-icon-radius: 0;
  --code-background: #e1e1e1;
  --code-border-color: transparent;
  --code-comment: #222222;
  --code-normal: #000000;
  --code-punctuation: #222222;
  --code-radius: 0px;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #7e7e7e;
  --collapse-icon-color-collapsed: #000000;
  --color-accent: rgb(71, 71, 71);
  --color-accent-1: rgb(77, 77, 77);
  --color-accent-2: rgb(82, 82, 82);
  --color-accent-hsl: 0, 0%, 28%;
  --cta-bg-dynamic: #000000;
  --cta-bg-hover-dynamic: #000000;
  --cta-text-dynamic: #ffffff;
  --dark: var(--text-normal);
  --dark-accent-custom: #cdcdcd;
  --darkgray: var(--text-normal);
  --dashboard-banner-height: 600px;
  --dashboard-banner-offset: 150px;
  --dashboard-banner-opacity: 1.0;
  --dashboard-border-width: 1px;
  --dashboard-card-transparency: 20%;
  --dashboard-col-width: 300px;
  --dashboard-gap: 4px;
  --divider-color: transparent;
  --divider-color-hover: #000000;
  --drag-bg: color-mix(in srgb, #7a9f79, transparent 85%);
  --drag-border: dashed #7a9f79;
  --drag-border-width: 3px;
  --dropdown-background: #B0B0B0;
  --editor-width: 600px;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --embed-border-start: 2px solid #000000;
  --file-header-background: #C5C5C5;
  --file-header-background-focused: #C5C5C5;
  --file-header-font: 'Sen', sans-serif;
  --flair-background: #B0B0B0;
  --flair-color: #000000;
  --font-colour-dark-grey-33: #333333;
  --font-colour-light-grey-70: #707070;
  --font-colour-light-grey-bd: #BDBDBD;
  --font-default: 'Sen', sans-serif;
  --font-interface: 'Sen', sans-serif;
  --font-mermaid: 'iA Writer Quattro S', sans-serif;
  --font-monospace: 'Noto Sans Mono', monospace;
  --font-monospace-override: 'Noto Sans Mono', monospace;
  --font-print: '??', 'iA Writer Quattro S', sans-serif, 'iA Writer Quattro S', sans-serif, 'Arial';
  --font-text: 'iA Writer Quattro S', sans-serif;
  --font-text-destructive: #ff4b4b;
  --font-text-override: 'iA Writer Quattro S', sans-serif;
  --font-text-theme: 'iA Writer Quattro S', sans-serif;
  --font-ui: 'Sen', sans-serif;
  --font-ui-override: 'Sen', sans-serif;
  --footnote-divider-color: transparent;
  --footnote-id-color: #222222;
  --footnote-id-color-no-occurrences: #7e7e7e;
  --footnote-line-height: 1.6;
  --footnote-radius: 0;
  --graph-line: #222222;
  --graph-node: #000000;
  --graph-node-focused: #000000;
  --graph-node-unresolved: #7e7e7e;
  --graph-text: #000000;
  --gray: var(--text-muted);
  --h1-color: #000000;
  --h2-color: #000000;
  --h3-color: #000000;
  --h4-color: #000000;
  --h5-color: #000000;
  --h5-line-height: 1.6;
  --h6-color: #000000;
  --h6-line-height: 1.6;
  --headerFont: var(--font-text);
  --heading-formatting: #7e7e7e;
  --heading-spacing: 1.5em;
  --highlight: var(--text-highlight-bg);
  --hr-color: transparent;
  --icon-color: #222222;
  --icon-color-active: #000000;
  --icon-color-focused: #000000;
  --icon-color-hover: #000000;
  --icon-size: 20px;
  --indentation-guide-color: #000000;
  --indentation-guide-color-active: #000000;
  --inline-title-align: left;
  --inline-title-color: #000000;
  --inline-title-size: 3em;
  --input-bg-std: #cdcdcd;
  --input-border: transparent;
  --input-border-width: 0px;
  --input-date-separator: #7e7e7e;
  --input-placeholder-color: #7e7e7e;
  --input-radius: 0;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: #000000;
  --interactive-accent-hover: #000000;
  --interactive-accent-hsl: 0, 0%, 28%;
  --interactive-normal: #B0B0B0;
  --light: var(--background-primary);
  --light-accent-custom: #000000;
  --lightgray: var(--background-secondary);
  --line-height: 1.6;
  --line-height-normal: 1.6;
  --link-color: #505050;
  --link-color-hover: #000000;
  --link-external-color: #505050;
  --link-external-color-hover: #000000;
  --link-unresolved-color: #000000;
  --link-unresolved-decoration-color: rgba(71, 71, 71, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #000000;
  --list-marker-color-collapsed: #000000;
  --list-marker-color-hover: #222222;
  --menu-background: #B0B0B0;
  --menu-radius: 0;
  --menu-shadow: none;
  --metadata-border-color: transparent;
  --metadata-content-radius: 8px;
  --metadata-divider-color: transparent;
  --metadata-input-font: 'Sen', sans-serif;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #000000;
  --metadata-label-font: 'Sen', sans-serif;
  --metadata-label-text-color: #222222;
  --metadata-label-text-color-hover: #222222;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1A3319;
  --mobile-active-bg: #d6d6d6;
  --mobile-drawer-bg: #B0B0B0;
  --mobile-drawer-color-dark: #C5C5C5;
  --mobile-drawer-color-light: #B0B0B0;
  --mobile-navbar-border-color-light: #000000;
  --mobile-navbar-border-style-dark: solid;
  --mobile-navbar-border-style-light: solid;
  --mobile-navbar-border-width-dark: 0px;
  --mobile-navbar-border-width-light: 0px;
  --mobile-navbar-color-dark: #C5C5C5;
  --mobile-navbar-color-light: #C5C5C5;
  --mobile-navbar-opacity-dark: 0.7;
  --mobile-navbar-opacity-light: 0.7;
  --mobile-navbar-radius: 20px;
  --modal-background: #B0B0B0;
  --modal-radius: 0;
  --nav-collapse-icon-color: #7e7e7e;
  --nav-collapse-icon-color-collapsed: #7e7e7e;
  --nav-guide-border-width: 1px;
  --nav-heading-color: #000000;
  --nav-heading-color-collapsed: #7e7e7e;
  --nav-heading-color-collapsed-hover: #222222;
  --nav-heading-color-hover: #000000;
  --nav-indentation-guide-color: #000000;
  --nav-item-background-selected: rgba(71, 71, 71, 0.15);
  --nav-item-color: #222222;
  --nav-item-color-active: #000000;
  --nav-item-color-highlighted: #000000;
  --nav-item-color-hover: #000000;
  --nav-item-color-selected: #000000;
  --nav-item-radius: 0;
  --nav-tag-color: #7e7e7e;
  --nav-tag-color-active: #222222;
  --nav-tag-color-hover: #222222;
  --nav-tag-radius: 0;
  --new-tab-hover-bg: color-mix(in srgb, #505050, transparent 90%);
  --new-tab-hover-text: #000000;
  --pdf-background: #C5C5C5;
  --pdf-page-background: #C5C5C5;
  --pdf-sidebar-background: #C5C5C5;
  --pill-border-color: transparent;
  --pill-color: #222222;
  --pill-color-hover: #000000;
  --pill-color-remove: #7e7e7e;
  --pill-color-remove-hover: #000000;
  --prompt-background: #B0B0B0;
  --prompt-border-radius: 0;
  --quote-opening-modifier: #232323;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, #C5C5C5 65%, transparent) linear-gradient(#C5C5C5, color-mix(in srgb, #C5C5C5 65%, transparent));
  --ribbon-background: #B0B0B0;
  --ribbon-background-collapsed: #C5C5C5;
  --scrollbar-active-thumb-bg: color-mix(in srgb, #222222, transparent 80%);
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: color-mix(in srgb, #222222, transparent 85%);
  --scrollbar-track-bg: #C5C5C5;
  --search-clear-button-color: #222222;
  --search-icon-color: #222222;
  --search-result-background: #C5C5C5;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #000000;
  --setting-items-background: #B0B0B0;
  --setting-items-border-color: transparent;
  --setting-items-radius: 0;
  --settings-bg-color: #B0B0B0;
  --settings-border-color: #000000;
  --settings-border-width: 0px;
  --settings-icon-fill: #222222;
  --shadow-checkbox-inset: inset 0 0 0 2px #C5C5C5;
  --shadow-floating-card: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25));
  --shadow-focus-inset: inset 0 0 0 1px #000000;
  --shadow-focus-ring: 0 0 0 2px #000000;
  --shadow-navbar-separator-dark: inset 0 -0.5px 0 0 rgba(255, 255, 255, 0.1);
  --shadow-navbar-separator-light: inset 0 -0.5px 0 0 rgba(0, 0, 0, 0.1);
  --shadow-s: none;
  --sidebar-markdown-font-size: 14.4px;
  --slider-track-background: #ffffff;
  --status-bar-background: #B0B0B0;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0;
  --status-bar-text-color: #222222;
  --suggestion-background: #C5C5C5;
  --suggestion-item-border-radius: 0;
  --suggestion-radius: 4px;
  --tab-active-bg-sidebar: color-mix(in srgb, #FFFFFF, transparent 60%);
  --tab-background-active: #C5C5C5;
  --tab-container-background: #B0B0B0;
  --tab-curve: 0;
  --tab-hover-bg-doc: #dfdfdf;
  --tab-hover-bg-ui: color-mix(in srgb, #222222, transparent 90%);
  --tab-hover-text-ui: #000000;
  --tab-outline-color: transparent;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-switcher-background: #B0B0B0;
  --tab-switcher-menubar-background: linear-gradient(to top, #B0B0B0, transparent);
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(71, 71, 71);
  --tab-text-color: #7e7e7e;
  --tab-text-color-active: #222222;
  --tab-text-color-focused: #222222;
  --tab-text-color-focused-active: #222222;
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: #000000;
  --table-add-button-border-color: transparent;
  --table-border-color: #232323;
  --table-drag-handle-background-active: #000000;
  --table-drag-handle-color: #7e7e7e;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #232323;
  --table-header-color: #000000;
  --table-header-weight: 600;
  --table-selection: rgba(71, 71, 71, 0.1);
  --table-selection-border-color: #000000;
  --table-selection-border-radius: 0;
  --tag-background: color-mix(in srgb, #222222, transparent 90%);
  --tag-background-hover: #d6d6d6;
  --tag-border-color: #000000;
  --tag-border-color-hover: rgba(71, 71, 71, 0.15);
  --tag-color: #000000;
  --tag-color-hover: #000000;
  --tag-radius: 0;
  --tertiary: var(--text-accent-hover);
  --text-accent: #000000;
  --text-accent-hover: #000000;
  --text-align-mode: left;
  --text-faint: #7e7e7e;
  --text-highlight-bg: #94b293;
  --text-muted: #222222;
  --text-normal: #000000;
  --text-on-accent: #ffffff;
  --text-selection: #7a9f79;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #B0B0B0;
  --titlebar-background-focused: #B0B0B0;
  --titlebar-border-color: transparent;
  --titlebar-text-color: #222222;
  --titlebar-text-color-focused: #000000;
  --toggle-thumb-radius: 50%;
  --toggle-track-radius: 0;
  --ui-font-color-dark: #B3B3B3;
  --ui-font-color-light: #222222;
  --vault-profile-color: #000000;
  --vault-profile-color-hover: #000000;
  --vertical-tab-active-color: #000000;
  --vertical-tab-header-color: #000000;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(176, 176, 176);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(197, 197, 197);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(176, 176, 176);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(176, 176, 176);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(197, 197, 197);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgb(148, 178, 147);
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(34, 34, 34);
  font-family: Sen, sans-serif;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}`,
    links: `body a.external, footer a {
  color: rgb(80, 80, 80);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(80, 80, 80) none 0px;
  text-decoration: underline rgb(80, 80, 80);
  text-decoration-color: rgb(80, 80, 80);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(80, 80, 80);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(80, 80, 80) none 0px;
  text-decoration: underline rgb(80, 80, 80);
  text-decoration-color: rgb(80, 80, 80);
}

body a.internal.broken {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgba(71, 71, 71, 0.3);
  text-decoration-color: rgba(71, 71, 71, 0.3);
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgb(197, 197, 197);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(197, 197, 197);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(126, 126, 126);
  text-decoration: rgb(126, 126, 126);
}

body blockquote {
  font-family: "iA Writer Quattro S", sans-serif;
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  width: 562px;
}

body td {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(35, 35, 35);
  border-left-color: rgb(35, 35, 35);
  border-right-color: rgb(35, 35, 35);
  border-top-color: rgb(35, 35, 35);
  color: rgb(0, 0, 0);
}`,
    code: `body code {
  background-color: rgb(176, 176, 176);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "Noto Sans Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "Noto Sans Mono", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgb(176, 176, 176);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "iA Writer Quattro S", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "iA Writer Quattro S", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(34, 34, 34);
  text-decoration: line-through rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(84, 122, 155);
  border-left-color: rgb(84, 122, 155);
  border-right-color: rgb(84, 122, 155);
  border-top-color: rgb(84, 122, 155);
}

body .callout[data-callout="abstract"] {
  --callout-color: 88, 139, 150;
  background-color: rgba(88, 139, 150, 0.15);
  border-bottom-color: rgba(88, 139, 150, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(88, 139, 150);
  border-left-width: 4px;
  border-right-color: rgba(88, 139, 150, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(88, 139, 150, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 186, 84, 78;
  background-color: rgba(186, 84, 78, 0.15);
  border-bottom-color: rgba(186, 84, 78, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 84, 78);
  border-left-width: 4px;
  border-right-color: rgba(186, 84, 78, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(186, 84, 78, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 186, 84, 78;
  background-color: rgba(186, 84, 78, 0.15);
  border-bottom-color: rgba(186, 84, 78, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 84, 78);
  border-left-width: 4px;
  border-right-color: rgba(186, 84, 78, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(186, 84, 78, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 143, 94, 153;
  background-color: rgba(143, 94, 153, 0.15);
  border-bottom-color: rgba(143, 94, 153, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(143, 94, 153);
  border-left-width: 4px;
  border-right-color: rgba(143, 94, 153, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(143, 94, 153, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 186, 84, 78;
  background-color: rgba(186, 84, 78, 0.15);
  border-bottom-color: rgba(186, 84, 78, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 84, 78);
  border-left-width: 4px;
  border-right-color: rgba(186, 84, 78, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(186, 84, 78, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 74, 130, 148;
  background-color: rgba(74, 130, 148, 0.15);
  border-bottom-color: rgba(74, 130, 148, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(74, 130, 148);
  border-left-width: 4px;
  border-right-color: rgba(74, 130, 148, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(74, 130, 148, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 84, 122, 155;
  background-color: rgba(84, 122, 155, 0.15);
  border-bottom-color: rgba(84, 122, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(84, 122, 155);
  border-left-width: 4px;
  border-right-color: rgba(84, 122, 155, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(84, 122, 155, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 191, 140, 59;
  background-color: rgba(191, 140, 59, 0.15);
  border-bottom-color: rgba(191, 140, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 140, 59);
  border-left-width: 4px;
  border-right-color: rgba(191, 140, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(191, 140, 59, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 136, 136, 136;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(136, 136, 136, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(136, 136, 136);
  border-left-width: 4px;
  border-right-color: rgba(136, 136, 136, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(136, 136, 136, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 99, 138, 102;
  background-color: rgba(99, 138, 102, 0.15);
  border-bottom-color: rgba(99, 138, 102, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(99, 138, 102);
  border-left-width: 4px;
  border-right-color: rgba(99, 138, 102, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(99, 138, 102, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 99, 138, 102;
  background-color: rgba(99, 138, 102, 0.15);
  border-bottom-color: rgba(99, 138, 102, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(99, 138, 102);
  border-left-width: 4px;
  border-right-color: rgba(99, 138, 102, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(99, 138, 102, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 191, 140, 59;
  background-color: rgba(191, 140, 59, 0.15);
  border-bottom-color: rgba(191, 140, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 140, 59);
  border-left-width: 4px;
  border-right-color: rgba(191, 140, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(191, 140, 59, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 191, 140, 59;
  background-color: rgba(191, 140, 59, 0.15);
  border-bottom-color: rgba(191, 140, 59, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 140, 59);
  border-left-width: 4px;
  border-right-color: rgba(191, 140, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(191, 140, 59, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(205, 205, 205);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(176, 176, 176);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "iA Writer Quattro S", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(205, 205, 205);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: Sen, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(51, 51, 51);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body h3 {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body h5 {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body h6 {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 84, 122, 155;
  border-bottom-color: rgba(84, 122, 155, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(84, 122, 155);
  border-left-width: 4px;
  border-right-color: rgba(84, 122, 155, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(84, 122, 155, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

body ::-webkit-scrollbar-corner {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}

body ::-webkit-scrollbar-track {
  background: rgb(197, 197, 197) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(197, 197, 197);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: Sen, sans-serif;
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: Sen, sans-serif;
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(34, 34, 34);
  font-family: Sen, sans-serif;
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}`,
    footer: `body footer {
  background-color: rgb(176, 176, 176);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}

body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}

body .breadcrumb-element p {
  color: rgb(126, 126, 126);
  font-family: Sen, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body .navigation-progress {
  background-color: rgb(176, 176, 176);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Sen, sans-serif;
}

body kbd {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "Noto Sans Mono", monospace;
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
