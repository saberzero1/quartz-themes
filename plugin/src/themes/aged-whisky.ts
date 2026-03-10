import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "aged-whisky", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #090909;
  --background-modifier-border-focus: #8d6a50;
  --background-modifier-border-hover: #8d6a50;
  --background-modifier-form-field: #090909;
  --background-modifier-form-field-hover: #090909;
  --background-primary: #090909;
  --background-primary-alt: #8d6a50;
  --background-secondary: #090909;
  --background-secondary-alt: #090909;
  --bases-cards-background: #090909;
  --bases-cards-cover-background: #8d6a50;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #090909;
  --bases-cards-shadow-hover: 0 0 0 1px #8d6a50;
  --bases-embed-border-color: #090909;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #adadad;
  --bases-table-border-color: #090909;
  --bases-table-cell-background-active: #090909;
  --bases-table-cell-background-disabled: #8d6a50;
  --bases-table-cell-shadow-active: 0 0 0 2px #8d6a50;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #8d6a50;
  --bases-table-header-background: #090909;
  --bases-table-header-color: #adadad;
  --bases-table-summary-background: #090909;
  --blur-background: color-mix(in srgb, #8e746d3a 65%, transparent) linear-gradient(#8e746d3a, color-mix(in srgb, #8e746d3a 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 0px;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: #090909;
  --canvas-card-label-color: #54453a;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #090909;
  --caret-color: #adadad;
  --checkbox-border-color: #8d6a50;
  --checkbox-border-color-hover: #8e746d;
  --checkbox-color: #8d6a50;
  --checkbox-color-hover: #8e746d;
  --checkbox-marker-color: #090909;
  --checkbox-radius: 0px;
  --checkbox-size: 12.5px;
  --checklist-done-color: #adadad;
  --clickable-icon-radius: 0px;
  --code-background: #141414;
  --code-border-color: #090909;
  --code-comment: #54453a;
  --code-normal: #adadad;
  --code-punctuation: #adadad;
  --code-radius: 0px;
  --codeFont: var(--font-text);
  --collapse-icon-color: #54453a;
  --collapse-icon-color-collapsed: #8d6a50;
  --color-base-00: #090909;
  --color-base-05: #090909;
  --color-base-10: #8d6a50;
  --color-base-100: #adadad;
  --color-base-20: #090909;
  --color-base-25: #090909;
  --color-base-30: #090909;
  --color-base-35: #8d6a50;
  --color-base-40: #8d6a50;
  --color-base-50: #54453a;
  --color-base-60: #5b5556;
  --color-base-70: #adadad;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --dropdown-background: #8e746d3a;
  --dropdown-background-hover: #8d6a50;
  --embed-block-shadow-hover: 0 0 0 1px #090909, inset 0 0 0 1px #090909;
  --file-header-background: #090909;
  --file-header-background-focused: #090909;
  --file-line-width: 550px;
  --flair-background: #8e746d3a;
  --flair-color: #adadad;
  --font-mermaid: 'yu gothic ui', sans-serif;
  --font-text: 'yu gothic ui', sans-serif;
  --font-text-size: 12.5px;
  --footnote-divider-color: #090909;
  --footnote-id-color: #adadad;
  --footnote-id-color-no-occurrences: #54453a;
  --footnote-radius: 0px;
  --graph-line: #8d6a50;
  --graph-node: #adadad;
  --graph-node-focused: #8d6a50;
  --graph-node-unresolved: #54453a;
  --graph-text: #adadad;
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --heading-formatting: #54453a;
  --highlight: var(--text-highlight-bg);
  --hr-color: #adadad35;
  --hr-thickness: 1px;
  --icon-color: #54453a;
  --icon-color-active: #8d6a50;
  --icon-color-focused: #8e746d;
  --icon-color-hover: #8e746d;
  --inline-title-color: #8e746d;
  --inline-title-font: 'palatino', serif;
  --inline-title-size: 1.5em;
  --inline-title-weight: 200;
  --input-date-separator: #54453a;
  --input-placeholder-color: #54453a;
  --input-radius: 0px;
  --interactive-hover: #8d6a50;
  --interactive-normal: #8e746d3a;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #8d6a50;
  --link-color-hover: #8e746d;
  --link-external-color: #8d6a50;
  --link-external-color-hover: #8e746d;
  --link-unresolved-color: #8d6a50;
  --list-marker-color: #54453a;
  --list-marker-color-collapsed: #8d6a50;
  --list-marker-color-hover: #adadad;
  --menu-background: #090909;
  --menu-border-color: #8d6a50;
  --menu-radius: 0px;
  --metadata-border-color: #090909;
  --metadata-divider-color: #090909;
  --metadata-input-height: 21.875px;
  --metadata-input-text-color: #adadad;
  --metadata-label-text-color: #adadad;
  --metadata-label-text-color-hover: #adadad;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8d6a50;
  --metadata-property-box-shadow-hover: 0 0 0 1px #8d6a50;
  --modal-background: #090909;
  --modal-border-color: #8d6a50;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #54453a;
  --nav-collapse-icon-color-collapsed: #54453a;
  --nav-heading-color: #adadad;
  --nav-heading-color-collapsed: #54453a;
  --nav-heading-color-collapsed-hover: #adadad;
  --nav-heading-color-hover: #adadad;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-color: #645f5a;
  --nav-item-color-active: #8e746d;
  --nav-item-color-highlighted: #8d6a50;
  --nav-item-color-hover: #8e746d;
  --nav-item-color-selected: #adadad;
  --nav-item-radius: 0px;
  --nav-tag-color: #54453a;
  --nav-tag-color-active: #adadad;
  --nav-tag-color-hover: #adadad;
  --nav-tag-radius: 0px;
  --pdf-background: #090909;
  --pdf-page-background: #090909;
  --pdf-shadow: 0 0 0 1px #090909;
  --pdf-sidebar-background: #090909;
  --pdf-thumbnail-shadow: 0 0 0 1px #090909;
  --pill-border-color: #090909;
  --pill-border-color-hover: #8d6a50;
  --pill-color: #adadad;
  --pill-color-hover: #adadad;
  --pill-color-remove: #54453a;
  --pill-color-remove-hover: #8d6a50;
  --popover-font-size: 12.5px;
  --prompt-background: #090909;
  --prompt-border-color: #8d6a50;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #8e746d3a 65%, transparent) linear-gradient(#8e746d3a, color-mix(in srgb, #8e746d3a 65%, transparent));
  --ribbon-background: #090909;
  --ribbon-background-collapsed: #090909;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #adadad;
  --search-icon-color: #adadad;
  --search-result-background: #090909;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #adadad;
  --setting-items-background: #8d6a50;
  --setting-items-border-color: #090909;
  --setting-items-radius: 0px;
  --sidebar-markdown-font-size: 11.25px;
  --slider-thumb-border-color: #8d6a50;
  --slider-thumb-radius: 0px;
  --slider-track-background: #8e746d;
  --status-bar-background: #090909;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #adadad;
  --suggestion-background: #090909;
  --tab-background-active: #090909;
  --tab-container-background: #090909;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 4px;
  --tab-switcher-background: #090909;
  --tab-switcher-menubar-background: linear-gradient(to top, #090909, transparent);
  --tab-text-color: #54453a;
  --tab-text-color-active: #856255;
  --tab-text-color-focused: #856255;
  --tab-text-color-focused-active: #adadad;
  --tab-text-color-focused-active-current: #adadad;
  --tab-text-color-focused-highlighted: #8d6a50;
  --table-add-button-border-color: #090909;
  --table-border-color: #090909;
  --table-drag-handle-color: #54453a;
  --table-header-border-color: #090909;
  --table-header-color: #adadad;
  --table-header-size: 12.5px;
  --table-text-size: 12.5px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-color: #abaeae;
  --tag-color-hover: #856255;
  --tertiary: var(--text-accent-hover);
  --text-accent: #8d6a50;
  --text-accent-hover: #8e746d;
  --text-faint: #54453a;
  --text-highlight-bg: transparent;
  --text-muted: #adadad;
  --text-normal: #adadad;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #090909;
  --titlebar-background-focused: #090909;
  --titlebar-border-color: #090909;
  --titlebar-text-color: #adadad;
  --titlebar-text-color-focused: #adadad;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #adadad;
  --vault-profile-color-hover: #adadad;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(9, 9, 9);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(173, 173, 173);
}

body div#quartz-root {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}`,
    typography: `body .page article p > b, b {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body .page article p > em, em {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body .page article p > i, i {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body .page article p > strong, strong {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body del {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: line-through rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body p {
  color: rgb(173, 173, 173);
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}`,
    links: `body a.external, footer a {
  color: rgb(141, 106, 80);
  font-family: "yu gothic ui", sans-serif;
  font-weight: 600;
  outline: rgb(141, 106, 80) none 0px;
  text-decoration: underline rgba(142, 116, 109, 0.5);
  text-decoration-color: rgba(142, 116, 109, 0.5);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(141, 106, 80);
  font-family: "yu gothic ui", sans-serif;
  font-weight: 600;
  outline: rgb(141, 106, 80) none 0px;
  text-decoration: underline rgba(142, 116, 109, 0.5);
  text-decoration-color: rgba(142, 116, 109, 0.5);
}

body a.internal.broken {
  color: rgb(141, 106, 80);
  font-family: "yu gothic ui", sans-serif;
  font-weight: 600;
  outline: rgb(141, 106, 80) none 0px;
}`,
    lists: `body dd {
  color: rgb(173, 173, 173);
}

body dl {
  margin-bottom: 12.5px;
  margin-top: 12.5px;
}

body dt {
  color: rgb(173, 173, 173);
}

body ol > li {
  color: rgb(173, 173, 173);
}

body ol.overflow {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body ul > li {
  color: rgb(173, 173, 173);
}

body ul.overflow {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(84, 69, 58);
  text-decoration: rgb(84, 69, 58);
}

body blockquote {
  font-family: "yu gothic ui", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body table {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  width: 161.953px;
}

body td {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

body th {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}`,
    code: `body code {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

body pre > code, pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body figcaption {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  font-size: 12.5px;
}

body figure {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  margin-bottom: 12.5px;
  margin-top: 12.5px;
}

body img {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(173, 173, 173);
  border-radius: 8px;
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    embeds: `body .file-embed {
  background-color: rgb(141, 106, 80);
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

body .transclude {
  border-bottom-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body .transclude-inner {
  border-bottom-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "yu gothic ui", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "yu gothic ui", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(173, 173, 173);
  text-decoration: line-through rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body input[type=checkbox] {
  border-bottom-color: rgb(141, 106, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 106, 80);
  border-right-color: rgb(141, 106, 80);
  border-top-color: rgb(141, 106, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -18.75px;
  width: 12.5px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='*'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='-'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='/'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='>'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='?'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='I'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='S'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='b'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='c'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='d'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='f'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='i'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='k'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='l'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='p'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='u'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body li.task-list-item[data-task='w'] {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(175, 169, 163);
  border-left-color: rgb(175, 169, 163);
  border-right-color: rgb(175, 169, 163);
  border-top-color: rgb(175, 169, 163);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

body .search > .search-container > .search-space {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(141, 106, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 106, 80);
  border-right-color: rgb(141, 106, 80);
  border-top-color: rgb(141, 106, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(173, 173, 173);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(173, 173, 173);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(173, 173, 173);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(141, 106, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 106, 80);
  border-right-color: rgb(141, 106, 80);
  border-top-color: rgb(141, 106, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 21.875px;
  border-bottom-right-radius: 21.875px;
  border-top-left-radius: 21.875px;
  border-top-right-radius: 21.875px;
}

body a.internal.tag-link::before {
  color: rgb(171, 174, 174);
}

body h1 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

body h2 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(142, 116, 109);
  font-family: palatino, serif;
}

body h3 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

body h4 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

body h5 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

body h6 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-corner {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-track {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(100, 95, 90);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(100, 95, 90);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
  text-decoration: rgb(100, 95, 90);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(142, 116, 109);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(142, 116, 109);
  border-right-color: rgb(142, 116, 109);
  border-top-color: rgb(142, 116, 109);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(142, 116, 109);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(84, 69, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 69, 58);
  border-right-color: rgb(84, 69, 58);
  border-top-color: rgb(84, 69, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(84, 69, 58);
}`,
    footer: `body footer {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(173, 173, 173);
}

body footer ul li a {
  color: rgb(173, 173, 173);
  text-decoration: rgb(173, 173, 173);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(173, 173, 173);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(100, 95, 90);
  text-decoration: rgb(100, 95, 90);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body li.section-li > .section .meta {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(100, 95, 90);
  text-decoration: rgb(100, 95, 90);
}

body ul.section-ul {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(84, 69, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 69, 58);
  border-right-color: rgb(84, 69, 58);
  border-top-color: rgb(84, 69, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(84, 69, 58);
}

body .darkmode svg {
  color: rgb(84, 69, 58);
  stroke: rgb(84, 69, 58);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

body .breadcrumb-element p {
  color: rgb(84, 69, 58);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

body .metadata {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
}

body .navigation-progress {
  background-color: rgb(9, 9, 9);
}

body .page-header h2.page-title {
  color: rgb(173, 173, 173);
  font-family: palatino, serif;
}

body abbr {
  color: rgb(173, 173, 173);
  text-decoration: underline dotted rgb(173, 173, 173);
}

body details {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body input[type=text] {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

body kbd {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
  font-size: 10.9375px;
  padding-bottom: 1.09375px;
  padding-left: 2.73438px;
  padding-right: 2.73438px;
  padding-top: 1.09375px;
}

body progress {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

body sub {
  color: rgb(173, 173, 173);
  font-size: 10.4167px;
}

body summary {
  color: rgb(173, 173, 173);
}

body sup {
  color: rgb(173, 173, 173);
  font-size: 10.4167px;
}`,
  },
  light: {},
};
