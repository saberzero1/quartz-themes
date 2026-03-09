import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neutral-academia",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cormorant", "manrope"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #262020;
  --background-modifier-border-focus: #C8BCAC;
  --background-modifier-border-hover: #666C68;
  --background-modifier-form-field: #262020;
  --background-modifier-form-field-hover: #262020;
  --background-primary: #0f0a0b;
  --background-primary-alt: #110b0c;
  --background-secondary: #110b0c;
  --background-secondary-alt: #262020;
  --bases-cards-background: #0f0a0b;
  --bases-cards-cover-background: #110b0c;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #262020;
  --bases-cards-shadow-hover: 0 0 0 1px #666C68;
  --bases-embed-border-color: #262020;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #C8BCAC;
  --bases-table-border-color: #262020;
  --bases-table-cell-background-active: #0f0a0b;
  --bases-table-cell-background-disabled: #110b0c;
  --bases-table-cell-shadow-active: 0 0 0 2px #C8BCAC;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #110b0c;
  --bases-table-header-background: #0f0a0b;
  --bases-table-header-color: #C8BCAC;
  --bases-table-summary-background: #0f0a0b;
  --blur-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent));
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #0f0a0b;
  --canvas-card-label-color: #C8BCAC;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #262020;
  --caret-color: #C8BCAC;
  --checkbox-border-color: #7F6C5E;
  --checkbox-border-color-hover: #C8BCAC;
  --checkbox-color: #7F6C5E;
  --checkbox-marker-color: #0f0a0b;
  --checkbox-radius: 0px;
  --checkbox-size: 14px;
  --checklist-done-color: #C8BCAC;
  --clickable-icon-radius: 0px;
  --code-background: none;
  --code-border-color: #262020;
  --code-comment: #C8BCAC;
  --code-normal: #C8BCAC;
  --code-punctuation: #C8BCAC;
  --code-radius: 0px;
  --collapse-icon-color: #C8BCAC;
  --collapse-icon-color-collapsed: #C8BCAC;
  --color-base-00: #0f0a0b;
  --color-base-05: #262020;
  --color-base-10: #110b0c;
  --color-base-100: #C8BCAC;
  --color-base-20: #110b0c;
  --color-base-25: #262020;
  --color-base-30: #262020;
  --color-base-35: #666C68;
  --color-base-40: #C8BCAC;
  --color-base-50: #C8BCAC;
  --color-base-60: #C8BCAC;
  --color-base-70: #C8BCAC;
  --divider-color: transparent;
  --dropdown-background: #393e50;
  --dropdown-background-hover: #666C68;
  --embed-block-shadow-hover: 0 0 0 1px #262020, inset 0 0 0 1px #262020;
  --file-header-background: #0f0a0b;
  --file-header-background-focused: #0f0a0b;
  --flair-background: #393e50;
  --flair-color: #C8BCAC;
  --font-mermaid: 'manrope', sans-serif;
  --font-text: 'manrope', sans-serif;
  --font-text-size: 14px;
  --footnote-divider-color: #262020;
  --footnote-id-color: #C8BCAC;
  --footnote-id-color-no-occurrences: #C8BCAC;
  --footnote-radius: 0px;
  --graph-line: #666C68;
  --graph-node: #C8BCAC;
  --graph-node-focused: #C8BCAC;
  --graph-node-unresolved: #C8BCAC;
  --graph-text: #C8BCAC;
  --h1-size: 2.5em;
  --h1-weight: 600;
  --h2-size: 2.2em;
  --h2-weight: 600;
  --h3-size: 2em;
  --h3-weight: 600;
  --h4-size: 1.8em;
  --h4-weight: 600;
  --h5-size: 1.6em;
  --h5-weight: 600;
  --h6-size: 1.4em;
  --heading-formatting: #C8BCAC;
  --hr-color: #262020;
  --hr-thickness: 1px;
  --icon-color: #E5DFD3;
  --icon-color-active: #C8BCAC;
  --icon-color-focused: #4f4d4a;
  --icon-color-hover: #4f4d4a;
  --inline-title-color: #4f4d4a;
  --inline-title-font: 'Cormorant', serif;
  --inline-title-size: 4em;
  --inline-title-weight: 600;
  --input-date-separator: #C8BCAC;
  --input-placeholder-color: #C8BCAC;
  --input-radius: 0px;
  --interactive-hover: #666C68;
  --interactive-normal: #393e50;
  --link-color: #C8BCAC;
  --link-color-hover: #7F6C5E;
  --link-external-color: #C8BCAC;
  --link-external-color-hover: #7F6C5E;
  --link-unresolved-color: #C8BCAC;
  --list-marker-color: #C8BCAC;
  --list-marker-color-collapsed: #C8BCAC;
  --list-marker-color-hover: #C8BCAC;
  --menu-background: #110b0c;
  --menu-border-color: #666C68;
  --menu-radius: 0px;
  --metadata-border-color: #262020;
  --metadata-divider-color: #262020;
  --metadata-input-height: 24.5px;
  --metadata-input-text-color: #C8BCAC;
  --metadata-label-text-color: #C8BCAC;
  --metadata-label-text-color-hover: #C8BCAC;
  --metadata-property-box-shadow-focus: 0 0 0 2px #C8BCAC;
  --metadata-property-box-shadow-hover: 0 0 0 1px #666C68;
  --modal-background: #0f0a0b;
  --modal-border-color: #C8BCAC;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #C8BCAC;
  --nav-collapse-icon-color-collapsed: #C8BCAC;
  --nav-heading-color: #C8BCAC;
  --nav-heading-color-collapsed: #C8BCAC;
  --nav-heading-color-collapsed-hover: #C8BCAC;
  --nav-heading-color-hover: #C8BCAC;
  --nav-item-background-active: none;
  --nav-item-background-hover: none;
  --nav-item-color: #4f4d4a;
  --nav-item-color-active: #666C68;
  --nav-item-color-highlighted: #C8BCAC;
  --nav-item-color-hover: #666C68;
  --nav-item-color-selected: #C8BCAC;
  --nav-item-radius: 0px;
  --nav-item-size: 15px;
  --nav-tag-color: #C8BCAC;
  --nav-tag-color-active: #C8BCAC;
  --nav-tag-color-hover: #C8BCAC;
  --nav-tag-radius: 0px;
  --pdf-background: #0f0a0b;
  --pdf-page-background: #0f0a0b;
  --pdf-shadow: 0 0 0 1px #262020;
  --pdf-sidebar-background: #0f0a0b;
  --pdf-thumbnail-shadow: 0 0 0 1px #262020;
  --pill-border-color: #262020;
  --pill-border-color-hover: #666C68;
  --pill-color: #C8BCAC;
  --pill-color-hover: #C8BCAC;
  --pill-color-remove: #C8BCAC;
  --pill-color-remove-hover: #C8BCAC;
  --popover-font-size: 14px;
  --prompt-background: #0f0a0b;
  --prompt-border-color: #C8BCAC;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent));
  --ribbon-background: #110b0c;
  --ribbon-background-collapsed: #0f0a0b;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #C8BCAC;
  --search-icon-color: #C8BCAC;
  --search-result-background: #0f0a0b;
  --setting-group-heading-color: #C8BCAC;
  --setting-items-background: #110b0c;
  --setting-items-border-color: #262020;
  --setting-items-radius: 0px;
  --sidebar-markdown-font-size: 12.6px;
  --slider-thumb-border-color: #666C68;
  --slider-thumb-radius: 0px;
  --slider-track-background: #393e50;
  --status-bar-background: #110b0c;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #C8BCAC;
  --suggestion-background: #0f0a0b;
  --tab-background-active: #0f0a0b;
  --tab-container-background: #110b0c;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #110b0c;
  --tab-switcher-menubar-background: linear-gradient(to top, #110b0c, transparent);
  --tab-text-color: #C8BCAC;
  --tab-text-color-active: #C8BCAC;
  --tab-text-color-focused: #C8BCAC;
  --tab-text-color-focused-active: #C8BCAC;
  --tab-text-color-focused-active-current: #C8BCAC;
  --tab-text-color-focused-highlighted: #C8BCAC;
  --table-add-button-border-color: #262020;
  --table-border-color: #262020;
  --table-drag-handle-color: #C8BCAC;
  --table-header-border-color: #262020;
  --table-header-color: #C8BCAC;
  --table-header-size: 14px;
  --table-text-size: 14px;
  --tag-background: transparent;
  --tag-background-hover: #393e50;
  --tag-color: #C8BCAC;
  --tag-color-hover: #C8BCAC;
  --text-accent: #C8BCAC;
  --text-accent-hover: #7F6C5E;
  --text-faint: #C8BCAC;
  --text-muted: #C8BCAC;
  --text-normal: #C8BCAC;
  --titlebar-background: #110b0c;
  --titlebar-background-focused: #262020;
  --titlebar-border-color: #262020;
  --titlebar-text-color: #C8BCAC;
  --titlebar-text-color-focused: #C8BCAC;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #C8BCAC;
  --vault-profile-color-hover: #C8BCAC;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 11, 12);
  color: rgb(200, 188, 172);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 10, 11);
  color: rgb(200, 188, 172);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 11, 12);
  color: rgb(200, 188, 172);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 11, 12);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(200, 188, 172);
}

