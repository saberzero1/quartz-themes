import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "typewriter",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-mono", "ia-writer-quattro-s", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #333;
  --background-modifier-border-focus: rgb(92, 92, 92);
  --background-modifier-border-hover: rgb(94, 94, 94);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #197300;
  --background-primary: rgb(38, 38, 38);
  --background-primary-alt: #202020;
  --background-secondary: rgb(57, 51, 45);
  --background-secondary-alt: #000000;
  --base-d: 15%;
  --base-h: 0;
  --base-l: 96%;
  --base-s: 0%;
  --bases-cards-background: rgb(38, 38, 38);
  --bases-cards-cover-background: #202020;
  --bases-cards-font-size: 0.688em;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #333;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(94, 94, 94);
  --bases-embed-border-color: #333;
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: rgb(153, 153, 153);
  --bases-group-heading-value-size: 0.688em;
  --bases-table-border-color: #333;
  --bases-table-cell-background-active: rgb(38, 38, 38);
  --bases-table-cell-background-disabled: #202020;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(92, 92, 92);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 180, 121);
  --bases-table-container-border-radius: 2px;
  --bases-table-font-size: 0.688em;
  --bases-table-group-background: #202020;
  --bases-table-header-background: rgb(38, 38, 38);
  --bases-table-header-color: rgb(153, 153, 153);
  --bases-table-summary-background: rgb(38, 38, 38);
  --blockquote-border-color: rgb(110, 180, 121);
  --blue: #6c99bb;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-weight: 620;
  --border-width-alt: 1px;
  --callout-radius: 2px;
  --canvas-background: rgb(38, 38, 38);
  --canvas-card-label-color: rgb(158, 158, 158);
  --canvas-controls-radius: 2px;
  --caret-color: rgb(197, 184, 161);
  --checkbox-border-color: rgb(158, 158, 158);
  --checkbox-border-color-hover: rgb(153, 153, 153);
  --checkbox-color: rgb(110, 180, 121);
  --checkbox-color-hover: rgb(81, 158, 93);
  --checkbox-marker-color: rgb(38, 38, 38);
  --checkbox-radius: 2px;
  --checklist-done-color: rgb(153, 153, 153);
  --clickable-icon-radius: 2px;
  --code-background: #202020;
  --code-border-color: #333;
  --code-comment: rgb(158, 158, 158);
  --code-normal: #6c99bb;
  --code-punctuation: rgb(153, 153, 153);
  --code-radius: 2px;
  --code-size: 1em;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(158, 158, 158);
  --color-accent: rgb(81, 158, 93);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #333;
  --divider-color-hover: rgb(110, 180, 121);
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333;
  --embed-border-start: 2px solid rgb(110, 180, 121);
  --file-header-background: rgb(38, 38, 38);
  --file-header-background-focused: rgb(38, 38, 38);
  --file-header-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #2a2a2a;
  --flair-color: rgb(197, 184, 161);
  --font-editor: "iA Writer Quattro S", '??', "iA Writer Mono V";
  --font-editor-theme: "iA Writer Mono V";
  --font-interface: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "iA Writer Quattro S";
  --font-mermaid: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-monospace-default: "JetBrains Mono";
  --font-normal-size: 1em;
  --font-print: '??', '??', "iA Writer Quattro S", 'Arial';
  --font-small: 0.813em;
  --font-smaller: 0.688em;
  --font-smallest: 0.625em;
  --font-text: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: #333;
  --footnote-id-color: rgb(153, 153, 153);
  --footnote-id-color-no-occurrences: rgb(158, 158, 158);
  --footnote-radius: 2px;
  --footnote-size: 0.688em;
  --graph-line-color: #6f7577;
  --graph-node: rgb(153, 153, 153);
  --graph-node-unresolved: rgb(158, 158, 158);
  --graph-text: rgb(197, 184, 161);
  --gray: var(--text-muted);
  --green: #b4d273;
  --h1: 1.8em;
  --h1-color: rgb(197, 184, 161);
  --h1-weight: 600;
  --h2: 1.55em;
  --h2-color: rgb(197, 184, 161);
  --h2-weight: 600;
  --h3: 1.35em;
  --h3-color: rgb(197, 184, 161);
  --h3-weight: 550;
  --h4: 1.15em;
  --h4-color: rgb(197, 184, 161);
  --h4-weight: 550;
  --h5: 1em;
  --h5-color: rgb(197, 184, 161);
  --h5-weight: 550;
  --h6: 0.95em;
  --h6-color: rgb(197, 184, 161);
  --h6-weight: 550;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(158, 158, 158);
  --highlight: var(--text-highlight-bg);
  --hr-color: #333;
  --icon-color: rgb(153, 153, 153);
  --icon-color-focused: rgb(197, 184, 161);
  --icon-color-hover: rgb(153, 153, 153);
  --icon-muted: 0.5;
  --inline-title-color: rgb(197, 184, 161);
  --inline-title-weight: 600;
  --input-date-separator: rgb(158, 158, 158);
  --input-height: 32px;
  --input-placeholder-color: rgb(158, 158, 158);
  --interactive-accent: rgb(110, 180, 121);
  --interactive-accent-hover: rgb(81, 158, 93);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --interactive-success: #197300;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color-hover: rgb(64, 125, 73);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color-hover: rgb(64, 125, 73);
  --list-marker-color: rgb(158, 158, 158);
  --list-marker-color-hover: rgb(153, 153, 153);
  --max-width: 88%;
  --menu-background: rgb(57, 51, 45);
  --menu-border-color: rgb(94, 94, 94);
  --menu-radius: 5px;
  --metadata-border-color: #333;
  --metadata-divider-color: #333;
  --metadata-input-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.813em;
  --metadata-input-text-color: rgb(197, 184, 161);
  --metadata-label-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.688em;
  --metadata-label-text-color: rgb(153, 153, 153);
  --metadata-label-text-color-hover: rgb(153, 153, 153);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(92, 92, 92);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(94, 94, 94);
  --modal-background: rgb(38, 38, 38);
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(158, 158, 158);
  --nav-collapse-icon-color-collapsed: rgb(158, 158, 158);
  --nav-heading-color: rgb(197, 184, 161);
  --nav-heading-color-collapsed: rgb(158, 158, 158);
  --nav-heading-color-collapsed-hover: rgb(153, 153, 153);
  --nav-heading-color-hover: rgb(197, 184, 161);
  --nav-item-color: rgb(153, 153, 153);
  --nav-item-color-active: rgb(197, 184, 161);
  --nav-item-color-hover: rgb(197, 184, 161);
  --nav-item-color-selected: rgb(197, 184, 161);
  --nav-item-radius: 2px;
  --nav-tag-color: rgb(158, 158, 158);
  --nav-tag-color-active: rgb(153, 153, 153);
  --nav-tag-color-hover: rgb(153, 153, 153);
  --nav-tag-radius: 2px;
  --normal-weight: 500;
  --orange: #e87d3e;
  --pdf-background: rgb(38, 38, 38);
  --pdf-page-background: rgb(38, 38, 38);
  --pdf-shadow: 0 0 0 1px #333;
  --pdf-sidebar-background: rgb(38, 38, 38);
  --pdf-thumbnail-shadow: 0 0 0 1px #333;
  --pill-border-color: #333;
  --pill-border-color-hover: rgb(94, 94, 94);
  --pill-color: rgb(153, 153, 153);
  --pill-color-hover: rgb(197, 184, 161);
  --pill-color-remove: rgb(158, 158, 158);
  --pink: #b05279;
  --prompt-background: rgb(38, 38, 38);
  --purple: #9e86c8;
  --radius-l: 10px;
  --radius-m: 5px;
  --radius-s: 2px;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: rgb(57, 51, 45);
  --ribbon-background-collapsed: rgb(38, 38, 38);
  --scrollbar-radius: 10px;
  --search-clear-button-color: rgb(153, 153, 153);
  --search-icon-color: rgb(153, 153, 153);
  --search-result-background: rgb(38, 38, 38);
  --secondary: var(--color-accent);
  --setting-group-heading-color: rgb(197, 184, 161);
  --setting-items-background: #202020;
  --setting-items-border-color: #333;
  --setting-items-radius: 10px;
  --slider-thumb-border-color: rgb(94, 94, 94);
  --slider-track-background: #333;
  --status-bar-background: rgb(57, 51, 45);
  --status-bar-border-color: #333;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: rgb(153, 153, 153);
  --suggestion-background: rgb(38, 38, 38);
  --tab-background-active: rgb(38, 38, 38);
  --tab-container-background: rgb(57, 51, 45);
  --tab-divider-color: rgb(94, 94, 94);
  --tab-outline-color: #333;
  --tab-radius: 2px;
  --tab-switcher-background: rgb(57, 51, 45);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(57, 51, 45), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(81, 158, 93);
  --tab-text-color: rgb(158, 158, 158);
  --tab-text-color-active: rgb(153, 153, 153);
  --tab-text-color-focused: rgb(153, 153, 153);
  --tab-text-color-focused-active: rgb(153, 153, 153);
  --tab-text-color-focused-active-current: rgb(197, 184, 161);
  --table-add-button-border-color: #333;
  --table-border-color: #333;
  --table-drag-handle-background-active: rgb(110, 180, 121);
  --table-drag-handle-color: rgb(158, 158, 158);
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #333;
  --table-header-color: rgb(197, 184, 161);
  --table-selection-border-color: rgb(110, 180, 121);
  --tag-size: 0.688em;
  --tertiary: var(--text-accent-hover);
  --text-accent-hover: rgb(64, 125, 73);
  --text-error: rgb(230, 60, 60);
  --text-error-hover: #990000;
  --text-faint: rgb(158, 158, 158);
  --text-highlight-bg: rgba(255, 177, 80, 0.3);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: rgb(153, 153, 153);
  --text-normal: rgb(197, 184, 161);
  --text-on-accent: #dcddde;
  --text-selection: rgba(23, 48, 77, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --theme-accent-d: 46.7%;
  --theme-accent-h: 129;
  --theme-accent-l: 46.7%;
  --theme-accent-s: 31.9%;
  --titleFont: var(--font-text);
  --titlebar-background: rgb(57, 51, 45);
  --titlebar-background-focused: #000000;
  --titlebar-border-color: #333;
  --titlebar-text-color: rgb(153, 153, 153);
  --titlebar-text-color-focused: rgb(197, 184, 161);
  --vault-profile-color: rgb(197, 184, 161);
  --vault-profile-color-hover: rgb(197, 184, 161);
  --vim-cursor: hsla(
    129,
    32%,
    47%,
    0.8
  );
  --yellow: #e5b567;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(58, 52, 46);
  color: rgb(197, 184, 161);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
  color: rgb(197, 184, 161);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(58, 52, 46);
  color: rgb(197, 184, 161);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(58, 52, 46);
  border-left-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
}

