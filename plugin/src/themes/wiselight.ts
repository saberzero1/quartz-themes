import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wiselight",
    modes: ["light"],
    variations: [],
    fonts: ["karla", "open-sans"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-border: #ddd;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #990000;
  --background-modifier-error-hover: #bb0000;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-success: #a4e7c3;
  --background-primary: #faeee7;
  --background-primary-alt: #f5f6f8;
  --background-secondary: #f2f3f5;
  --background-secondary-alt: #e3e5e8;
  --bases-cards-background: #faeee7;
  --bases-cards-cover-background: #f5f6f8;
  --bases-cards-shadow: 0 0 0 1px #ddd;
  --bases-embed-border-color: #ddd;
  --bases-group-heading-property-color: #888888;
  --bases-table-border-color: #ddd;
  --bases-table-cell-background-active: #faeee7;
  --bases-table-cell-background-disabled: #f5f6f8;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7b6cd9;
  --bases-table-group-background: #f5f6f8;
  --bases-table-header-background: #faeee7;
  --bases-table-header-color: #888888;
  --bases-table-summary-background: #faeee7;
  --blockquote-border-color: #7b6cd9;
  --blur-background: color-mix(in srgb, #faeee7 65%, transparent) linear-gradient(#faeee7, color-mix(in srgb, #faeee7 65%, transparent));
  --bodyFont: var(--font-interface);
  --canvas-background: #faeee7;
  --canvas-card-label-color: #999999;
  --caret-color: #2e3338;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #888888;
  --checkbox-color: #7b6cd9;
  --checkbox-color-hover: #8273e6;
  --checkbox-marker-color: #faeee7;
  --checklist-done-color: #888888;
  --code-background: #f5f6f8;
  --code-border-color: #ddd;
  --code-comment: #999999;
  --code-normal: #2e3338;
  --code-punctuation: #888888;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #000000;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --darkthemeviewarea: #55423d;
  --default-font: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --divider-color: #ddd;
  --divider-color-hover: #7b6cd9;
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd;
  --embed-border-start: 2px solid #7b6cd9;
  --file-header-background: #faeee7;
  --file-header-background-focused: #faeee7;
  --file-header-font: '??', '??', "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #f2f3f5;
  --flair-color: #2e3338;
  --font-interface: '??', '??', "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #ddd;
  --footnote-id-color: #888888;
  --footnote-id-color-no-occurrences: #999999;
  --graph-node: #888888;
  --graph-node-focused: #000000;
  --graph-node-unresolved: #999999;
  --graph-text: #2e3338;
  --gray: var(--text-muted);
  --headerFont: var(--font-interface);
  --heading-formatting: #999999;
  --highlight: var(--text-highlight-bg);
  --hr-color: #ddd;
  --icon-color: #888888;
  --icon-color-active: #000000;
  --icon-color-focused: #2e3338;
  --icon-color-hover: #888888;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: #7b6cd9;
  --interactive-accent-hover: #8273e6;
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --interactive-success: #197300;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #000000;
  --link-color-hover: #000000;
  --link-external-color: #000000;
  --link-external-color-hover: #000000;
  --link-unresolved-color: #000000;
  --list-marker-color: #999999;
  --list-marker-color-collapsed: #000000;
  --list-marker-color-hover: #888888;
  --menu-background: #f2f3f5;
  --mermaid-font: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-border-color: #ddd;
  --metadata-divider-color: #ddd;
  --metadata-input-font: '??', '??', "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #2e3338;
  --metadata-label-font: '??', '??', "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #888888;
  --metadata-label-text-color-hover: #888888;
  --modal-background: #faeee7;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #2e3338;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #888888;
  --nav-heading-color-hover: #2e3338;
  --nav-item-color: #888888;
  --nav-item-color-active: #2e3338;
  --nav-item-color-highlighted: #000000;
  --nav-item-color-hover: #2e3338;
  --nav-item-color-selected: #2e3338;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #888888;
  --nav-tag-color-hover: #888888;
  --pdf-background: #faeee7;
  --pdf-page-background: #faeee7;
  --pdf-sidebar-background: #faeee7;
  --pill-border-color: #ddd;
  --pill-color: #888888;
  --pill-color-hover: #2e3338;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #000000;
  --prompt-background: #faeee7;
  --raised-background: color-mix(in srgb, #faeee7 65%, transparent) linear-gradient(#faeee7, color-mix(in srgb, #faeee7 65%, transparent));
  --reveal-font: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --ribbon-background: #f2f3f5;
  --ribbon-background-collapsed: #faeee7;
  --search-clear-button-color: #888888;
  --search-icon-color: #888888;
  --search-result-background: #faeee7;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #2e3338;
  --setting-items-background: #f5f6f8;
  --setting-items-border-color: #ddd;
  --slider-track-background: #ddd;
  --status-bar-background: #f2f3f5;
  --status-bar-border-color: #ddd;
  --status-bar-text-color: #888888;
  --suggestion-background: #faeee7;
  --tab-background-active: #faeee7;
  --tab-container-background: #f2f3f5;
  --tab-outline-color: #ddd;
  --tab-switcher-background: #f2f3f5;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent);
  --tab-text-color: #999999;
  --tab-text-color-active: #888888;
  --tab-text-color-focused: #888888;
  --tab-text-color-focused-active: #888888;
  --tab-text-color-focused-active-current: #2e3338;
  --tab-text-color-focused-highlighted: #000000;
  --table-add-button-border-color: #ddd;
  --table-border-color: #ddd;
  --table-drag-handle-background-active: #7b6cd9;
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #ddd;
  --table-header-color: #2e3338;
  --table-selection-border-color: #7b6cd9;
  --tag-color: #000000;
  --tag-color-hover: #000000;
  --tertiary: var(--text-accent-hover);
  --text-accent: #000000;
  --text-accent-hover: #000000;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #999999;
  --text-highlight-bg: rgba(255, 255, 0, 0.4);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #888888;
  --text-muted-rgb: 136, 136, 136;
  --text-normal: #2e3338;
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(204, 230, 255, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #f2f3f5;
  --titlebar-background-focused: #e3e5e8;
  --titlebar-border-color: #ddd;
  --titlebar-text-color: #888888;
  --titlebar-text-color-focused: #2e3338;
  --vault-profile-color: #2e3338;
  --vault-profile-color-hover: #2e3338;
  --yellowmyshade: #ffd703;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 238, 231);
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body div#quartz-root {
  background-color: rgb(250, 238, 231);
  color: rgb(46, 51, 56);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(195, 240, 202);
  color: rgb(51, 39, 42);
  outline: rgb(51, 39, 42) none 0px;
  text-decoration: rgb(51, 39, 42);
  text-decoration-color: rgb(51, 39, 42);
  transition: 0.5s;
}

body .page article p > em, em {
  color: rgb(165, 42, 42);
  font-weight: 600;
  outline: rgb(165, 42, 42) none 0px;
  text-decoration: rgb(165, 42, 42);
  text-decoration-color: rgb(165, 42, 42);
}

body .page article p > i, i {
  color: rgb(165, 42, 42);
  font-weight: 600;
  outline: rgb(165, 42, 42) none 0px;
  text-decoration: rgb(165, 42, 42);
  text-decoration-color: rgb(165, 42, 42);
}

body .page article p > strong, strong {
  background-color: rgb(195, 240, 202);
  color: rgb(51, 39, 42);
  outline: rgb(51, 39, 42) none 0px;
  text-decoration: rgb(51, 39, 42);
  text-decoration-color: rgb(51, 39, 42);
  transition: 0.5s;
}

body .text-highlight {
  background-color: rgba(255, 255, 0, 0.4);
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
  color: rgb(136, 136, 136);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `body a.external, footer a {
  color: rgb(210, 105, 30);
  font-weight: 500;
  outline: rgb(210, 105, 30) none 0px;
  text-decoration: underline rgb(210, 105, 30);
  text-decoration-color: rgb(210, 105, 30);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal.broken {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
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
  background-color: rgb(250, 238, 231);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body ul > li {
  color: rgb(46, 51, 56);
}

body ul.overflow {
  background-color: rgb(250, 238, 231);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  background-color: rgb(229, 246, 246);
  font-family: Karla;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body table {
  color: rgb(46, 51, 56);
  width: 662px;
}

body tbody {
  background-color: rgb(255, 255, 255);
}

body tbody tr:nth-child(even) {
  background-color: rgb(243, 243, 243);
}

body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(0, 0, 0);
  padding-bottom: 9px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 9px;
}

body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  padding-bottom: 9px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 9px;
}

body tr {
  background-color: rgb(176, 176, 176);
  border-bottom-color: rgb(85, 66, 61);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}`,
    code: `body code {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body pre:has(> code) {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
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
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(123, 108, 217);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(123, 108, 217);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration: line-through rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
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
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 238, 231);
}

body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(46, 51, 56);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 0, 0);
}

body h1 {
  color: rgb(46, 51, 56);
}

body h2 {
  color: rgb(85, 66, 61);
}

body h2.page-title, h2.page-title a {
  color: rgb(46, 51, 56);
}

body h3 {
  color: rgb(137, 59, 151);
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
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 238, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 238, 231);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 238, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 238, 231);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 238, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 238, 231);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 238, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 238, 231);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 238, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 238, 231);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 238, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 238, 231);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 136, 136);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(243, 210, 193);
  border-bottom-color: rgb(20, 5, 5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(20, 5, 5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(20, 5, 5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(20, 5, 5);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `body footer {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  background-color: rgb(250, 238, 231);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(46, 51, 56);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  background-color: rgb(250, 238, 231);
  border-bottom-color: rgb(46, 51, 56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
}

body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .navigation-progress {
  background-color: rgb(242, 243, 245);
}

body .page-header h2.page-title {
  color: rgb(46, 51, 56);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
  font-family: "??", "??", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body sub {
  color: rgb(46, 51, 56);
}

body summary {
  color: rgb(46, 51, 56);
}

body sup {
  color: rgb(46, 51, 56);
}`,
  },
};
