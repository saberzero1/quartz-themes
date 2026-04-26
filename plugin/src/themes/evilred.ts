import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "evilred", modes: ["dark"], variations: [], fonts: ["hack"] },
  dark: {
    base: `:root:root {
  --Editor-table-border-radius: 5px !important;
  --Editor-table-border-width: 2px !important;
  --background-modifier-border: #3d0404 !important;
  --background-primary: #390000 !important;
  --background-primary-alt: #390000 !important;
  --background-secondary: #290202 !important;
  --background-secondary-alt: #3d0404 !important;
  --bases-cards-background: #390000 !important;
  --bases-cards-cover-background: #390000 !important;
  --bases-cards-shadow: 0 0 0 1px #3d0404 !important;
  --bases-embed-border-color: #3d0404 !important;
  --bases-group-heading-property-color: #e4d1cf !important;
  --bases-table-border-color: #3d0404 !important;
  --bases-table-cell-background-active: #390000 !important;
  --bases-table-cell-background-disabled: #390000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #B50505 !important;
  --bases-table-group-background: #390000 !important;
  --bases-table-header-background: #390000 !important;
  --bases-table-header-color: #e4d1cf !important;
  --bases-table-summary-background: #390000 !important;
  --blockquote-border-color: #B50505 !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #390000 !important;
  --canvas-card-label-color: #ff8a8a !important;
  --caret-color: #fdf8ec !important;
  --checkbox-border-color: #ff8a8a !important;
  --checkbox-border-color-hover: #e4d1cf !important;
  --checkbox-color: #B50505 !important;
  --checkbox-marker-color: #390000 !important;
  --checklist-done-color: #e4d1cf !important;
  --code-background: #390000 !important;
  --code-block: #cc0d0d !important;
  --code-border-color: #3d0404 !important;
  --code-comment: #ff8a8a !important;
  --code-normal: #fdf8ec !important;
  --code-punctuation: #e4d1cf !important;
  --codeFont: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #ff8a8a !important;
  --collapse-icon-color-collapsed: #f3ad6b !important;
  --dark: #fdf8ec !important;
  --dark-orange: #83572f !important;
  --dark0: #390000 !important;
  --dark1: #290202 !important;
  --dark2: #3d0404 !important;
  --dark3: #5c1818 !important;
  --darkgray: #fdf8ec !important;
  --divider-color: #3d0404 !important;
  --divider-color-hover: #B50505 !important;
  --embed-block-shadow-hover: 0 0 0 1px #3d0404, inset 0 0 0 1px #3d0404 !important;
  --embed-border-start: 2px solid #B50505 !important;
  --file-header-background: #390000 !important;
  --file-header-background-focused: #390000 !important;
  --flair-color: #fdf8ec !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-divider-color: #3d0404 !important;
  --footnote-id-color: #e4d1cf !important;
  --footnote-id-color-no-occurrences: #ff8a8a !important;
  --frost0: #B50505 !important;
  --frost1: #cc0d0d !important;
  --frost2: #81a1c1 !important;
  --frost3: #FF9CFA !important;
  --graph-node: #e4d1cf !important;
  --graph-node-focused: #f3ad6b !important;
  --graph-node-unresolved: #ff8a8a !important;
  --graph-text: #fdf8ec !important;
  --gray: #e4d1cf !important;
  --green: #b0f078 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #ff8a8a !important;
  --highlight: rgba(163, 190, 140, 0.3) !important;
  --hr-color: #3d0404 !important;
  --icon-color: #e4d1cf !important;
  --icon-color-active: #f3ad6b !important;
  --icon-color-focused: #fdf8ec !important;
  --icon-color-hover: #e4d1cf !important;
  --inline-code: #cc0d0d !important;
  --input-date-separator: #ff8a8a !important;
  --input-disabled-border-color: transparent !important;
  --input-focus-border-color: Highlight !important;
  --input-focus-outline: 1px solid Canvas !important;
  --input-hover-border-color: red !important;
  --input-placeholder-color: #ff8a8a !important;
  --input-unfocused-border-color: transparent !important;
  --interactive-accent: #B50505 !important;
  --interactive-accent-rgb: #f3ad6b !important;
  --interactive-before: #5c1818 !important;
  --light: #390000 !important;
  --light0: #ff8a8a !important;
  --light1: #e4d1cf !important;
  --light2: #fdf8ec !important;
  --light3: #5fa57a !important;
  --lightgray: #290202 !important;
  --link-color: #f3ad6b !important;
  --link-external-color: #f3ad6b !important;
  --link-unresolved-color: #f3ad6b !important;
  --list-marker-color: #ff8a8a !important;
  --list-marker-color-collapsed: #f3ad6b !important;
  --list-marker-color-hover: #e4d1cf !important;
  --menu-background: #290202 !important;
  --metadata-border-color: #3d0404 !important;
  --metadata-divider-color: #3d0404 !important;
  --metadata-input-text-color: #fdf8ec !important;
  --metadata-label-text-color: #e4d1cf !important;
  --metadata-label-text-color-hover: #e4d1cf !important;
  --modal-background: #390000 !important;
  --nav-collapse-icon-color: #ff8a8a !important;
  --nav-collapse-icon-color-collapsed: #ff8a8a !important;
  --nav-heading-color: #fdf8ec !important;
  --nav-heading-color-collapsed: #ff8a8a !important;
  --nav-heading-color-collapsed-hover: #e4d1cf !important;
  --nav-heading-color-hover: #fdf8ec !important;
  --nav-item-color: #e4d1cf !important;
  --nav-item-color-active: #fdf8ec !important;
  --nav-item-color-highlighted: #f3ad6b !important;
  --nav-item-color-hover: #fdf8ec !important;
  --nav-item-color-selected: #fdf8ec !important;
  --nav-tag-color: #ff8a8a !important;
  --nav-tag-color-active: #e4d1cf !important;
  --nav-tag-color-hover: #e4d1cf !important;
  --orange: #f3ad6b !important;
  --pdf-background: #390000 !important;
  --pdf-page-background: #390000 !important;
  --pdf-shadow: 0 0 0 1px #3d0404 !important;
  --pdf-sidebar-background: #390000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3d0404 !important;
  --pill-border-color: #3d0404 !important;
  --pill-color: #e4d1cf !important;
  --pill-color-hover: #fdf8ec !important;
  --pill-color-remove: #ff8a8a !important;
  --pill-color-remove-hover: #f3ad6b !important;
  --pre-code: #290202 !important;
  --prompt-background: #390000 !important;
  --purple: #f899e7 !important;
  --red: #d63f4e !important;
  --ribbon-background: #290202 !important;
  --ribbon-background-collapsed: #390000 !important;
  --search-clear-button-color: #e4d1cf !important;
  --search-icon-color: #e4d1cf !important;
  --search-result-background: #390000 !important;
  --secondary: #f3ad6b !important;
  --setting-group-heading-color: #fdf8ec !important;
  --setting-items-background: #390000 !important;
  --setting-items-border-color: #3d0404 !important;
  --shiki-active-tab-border-color: #e4d1cf !important;
  --shiki-code-background: #390000 !important;
  --shiki-code-comment: #ff8a8a !important;
  --shiki-code-normal: #e4d1cf !important;
  --shiki-code-punctuation: #e4d1cf !important;
  --shiki-gutter-border-color: #3d0404 !important;
  --shiki-gutter-text-color: #ff8a8a !important;
  --shiki-gutter-text-color-highlight: #e4d1cf !important;
  --shiki-highlight-neutral: #e4d1cf !important;
  --shiki-terminal-dots-color: #ff8a8a !important;
  --sideRed: #910b0bcc !important;
  --slider-track-background: #3d0404 !important;
  --status-bar-background: #290202 !important;
  --status-bar-border-color: #3d0404 !important;
  --status-bar-text-color: #e4d1cf !important;
  --suggestion-background: #390000 !important;
  --tab-background-active: #390000 !important;
  --tab-container-background: #290202 !important;
  --tab-outline-color: #3d0404 !important;
  --tab-switcher-background: #290202 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #290202, transparent) !important;
  --tab-text-color: #ff8a8a !important;
  --tab-text-color-active: #e4d1cf !important;
  --tab-text-color-focused: #e4d1cf !important;
  --tab-text-color-focused-active: #e4d1cf !important;
  --tab-text-color-focused-active-current: #fdf8ec !important;
  --tab-text-color-focused-highlighted: #f3ad6b !important;
  --table-add-button-border-color: #3d0404 !important;
  --table-border-color: #3d0404 !important;
  --table-drag-handle-background-active: #B50505 !important;
  --table-drag-handle-color: #ff8a8a !important;
  --table-header: hsl(220, 16%, 16%) !important;
  --table-header-border-color: #3d0404 !important;
  --table-header-color: #fdf8ec !important;
  --table-hover: #5c1818 !important;
  --table-row-even: #2e21218a !important;
  --table-row-odd: #000000 !important;
  --table-selection-border-color: #B50505 !important;
  --tag-color: #f3ad6b !important;
  --tag-color-hover: #f3ad6b !important;
  --task-checkbox: #B50505 !important;
  --tertiary: #f3ad6b !important;
  --text-a: #FF9CFA !important;
  --text-a-hover: #81a1c1 !important;
  --text-accent: #f3ad6b !important;
  --text-faint: #ff8a8a !important;
  --text-highlight-bg: rgba(163, 190, 140, 0.3) !important;
  --text-highlight-bg-active: #b0f078 !important;
  --text-link: #B50505 !important;
  --text-mark: rgba(147, 217, 236, 0.3) !important;
  --text-muted: #e4d1cf !important;
  --text-normal: #fdf8ec !important;
  --text-selection: #5c1818 !important;
  --text-tag: #B50505 !important;
  --text-title-h1: #d63f4e !important;
  --text-title-h2: #f3ad6b !important;
  --text-title-h3: #ebcb8b !important;
  --text-title-h4: #b0f078 !important;
  --text-title-h5: #f899e7 !important;
  --text-title-h6: #f3ad6b !important;
  --textHighlight: rgba(163, 190, 140, 0.3) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #290202 !important;
  --titlebar-background-focused: #3d0404 !important;
  --titlebar-border-color: #3d0404 !important;
  --titlebar-text-color: #e4d1cf !important;
  --titlebar-text-color-focused: #fdf8ec !important;
  --vault-profile-color: #fdf8ec !important;
  --vault-profile-color-hover: #fdf8ec !important;
  --vim-cursor: #f3ad6b !important;
  --yellow: #ebcb8b !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(57, 0, 0);
  color: rgb(253, 248, 236);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(61, 4, 4);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 2, 2);
  border-left-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

html body html {
  --Editor-table-border-radius: 5px;
  --Editor-table-border-width: 2px;
  --dark-orange: #83572f;
  --dark0: #390000;
  --dark1: #290202;
  --dark2: #3d0404;
  --dark3: #5c1818;
  --frost0: #B50505;
  --frost1: #cc0d0d;
  --frost2: #81a1c1;
  --frost3: #FF9CFA;
  --green: #b0f078;
  --input-disabled-border-color: transparent;
  --input-focus-border-color: Highlight;
  --input-focus-outline: 1px solid Canvas;
  --input-hover-border-color: red;
  --input-unfocused-border-color: transparent;
  --light0: #ff8a8a;
  --light1: #e4d1cf;
  --light2: #fdf8ec;
  --light3: #5fa57a;
  --orange: #f3ad6b;
  --purple: #f899e7;
  --red: #d63f4e;
  --sideRed: #910b0bcc;
  --yellow: #ebcb8b;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .markdown-rendered p > em, html em {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .markdown-rendered p > i, html i {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .markdown-rendered p > strong, html strong {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .text-highlight {
  background-color: rgba(163, 190, 140, 0.3);
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body del {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body h1.article-title {
  color: rgb(253, 248, 236);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 138, 138);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(181, 5, 5);
  border-color: rgb(181, 5, 5);
}

html body p {
  color: rgb(228, 209, 207);
  outline: rgb(228, 209, 207) none 0px;
  text-decoration-color: rgb(228, 209, 207);
}`,
    links: `html body a.external-link, html footer a {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration-color: rgb(255, 156, 250);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration-color: rgb(255, 156, 250);
}

html body a.internal-link.broken {
  color: rgb(255, 156, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 156, 250) none 0px;
  text-decoration-color: rgb(255, 156, 250);
}`,
    lists: `html body dd {
  color: rgb(253, 248, 236);
}

html body dt {
  color: rgb(253, 248, 236);
}

html body ol > li {
  color: rgb(253, 248, 236);
}

html body ul > li {
  color: rgb(253, 248, 236);
}

html body ul.overflow {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(255, 156, 250);
}

html body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body table {
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

html body td {
  border-bottom-color: rgb(41, 2, 2);
  border-left-color: rgb(253, 248, 236);
  border-left-width: 0px;
  border-right-color: rgb(253, 248, 236);
  border-right-width: 0px;
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

html body th {
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

html body thead {
  border-bottom-color: rgb(61, 4, 4);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 2, 2);
  border-right-color: rgb(41, 2, 2);
  border-top-color: rgb(41, 2, 2);
}

html body tr {
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(41, 2, 2);
  border-right-color: rgb(41, 2, 2);
  border-top-color: rgb(41, 2, 2);
}`,
    code: `html body code {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(204, 13, 13);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html body pre:has(> code) {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
}`,
    images: `html body audio {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body figcaption {
  color: rgb(253, 248, 236);
}

html body figure {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body img {
  border-bottom-color: rgb(214, 63, 78);
  border-left-color: rgb(214, 63, 78);
  border-right-color: rgb(214, 63, 78);
  border-top-color: rgb(214, 63, 78);
}

html body video {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
}

html body .footnotes {
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .transclude {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(181, 5, 5);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(253, 248, 236);
}

html li.task-list-item[data-task="body"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="."] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="="] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(228, 209, 207);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(228, 209, 207);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(253, 248, 236);
  text-decoration-color: rgb(253, 248, 236);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 0, 0);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 0, 0);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(253, 248, 236);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(253, 248, 236);
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
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space {
  background-color: rgb(57, 0, 0);
}

html body .search > .search-container > .search-space > * {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 248, 236) none 0px;
  text-decoration-color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(41, 2, 2);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 2, 2);
  color: rgb(253, 248, 236);
}

html body a.internal-link.tag-link::before {
  color: rgb(243, 173, 107);
}

html body h1 {
  color: rgb(214, 63, 78);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h1.article-title {
  color: rgb(253, 248, 236);
}

html body h2 {
  color: rgb(243, 173, 107);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(253, 248, 236);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(235, 203, 139);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(176, 240, 120);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(248, 153, 231);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(243, 173, 107);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(228, 209, 207);
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(228, 209, 207);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(253, 248, 236);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}`,
    footer: `html body footer {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(61, 4, 4);
  border-left-color: rgb(61, 4, 4);
  border-right-color: rgb(61, 4, 4);
  border-top-color: rgb(61, 4, 4);
  color: rgb(228, 209, 207);
}

html body footer ul li a {
  color: rgb(228, 209, 207);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(253, 248, 236);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(228, 209, 207);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(228, 209, 207);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body li.section-li > .section .meta {
  color: rgb(228, 209, 207);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(228, 209, 207);
}

html body ul.section-ul {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

html body .darkmode svg {
  color: rgb(228, 209, 207);
  stroke: rgb(228, 209, 207);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

html body .breadcrumb-element p {
  color: rgb(255, 138, 138);
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(253, 248, 236);
}

html body .canvas-node-content {
  color: rgb(253, 248, 236);
}

html body .canvas-node-file {
  color: rgb(253, 248, 236);
}

html body .canvas-node-group {
  border-color: rgb(253, 248, 236);
}

html body .canvas-sidebar {
  background-color: rgb(41, 2, 2);
  border-color: rgb(253, 248, 236);
}`,
    bases: `html body .bases-table {
  border-color: rgb(41, 2, 2);
}

html body .bases-table thead th {
  background-color: rgb(34, 39, 47);
  border-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}`,
    properties: `html body .metadata {
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

html body .metadata-properties {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .note-properties {
  background-color: rgb(41, 2, 2);
  border-color: rgb(204, 13, 13);
  border-radius: 5px;
}

html body .note-properties-key {
  color: rgb(228, 209, 207);
}

html body .note-properties-row {
  border-color: rgb(228, 209, 207);
}

html body .note-properties-tags {
  color: rgb(243, 173, 107);
}

html body .note-properties-value {
  color: rgb(228, 209, 207);
}

html body div#quartz-root {
  background-color: rgb(57, 0, 0);
  color: rgb(253, 248, 236);
}

html body ol.overflow {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}`,
    stacked: `html body .stacked-page {
  background-color: rgb(41, 2, 2);
  border-color: rgb(253, 248, 236);
}

html body .stacked-page-header {
  background-color: rgba(145, 11, 11, 0.8);
}

html body .stacked-page.active {
  border-color: rgb(253, 248, 236);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
}

html body .navigation-progress {
  background-color: rgb(41, 2, 2);
}

html body .page-header h2.page-title {
  color: rgb(253, 248, 236);
}

html body abbr {
  color: rgb(253, 248, 236);
}

html body details {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body input[type=text] {
  border-bottom-color: rgb(228, 209, 207);
  border-left-color: rgb(228, 209, 207);
  border-right-color: rgb(228, 209, 207);
  border-top-color: rgb(228, 209, 207);
  color: rgb(228, 209, 207);
}

html body kbd {
  background-color: rgb(57, 0, 0);
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
  color: rgb(253, 248, 236);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(253, 248, 236);
  border-left-color: rgb(253, 248, 236);
  border-right-color: rgb(253, 248, 236);
  border-top-color: rgb(253, 248, 236);
}

html body sub {
  color: rgb(253, 248, 236);
}

html body summary {
  color: rgb(253, 248, 236);
}

html body sup {
  color: rgb(253, 248, 236);
}

html body ul.tags > li {
  background-color: rgb(61, 4, 4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(181, 5, 5);
}`,
  },
  light: {},
};
