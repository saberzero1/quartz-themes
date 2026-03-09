import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "oreo", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: hsla(rgb(102, 102, 102), 0.1);
  --background-primary: black;
  --background-secondary: #1a1a1a;
  --bases-cards-background: black;
  --bases-table-cell-background-active: black;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #666666;
  --bases-table-header-background: black;
  --bases-table-summary-background: black;
  --blockquote-background-color: #1a1a1a;
  --blockquote-border-color: #444444;
  --blockquote-color: #dddddd;
  --blur-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent));
  --bold-color: #cccccc;
  --bold-weight: 600;
  --button-radius: 10px;
  --callout-title-color: #ffffff;
  --callout-title-size: 1.2em;
  --callout-title-weight: 600;
  --canvas-background: black;
  --checkbox-border-color-hover: #999999;
  --checkbox-color: #333333;
  --checkbox-color-hover: #4d4d4d;
  --checkbox-margin-inline-start: 8px;
  --checkbox-marker-color: black;
  --checkbox-radius: 50%;
  --checklist-done-color: #666666;
  --code-background: #2d2d2d;
  --code-comment: #999988;
  --code-function: #a6e22e;
  --code-important: #f92672;
  --code-keyword: #f92672;
  --code-normal: #ffffff;
  --code-operator: #f92672;
  --code-property: #66d9ef;
  --code-punctuation: #ffffff;
  --code-string: #e6db74;
  --code-tag: #a6e22e;
  --code-value: #ae81ff;
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --divider-color: #555555;
  --divider-color-hover: #888888;
  --drag-ghost-background: rgba(0, 0, 0, 0.8);
  --drag-ghost-text-color: #ffffff;
  --dropdown-background: #333333;
  --dropdown-background-hover: #4d4d4d;
  --embed-background: #333333;
  --embed-border-color: #444444;
  --embed-border-start: 2px solid #666666;
  --embed-font-style: italic;
  --file-header-background: black;
  --file-header-background-focused: black;
  --file-header-border-color: #444444;
  --file-header-color: #ffffff;
  --flair-background: #333333;
  --font-ui-larger: 20px;
  --footnote-divider-color: #444444;
  --footnote-divider-color-active: #888888;
  --footnote-input-background: #555555;
  --footnote-input-background-active: #777777;
  --graph-node-focused: rgb(166, 139, 249);
  --h1-color: #cccccc;
  --h1-font: "Arial", sans-serif;
  --h1-line-height: 1.5;
  --h1-size: 2em;
  --h1-weight: bold;
  --h2-color: #bbbbbb;
  --h2-font: "Arial", sans-serif;
  --h2-line-height: 1.5;
  --h2-size: 1.75em;
  --h2-weight: bold;
  --h3-color: #aaaaaa;
  --h3-font: "Arial", sans-serif;
  --h3-line-height: 1.5;
  --h3-size: 1.5em;
  --h3-weight: bold;
  --h4-color: #999999;
  --h4-font: "Arial", sans-serif;
  --h4-line-height: 1.5;
  --h4-size: 1.25em;
  --h4-weight: bold;
  --h5-color: #888888;
  --h5-font: "Arial", sans-serif;
  --h5-size: 1em;
  --h5-weight: bold;
  --h6-color: #777777;
  --h6-font: "Arial", sans-serif;
  --h6-size: 0.875em;
  --h6-weight: bold;
  --heading-formatting: #888888;
  --heading-spacing: 20px;
  --hr-color: #ffffff;
  --icon-color: #ffffff;
  --icon-color-active: #999999;
  --icon-color-focused: #dddddd;
  --icon-color-hover: #bbbbbb;
  --icon-opacity: 1;
  --icon-opacity-active: 0.6;
  --icon-opacity-hover: 0.8;
  --indentation-guide-color: #444444;
  --indentation-guide-color-active: #ffcc00;
  --inline-title-color: #ffffff;
  --inline-title-font: "Arial", sans-serif;
  --inline-title-line-height: 1.5;
  --inline-title-size: 1.2em;
  --inline-title-weight: bold;
  --interactive-accent: #666666;
  --interactive-accent-hover: #808080;
  --interactive-accent-hsl: rgb(102, 102, 102);
  --interactive-hover: #4d4d4d;
  --interactive-normal: #333333;
  --italic-color: #cccccc;
  --link-color: #87cefa;
  --link-color-hover: #4682b4;
  --link-decoration-thickness: 1px;
  --link-external-color: #98fb98;
  --link-external-color-hover: #32cd32;
  --link-unresolved-color: #ff6347;
  --link-unresolved-decoration-color: #ff6347;
  --link-unresolved-decoration-style: dashed;
  --link-unresolved-filter: brightness(0.8);
  --link-weight: normal;
  --list-bullet-border: 2px solid #ffffff;
  --list-indent: 2.25em;
  --list-marker-color: #ffffff;
  --list-marker-color-collapsed: #777777;
  --list-marker-color-hover: #bbbbbb;
  --menu-background: #1a1a1a;
  --metadata-background: #333333;
  --metadata-border-color: #555555;
  --metadata-divider-color: #444444;
  --metadata-divider-color-focus: #888888;
  --metadata-divider-color-hover: #666666;
  --metadata-input-background: #555555;
  --metadata-input-background-active: #777777;
  --metadata-input-background-hover: #666666;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #ffffff;
  --metadata-label-font-weight: bold;
  --metadata-label-text-color: #cccccc;
  --metadata-label-text-color-hover: #ffffff;
  --metadata-property-background: #444444;
  --metadata-property-background-active: #666666;
  --metadata-property-background-hover: #555555;
  --modal-background: #333333;
  --modal-border-color: #444444;
  --nav-collapse-icon-color: #ffffff;
  --nav-collapse-icon-color-collapsed: #aaaaaa;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #bbbbbb;
  --nav-heading-color-hover: #cccccc;
  --nav-indentation-guide-color: #666666;
  --nav-item-background-active: #666666;
  --nav-item-background-hover: #444444;
  --nav-item-background-selected: #555555;
  --nav-item-color: #ffffff;
  --nav-item-color-active: #00ffff;
  --nav-item-color-highlighted: #00ff00;
  --nav-item-color-hover: #cccccc;
  --nav-item-color-selected: #ff00ff;
  --nav-item-weight: normal;
  --nav-item-weight-active: bold;
  --nav-item-weight-hover: bold;
  --oreo-background-modifier-border-hover-dark: #666666;
  --oreo-background-modifier-border-hover-light: #cccccc;
  --oreo-background-primary-dark: #1a1a1a;
  --oreo-background-primary-light: #ffffff;
  --oreo-background-primary-secondary-dark: #4d4d4d;
  --oreo-background-primary-secondary-light: #e0e0e0;
  --oreo-background-secondary-alt-dark: #333333;
  --oreo-background-secondary-alt-light: #f2f2f2;
  --oreo-border-width: 1px;
  --oreo-header-height: 40px;
  --oreo-tab-gap: 10px;
  --oreo-tab-height: 28px;
  --oreo-tab-max-width: 320px;
  --oreo-tab-radius: 6px;
  --oreo-tab-width: 200px;
  --oreo-text-accent-dark: #ffcc00;
  --oreo-text-accent-light: #ffcc00;
  --oreo-text-faint-dark: #cccccc;
  --oreo-text-faint-light: #707070;
  --oreo-text-muted-dark: #ffffff;
  --oreo-text-muted-light: #333333;
  --pdf-background: black;
  --pdf-page-background: black;
  --pdf-sidebar-background: black;
  --pill-background: #444444;
  --pill-background-hover: #555555;
  --pill-border-color: #666666;
  --pill-border-color-hover: #888888;
  --pill-color: #ffffff;
  --pill-color-hover: #cccccc;
  --pill-color-remove: #FF4444;
  --pill-color-remove-hover: #CC4444;
  --pill-decoration-hover: underline;
  --pill-padding-x: 8px;
  --pill-padding-y: 4px;
  --pill-radius: 12px;
  --pill-weight: bold;
  --popover-font-size: 14px;
  --popover-height: auto;
  --popover-max-height: 400px;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --popover-width: 300px;
  --prompt-background: black;
  --prompt-border-color: #444444;
  --raised-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent));
  --ribbon-background: #333333;
  --ribbon-background-collapsed: #444444;
  --scrollbar-active-thumb-bg: #888888;
  --scrollbar-bg: #333333;
  --scrollbar-thumb-bg: #555555;
  --search-result-background: black;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #444444;
  --slider-track-background: #666666;
  --status-bar-background: #333333;
  --status-bar-border-color: #555555;
  --status-bar-scroll-padding: 10px;
  --status-bar-text-color: #ffffff;
  --suggestion-background: black;
  --swatch-height: 20px;
  --swatch-radius: 4px;
  --swatch-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  --swatch-width: 20px;
  --tab-background-active: #1a1a1a;
  --tab-container-background: #000000;
  --tab-divider-color: #666666;
  --tab-font-weight: normal;
  --tab-outline-color: #cccccc;
  --tab-switcher-background: #1a1a1a;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: #ffffff;
  --tab-text-color-active: #bbbbbb;
  --tab-text-color-focused: #ffffff;
  --tab-text-color-focused-active: #ffcc00;
  --tab-text-color-focused-active-current: #7c7cff;
  --tab-text-color-focused-highlighted: #00ccff;
  --table-drag-handle-background-active: #666666;
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: #666666;
  --tag-background: #444444;
  --tag-background-hover: #555555;
  --tag-border-color: #666666;
  --tag-border-color-hover: #888888;
  --tag-color: #ffffff;
  --tag-color-hover: #cccccc;
  --tag-weight: bold;
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-primary: white;
  --text-secondary: #cccccc;
  --text-selection: #333333;
  --titlebar-background: #333333;
  --titlebar-background-focused: #444444;
  --titlebar-border-color: #555555;
  --titlebar-text-color: #ffffff;
  --titlebar-text-color-focused: #dddddd;
  --vault-name-color: #ffffff;
  --vault-name-font-size: 18px;
  --vault-name-font-weight: bold;
  --workspace-background-translucent: rgba(51, 51, 51, 0.8);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
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
  --background-modifier-active-hover: hsla(rgb(153, 153, 153), 0.1);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #999999;
  --blockquote-background-color: #f9f9f9;
  --blockquote-border-color: #cccccc;
  --blockquote-color: #333333;
  --bold-color: #000000;
  --bold-weight: 600;
  --button-radius: 10px;
  --callout-title-color: #000000;
  --callout-title-size: 1.2em;
  --callout-title-weight: 600;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #666666;
  --checkbox-color: #e6e6e6;
  --checkbox-color-hover: #cccccc;
  --checkbox-margin-inline-start: 8px;
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checklist-done-color: #cccccc;
  --code-background: #f5f5f5;
  --code-comment: #6a737d;
  --code-function: #6f42c1;
  --code-important: #d73a49;
  --code-keyword: #d73a49;
  --code-normal: #000000;
  --code-operator: #d73a49;
  --code-property: #005cc5;
  --code-punctuation: #24292e;
  --code-string: #032f62;
  --code-tag: #22863a;
  --code-value: #b31d28;
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --divider-color: #cccccc;
  --divider-color-hover: #999999;
  --drag-ghost-background: rgba(255, 255, 255, 0.8);
  --drag-ghost-text-color: #000000;
  --dropdown-background: #e6e6e6;
  --dropdown-background-hover: #cccccc;
  --embed-background: #ffffff;
  --embed-border-color: #cccccc;
  --embed-border-start: 2px solid #999999;
  --embed-font-style: italic;
  --file-header-border-color: #cccccc;
  --file-header-color: #000000;
  --flair-background: #e6e6e6;
  --font-ui-larger: 20px;
  --footnote-divider-color: #cccccc;
  --footnote-divider-color-active: #888888;
  --footnote-input-background: #ffffff;
  --footnote-input-background-active: #f0f0f0;
  --graph-node-focused: rgb(138, 92, 245);
  --h1-color: #333333;
  --h1-font: "Arial", sans-serif;
  --h1-line-height: 1.5;
  --h1-size: 2em;
  --h1-weight: bold;
  --h2-color: #444444;
  --h2-font: "Arial", sans-serif;
  --h2-line-height: 1.5;
  --h2-size: 1.75em;
  --h2-weight: bold;
  --h3-color: #555555;
  --h3-font: "Arial", sans-serif;
  --h3-line-height: 1.5;
  --h3-size: 1.5em;
  --h3-weight: bold;
  --h4-color: #666666;
  --h4-font: "Arial", sans-serif;
  --h4-line-height: 1.5;
  --h4-size: 1.25em;
  --h4-weight: bold;
  --h5-color: #777777;
  --h5-font: "Arial", sans-serif;
  --h5-size: 1em;
  --h5-weight: bold;
  --h6-color: #888888;
  --h6-font: "Arial", sans-serif;
  --h6-size: 0.875em;
  --h6-weight: bold;
  --heading-formatting: #888888;
  --heading-spacing: 20px;
  --hr-color: #000000;
  --icon-color: #000000;
  --icon-color-active: #333333;
  --icon-color-focused: #777777;
  --icon-color-hover: #555555;
  --icon-opacity: 1;
  --icon-opacity-active: 0.6;
  --icon-opacity-hover: 0.8;
  --indentation-guide-color: #cccccc;
  --indentation-guide-color-active: #ffcc00;
  --inline-title-color: #000000;
  --inline-title-font: "Arial", sans-serif;
  --inline-title-line-height: 1.5;
  --inline-title-size: 1.2em;
  --inline-title-weight: bold;
  --interactive-accent: #999999;
  --interactive-accent-hover: #666666;
  --interactive-accent-hsl: rgb(153, 153, 153);
  --interactive-hover: #cccccc;
  --interactive-normal: #e6e6e6;
  --italic-color: #000000;
  --link-color: #1e90ff;
  --link-color-hover: #1c86ee;
  --link-decoration-thickness: 1px;
  --link-external-color: #32cd32;
  --link-external-color-hover: #2eb82e;
  --link-unresolved-color: #ff4500;
  --link-unresolved-decoration-color: #ff4500;
  --link-unresolved-decoration-style: dashed;
  --link-unresolved-filter: brightness(0.8);
  --link-weight: normal;
  --list-bullet-border: 2px solid #000000;
  --list-indent: 2.25em;
  --list-marker-color: #000000;
  --list-marker-color-collapsed: #999999;
  --list-marker-color-hover: #555555;
  --metadata-background: #ffffff;
  --metadata-border-color: #dddddd;
  --metadata-divider-color: #cccccc;
  --metadata-divider-color-focus: #888888;
  --metadata-divider-color-hover: #aaaaaa;
  --metadata-input-background: #ffffff;
  --metadata-input-background-active: #f0f0f0;
  --metadata-input-background-hover: #f9f9f9;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #000000;
  --metadata-label-font-weight: bold;
  --metadata-label-text-color: #333333;
  --metadata-label-text-color-hover: #555555;
  --metadata-property-background: #ffffff;
  --metadata-property-background-active: #f0f0f0;
  --metadata-property-background-hover: #f9f9f9;
  --modal-border-color: #cccccc;
  --nav-collapse-icon-color: #000000;
  --nav-collapse-icon-color-collapsed: #555555;
  --nav-heading-color: #000000;
  --nav-heading-color-collapsed: #666666;
  --nav-heading-color-collapsed-hover: #999999;
  --nav-heading-color-hover: #333333;
  --nav-indentation-guide-color: #cccccc;
  --nav-item-background-active: #d0d0d0;
  --nav-item-background-hover: #f0f0f0;
  --nav-item-background-selected: #c0c0c0;
  --nav-item-color: #000000;
  --nav-item-color-active: #7c7cff;
  --nav-item-color-highlighted: #00ff00;
  --nav-item-color-hover: #333333;
  --nav-item-color-selected: #ff4444;
  --nav-item-weight: normal;
  --nav-item-weight-active: bold;
  --nav-item-weight-hover: bold;
  --oreo-background-modifier-border-hover-dark: #666666;
  --oreo-background-modifier-border-hover-light: #cccccc;
  --oreo-background-primary-dark: #1a1a1a;
  --oreo-background-primary-light: #ffffff;
  --oreo-background-primary-secondary-dark: #4d4d4d;
  --oreo-background-primary-secondary-light: #e0e0e0;
  --oreo-background-secondary-alt-dark: #333333;
  --oreo-background-secondary-alt-light: #f2f2f2;
  --oreo-border-width: 1px;
  --oreo-header-height: 40px;
  --oreo-tab-gap: 10px;
  --oreo-tab-height: 28px;
  --oreo-tab-max-width: 320px;
  --oreo-tab-radius: 6px;
  --oreo-tab-width: 200px;
  --oreo-text-accent-dark: #ffcc00;
  --oreo-text-accent-light: #ffcc00;
  --oreo-text-faint-dark: #cccccc;
  --oreo-text-faint-light: #707070;
  --oreo-text-muted-dark: #ffffff;
  --oreo-text-muted-light: #333333;
  --pill-background: #f0f0f0;
  --pill-background-hover: #e0e0e0;
  --pill-border-color: #cccccc;
  --pill-border-color-hover: #999999;
  --pill-color: #000000;
  --pill-color-hover: #333333;
  --pill-color-remove: #FF4444;
  --pill-color-remove-hover: #CC4444;
  --pill-decoration-hover: underline;
  --pill-padding-x: 8px;
  --pill-padding-y: 4px;
  --pill-radius: 12px;
  --pill-weight: bold;
  --popover-font-size: 14px;
  --popover-height: auto;
  --popover-max-height: 400px;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --popover-width: 300px;
  --prompt-border-color: #cccccc;
  --ribbon-background: #f0f0f0;
  --ribbon-background-collapsed: #e0e0e0;
  --scrollbar-active-thumb-bg: #999999;
  --scrollbar-bg: #f0f0f0;
  --scrollbar-thumb-bg: #cccccc;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #cccccc;
  --status-bar-background: #f0f0f0;
  --status-bar-border-color: #cccccc;
  --status-bar-scroll-padding: 10px;
  --status-bar-text-color: #000000;
  --swatch-height: 20px;
  --swatch-radius: 4px;
  --swatch-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --swatch-width: 20px;
  --tab-container-background: #f0f0f0;
  --tab-divider-color: #666666;
  --tab-font-weight: normal;
  --tab-outline-color: #cccccc;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: #000000;
  --tab-text-color-active: #333333;
  --tab-text-color-focused: #000000;
  --tab-text-color-focused-active: #ffcc00;
  --tab-text-color-focused-active-current: #7c7cff;
  --tab-text-color-focused-highlighted: #00ccff;
  --table-drag-handle-background-active: #999999;
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: #999999;
  --tag-background: #f0f0f0;
  --tag-background-hover: #e0e0e0;
  --tag-border-color: #cccccc;
  --tag-border-color-hover: #999999;
  --tag-color: #000000;
  --tag-color-hover: #333333;
  --tag-weight: bold;
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-selection: rgba(138, 92, 245, 0.2);
  --titlebar-background: #f0f0f0;
  --titlebar-background-focused: #e0e0e0;
  --titlebar-border-color: #cccccc;
  --titlebar-text-color: #000000;
  --titlebar-text-color-focused: #333333;
  --vault-name-color: #000000;
  --vault-name-font-size: 18px;
  --vault-name-font-weight: bold;
  --workspace-background-translucent: rgba(240, 240, 240, 0.8);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
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