body div#quartz-root {
  background-color: rgb(38, 38, 38);
  color: rgb(197, 184, 161);
}`,
    typography: `body .page article p > b, b {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body .page article p > em, em {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body .page article p > i, i {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body .page article p > strong, strong {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body del {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: line-through rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body p {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  font-family: "iA Writer Quattro S";
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "iA Writer Quattro S";
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  font-family: "iA Writer Quattro S";
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(197, 184, 161);
}

body dt {
  color: rgb(197, 184, 161);
}

body ol > li {
  color: rgb(197, 184, 161);
}

body ol.overflow {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body ul > li {
  color: rgb(197, 184, 161);
}

body ul.overflow {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}

body blockquote {
  font-family: "iA Writer Quattro S";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body table {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  width: 662px;
}

body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
  padding-bottom: 2.66667px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 2.66667px;
}

body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
  padding-bottom: 5.33333px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 5.33333px;
}`,
    code: `body code {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body figcaption {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body img {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body video {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

body .transclude {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body .transclude-inner {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='*'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='-'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='/'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='>'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='?'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='I'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='S'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='b'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='c'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='d'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='f'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='i'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='k'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='l'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='p'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='u'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body li.task-list-item[data-task='w'] {
  color: rgb(197, 184, 161);
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 184, 161);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(197, 184, 161);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(197, 184, 161);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(58, 52, 46);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.016px;
  border-bottom-right-radius: 26.016px;
  border-top-left-radius: 26.016px;
  border-top-right-radius: 26.016px;
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

body h2 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

body h2.page-title, h2.page-title a {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

body h3 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

body h4 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

body h5 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

body h6 {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(153, 153, 153);
}`,
    footer: `body footer {
  background-color: rgb(58, 52, 46);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body ul.section-ul {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(153, 153, 153);
}

body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(153, 153, 153);
}

body .breadcrumb-element p {
  color: rgb(158, 158, 158);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(153, 153, 153);
  font-family: "iA Writer Quattro S";
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "iA Writer Quattro S";
}

body .navigation-progress {
  background-color: rgb(58, 52, 46);
}

body .page-header h2.page-title {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(197, 184, 161);
  text-decoration: underline dotted rgb(197, 184, 161);
}

body details {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

body sub {
  color: rgb(197, 184, 161);
}

body summary {
  color: rgb(197, 184, 161);
}

body sup {
  color: rgb(197, 184, 161);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-accent: rgb(110, 180, 121);
  --background-modifier-border: rgb(230, 230, 230);
  --background-modifier-border-focus: rgb(194, 194, 194);
  --background-modifier-border-hover: rgb(214, 214, 214);
  --background-modifier-form-field: hsl(
    0,
    0%,
    102%
  );
  --background-modifier-form-field-highlighted: hsl(
    0,
    0%,
    104%
  );
  --background-modifier-form-field-hover: hsl(
    0,
    0%,
    102%
  );
  --background-primary: rgb(252, 245, 228);
  --background-primary-alt: #fcf5e4;
  --background-secondary: rgb(228, 220, 200);
  --background-secondary-alt: #fcf5e4;
  --background-translucent: rgba(255, 255, 255, 0.85);
  --background-transparent: hsla(
    0,
    0%,
    96%,
    0
  );
  --base-d: 15%;
  --base-h: 0;
  --base-l: 96%;
  --base-s: 0%;
  --bases-cards-background: rgb(252, 245, 228);
  --bases-cards-cover-background: #fcf5e4;
  --bases-cards-font-size: 0.688em;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px rgb(230, 230, 230);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(214, 214, 214);
  --bases-embed-border-color: rgb(230, 230, 230);
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: rgb(89, 89, 89);
  --bases-group-heading-value-size: 0.688em;
  --bases-table-border-color: rgb(230, 230, 230);
  --bases-table-cell-background-active: rgb(252, 245, 228);
  --bases-table-cell-background-disabled: #fcf5e4;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(194, 194, 194);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 180, 121);
  --bases-table-container-border-radius: 2px;
  --bases-table-font-size: 0.688em;
  --bases-table-group-background: #fcf5e4;
  --bases-table-header-background: rgb(252, 245, 228);
  --bases-table-header-color: rgb(89, 89, 89);
  --bases-table-summary-background: rgb(252, 245, 228);
  --blockquote-border-color: rgb(110, 180, 121);
  --blue: #6c99bb;
  --blur-background: color-mix(in srgb, rgb(252, 245, 228) 65%, transparent) linear-gradient(rgb(252, 245, 228), color-mix(in srgb, rgb(252, 245, 228) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-weight: 620;
  --border-width-alt: 1px;
  --callout-radius: 2px;
  --canvas-background: rgb(252, 245, 228);
  --canvas-card-label-color: rgb(158, 158, 158);
  --canvas-controls-radius: 2px;
  --caret-color: rgb(38, 38, 38);
  --checkbox-border-color: rgb(158, 158, 158);
  --checkbox-border-color-hover: rgb(89, 89, 89);
  --checkbox-color: rgb(110, 180, 121);
  --checkbox-color-hover: rgb(81, 158, 93);
  --checkbox-marker-color: rgb(252, 245, 228);
  --checkbox-radius: 2px;
  --checklist-done-color: rgb(89, 89, 89);
  --clickable-icon-radius: 2px;
  --code-background: #eee8d5;
  --code-border-color: rgb(230, 230, 230);
  --code-comment: rgb(158, 158, 158);
  --code-normal: #6c99bb;
  --code-punctuation: rgb(89, 89, 89);
  --code-radius: 2px;
  --code-size: 1em;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(158, 158, 158);
  --collapse-icon-color-collapsed: rgb(81, 158, 93);
  --color-accent: rgb(81, 158, 93);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(230, 230, 230);
  --divider-color-hover: rgb(110, 180, 121);
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px rgb(230, 230, 230), inset 0 0 0 1px rgb(230, 230, 230);
  --embed-border-start: 2px solid rgb(110, 180, 121);
  --file-header-background: rgb(252, 245, 228);
  --file-header-background-focused: rgb(252, 245, 228);
  --file-header-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #f2f3f5;
  --flair-color: rgb(38, 38, 38);
  --font-editor: "iA Writer Quattro S", '??', "iA Writer Mono V";
  --font-editor-theme: "iA Writer Mono V";
  --font-interface: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "iA Writer Quattro S";
  --font-mermaid: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', "JetBrains Mono";
  --font-monospace-default: "JetBrains Mono";
  --font-normal-size: 1em;
  --font-print: '??', '??', "iA Writer Quattro S", 'Arial';
  --font-small: 0.813em;
  --font-smaller: 0.688em;
  --font-smallest: 0.625em;
  --font-text: '??', "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: rgb(230, 230, 230);
  --footnote-id-color: rgb(89, 89, 89);
  --footnote-id-color-no-occurrences: rgb(158, 158, 158);
  --footnote-radius: 2px;
  --footnote-size: 0.688em;
  --graph-line-color: #c0c9ce;
  --graph-node: rgb(89, 89, 89);
  --graph-node-focused: rgb(81, 158, 93);
  --graph-node-unresolved: rgb(158, 158, 158);
  --graph-text: rgb(38, 38, 38);
  --gray: var(--text-muted);
  --green: #b4d273;
  --h1: 1.8em;
  --h1-color: rgb(38, 38, 38);
  --h1-weight: 600;
  --h2: 1.55em;
  --h2-color: rgb(38, 38, 38);
  --h2-weight: 600;
  --h3: 1.35em;
  --h3-color: rgb(38, 38, 38);
  --h3-weight: 550;
  --h4: 1.15em;
  --h4-color: rgb(38, 38, 38);
  --h4-weight: 550;
  --h5: 1em;
  --h5-color: rgb(38, 38, 38);
  --h5-weight: 550;
  --h6: 0.95em;
  --h6-color: rgb(38, 38, 38);
  --h6-weight: 550;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(158, 158, 158);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(230, 230, 230);
  --icon-color: rgb(89, 89, 89);
  --icon-color-active: rgb(81, 158, 93);
  --icon-color-focused: rgb(38, 38, 38);
  --icon-color-hover: rgb(89, 89, 89);
  --icon-hex: 000;
  --icon-muted: 0.5;
  --inline-title-color: rgb(38, 38, 38);
  --inline-title-weight: 600;
  --input-date-separator: rgb(158, 158, 158);
  --input-height: 32px;
  --input-placeholder-color: rgb(158, 158, 158);
  --interactive-accent: rgb(110, 180, 121);
  --interactive-accent-hover: rgb(81, 158, 93);
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --interactive-success: #197300;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color: rgb(81, 158, 93);
  --link-color-hover: rgb(64, 125, 73);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(81, 158, 93);
  --link-external-color-hover: rgb(64, 125, 73);
  --link-unresolved-color: rgb(81, 158, 93);
  --list-marker-color: rgb(158, 158, 158);
  --list-marker-color-collapsed: rgb(81, 158, 93);
  --list-marker-color-hover: rgb(89, 89, 89);
  --max-width: 88%;
  --menu-background: rgb(228, 220, 200);
  --menu-border-color: rgb(214, 214, 214);
  --menu-radius: 5px;
  --metadata-border-color: rgb(230, 230, 230);
  --metadata-divider-color: rgb(230, 230, 230);
  --metadata-input-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.813em;
  --metadata-input-text-color: rgb(38, 38, 38);
  --metadata-label-font: '??', "iA Writer Quattro S", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.688em;
  --metadata-label-text-color: rgb(89, 89, 89);
  --metadata-label-text-color-hover: rgb(89, 89, 89);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(194, 194, 194);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(214, 214, 214);
  --modal-background: rgb(252, 245, 228);
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(158, 158, 158);
  --nav-collapse-icon-color-collapsed: rgb(158, 158, 158);
  --nav-heading-color: rgb(38, 38, 38);
  --nav-heading-color-collapsed: rgb(158, 158, 158);
  --nav-heading-color-collapsed-hover: rgb(89, 89, 89);
  --nav-heading-color-hover: rgb(38, 38, 38);
  --nav-item-color: rgb(89, 89, 89);
  --nav-item-color-active: rgb(38, 38, 38);
  --nav-item-color-highlighted: rgb(81, 158, 93);
  --nav-item-color-hover: rgb(38, 38, 38);
  --nav-item-color-selected: rgb(38, 38, 38);
  --nav-item-radius: 2px;
  --nav-tag-color: rgb(158, 158, 158);
  --nav-tag-color-active: rgb(89, 89, 89);
  --nav-tag-color-hover: rgb(89, 89, 89);
  --nav-tag-radius: 2px;
  --normal-weight: 500;
  --orange: #e87d3e;
  --pdf-background: rgb(252, 245, 228);
  --pdf-page-background: rgb(252, 245, 228);
  --pdf-sidebar-background: rgb(252, 245, 228);
  --pill-border-color: rgb(230, 230, 230);
  --pill-border-color-hover: rgb(214, 214, 214);
  --pill-color: rgb(89, 89, 89);
  --pill-color-hover: rgb(38, 38, 38);
  --pill-color-remove: rgb(158, 158, 158);
  --pill-color-remove-hover: rgb(81, 158, 93);
  --pink: #b05279;
  --prompt-background: rgb(252, 245, 228);
  --purple: #9e86c8;
  --radius-l: 10px;
  --radius-m: 5px;
  --radius-s: 2px;
  --raised-background: color-mix(in srgb, rgb(252, 245, 228) 65%, transparent) linear-gradient(rgb(252, 245, 228), color-mix(in srgb, rgb(252, 245, 228) 65%, transparent));
  --ribbon-background: rgb(228, 220, 200);
  --ribbon-background-collapsed: rgb(252, 245, 228);
  --scrollbar-radius: 10px;
  --search-clear-button-color: rgb(89, 89, 89);
  --search-icon-color: rgb(89, 89, 89);
  --search-result-background: rgb(252, 245, 228);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(38, 38, 38);
  --setting-items-background: #fcf5e4;
  --setting-items-border-color: rgb(230, 230, 230);
  --setting-items-radius: 10px;
  --slider-thumb-border-color: rgb(214, 214, 214);
  --slider-track-background: rgb(230, 230, 230);
  --status-bar-background: rgb(228, 220, 200);
  --status-bar-border-color: rgb(230, 230, 230);
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: rgb(89, 89, 89);
  --suggestion-background: rgb(252, 245, 228);
  --tab-background-active: rgb(252, 245, 228);
  --tab-container-background: rgb(228, 220, 200);
  --tab-divider-color: rgb(214, 214, 214);
  --tab-outline-color: rgb(230, 230, 230);
  --tab-radius: 2px;
  --tab-switcher-background: rgb(228, 220, 200);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(228, 220, 200), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(81, 158, 93);
  --tab-text-color: rgb(158, 158, 158);
  --tab-text-color-active: rgb(89, 89, 89);
  --tab-text-color-focused: rgb(89, 89, 89);
  --tab-text-color-focused-active: rgb(89, 89, 89);
  --tab-text-color-focused-active-current: rgb(38, 38, 38);
  --tab-text-color-focused-highlighted: rgb(81, 158, 93);
  --table-add-button-border-color: rgb(230, 230, 230);
  --table-border-color: rgb(230, 230, 230);
  --table-drag-handle-background-active: rgb(110, 180, 121);
  --table-drag-handle-color: rgb(158, 158, 158);
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: rgb(230, 230, 230);
  --table-header-color: rgb(38, 38, 38);
  --table-selection-border-color: rgb(110, 180, 121);
  --tag-color: rgb(81, 158, 93);
  --tag-color-hover: rgb(81, 158, 93);
  --tag-size: 0.688em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(81, 158, 93);
  --text-accent-hover: rgb(64, 125, 73);
  --text-faint: rgb(158, 158, 158);
  --text-highlight-bg: rgba(255, 225, 0, 0.5);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: rgb(89, 89, 89);
  --text-normal: rgb(38, 38, 38);
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(204, 230, 255, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --theme-accent-d: 46.7%;
  --theme-accent-h: 129;
  --theme-accent-l: 46.7%;
  --theme-accent-s: 31.9%;
  --titleFont: var(--font-text);
  --titlebar-background: rgb(228, 220, 200);
  --titlebar-background-focused: #fcf5e4;
  --titlebar-border-color: rgb(230, 230, 230);
  --titlebar-text-color: rgb(89, 89, 89);
  --titlebar-text-color-focused: rgb(38, 38, 38);
  --vault-profile-color: rgb(38, 38, 38);
  --vault-profile-color-hover: rgb(38, 38, 38);
  --vim-cursor: hsla(
    129,
    32%,
    47%,
    0.8
  );
  --yellow: #e5b567;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(228, 220, 200);
  color: rgb(38, 38, 38);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 245, 228);
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(228, 220, 200);
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(228, 220, 200);
  border-left-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
}

body div#quartz-root {
  background-color: rgb(252, 245, 228);
  color: rgb(38, 38, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > em, em {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > i, i {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > strong, strong {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body del {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: line-through rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body p {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 89, 89) none 0px;
  text-decoration: rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}`,
    links: `body a.external, footer a {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration: underline rgb(81, 157, 92);
  text-decoration-color: rgb(81, 157, 92);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration: rgb(81, 157, 92);
  text-decoration-color: rgb(81, 157, 92);
}

body a.internal.broken {
  color: rgb(81, 157, 92);
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(38, 38, 38);
}

body dt {
  color: rgb(38, 38, 38);
}

body ol > li {
  color: rgb(38, 38, 38);
}

body ol.overflow {
  background-color: rgb(252, 245, 228);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body ul > li {
  color: rgb(38, 38, 38);
}

body ul.overflow {
  background-color: rgb(252, 245, 228);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(158, 158, 158);
  text-decoration: rgb(158, 158, 158);
}

body blockquote {
  font-family: "iA Writer Quattro S";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body table {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  width: 662px;
}

body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
  padding-bottom: 2.66667px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 2.66667px;
}

body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
  padding-bottom: 5.33333px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 5.33333px;
}`,
    code: `body code {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

body pre > code, pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `body .file-embed {
  background-color: rgb(252, 245, 228);
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(89, 89, 89);
  text-decoration: line-through rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 245, 228);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(228, 220, 200);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.016px;
  border-bottom-right-radius: 26.016px;
  border-top-left-radius: 26.016px;
  border-top-right-radius: 26.016px;
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(81, 157, 92);
}

body h1 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

body h2 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

body h2.page-title, h2.page-title a {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

body h3 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

body h4 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

body h5 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

body h6 {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 245, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 245, 228);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(89, 89, 89);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(89, 89, 89);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(89, 89, 89);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(89, 89, 89);
}`,
    footer: `body footer {
  background-color: rgb(228, 220, 200);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 5px;
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body li.section-li > .section .meta {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}

body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(89, 89, 89);
}

body .darkmode svg {
  color: rgb(89, 89, 89);
  stroke: rgb(89, 89, 89);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(89, 89, 89);
}

body .breadcrumb-element p {
  color: rgb(158, 158, 158);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(89, 89, 89);
  font-family: "iA Writer Quattro S";
}

body .metadata-properties {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(89, 89, 89);
  font-family: "iA Writer Quattro S";
}

body .navigation-progress {
  background-color: rgb(228, 220, 200);
}

body .page-header h2.page-title {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body input[type=text] {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(108, 153, 187);
  font-family: "??", "??", "JetBrains Mono";
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body sub {
  color: rgb(38, 38, 38);
}

body summary {
  color: rgb(38, 38, 38);
}

body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