body div#quartz-root {
  background-color: rgb(15, 10, 11);
  color: rgb(200, 188, 172);
}`,
    typography: `body .page article p > b, b {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body .page article p > em, em {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body .page article p > i, i {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body .page article p > strong, strong {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body .text-highlight {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body del {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: line-through rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body p {
  color: rgb(200, 188, 172);
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}`,
    links: `body a.external, footer a {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: underline rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: underline rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body a.internal.broken {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
}`,
    lists: `body dd {
  color: rgb(200, 188, 172);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(200, 188, 172);
}

body ol > li {
  color: rgb(200, 188, 172);
}

body ol.overflow {
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body ul > li {
  color: rgb(200, 188, 172);
}

body ul.overflow {
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
}

body blockquote {
  font-family: manrope, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body table {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  width: 173.234px;
}

body td {
  border-bottom-color: rgb(38, 32, 32);
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  color: rgb(200, 188, 172);
}

body th {
  border-bottom-color: rgb(38, 32, 32);
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  color: rgb(200, 188, 172);
}`,
    code: `body code {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body figcaption {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  margin-bottom: 14px;
  margin-top: 14px;
}

body img {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body video {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    embeds: `body .file-embed {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

body .transclude {
  border-bottom-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body .transclude-inner {
  border-bottom-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: manrope, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: manrope, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(200, 188, 172);
  text-decoration: line-through rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body input[type=checkbox] {
  border-bottom-color: rgb(127, 108, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(127, 108, 94);
  border-right-color: rgb(127, 108, 94);
  border-top-color: rgb(127, 108, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -21px;
  width: 14px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='*'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='-'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='/'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='>'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='?'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='I'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='S'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='b'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='c'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='d'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='f'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='i'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='k'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='l'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='p'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='u'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body li.task-list-item[data-task='w'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body .callout[data-callout="abstract"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(38, 32, 32);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(200, 188, 172);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(200, 188, 172);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(200, 188, 172);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 11, 12);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

body a.internal.tag-link::before {
  color: rgb(200, 188, 172);
}

body h1 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h2 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h3 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h4 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h5 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h6 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
  text-decoration: rgb(79, 77, 74);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
  text-decoration: rgb(79, 77, 74);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
  text-decoration: rgb(79, 77, 74);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(102, 108, 104);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 108, 104);
  border-right-color: rgb(102, 108, 104);
  border-top-color: rgb(102, 108, 104);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 108, 104);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(229, 223, 211);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 223, 211);
  border-right-color: rgb(229, 223, 211);
  border-top-color: rgb(229, 223, 211);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 223, 211);
}`,
    footer: `body footer {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(200, 188, 172);
}

body footer ul li a {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(200, 188, 172);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(79, 77, 74);
  text-decoration: rgb(79, 77, 74);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body li.section-li > .section .meta {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(79, 77, 74);
  text-decoration: rgb(79, 77, 74);
}

body ul.section-ul {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(229, 223, 211);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 223, 211);
  border-right-color: rgb(229, 223, 211);
  border-top-color: rgb(229, 223, 211);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 223, 211);
}

body .darkmode svg {
  color: rgb(229, 223, 211);
  stroke: rgb(229, 223, 211);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

body .breadcrumb-element p {
  color: rgb(200, 188, 172);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

body .metadata {
  border-bottom-color: rgb(38, 32, 32);
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
}

body .navigation-progress {
  background-color: rgb(17, 11, 12);
}

body .page-header h2.page-title {
  color: rgb(200, 188, 172);
  font-family: Cormorant, serif;
}

body abbr {
  color: rgb(200, 188, 172);
  text-decoration: underline dotted rgb(200, 188, 172);
}

body details {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body input[type=text] {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

body progress {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

body sub {
  color: rgb(200, 188, 172);
  font-size: 11.6667px;
}

body summary {
  color: rgb(200, 188, 172);
}

body sup {
  color: rgb(200, 188, 172);
  font-size: 11.6667px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #d2c9bd;
  --background-modifier-border-focus: #202430;
  --background-modifier-border-hover: #202430;
  --background-modifier-form-field: #f5f4f4;
  --background-modifier-form-field-hover: #f5f4f4;
  --background-primary: #f5f4f4;
  --background-primary-alt: #efeff1;
  --background-secondary: #efeff1;
  --background-secondary-alt: #d2c9bd;
  --bases-cards-background: #f5f4f4;
  --bases-cards-cover-background: #efeff1;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #d2c9bd;
  --bases-cards-shadow-hover: 0 0 0 1px #202430;
  --bases-embed-border-color: #d2c9bd;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #434B56;
  --bases-table-border-color: #d2c9bd;
  --bases-table-cell-background-active: #f5f4f4;
  --bases-table-cell-background-disabled: #efeff1;
  --bases-table-cell-shadow-active: 0 0 0 2px #202430;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #efeff1;
  --bases-table-header-background: #f5f4f4;
  --bases-table-header-color: #434B56;
  --bases-table-summary-background: #f5f4f4;
  --blur-background: color-mix(in srgb, #f5f4f4 65%, transparent) linear-gradient(#f5f4f4, color-mix(in srgb, #f5f4f4 65%, transparent));
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #f5f4f4;
  --canvas-card-label-color: #4E4D49;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #d2c9bd;
  --caret-color: #202430;
  --checkbox-border-color: #666C68;
  --checkbox-border-color-hover: #434B56;
  --checkbox-color: #666C68;
  --checkbox-marker-color: #f5f4f4;
  --checkbox-radius: 0px;
  --checkbox-size: 14px;
  --checklist-done-color: #434B56;
  --clickable-icon-radius: 0px;
  --code-background: none;
  --code-border-color: #d2c9bd;
  --code-comment: #4E4D49;
  --code-normal: #202430;
  --code-punctuation: #434B56;
  --code-radius: 0px;
  --collapse-icon-color: #4E4D49;
  --collapse-icon-color-collapsed: #4B1B29;
  --color-base-00: #f5f4f4;
  --color-base-05: #d2c9bd;
  --color-base-10: #efeff1;
  --color-base-100: #202430;
  --color-base-20: #efeff1;
  --color-base-25: #d2c9bd;
  --color-base-30: #d2c9bd;
  --color-base-35: #202430;
  --color-base-40: #202430;
  --color-base-50: #4E4D49;
  --color-base-60: #4B1B29;
  --color-base-70: #434B56;
  --divider-color: transparent;
  --dropdown-background: #a4a9ba;
  --dropdown-background-hover: #efeff1;
  --embed-block-shadow-hover: 0 0 0 1px #d2c9bd, inset 0 0 0 1px #d2c9bd;
  --file-header-background: #f5f4f4;
  --file-header-background-focused: #f5f4f4;
  --flair-background: #a4a9ba;
  --flair-color: #202430;
  --font-mermaid: 'manrope', sans-serif;
  --font-text: 'manrope', sans-serif;
  --font-text-size: 14px;
  --footnote-divider-color: #d2c9bd;
  --footnote-id-color: #434B56;
  --footnote-id-color-no-occurrences: #4E4D49;
  --footnote-radius: 0px;
  --graph-line: #202430;
  --graph-node: #434B56;
  --graph-node-focused: #4B1B29;
  --graph-node-unresolved: #4E4D49;
  --graph-text: #202430;
  --h1-size: 2.5em;
  --h1-weight: 600;
  --h2-size: 2.2em;
  --h2-weight: 600;
  --h3-size: 2em;
  --h3-weight: 600;
  --h4-size: 1.8em;
  --h4-weight: 600;
  --h5-size: 1.6em;
  --h5-weight: 600;
  --h6-size: 1.4em;
  --heading-formatting: #4E4D49;
  --hr-color: #d2c9bd;
  --hr-thickness: 1px;
  --icon-color: #322831;
  --icon-color-active: #4B1B29;
  --icon-color-focused: #6B9080;
  --icon-color-hover: #41250C;
  --inline-title-color: #4f4d4a;
  --inline-title-font: 'Cormorant', serif;
  --inline-title-size: 4em;
  --inline-title-weight: 600;
  --input-date-separator: #4E4D49;
  --input-placeholder-color: #4E4D49;
  --input-radius: 0px;
  --interactive-hover: #efeff1;
  --interactive-normal: #a4a9ba;
  --link-color: #4B1B29;
  --link-color-hover: #7F6C5E;
  --link-external-color: #4B1B29;
  --link-external-color-hover: #7F6C5E;
  --link-unresolved-color: #4B1B29;
  --list-marker-color: #4E4D49;
  --list-marker-color-collapsed: #4B1B29;
  --list-marker-color-hover: #434B56;
  --menu-background: #efeff1;
  --menu-border-color: #202430;
  --menu-radius: 0px;
  --metadata-border-color: #d2c9bd;
  --metadata-divider-color: #d2c9bd;
  --metadata-input-height: 24.5px;
  --metadata-input-text-color: #202430;
  --metadata-label-text-color: #434B56;
  --metadata-label-text-color-hover: #434B56;
  --metadata-property-box-shadow-focus: 0 0 0 2px #202430;
  --metadata-property-box-shadow-hover: 0 0 0 1px #202430;
  --modal-background: #f5f4f4;
  --modal-border-color: #202430;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #4E4D49;
  --nav-collapse-icon-color-collapsed: #4E4D49;
  --nav-heading-color: #202430;
  --nav-heading-color-collapsed: #4E4D49;
  --nav-heading-color-collapsed-hover: #434B56;
  --nav-heading-color-hover: #202430;
  --nav-item-background-active: none;
  --nav-item-background-hover: none;
  --nav-item-color: #202430;
  --nav-item-color-active: #7F6C5E;
  --nav-item-color-highlighted: #4B1B29;
  --nav-item-color-hover: #666C68;
  --nav-item-color-selected: #202430;
  --nav-item-radius: 0px;
  --nav-item-size: 15px;
  --nav-tag-color: #4E4D49;
  --nav-tag-color-active: #434B56;
  --nav-tag-color-hover: #434B56;
  --nav-tag-radius: 0px;
  --pdf-background: #f5f4f4;
  --pdf-page-background: #f5f4f4;
  --pdf-sidebar-background: #f5f4f4;
  --pill-border-color: #d2c9bd;
  --pill-border-color-hover: #202430;
  --pill-color: #434B56;
  --pill-color-hover: #202430;
  --pill-color-remove: #4E4D49;
  --pill-color-remove-hover: #4B1B29;
  --popover-font-size: 14px;
  --prompt-background: #f5f4f4;
  --prompt-border-color: #202430;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #f5f4f4 65%, transparent) linear-gradient(#f5f4f4, color-mix(in srgb, #f5f4f4 65%, transparent));
  --ribbon-background: #efeff1;
  --ribbon-background-collapsed: #f5f4f4;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #434B56;
  --search-icon-color: #434B56;
  --search-result-background: #f5f4f4;
  --setting-group-heading-color: #202430;
  --setting-items-background: #efeff1;
  --setting-items-border-color: #d2c9bd;
  --setting-items-radius: 0px;
  --sidebar-markdown-font-size: 12.6px;
  --slider-thumb-border-color: #202430;
  --slider-thumb-radius: 0px;
  --slider-track-background: #393e50;
  --status-bar-background: #efeff1;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #434B56;
  --suggestion-background: #f5f4f4;
  --tab-background-active: #f5f4f4;
  --tab-container-background: #efeff1;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #efeff1;
  --tab-switcher-menubar-background: linear-gradient(to top, #efeff1, transparent);
  --tab-text-color: #4E4D49;
  --tab-text-color-active: #434B56;
  --tab-text-color-focused: #434B56;
  --tab-text-color-focused-active: #434B56;
  --tab-text-color-focused-active-current: #202430;
  --tab-text-color-focused-highlighted: #4B1B29;
  --table-add-button-border-color: #d2c9bd;
  --table-border-color: #d2c9bd;
  --table-drag-handle-color: #4E4D49;
  --table-header-border-color: #d2c9bd;
  --table-header-color: #202430;
  --table-header-size: 14px;
  --table-text-size: 14px;
  --tag-background: transparent;
  --tag-background-hover: #d2c9bd;
  --tag-color: #4B1B29;
  --tag-color-hover: #4B1B29;
  --text-accent: #4B1B29;
  --text-accent-hover: #7F6C5E;
  --text-faint: #4E4D49;
  --text-muted: #434B56;
  --text-normal: #202430;
  --titlebar-background: #efeff1;
  --titlebar-background-focused: #d2c9bd;
  --titlebar-border-color: #d2c9bd;
  --titlebar-text-color: #434B56;
  --titlebar-text-color-focused: #202430;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #202430;
  --vault-profile-color-hover: #202430;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 239, 241);
  color: rgb(32, 36, 48);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 244, 244);
  color: rgb(32, 36, 48);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 239, 241);
  color: rgb(32, 36, 48);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 239, 241);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(32, 36, 48);
}

body div#quartz-root {
  background-color: rgb(245, 244, 244);
  color: rgb(32, 36, 48);
}`,
    typography: `body .page article p > b, b {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body .page article p > em, em {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body .page article p > i, i {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body .page article p > strong, strong {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body .text-highlight {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body del {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: line-through rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body p {
  color: rgb(67, 75, 86);
  outline: rgb(67, 75, 86) none 0px;
  text-decoration: rgb(67, 75, 86);
  text-decoration-color: rgb(67, 75, 86);
}`,
    links: `body a.external, footer a {
  color: rgb(75, 27, 41);
  font-family: manrope, sans-serif;
  outline: rgb(75, 27, 41) none 0px;
  text-decoration: underline rgb(75, 27, 41);
  text-decoration-color: rgb(75, 27, 41);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(75, 27, 41);
  font-family: manrope, sans-serif;
  outline: rgb(75, 27, 41) none 0px;
  text-decoration: underline rgb(75, 27, 41);
  text-decoration-color: rgb(75, 27, 41);
}

body a.internal.broken {
  color: rgb(75, 27, 41);
  font-family: manrope, sans-serif;
  outline: rgb(75, 27, 41) none 0px;
}`,
    lists: `body dd {
  color: rgb(32, 36, 48);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(32, 36, 48);
}

body ol > li {
  color: rgb(32, 36, 48);
}

body ol.overflow {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body ul > li {
  color: rgb(32, 36, 48);
}

body ul.overflow {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 77, 73);
  text-decoration: rgb(78, 77, 73);
}

body blockquote {
  font-family: manrope, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body table {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  width: 173.234px;
}

body td {
  border-bottom-color: rgb(210, 201, 189);
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  color: rgb(32, 36, 48);
}

body th {
  border-bottom-color: rgb(210, 201, 189);
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  color: rgb(32, 36, 48);
}`,
    code: `body code {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body figcaption {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  margin-bottom: 14px;
  margin-top: 14px;
}

body img {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body video {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    embeds: `body .file-embed {
  background-color: rgb(239, 239, 241);
  border-bottom-color: rgb(67, 75, 86);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(32, 36, 48);
  color: rgb(32, 36, 48);
}

body .transclude {
  border-bottom-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body .transclude-inner {
  border-bottom-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: manrope, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: manrope, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(67, 75, 86);
  text-decoration: line-through rgb(67, 75, 86);
  text-decoration-color: rgb(67, 75, 86);
}

body input[type=checkbox] {
  border-bottom-color: rgb(102, 108, 104);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 108, 104);
  border-right-color: rgb(102, 108, 104);
  border-top-color: rgb(102, 108, 104);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -21px;
  width: 14px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='*'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='-'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='/'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='>'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='?'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='I'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='S'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='b'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='c'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='d'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='f'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='i'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='k'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='l'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='p'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='u'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body li.task-list-item[data-task='w'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body .callout[data-callout="abstract"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(32, 36, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(32, 36, 48);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(32, 36, 48);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 239, 241);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

body a.internal.tag-link::before {
  color: rgb(75, 27, 41);
}

body h1 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h2 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h3 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h4 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h5 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body h6 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
  text-decoration: rgb(32, 36, 48);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
  text-decoration: rgb(32, 36, 48);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
  text-decoration: rgb(32, 36, 48);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(127, 108, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(127, 108, 94);
  border-right-color: rgb(127, 108, 94);
  border-top-color: rgb(127, 108, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(127, 108, 94);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(50, 40, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 40, 49);
  border-right-color: rgb(50, 40, 49);
  border-top-color: rgb(50, 40, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 40, 49);
}`,
    footer: `body footer {
  background-color: rgb(239, 239, 241);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(67, 75, 86);
}

body footer ul li a {
  color: rgb(67, 75, 86);
  text-decoration: rgb(67, 75, 86);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(32, 36, 48);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  color: rgb(32, 36, 48);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body li.section-li > .section .meta {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

body ul.section-ul {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(50, 40, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 40, 49);
  border-right-color: rgb(50, 40, 49);
  border-top-color: rgb(50, 40, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 40, 49);
}

body .darkmode svg {
  color: rgb(50, 40, 49);
  stroke: rgb(50, 40, 49);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(67, 75, 86);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(67, 75, 86);
}

body .breadcrumb-element p {
  color: rgb(78, 77, 73);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  color: rgb(32, 36, 48);
}

body .metadata {
  border-bottom-color: rgb(210, 201, 189);
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  color: rgb(67, 75, 86);
  font-family: manrope, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
  font-family: manrope, sans-serif;
}

body .navigation-progress {
  background-color: rgb(239, 239, 241);
}

body .page-header h2.page-title {
  color: rgb(32, 36, 48);
  font-family: Cormorant, serif;
}

body abbr {
  color: rgb(32, 36, 48);
  text-decoration: underline dotted rgb(32, 36, 48);
}

body details {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body input[type=text] {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

body progress {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

body sub {
  color: rgb(32, 36, 48);
  font-size: 11.6667px;
}

body summary {
  color: rgb(32, 36, 48);
}

body sup {
  color: rgb(32, 36, 48);
  font-size: 11.6667px;
}`,
  },
};
