import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "things-3",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["formular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: #4d94f7;
  --accent-h: 213;
  --accent-l: 70%;
  --accent-s: 100%;
  --anim-motion-jumpy: cubic-bezier(.58,.53,.57,1.16);
  --background-modifier-active-hover: #5c9aff;
  --background-modifier-border: rgba(0, 0, 0, 0.2);
  --background-modifier-error: #f83366;
  --background-modifier-error-hover: #f83366;
  --background-modifier-hover: rgba(255, 255, 255, 0.04);
  --background-primary: #262626;
  --background-primary-alt: #2f2f2f;
  --background-secondary: #1a1a1a;
  --background-secondary-alt: #1c1c1c;
  --bases-cards-background: #262626;
  --bases-cards-border-width: 0.5px;
  --bases-cards-cover-background: #2f2f2f;
  --bases-cards-radius: 18px;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  --bases-embed-border-color: rgba(0, 0, 0, 0.2);
  --bases-embed-border-radius: 10px;
  --bases-group-heading-property-color: #c0c0c0;
  --bases-group-heading-value-weight: 500;
  --bases-header-border-width: 0 0 0.5px 0;
  --bases-table-border-color: rgba(0, 0, 0, 0.2);
  --bases-table-cell-background-active: #262626;
  --bases-table-cell-background-disabled: #2f2f2f;
  --bases-table-cell-background-selected: rgba(102, 171, 255, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #4d94f7;
  --bases-table-column-border-width: 0.5px;
  --bases-table-container-border-radius: 10px;
  --bases-table-container-border-width: 0.5px;
  --bases-table-group-background: #2f2f2f;
  --bases-table-header-background: #262626;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.04);
  --bases-table-header-color: #c0c0c0;
  --bases-table-row-border-width: 0.5px;
  --bases-table-summary-background: #262626;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.04);
  --blockquote-background-color: rgba(128, 128, 128, 0.07);
  --blockquote-border-color: #4d94f7;
  --blur-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --border-width: 0.5px;
  --button-radius: 26px;
  --callout-radius: 10px;
  --canvas-background: #262626;
  --canvas-controls-radius: 10px;
  --checkbox-border-color: rgba(70, 70, 70, 0.9);
  --checkbox-border-color-hover: #c0c0c0;
  --checkbox-color: #4d94f7;
  --checkbox-color-hover: rgb(71, 145, 235);
  --checkbox-marker-color: #262626;
  --checkbox-radius: 10px;
  --checklist-done-color: #8a919b;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 26px;
  --code-background: #3B3B3B;
  --code-border-color: rgba(0, 0, 0, 0.2);
  --code-bracket-background: rgba(255, 255, 255, 0.04);
  --code-function: #ffd500;
  --code-operator: #f83366;
  --code-property: #54ada4;
  --code-punctuation: #c0c0c0;
  --code-radius: 10px;
  --code-tag: #f83366;
  --collapse-icon-color-collapsed: hsl(210, 102%, 80.5%);
  --color-accent: #4d94f7;
  --color-accent-1: hsl(210, 102%, 80.5%);
  --color-accent-2: rgb(71, 145, 235);
  --color-accent-hsl: 213, 100%, 70%;
  --color-blue: #23abf2;
  --color-cyan: #54ada4;
  --color-grey: #818893;
  --color-red: #f83366;
  --color-red-trans: rgba(255, 83, 131, 0.3);
  --color-yellow: #ffd500;
  --dark: var(--text-muted);
  --darkgray: var(--text-muted);
  --div-color: rgba(70, 70, 70, 0.9);
  --divider-color: rgba(0, 0, 0, 0.05);
  --divider-color-hover: #4d94f7;
  --dnc-stroke: 1.95px;
  --dropdown-background: rgba(70, 70, 70, 0.9);
  --dropdown-background-hover: rgba(100, 115, 120, 0.1);
  --element-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  --embed-border-start: 2px solid #4d94f7;
  --embed-padding: 0px;
  --file-header-background: #262626;
  --file-header-background-focused: #262626;
  --file-header-border: 0.5px solid transparent;
  --flair-background: #1a1a1a;
  --font-bold: 600;
  --font-semibold: 500;
  --footnote-divider-color: #1a1a1a;
  --footnote-divider-width: 0.5px;
  --footnote-id-color: #c0c0c0;
  --footnote-input-background-active: rgba(255, 255, 255, 0.04);
  --footnote-radius: 10px;
  --graph-node: #c0c0c0;
  --graph-node-attachment: #ffd500;
  --graph-node-focused: hsl(210, 102%, 80.5%);
  --gray: var(--text-muted);
  --heading-spacing: 3.75rem;
  --highlight: var(--background-modifier-hover);
  --hr-color: rgba(0, 0, 0, 0.2);
  --icon-color: #818893;
  --icon-color-active: hsl(210, 102%, 80.5%);
  --icon-color-hover: #c0c0c0;
  --icon-l-stroke-width: 1.5px;
  --icon-stroke: 1.5px;
  --indentation-guide-width: 0.5px;
  --indentation-guide-width-active: 0.5px;
  --input-border-width: 0.5px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: #4d94f7;
  --interactive-accent-hover: rgb(71, 145, 235);
  --interactive-accent-hsl: 213, 100%, 70%;
  --interactive-hover: rgba(100, 115, 120, 0.1);
  --interactive-normal: #1a1a1a;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: hsl(210, 102%, 80.5%);
  --link-color-hover: rgb(71, 145, 235);
  --link-external-color: hsl(210, 102%, 80.5%);
  --link-external-color-hover: rgb(71, 145, 235);
  --link-unresolved-color: hsl(210, 102%, 80.5%);
  --link-unresolved-decoration-color: rgba(102, 171, 255, 0.3);
  --list-marker-color-collapsed: hsl(210, 102%, 80.5%);
  --list-marker-color-hover: #c0c0c0;
  --list-spacing: 0em;
  --menu-background: #1a1a1a;
  --menu-border-width: 0.5px;
  --menu-radius: 18px;
  --metadata-border-color: rgba(0, 0, 0, 0.2);
  --metadata-divider-color: #1a1a1a;
  --metadata-input-background-active: rgba(255, 255, 255, 0.04);
  --metadata-label-background-active: rgba(255, 255, 255, 0.04);
  --metadata-label-text-color: #c0c0c0;
  --metadata-label-text-color-hover: #c0c0c0;
  --metadata-property-background-active: rgba(255, 255, 255, 0.04);
  --metadata-property-box-shadow: none;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #3f3f3f;
  --mobile-glass-border: color-mix(in srgb, rgb(255, 255, 255) 15%, transparent);
  --modal-background: color-mix(in srgb, #1c1c1c 95%, transparent);
  --modal-border-width: 0.5px;
  --modal-radius: 26px;
  --nav-heading-color-collapsed-hover: #c0c0c0;
  --nav-indentation-guide-width: 0.5px;
  --nav-item-background-active: rgba(255, 255, 255, 0.04);
  --nav-item-background-hover: none;
  --nav-item-background-selected: rgba(102, 171, 255, 0.15);
  --nav-item-color: #c0c0c0;
  --nav-item-color-highlighted: hsl(210, 102%, 80.5%);
  --nav-item-radius: 10px;
  --nav-tag-color-active: #c0c0c0;
  --nav-tag-color-hover: #c0c0c0;
  --nav-tag-radius: 10px;
  --nav-tag-weight: 500;
  --p-spacing: 1.5rem;
  --pdf-background: #262626;
  --pdf-page-background: #262626;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  --pdf-sidebar-background: #262626;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  --pill-background: rgb(50, 50, 50);
  --pill-border-color: rgba(0, 0, 0, 0.2);
  --pill-color: #c0c0c0;
  --pill-color-remove-hover: hsl(210, 102%, 80.5%);
  --prompt-background: #262626;
  --prompt-border-width: 0.5px;
  --properties-background: rgb(35, 35, 35);
  --radius-l: 26px;
  --radius-m: 18px;
  --radius-s: 10px;
  --raised-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --ribbon-background: #1a1a1a;
  --ribbon-background-collapsed: #262626;
  --scrollbar-radius: 26px;
  --search-clear-button-color: #c0c0c0;
  --search-icon-color: #c0c0c0;
  --search-result-background: #262626;
  --secondary: var(--text-accent);
  --selected-item: #286bbd;
  --setting-group-heading-weight: 500;
  --setting-items-background: #2f2f2f;
  --setting-items-border-color: rgba(0, 0, 0, 0.2);
  --setting-items-radius: 26px;
  --slider-thumb-border-width: 0.5px;
  --slider-track-background: rgba(0, 0, 0, 0.2);
  --status-bar-background: #1a1a1a;
  --status-bar-border-color: rgba(0, 0, 0, 0.05);
  --status-bar-border-width: 0.5px 0 0 0.5px;
  --status-bar-radius: 18px 0 0 0;
  --status-bar-text-color: #c0c0c0;
  --statusbar-glass-bg: color-mix(in srgb, #262626 35%, transparent);
  --statusbar-glass-border: rgba(100, 100, 100, 0.1);
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  --suggestion-background: #262626;
  --sync-avatar-color-1: #f83366;
  --sync-avatar-color-3: #ffd500;
  --sync-avatar-color-5: #54ada4;
  --sync-avatar-color-6: #23abf2;
  --tab-background-active: #262626;
  --tab-container-background: #1a1a1a;
  --tab-curve: 0px;
  --tab-outline-color: rgba(0, 0, 0, 0.05);
  --tab-radius: 18px;
  --tab-radius-active: 12px 12px 0px 0px;
  --tab-stacked-pane-width: 1200px;
  --tab-switcher-background: #1a1a1a;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #4d94f7;
  --tab-text-color-active: #c0c0c0;
  --tab-text-color-focused: #c0c0c0;
  --tab-text-color-focused-active: #c0c0c0;
  --tab-text-color-focused-highlighted: hsl(210, 102%, 80.5%);
  --table-add-button-border-color: rgba(0, 0, 0, 0.2);
  --table-border-color: rgba(0, 0, 0, 0.2);
  --table-drag-handle-background-active: #4d94f7;
  --table-drag-handle-color-active: #1f1f1f;
  --table-header-border-color: rgba(0, 0, 0, 0.2);
  --table-selection: rgba(102, 171, 255, 0.1);
  --table-selection-border-color: #4d94f7;
  --tag-background: rgba(102, 171, 255, 0.1);
  --tag-background-hover: rgba(102, 171, 255, 0.2);
  --tag-border-color: rgba(102, 171, 255, 0.15);
  --tag-border-color-hover: rgba(102, 171, 255, 0.15);
  --tag-color: #f1f1f1;
  --tag-color-hover: hsl(210, 102%, 80.5%);
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(210, 102%, 80.5%);
  --text-accent-hover: rgb(71, 145, 235);
  --text-error: #f83366;
  --text-extreme: #ffffff;
  --text-muted: #c0c0c0;
  --text-on-accent: #1f1f1f;
  --text-selection: rgba(102, 171, 255, 0.33);
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #1a1a1a;
  --titlebar-background-focused: #1a1a1a;
  --titlebar-border-color: rgba(0, 0, 0, 0.2);
  --titlebar-text-color: #c0c0c0;
  --titlebar-text-weight: 600;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: rgba(0, 0, 0, 0.05);
}

body div#quartz-root {
  background-color: rgb(38, 38, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(192, 192, 192);
  outline: rgb(192, 192, 192) none 0px;
  text-decoration: rgb(192, 192, 192);
  text-decoration-color: rgb(192, 192, 192);
}`,
    links: `body a.external, footer a {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration: rgb(77, 148, 247);
  text-decoration-color: rgb(77, 148, 247);
  transition: opacity 0.25s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration: rgb(77, 148, 247);
  text-decoration-color: rgb(77, 148, 247);
}

body a.internal.broken {
  color: rgb(77, 148, 247);
  outline: rgb(77, 148, 247) none 0px;
  text-decoration: rgb(77, 148, 247);
  text-decoration-color: rgb(77, 148, 247);
}`,
    lists: `body ol.overflow {
  background-color: rgb(38, 38, 38);
}

body ul.overflow {
  background-color: rgb(38, 38, 38);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(128, 128, 128, 0.07);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body td {
  border-bottom-color: rgba(70, 70, 70, 0.9);
  border-left-color: rgba(70, 70, 70, 0.9);
  border-right-color: rgba(70, 70, 70, 0.9);
  border-top-color: rgba(70, 70, 70, 0.9);
}

body th {
  border-bottom-color: rgba(70, 70, 70, 0.9);
  border-left-color: rgba(70, 70, 70, 0.9);
  border-right-color: rgba(70, 70, 70, 0.9);
  border-top-color: rgba(70, 70, 70, 0.9);
}`,
    code: `body code {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: "SF Mono", Menlo, monospace;
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 213, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 213, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 213, 0);
  border-left-color: rgb(255, 213, 0);
  border-right-color: rgb(255, 213, 0);
  border-top-color: rgb(255, 213, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body pre:has(> code) {
  background-color: rgb(59, 59, 59);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `body img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .transclude {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}

body .transclude-inner {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 145, 155);
  text-decoration: rgb(138, 145, 155);
  text-decoration-color: rgb(138, 145, 155);
}

body input[type=checkbox] {
  border-bottom-color: rgba(70, 70, 70, 0.9);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(70, 70, 70, 0.9);
  border-left-width: 2px;
  border-right-color: rgba(70, 70, 70, 0.9);
  border-right-width: 2px;
  border-top-color: rgba(70, 70, 70, 0.9);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  transition: box-shadow 0.25s ease-in-out;
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search > .search-container > .search-space {
  background-color: color(srgb 0.109804 0.109804 0.109804 / 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 40px 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(40, 107, 189);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search > .search-container > .search-space > input {
  background-color: rgba(128, 128, 128, 0.3);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(40, 107, 189);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(40, 107, 189);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(47, 113, 85);
  border-bottom-color: rgba(102, 171, 255, 0.15);
  border-left-color: rgba(102, 171, 255, 0.15);
  border-right-color: rgba(102, 171, 255, 0.15);
  border-top-color: rgba(102, 171, 255, 0.15);
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(241, 241, 241);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
}

body h6 {
  color: rgb(77, 148, 247);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  color: rgb(218, 218, 218);
  font-weight: 550;
  text-decoration: rgb(218, 218, 218);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
  font-weight: 550;
  text-decoration: rgb(218, 218, 218);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    toc: `body li.depth-0 {
  font-weight: 550;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}`,
    footer: `body footer {
  background-color: color(srgb 0.14902 0.14902 0.14902 / 0.35);
  border-bottom-color: rgba(100, 100, 100, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-bottom-width: 1px;
  border-left-color: rgba(100, 100, 100, 0.1);
  border-right-color: rgba(100, 100, 100, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(100, 100, 100, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(192, 192, 192);
}

body footer ul li a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(192, 192, 192);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(192, 192, 192);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}

body .darkmode svg {
  color: rgb(129, 136, 147);
  stroke: rgb(129, 136, 147);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(77, 148, 247);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(77, 148, 247);
  border-right-color: rgb(77, 148, 247);
  border-top-color: rgb(77, 148, 247);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(77, 148, 247);
}`,
    misc: `body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(192, 192, 192);
}

body .metadata-properties {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(192, 192, 192);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .navigation-progress {
  background-color: color(srgb 0.14902 0.14902 0.14902 / 0.35);
}

body input[type=text] {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

body kbd {
  background-color: rgb(59, 59, 59);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: #0062c1;
  --accent-h: 210;
  --accent-l: 38%;
  --accent-s: 100%;
  --anim-motion-jumpy: cubic-bezier(.58,.53,.57,1.16);
  --background-modifier-active-hover: #5c9aff;
  --background-modifier-border: rgba(200, 200, 200, 0.1);
  --background-modifier-error: #f83366;
  --background-modifier-error-hover: #f83366;
  --background-modifier-hover: rgba(0, 0, 0, 0.04);
  --background-secondary: #f5f6f8;
  --bases-cards-border-width: 0.5px;
  --bases-cards-radius: 18px;
  --bases-cards-shadow: 0 0 0 1px rgba(200, 200, 200, 0.1);
  --bases-embed-border-color: rgba(200, 200, 200, 0.1);
  --bases-embed-border-radius: 10px;
  --bases-group-heading-property-color: #3f3f3f;
  --bases-group-heading-value-weight: 500;
  --bases-header-border-width: 0 0 0.5px 0;
  --bases-table-border-color: rgba(200, 200, 200, 0.1);
  --bases-table-cell-background-selected: rgba(0, 97, 194, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #67acff;
  --bases-table-column-border-width: 0.5px;
  --bases-table-container-border-radius: 10px;
  --bases-table-container-border-width: 0.5px;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.04);
  --bases-table-header-color: #3f3f3f;
  --bases-table-row-border-width: 0.5px;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.04);
  --blockquote-background-color: rgba(128, 128, 128, 0.07);
  --blockquote-border-color: #67acff;
  --border-width: 0.5px;
  --button-radius: 26px;
  --callout-radius: 10px;
  --canvas-controls-radius: 10px;
  --caret-color: #2d2e34;
  --checkbox-border-color: rgba(128, 128, 128, 0.3);
  --checkbox-border-color-hover: #3f3f3f;
  --checkbox-color: #0062c1;
  --checkbox-color-hover: rgb(30, 130, 230);
  --checkbox-radius: 10px;
  --checklist-done-color: #82868a;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 26px;
  --code-background: #f9f9f9;
  --code-border-color: rgba(200, 200, 200, 0.1);
  --code-bracket-background: rgba(0, 0, 0, 0.04);
  --code-function: #ffd500;
  --code-normal: #2d2e34;
  --code-operator: #f83366;
  --code-property: #54ada4;
  --code-punctuation: #3f3f3f;
  --code-radius: 10px;
  --code-tag: #f83366;
  --collapse-icon-color-collapsed: #0062c1;
  --color-accent: #0062c1;
  --color-accent-1: hsl(209, 101%, 40.85%);
  --color-accent-2: rgb(30, 130, 230);
  --color-accent-hsl: 210, 100%, 38%;
  --color-blue: #23abf2;
  --color-cyan: #54ada4;
  --color-grey: #818893;
  --color-red: #f83366;
  --color-red-trans: rgba(255, 83, 131, 0.3);
  --color-yellow: #ffd500;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --div-color: rgba(210, 210, 210, 0.5);
  --divider-color: rgba(0, 0, 0, 0.05);
  --divider-color-hover: #67acff;
  --dnc-stroke: 1.95px;
  --dropdown-background: rgba(150, 150, 150, 0.1);
  --dropdown-background-hover: rgba(100, 115, 120, 0.1);
  --element-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  --embed-block-shadow-hover: 0 0 0 1px rgba(200, 200, 200, 0.1), inset 0 0 0 1px rgba(200, 200, 200, 0.1);
  --embed-border-start: 2px solid #67acff;
  --embed-padding: 0px;
  --file-header-border: 0.5px solid transparent;
  --flair-background: #f5f6f8;
  --flair-color: #2d2e34;
  --font-bold: 600;
  --font-semibold: 500;
  --footnote-divider-color: #f5f6f8;
  --footnote-divider-width: 0.5px;
  --footnote-id-color: #3f3f3f;
  --footnote-input-background-active: rgba(0, 0, 0, 0.04);
  --footnote-radius: 10px;
  --graph-node: #3f3f3f;
  --graph-node-attachment: #ffd500;
  --graph-node-focused: #0062c1;
  --graph-text: #2d2e34;
  --gray: var(--text-muted);
  --heading-spacing: 3.75rem;
  --highlight: var(--background-modifier-hover);
  --hr-color: rgba(200, 200, 200, 0.1);
  --icon-color: #818893;
  --icon-color-active: #0062c1;
  --icon-color-focused: #2d2e34;
  --icon-color-hover: #3f3f3f;
  --icon-l-stroke-width: 1.5px;
  --icon-stroke: 1.5px;
  --indentation-guide-width: 0.5px;
  --indentation-guide-width-active: 0.5px;
  --input-border-width: 0.5px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: #67acff;
  --interactive-accent-hover: rgb(30, 130, 230);
  --interactive-accent-hsl: 210, 100%, 38%;
  --interactive-hover: rgba(100, 115, 120, 0.1);
  --interactive-normal: #f5f6f8;
  --lightgray: var(--background-secondary);
  --link-color: #0062c1;
  --link-color-hover: rgb(30, 130, 230);
  --link-external-color: #0062c1;
  --link-external-color-hover: rgb(30, 130, 230);
  --link-unresolved-color: #0062c1;
  --link-unresolved-decoration-color: rgba(0, 97, 194, 0.3);
  --list-marker-color-collapsed: #0062c1;
  --list-marker-color-hover: #3f3f3f;
  --list-spacing: 0em;
  --menu-background: #3f4347;
  --menu-border-width: 0.5px;
  --menu-radius: 18px;
  --metadata-border-color: rgba(200, 200, 200, 0.1);
  --metadata-divider-color: #f5f6f8;
  --metadata-input-background-active: rgba(0, 0, 0, 0.04);
  --metadata-input-text-color: #2d2e34;
  --metadata-label-background-active: rgba(0, 0, 0, 0.04);
  --metadata-label-text-color: #3f3f3f;
  --metadata-label-text-color-hover: #3f3f3f;
  --metadata-property-background-active: rgba(0, 0, 0, 0.04);
  --metadata-property-box-shadow: none;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #d4d4d4;
  --mobile-glass-border: color-mix(in srgb, rgb(255, 255, 255) 80%, transparent);
  --modal-background: color-mix(in srgb, #fcfcfc 95%, transparent);
  --modal-border-width: 0.5px;
  --modal-radius: 26px;
  --nav-heading-color: #2d2e34;
  --nav-heading-color-collapsed-hover: #3f3f3f;
  --nav-heading-color-hover: #2d2e34;
  --nav-indentation-guide-width: 0.5px;
  --nav-item-background-active: rgba(0, 0, 0, 0.04);
  --nav-item-background-hover: none;
  --nav-item-background-selected: rgba(0, 97, 194, 0.15);
  --nav-item-color: #3f3f3f;
  --nav-item-color-active: #2d2e34;
  --nav-item-color-highlighted: #0062c1;
  --nav-item-color-hover: #2d2e34;
  --nav-item-color-selected: #2d2e34;
  --nav-item-radius: 10px;
  --nav-tag-color-active: #3f3f3f;
  --nav-tag-color-hover: #3f3f3f;
  --nav-tag-radius: 10px;
  --nav-tag-weight: 500;
  --p-spacing: 1.5rem;
  --pill-background: rgb(237, 237, 237);
  --pill-border-color: rgba(200, 200, 200, 0.1);
  --pill-color: #3f3f3f;
  --pill-color-hover: #2d2e34;
  --pill-color-remove-hover: #0062c1;
  --prompt-border-width: 0.5px;
  --properties-background: #f5f6f8;
  --radius-l: 26px;
  --radius-m: 18px;
  --radius-s: 10px;
  --ribbon-background: #f5f6f8;
  --scrollbar-radius: 26px;
  --search-clear-button-color: #3f3f3f;
  --search-icon-color: #3f3f3f;
  --secondary: var(--text-accent);
  --selected-item: #c3d8ff;
  --setting-group-heading-color: #2d2e34;
  --setting-group-heading-weight: 500;
  --setting-items-border-color: rgba(200, 200, 200, 0.1);
  --setting-items-radius: 26px;
  --slider-thumb-border-width: 0.5px;
  --slider-track-background: rgba(200, 200, 200, 0.1);
  --status-bar-background: #f5f6f8;
  --status-bar-border-color: rgba(0, 0, 0, 0.05);
  --status-bar-border-width: 0.5px 0 0 0.5px;
  --status-bar-radius: 18px 0 0 0;
  --status-bar-text-color: #3f3f3f;
  --statusbar-glass-bg: color-mix(in srgb, #ffffff 35%, transparent);
  --statusbar-glass-border: rgba(250, 250, 250, 0.5);
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  --sync-avatar-color-1: #f83366;
  --sync-avatar-color-3: #ffd500;
  --sync-avatar-color-5: #54ada4;
  --sync-avatar-color-6: #23abf2;
  --tab-container-background: #f5f6f8;
  --tab-curve: 0px;
  --tab-outline-color: rgba(0, 0, 0, 0.05);
  --tab-radius: 18px;
  --tab-radius-active: 12px 12px 0px 0px;
  --tab-stacked-pane-width: 1200px;
  --tab-switcher-background: #f5f6f8;
  --tab-switcher-menubar-background: linear-gradient(to top, #f5f6f8, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #0062c1;
  --tab-text-color-active: #3f3f3f;
  --tab-text-color-focused: #3f3f3f;
  --tab-text-color-focused-active: #3f3f3f;
  --tab-text-color-focused-active-current: #2d2e34;
  --tab-text-color-focused-highlighted: #0062c1;
  --table-add-button-border-color: rgba(200, 200, 200, 0.1);
  --table-border-color: rgba(200, 200, 200, 0.1);
  --table-drag-handle-background-active: #67acff;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: rgba(200, 200, 200, 0.1);
  --table-header-color: #2d2e34;
  --table-selection: rgba(0, 97, 194, 0.1);
  --table-selection-border-color: #67acff;
  --tag-background: rgba(0, 97, 194, 0.1);
  --tag-background-hover: rgba(0, 97, 194, 0.2);
  --tag-border-color: rgba(0, 97, 194, 0.15);
  --tag-border-color-hover: rgba(0, 97, 194, 0.15);
  --tag-color: #1e7d58;
  --tag-color-hover: #0062c1;
  --tertiary: var(--text-accent-hover);
  --text-accent: #0062c1;
  --text-accent-hover: rgb(30, 130, 230);
  --text-error: #f83366;
  --text-extreme: #000000;
  --text-muted: #3f3f3f;
  --text-normal: #2d2e34;
  --text-on-accent: #ffffff;
  --text-selection: rgba(0, 97, 194, 0.2);
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #f5f6f8;
  --titlebar-background-focused: #f5f6f8;
  --titlebar-border-color: rgba(200, 200, 200, 0.1);
  --titlebar-text-color: #3f3f3f;
  --titlebar-text-color-focused: #2d2e34;
  --titlebar-text-weight: 600;
  --vault-profile-color: #2d2e34;
  --vault-profile-color-hover: #2d2e34;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 246, 248);
  color: rgb(45, 46, 52);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(45, 46, 52);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 246, 248);
  color: rgb(45, 46, 52);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 246, 248);
  border-left-color: rgba(0, 0, 0, 0.05);
  color: rgb(45, 46, 52);
}

body div#quartz-root {
  color: rgb(45, 46, 52);
}`,
    typography: `body .page article p > b, b {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body .page article p > em, em {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body .page article p > i, i {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body .page article p > strong, strong {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body .text-highlight {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body del {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: line-through rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body p {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration: rgb(0, 98, 193);
  text-decoration-color: rgb(0, 98, 193);
  transition: opacity 0.25s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration: rgb(0, 98, 193);
  text-decoration-color: rgb(0, 98, 193);
}

body a.internal.broken {
  color: rgb(0, 98, 193);
  outline: rgb(0, 98, 193) none 0px;
  text-decoration: rgb(0, 98, 193);
  text-decoration-color: rgb(0, 98, 193);
}`,
    lists: `body dd {
  color: rgb(45, 46, 52);
}

body dt {
  color: rgb(45, 46, 52);
}

body ol > li {
  color: rgb(45, 46, 52);
}

body ol.overflow {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

body ul > li {
  color: rgb(45, 46, 52);
}

body ul.overflow {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(128, 128, 128, 0.07);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

body table {
  color: rgb(45, 46, 52);
}

body td {
  border-bottom-color: rgba(210, 210, 210, 0.5);
  border-left-color: rgba(210, 210, 210, 0.5);
  border-right-color: rgba(210, 210, 210, 0.5);
  border-top-color: rgba(210, 210, 210, 0.5);
  color: rgb(45, 46, 52);
}

body th {
  border-bottom-color: rgba(210, 210, 210, 0.5);
  border-left-color: rgba(210, 210, 210, 0.5);
  border-right-color: rgba(210, 210, 210, 0.5);
  border-top-color: rgba(210, 210, 210, 0.5);
  color: rgb(45, 46, 52);
}`,
    code: `body code {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  color: rgb(45, 46, 52);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(45, 46, 52);
  font-family: "SF Mono", Menlo, monospace;
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 213, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 213, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 213, 0);
  border-left-color: rgb(255, 213, 0);
  border-right-color: rgb(255, 213, 0);
  border-top-color: rgb(255, 213, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body pre:has(> code) {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `body audio {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

body figcaption {
  color: rgb(45, 46, 52);
}

body figure {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

body img {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-radius: 10px;
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .footnotes {
  border-top-color: rgb(45, 46, 52);
  color: rgb(45, 46, 52);
}

body .transclude {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-left-width: 0px;
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}

body .transclude-inner {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-left-width: 0px;
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(130, 134, 138);
  text-decoration: rgb(130, 134, 138);
  text-decoration-color: rgb(130, 134, 138);
}

body input[type=checkbox] {
  border-bottom-color: rgba(128, 128, 128, 0.3);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(128, 128, 128, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(128, 128, 128, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(128, 128, 128, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  transition: box-shadow 0.25s ease-in-out;
}

body li.task-list-item[data-task='!'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='*'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='/'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='>'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='?'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='I'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='S'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='b'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='c'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='d'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='f'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='i'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='k'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='l'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='p'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='u'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body li.task-list-item[data-task='w'] {
  color: rgb(45, 46, 52);
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(45, 46, 52);
}

body .search > .search-container > .search-space {
  background-color: color(srgb 0.988235 0.988235 0.988235 / 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(45, 46, 52);
  outline: rgb(45, 46, 52) none 0px;
  text-decoration: rgb(45, 46, 52);
  text-decoration-color: rgb(45, 46, 52);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 46, 52);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(45, 46, 52);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(195, 216, 255);
  color: rgb(45, 46, 52);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search > .search-container > .search-space > input {
  background-color: rgba(128, 128, 128, 0.3);
  border-bottom-color: rgb(245, 246, 248);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(195, 216, 255);
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(45, 46, 52);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(195, 216, 255);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(45, 46, 52);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(195, 225, 211);
  border-bottom-color: rgba(0, 97, 194, 0.15);
  border-left-color: rgba(0, 97, 194, 0.15);
  border-right-color: rgba(0, 97, 194, 0.15);
  border-top-color: rgba(0, 97, 194, 0.15);
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(30, 125, 88);
}

body h1 {
  color: rgb(45, 46, 52);
}

body h2 {
  color: rgb(45, 46, 52);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

body h3 {
  color: rgb(45, 46, 52);
}

body h4 {
  color: rgb(45, 46, 52);
}

body h5 {
  color: rgb(45, 46, 52);
}

body h6 {
  color: rgb(0, 98, 193);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(45, 46, 52);
  font-weight: 550;
  text-decoration: rgb(45, 46, 52);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(45, 46, 52);
  font-weight: 550;
  text-decoration: rgb(45, 46, 52);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(45, 46, 52);
}`,
    toc: `body li.depth-0 {
  font-weight: 550;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}`,
    footer: `body footer {
  background-color: color(srgb 1 1 1 / 0.35);
  border-bottom-color: rgba(250, 250, 250, 0.5);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 250, 250, 0.5);
  border-right-color: rgba(250, 250, 250, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(250, 250, 250, 0.5);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(63, 63, 63);
}

body footer ul li a {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(45, 46, 52);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  color: rgb(45, 46, 52);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 63, 63);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

body li.section-li > .section .meta {
  color: rgb(63, 63, 63);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
}

body ul.section-ul {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(129, 136, 147);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(129, 136, 147);
  border-right-color: rgb(129, 136, 147);
  border-top-color: rgb(129, 136, 147);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  color: rgb(129, 136, 147);
}

body .darkmode svg {
  color: rgb(129, 136, 147);
  stroke: rgb(129, 136, 147);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(0, 98, 193);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(0, 98, 193);
  border-right-color: rgb(0, 98, 193);
  border-top-color: rgb(0, 98, 193);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(0, 98, 193);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  color: rgb(45, 46, 52);
}

body .metadata {
  border-bottom-color: rgba(200, 200, 200, 0.1);
  border-left-color: rgba(200, 200, 200, 0.1);
  border-right-color: rgba(200, 200, 200, 0.1);
  border-top-color: rgba(200, 200, 200, 0.1);
  color: rgb(63, 63, 63);
}

body .metadata-properties {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(63, 63, 63);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .navigation-progress {
  background-color: color(srgb 1 1 1 / 0.35);
}

body .page-header h2.page-title {
  color: rgb(45, 46, 52);
}

body abbr {
  color: rgb(45, 46, 52);
  text-decoration: underline dotted rgb(45, 46, 52);
}

body details {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

body input[type=text] {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

body kbd {
  background-color: rgb(249, 249, 249);
  border-bottom-color: rgb(45, 46, 52);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(45, 46, 52);
}

body progress {
  border-bottom-color: rgb(45, 46, 52);
  border-left-color: rgb(45, 46, 52);
  border-right-color: rgb(45, 46, 52);
  border-top-color: rgb(45, 46, 52);
}

body sub {
  color: rgb(45, 46, 52);
}

body summary {
  color: rgb(45, 46, 52);
}

body sup {
  color: rgb(45, 46, 52);
}`,
  },
};
