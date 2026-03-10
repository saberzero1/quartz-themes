import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ono-sendai",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cairo", "fira-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-mild: #d39f2f;
  --accent-strong: #e60953;
  --background-accent: rgb(38, 72, 95);
  --background-modifier-border: rgb(0, 0, 0);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.5);
  --background-modifier-cover: rgba(5, 20, 1, 0.842);
  --background-primary: #17191a;
  --background-primary-alt: rgb(5, 5, 5);
  --background-secondary: #0f5172;
  --background-secondary-alt: rgb(0, 0, 0);
  --bases-cards-background: #17191a;
  --bases-cards-cover-background: rgb(5, 5, 5);
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0);
  --bases-embed-border-color: rgb(0, 0, 0);
  --bases-group-heading-property-color: #898b85;
  --bases-table-border-color: rgb(0, 0, 0);
  --bases-table-cell-background-active: #17191a;
  --bases-table-cell-background-disabled: rgb(5, 5, 5);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(32, 171, 233);
  --bases-table-group-background: rgb(5, 5, 5);
  --bases-table-header-background: #17191a;
  --bases-table-header-color: #898b85;
  --bases-table-summary-background: #17191a;
  --blockquote-border-color: rgb(32, 171, 233);
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --bodyFont: var(--font-interface);
  --border: #0c496d;
  --border-accent: #a00f3f;
  --border-muted: #272727;
  --bw: #ffffff;
  --canvas-background: #17191a;
  --canvas-card-label-color: #666;
  --caret-color: #dcddde;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #898b85;
  --checkbox-color: rgb(32, 171, 233);
  --checkbox-color-hover: #1da3d6;
  --checkbox-marker-color: #17191a;
  --checkboxbg: -23deg;
  --checklist-done-color: #898b85;
  --code-background: rgb(5, 5, 5);
  --code-border-color: rgb(0, 0, 0);
  --code-comment: #666;
  --code-normal: #dcddde;
  --code-punctuation: #898b85;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #666;
  --collapse-icon-color-collapsed: #28b0ff;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: Cairo;
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(32, 171, 233);
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #286c91;
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0);
  --embed-border-start: 2px solid rgb(32, 171, 233);
  --file-header-background: #17191a;
  --file-header-background-focused: #17191a;
  --file-header-font: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #2a2a2a;
  --flair-color: #dcddde;
  --font-interface: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: Fira Code, Source Code Pro, monospace;
  --footnote-divider-color: rgb(0, 0, 0);
  --footnote-id-color: #898b85;
  --footnote-id-color-no-occurrences: #666;
  --graph-attach: #4cf15a;
  --graph-bg: black;
  --graph-circle: #ff2882;
  --graph-line: #0c496d;
  --graph-menutext: #898b85;
  --graph-node: #898b85;
  --graph-node-focused: #28b0ff;
  --graph-node-unresolved: #666;
  --graph-text: #ff3333;
  --graphtag: #0b9ba5;
  --gray: var(--text-muted);
  --headerFont: var(--font-interface);
  --heading-formatting: #666;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(0, 0, 0);
  --icon-color: #898b85;
  --icon-color-active: #28b0ff;
  --icon-color-focused: #dcddde;
  --icon-color-hover: #898b85;
  --input-date-separator: #666;
  --input-placeholder-color: #666;
  --interactive-accent: rgb(32, 171, 233);
  --interactive-accent-hover: #1da3d6;
  --interactive-accent-rgb: 32, 171, 233;
  --interactive-hover: #286c91;
  --interactive-normal: #2a2a2a;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #28b0ff;
  --link-color-hover: #77d47c;
  --link-external-color: #28b0ff;
  --link-external-color-hover: #77d47c;
  --link-unresolved-color: #28b0ff;
  --list-marker-color: #666;
  --list-marker-color-collapsed: #28b0ff;
  --list-marker-color-hover: #898b85;
  --menu-background: #0f5172;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --metadata-border-color: rgb(0, 0, 0);
  --metadata-divider-color: rgb(0, 0, 0);
  --metadata-input-font: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #dcddde;
  --metadata-label-font: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #898b85;
  --metadata-label-text-color-hover: #898b85;
  --modal-background: #17191a;
  --nav-collapse-icon-color: #666;
  --nav-collapse-icon-color-collapsed: #666;
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: #666;
  --nav-heading-color-collapsed-hover: #898b85;
  --nav-heading-color-hover: #dcddde;
  --nav-item-color: #898b85;
  --nav-item-color-active: #dcddde;
  --nav-item-color-highlighted: #28b0ff;
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: #666;
  --nav-tag-color-active: #898b85;
  --nav-tag-color-hover: #898b85;
  --opacity-translucency: 0.7;
  --pdf-background: #17191a;
  --pdf-page-background: #17191a;
  --pdf-shadow: 0 0 0 1px rgb(0, 0, 0);
  --pdf-sidebar-background: #17191a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(0, 0, 0);
  --pill-border-color: rgb(0, 0, 0);
  --pill-color: #898b85;
  --pill-color-hover: #dcddde;
  --pill-color-remove: #666;
  --pill-color-remove-hover: #28b0ff;
  --prompt-background: #17191a;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: #0f5172;
  --ribbon-background-collapsed: #17191a;
  --scrollbar-active-thumb-bg: #ff3392;
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-thumb-bg: rgb(20, 50, 70);
  --search-clear-button-color: #898b85;
  --search-icon-color: #898b85;
  --search-result-background: #17191a;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #dcddde;
  --setting-items-background: rgb(5, 5, 5);
  --setting-items-border-color: rgb(0, 0, 0);
  --slider-track-background: rgb(0, 0, 0);
  --status-bar-background: #0f5172;
  --status-bar-border-color: rgb(0, 0, 0);
  --status-bar-text-color: #898b85;
  --suggestion-background: #17191a;
  --tab-background-active: #17191a;
  --tab-container-background: #0f5172;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-switcher-background: #0f5172;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f5172, transparent);
  --tab-text-color: #666;
  --tab-text-color-active: #898b85;
  --tab-text-color-focused: #898b85;
  --tab-text-color-focused-active: #898b85;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: #28b0ff;
  --table-add-button-border-color: rgb(0, 0, 0);
  --table-border-color: rgb(0, 0, 0);
  --table-drag-handle-background-active: rgb(32, 171, 233);
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: rgb(0, 0, 0);
  --table-header-color: #dcddde;
  --table-selection-border-color: rgb(32, 171, 233);
  --tag-color: #28b0ff;
  --tag-color-hover: #28b0ff;
  --tagsbgcolor: rgb(10, 54, 134);
  --tagspanetag: rgb(238, 54, 238);
  --tertiary: var(--text-accent-hover);
  --text-accent: #28b0ff;
  --text-accent-hover: #77d47c;
  --text-accent2: #00ff37;
  --text-error: #ff0000;
  --text-error-hover: #990000;
  --text-faint: #666;
  --text-highlight-bg: #1c2b0b;
  --text-matched: #bbce16;
  --text-muted: #898b85;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: rgba(6, 66, 113, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #0f5172;
  --titlebar-background-focused: rgb(0, 0, 0);
  --titlebar-border-color: rgb(0, 0, 0);
  --titlebar-text-color: #898b85;
  --titlebar-text-color-focused: #dcddde;
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 81, 114);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 25, 26);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 81, 114);
  border-left-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(23, 25, 26);
  color: rgb(220, 221, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > em, em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > i, i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > strong, strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .text-highlight {
  background-color: rgb(28, 43, 11);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: line-through rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body p {
  color: rgb(137, 139, 133);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  outline: rgb(137, 139, 133) none 0px;
  text-decoration: rgb(137, 139, 133);
  text-decoration-color: rgb(137, 139, 133);
}`,
    links: `body a.external, footer a {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
  text-decoration: underline rgb(40, 176, 255);
  text-decoration-color: rgb(40, 176, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
  text-decoration: underline rgb(40, 176, 255);
  text-decoration-color: rgb(40, 176, 255);
}

body a.internal.broken {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
}`,
    lists: `body dd {
  color: rgb(220, 221, 222);
}

body dt {
  color: rgb(220, 221, 222);
}

body ol > li {
  color: rgb(220, 221, 222);
}

body ol.overflow {
  background-color: rgb(23, 25, 26);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(23, 25, 26);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(5, 5, 5);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body table {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
  color: rgb(220, 221, 222);
  width: 233.219px;
}

body td {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(220, 221, 222);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
}

body thead {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}

body tr {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}`,
    code: `body code {
  border-bottom-color: rgb(230, 9, 83);
  border-left-color: rgb(230, 9, 83);
  border-right-color: rgb(230, 9, 83);
  border-top-color: rgb(230, 9, 83);
  color: rgb(230, 9, 83);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

body pre > code, pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

body pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body figcaption {
  color: rgb(220, 221, 222);
}

body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `body .file-embed {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
}

body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(32, 171, 233);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(32, 171, 233);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(137, 139, 133);
  text-decoration: line-through rgb(137, 139, 133);
  text-decoration-color: rgb(137, 139, 133);
}

body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(40, 176, 255);
  outline: rgb(40, 176, 255) none 0px;
  text-decoration: rgb(40, 176, 255);
  text-decoration-color: rgb(40, 176, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(153, 16, 139);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 81, 114);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(153, 16, 139);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(153, 16, 139);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(40, 176, 255);
}

body h1 {
  color: rgb(220, 221, 222);
}

body h2 {
  color: rgb(220, 221, 222);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

body h3 {
  color: rgb(220, 221, 222);
}

body h4 {
  color: rgb(220, 221, 222);
}

body h5 {
  color: rgb(220, 221, 222);
}

body h6 {
  color: rgb(220, 221, 222);
}

body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 25, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  text-decoration: rgb(40, 176, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  text-decoration: rgb(40, 176, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  text-decoration: rgb(40, 176, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(220, 221, 222);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body footer ul li a {
  color: rgb(40, 176, 255);
  text-decoration: rgb(40, 176, 255);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(40, 176, 255);
  text-decoration: rgb(40, 176, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(40, 176, 255);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(40, 176, 255);
  text-decoration: rgb(40, 176, 255);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}

body .darkmode svg {
  color: rgb(137, 139, 133);
  stroke: rgb(137, 139, 133);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}

body .breadcrumb-element p {
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .metadata {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(137, 139, 133);
}

body .metadata-properties {
  border-bottom-color: rgb(137, 139, 133);
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  color: rgb(137, 139, 133);
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(220, 221, 222);
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(220, 221, 222);
  text-decoration: underline dotted rgb(220, 221, 222);
}

body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body input[type=text] {
  border-bottom-color: rgb(137, 139, 133);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(137, 139, 133);
  border-right-color: rgb(137, 139, 133);
  border-top-color: rgb(137, 139, 133);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(137, 139, 133);
  font-family: Barlow, Cairo, Inter, sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body sub {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: bottom;
}

body summary {
  color: rgb(220, 221, 222);
}

body sup {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: top;
}`,
  },
  light: {
    base: `:root:root {
  --accent-mild: #912771;
  --accent-strong: #1a7ca3;
  --background-accent: rgb(136, 43, 90);
  --background-modifier-border: rgb(75, 110, 139);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #ff9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: rgb(189, 216, 218);
  --background-modifier-form-field-highlighted: rgb(182, 213, 221);
  --background-modifier-form-field-hover: rgb(189, 216, 218);
  --background-modifier-success: #a4e7c3;
  --background-primary: #d1cabf;
  --background-primary-alt: #e0ded2;
  --background-secondary: #eeb157;
  --background-secondary-alt: #beb6aa;
  --bases-cards-background: #d1cabf;
  --bases-cards-cover-background: #e0ded2;
  --bases-cards-shadow: 0 0 0 1px rgb(75, 110, 139);
  --bases-embed-border-color: rgb(75, 110, 139);
  --bases-group-heading-property-color: #694f3a;
  --bases-table-border-color: rgb(75, 110, 139);
  --bases-table-cell-background-active: #d1cabf;
  --bases-table-cell-background-disabled: #e0ded2;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(226, 72, 34);
  --bases-table-group-background: #e0ded2;
  --bases-table-header-background: #d1cabf;
  --bases-table-header-color: #694f3a;
  --bases-table-summary-background: #d1cabf;
  --blockquote-border-color: rgb(226, 72, 34);
  --blur-background: color-mix(in srgb, #d1cabf 65%, transparent) linear-gradient(#d1cabf, color-mix(in srgb, #d1cabf 65%, transparent));
  --bodyFont: var(--font-interface);
  --border: #664424;
  --border-accent: #a00f3f;
  --border-muted: #272727;
  --bw: #000000;
  --canvas-background: #d1cabf;
  --canvas-card-label-color: #9c735c;
  --caret-color: #2e3338;
  --checkbox-border-color: #9c735c;
  --checkbox-border-color-hover: #694f3a;
  --checkbox-color: rgb(226, 72, 34);
  --checkbox-color-hover: #f3bf14;
  --checkbox-marker-color: #d1cabf;
  --checkboxbg: 183deg;
  --checklist-done-color: #694f3a;
  --code-background: #e0ded2;
  --code-border-color: rgb(75, 110, 139);
  --code-comment: #9c735c;
  --code-normal: #2e3338;
  --code-punctuation: #694f3a;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #9c735c;
  --collapse-icon-color-collapsed: #914a29;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: Cairo;
  --divider-color: rgb(75, 110, 139);
  --divider-color-hover: rgb(226, 72, 34);
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px rgb(75, 110, 139), inset 0 0 0 1px rgb(75, 110, 139);
  --embed-border-start: 2px solid rgb(226, 72, 34);
  --file-header-background: #d1cabf;
  --file-header-background-focused: #d1cabf;
  --file-header-font: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #f2f3f5;
  --flair-color: #2e3338;
  --font-interface: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: Fira Code, Source Code Pro, monospace;
  --footnote-divider-color: rgb(75, 110, 139);
  --footnote-id-color: #694f3a;
  --footnote-id-color-no-occurrences: #9c735c;
  --graph-attach: #77f581;
  --graph-bg: black;
  --graph-circle: #0cd2ec;
  --graph-line: #11683f;
  --graph-menutext: #898b85;
  --graph-node: #694f3a;
  --graph-node-focused: #914a29;
  --graph-node-unresolved: #9c735c;
  --graph-text: #ff3333;
  --graphtag: #d8fa41;
  --gray: var(--text-muted);
  --headerFont: var(--font-interface);
  --heading-formatting: #9c735c;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(75, 110, 139);
  --icon-color: #694f3a;
  --icon-color-active: #914a29;
  --icon-color-focused: #2e3338;
  --icon-color-hover: #694f3a;
  --input-date-separator: #9c735c;
  --input-placeholder-color: #9c735c;
  --interactive-accent: rgb(226, 72, 34);
  --interactive-accent-hover: #f3bf14;
  --interactive-accent-rgb: 226, 72, 34;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #914a29;
  --link-color-hover: #cc0202;
  --link-external-color: #914a29;
  --link-external-color-hover: #cc0202;
  --link-unresolved-color: #914a29;
  --list-marker-color: #9c735c;
  --list-marker-color-collapsed: #914a29;
  --list-marker-color-hover: #694f3a;
  --menu-background: #eeb157;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --metadata-border-color: rgb(75, 110, 139);
  --metadata-divider-color: rgb(75, 110, 139);
  --metadata-input-font: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #2e3338;
  --metadata-label-font: '??', '??', Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #694f3a;
  --metadata-label-text-color-hover: #694f3a;
  --modal-background: #d1cabf;
  --nav-collapse-icon-color: #9c735c;
  --nav-collapse-icon-color-collapsed: #9c735c;
  --nav-heading-color: #2e3338;
  --nav-heading-color-collapsed: #9c735c;
  --nav-heading-color-collapsed-hover: #694f3a;
  --nav-heading-color-hover: #2e3338;
  --nav-item-color: #694f3a;
  --nav-item-color-active: #2e3338;
  --nav-item-color-highlighted: #914a29;
  --nav-item-color-hover: #2e3338;
  --nav-item-color-selected: #2e3338;
  --nav-tag-color: #9c735c;
  --nav-tag-color-active: #694f3a;
  --nav-tag-color-hover: #694f3a;
  --opacity-translucency: 0.5;
  --pdf-background: #d1cabf;
  --pdf-page-background: #d1cabf;
  --pdf-sidebar-background: #d1cabf;
  --pill-border-color: rgb(75, 110, 139);
  --pill-color: #694f3a;
  --pill-color-hover: #2e3338;
  --pill-color-remove: #9c735c;
  --pill-color-remove-hover: #914a29;
  --prompt-background: #d1cabf;
  --raised-background: color-mix(in srgb, #d1cabf 65%, transparent) linear-gradient(#d1cabf, color-mix(in srgb, #d1cabf 65%, transparent));
  --ribbon-background: #eeb157;
  --ribbon-background-collapsed: #d1cabf;
  --scrollbar-active-thumb-bg: #ff3333;
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: #914a29;
  --search-clear-button-color: #694f3a;
  --search-icon-color: #694f3a;
  --search-result-background: #d1cabf;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #2e3338;
  --setting-items-background: #e0ded2;
  --setting-items-border-color: rgb(75, 110, 139);
  --slider-track-background: rgb(75, 110, 139);
  --status-bar-background: #eeb157;
  --status-bar-border-color: rgb(75, 110, 139);
  --status-bar-text-color: #694f3a;
  --suggestion-background: #d1cabf;
  --tab-background-active: #d1cabf;
  --tab-container-background: #eeb157;
  --tab-outline-color: rgb(75, 110, 139);
  --tab-switcher-background: #eeb157;
  --tab-switcher-menubar-background: linear-gradient(to top, #eeb157, transparent);
  --tab-text-color: #9c735c;
  --tab-text-color-active: #694f3a;
  --tab-text-color-focused: #694f3a;
  --tab-text-color-focused-active: #694f3a;
  --tab-text-color-focused-active-current: #2e3338;
  --tab-text-color-focused-highlighted: #914a29;
  --table-add-button-border-color: rgb(75, 110, 139);
  --table-border-color: rgb(75, 110, 139);
  --table-drag-handle-background-active: rgb(226, 72, 34);
  --table-drag-handle-color: #9c735c;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: rgb(75, 110, 139);
  --table-header-color: #2e3338;
  --table-selection-border-color: rgb(226, 72, 34);
  --tag-color: #914a29;
  --tag-color-hover: #914a29;
  --tagsbgcolor: rgb(141, 81, 128);
  --tagspanetag: rgb(53, 53, 53);
  --tertiary: var(--text-accent-hover);
  --text-accent: #914a29;
  --text-accent-hover: #cc0202;
  --text-accent2: #4d5c8b;
  --text-error: #0d6f8d;
  --text-error-hover: #cb2c2;
  --text-faint: #9c735c;
  --text-highlight-bg: rgba(232, 255, 27, 0.76);
  --text-matched: #b90303;
  --text-muted: #694f3a;
  --text-normal: #2e3338;
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(247, 220, 162, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #eeb157;
  --titlebar-background-focused: #beb6aa;
  --titlebar-border-color: rgb(75, 110, 139);
  --titlebar-text-color: #694f3a;
  --titlebar-text-color-focused: #2e3338;
  --vault-profile-color: #2e3338;
  --vault-profile-color-hover: #2e3338;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 177, 87);
  color: rgb(46, 51, 56);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(209, 202, 191);
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(190, 182, 170);
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(75, 110, 139);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 177, 87);
  border-left-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
}

body div#quartz-root {
  background-color: rgb(209, 202, 191);
  color: rgb(46, 51, 56);
}`,
    typography: `body .page article p > b, b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > em, em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > i, i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > strong, strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .text-highlight {
  background-color: rgba(232, 255, 27, 0.76);
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: line-through rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body p {
  color: rgb(105, 79, 58);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  outline: rgb(105, 79, 58) none 0px;
  text-decoration: rgb(105, 79, 58);
  text-decoration-color: rgb(105, 79, 58);
}`,
    links: `body a.external, footer a {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
  text-decoration: underline rgb(145, 74, 41);
  text-decoration-color: rgb(145, 74, 41);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
  text-decoration: underline rgb(145, 74, 41);
  text-decoration-color: rgb(145, 74, 41);
}

body a.internal.broken {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
}`,
    lists: `body dd {
  color: rgb(46, 51, 56);
}

body dt {
  color: rgb(46, 51, 56);
}

body ol > li {
  color: rgb(46, 51, 56);
}

body ol.overflow {
  background-color: rgb(209, 202, 191);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body ul > li {
  color: rgb(46, 51, 56);
}

body ul.overflow {
  background-color: rgb(209, 202, 191);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(156, 115, 92);
  text-decoration: rgb(156, 115, 92);
}

body blockquote {
  background-color: rgb(224, 222, 210);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body table {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
  color: rgb(46, 51, 56);
  width: 233.219px;
}

body td {
  border-bottom-color: rgb(156, 115, 92);
  border-left-color: rgb(156, 115, 92);
  border-right-color: rgb(156, 115, 92);
  border-top-color: rgb(156, 115, 92);
  color: rgb(46, 51, 56);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgb(190, 182, 170);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
}

body thead {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}

body tr {
  border-bottom-color: rgb(153, 15, 15);
  border-left-color: rgb(153, 15, 15);
  border-right-color: rgb(153, 15, 15);
  border-top-color: rgb(153, 15, 15);
}`,
    code: `body code {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(26, 124, 163);
  border-left-color: rgb(26, 124, 163);
  border-right-color: rgb(26, 124, 163);
  border-top-color: rgb(26, 124, 163);
  color: rgb(26, 124, 163);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

body pre:has(> code) {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}`,
    images: `body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body figcaption {
  color: rgb(46, 51, 56);
}

body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `body .file-embed {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
}

body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(226, 72, 34);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(226, 72, 34);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(105, 79, 58);
  text-decoration: line-through rgb(105, 79, 58);
  text-decoration-color: rgb(105, 79, 58);
}

body input[type=checkbox] {
  border-bottom-color: rgb(156, 115, 92);
  border-left-color: rgb(156, 115, 92);
  border-right-color: rgb(156, 115, 92);
  border-top-color: rgb(156, 115, 92);
}

body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}`,
    search: `body .search > .search-button {
  background-color: rgb(189, 216, 218);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(46, 51, 56);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(190, 182, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(145, 74, 41);
  outline: rgb(145, 74, 41) none 0px;
  text-decoration: rgb(145, 74, 41);
  text-decoration-color: rgb(145, 74, 41);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(153, 16, 139);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 177, 87);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(153, 16, 139);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(153, 16, 139);
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(145, 74, 41);
}

body h1 {
  color: rgb(46, 51, 56);
}

body h2 {
  color: rgb(46, 51, 56);
}

body h2.page-title, h2.page-title a {
  color: rgb(46, 51, 56);
}

body h3 {
  color: rgb(46, 51, 56);
}

body h4 {
  color: rgb(46, 51, 56);
}

body h5 {
  color: rgb(46, 51, 56);
}

body h6 {
  color: rgb(46, 51, 56);
}

body hr {
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

body ::-webkit-scrollbar-corner {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}

body ::-webkit-scrollbar-track {
  background: rgb(209, 202, 191) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(209, 202, 191);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  text-decoration: rgb(145, 74, 41);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  text-decoration: rgb(145, 74, 41);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
  text-decoration: rgb(145, 74, 41);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(46, 51, 56);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}`,
    footer: `body footer {
  background-color: rgb(190, 182, 170);
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  border-top-width: 0px;
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body footer ul li a {
  color: rgb(145, 74, 41);
  text-decoration: rgb(145, 74, 41);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(145, 74, 41);
  text-decoration: rgb(145, 74, 41);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body li.section-li > .section .meta {
  color: rgb(145, 74, 41);
  font-family: Cairo, Roboto, Inter, "Segoe ui", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(145, 74, 41);
  text-decoration: rgb(145, 74, 41);
}

body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}

body .darkmode svg {
  color: rgb(105, 79, 58);
  stroke: rgb(105, 79, 58);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}

body .breadcrumb-element p {
  color: rgb(156, 115, 92);
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .metadata {
  border-bottom-color: rgb(75, 110, 139);
  border-left-color: rgb(75, 110, 139);
  border-right-color: rgb(75, 110, 139);
  border-top-color: rgb(75, 110, 139);
  color: rgb(105, 79, 58);
}

body .metadata-properties {
  border-bottom-color: rgb(105, 79, 58);
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  color: rgb(105, 79, 58);
}

body .navigation-progress {
  background-color: rgb(190, 182, 170);
}

body .page-header h2.page-title {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Cairo, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(46, 51, 56);
  text-decoration: underline dotted rgb(46, 51, 56);
}

body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body input[type=text] {
  border-bottom-color: rgb(105, 79, 58);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(105, 79, 58);
  border-right-color: rgb(105, 79, 58);
  border-top-color: rgb(105, 79, 58);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(105, 79, 58);
  font-family: Barlow, Cairo, Inter, sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(224, 222, 210);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body sub {
  color: rgb(46, 51, 56);
  font-size: 11px;
  vertical-align: bottom;
}

body summary {
  color: rgb(46, 51, 56);
}

body sup {
  color: rgb(46, 51, 56);
  font-size: 11px;
  vertical-align: top;
}`,
  },
};
