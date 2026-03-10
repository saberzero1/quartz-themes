import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "evilred", modes: ["dark"], variations: [], fonts: ["hack"] },
  dark: {
    base: `:root:root {
  --Editor-table-border-radius: 5px;
  --Editor-table-border-width: 2px;
  --background-modifier-border: #3d0404;
  --background-primary: #390000;
  --background-primary-alt: #390000;
  --background-secondary: #290202;
  --background-secondary-alt: #3d0404;
  --bases-cards-background: #390000;
  --bases-cards-cover-background: #390000;
  --bases-cards-shadow: 0 0 0 1px #3d0404;
  --bases-embed-border-color: #3d0404;
  --bases-group-heading-property-color: #e4d1cf;
  --bases-table-border-color: #3d0404;
  --bases-table-cell-background-active: #390000;
  --bases-table-cell-background-disabled: #390000;
  --bases-table-cell-shadow-focus: 0 0 0 2px #B50505;
  --bases-table-group-background: #390000;
  --bases-table-header-background: #390000;
  --bases-table-header-color: #e4d1cf;
  --bases-table-summary-background: #390000;
  --blockquote-border-color: #B50505;
  --bodyFont: var(--font-text);
  --canvas-background: #390000;
  --canvas-card-label-color: #ff8a8a;
  --caret-color: #fdf8ec;
  --checkbox-border-color: #ff8a8a;
  --checkbox-border-color-hover: #e4d1cf;
  --checkbox-color: #B50505;
  --checkbox-marker-color: #390000;
  --checklist-done-color: #e4d1cf;
  --code-background: #390000;
  --code-block: #cc0d0d;
  --code-border-color: #3d0404;
  --code-comment: #ff8a8a;
  --code-normal: #fdf8ec;
  --code-punctuation: #e4d1cf;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #ff8a8a;
  --collapse-icon-color-collapsed: #f3ad6b;
  --dark: var(--text-normal);
  --dark-orange: #83572f;
  --dark0: #390000;
  --dark1: #290202;
  --dark2: #3d0404;
  --dark3: #5c1818;
  --darkgray: var(--text-normal);
  --divider-color: #3d0404;
  --divider-color-hover: #B50505;
  --embed-block-shadow-hover: 0 0 0 1px #3d0404, inset 0 0 0 1px #3d0404;
  --embed-border-start: 2px solid #B50505;
  --file-header-background: #390000;
  --file-header-background-focused: #390000;
  --flair-color: #fdf8ec;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: #3d0404;
  --footnote-id-color: #e4d1cf;
  --footnote-id-color-no-occurrences: #ff8a8a;
  --frost0: #B50505;
  --frost1: #cc0d0d;
  --frost2: #81a1c1;
  --frost3: #FF9CFA;
  --graph-node: #e4d1cf;
  --graph-node-focused: #f3ad6b;
  --graph-node-unresolved: #ff8a8a;
  --graph-text: #fdf8ec;
  --gray: var(--text-muted);
  --green: #b0f078;
  --headerFont: var(--font-text);
  --heading-formatting: #ff8a8a;
  --highlight: var(--text-highlight-bg);
  --hr-color: #3d0404;
  --icon-color: #e4d1cf;
  --icon-color-active: #f3ad6b;
  --icon-color-focused: #fdf8ec;
  --icon-color-hover: #e4d1cf;
  --inline-code: #cc0d0d;
  --input-date-separator: #ff8a8a;
  --input-disabled-border-color: transparent;
  --input-focus-border-color: Highlight;
  --input-focus-outline: 1px solid Canvas;
  --input-hover-border-color: red;
  --input-placeholder-color: #ff8a8a;
  --input-unfocused-border-color: transparent;
  --interactive-accent: #B50505;
  --interactive-accent-rgb: #f3ad6b;
  --interactive-before: #5c1818;
  --light: var(--background-primary);
  --light0: #ff8a8a;
  --light1: #e4d1cf;
  --light2: #fdf8ec;
  --light3: #5fa57a;
  --lightgray: var(--background-secondary);
  --link-color: #f3ad6b;
  --link-external-color: #f3ad6b;
  --link-unresolved-color: #f3ad6b;
  --list-marker-color: #ff8a8a;
  --list-marker-color-collapsed: #f3ad6b;
  --list-marker-color-hover: #e4d1cf;
  --menu-background: #290202;
  --metadata-border-color: #3d0404;
  --metadata-divider-color: #3d0404;
  --metadata-input-text-color: #fdf8ec;
  --metadata-label-text-color: #e4d1cf;
  --metadata-label-text-color-hover: #e4d1cf;
  --modal-background: #390000;
  --nav-collapse-icon-color: #ff8a8a;
  --nav-collapse-icon-color-collapsed: #ff8a8a;
  --nav-heading-color: #fdf8ec;
  --nav-heading-color-collapsed: #ff8a8a;
  --nav-heading-color-collapsed-hover: #e4d1cf;
  --nav-heading-color-hover: #fdf8ec;
  --nav-item-color: #e4d1cf;
  --nav-item-color-active: #fdf8ec;
  --nav-item-color-highlighted: #f3ad6b;
  --nav-item-color-hover: #fdf8ec;
  --nav-item-color-selected: #fdf8ec;
  --nav-tag-color: #ff8a8a;
  --nav-tag-color-active: #e4d1cf;
  --nav-tag-color-hover: #e4d1cf;
  --orange: #f3ad6b;
  --pdf-background: #390000;
  --pdf-page-background: #390000;
  --pdf-shadow: 0 0 0 1px #3d0404;
  --pdf-sidebar-background: #390000;
  --pdf-thumbnail-shadow: 0 0 0 1px #3d0404;
  --pill-border-color: #3d0404;
  --pill-color: #e4d1cf;
  --pill-color-hover: #fdf8ec;
  --pill-color-remove: #ff8a8a;
  --pill-color-remove-hover: #f3ad6b;
  --pre-code: #290202;
  --prompt-background: #390000;
  --purple: #f899e7;
  --red: #d63f4e;
  --ribbon-background: #290202;
  --ribbon-background-collapsed: #390000;
  --search-clear-button-color: #e4d1cf;
  --search-icon-color: #e4d1cf;
  --search-result-background: #390000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #fdf8ec;
  --setting-items-background: #390000;
  --setting-items-border-color: #3d0404;
  --sideRed: #910b0bcc;
  --slider-track-background: #3d0404;
  --status-bar-background: #290202;
  --status-bar-border-color: #3d0404;
  --status-bar-text-color: #e4d1cf;
  --suggestion-background: #390000;
  --tab-background-active: #390000;
  --tab-container-background: #290202;
  --tab-outline-color: #3d0404;
  --tab-switcher-background: #290202;
  --tab-switcher-menubar-background: linear-gradient(to top, #290202, transparent);
  --tab-text-color: #ff8a8a;
  --tab-text-color-active: #e4d1cf;
  --tab-text-color-focused: #e4d1cf;
  --tab-text-color-focused-active: #e4d1cf;
  --tab-text-color-focused-active-current: #fdf8ec;
  --tab-text-color-focused-highlighted: #f3ad6b;
  --table-add-button-border-color: #3d0404;
  --table-border-color: #3d0404;
  --table-drag-handle-background-active: #B50505;
  --table-drag-handle-color: #ff8a8a;
  --table-header: rgb(34, 39, 47);
  --table-header-border-color: #3d0404;
  --table-header-color: #fdf8ec;
  --table-hover: #5c1818;
  --table-row-even: #2e21218a;
  --table-row-odd: #000000;
  --table-selection-border-color: #B50505;
  --tag-color: #f3ad6b;
  --tag-color-hover: #f3ad6b;
  --task-checkbox: #B50505;
  --tertiary: var(--text-accent);
  --text-a: #FF9CFA;
  --text-a-hover: #81a1c1;
  --text-accent: #f3ad6b;
  --text-faint: #ff8a8a;
  --text-highlight-bg: rgba(163, 190, 140, 0.3);
  --text-highlight-bg-active: #b0f078;
  --text-link: #B50505;
  --text-mark: rgba(147, 217, 236, 0.3);
  --text-muted: #e4d1cf;
  --text-normal: #fdf8ec;
  --text-selection: #5c1818;
  --text-tag: #B50505;
  --text-title-h1: #d63f4e;
  --text-title-h2: #f3ad6b;
  --text-title-h3: #ebcb8b;
  --text-title-h4: #b0f078;
  --text-title-h5: #f899e7;
  --text-title-h6: #f3ad6b;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #290202;
  --titlebar-background-focused: #3d0404;
  --titlebar-border-color: #3d0404;
  --titlebar-text-color: #e4d1cf;
  --titlebar-text-color-focused: #fdf8ec;
  --vault-profile-color: #fdf8ec;
  --vault-profile-color-hover: #fdf8ec;
  --vim-cursor: #f3ad6b;
  --yellow: #ebcb8b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(57, 0, 0);
  color: rgb(253, 248, 236);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(61, 4, 4);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 2, 2);
  border-left-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

body div#quartz-root {
  background-color: rgb(57, 0, 0);
  color: rgb(253, 248, 236);
}`,
    typography: `body .page article p > b, b {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body .page article p > em, em {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body .page article p > i, i {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body .page article p > strong, strong {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body .text-highlight {
  background-color: rgba(163, 190, 140, 0.3);
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body del {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration: line-through rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body p {
  color: rgb(228, 209, 207);
  outline: rgb(228, 209, 207) none 0px;
  text-decoration: rgb(228, 209, 207);
  text-decoration-color: rgb(228, 209, 207);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration: rgb(255, 156, 250);
  text-decoration-color: rgb(255, 156, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration: rgb(255, 156, 250);
  text-decoration-color: rgb(255, 156, 250);
}

body a.internal.broken {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration: rgb(255, 156, 250);
  text-decoration-color: rgb(255, 156, 250);
}`,
    lists: `body dd {
  color: rgb(253, 248, 236);
}

body dt {
  color: rgb(253, 248, 236);
}

body ol > li {
  color: rgb(253, 248, 236);
}

body ol.overflow {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body ul > li {
  color: rgb(253, 248, 236);
}

body ul.overflow {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(255, 156, 250);
  text-decoration: rgb(255, 156, 250);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body table {
  border-bottom-color: rgb(41, 2, 2);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 2, 2);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(41, 2, 2);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(41, 2, 2);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

body td {
  border-bottom-color: rgb(41, 2, 2);
  border-left-color: rgb(253, 248, 236);
  border-left-width: 0px;
  border-right-color: rgb(253, 248, 236);
  border-right-width: 0px;
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

body th {
  background-color: rgb(34, 39, 47);
  border-bottom-color: rgb(253, 248, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(253, 248, 236);
  border-left-width: 0px;
  border-right-color: rgb(253, 248, 236);
  border-right-width: 0px;
  border-top-color: rgb(253, 248, 236);
  border-top-width: 0px;
  color: rgb(253, 248, 236);
}

body thead {
  border-bottom-color: rgb(61, 4, 4);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 2, 2);
  border-right-color: rgb(41, 2, 2);
  border-top-color: rgb(41, 2, 2);
}

body tr {
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(41, 2, 2);
  border-right-color: rgb(41, 2, 2);
  border-top-color: rgb(41, 2, 2);
}`,
    code: `body code {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(204, 13, 13);
  border-left-color: rgb(204, 13, 13);
  border-right-color: rgb(204, 13, 13);
  border-top-color: rgb(204, 13, 13);
  color: rgb(204, 13, 13);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

body pre > code, pre:has(> code) {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
}

body pre:has(> code) {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
}`,
    images: `body audio {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body figcaption {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body img {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body video {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    embeds: `body .file-embed {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
}

body .footnotes {
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

body .transclude {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(228, 209, 207);
  text-decoration: line-through rgb(228, 209, 207);
  text-decoration-color: rgb(228, 209, 207);
}

body input[type=checkbox] {
  border-bottom-color: rgb(181, 5, 5);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
}

body li.task-list-item[data-task='!'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='*'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='-'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='/'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='>'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='?'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='I'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='S'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='b'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='c'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='d'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='f'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='i'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='k'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='l'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='p'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='u'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body li.task-list-item[data-task='w'] {
  color: rgb(253, 248, 236);
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

body .search > .search-container > .search-space {
  background-color: rgb(57, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(253, 248, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(253, 248, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(41, 2, 2);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

body a.internal.tag-link::before {
  color: rgb(243, 173, 107);
}

body h1 {
  color: rgb(214, 63, 78);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(243, 173, 107);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(235, 203, 139);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(176, 240, 120);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(248, 153, 231);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(243, 173, 107);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(57, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(57, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(228, 209, 207);
  text-decoration: rgb(228, 209, 207);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(228, 209, 207);
  text-decoration: rgb(228, 209, 207);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(228, 209, 207);
  text-decoration: rgb(228, 209, 207);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(253, 248, 236);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(253, 248, 236);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}`,
    footer: `body footer {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(228, 209, 207);
}

body footer ul li a {
  color: rgb(228, 209, 207);
  text-decoration: rgb(228, 209, 207);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(253, 248, 236);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(228, 209, 207);
  text-decoration: rgb(228, 209, 207);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(228, 209, 207);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body li.section-li > .section .meta {
  color: rgb(228, 209, 207);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(228, 209, 207);
  text-decoration: rgb(228, 209, 207);
}

body ul.section-ul {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

body .darkmode svg {
  color: rgb(228, 209, 207);
  stroke: rgb(228, 209, 207);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

body .breadcrumb-element p {
  color: rgb(255, 138, 138);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

body .metadata {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(204, 13, 13);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgb(204, 13, 13);
  border-left-width: 2px;
  border-right-color: rgb(204, 13, 13);
  border-right-width: 2px;
  border-top-color: rgb(204, 13, 13);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  color: rgb(228, 209, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
}

body .metadata-properties {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(41, 2, 2);
}

body .page-header h2.page-title {
  color: rgb(253, 248, 236);
}

body abbr {
  color: rgb(253, 248, 236);
  text-decoration: underline dotted rgb(253, 248, 236);
}

body details {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body input[type=text] {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

body kbd {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

body sub {
  color: rgb(253, 248, 236);
}

body summary {
  color: rgb(253, 248, 236);
}

body sup {
  color: rgb(253, 248, 236);
}`,
  },
  light: {},
};
