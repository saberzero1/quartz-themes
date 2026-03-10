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
  --active-tab-background: rgba(100, 100, 100, 0.3) !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-primary: #000000 !important;
  --background-secondary: #191919 !important;
  --background-secondary-alt: #191919 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-border-width: 0.5px !important;
  --bases-cards-radius: 18px !important;
  --bases-embed-border-radius: 10px !important;
  --bases-group-heading-value-weight: 500 !important;
  --bases-header-border-width: 0 0 0.5px 0 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-column-border-width: 0.5px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-container-border-width: 0.5px !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-row-border-width: 0.5px !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-background-color: rgba(128, 128, 128, 0.1) !important;
  --blockquote-border-color: rgba(115, 222, 147, 0.9) !important;
  --blur-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent)) !important;
  --bold-color: #ffffff !important;
  --bold-weight: 600 !important;
  --border-width: 0.5px !important;
  --button-radius: 32px !important;
  --callout-padding: 15px 10px 0px 20px;
  --callout-radius: 10px;
  --callout-title-weight: 600;
  --canvas-background: #000000 !important;
  --canvas-controls-radius: 10px !important;
  --caret-color: #cccccc !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #666666 !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 32px !important;
  --code-background: #191919 !important;
  --code-normal: #cccccc !important;
  --code-radius: 10px !important;
  --collapse-icon-color-collapsed: rgb(166, 139, 249) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --corner-smoothing: system-ui !important;
  --dark: #cccccc !important;
  --darkgray: #cccccc !important;
  --div-color: rgba(170, 170, 170, 0.2) !important;
  --divider-color: rgba(0, 0, 0, 0.05) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --dnc-stroke: 1.95px !important;
  --dropdown-background: #191919 !important;
  --dropdown-background-hover: #232323 !important;
  --element-shadow: 0 0px 15px rgba(0, 0, 0, 0.8) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --embed-padding: 0px !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --file-header-border: 0.5px solid transparent !important;
  --flair-background: #191919 !important;
  --flair-color: #cccccc !important;
  --font-bold: 600 !important;
  --font-semibold: 500 !important;
  --footnote-divider-width: 0.5px !important;
  --footnote-radius: 10px !important;
  --glass-edge: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        
        0 3px 20px rgba(0, 0, 0, 0.4) !important;
  --glass-edge-tab: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        0 1px 0px rgba(0, 0, 0, 0.4) !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
  --graph-text: #cccccc !important;
  --gray: #cccccc !important;
  --heading-spacing: 2.5em !important;
  --highlight: hsla(378, 35%, 66%, 0.5) !important;
  --icon-color-active: rgb(166, 139, 249) !important;
  --icon-color-focused: #cccccc !important;
  --icon-l-stroke-width: 1.5px !important;
  --icon-stroke: 1.5px !important;
  --indentation-guide-width: 0.5px !important;
  --indentation-guide-width-active: 0.5px !important;
  --input-border-width: 0.5px !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --interactive-hover: #232323 !important;
  --interactive-normal: #191919 !important;
  --light: #000000 !important;
  --lightgray: #191919 !important;
  --link-color: rgb(166, 139, 249) !important;
  --link-color-hover: rgb(197, 182, 252) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(166, 139, 249) !important;
  --link-external-color-hover: rgb(197, 182, 252) !important;
  --link-unresolved-color: rgb(166, 139, 249) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --liquid-shadow-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        
        0 3px 20px rgba(0, 0, 0, 0.4) !important;
  --liquid-shadow-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        
        0 3px 20px rgba(0, 0, 0, 0.08) !important;
  --liquid-shadow-tab-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        0 1px 0px rgba(0, 0, 0, 0.4) !important;
  --liquid-shadow-tab-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        1px 1px 2px rgba(0, 0, 0, 0.1) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(166, 139, 249) !important;
  --list-spacing: 0em !important;
  --menu-background: #191919 !important;
  --menu-border-width: 0.5px !important;
  --menu-radius: 18px !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #cccccc !important;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #3f3f3f !important;
  --mobile-sidebar-background: #191919 !important;
  --modal-background: #000000 !important;
  --modal-border-width: 0.5px !important;
  --modal-radius: 32px !important;
  --nav-heading-color: #cccccc !important;
  --nav-heading-color-hover: #cccccc !important;
  --nav-indentation-guide-width: 0.5px !important;
  --nav-item-background-hover: none !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-active: #cccccc !important;
  --nav-item-color-highlighted: rgb(166, 139, 249) !important;
  --nav-item-color-hover: #cccccc !important;
  --nav-item-color-selected: #cccccc !important;
  --nav-item-radius: 10px !important;
  --nav-tag-radius: 10px !important;
  --nav-tag-weight: 500 !important;
  --p-spacing: 1em !important;
  --p-spacing-empty: 1.5rem !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color-hover: #cccccc !important;
  --pill-color-remove-hover: rgb(166, 139, 249) !important;
  --popup-background: #191919 !important;
  --prompt-background: #191919 !important;
  --prompt-border-width: 0.5px !important;
  --prompt-input-background: #191919 !important;
  --properties-background: #191919 !important;
  --radius-l: 32px !important;
  --radius-m: 18px !important;
  --radius-s: 10px !important;
  --radius-xl: 36px !important;
  --raised-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent)) !important;
  --ribbon-background: #191919 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-radius: 32px !important;
  --search-result-background: #000000 !important;
  --secondary: rgb(166, 139, 249) !important;
  --selected-item: #191919 !important;
  --setting-group-heading-color: #cccccc !important;
  --setting-group-heading-weight: 500 !important;
  --setting-items-background: #191919 !important;
  --setting-items-radius: 32px !important;
  --side-padding: 20px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-width: 0.5px !important;
  --status-bar-background: #191919 !important;
  --status-bar-border-color: rgba(0, 0, 0, 0.05) !important;
  --status-bar-border-width: 0.5px 0 0 0.5px !important;
  --status-bar-radius: 18px 0 0 0 !important;
  --statusbar-glass-bg: color-mix(in srgb, #000000 35%, transparent) !important;
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #191919 !important;
  --tab-curve: 0px !important;
  --tab-outline-color: rgba(0, 0, 0, 0.05) !important;
  --tab-radius: 18px !important;
  --tab-radius-active: 12px 12px 0px 0px !important;
  --tab-stacked-pane-width: 1200px !important;
  --tab-switcher-background: #191919 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191919, transparent) !important;
  --tab-switcher-preview-radius: 36px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-header-color: #cccccc !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(166, 139, 249) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-extreme: #ffffff !important;
  --text-highlight-bg: hsla(378, 35%, 66%, 0.5) !important;
  --text-normal: #cccccc !important;
  --text-selection: rgba(138, 92, 245, 0.33) !important;
  --textHighlight: hsla(378, 35%, 66%, 0.5) !important;
  --titlebar-background: #191919 !important;
  --titlebar-background-focused: #191919 !important;
  --titlebar-text-color-focused: #cccccc !important;
  --titlebar-text-weight: 600 !important;
  --transparent-bar: rgba(25, 25, 25, 0.8) !important;
  --transparent-border: rgba(150, 150, 150, 0.2) !important;
  --vault-profile-color: #cccccc !important;
  --vault-profile-color-hover: #cccccc !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  --active-tab-background: rgba(255, 255, 255, 0.4) !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-primary: #f5f5f5 !important;
  --background-secondary: #efefef !important;
  --bases-cards-background: #f5f5f5 !important;
  --bases-cards-border-width: 0.5px !important;
  --bases-cards-radius: 18px !important;
  --bases-embed-border-radius: 10px !important;
  --bases-group-heading-value-weight: 500 !important;
  --bases-header-border-width: 0 0 0.5px 0 !important;
  --bases-table-cell-background-active: #f5f5f5 !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247) !important;
  --bases-table-column-border-width: 0.5px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-container-border-width: 0.5px !important;
  --bases-table-header-background: #f5f5f5 !important;
  --bases-table-row-border-width: 0.5px !important;
  --bases-table-summary-background: #f5f5f5 !important;
  --blockquote-background-color: rgba(128, 128, 128, 0.1) !important;
  --blockquote-border-color: rgba(115, 222, 147, 0.9) !important;
  --blur-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent)) !important;
  --bold-color: #000000 !important;
  --bold-weight: 600 !important;
  --border-width: 0.5px !important;
  --button-radius: 32px !important;
  --callout-padding: 15px 10px 0px 20px;
  --callout-radius: 10px;
  --callout-title-weight: 600;
  --canvas-background: #f5f5f5 !important;
  --canvas-controls-radius: 10px !important;
  --caret-color: #404040 !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: #f5f5f5 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #ababab !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 32px !important;
  --code-background: #efefef !important;
  --code-normal: #404040 !important;
  --code-radius: 10px !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --dark: #404040 !important;
  --darkgray: #404040 !important;
  --div-color: rgba(170, 170, 170, 0.6) !important;
  --divider-color: rgba(0, 0, 0, 0.05) !important;
  --divider-color-hover: rgb(153, 115, 247) !important;
  --dnc-stroke: 1.95px !important;
  --element-shadow: 0 0px 15px rgba(0, 0, 0, 0.1) !important;
  --embed-border-start: 2px solid rgb(153, 115, 247) !important;
  --embed-padding: 0px !important;
  --file-header-background: #f5f5f5 !important;
  --file-header-background-focused: #f5f5f5 !important;
  --file-header-border: 0.5px solid transparent !important;
  --flair-color: #404040 !important;
  --font-bold: 600 !important;
  --font-semibold: 500 !important;
  --footnote-divider-width: 0.5px !important;
  --footnote-radius: 10px !important;
  --glass-edge: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        
        0 3px 20px rgba(0, 0, 0, 0.08) !important;
  --glass-edge-tab: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        1px 1px 2px rgba(0, 0, 0, 0.1) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-text: #404040 !important;
  --gray: #404040 !important;
  --heading-spacing: 2.5em !important;
  --highlight: hsla(378, 35%, 66%, 0.5) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --icon-color-focused: #404040 !important;
  --icon-l-stroke-width: 1.5px !important;
  --icon-stroke: 1.5px !important;
  --indentation-guide-width: 0.5px !important;
  --indentation-guide-width-active: 0.5px !important;
  --input-border-width: 0.5px !important;
  --interactive-accent: rgb(153, 115, 247) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --light: #f5f5f5 !important;
  --lightgray: #efefef !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --liquid-shadow-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        
        0 3px 20px rgba(0, 0, 0, 0.4) !important;
  --liquid-shadow-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        
        0 3px 20px rgba(0, 0, 0, 0.08) !important;
  --liquid-shadow-tab-dark: inset 1.25px 1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        inset -1.25px -1px 0.5px -0.5px rgba(180, 180, 180, 0.2),
        0 1px 0px rgba(0, 0, 0, 0.4) !important;
  --liquid-shadow-tab-light: inset 1.5px 1.5px 1px 0 rgba(255, 255, 255, 0.7),
        inset -1.5px -1.5px 1px 0 rgba(255, 255, 255, 0.5),
        1px 1px 2px rgba(0, 0, 0, 0.1) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --list-spacing: 0em !important;
  --menu-background: #efefef !important;
  --menu-border-width: 0.5px !important;
  --menu-radius: 18px !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #404040 !important;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #d4d4d4 !important;
  --modal-background: #f5f5f5 !important;
  --modal-border-width: 0.5px !important;
  --modal-radius: 32px !important;
  --nav-heading-color: #404040 !important;
  --nav-heading-color-hover: #404040 !important;
  --nav-indentation-guide-width: 0.5px !important;
  --nav-item-background-hover: none !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-active: #404040 !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --nav-item-color-hover: #404040 !important;
  --nav-item-color-selected: #404040 !important;
  --nav-item-radius: 10px !important;
  --nav-tag-radius: 10px !important;
  --nav-tag-weight: 500 !important;
  --p-spacing: 1em !important;
  --p-spacing-empty: 1.5rem !important;
  --pdf-background: #f5f5f5 !important;
  --pdf-page-background: #f5f5f5 !important;
  --pdf-sidebar-background: #f5f5f5 !important;
  --pill-color-hover: #404040 !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --prompt-background: #f5f5f5 !important;
  --prompt-border-width: 0.5px !important;
  --radius-l: 32px !important;
  --radius-m: 18px !important;
  --radius-s: 10px !important;
  --radius-xl: 36px !important;
  --raised-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent)) !important;
  --ribbon-background: #efefef !important;
  --ribbon-background-collapsed: #f5f5f5 !important;
  --scrollbar-radius: 32px !important;
  --search-result-background: #f5f5f5 !important;
  --secondary: rgb(138, 92, 245) !important;
  --setting-group-heading-color: #404040 !important;
  --setting-group-heading-weight: 500 !important;
  --setting-items-radius: 32px !important;
  --side-padding: 20px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-width: 0.5px !important;
  --status-bar-background: #efefef !important;
  --status-bar-border-color: rgba(0, 0, 0, 0.05) !important;
  --status-bar-border-width: 0.5px 0 0 0.5px !important;
  --status-bar-radius: 18px 0 0 0 !important;
  --statusbar-glass-bg: color-mix(in srgb, #f5f5f5 35%, transparent) !important;
  --statusbar-glass-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
  --suggestion-background: #f5f5f5 !important;
  --tab-background-active: #f5f5f5 !important;
  --tab-container-background: #efefef !important;
  --tab-curve: 0px !important;
  --tab-outline-color: rgba(0, 0, 0, 0.05) !important;
  --tab-radius: 18px !important;
  --tab-radius-active: 12px 12px 0px 0px !important;
  --tab-stacked-pane-width: 1200px !important;
  --tab-switcher-background: #efefef !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #efefef, transparent) !important;
  --tab-switcher-preview-radius: 36px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-drag-handle-background-active: rgb(153, 115, 247) !important;
  --table-header-color: #404040 !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(153, 115, 247) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-extreme: #000000 !important;
  --text-highlight-bg: hsla(378, 35%, 66%, 0.5) !important;
  --text-normal: #404040 !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: hsla(378, 35%, 66%, 0.5) !important;
  --titlebar-background: #efefef !important;
  --titlebar-background-focused: #efefef !important;
  --titlebar-text-color-focused: #404040 !important;
  --titlebar-text-weight: 600 !important;
  --transparent-bar: rgba(250, 250, 250, 0.8) !important;
  --transparent-border: rgba(255, 255, 255, 0.8) !important;
  --vault-profile-color: #404040 !important;
  --vault-profile-color-hover: #404040 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
