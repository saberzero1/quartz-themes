import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "jotter", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: 92, 124, 255;
  --accent-h: 228;
  --accent-l: 68%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(92, 124, 255, 0.1);
  --background-modifier-border: rgb(74, 69, 70);
  --background-modifier-border-focus: rgb(74, 69, 70);
  --background-modifier-border-hover: rgb(79, 74, 75);
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #322f30;
  --background-modifier-form-field-hover: #322f30;
  --background-modifier-hover: #413e3e;
  --background-modifier-success: #8fbcbb;
  --background-modifier-success-rgb: 143, 188, 187;
  --background-primary: #322f30;
  --background-primary-alt: #413e3e;
  --background-secondary: #322f30;
  --background-secondary-alt: #322f30;
  --bases-cards-background: #322f30;
  --bases-cards-cover-background: #413e3e;
  --bases-cards-shadow: 0 0 0 1px rgb(74, 69, 70);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(79, 74, 75);
  --bases-embed-border-color: rgb(74, 69, 70);
  --bases-group-heading-property-color: #b7b2b2;
  --bases-table-border-color: rgb(74, 69, 70);
  --bases-table-cell-background-active: #322f30;
  --bases-table-cell-background-disabled: #413e3e;
  --bases-table-cell-background-selected: rgba(92, 124, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(74, 69, 70);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(92, 124, 255);
  --bases-table-group-background: #413e3e;
  --bases-table-header-background: #322f30;
  --bases-table-header-background-hover: #413e3e;
  --bases-table-header-color: #b7b2b2;
  --bases-table-summary-background: #322f30;
  --bases-table-summary-background-hover: #413e3e;
  --blockquote-border-color: rgb(92, 124, 255);
  --blur-background: color-mix(in srgb, #433F40 65%, transparent) linear-gradient(#433F40, color-mix(in srgb, #433F40 65%, transparent));
  --bold-underline-color: rgb(92, 124, 255);
  --bubblegum: 255, 179, 189;
  --callout-bug: 191, 97, 106;
  --callout-default: 129, 161, 193;
  --callout-error: 191, 97, 106;
  --callout-example: 139, 129, 193;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 129, 161, 193;
  --callout-question: 208, 135, 112;
  --callout-success: 143, 188, 187;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-todo: 129, 161, 193;
  --callout-warning: 208, 135, 112;
  --canvas-background: #322f30;
  --canvas-card-label-color: #807b7b;
  --canvas-color-1: 191, 97, 106;
  --canvas-color-2: 208, 135, 112;
  --canvas-color-3: 235, 200, 139;
  --canvas-color-4: 143, 188, 187;
  --canvas-color-5: 136, 192, 208;
  --canvas-color-6: 139, 129, 193;
  --caret-color: #e1e1e1;
  --checkbox-border-color: #807b7b;
  --checkbox-border-color-hover: #b7b2b2;
  --checkbox-color: rgb(92, 124, 255);
  --checkbox-color-hover: rgb(92, 124, 255, 0.8);
  --checkbox-marker-color: #322f30;
  --checklist-done-color: #b7b2b2;
  --code-background: #413e3e;
  --code-border-color: rgb(74, 69, 70);
  --code-bracket-background: #413e3e;
  --code-comment: #807b7b;
  --code-function: #ebc88b;
  --code-important: #d08770;
  --code-keyword: #bd81c1;
  --code-normal: #e1e1e1;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #b7b2b2;
  --code-string: #8fbcbb;
  --code-tag: #bf616a;
  --code-value: #8b81c1;
  --collapse-icon-color: #807b7b;
  --collapse-icon-color-collapsed: rgb(92, 124, 255);
  --color-accent: rgb(92, 124, 255);
  --color-accent-1: hsl(225, 102%, 78.2%);
  --color-accent-2: hsl(223, 105%, 87.72%);
  --color-accent-hsl: 228, 100%, 68%;
  --color-blue: #81a1c1;
  --color-blue-rgb: 129, 161, 193;
  --color-cyan: #88c0d0;
  --color-cyan-rgb: 136, 192, 208;
  --color-green: #8fbcbb;
  --color-green-rgb: 143, 188, 187;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-pink: #bd81c1;
  --color-pink-rgb: 189, 129, 193;
  --color-purple: #8b81c1;
  --color-purple-rgb: 139, 129, 193;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-yellow: #ebc88b;
  --color-yellow-rgb: 235, 200, 139;
  --denim: 76, 80, 120;
  --divider-color: rgb(74, 69, 70);
  --divider-color-hover: rgb(92, 124, 255);
  --dropdown-background: #433F40;
  --dropdown-background-hover: #4a4546;
  --em-color: #e1e1e1;
  --embed-block-shadow-hover: 0 0 0 1px rgb(74, 69, 70), inset 0 0 0 1px rgb(74, 69, 70);
  --embed-border-start: 2px solid rgb(92, 124, 255);
  --file-header-background: #322f30;
  --file-header-background-focused: #322f30;
  --flair-background: #433F40;
  --flair-color: #e1e1e1;
  --footnote-divider-color: rgb(74, 69, 70);
  --footnote-id-color: #b7b2b2;
  --footnote-id-color-no-occurrences: #807b7b;
  --footnote-input-background-active: #413e3e;
  --forest: 77, 116, 53;
  --graph-node: #b7b2b2;
  --graph-node-attachment: #ebc88b;
  --graph-node-focused: rgb(92, 124, 255);
  --graph-node-tag: #8fbcbb;
  --graph-node-unresolved: #807b7b;
  --graph-text: #e1e1e1;
  --h1-color: #e1e1e1;
  --h1-size: 1.3em;
  --h2-color: rgb(92, 124, 255);
  --h2-size: 1.2em;
  --h3-color: #e1e1e1;
  --h3-size: 1.1em;
  --h4-color: #b7b2b2;
  --h4-size: 1em;
  --h5-color: #b7b2b2;
  --h5-size: .85em;
  --h6-color: #807b7b;
  --h6-size: .75em;
  --heading-formatting: #807b7b;
  --hr-color: rgb(74, 69, 70);
  --icon-color: #807b7b;
  --icon-color-active: rgb(92, 124, 255);
  --icon-color-focused: #b7b2b2;
  --icon-color-hover: #b7b2b2;
  --indentation-guide-color: rgb(74, 69, 70);
  --indentation-guide-color-active: rgb(118, 111, 113);
  --indentation-guide-width: 1.5px;
  --inline-title-color: #e1e1e1;
  --inline-title-size: 1.3em;
  --input-date-separator: #807b7b;
  --input-placeholder-color: #807b7b;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(92, 124, 255);
  --interactive-accent-hover: rgb(92, 124, 255, 0.8);
  --interactive-accent-hsl: 228, 100%, 68%;
  --interactive-hover: #4a4546;
  --interactive-normal: #433F40;
  --italic-underline-color: #fcd86c;
  --jade: 0, 168, 107;
  --link-color: rgb(92, 124, 255);
  --link-color-hover: rgb(92, 124, 255, 0.8);
  --link-external-color: rgb(92, 124, 255);
  --link-external-color-hover: rgb(92, 124, 255, 0.8);
  --link-unresolved-color: rgb(92, 124, 255);
  --link-unresolved-decoration-color: rgba(92, 124, 255, 0.3);
  --list-marker-color: #807b7b;
  --list-marker-color-collapsed: rgb(92, 124, 255);
  --list-marker-color-hover: #b7b2b2;
  --mauve: 122, 73, 136;
  --menu-background: #322f30;
  --menu-border-color: rgb(79, 74, 75);
  --menu-shadow: none;
  --metadata-border-color: rgb(74, 69, 70);
  --metadata-divider-color: rgb(74, 69, 70);
  --metadata-input-background-active: #413e3e;
  --metadata-input-text-color: #e1e1e1;
  --metadata-label-background-active: #413e3e;
  --metadata-label-text-color: #b7b2b2;
  --metadata-label-text-color-hover: #b7b2b2;
  --metadata-property-background-active: #413e3e;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(74, 69, 70);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(79, 74, 75);
  --modal-background: #322f30;
  --modal-border-color: rgb(74, 69, 70);
  --modal-border-width: 2px;
  --mustard: 255, 208, 113;
  --nav-collapse-icon-color: #807b7b;
  --nav-collapse-icon-color-collapsed: #807b7b;
  --nav-heading-color: #e1e1e1;
  --nav-heading-color-collapsed: #807b7b;
  --nav-heading-color-collapsed-hover: #b7b2b2;
  --nav-heading-color-hover: #e1e1e1;
  --nav-indentation-guide-color: rgb(74, 69, 70);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-active: #413e3e;
  --nav-item-background-hover: #413e3e;
  --nav-item-background-selected: rgba(92, 124, 255, 0.15);
  --nav-item-color: #b7b2b2;
  --nav-item-color-active: #e1e1e1;
  --nav-item-color-highlighted: rgb(92, 124, 255);
  --nav-item-color-hover: #e1e1e1;
  --nav-item-color-selected: #e1e1e1;
  --nav-tag-color: #807b7b;
  --nav-tag-color-active: #b7b2b2;
  --nav-tag-color-hover: #b7b2b2;
  --pdf-background: #322f30;
  --pdf-page-background: #322f30;
  --pdf-shadow: 0 0 0 1px rgb(74, 69, 70);
  --pdf-sidebar-background: #322f30;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(74, 69, 70);
  --pill-border-color: rgb(74, 69, 70);
  --pill-border-color-hover: rgb(79, 74, 75);
  --pill-color: #b7b2b2;
  --pill-color-hover: #e1e1e1;
  --pill-color-remove: #807b7b;
  --pill-color-remove-hover: rgb(92, 124, 255);
  --prompt-background: #322f30;
  --pumpkin: 246, 141, 69;
  --raised-background: color-mix(in srgb, #433F40 65%, transparent) linear-gradient(#433F40, color-mix(in srgb, #433F40 65%, transparent));
  --ribbon-background: #322f30;
  --ribbon-background-collapsed: #322f30;
  --rust: 188, 74, 60;
  --search-clear-button-color: #b7b2b2;
  --search-icon-color: #b7b2b2;
  --search-result-background: #322f30;
  --setting-group-heading-color: #e1e1e1;
  --setting-items-background: #413e3e;
  --setting-items-border-color: rgb(74, 69, 70);
  --shadow-l: none;
  --shadow-s: none;
  --slate: 131, 142, 154;
  --slider-thumb-border-color: rgb(79, 74, 75);
  --slider-track-background: rgb(74, 69, 70);
  --status-bar-background: #322f30;
  --status-bar-border-color: rgb(74, 69, 70);
  --status-bar-text-color: #b7b2b2;
  --strong-color: #e1e1e1;
  --suggestion-background: #322f30;
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebc88b;
  --sync-avatar-color-4: #8fbcbb;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #81a1c1;
  --sync-avatar-color-7: #8b81c1;
  --sync-avatar-color-8: #bd81c1;
  --tab-background-active: #322f30;
  --tab-container-background: #322f30;
  --tab-divider-color: rgb(79, 74, 75);
  --tab-outline-color: rgb(74, 69, 70);
  --tab-switcher-background: #322f30;
  --tab-switcher-menubar-background: linear-gradient(to top, #322f30, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 124, 255);
  --tab-text-color: #807b7b;
  --tab-text-color-active: #b7b2b2;
  --tab-text-color-focused: #b7b2b2;
  --tab-text-color-focused-active: #b7b2b2;
  --tab-text-color-focused-active-current: #e1e1e1;
  --tab-text-color-focused-highlighted: rgb(92, 124, 255);
  --table-add-button-border-color: rgb(74, 69, 70);
  --table-border-color: rgb(74, 69, 70);
  --table-drag-handle-background-active: rgb(92, 124, 255);
  --table-drag-handle-color: #807b7b;
  --table-header-border-color: rgb(74, 69, 70);
  --table-header-color: #e1e1e1;
  --table-selection: rgba(92, 124, 255, 0.1);
  --table-selection-border-color: rgb(92, 124, 255);
  --tag-background: rgb(92, 124, 255, .2);
  --tag-background-hover: rgb(92, 124, 255, .3);
  --tag-border-color: rgba(92, 124, 255, 0.15);
  --tag-border-color-hover: rgba(92, 124, 255, 0.15);
  --tag-color: rgb(92, 124, 255);
  --tag-color-hover: rgb(92, 124, 255);
  --text-accent: rgb(92, 124, 255);
  --text-accent-hover: rgb(92, 124, 255, 0.8);
  --text-error: #bf616a;
  --text-faint: #807b7b;
  --text-muted: #b7b2b2;
  --text-normal: #e1e1e1;
  --text-selection: rgba(92, 124, 255, 0.33);
  --text-success: #8fbcbb;
  --text-warning: #d08770;
  --titlebar-background: #322f30;
  --titlebar-background-focused: #322f30;
  --titlebar-border-color: rgb(74, 69, 70);
  --titlebar-text-color: #b7b2b2;
  --titlebar-text-color-focused: #e1e1e1;
  --turquoise: 120, 230, 232;
  --ultramarine: 92, 124, 255;
  --vault-profile-color: #e1e1e1;
  --vault-profile-color-hover: #e1e1e1;
  --vermilion: 243, 90, 55;
  --wine: 114, 47, 55;
  --yellow: #fcd86c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 69, 70);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(50, 47, 48);
  border-left-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

body div#quartz-root {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}`,
    typography: `body .page article p > b, b {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

body .page article p > em, em {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

body .page article p > i, i {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

body .page article p > strong, strong {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

body .text-highlight {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

body del {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: line-through rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

body p {
  color: rgb(183, 178, 178);
  outline: rgb(183, 178, 178) none 0px;
  text-decoration: rgb(183, 178, 178);
  text-decoration-color: rgb(183, 178, 178);
}`,
    links: `body a.external, footer a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
  text-decoration-color: rgb(92, 124, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
  text-decoration-color: rgb(92, 124, 255);
}

body a.internal.broken {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgba(92, 124, 255, 0.3);
  text-decoration-color: rgba(92, 124, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(225, 225, 225);
}

body dt {
  color: rgb(225, 225, 225);
}

body ol > li {
  color: rgb(225, 225, 225);
}

body ol.overflow {
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body ul > li {
  color: rgb(225, 225, 225);
}

body ul.overflow {
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body table {
  color: rgb(225, 225, 225);
  width: 193.219px;
}

body td {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

body th {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
  padding-bottom: 4.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 4.8px;
}`,
    code: `body code {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

body pre > code > [data-line] {
  border-left-color: rgb(235, 200, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 200, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 200, 139);
  border-left-color: rgb(235, 200, 139);
  border-right-color: rgb(235, 200, 139);
  border-top-color: rgb(235, 200, 139);
}

body pre > code, pre:has(> code) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
}

body pre:has(> code) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
}`,
    images: `body audio {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body figcaption {
  color: rgb(225, 225, 225);
}

body figure {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body img {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body video {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    embeds: `body .file-embed {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
}

body .footnotes {
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

body .transclude {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body .transclude-inner {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body input[type=checkbox] {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='!'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='*'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='-'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='/'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='>'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='?'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='I'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='S'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='b'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='c'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='d'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='f'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='i'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='k'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='l'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='p'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='u'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

body li.task-list-item[data-task='w'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

body .callout[data-callout="abstract"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 139, 129, 193;
  background-color: rgba(139, 129, 193, 0.1);
  border-bottom-color: rgba(139, 129, 193, 0.25);
  border-left-color: rgba(139, 129, 193, 0.25);
  border-right-color: rgba(139, 129, 193, 0.25);
  border-top-color: rgba(139, 129, 193, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 143, 188, 187;
  background-color: rgba(143, 188, 187, 0.1);
  border-bottom-color: rgba(143, 188, 187, 0.25);
  border-left-color: rgba(143, 188, 187, 0.25);
  border-right-color: rgba(143, 188, 187, 0.25);
  border-top-color: rgba(143, 188, 187, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

body .search > .search-container > .search-space {
  background-color: rgb(50, 47, 48);
}

body .search > .search-container > .search-space > * {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 225, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(225, 225, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(65, 62, 62);
  color: rgb(225, 225, 225);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 47, 48);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(65, 62, 62);
  color: rgb(225, 225, 225);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 124, 255, 0.2);
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(92, 124, 255);
}

body h1 {
  color: rgb(225, 225, 225);
}

body h2 {
  color: rgb(92, 124, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(225, 225, 225);
}

body h3 {
  color: rgb(225, 225, 225);
}

body h4 {
  color: rgb(183, 178, 178);
}

body h5 {
  color: rgb(183, 178, 178);
}

body h6 {
  color: rgb(128, 123, 123);
}

body hr {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
}`,
    scrollbars: `body .callout {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

body ::-webkit-scrollbar-corner {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

body ::-webkit-scrollbar-track {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: rgb(128, 123, 123);
}`,
    footer: `body footer {
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(183, 178, 178);
}

body footer ul li a {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(225, 225, 225);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(128, 123, 123);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body li.section-li > .section .meta {
  color: rgb(128, 123, 123);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

body ul.section-ul {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: rgb(128, 123, 123);
}

body .darkmode svg {
  color: rgb(128, 123, 123);
  stroke: rgb(128, 123, 123);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: rgb(128, 123, 123);
}

body .breadcrumb-element p {
  color: rgb(128, 123, 123);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

body .metadata {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(183, 178, 178);
}

body .metadata-properties {
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
  color: rgb(183, 178, 178);
}

body .navigation-progress {
  background-color: rgb(50, 47, 48);
}

body .page-header h2.page-title {
  color: rgb(225, 225, 225);
}

body abbr {
  color: rgb(225, 225, 225);
  text-decoration: underline dotted rgb(225, 225, 225);
}

body details {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body input[type=text] {
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
  color: rgb(183, 178, 178);
}

body kbd {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

body progress {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

body sub {
  color: rgb(225, 225, 225);
}

body summary {
  color: rgb(225, 225, 225);
}

body sup {
  color: rgb(225, 225, 225);
}`,
  },
  light: {
    base: `:root:root {
  --accent: 92, 124, 255;
  --accent-h: 228;
  --accent-l: 68%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(92, 124, 255, 0.1);
  --background-modifier-border: rgb(214, 214, 214);
  --background-modifier-border-focus: rgb(214, 214, 214);
  --background-modifier-border-hover: rgb(214, 214, 214);
  --background-modifier-form-field: #f2f2f2;
  --background-modifier-form-field-hover: #f2f2f2;
  --background-modifier-hover: #e6e6e6;
  --background-primary: #f2f2f2;
  --background-primary-alt: #e6e6e6;
  --background-secondary: #f2f2f2;
  --background-secondary-alt: #f2f2f2;
  --bases-cards-background: #f2f2f2;
  --bases-cards-cover-background: #e6e6e6;
  --bases-cards-shadow: 0 0 0 1px rgb(214, 214, 214);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(214, 214, 214);
  --bases-embed-border-color: rgb(214, 214, 214);
  --bases-group-heading-property-color: #878586;
  --bases-table-border-color: rgb(214, 214, 214);
  --bases-table-cell-background-active: #f2f2f2;
  --bases-table-cell-background-disabled: #e6e6e6;
  --bases-table-cell-background-selected: rgba(92, 124, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(214, 214, 214);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(92, 124, 255);
  --bases-table-group-background: #e6e6e6;
  --bases-table-header-background: #f2f2f2;
  --bases-table-header-background-hover: #e6e6e6;
  --bases-table-header-color: #878586;
  --bases-table-summary-background: #f2f2f2;
  --bases-table-summary-background-hover: #e6e6e6;
  --blockquote-border-color: rgb(92, 124, 255);
  --blur-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent));
  --bold-underline-color: rgb(92, 124, 255);
  --bubblegum: 255, 179, 189;
  --canvas-background: #f2f2f2;
  --caret-color: #353132;
  --checkbox-border-color-hover: #878586;
  --checkbox-color: rgb(92, 124, 255);
  --checkbox-color-hover: rgb(92, 124, 255, 0.8);
  --checkbox-marker-color: #f2f2f2;
  --checklist-done-color: #878586;
  --code-background: #e6e6e6;
  --code-border-color: rgb(214, 214, 214);
  --code-bracket-background: #e6e6e6;
  --code-normal: #353132;
  --code-punctuation: #878586;
  --collapse-icon-color-collapsed: rgb(92, 124, 255);
  --color-accent: rgb(92, 124, 255);
  --color-accent-1: hsl(227, 101%, 73.1%);
  --color-accent-2: hsl(225, 102%, 78.2%);
  --color-accent-hsl: 228, 100%, 68%;
  --denim: 76, 80, 120;
  --divider-color: rgb(214, 214, 214);
  --divider-color-hover: rgb(92, 124, 255);
  --dropdown-background: #e6e6e6;
  --dropdown-background-hover: #efefef;
  --em-color: #353132;
  --embed-block-shadow-hover: 0 0 0 1px rgb(214, 214, 214), inset 0 0 0 1px rgb(214, 214, 214);
  --embed-border-start: 2px solid rgb(92, 124, 255);
  --file-header-background: #f2f2f2;
  --file-header-background-focused: #f2f2f2;
  --flair-background: #e6e6e6;
  --flair-color: #353132;
  --footnote-divider-color: rgb(214, 214, 214);
  --footnote-id-color: #878586;
  --footnote-input-background-active: #e6e6e6;
  --forest: 77, 116, 53;
  --graph-node: #878586;
  --graph-node-focused: rgb(92, 124, 255);
  --graph-text: #353132;
  --h1-color: #353132;
  --h1-size: 1.3em;
  --h2-color: rgb(92, 124, 255);
  --h2-size: 1.2em;
  --h3-color: #353132;
  --h3-size: 1.1em;
  --h4-color: #878586;
  --h4-size: 1em;
  --h5-color: #878586;
  --h5-size: .85em;
  --h6-color: #ababab;
  --h6-size: .75em;
  --hr-color: rgb(214, 214, 214);
  --icon-color: #ababab;
  --icon-color-active: rgb(92, 124, 255);
  --icon-color-focused: #878586;
  --icon-color-hover: #878586;
  --indentation-guide-color: rgb(214, 214, 214);
  --indentation-guide-color-active: rgb(179, 179, 179);
  --indentation-guide-width: 1.5px;
  --inline-title-color: #353132;
  --inline-title-size: 1.3em;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(92, 124, 255);
  --interactive-accent-hover: rgb(92, 124, 255, 0.8);
  --interactive-accent-hsl: 228, 100%, 68%;
  --interactive-hover: #efefef;
  --interactive-normal: #e6e6e6;
  --italic-underline-color: #fcd86c;
  --jade: 0, 168, 107;
  --link-color: rgb(92, 124, 255);
  --link-color-hover: rgb(92, 124, 255, 0.8);
  --link-external-color: rgb(92, 124, 255);
  --link-external-color-hover: rgb(92, 124, 255, 0.8);
  --link-unresolved-color: rgb(92, 124, 255);
  --link-unresolved-decoration-color: rgba(92, 124, 255, 0.3);
  --list-marker-color-collapsed: rgb(92, 124, 255);
  --list-marker-color-hover: #878586;
  --mauve: 122, 73, 136;
  --menu-background: #f2f2f2;
  --menu-border-color: rgb(214, 214, 214);
  --menu-shadow: none;
  --metadata-border-color: rgb(214, 214, 214);
  --metadata-divider-color: rgb(214, 214, 214);
  --metadata-input-background-active: #e6e6e6;
  --metadata-input-text-color: #353132;
  --metadata-label-background-active: #e6e6e6;
  --metadata-label-text-color: #878586;
  --metadata-label-text-color-hover: #878586;
  --metadata-property-background-active: #e6e6e6;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(214, 214, 214);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(214, 214, 214);
  --modal-background: #f2f2f2;
  --modal-border-color: rgb(214, 214, 214);
  --modal-border-width: 2px;
  --mustard: 255, 208, 113;
  --nav-heading-color: #353132;
  --nav-heading-color-collapsed-hover: #878586;
  --nav-heading-color-hover: #353132;
  --nav-indentation-guide-color: rgb(214, 214, 214);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-active: #e6e6e6;
  --nav-item-background-hover: #e6e6e6;
  --nav-item-background-selected: rgba(92, 124, 255, 0.15);
  --nav-item-color: #878586;
  --nav-item-color-active: #353132;
  --nav-item-color-highlighted: rgb(92, 124, 255);
  --nav-item-color-hover: #353132;
  --nav-item-color-selected: #353132;
  --nav-tag-color-active: #878586;
  --nav-tag-color-hover: #878586;
  --pdf-background: #f2f2f2;
  --pdf-page-background: #f2f2f2;
  --pdf-sidebar-background: #f2f2f2;
  --pill-border-color: rgb(214, 214, 214);
  --pill-border-color-hover: rgb(214, 214, 214);
  --pill-color: #878586;
  --pill-color-hover: #353132;
  --pill-color-remove-hover: rgb(92, 124, 255);
  --prompt-background: #f2f2f2;
  --pumpkin: 246, 141, 69;
  --raised-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent));
  --ribbon-background: #f2f2f2;
  --ribbon-background-collapsed: #f2f2f2;
  --rust: 188, 74, 60;
  --search-clear-button-color: #878586;
  --search-icon-color: #878586;
  --search-result-background: #f2f2f2;
  --setting-group-heading-color: #353132;
  --setting-items-background: #e6e6e6;
  --setting-items-border-color: rgb(214, 214, 214);
  --shadow-l: none;
  --shadow-s: none;
  --slate: 131, 142, 154;
  --slider-thumb-border-color: rgb(214, 214, 214);
  --slider-track-background: rgb(214, 214, 214);
  --status-bar-background: #f2f2f2;
  --status-bar-border-color: rgb(214, 214, 214);
  --status-bar-text-color: #878586;
  --strong-color: #353132;
  --suggestion-background: #f2f2f2;
  --tab-background-active: #f2f2f2;
  --tab-container-background: #f2f2f2;
  --tab-divider-color: rgb(214, 214, 214);
  --tab-outline-color: rgb(214, 214, 214);
  --tab-switcher-background: #f2f2f2;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f2f2, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 124, 255);
  --tab-text-color-active: #878586;
  --tab-text-color-focused: #878586;
  --tab-text-color-focused-active: #878586;
  --tab-text-color-focused-active-current: #353132;
  --tab-text-color-focused-highlighted: rgb(92, 124, 255);
  --table-add-button-border-color: rgb(214, 214, 214);
  --table-border-color: rgb(214, 214, 214);
  --table-drag-handle-background-active: rgb(92, 124, 255);
  --table-header-border-color: rgb(214, 214, 214);
  --table-header-color: #353132;
  --table-selection: rgba(92, 124, 255, 0.1);
  --table-selection-border-color: rgb(92, 124, 255);
  --tag-background: rgb(92, 124, 255, .2);
  --tag-background-hover: rgb(92, 124, 255, .3);
  --tag-border-color: rgba(92, 124, 255, 0.15);
  --tag-border-color-hover: rgba(92, 124, 255, 0.15);
  --tag-color: rgb(92, 124, 255);
  --tag-color-hover: rgb(92, 124, 255);
  --text-accent: rgb(92, 124, 255);
  --text-accent-hover: rgb(92, 124, 255, 0.8);
  --text-muted: #878586;
  --text-normal: #353132;
  --text-selection: rgba(92, 124, 255, 0.2);
  --titlebar-background: #f2f2f2;
  --titlebar-background-focused: #f2f2f2;
  --titlebar-border-color: rgb(214, 214, 214);
  --titlebar-text-color: #878586;
  --titlebar-text-color-focused: #353132;
  --turquoise: 120, 230, 232;
  --ultramarine: 92, 124, 255;
  --vault-profile-color: #353132;
  --vault-profile-color-hover: #353132;
  --vermilion: 243, 90, 55;
  --wine: 114, 47, 55;
  --yellow: #fcd86c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(214, 214, 214);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

body div#quartz-root {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}`,
    typography: `body .page article p > b, b {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

body .page article p > em, em {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

body .page article p > i, i {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

body .page article p > strong, strong {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

body .text-highlight {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

body del {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: line-through rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

body p {
  color: rgb(135, 133, 134);
  outline: rgb(135, 133, 134) none 0px;
  text-decoration: rgb(135, 133, 134);
  text-decoration-color: rgb(135, 133, 134);
}`,
    links: `body a.external, footer a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
  text-decoration-color: rgb(92, 124, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
  text-decoration-color: rgb(92, 124, 255);
}

body a.internal.broken {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgba(92, 124, 255, 0.3);
  text-decoration-color: rgba(92, 124, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(53, 49, 50);
}

body dt {
  color: rgb(53, 49, 50);
}

body ol > li {
  color: rgb(53, 49, 50);
}

body ol.overflow {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body ul > li {
  color: rgb(53, 49, 50);
}

body ul.overflow {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body table {
  color: rgb(53, 49, 50);
  width: 193.219px;
}

body td {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

body th {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
  padding-bottom: 4.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 4.8px;
}`,
    code: `body code {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

body pre > code, pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
}

body pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
}`,
    images: `body audio {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body figcaption {
  color: rgb(53, 49, 50);
}

body figure {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body img {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body video {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    embeds: `body .file-embed {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
}

body .footnotes {
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

body .transclude {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body .transclude-inner {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='!'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='*'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='/'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='>'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='?'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='I'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='S'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='b'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='c'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='d'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='f'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='i'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='k'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='l'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='p'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='u'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

body li.task-list-item[data-task='w'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    search: `body .search > .search-button {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space > * {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(53, 49, 50);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(53, 49, 50);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(230, 230, 230);
  color: rgb(53, 49, 50);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(230, 230, 230);
  color: rgb(53, 49, 50);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 124, 255, 0.2);
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(92, 124, 255);
}

body h1 {
  color: rgb(53, 49, 50);
}

body h2 {
  color: rgb(92, 124, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(53, 49, 50);
}

body h3 {
  color: rgb(53, 49, 50);
}

body h4 {
  color: rgb(135, 133, 134);
}

body h5 {
  color: rgb(135, 133, 134);
}

body h6 {
  color: rgb(171, 171, 171);
}

body hr {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    footer: `body footer {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(135, 133, 134);
}

body footer ul li a {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(53, 49, 50);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 171, 171);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body li.section-li > .section .meta {
  color: rgb(171, 171, 171);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

body ul.section-ul {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

body .darkmode svg {
  color: rgb(171, 171, 171);
  stroke: rgb(171, 171, 171);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

body .metadata {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(135, 133, 134);
}

body .metadata-properties {
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
  color: rgb(135, 133, 134);
}

body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

body .page-header h2.page-title {
  color: rgb(53, 49, 50);
}

body abbr {
  color: rgb(53, 49, 50);
  text-decoration: underline dotted rgb(53, 49, 50);
}

body details {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body input[type=text] {
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
  color: rgb(135, 133, 134);
}

body kbd {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

body progress {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

body sub {
  color: rgb(53, 49, 50);
}

body summary {
  color: rgb(53, 49, 50);
}

body sup {
  color: rgb(53, 49, 50);
}`,
  },
};
