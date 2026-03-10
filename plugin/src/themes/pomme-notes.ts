import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "pomme-notes",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --active-tab-background: rgba(100, 100, 100, 0.3);
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-primary: #000000;
  --background-secondary: #191919;
  --background-secondary-alt: #191919;
  --bases-cards-background: #000000;
  --bases-cards-border-width: 0.5px;
  --bases-cards-radius: 18px;
  --bases-embed-border-radius: 10px;
  --bases-group-heading-value-weight: 500;
  --bases-header-border-width: 0 0 0.5px 0;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-column-border-width: 0.5px;
  --bases-table-container-border-radius: 10px;
  --bases-table-container-border-width: 0.5px;
  --bases-table-header-background: #000000;
  --bases-table-row-border-width: 0.5px;
  --bases-table-summary-background: #000000;
  --blockquote-background-color: rgba(128, 128, 128, 0.1);
  --blockquote-border-color: rgba(115, 222, 147, 0.9);
  --blur-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent));
  --bold-color: #ffffff;
  --bold-weight: 600;
  --border-width: 0.5px;
  --button-radius: 32px;
  --callout-padding: 15px 10px 0px 20px;
  --callout-radius: 10px;
  --callout-title-weight: 600;
  --canvas-background: #000000;
  --canvas-controls-radius: 10px;
  --caret-color: #cccccc;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: #000000;
  --checkbox-radius: 10px;
  --checklist-done-color: #666666;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 32px;
  --code-background: #191919;
  --code-normal: #cccccc;
  --code-radius: 10px;
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --corner-smoothing: system-ui;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --div-color: rgba(170, 170, 170, 0.2);
  --divider-color: rgba(0, 0, 0, 0.05);
  --divider-color-hover: rgb(138, 92, 245);
  --dnc-stroke: 1.95px;
  --dropdown-background: #191919;
  --dropdown-background-hover: #232323;
  --element-shadow: 0 0px 15px rgba(0, 0, 0, 0.8);
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --embed-padding: 0px;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --file-header-border: 0.5px solid transparent;
  --flair-background: #191919;
  --flair-color: #cccccc;
  --font-bold: 600;
  --font-semibold: 500;
  --footnote-divider-width: 0.5px;
  --footnote-radius: 10px;
  --glass-edge: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        
        0 3px 20px rgba(0, 0, 0, 0.4);
  --glass-edge-tab: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        0 1px 0px rgba(0, 0, 0, 0.4);
  --graph-node-focused: rgb(166, 139, 249);
  --graph-text: #cccccc;
  --gray: var(--text-normal);
  --heading-spacing: 2.5em;
  --highlight: var(--text-highlight-bg);
  --icon-color-active: rgb(166, 139, 249);
  --icon-color-focused: #cccccc;
  --icon-l-stroke-width: 1.5px;
  --icon-stroke: 1.5px;
  --indentation-guide-width: 0.5px;
  --indentation-guide-width-active: 0.5px;
  --input-border-width: 0.5px;
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-hover: #232323;
  --interactive-normal: #191919;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-unresolved-color: rgb(166, 139, 249);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --liquid-shadow-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        
        0 3px 20px rgba(0, 0, 0, 0.4);
  --liquid-shadow-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        
        0 3px 20px rgba(0, 0, 0, 0.08);
  --liquid-shadow-tab-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        0 1px 0px rgba(0, 0, 0, 0.4);
  --liquid-shadow-tab-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        1px 1px 2px rgba(0, 0, 0, 0.1);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --list-spacing: 0em;
  --menu-background: #191919;
  --menu-border-width: 0.5px;
  --menu-radius: 18px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #cccccc;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #3f3f3f;
  --mobile-sidebar-background: #191919;
  --modal-background: #000000;
  --modal-border-width: 0.5px;
  --modal-radius: 32px;
  --nav-heading-color: #cccccc;
  --nav-heading-color-hover: #cccccc;
  --nav-indentation-guide-width: 0.5px;
  --nav-item-background-hover: none;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-active: #cccccc;
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --nav-item-color-hover: #cccccc;
  --nav-item-color-selected: #cccccc;
  --nav-item-radius: 10px;
  --nav-tag-radius: 10px;
  --nav-tag-weight: 500;
  --p-spacing: 1em;
  --p-spacing-empty: 1.5rem;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color-hover: #cccccc;
  --pill-color-remove-hover: rgb(166, 139, 249);
  --popup-background: #191919;
  --prompt-background: #191919;
  --prompt-border-width: 0.5px;
  --prompt-input-background: #191919;
  --properties-background: #191919;
  --radius-l: 32px;
  --radius-m: 18px;
  --radius-s: 10px;
  --radius-xl: 36px;
  --raised-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent));
  --ribbon-background: #191919;
  --ribbon-background-collapsed: #000000;
  --scrollbar-radius: 32px;
  --search-result-background: #000000;
  --secondary: var(--text-accent);
  --selected-item: #191919;
  --setting-group-heading-color: #cccccc;
  --setting-group-heading-weight: 500;
  --setting-items-background: #191919;
  --setting-items-radius: 32px;
  --side-padding: 20px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-width: 0.5px;
  --status-bar-background: #191919;
  --status-bar-border-color: rgba(0, 0, 0, 0.05);
  --status-bar-border-width: 0.5px 0 0 0.5px;
  --status-bar-radius: 18px 0 0 0;
  --statusbar-glass-bg: color-mix(in srgb, #000000 35%, transparent);
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #191919;
  --tab-curve: 0px;
  --tab-outline-color: rgba(0, 0, 0, 0.05);
  --tab-radius: 18px;
  --tab-radius-active: 12px 12px 0px 0px;
  --tab-stacked-pane-width: 1200px;
  --tab-switcher-background: #191919;
  --tab-switcher-menubar-background: linear-gradient(to top, #191919, transparent);
  --tab-switcher-preview-radius: 36px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-header-color: #cccccc;
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(166, 139, 249);
  --tag-color-hover: rgb(166, 139, 249);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-extreme: #ffffff;
  --text-highlight-bg: hsla(378, 35%, 66%, 0.5);
  --text-normal: #cccccc;
  --text-selection: rgba(138, 92, 245, 0.33);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #191919;
  --titlebar-background-focused: #191919;
  --titlebar-text-color-focused: #cccccc;
  --titlebar-text-weight: 600;
  --transparent-bar: rgba(25, 25, 25, 0.8);
  --transparent-border: rgba(150, 150, 150, 0.2);
  --vault-profile-color: #cccccc;
  --vault-profile-color-hover: #cccccc;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 25, 25);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 25, 25);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 25, 25);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > i, i {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgba(199, 156, 138, 0.5);
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    links: `body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(128, 128, 128, 0.1);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
}

body td {
  border-bottom-color: rgba(170, 170, 170, 0.2);
  border-left-color: rgba(170, 170, 170, 0.2);
  border-right-color: rgba(170, 170, 170, 0.2);
  border-top-color: rgba(170, 170, 170, 0.2);
  color: rgb(204, 204, 204);
}

body th {
  border-bottom-color: rgba(170, 170, 170, 0.2);
  border-left-color: rgba(170, 170, 170, 0.2);
  border-right-color: rgba(170, 170, 170, 0.2);
  border-top-color: rgba(170, 170, 170, 0.2);
  color: rgb(204, 204, 204);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}

body pre > code, pre:has(> code) {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body pre:has(> code) {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-radius: 10px;
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body input[type=checkbox] {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-width: 2px;
  transition: box-shadow 0.25s ease-in-out;
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
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
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 0px;
  border-left-color: rgb(204, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(204, 204, 204);
  border-right-width: 0px;
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 0px;
  border-left-color: rgb(204, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(204, 204, 204);
  border-right-width: 0px;
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
  box-shadow: rgba(180, 180, 180, 0.2) 1.25px 1px 0.5px -0.5px inset, rgba(180, 180, 180, 0.2) -1.25px -1px 0.5px -0.5px inset, rgba(0, 0, 0, 0.4) 0px 3px 20px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 0px;
  border-left-color: rgb(204, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(204, 204, 204);
  border-right-width: 0px;
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}

body h1 {
  color: rgb(255, 255, 255);
}

body h2 {
  color: rgb(255, 255, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
}

body h3 {
  color: rgb(255, 255, 255);
}

body h4 {
  color: rgb(255, 255, 255);
}

body h5 {
  color: rgb(204, 204, 204);
}

body h6 {
  color: rgb(138, 92, 245);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 15px;
}

body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    footer: `body footer {
  background-color: color(srgb 0 0 0 / 0.35);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .navigation-progress {
  background-color: color(srgb 0 0 0 / 0.35);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body kbd {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --active-tab-background: rgba(255, 255, 255, 0.4);
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-primary: #f5f5f5;
  --background-secondary: #efefef;
  --bases-cards-background: #f5f5f5;
  --bases-cards-border-width: 0.5px;
  --bases-cards-radius: 18px;
  --bases-embed-border-radius: 10px;
  --bases-group-heading-value-weight: 500;
  --bases-header-border-width: 0 0 0.5px 0;
  --bases-table-cell-background-active: #f5f5f5;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --bases-table-column-border-width: 0.5px;
  --bases-table-container-border-radius: 10px;
  --bases-table-container-border-width: 0.5px;
  --bases-table-header-background: #f5f5f5;
  --bases-table-row-border-width: 0.5px;
  --bases-table-summary-background: #f5f5f5;
  --blockquote-background-color: rgba(128, 128, 128, 0.1);
  --blockquote-border-color: rgba(115, 222, 147, 0.9);
  --blur-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent));
  --bold-color: #000000;
  --bold-weight: 600;
  --border-width: 0.5px;
  --button-radius: 32px;
  --callout-padding: 15px 10px 0px 20px;
  --callout-radius: 10px;
  --callout-title-weight: 600;
  --canvas-background: #f5f5f5;
  --canvas-controls-radius: 10px;
  --caret-color: #404040;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: #f5f5f5;
  --checkbox-radius: 10px;
  --checklist-done-color: #ababab;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 32px;
  --code-background: #efefef;
  --code-normal: #404040;
  --code-radius: 10px;
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --div-color: rgba(170, 170, 170, 0.6);
  --divider-color: rgba(0, 0, 0, 0.05);
  --divider-color-hover: rgb(153, 115, 247);
  --dnc-stroke: 1.95px;
  --element-shadow: 0 0px 15px rgba(0, 0, 0, 0.1);
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --embed-padding: 0px;
  --file-header-background: #f5f5f5;
  --file-header-background-focused: #f5f5f5;
  --file-header-border: 0.5px solid transparent;
  --flair-color: #404040;
  --font-bold: 600;
  --font-semibold: 500;
  --footnote-divider-width: 0.5px;
  --footnote-radius: 10px;
  --glass-edge: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        
        0 3px 20px rgba(0, 0, 0, 0.08);
  --glass-edge-tab: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        1px 1px 2px rgba(0, 0, 0, 0.1);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-text: #404040;
  --gray: var(--text-normal);
  --heading-spacing: 2.5em;
  --highlight: var(--text-highlight-bg);
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-focused: #404040;
  --icon-l-stroke-width: 1.5px;
  --icon-stroke: 1.5px;
  --indentation-guide-width: 0.5px;
  --indentation-guide-width-active: 0.5px;
  --input-border-width: 0.5px;
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --liquid-shadow-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        
        0 3px 20px rgba(0, 0, 0, 0.4);
  --liquid-shadow-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        
        0 3px 20px rgba(0, 0, 0, 0.08);
  --liquid-shadow-tab-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        0 1px 0px rgba(0, 0, 0, 0.4);
  --liquid-shadow-tab-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        1px 1px 2px rgba(0, 0, 0, 0.1);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --list-spacing: 0em;
  --menu-background: #efefef;
  --menu-border-width: 0.5px;
  --menu-radius: 18px;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #404040;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #d4d4d4;
  --modal-background: #f5f5f5;
  --modal-border-width: 0.5px;
  --modal-radius: 32px;
  --nav-heading-color: #404040;
  --nav-heading-color-hover: #404040;
  --nav-indentation-guide-width: 0.5px;
  --nav-item-background-hover: none;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-active: #404040;
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-item-color-hover: #404040;
  --nav-item-color-selected: #404040;
  --nav-item-radius: 10px;
  --nav-tag-radius: 10px;
  --nav-tag-weight: 500;
  --p-spacing: 1em;
  --p-spacing-empty: 1.5rem;
  --pdf-background: #f5f5f5;
  --pdf-page-background: #f5f5f5;
  --pdf-sidebar-background: #f5f5f5;
  --pill-color-hover: #404040;
  --pill-color-remove-hover: rgb(138, 92, 245);
  --prompt-background: #f5f5f5;
  --prompt-border-width: 0.5px;
  --radius-l: 32px;
  --radius-m: 18px;
  --radius-s: 10px;
  --radius-xl: 36px;
  --raised-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent));
  --ribbon-background: #efefef;
  --ribbon-background-collapsed: #f5f5f5;
  --scrollbar-radius: 32px;
  --search-result-background: #f5f5f5;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #404040;
  --setting-group-heading-weight: 500;
  --setting-items-radius: 32px;
  --side-padding: 20px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-width: 0.5px;
  --status-bar-background: #efefef;
  --status-bar-border-color: rgba(0, 0, 0, 0.05);
  --status-bar-border-width: 0.5px 0 0 0.5px;
  --status-bar-radius: 18px 0 0 0;
  --statusbar-glass-bg: color-mix(in srgb, #f5f5f5 35%, transparent);
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  --suggestion-background: #f5f5f5;
  --tab-background-active: #f5f5f5;
  --tab-container-background: #efefef;
  --tab-curve: 0px;
  --tab-outline-color: rgba(0, 0, 0, 0.05);
  --tab-radius: 18px;
  --tab-radius-active: 12px 12px 0px 0px;
  --tab-stacked-pane-width: 1200px;
  --tab-switcher-background: #efefef;
  --tab-switcher-menubar-background: linear-gradient(to top, #efefef, transparent);
  --tab-switcher-preview-radius: 36px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-header-color: #404040;
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-extreme: #000000;
  --text-highlight-bg: hsla(378, 35%, 66%, 0.5);
  --text-normal: #404040;
  --text-selection: rgba(138, 92, 245, 0.2);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #efefef;
  --titlebar-background-focused: #efefef;
  --titlebar-text-color-focused: #404040;
  --titlebar-text-weight: 600;
  --transparent-bar: rgba(250, 250, 250, 0.8);
  --transparent-border: rgba(255, 255, 255, 0.8);
  --vault-profile-color: #404040;
  --vault-profile-color-hover: #404040;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 239, 239);
  color: rgb(64, 64, 64);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 239, 239);
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 239, 239);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(64, 64, 64);
}

