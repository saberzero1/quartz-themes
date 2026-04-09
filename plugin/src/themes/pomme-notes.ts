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
  --bases-table-column-border-width: 0.5px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-container-border-width: 0.5px !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-row-border-width: 0.5px !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-background-color: rgba(128, 128, 128, 0.1) !important;
  --blockquote-border-color: hsla(138, 61.6%, 66%, 0.9) !important;
  --blur-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent)) !important;
  --bold-color: #ffffff !important;
  --border-width: 0.5px !important;
  --button-radius: 32px !important;
  --callout-padding: 15px 10px 0px 20px;
  --callout-radius: 10px;
  --canvas-background: #000000 !important;
  --canvas-controls-radius: 10px !important;
  --caret-color: #cccccc !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #666666 !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 32px !important;
  --code-background: #191919 !important;
  --code-normal: #cccccc !important;
  --code-radius: 10px !important;
  --corner-smoothing: system-ui !important;
  --dark: #cccccc !important;
  --darkgray: #cccccc !important;
  --div-color: rgba(170, 170, 170, 0.2) !important;
  --divider-color: rgba(0, 0, 0, 0.05) !important;
  --dnc-stroke: 1.95px !important;
  --dropdown-background: #191919 !important;
  --dropdown-background-hover: #232323 !important;
  --element-shadow: 0 0px 15px rgba(0, 0, 0, 0.8) !important;
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
  --graph-text: #cccccc !important;
  --gray: #cccccc !important;
  --heading-spacing: 2.5em !important;
  --highlight: hsla(378, 35.2%, 66%, 0.5) !important;
  --icon-color-focused: #cccccc !important;
  --icon-l-stroke-width: 1.5px !important;
  --icon-stroke: 1.5px !important;
  --indentation-guide-width: 0.5px !important;
  --indentation-guide-width-active: 0.5px !important;
  --input-border-width: 0.5px !important;
  --interactive-hover: #232323 !important;
  --interactive-normal: #191919 !important;
  --light: #000000 !important;
  --lightgray: #191919 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
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
  --list-spacing: 0em !important;
  --menu-background: #191919 !important;
  --menu-border-width: 0.5px !important;
  --menu-radius: 18px !important;
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
  --nav-item-color-active: #cccccc !important;
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
  --selected-item: #191919 !important;
  --setting-group-heading-color: #cccccc !important;
  --setting-group-heading-weight: 500 !important;
  --setting-items-background: #191919 !important;
  --setting-items-radius: 32px !important;
  --side-padding: 20px !important;
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
  --tab-text-color-focused-active-current: #ffffff !important;
  --table-header-color: #cccccc !important;
  --text-extreme: #ffffff !important;
  --text-highlight-bg: hsla(378, 35.2%, 66%, 0.5) !important;
  --text-normal: #cccccc !important;
  --textHighlight: hsla(378, 35.2%, 66%, 0.5) !important;
  --titlebar-background: #191919 !important;
  --titlebar-background-focused: #191919 !important;
  --titlebar-text-color-focused: #cccccc !important;
  --titlebar-text-weight: 600 !important;
  --transparent-bar: rgba(25, 25, 25, 0.8) !important;
  --transparent-border: rgba(150, 150, 150, 0.2) !important;
  --vault-profile-color: #cccccc !important;
  --vault-profile-color-hover: #cccccc !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 25, 25);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(170, 170, 170, 0.2);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 25, 25);
  border-color: rgb(204, 204, 204);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 25, 25);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 25, 25);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(199, 156, 138, 0.5);
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 15px;
  border-width: 2px;
}`,
    links: `html[saved-theme="dark"] body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(128, 128, 128, 0.1);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(170, 170, 170, 0.2);
  border-left-color: rgba(170, 170, 170, 0.2);
  border-right-color: rgba(170, 170, 170, 0.2);
  border-top-color: rgba(170, 170, 170, 0.2);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(170, 170, 170, 0.2);
  border-left-color: rgba(170, 170, 170, 0.2);
  border-right-color: rgba(170, 170, 170, 0.2);
  border-top-color: rgba(170, 170, 170, 0.2);
  color: rgb(204, 204, 204);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-radius: 10px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h5 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h6 {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 15px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 500;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    footer: `html[saved-theme="dark"] body footer {
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
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: color(srgb 0 0 0 / 0.35);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --active-tab-background: rgba(255, 255, 255, 0.4) !important;
  --background-primary: #f5f5f5 !important;
  --background-secondary: #efefef !important;
  --bases-cards-background: #f5f5f5 !important;
  --bases-cards-border-width: 0.5px !important;
  --bases-cards-radius: 18px !important;
  --bases-embed-border-radius: 10px !important;
  --bases-group-heading-value-weight: 500 !important;
  --bases-header-border-width: 0 0 0.5px 0 !important;
  --bases-table-cell-background-active: #f5f5f5 !important;
  --bases-table-column-border-width: 0.5px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-container-border-width: 0.5px !important;
  --bases-table-header-background: #f5f5f5 !important;
  --bases-table-row-border-width: 0.5px !important;
  --bases-table-summary-background: #f5f5f5 !important;
  --blockquote-background-color: rgba(128, 128, 128, 0.1) !important;
  --blockquote-border-color: hsla(138, 61.6%, 66%, 0.9) !important;
  --blur-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent)) !important;
  --bold-color: #000000 !important;
  --border-width: 0.5px !important;
  --button-radius: 32px !important;
  --callout-padding: 15px 10px 0px 20px;
  --callout-radius: 10px;
  --canvas-background: #f5f5f5 !important;
  --canvas-controls-radius: 10px !important;
  --caret-color: #404040 !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: #f5f5f5 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #ababab !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 32px !important;
  --code-background: #efefef !important;
  --code-normal: #404040 !important;
  --code-radius: 10px !important;
  --dark: #404040 !important;
  --darkgray: #404040 !important;
  --div-color: rgba(170, 170, 170, 0.6) !important;
  --divider-color: rgba(0, 0, 0, 0.05) !important;
  --dnc-stroke: 1.95px !important;
  --element-shadow: 0 0px 15px rgba(0, 0, 0, 0.1) !important;
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
  --graph-text: #404040 !important;
  --gray: #404040 !important;
  --heading-spacing: 2.5em !important;
  --highlight: hsla(378, 35.2%, 66%, 0.5) !important;
  --icon-color-focused: #404040 !important;
  --icon-l-stroke-width: 1.5px !important;
  --icon-stroke: 1.5px !important;
  --indentation-guide-width: 0.5px !important;
  --indentation-guide-width-active: 0.5px !important;
  --input-border-width: 0.5px !important;
  --light: #f5f5f5 !important;
  --lightgray: #efefef !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
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
  --list-spacing: 0em !important;
  --menu-background: #efefef !important;
  --menu-border-width: 0.5px !important;
  --menu-radius: 18px !important;
  --metadata-input-text-color: #404040 !important;
  --metadata-property-box-shadow-hover: 0 0 0 0.5px #d4d4d4 !important;
  --modal-background: #f5f5f5 !important;
  --modal-border-width: 0.5px !important;
  --modal-radius: 32px !important;
  --nav-heading-color: #404040 !important;
  --nav-heading-color-hover: #404040 !important;
  --nav-indentation-guide-width: 0.5px !important;
  --nav-item-background-hover: none !important;
  --nav-item-color-active: #404040 !important;
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
  --setting-group-heading-color: #404040 !important;
  --setting-group-heading-weight: 500 !important;
  --setting-items-radius: 32px !important;
  --side-padding: 20px !important;
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
  --tab-text-color-focused-active-current: #000000 !important;
  --table-header-color: #404040 !important;
  --text-extreme: #000000 !important;
  --text-highlight-bg: hsla(378, 35.2%, 66%, 0.5) !important;
  --text-normal: #404040 !important;
  --textHighlight: hsla(378, 35.2%, 66%, 0.5) !important;
  --titlebar-background: #efefef !important;
  --titlebar-background-focused: #efefef !important;
  --titlebar-text-color-focused: #404040 !important;
  --titlebar-text-weight: 600 !important;
  --transparent-bar: rgba(250, 250, 250, 0.8) !important;
  --transparent-border: rgba(255, 255, 255, 0.8) !important;
  --vault-profile-color: #404040 !important;
  --vault-profile-color-hover: #404040 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 239, 239);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(170, 170, 170, 0.6);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(245, 245, 245);
  border-color: rgb(64, 64, 64);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 239, 239);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 239, 239);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(199, 156, 138, 0.5);
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body del {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 15px;
  border-width: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}`,
    links: `html[saved-theme="light"] body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body dt {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(128, 128, 128, 0.1);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body table {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(170, 170, 170, 0.6);
  border-left-color: rgba(170, 170, 170, 0.6);
  border-right-color: rgba(170, 170, 170, 0.6);
  border-top-color: rgba(170, 170, 170, 0.6);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(170, 170, 170, 0.6);
  border-left-color: rgba(170, 170, 170, 0.6);
  border-right-color: rgba(170, 170, 170, 0.6);
  border-top-color: rgba(170, 170, 170, 0.6);
  color: rgb(64, 64, 64);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(239, 239, 239);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body figcaption {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(0, 0, 0);
  border-radius: 10px;
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
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

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 239, 239);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h5 {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body h6 {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 15px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 500;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    footer: `html[saved-theme="light"] body footer {
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
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: color(srgb 0.960784 0.960784 0.960784 / 0.35);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body abbr {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sub {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body summary {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sup {
  color: rgb(64, 64, 64);
}`,
  },
};
