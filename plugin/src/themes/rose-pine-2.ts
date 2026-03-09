import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "rose-pine-2",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-accent: #191724;
  --background-modifier-border: #403d52;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #eb6f92;
  --background-modifier-error-hover: #eb6f92;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-hover: #403d52;
  --background-modifier-success: #31748f;
  --background-primary: #1f1d2e;
  --background-primary-alt: #191724;
  --background-secondary: #191724;
  --background-secondary-alt: #191724;
  --bases-cards-background: #1f1d2e;
  --bases-cards-cover-background: #191724;
  --bases-cards-shadow: 0 0 0 1px #403d52;
  --bases-embed-border-color: #403d52;
  --bases-group-heading-property-color: #6e6a86;
  --bases-table-border-color: #403d52;
  --bases-table-cell-background-active: #1f1d2e;
  --bases-table-cell-background-disabled: #191724;
  --bases-table-cell-shadow-focus: 0 0 0 2px #21202e;
  --bases-table-group-background: #191724;
  --bases-table-header-background: #1f1d2e;
  --bases-table-header-background-hover: #403d52;
  --bases-table-header-color: #6e6a86;
  --bases-table-summary-background: #1f1d2e;
  --bases-table-summary-background-hover: #403d52;
  --blockquote-border: #eb6f92;
  --blockquote-border-color: #21202e;
  --blur-background: color-mix(in srgb, #26233a 65%, transparent) linear-gradient(#26233a, color-mix(in srgb, #26233a 65%, transparent));
  --border-color: #403d52;
  --canvas-background: #1f1d2e;
  --canvas-card-label-color: #c4a7e7;
  --caret-color: #e0def4;
  --checkbox-border-color: #c4a7e7;
  --checkbox-border-color-hover: #6e6a86;
  --checkbox-color: #21202e;
  --checkbox-color-hover: #403d52;
  --checkbox-marker-color: #1f1d2e;
  --checklist-done-color: #6e6a86;
  --code-background: #191724;
  --code-block: #9ccfd8;
  --code-border-color: #403d52;
  --code-bracket-background: #403d52;
  --code-comment: #c4a7e7;
  --code-normal: #e0def4;
  --code-punctuation: #6e6a86;
  --collapse-icon-color: #c4a7e7;
  --collapse-icon-color-collapsed: #c4a7e7;
  --divider-color: #403d52;
  --divider-color-hover: #21202e;
  --dropdown-background: #26233a;
  --dropdown-background-hover: #21202e;
  --embed-block-shadow-hover: 0 0 0 1px #403d52, inset 0 0 0 1px #403d52;
  --embed-border-start: 2px solid #21202e;
  --file-header-background: #1f1d2e;
  --file-header-background-focused: #1f1d2e;
  --flair-background: #26233a;
  --flair-color: #e0def4;
  --font-family-accent: "Inter", "Segoe UI", "Helvetica Neue", sans-serif;
  --font-family-code: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  --font-family-editor: "Inter", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  --font-family-preview: Georgia, "Times New Roman", serif;
  --font-monospace: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  --font-size-code: 15px;
  --font-size-h1: 26px;
  --font-size-h2: 25px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 18px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 15px;
  --footnote-divider-color: #403d52;
  --footnote-id-color: #6e6a86;
  --footnote-id-color-no-occurrences: #c4a7e7;
  --footnote-input-background-active: #403d52;
  --graph-node: #6e6a86;
  --graph-node-focused: #c4a7e7;
  --graph-node-unresolved: #c4a7e7;
  --graph-text: #e0def4;
  --heading-formatting: #c4a7e7;
  --hr-color: #403d52;
  --icon-color: #e0def4;
  --icon-color-active: #c4a7e7;
  --icon-color-focused: #e0def4;
  --icon-color-hover: #e0def4;
  --inline-code: #c4a7e7;
  --input-date-separator: #c4a7e7;
  --input-placeholder-color: #c4a7e7;
  --interactive-accent: #21202e;
  --interactive-accent-active: #403d52;
  --interactive-accent-hover: #403d52;
  --interactive-hover: #21202e;
  --interactive-normal: #26233a;
  --link-color: #c4a7e7;
  --link-color-hover: #c4a7e7;
  --link-external-color: #c4a7e7;
  --link-external-color-hover: #c4a7e7;
  --link-unresolved-color: #c4a7e7;
  --list-marker-color: #c4a7e7;
  --list-marker-color-collapsed: #c4a7e7;
  --list-marker-color-hover: #6e6a86;
  --menu-background: #191724;
  --metadata-border-color: #403d52;
  --metadata-divider-color: #403d52;
  --metadata-input-background-active: #403d52;
  --metadata-input-text-color: #e0def4;
  --metadata-label-background-active: #403d52;
  --metadata-label-text-color: #6e6a86;
  --metadata-label-text-color-hover: #6e6a86;
  --metadata-property-background-active: #403d52;
  --modal-background: #1f1d2e;
  --nav-collapse-icon-color: #c4a7e7;
  --nav-collapse-icon-color-collapsed: #c4a7e7;
  --nav-heading-color: #e0def4;
  --nav-heading-color-collapsed: #c4a7e7;
  --nav-heading-color-collapsed-hover: #6e6a86;
  --nav-heading-color-hover: #e0def4;
  --nav-item-background-active: #403d52;
  --nav-item-background-hover: #403d52;
  --nav-item-color: #6e6a86;
  --nav-item-color-active: #e0def4;
  --nav-item-color-highlighted: #c4a7e7;
  --nav-item-color-hover: #e0def4;
  --nav-item-color-selected: #e0def4;
  --nav-tag-color: #c4a7e7;
  --nav-tag-color-active: #6e6a86;
  --nav-tag-color-hover: #6e6a86;
  --pdf-background: #1f1d2e;
  --pdf-page-background: #1f1d2e;
  --pdf-shadow: 0 0 0 1px #403d52;
  --pdf-sidebar-background: #1f1d2e;
  --pdf-thumbnail-shadow: 0 0 0 1px #403d52;
  --pill-border-color: #403d52;
  --pill-color: #6e6a86;
  --pill-color-hover: #e0def4;
  --pill-color-remove: #c4a7e7;
  --pill-color-remove-hover: #c4a7e7;
  --pre-code: #21202e;
  --prompt-background: #1f1d2e;
  --raised-background: color-mix(in srgb, #26233a 65%, transparent) linear-gradient(#26233a, color-mix(in srgb, #26233a 65%, transparent));
  --ribbon-background: #191724;
  --ribbon-background-collapsed: #1f1d2e;
  --rp-accent: #c4a7e7;
  --rp-base: #191724;
  --rp-foam: #9ccfd8;
  --rp-gold: #f6c177;
  --rp-h1: #eb6f92;
  --rp-h2: #c4a7e7;
  --rp-h3: #ebbcba;
  --rp-h4: #f6c177;
  --rp-h5: #9ccfd8;
  --rp-h6: #31748f;
  --rp-highlightHigh: #524f67;
  --rp-highlightLow: #21202e;
  --rp-highlightMed: #403d52;
  --rp-iris: #c4a7e7;
  --rp-love: #eb6f92;
  --rp-muted: #6e6a86;
  --rp-overlay: #26233a;
  --rp-pine: #31748f;
  --rp-rose: #ebbcba;
  --rp-subtle: #908caa;
  --rp-surface: #1f1d2e;
  --rp-text: #e0def4;
  --scrollbar-active-thumb-bg: #26233a;
  --scrollbar-bg: #26233a;
  --scrollbar-thumb-bg: #26233a;
  --search-clear-button-color: #6e6a86;
  --search-icon-color: #6e6a86;
  --search-result-background: #1f1d2e;
  --setting-group-heading-color: #e0def4;
  --setting-items-background: #191724;
  --setting-items-border-color: #403d52;
  --slider-track-background: #403d52;
  --status-bar-background: #191724;
  --status-bar-border-color: #403d52;
  --status-bar-text-color: #6e6a86;
  --suggestion-background: #1f1d2e;
  --tab-background-active: #1f1d2e;
  --tab-container-background: #191724;
  --tab-outline-color: #403d52;
  --tab-switcher-background: #191724;
  --tab-switcher-menubar-background: linear-gradient(to top, #191724, transparent);
  --tab-text-color: #c4a7e7;
  --tab-text-color-active: #6e6a86;
  --tab-text-color-focused: #6e6a86;
  --tab-text-color-focused-active: #6e6a86;
  --tab-text-color-focused-active-current: #e0def4;
  --tab-text-color-focused-highlighted: #c4a7e7;
  --table-add-button-border-color: #403d52;
  --table-border-color: #403d52;
  --table-drag-handle-background-active: #21202e;
  --table-drag-handle-color: #c4a7e7;
  --table-drag-handle-color-active: #c4a7e7;
  --table-header-border-color: #403d52;
  --table-header-color: #e0def4;
  --table-selection-border-color: #21202e;
  --tag-color: #c4a7e7;
  --tag-color-hover: #c4a7e7;
  --text-accent: #c4a7e7;
  --text-accent-hover: #c4a7e7;
  --text-error: #eb6f92;
  --text-error-hover: #eb6f92;
  --text-faint: #c4a7e7;
  --text-muted: #6e6a86;
  --text-normal: #e0def4;
  --text-on-accent: #c4a7e7;
  --text-selection: #524f67;
  --titlebar-background: #191724;
  --titlebar-background-focused: #191724;
  --titlebar-border-color: #403d52;
  --titlebar-text-color: #6e6a86;
  --titlebar-text-color-focused: #e0def4;
  --vault-profile-color: #e0def4;
  --vault-profile-color-hover: #e0def4;
  --vim-cursor: #ebbcba;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 61, 82);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 23, 36);
  border-left-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

body div#quartz-root {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body .page article p > em, em {
  color: rgb(196, 167, 231);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body .page article p > i, i {
  color: rgb(196, 167, 231);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body .page article p > strong, strong {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body del {
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: line-through rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body p {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(110, 106, 134) none 0px;
  text-decoration: rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}`,
    links: `body a.external, footer a {
  color: rgb(196, 167, 231);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: underline rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
  transition: 0.35s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(196, 167, 231);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: underline rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body a.internal.broken {
  color: rgb(196, 167, 231);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(196, 167, 231) none 0px;
}`,
    lists: `body dd {
  color: rgb(224, 222, 244);
}

body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

body dt {
  color: rgb(224, 222, 244);
}

body ol > li {
  color: rgb(224, 222, 244);
}

body ol.overflow {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body ul > li {
  color: rgb(224, 222, 244);
}

body ul.overflow {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(196, 167, 231);
  text-decoration: rgb(196, 167, 231);
}

body blockquote {
  background-color: rgb(25, 23, 36);
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body table {
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

body th {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(64, 61, 82);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(64, 61, 82);
}`,
    code: `body code {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(196, 167, 231);
  border-left-color: rgb(196, 167, 231);
  border-right-color: rgb(196, 167, 231);
  border-top-color: rgb(196, 167, 231);
  color: rgb(196, 167, 231);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(196, 167, 231);
}

body pre > code, pre:has(> code) {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body figcaption {
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-size: 18px;
}

body figure {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  margin-bottom: 18px;
  margin-top: 18px;
}

body img {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body video {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    embeds: `body .file-embed {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
}

body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .transclude {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(33, 32, 46);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .transclude-inner {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(33, 32, 46);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 106, 134);
  text-decoration: line-through rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 106, 134);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(31, 29, 46);
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 23, 36);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(64, 61, 82);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
}

body a.internal.tag-link::before {
  color: rgb(196, 167, 231);
}

body h1 {
  color: rgb(235, 111, 146);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h2 {
  color: rgb(196, 167, 231);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 222, 244);
  font-family: Georgia, "Times New Roman", serif;
}

body h3 {
  color: rgb(235, 188, 186);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h4 {
  color: rgb(246, 193, 119);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h5 {
  color: rgb(156, 207, 216);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h6 {
  color: rgb(49, 116, 143);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body hr {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  text-decoration: rgb(110, 106, 134);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  text-decoration: rgb(110, 106, 134);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  text-decoration: rgb(110, 106, 134);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(64, 61, 82);
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 222, 244);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}`,
    footer: `body footer {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(110, 106, 134);
  border-top-width: 0px;
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(224, 222, 244);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body li.section-li > .section .meta {
  color: rgb(110, 106, 134);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

body ul.section-ul {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .darkmode svg {
  color: rgb(224, 222, 244);
  stroke: rgb(224, 222, 244);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

body .breadcrumb-element p {
  color: rgb(196, 167, 231);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .metadata {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(110, 106, 134);
  font-family: Georgia, "Times New Roman", serif;
}

body .metadata-properties {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
  font-family: Georgia, "Times New Roman", serif;
}

body .navigation-progress {
  background-color: rgb(25, 23, 36);
}

body .page-header h2.page-title {
  color: rgb(224, 222, 244);
}

body abbr {
  color: rgb(224, 222, 244);
  text-decoration: underline dotted rgb(224, 222, 244);
}

body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body input[type=text] {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

body kbd {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

body progress {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body sub {
  color: rgb(224, 222, 244);
  font-size: 15px;
}

body summary {
  color: rgb(224, 222, 244);
}

body sup {
  color: rgb(224, 222, 244);
  font-size: 15px;
}`,
  },
  light: {
    base: `:root:root {
  --background-accent: #faf4ed;
  --background-modifier-border: #dfdad9;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #b4637a;
  --background-modifier-error-hover: #b4637a;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-hover: #dfdad9;
  --background-modifier-success: #286983;
  --background-primary: #fffaf3;
  --background-primary-alt: #faf4ed;
  --background-secondary: #faf4ed;
  --background-secondary-alt: #faf4ed;
  --bases-cards-background: #fffaf3;
  --bases-cards-cover-background: #faf4ed;
  --bases-cards-shadow: 0 0 0 1px #dfdad9;
  --bases-embed-border-color: #dfdad9;
  --bases-group-heading-property-color: #9893a5;
  --bases-table-border-color: #dfdad9;
  --bases-table-cell-background-active: #fffaf3;
  --bases-table-cell-background-disabled: #faf4ed;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f4ede8;
  --bases-table-group-background: #faf4ed;
  --bases-table-header-background: #fffaf3;
  --bases-table-header-background-hover: #dfdad9;
  --bases-table-header-color: #9893a5;
  --bases-table-summary-background: #fffaf3;
  --bases-table-summary-background-hover: #dfdad9;
  --blockquote-border: #b4637a;
  --blockquote-border-color: #f4ede8;
  --blur-background: color-mix(in srgb, #fffaf3 65%, transparent) linear-gradient(#fffaf3, color-mix(in srgb, #fffaf3 65%, transparent));
  --border-color: #dfdad9;
  --canvas-background: #fffaf3;
  --canvas-card-label-color: #907aa9;
  --caret-color: #575279;
  --checkbox-border-color: #907aa9;
  --checkbox-border-color-hover: #9893a5;
  --checkbox-color: #f4ede8;
  --checkbox-color-hover: #dfdad9;
  --checkbox-marker-color: #fffaf3;
  --checklist-done-color: #9893a5;
  --code-background: #faf4ed;
  --code-block: #56949f;
  --code-border-color: #dfdad9;
  --code-bracket-background: #dfdad9;
  --code-comment: #907aa9;
  --code-normal: #575279;
  --code-punctuation: #9893a5;
  --collapse-icon-color: #907aa9;
  --collapse-icon-color-collapsed: #907aa9;
  --divider-color: #dfdad9;
  --divider-color-hover: #f4ede8;
  --dropdown-background: #f2e9e1;
  --dropdown-background-hover: #f4ede8;
  --embed-block-shadow-hover: 0 0 0 1px #dfdad9, inset 0 0 0 1px #dfdad9;
  --embed-border-start: 2px solid #f4ede8;
  --file-header-background: #fffaf3;
  --file-header-background-focused: #fffaf3;
  --flair-background: #f2e9e1;
  --flair-color: #575279;
  --font-family-accent: "Inter", "Segoe UI", "Helvetica Neue", sans-serif;
  --font-family-code: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  --font-family-editor: "Inter", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  --font-family-preview: Georgia, "Times New Roman", serif;
  --font-monospace: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  --font-size-code: 15px;
  --font-size-h1: 26px;
  --font-size-h2: 25px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 18px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 15px;
  --footnote-divider-color: #dfdad9;
  --footnote-id-color: #9893a5;
  --footnote-id-color-no-occurrences: #907aa9;
  --footnote-input-background-active: #dfdad9;
  --graph-node: #9893a5;
  --graph-node-focused: #907aa9;
  --graph-node-unresolved: #907aa9;
  --graph-text: #575279;
  --heading-formatting: #907aa9;
  --hr-color: #dfdad9;
  --icon-color: #575279;
  --icon-color-active: #907aa9;
  --icon-color-focused: #575279;
  --icon-color-hover: #575279;
  --inline-code: #907aa9;
  --input-date-separator: #907aa9;
  --input-placeholder-color: #907aa9;
  --interactive-accent: #f4ede8;
  --interactive-accent-active: #dfdad9;
  --interactive-accent-hover: #dfdad9;
  --interactive-hover: #f4ede8;
  --interactive-normal: #f2e9e1;
  --link-color: #907aa9;
  --link-color-hover: #907aa9;
  --link-external-color: #907aa9;
  --link-external-color-hover: #907aa9;
  --link-unresolved-color: #907aa9;
  --list-marker-color: #907aa9;
  --list-marker-color-collapsed: #907aa9;
  --list-marker-color-hover: #9893a5;
  --menu-background: #faf4ed;
  --metadata-border-color: #dfdad9;
  --metadata-divider-color: #dfdad9;
  --metadata-input-background-active: #dfdad9;
  --metadata-input-text-color: #575279;
  --metadata-label-background-active: #dfdad9;
  --metadata-label-text-color: #9893a5;
  --metadata-label-text-color-hover: #9893a5;
  --metadata-property-background-active: #dfdad9;
  --modal-background: #fffaf3;
  --nav-collapse-icon-color: #907aa9;
  --nav-collapse-icon-color-collapsed: #907aa9;
  --nav-heading-color: #575279;
  --nav-heading-color-collapsed: #907aa9;
  --nav-heading-color-collapsed-hover: #9893a5;
  --nav-heading-color-hover: #575279;
  --nav-item-background-active: #dfdad9;
  --nav-item-background-hover: #dfdad9;
  --nav-item-color: #9893a5;
  --nav-item-color-active: #575279;
  --nav-item-color-highlighted: #907aa9;
  --nav-item-color-hover: #575279;
  --nav-item-color-selected: #575279;
  --nav-tag-color: #907aa9;
  --nav-tag-color-active: #9893a5;
  --nav-tag-color-hover: #9893a5;
  --pdf-background: #fffaf3;
  --pdf-page-background: #fffaf3;
  --pdf-sidebar-background: #fffaf3;
  --pill-border-color: #dfdad9;
  --pill-color: #9893a5;
  --pill-color-hover: #575279;
  --pill-color-remove: #907aa9;
  --pill-color-remove-hover: #907aa9;
  --pre-code: #f4ede8;
  --prompt-background: #fffaf3;
  --raised-background: color-mix(in srgb, #fffaf3 65%, transparent) linear-gradient(#fffaf3, color-mix(in srgb, #fffaf3 65%, transparent));
  --ribbon-background: #faf4ed;
  --ribbon-background-collapsed: #fffaf3;
  --rp-accent: #907aa9;
  --rp-base: #faf4ed;
  --rp-foam: #56949f;
  --rp-gold: #ea9d34;
  --rp-h1: #b4637a;
  --rp-h2: #907aa9;
  --rp-h3: #d7827e;
  --rp-h4: #ea9d34;
  --rp-h5: #56949f;
  --rp-h6: #286983;
  --rp-highlightHigh: #cecacd;
  --rp-highlightLow: #f4ede8;
  --rp-highlightMed: #dfdad9;
  --rp-iris: #907aa9;
  --rp-love: #b4637a;
  --rp-muted: #9893a5;
  --rp-overlay: #f2e9e1;
  --rp-pine: #286983;
  --rp-rose: #d7827e;
  --rp-subtle: #797593;
  --rp-surface: #fffaf3;
  --rp-text: #575279;
  --scrollbar-active-thumb-bg: #f2e9e1;
  --scrollbar-bg: #f2e9e1;
  --scrollbar-thumb-bg: #f2e9e1;
  --search-clear-button-color: #9893a5;
  --search-icon-color: #9893a5;
  --search-result-background: #fffaf3;
  --setting-group-heading-color: #575279;
  --setting-items-background: #faf4ed;
  --setting-items-border-color: #dfdad9;
  --slider-track-background: #dfdad9;
  --status-bar-background: #faf4ed;
  --status-bar-border-color: #dfdad9;
  --status-bar-text-color: #9893a5;
  --suggestion-background: #fffaf3;
  --tab-background-active: #fffaf3;
  --tab-container-background: #faf4ed;
  --tab-outline-color: #dfdad9;
  --tab-switcher-background: #faf4ed;
  --tab-switcher-menubar-background: linear-gradient(to top, #faf4ed, transparent);
  --tab-text-color: #907aa9;
  --tab-text-color-active: #9893a5;
  --tab-text-color-focused: #9893a5;
  --tab-text-color-focused-active: #9893a5;
  --tab-text-color-focused-active-current: #575279;
  --tab-text-color-focused-highlighted: #907aa9;
  --table-add-button-border-color: #dfdad9;
  --table-border-color: #dfdad9;
  --table-drag-handle-background-active: #f4ede8;
  --table-drag-handle-color: #907aa9;
  --table-drag-handle-color-active: #907aa9;
  --table-header-border-color: #dfdad9;
  --table-header-color: #575279;
  --table-selection-border-color: #f4ede8;
  --tag-color: #907aa9;
  --tag-color-hover: #907aa9;
  --text-accent: #907aa9;
  --text-accent-hover: #907aa9;
  --text-error: #b4637a;
  --text-error-hover: #b4637a;
  --text-faint: #907aa9;
  --text-muted: #9893a5;
  --text-normal: #575279;
  --text-on-accent: #907aa9;
  --text-selection: #cecacd;
  --titlebar-background: #faf4ed;
  --titlebar-background-focused: #faf4ed;
  --titlebar-border-color: #dfdad9;
  --titlebar-text-color: #9893a5;
  --titlebar-text-color-focused: #575279;
  --vault-profile-color: #575279;
  --vault-profile-color-hover: #575279;
  --vim-cursor: #d7827e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 217);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 244, 237);
  border-left-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration: rgb(180, 99, 122);
  text-decoration-color: rgb(180, 99, 122);
}

body .page article p > em, em {
  color: rgb(144, 122, 169);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration: rgb(144, 122, 169);
  text-decoration-color: rgb(144, 122, 169);
}

body .page article p > i, i {
  color: rgb(144, 122, 169);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration: rgb(144, 122, 169);
  text-decoration-color: rgb(144, 122, 169);
}

body .page article p > strong, strong {
  background-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration: rgb(180, 99, 122);
  text-decoration-color: rgb(180, 99, 122);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body del {
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: line-through rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body p {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  outline: rgb(152, 147, 165) none 0px;
  text-decoration: rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}`,
    links: `body a.external, footer a {
  color: rgb(144, 122, 169);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration: underline rgb(144, 122, 169);
  text-decoration-color: rgb(144, 122, 169);
  transition: 0.35s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(144, 122, 169);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(144, 122, 169) none 0px;
  text-decoration: underline rgb(144, 122, 169);
  text-decoration-color: rgb(144, 122, 169);
}

body a.internal.broken {
  color: rgb(144, 122, 169);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(144, 122, 169) none 0px;
}`,
    lists: `body dd {
  color: rgb(87, 82, 121);
}

body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

body dt {
  color: rgb(87, 82, 121);
}

body ol > li {
  color: rgb(87, 82, 121);
}

body ol.overflow {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ul > li {
  color: rgb(87, 82, 121);
}

body ul.overflow {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(144, 122, 169);
  text-decoration: rgb(144, 122, 169);
}

body blockquote {
  background-color: rgb(250, 244, 237);
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body table {
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body th {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(223, 218, 217);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(223, 218, 217);
}`,
    code: `body code {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(144, 122, 169);
  border-left-color: rgb(144, 122, 169);
  border-right-color: rgb(144, 122, 169);
  border-top-color: rgb(144, 122, 169);
  color: rgb(144, 122, 169);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(144, 122, 169);
}

body pre > code, pre:has(> code) {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body figcaption {
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-size: 18px;
}

body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  margin-bottom: 18px;
  margin-top: 18px;
}

body img {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `body .file-embed {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(244, 237, 232);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(244, 237, 232);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(152, 147, 165);
  text-decoration: line-through rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}

body input[type=checkbox] {
  border-bottom-color: rgb(152, 147, 165);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 250, 243);
}

body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(223, 218, 217);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
}

body a.internal.tag-link::before {
  color: rgb(144, 122, 169);
}

body h1 {
  color: rgb(180, 99, 122);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h2 {
  color: rgb(144, 122, 169);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(87, 82, 121);
  font-family: Georgia, "Times New Roman", serif;
}

body h3 {
  color: rgb(215, 130, 126);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h4 {
  color: rgb(234, 157, 52);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h5 {
  color: rgb(86, 148, 159);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body h6 {
  color: rgb(40, 105, 131);
  font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

body hr {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  text-decoration: rgb(152, 147, 165);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  text-decoration: rgb(152, 147, 165);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
  text-decoration: rgb(152, 147, 165);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(223, 218, 217);
  border-bottom-color: rgb(87, 82, 121);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 82, 121);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    footer: `body footer {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(152, 147, 165);
  border-top-width: 0px;
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(87, 82, 121);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body li.section-li > .section .meta {
  color: rgb(152, 147, 165);
  font-family: Inter, "Segoe UI", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

body .breadcrumb-element p {
  color: rgb(144, 122, 169);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .metadata {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(152, 147, 165);
  font-family: Georgia, "Times New Roman", serif;
}

body .metadata-properties {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
  font-family: Georgia, "Times New Roman", serif;
}

body .navigation-progress {
  background-color: rgb(250, 244, 237);
}

body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

body abbr {
  color: rgb(87, 82, 121);
  text-decoration: underline dotted rgb(87, 82, 121);
}

body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body input[type=text] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

body kbd {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body sub {
  color: rgb(87, 82, 121);
  font-size: 15px;
}

body summary {
  color: rgb(87, 82, 121);
}

body sup {
  color: rgb(87, 82, 121);
  font-size: 15px;
}`,
  },
};