body div#quartz-root {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .page article p > i, i {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(199, 156, 138, 0.5);
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body del {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: line-through rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}`,
    links: `body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(64, 64, 64);
}

body dt {
  color: rgb(64, 64, 64);
}

body ol > li {
  color: rgb(64, 64, 64);
}

body ol.overflow {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ul > li {
  color: rgb(64, 64, 64);
}

body ul.overflow {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(128, 128, 128, 0.1);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body table {
  color: rgb(64, 64, 64);
}

body td {
  border-bottom-color: rgba(170, 170, 170, 0.6);
  border-left-color: rgba(170, 170, 170, 0.6);
  border-right-color: rgba(170, 170, 170, 0.6);
  border-top-color: rgba(170, 170, 170, 0.6);
  color: rgb(64, 64, 64);
}

body th {
  border-bottom-color: rgba(170, 170, 170, 0.6);
  border-left-color: rgba(170, 170, 170, 0.6);
  border-right-color: rgba(170, 170, 170, 0.6);
  border-top-color: rgba(170, 170, 170, 0.6);
  color: rgb(64, 64, 64);
}`,
    code: `body code {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}

body pre > code, pre:has(> code) {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body pre:has(> code) {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body figcaption {
  color: rgb(64, 64, 64);
}

body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body img {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-radius: 10px;
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .transclude {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}

body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 24px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body input[type=checkbox] {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-width: 2px;
  transition: box-shadow 0.25s ease-in-out;
}

body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='-'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
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
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 0px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 0px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
  box-shadow: rgba(255, 255, 255, 0.7) 1.5px 1.5px 1px 0px inset, rgba(255, 255, 255, 0.5) -1.5px -1.5px 1px 0px inset, rgba(0, 0, 0, 0.08) 0px 3px 20px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 0px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 239, 239);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}

body h1 {
  color: rgb(0, 0, 0);
}

body h2 {
  color: rgb(0, 0, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

body h3 {
  color: rgb(0, 0, 0);
}

body h4 {
  color: rgb(0, 0, 0);
}

body h5 {
  color: rgb(64, 64, 64);
}

body h6 {
  color: rgb(138, 92, 245);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 15px;
}

body ::-webkit-scrollbar {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 500;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 500;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    footer: `body footer {
  background-color: color(srgb 0.960784 0.960784 0.960784 / 0.35);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 0px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(64, 64, 64);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .navigation-progress {
  background-color: color(srgb 0.960784 0.960784 0.960784 / 0.35);
}

body .page-header h2.page-title {
  color: rgb(64, 64, 64);
}

body abbr {
  color: rgb(64, 64, 64);
  text-decoration: underline dotted rgb(64, 64, 64);
}

body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body kbd {
  background-color: rgb(239, 239, 239);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}

body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body sub {
  color: rgb(64, 64, 64);
}

body summary {
  color: rgb(64, 64, 64);
}

body sup {
  color: rgb(64, 64, 64);
}`,
  },
};
