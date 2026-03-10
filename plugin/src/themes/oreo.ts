import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "oreo", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: hsla(rgb(102, 102, 102), 0.1) !important;
  --background-primary: black !important;
  --background-secondary: #1a1a1a !important;
  --bases-cards-background: black !important;
  --bases-table-cell-background-active: black !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #666666 !important;
  --bases-table-header-background: black !important;
  --bases-table-summary-background: black !important;
  --blockquote-background-color: #1a1a1a !important;
  --blockquote-border-color: #444444 !important;
  --blockquote-color: #dddddd !important;
  --blur-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent)) !important;
  --bold-color: #cccccc !important;
  --bold-weight: 600 !important;
  --button-radius: 10px !important;
  --callout-title-color: #ffffff;
  --callout-title-size: 1.2em;
  --callout-title-weight: 600;
  --canvas-background: black !important;
  --checkbox-border-color-hover: #999999 !important;
  --checkbox-color: #333333 !important;
  --checkbox-color-hover: #4d4d4d !important;
  --checkbox-margin-inline-start: 8px !important;
  --checkbox-marker-color: black !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: #666666 !important;
  --code-background: #2d2d2d !important;
  --code-comment: #999988 !important;
  --code-function: #a6e22e !important;
  --code-important: #f92672 !important;
  --code-keyword: #f92672 !important;
  --code-normal: #ffffff !important;
  --code-operator: #f92672 !important;
  --code-property: #66d9ef !important;
  --code-punctuation: #ffffff !important;
  --code-string: #e6db74 !important;
  --code-tag: #a6e22e !important;
  --code-value: #ae81ff !important;
  --collapse-icon-color-collapsed: rgb(166, 139, 249) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --divider-color: #555555 !important;
  --divider-color-hover: #888888 !important;
  --drag-ghost-background: rgba(0, 0, 0, 0.8) !important;
  --drag-ghost-text-color: #ffffff !important;
  --dropdown-background: #333333 !important;
  --dropdown-background-hover: #4d4d4d !important;
  --embed-background: #333333 !important;
  --embed-border-color: #444444 !important;
  --embed-border-start: 2px solid #666666 !important;
  --embed-font-style: italic !important;
  --file-header-background: black !important;
  --file-header-background-focused: black !important;
  --file-header-border-color: #444444 !important;
  --file-header-color: #ffffff !important;
  --flair-background: #333333 !important;
  --font-ui-larger: 20px !important;
  --footnote-divider-color: #444444 !important;
  --footnote-divider-color-active: #888888 !important;
  --footnote-input-background: #555555 !important;
  --footnote-input-background-active: #777777 !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
  --h1-color: #cccccc !important;
  --h1-font: "Arial", sans-serif !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2em !important;
  --h1-weight: bold !important;
  --h2-color: #bbbbbb !important;
  --h2-font: "Arial", sans-serif !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.75em !important;
  --h2-weight: bold !important;
  --h3-color: #aaaaaa !important;
  --h3-font: "Arial", sans-serif !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.5em !important;
  --h3-weight: bold !important;
  --h4-color: #999999 !important;
  --h4-font: "Arial", sans-serif !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.25em !important;
  --h4-weight: bold !important;
  --h5-color: #888888 !important;
  --h5-font: "Arial", sans-serif !important;
  --h5-size: 1em !important;
  --h5-weight: bold !important;
  --h6-color: #777777 !important;
  --h6-font: "Arial", sans-serif !important;
  --h6-size: 0.875em !important;
  --h6-weight: bold !important;
  --heading-formatting: #888888 !important;
  --heading-spacing: 20px !important;
  --highlight: hsla(rgb(102, 102, 102), 0.1) !important;
  --hr-color: #ffffff !important;
  --icon-color: #ffffff !important;
  --icon-color-active: #999999 !important;
  --icon-color-focused: #dddddd !important;
  --icon-color-hover: #bbbbbb !important;
  --icon-opacity: 1 !important;
  --icon-opacity-active: 0.6 !important;
  --icon-opacity-hover: 0.8 !important;
  --indentation-guide-color: #444444 !important;
  --indentation-guide-color-active: #ffcc00 !important;
  --inline-title-color: #ffffff !important;
  --inline-title-font: "Arial", sans-serif !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.2em !important;
  --inline-title-weight: bold !important;
  --interactive-accent: #666666 !important;
  --interactive-accent-hover: #808080 !important;
  --interactive-accent-hsl: rgb(102, 102, 102) !important;
  --interactive-hover: #4d4d4d !important;
  --interactive-normal: #333333 !important;
  --italic-color: #cccccc !important;
  --light: black !important;
  --lightgray: #1a1a1a !important;
  --link-color: #87cefa !important;
  --link-color-hover: #4682b4 !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: #98fb98 !important;
  --link-external-color-hover: #32cd32 !important;
  --link-unresolved-color: #ff6347 !important;
  --link-unresolved-decoration-color: #ff6347 !important;
  --link-unresolved-decoration-style: dashed !important;
  --link-unresolved-filter: brightness(0.8) !important;
  --link-weight: normal !important;
  --list-bullet-border: 2px solid #ffffff !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #ffffff !important;
  --list-marker-color-collapsed: #777777 !important;
  --list-marker-color-hover: #bbbbbb !important;
  --menu-background: #1a1a1a !important;
  --metadata-background: #333333 !important;
  --metadata-border-color: #555555 !important;
  --metadata-divider-color: #444444 !important;
  --metadata-divider-color-focus: #888888 !important;
  --metadata-divider-color-hover: #666666 !important;
  --metadata-input-background: #555555 !important;
  --metadata-input-background-active: #777777 !important;
  --metadata-input-background-hover: #666666 !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-font-weight: bold !important;
  --metadata-label-text-color: #cccccc !important;
  --metadata-label-text-color-hover: #ffffff !important;
  --metadata-property-background: #444444 !important;
  --metadata-property-background-active: #666666 !important;
  --metadata-property-background-hover: #555555 !important;
  --modal-background: #333333 !important;
  --modal-border-color: #444444 !important;
  --nav-collapse-icon-color: #ffffff !important;
  --nav-collapse-icon-color-collapsed: #aaaaaa !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #bbbbbb !important;
  --nav-heading-color-hover: #cccccc !important;
  --nav-indentation-guide-color: #666666 !important;
  --nav-item-background-active: #666666 !important;
  --nav-item-background-hover: #444444 !important;
  --nav-item-background-selected: #555555 !important;
  --nav-item-color: #ffffff !important;
  --nav-item-color-active: #00ffff !important;
  --nav-item-color-highlighted: #00ff00 !important;
  --nav-item-color-hover: #cccccc !important;
  --nav-item-color-selected: #ff00ff !important;
  --nav-item-weight: normal !important;
  --nav-item-weight-active: bold !important;
  --nav-item-weight-hover: bold !important;
  --oreo-background-modifier-border-hover-dark: #666666 !important;
  --oreo-background-modifier-border-hover-light: #cccccc !important;
  --oreo-background-primary-dark: #1a1a1a !important;
  --oreo-background-primary-light: #ffffff !important;
  --oreo-background-primary-secondary-dark: #4d4d4d !important;
  --oreo-background-primary-secondary-light: #e0e0e0 !important;
  --oreo-background-secondary-alt-dark: #333333 !important;
  --oreo-background-secondary-alt-light: #f2f2f2 !important;
  --oreo-border-width: 1px !important;
  --oreo-header-height: 40px !important;
  --oreo-tab-gap: 10px !important;
  --oreo-tab-height: 28px !important;
  --oreo-tab-max-width: 320px !important;
  --oreo-tab-radius: 6px !important;
  --oreo-tab-width: 200px !important;
  --oreo-text-accent-dark: #ffcc00 !important;
  --oreo-text-accent-light: #ffcc00 !important;
  --oreo-text-faint-dark: #cccccc !important;
  --oreo-text-faint-light: #707070 !important;
  --oreo-text-muted-dark: #ffffff !important;
  --oreo-text-muted-light: #333333 !important;
  --pdf-background: black !important;
  --pdf-page-background: black !important;
  --pdf-sidebar-background: black !important;
  --pill-background: #444444 !important;
  --pill-background-hover: #555555 !important;
  --pill-border-color: #666666 !important;
  --pill-border-color-hover: #888888 !important;
  --pill-color: #ffffff !important;
  --pill-color-hover: #cccccc !important;
  --pill-color-remove: #FF4444 !important;
  --pill-color-remove-hover: #CC4444 !important;
  --pill-decoration-hover: underline !important;
  --pill-padding-x: 8px !important;
  --pill-padding-y: 4px !important;
  --pill-radius: 12px !important;
  --pill-weight: bold !important;
  --popover-font-size: 14px !important;
  --popover-height: auto !important;
  --popover-max-height: 400px !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --popover-width: 300px !important;
  --prompt-background: black !important;
  --prompt-border-color: #444444 !important;
  --raised-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent)) !important;
  --ribbon-background: #333333 !important;
  --ribbon-background-collapsed: #444444 !important;
  --scrollbar-active-thumb-bg: #888888 !important;
  --scrollbar-bg: #333333 !important;
  --scrollbar-thumb-bg: #555555 !important;
  --search-result-background: black !important;
  --secondary: rgb(166, 139, 249) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #444444 !important;
  --slider-track-background: #666666 !important;
  --status-bar-background: #333333 !important;
  --status-bar-border-color: #555555 !important;
  --status-bar-scroll-padding: 10px !important;
  --status-bar-text-color: #ffffff !important;
  --suggestion-background: black !important;
  --swatch-height: 20px !important;
  --swatch-radius: 4px !important;
  --swatch-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
  --swatch-width: 20px !important;
  --tab-background-active: #1a1a1a !important;
  --tab-container-background: #000000 !important;
  --tab-divider-color: #666666 !important;
  --tab-font-weight: normal !important;
  --tab-outline-color: #cccccc !important;
  --tab-switcher-background: #1a1a1a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color: #ffffff !important;
  --tab-text-color-active: #bbbbbb !important;
  --tab-text-color-focused: #ffffff !important;
  --tab-text-color-focused-active: #ffcc00 !important;
  --tab-text-color-focused-active-current: #7c7cff !important;
  --tab-text-color-focused-highlighted: #00ccff !important;
  --table-drag-handle-background-active: #666666 !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: #666666 !important;
  --tag-background: #444444 !important;
  --tag-background-hover: #555555 !important;
  --tag-border-color: #666666 !important;
  --tag-border-color-hover: #888888 !important;
  --tag-color: #ffffff !important;
  --tag-color-hover: #cccccc !important;
  --tag-weight: bold !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-primary: white !important;
  --text-secondary: #cccccc !important;
  --text-selection: #333333 !important;
  --textHighlight: hsla(rgb(102, 102, 102), 0.1) !important;
  --titlebar-background: #333333 !important;
  --titlebar-background-focused: #444444 !important;
  --titlebar-border-color: #555555 !important;
  --titlebar-text-color: #ffffff !important;
  --titlebar-text-color-focused: #dddddd !important;
  --vault-name-color: #ffffff !important;
  --vault-name-font-size: 18px !important;
  --vault-name-font-weight: bold !important;
  --workspace-background-translucent: rgba(51, 51, 51, 0.8) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(85, 85, 85);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(85, 85, 85);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
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
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    links: `body a.external, footer a {
  color: rgb(152, 251, 152);
  outline: rgb(152, 251, 152) none 0px;
  text-decoration: underline 1px rgb(152, 251, 152);
  text-decoration-color: rgb(152, 251, 152);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(135, 206, 250);
  outline: rgb(135, 206, 250) none 0px;
  text-decoration: underline 1px rgb(135, 206, 250);
  text-decoration-color: rgb(135, 206, 250);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(255, 99, 71);
  filter: brightness(0.8);
  outline: rgb(255, 99, 71) none 0px;
  text-decoration: underline 1px dashed rgb(255, 99, 71);
  text-decoration-color: rgb(255, 99, 71);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(26, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 45, 45);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 45, 45);
}

body pre > code > [data-line] {
  border-left-color: rgb(166, 226, 46);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(166, 226, 46);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(166, 226, 46);
  border-left-color: rgb(166, 226, 46);
  border-right-color: rgb(166, 226, 46);
  border-top-color: rgb(166, 226, 46);
}

body pre > code, pre:has(> code) {
  background-color: rgb(45, 45, 45);
}

body pre:has(> code) {
  background-color: rgb(45, 45, 45);
}`,
    embeds: `body .transclude {
  background-color: rgb(51, 51, 51);
  border-left-color: rgb(102, 102, 102);
}

body .transclude-inner {
  background-color: rgb(51, 51, 51);
  border-left-color: rgb(102, 102, 102);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(102, 102, 102);
  text-decoration: line-through rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  font-weight: 700;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(204, 204, 204);
  font-family: Arial, sans-serif;
}

body h2 {
  color: rgb(187, 187, 187);
  font-family: Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Arial, sans-serif;
}

body h3 {
  color: rgb(170, 170, 170);
  font-family: Arial, sans-serif;
}

body h4 {
  color: rgb(153, 153, 153);
  font-family: Arial, sans-serif;
}

body h5 {
  color: rgb(136, 136, 136);
  font-family: Arial, sans-serif;
}

body h6 {
  color: rgb(119, 119, 119);
  font-family: Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
}`,
    scrollbars: `body ::-webkit-scrollbar {
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
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(102, 102, 102);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(0, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(255, 255, 255);
}

body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    misc: `body .metadata {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body .navigation-progress {
  background-color: rgb(51, 51, 51);
}

body input[type=text] {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body kbd {
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsla(rgb(153, 153, 153), 0.1) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #999999 !important;
  --blockquote-background-color: #f9f9f9 !important;
  --blockquote-border-color: #cccccc !important;
  --blockquote-color: #333333 !important;
  --bold-color: #000000 !important;
  --bold-weight: 600 !important;
  --button-radius: 10px !important;
  --callout-title-color: #000000;
  --callout-title-size: 1.2em;
  --callout-title-weight: 600;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #666666 !important;
  --checkbox-color: #e6e6e6 !important;
  --checkbox-color-hover: #cccccc !important;
  --checkbox-margin-inline-start: 8px !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: #cccccc !important;
  --code-background: #f5f5f5 !important;
  --code-comment: #6a737d !important;
  --code-function: #6f42c1 !important;
  --code-important: #d73a49 !important;
  --code-keyword: #d73a49 !important;
  --code-normal: #000000 !important;
  --code-operator: #d73a49 !important;
  --code-property: #005cc5 !important;
  --code-punctuation: #24292e !important;
  --code-string: #032f62 !important;
  --code-tag: #22863a !important;
  --code-value: #b31d28 !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --divider-color: #cccccc !important;
  --divider-color-hover: #999999 !important;
  --drag-ghost-background: rgba(255, 255, 255, 0.8) !important;
  --drag-ghost-text-color: #000000 !important;
  --dropdown-background: #e6e6e6 !important;
  --dropdown-background-hover: #cccccc !important;
  --embed-background: #ffffff !important;
  --embed-border-color: #cccccc !important;
  --embed-border-start: 2px solid #999999 !important;
  --embed-font-style: italic !important;
  --file-header-border-color: #cccccc !important;
  --file-header-color: #000000 !important;
  --flair-background: #e6e6e6 !important;
  --font-ui-larger: 20px !important;
  --footnote-divider-color: #cccccc !important;
  --footnote-divider-color-active: #888888 !important;
  --footnote-input-background: #ffffff !important;
  --footnote-input-background-active: #f0f0f0 !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --h1-color: #333333 !important;
  --h1-font: "Arial", sans-serif !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2em !important;
  --h1-weight: bold !important;
  --h2-color: #444444 !important;
  --h2-font: "Arial", sans-serif !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.75em !important;
  --h2-weight: bold !important;
  --h3-color: #555555 !important;
  --h3-font: "Arial", sans-serif !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.5em !important;
  --h3-weight: bold !important;
  --h4-color: #666666 !important;
  --h4-font: "Arial", sans-serif !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.25em !important;
  --h4-weight: bold !important;
  --h5-color: #777777 !important;
  --h5-font: "Arial", sans-serif !important;
  --h5-size: 1em !important;
  --h5-weight: bold !important;
  --h6-color: #888888 !important;
  --h6-font: "Arial", sans-serif !important;
  --h6-size: 0.875em !important;
  --h6-weight: bold !important;
  --heading-formatting: #888888 !important;
  --heading-spacing: 20px !important;
  --highlight: hsla(rgb(153, 153, 153), 0.1) !important;
  --hr-color: #000000 !important;
  --icon-color: #000000 !important;
  --icon-color-active: #333333 !important;
  --icon-color-focused: #777777 !important;
  --icon-color-hover: #555555 !important;
  --icon-opacity: 1 !important;
  --icon-opacity-active: 0.6 !important;
  --icon-opacity-hover: 0.8 !important;
  --indentation-guide-color: #cccccc !important;
  --indentation-guide-color-active: #ffcc00 !important;
  --inline-title-color: #000000 !important;
  --inline-title-font: "Arial", sans-serif !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.2em !important;
  --inline-title-weight: bold !important;
  --interactive-accent: #999999 !important;
  --interactive-accent-hover: #666666 !important;
  --interactive-accent-hsl: rgb(153, 153, 153) !important;
  --interactive-hover: #cccccc !important;
  --interactive-normal: #e6e6e6 !important;
  --italic-color: #000000 !important;
  --link-color: #1e90ff !important;
  --link-color-hover: #1c86ee !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: #32cd32 !important;
  --link-external-color-hover: #2eb82e !important;
  --link-unresolved-color: #ff4500 !important;
  --link-unresolved-decoration-color: #ff4500 !important;
  --link-unresolved-decoration-style: dashed !important;
  --link-unresolved-filter: brightness(0.8) !important;
  --link-weight: normal !important;
  --list-bullet-border: 2px solid #000000 !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #000000 !important;
  --list-marker-color-collapsed: #999999 !important;
  --list-marker-color-hover: #555555 !important;
  --metadata-background: #ffffff !important;
  --metadata-border-color: #dddddd !important;
  --metadata-divider-color: #cccccc !important;
  --metadata-divider-color-focus: #888888 !important;
  --metadata-divider-color-hover: #aaaaaa !important;
  --metadata-input-background: #ffffff !important;
  --metadata-input-background-active: #f0f0f0 !important;
  --metadata-input-background-hover: #f9f9f9 !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-font-weight: bold !important;
  --metadata-label-text-color: #333333 !important;
  --metadata-label-text-color-hover: #555555 !important;
  --metadata-property-background: #ffffff !important;
  --metadata-property-background-active: #f0f0f0 !important;
  --metadata-property-background-hover: #f9f9f9 !important;
  --modal-border-color: #cccccc !important;
  --nav-collapse-icon-color: #000000 !important;
  --nav-collapse-icon-color-collapsed: #555555 !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: #666666 !important;
  --nav-heading-color-collapsed-hover: #999999 !important;
  --nav-heading-color-hover: #333333 !important;
  --nav-indentation-guide-color: #cccccc !important;
  --nav-item-background-active: #d0d0d0 !important;
  --nav-item-background-hover: #f0f0f0 !important;
  --nav-item-background-selected: #c0c0c0 !important;
  --nav-item-color: #000000 !important;
  --nav-item-color-active: #7c7cff !important;
  --nav-item-color-highlighted: #00ff00 !important;
  --nav-item-color-hover: #333333 !important;
  --nav-item-color-selected: #ff4444 !important;
  --nav-item-weight: normal !important;
  --nav-item-weight-active: bold !important;
  --nav-item-weight-hover: bold !important;
  --oreo-background-modifier-border-hover-dark: #666666 !important;
  --oreo-background-modifier-border-hover-light: #cccccc !important;
  --oreo-background-primary-dark: #1a1a1a !important;
  --oreo-background-primary-light: #ffffff !important;
  --oreo-background-primary-secondary-dark: #4d4d4d !important;
  --oreo-background-primary-secondary-light: #e0e0e0 !important;
  --oreo-background-secondary-alt-dark: #333333 !important;
  --oreo-background-secondary-alt-light: #f2f2f2 !important;
  --oreo-border-width: 1px !important;
  --oreo-header-height: 40px !important;
  --oreo-tab-gap: 10px !important;
  --oreo-tab-height: 28px !important;
  --oreo-tab-max-width: 320px !important;
  --oreo-tab-radius: 6px !important;
  --oreo-tab-width: 200px !important;
  --oreo-text-accent-dark: #ffcc00 !important;
  --oreo-text-accent-light: #ffcc00 !important;
  --oreo-text-faint-dark: #cccccc !important;
  --oreo-text-faint-light: #707070 !important;
  --oreo-text-muted-dark: #ffffff !important;
  --oreo-text-muted-light: #333333 !important;
  --pill-background: #f0f0f0 !important;
  --pill-background-hover: #e0e0e0 !important;
  --pill-border-color: #cccccc !important;
  --pill-border-color-hover: #999999 !important;
  --pill-color: #000000 !important;
  --pill-color-hover: #333333 !important;
  --pill-color-remove: #FF4444 !important;
  --pill-color-remove-hover: #CC4444 !important;
  --pill-decoration-hover: underline !important;
  --pill-padding-x: 8px !important;
  --pill-padding-y: 4px !important;
  --pill-radius: 12px !important;
  --pill-weight: bold !important;
  --popover-font-size: 14px !important;
  --popover-height: auto !important;
  --popover-max-height: 400px !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --popover-width: 300px !important;
  --prompt-border-color: #cccccc !important;
  --ribbon-background: #f0f0f0 !important;
  --ribbon-background-collapsed: #e0e0e0 !important;
  --scrollbar-active-thumb-bg: #999999 !important;
  --scrollbar-bg: #f0f0f0 !important;
  --scrollbar-thumb-bg: #cccccc !important;
  --secondary: rgb(138, 92, 245) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #cccccc !important;
  --status-bar-background: #f0f0f0 !important;
  --status-bar-border-color: #cccccc !important;
  --status-bar-scroll-padding: 10px !important;
  --status-bar-text-color: #000000 !important;
  --swatch-height: 20px !important;
  --swatch-radius: 4px !important;
  --swatch-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
  --swatch-width: 20px !important;
  --tab-container-background: #f0f0f0 !important;
  --tab-divider-color: #666666 !important;
  --tab-font-weight: normal !important;
  --tab-outline-color: #cccccc !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color: #000000 !important;
  --tab-text-color-active: #333333 !important;
  --tab-text-color-focused: #000000 !important;
  --tab-text-color-focused-active: #ffcc00 !important;
  --tab-text-color-focused-active-current: #7c7cff !important;
  --tab-text-color-focused-highlighted: #00ccff !important;
  --table-drag-handle-background-active: #999999 !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: #999999 !important;
  --tag-background: #f0f0f0 !important;
  --tag-background-hover: #e0e0e0 !important;
  --tag-border-color: #cccccc !important;
  --tag-border-color-hover: #999999 !important;
  --tag-color: #000000 !important;
  --tag-color-hover: #333333 !important;
  --tag-weight: bold !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: hsla(rgb(153, 153, 153), 0.1) !important;
  --titlebar-background: #f0f0f0 !important;
  --titlebar-background-focused: #e0e0e0 !important;
  --titlebar-border-color: #cccccc !important;
  --titlebar-text-color: #000000 !important;
  --titlebar-text-color-focused: #333333 !important;
  --vault-name-color: #000000 !important;
  --vault-name-font-size: 18px !important;
  --vault-name-font-weight: bold !important;
  --workspace-background-translucent: rgba(240, 240, 240, 0.8) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 240, 240);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 240, 240);
  border-left-color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(50, 205, 50);
  outline: rgb(50, 205, 50) none 0px;
  text-decoration: underline 1px rgb(50, 205, 50);
  text-decoration-color: rgb(50, 205, 50);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(30, 144, 255);
  outline: rgb(30, 144, 255) none 0px;
  text-decoration: underline 1px rgb(30, 144, 255);
  text-decoration-color: rgb(30, 144, 255);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(255, 69, 0);
  filter: brightness(0.8);
  outline: rgb(255, 69, 0) none 0px;
  text-decoration: underline 1px dashed rgb(255, 69, 0);
  text-decoration-color: rgb(255, 69, 0);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    blockquotes: `body blockquote {
  background-color: rgb(249, 249, 249);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(111, 66, 193);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(111, 66, 193);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(111, 66, 193);
  border-left-color: rgb(111, 66, 193);
  border-right-color: rgb(111, 66, 193);
  border-top-color: rgb(111, 66, 193);
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 245, 245);
}

body pre:has(> code) {
  background-color: rgb(245, 245, 245);
}`,
    embeds: `body .transclude {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(153, 153, 153);
}

body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(153, 153, 153);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 204, 204);
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    search: `body .search > .search-container > .search-space {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  font-weight: 700;
}

body a.internal.tag-link::before {
  color: rgb(0, 0, 0);
}

body h1 {
  color: rgb(51, 51, 51);
  font-family: Arial, sans-serif;
}

body h2 {
  color: rgb(68, 68, 68);
  font-family: Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: Arial, sans-serif;
}

body h3 {
  color: rgb(85, 85, 85);
  font-family: Arial, sans-serif;
}

body h4 {
  color: rgb(102, 102, 102);
  font-family: Arial, sans-serif;
}

body h5 {
  color: rgb(119, 119, 119);
  font-family: Arial, sans-serif;
}

body h6 {
  color: rgb(136, 136, 136);
  font-family: Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(208, 208, 208);
  border-bottom-color: rgb(124, 124, 255);
  border-left-color: rgb(124, 124, 255);
  border-right-color: rgb(124, 124, 255);
  border-top-color: rgb(124, 124, 255);
  color: rgb(124, 124, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    footer: `body footer {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(0, 0, 0);
}

body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    misc: `body .metadata {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body .navigation-progress {
  background-color: rgb(240, 240, 240);
}

body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
  },
};
