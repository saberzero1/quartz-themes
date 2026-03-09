import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "light-bright",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lato", "roboto", "work-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(80, 74, 94);
  --background-modifier-form-field: rgb(24, 22, 29);
  --background-modifier-form-field-hover: rgb(24, 22, 29);
  --background-primary: rgb(63, 59, 74);
  --background-primary-alt: rgb(46, 43, 54);
  --background-secondary: rgb(49, 46, 56);
  --background-secondary-alt: rgb(80, 74, 94);
  --background-tertiary: rgb(184, 153, 255);
  --bases-cards-background: rgb(63, 59, 74);
  --bases-cards-cover-background: rgb(46, 43, 54);
  --bases-cards-shadow: 0 0 0 1px rgb(80, 74, 94);
  --bases-embed-border-color: rgb(80, 74, 94);
  --bases-group-heading-property-color: rgb(172, 152, 221);
  --bases-group-heading-property-weight: 300;
  --bases-table-border-color: rgb(80, 74, 94);
  --bases-table-cell-background-active: rgb(63, 59, 74);
  --bases-table-cell-background-disabled: rgb(46, 43, 54);
  --bases-table-group-background: rgb(46, 43, 54);
  --bases-table-header-background: rgb(63, 59, 74);
  --bases-table-header-color: rgb(172, 152, 221);
  --bases-table-header-weight: 300;
  --bases-table-row-background-hover: rgba(138, 92, 245, 0.33);
  --bases-table-summary-background: rgb(63, 59, 74);
  --blur-background: color-mix(in srgb, rgb(80, 74, 94) 65%, transparent) linear-gradient(rgb(80, 74, 94), color-mix(in srgb, rgb(80, 74, 94) 65%, transparent));
  --bold-weight: 600;
  --callout-blend-mode: normal;
  --callout-border-opacity: 25%;
  --callout-title-weight: 500;
  --canvas-background: rgb(63, 59, 74);
  --canvas-dot-pattern: rgb(80, 74, 94);
  --cards-border-width: 1px;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: rgb(200, 194, 214);
  --checkbox-border-color-hover: rgb(172, 152, 221);
  --checkbox-marker-color: rgb(63, 59, 74);
  --checkbox-radius: 100px;
  --checklist-done-color: rgb(172, 152, 221);
  --checklist-done-decoration: none;
  --code-background: rgb(46, 43, 54);
  --code-border-color: rgb(80, 74, 94);
  --code-normal: rgb(200, 194, 214);
  --code-punctuation: rgb(172, 152, 221);
  --color-base-00: rgb(63, 59, 74);
  --color-base-10: rgb(46, 43, 54);
  --color-base-100: rgb(200, 194, 214);
  --color-base-20: rgb(49, 46, 56);
  --color-base-25: rgb(24, 22, 29);
  --color-base-30: rgb(80, 74, 94);
  --color-base-60: rgb(30, 27, 40);
  --color-base-70: rgb(172, 152, 221);
  --divider-color: rgb(80, 74, 94);
  --divider-width: 0px;
  --dropdown-background: rgb(80, 74, 94);
  --embed-block-shadow-hover: 0 0 0 1px rgb(80, 74, 94), inset 0 0 0 1px rgb(80, 74, 94);
  --file-header-background: rgb(63, 59, 74);
  --file-header-background-focused: rgb(63, 59, 74);
  --file-header-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --flair-background: rgb(80, 74, 94);
  --flair-color: rgb(200, 194, 214);
  --floating-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.02), 0 2.3px 17.9px rgba(0, 0, 0, 0.03), 0 12px 33.4px rgba(0, 0, 0, 0.03), 0 20px 80px rgba(0, 0, 0, 0.02);
  --font-bold: 600;
  --font-default: 'Roboto', 'Assistant', sans-serif;
  --font-interface: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --font-light: 100;
  --font-mermaid: '??', '??', 'Roboto', 'Assistant', sans-serif;
  --font-normal: 300;
  --font-text: '??', '??', 'Roboto', 'Assistant', sans-serif;
  --font-weight: 300;
  --footnote-divider-color: rgb(80, 74, 94);
  --footnote-id-color: rgb(172, 152, 221);
  --graph-node: rgb(172, 152, 221);
  --graph-text: rgb(200, 194, 214);
  --h1-font: 'Lato';
  --h1-size: 2.17em;
  --h1-weight: 600;
  --h2-font: 'Work Sans';
  --h2-line-height: 1.6em;
  --h2-size: 2em;
  --h2-weight: 400;
  --h3-weight: 400;
  --h4-weight: 400;
  --h5-weight: 400;
  --h6-weight: 400;
  --hr-color: rgb(80, 74, 94);
  --icon-color: rgb(172, 152, 221);
  --icon-color-focused: rgb(200, 194, 214);
  --icon-color-hover: rgb(172, 152, 221);
  --inline-title-font: 'Lato';
  --inline-title-size: 2.17em;
  --inline-title-weight: 600;
  --input-font-weight: 300;
  --interactive-normal: rgb(80, 74, 94);
  --link-decoration: none;
  --link-weight: 300;
  --list-marker-color-hover: rgb(172, 152, 221);
  --list-spacing: 0.5em;
  --menu-background: rgb(49, 46, 56);
  --metadata-border-color: rgb(80, 74, 94);
  --metadata-divider-color: rgb(80, 74, 94);
  --metadata-input-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --metadata-input-text-color: rgb(200, 194, 214);
  --metadata-label-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --metadata-label-text-color: rgb(172, 152, 221);
  --metadata-label-text-color-hover: rgb(172, 152, 221);
  --modal-background: rgb(63, 59, 74);
  --nav-heading-color: rgb(200, 194, 214);
  --nav-heading-color-collapsed-hover: rgb(172, 152, 221);
  --nav-heading-color-hover: rgb(200, 194, 214);
  --nav-item-color: rgb(172, 152, 221);
  --nav-item-color-active: rgb(200, 194, 214);
  --nav-item-color-hover: rgb(200, 194, 214);
  --nav-item-color-selected: rgb(200, 194, 214);
  --nav-tag-color-active: rgb(172, 152, 221);
  --nav-tag-color-hover: rgb(172, 152, 221);
  --pdf-background: rgb(63, 59, 74);
  --pdf-page-background: rgb(63, 59, 74);
  --pdf-shadow: 0 0 0 1px rgb(80, 74, 94);
  --pdf-sidebar-background: rgb(63, 59, 74);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(80, 74, 94);
  --pill-border-color: rgb(80, 74, 94);
  --pill-color: rgb(172, 152, 221);
  --pill-color-hover: rgb(200, 194, 214);
  --prompt-background: rgb(63, 59, 74);
  --raised-background: color-mix(in srgb, rgb(80, 74, 94) 65%, transparent) linear-gradient(rgb(80, 74, 94), color-mix(in srgb, rgb(80, 74, 94) 65%, transparent));
  --ribbon-background: rgb(49, 46, 56);
  --ribbon-background-collapsed: rgb(63, 59, 74);
  --search-clear-button-color: rgb(172, 152, 221);
  --search-icon-color: rgb(172, 152, 221);
  --search-result-background: rgb(63, 59, 74);
  --setting-group-heading-color: rgb(200, 194, 214);
  --setting-items-background: rgb(46, 43, 54);
  --setting-items-border-color: rgb(80, 74, 94);
  --slider-track-background: rgb(80, 74, 94);
  --status-bar-background: rgb(49, 46, 56);
  --status-bar-border-color: rgb(80, 74, 94);
  --status-bar-text-color: rgb(172, 152, 221);
  --suggestion-background: rgb(63, 59, 74);
  --tab-background-active: transparent;
  --tab-container-background: rgb(49, 46, 56);
  --tab-outline-color: transparent;
  --tab-switcher-background: rgb(49, 46, 56);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(49, 46, 56), transparent);
  --tab-text-color-active: rgb(197, 182, 252);
  --tab-text-color-focused: rgb(172, 152, 221);
  --tab-text-color-focused-active: rgb(197, 182, 252);
  --tab-text-color-focused-active-current: rgb(197, 182, 252);
  --table-add-button-border-color: rgb(80, 74, 94);
  --table-add-button-border-width: 0px;
  --table-background: rgba(138, 92, 245, 0.33);
  --table-border-color: rgb(80, 74, 94);
  --table-border-width: 0px;
  --table-column-alt-background: none;
  --table-column-first-border-width: 0px;
  --table-column-last-border-width: 0px;
  --table-column-max-width: 100%;
  --table-header-background: rgb(166, 139, 249);
  --table-header-background-hover: rgb(197, 182, 252);
  --table-header-border-color: rgb(80, 74, 94);
  --table-header-border-width: 0px;
  --table-header-color: white;
  --table-header-weight: 600;
  --table-row-alt-background: rgba(138, 92, 245, 0.3);
  --table-row-alt-background-hover: rgba(138, 92, 245, 0.33);
  --table-row-background-hover: rgba(138, 92, 245, 0.33);
  --table-row-last-border-width: 0px;
  --table-white-space: normal;
  --tag-decoration: underline;
  --text-muted: rgb(172, 152, 221);
  --text-normal: rgb(200, 194, 214);
  --titlebar-background: transparent;
  --titlebar-background-focused: rgb(80, 74, 94);
  --titlebar-border-color: rgb(80, 74, 94);
  --titlebar-text-color: rgb(172, 152, 221);
  --titlebar-text-color-focused: rgb(200, 194, 214);
  --titlebar-text-weight: 600;
  --vault-name-color: rgb(172, 152, 221);
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 600;
  --vault-profile-color: rgb(200, 194, 214);
  --vault-profile-color-hover: rgb(200, 194, 214);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 46, 56);
  color: rgb(200, 194, 214);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(62, 58, 72);
  color: rgb(200, 194, 214);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(200, 194, 214);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 46, 56);
  border-left-color: rgb(80, 74, 94);
  color: rgb(200, 194, 214);
}

body div#quartz-root {
  background-color: rgb(49, 46, 56);
  color: rgb(200, 194, 214);
}`,
    typography: `body .page article p > b, b {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body .page article p > em, em {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body .page article p > i, i {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body .page article p > strong, strong {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body .text-highlight {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body del {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: line-through rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body p {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(172, 152, 221) none 0px;
  text-decoration: rgb(172, 152, 221);
  text-decoration-color: rgb(172, 152, 221);
}`,
    links: `body a.external, footer a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(200, 194, 214);
}

body dt {
  color: rgb(200, 194, 214);
  font-weight: 300;
}

body ol > li {
  color: rgb(200, 194, 214);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body ul > li {
  color: rgb(200, 194, 214);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(184, 153, 255, 0.08);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body table {
  border-bottom-color: rgb(200, 194, 214);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  width: 600px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(138, 92, 245, 0.33);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(138, 92, 245, 0.3);
}

body td {
  border-bottom-color: rgb(80, 74, 94);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 74, 94);
  border-left-width: 0px;
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
  border-top-color: rgb(80, 74, 94);
  border-top-width: 0px;
  color: rgb(200, 194, 214);
  font-weight: 300;
}

body th {
  border-bottom-color: rgb(80, 74, 94);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 74, 94);
  border-left-width: 0px;
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
  border-top-color: rgb(80, 74, 94);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  text-align: center;
}

body thead {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body tr {
  background-color: rgb(166, 138, 249);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    code: `body code {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(200, 194, 214);
}

body pre > code, pre:has(> code) {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
}

body pre:has(> code) {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
}`,
    images: `body audio {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body figcaption {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body figure {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body img {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body video {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    embeds: `body .file-embed {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
}

body .footnotes {
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

body .transclude {
  background-color: rgba(184, 153, 255, 0.08);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

body .transclude-inner {
  background-color: rgba(184, 153, 255, 0.08);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
  text-decoration-color: rgb(172, 152, 221);
}

body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='*'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='-'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='/'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='>'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='?'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='I'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='S'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='b'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='c'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='d'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='f'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='i'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='k'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='l'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='p'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='u'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body li.task-list-item[data-task='w'] {
  color: rgb(200, 194, 214);
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 500;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(24, 23, 28);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(200, 194, 214);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(62, 58, 72);
}

body .search > .search-container > .search-space > * {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(200, 194, 214) none 0px;
  text-decoration: rgb(200, 194, 214);
  text-decoration-color: rgb(200, 194, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(200, 194, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(200, 194, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(200, 194, 214);
  font-weight: 300;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 46, 56);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(200, 194, 214);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

body h1 {
  color: rgb(200, 194, 214);
  font-family: Lato;
}

body h2 {
  color: rgb(200, 194, 214);
  font-family: "Work Sans";
}

body h2.page-title, h2.page-title a {
  color: rgb(200, 194, 214);
  font-family: Lato;
}

body h3 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body h4 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body h5 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body h6 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body hr {
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

body ::-webkit-scrollbar {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

body ::-webkit-scrollbar-corner {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}

body ::-webkit-scrollbar-track {
  background: rgb(49, 46, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 46, 56);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(172, 152, 221);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(172, 152, 221);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(172, 152, 221);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
}`,
    footer: `body footer {
  background-color: rgb(49, 46, 56);
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body footer ul li a {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(200, 194, 214);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body li.section-li > .section .meta {
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(172, 152, 221);
  text-decoration: rgb(172, 152, 221);
}

body ul.section-ul {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
}

body .darkmode svg {
  color: rgb(172, 152, 221);
  stroke: rgb(172, 152, 221);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
}

body .breadcrumb-element p {
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

body .metadata {
  border-bottom-color: rgb(80, 74, 94);
  border-left-color: rgb(80, 74, 94);
  border-right-color: rgb(80, 74, 94);
  border-top-color: rgb(80, 74, 94);
  color: rgb(172, 152, 221);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .navigation-progress {
  background-color: rgb(49, 46, 56);
}

body .page-header h2.page-title {
  color: rgb(200, 194, 214);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body abbr {
  color: rgb(200, 194, 214);
  text-decoration: underline dotted rgb(200, 194, 214);
}

body details {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body input[type=text] {
  border-bottom-color: rgb(172, 152, 221);
  border-left-color: rgb(172, 152, 221);
  border-right-color: rgb(172, 152, 221);
  border-top-color: rgb(172, 152, 221);
  color: rgb(172, 152, 221);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body kbd {
  background-color: rgb(45, 42, 53);
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
  color: rgb(200, 194, 214);
}

body progress {
  border-bottom-color: rgb(200, 194, 214);
  border-left-color: rgb(200, 194, 214);
  border-right-color: rgb(200, 194, 214);
  border-top-color: rgb(200, 194, 214);
}

body sub {
  color: rgb(200, 194, 214);
}

body summary {
  color: rgb(200, 194, 214);
  font-weight: 300;
}

body sup {
  color: rgb(200, 194, 214);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(223, 218, 236);
  --background-modifier-border-focus: rgb(209, 193, 245);
  --background-modifier-border-hover: rgb(216, 203, 246);
  --background-modifier-error: #E93147;
  --background-modifier-error-hover: #E93147;
  --background-modifier-form-field: rgb(255, 255, 255);
  --background-modifier-form-field-hover: rgb(255, 255, 255);
  --background-modifier-success: #08B94E;
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(244, 242, 248);
  --background-secondary: rgb(240, 237, 247);
  --background-secondary-alt: rgb(246, 244, 250);
  --background-tertiary: rgb(255, 255, 255);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(244, 242, 248);
  --bases-cards-shadow: 0 0 0 1px rgb(223, 218, 236);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(216, 203, 246);
  --bases-embed-border-color: rgb(223, 218, 236);
  --bases-group-heading-property-color: rgb(117, 102, 153);
  --bases-group-heading-property-weight: 300;
  --bases-table-border-color: rgb(223, 218, 236);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(244, 242, 248);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(209, 193, 245);
  --bases-table-group-background: rgb(244, 242, 248);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-color: rgb(117, 102, 153);
  --bases-table-header-weight: 300;
  --bases-table-row-background-hover: rgba(138, 92, 245, 0.2);
  --bases-table-summary-background: rgb(255, 255, 255);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --bold-weight: 600;
  --callout-blend-mode: normal;
  --callout-border-opacity: 25%;
  --callout-title-weight: 500;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgb(153, 142, 180);
  --canvas-dot-pattern: rgb(223, 218, 236);
  --cards-border-width: 1px;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: rgb(75, 73, 80);
  --checkbox-border-color: rgb(153, 142, 180);
  --checkbox-border-color-hover: rgb(117, 102, 153);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checkbox-radius: 100px;
  --checklist-done-color: rgb(117, 102, 153);
  --checklist-done-decoration: none;
  --code-background: rgb(244, 242, 248);
  --code-border-color: rgb(223, 218, 236);
  --code-comment: rgb(153, 142, 180);
  --code-keyword: #D53984;
  --code-normal: rgb(75, 73, 80);
  --code-operator: #E93147;
  --code-punctuation: rgb(117, 102, 153);
  --code-string: #08B94E;
  --code-tag: #E93147;
  --code-value: #7852EE;
  --collapse-icon-color: rgb(153, 142, 180);
  --color-base-00: rgb(255, 255, 255);
  --color-base-05: rgb(246, 244, 250);
  --color-base-10: rgb(244, 242, 248);
  --color-base-100: rgb(75, 73, 80);
  --color-base-20: rgb(240, 237, 247);
  --color-base-25: rgb(73, 21, 193);
  --color-base-30: rgb(223, 218, 236);
  --color-base-35: rgb(216, 203, 246);
  --color-base-40: rgb(209, 193, 245);
  --color-base-50: rgb(154, 144, 178);
  --color-base-60: rgb(168, 144, 223);
  --color-base-70: rgb(138, 135, 146);
  --color-blue: #086DDD;
  --color-green: #08B94E;
  --color-pink: #D53984;
  --color-purple: #7852EE;
  --color-red: #E93147;
  --divider-color: rgb(223, 218, 236);
  --divider-width: 0px;
  --dropdown-background: rgb(255, 255, 255);
  --dropdown-background-hover: rgb(244, 242, 248);
  --embed-block-shadow-hover: 0 0 0 1px rgb(223, 218, 236), inset 0 0 0 1px rgb(223, 218, 236);
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --file-header-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --flair-background: rgb(255, 255, 255);
  --flair-color: rgb(75, 73, 80);
  --floating-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.01), 0 4px 8px rgba(0, 0, 0, 0.02), 0 2.3px 17.9px rgba(0, 0, 0, 0.03), 0 12px 33.4px rgba(0, 0, 0, 0.03), 0 20px 80px rgba(0, 0, 0, 0.02);
  --font-bold: 600;
  --font-default: 'Roboto', 'Assistant', sans-serif;
  --font-interface: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --font-light: 100;
  --font-mermaid: '??', '??', 'Roboto', 'Assistant', sans-serif;
  --font-normal: 300;
  --font-text: '??', '??', 'Roboto', 'Assistant', sans-serif;
  --font-weight: 300;
  --footnote-divider-color: rgb(223, 218, 236);
  --footnote-id-color: rgb(117, 102, 153);
  --footnote-id-color-no-occurrences: rgb(153, 142, 180);
  --graph-line: rgb(216, 203, 246);
  --graph-node: rgb(117, 102, 153);
  --graph-node-tag: #08B94E;
  --graph-node-unresolved: rgb(153, 142, 180);
  --graph-text: rgb(75, 73, 80);
  --h1-color: rgb(61, 57, 70);
  --h1-font: 'Lato';
  --h1-size: 2.17em;
  --h1-weight: 600;
  --h2-color: rgb(61, 57, 70);
  --h2-font: 'Work Sans';
  --h2-line-height: 1.6em;
  --h2-size: 2em;
  --h2-weight: 400;
  --h3-color: rgb(61, 57, 70);
  --h3-weight: 400;
  --h4-color: rgb(61, 57, 70);
  --h4-weight: 400;
  --h5-color: rgb(61, 57, 70);
  --h5-weight: 400;
  --h6-color: rgb(61, 57, 70);
  --h6-weight: 400;
  --heading-formatting: rgb(153, 142, 180);
  --hr-color: rgb(223, 218, 236);
  --icon-color: rgb(117, 102, 153);
  --icon-color-focused: rgb(75, 73, 80);
  --icon-color-hover: rgb(117, 102, 153);
  --inline-title-color: rgb(61, 57, 70);
  --inline-title-font: 'Lato';
  --inline-title-size: 2.17em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(153, 142, 180);
  --input-font-weight: 300;
  --input-placeholder-color: rgb(153, 142, 180);
  --interactive-hover: rgb(244, 242, 248);
  --interactive-normal: rgb(255, 255, 255);
  --link-decoration: none;
  --link-weight: 300;
  --list-marker-color: rgb(153, 142, 180);
  --list-marker-color-hover: rgb(117, 102, 153);
  --list-spacing: 0.5em;
  --menu-background: rgb(240, 237, 247);
  --menu-border-color: rgb(216, 203, 246);
  --metadata-border-color: rgb(223, 218, 236);
  --metadata-divider-color: rgb(223, 218, 236);
  --metadata-input-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --metadata-input-text-color: rgb(75, 73, 80);
  --metadata-label-font: '??', '??', '??', 'Roboto', 'Assistant', sans-serif;
  --metadata-label-text-color: rgb(117, 102, 153);
  --metadata-label-text-color-hover: rgb(117, 102, 153);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(209, 193, 245);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(216, 203, 246);
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: rgb(209, 193, 245);
  --nav-collapse-icon-color: rgb(153, 142, 180);
  --nav-collapse-icon-color-collapsed: rgb(153, 142, 180);
  --nav-heading-color: rgb(75, 73, 80);
  --nav-heading-color-collapsed: rgb(153, 142, 180);
  --nav-heading-color-collapsed-hover: rgb(117, 102, 153);
  --nav-heading-color-hover: rgb(75, 73, 80);
  --nav-item-color: rgb(117, 102, 153);
  --nav-item-color-active: rgb(75, 73, 80);
  --nav-item-color-hover: rgb(75, 73, 80);
  --nav-item-color-selected: rgb(75, 73, 80);
  --nav-tag-color: rgb(153, 142, 180);
  --nav-tag-color-active: rgb(117, 102, 153);
  --nav-tag-color-hover: rgb(117, 102, 153);
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: rgb(223, 218, 236);
  --pill-border-color-hover: rgb(216, 203, 246);
  --pill-color: rgb(117, 102, 153);
  --pill-color-hover: rgb(75, 73, 80);
  --pill-color-remove: rgb(153, 142, 180);
  --prompt-background: rgb(255, 255, 255);
  --prompt-border-color: rgb(209, 193, 245);
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(240, 237, 247);
  --ribbon-background-collapsed: rgb(255, 255, 255);
  --search-clear-button-color: rgb(117, 102, 153);
  --search-icon-color: rgb(117, 102, 153);
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: rgb(75, 73, 80);
  --setting-items-background: rgb(244, 242, 248);
  --setting-items-border-color: rgb(223, 218, 236);
  --slider-thumb-border-color: rgb(216, 203, 246);
  --slider-track-background: rgb(223, 218, 236);
  --status-bar-background: rgb(240, 237, 247);
  --status-bar-border-color: rgb(223, 218, 236);
  --status-bar-text-color: rgb(117, 102, 153);
  --suggestion-background: rgb(255, 255, 255);
  --sync-avatar-color-1: #E93147;
  --sync-avatar-color-4: #08B94E;
  --sync-avatar-color-6: #086DDD;
  --sync-avatar-color-7: #7852EE;
  --sync-avatar-color-8: #D53984;
  --tab-background-active: transparent;
  --tab-container-background: rgb(240, 237, 247);
  --tab-divider-color: rgb(216, 203, 246);
  --tab-outline-color: transparent;
  --tab-switcher-background: rgb(240, 237, 247);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(240, 237, 247), transparent);
  --tab-text-color: rgb(153, 142, 180);
  --tab-text-color-active: rgb(166, 139, 249);
  --tab-text-color-focused: rgb(117, 102, 153);
  --tab-text-color-focused-active: rgb(166, 139, 249);
  --tab-text-color-focused-active-current: rgb(166, 139, 249);
  --table-add-button-border-color: rgb(223, 218, 236);
  --table-add-button-border-width: 0px;
  --table-background: rgba(138, 92, 245, 0.2);
  --table-border-color: rgb(223, 218, 236);
  --table-border-width: 0px;
  --table-column-alt-background: none;
  --table-column-first-border-width: 0px;
  --table-column-last-border-width: 0px;
  --table-column-max-width: 100%;
  --table-drag-handle-color: rgb(153, 142, 180);
  --table-header-background: rgb(153, 115, 247);
  --table-header-background-hover: rgb(166, 139, 249);
  --table-header-border-color: rgb(223, 218, 236);
  --table-header-border-width: 0px;
  --table-header-color: white;
  --table-header-weight: 600;
  --table-row-alt-background: rgba(138, 92, 245, 0.3);
  --table-row-alt-background-hover: rgba(138, 92, 245, 0.2);
  --table-row-background-hover: rgba(138, 92, 245, 0.2);
  --table-row-last-border-width: 0px;
  --table-white-space: normal;
  --tag-decoration: underline;
  --text-error: #E93147;
  --text-faint: rgb(153, 142, 180);
  --text-muted: rgb(117, 102, 153);
  --text-normal: rgb(75, 73, 80);
  --text-success: #08B94E;
  --titlebar-background: transparent;
  --titlebar-background-focused: rgb(246, 244, 250);
  --titlebar-border-color: rgb(223, 218, 236);
  --titlebar-text-color: rgb(117, 102, 153);
  --titlebar-text-color-focused: rgb(75, 73, 80);
  --titlebar-text-weight: 600;
  --vault-name-color: rgb(117, 102, 153);
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 600;
  --vault-profile-color: rgb(75, 73, 80);
  --vault-profile-color-hover: rgb(75, 73, 80);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 235, 247);
  color: rgb(75, 73, 80);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 252, 255);
  color: rgb(75, 73, 80);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(75, 73, 80);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 235, 247);
  border-left-color: rgb(223, 218, 236);
  color: rgb(75, 73, 80);
}

body div#quartz-root {
  background-color: rgb(239, 235, 247);
  color: rgb(75, 73, 80);
}`,
    typography: `body .page article p > b, b {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body .page article p > em, em {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body .page article p > i, i {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body .page article p > strong, strong {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 500;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body .text-highlight {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body del {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: line-through rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body p {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(117, 102, 153) none 0px;
  text-decoration: rgb(117, 102, 153);
  text-decoration-color: rgb(117, 102, 153);
}`,
    links: `body a.external, footer a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(75, 73, 80);
}

body dt {
  color: rgb(75, 73, 80);
  font-weight: 300;
}

body ol > li {
  color: rgb(75, 73, 80);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body ul > li {
  color: rgb(75, 73, 80);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(153, 142, 180, 0.65);
  text-decoration: rgba(153, 142, 180, 0.65);
}

body blockquote {
  background-color: rgb(255, 255, 255);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body table {
  border-bottom-color: rgb(75, 73, 80);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  width: 600px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(138, 92, 245, 0.2);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(138, 92, 245, 0.3);
}

body td {
  border-bottom-color: rgb(223, 218, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(223, 218, 236);
  border-left-width: 0px;
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
  border-top-color: rgb(223, 218, 236);
  border-top-width: 0px;
  color: rgb(75, 73, 80);
  font-weight: 300;
}

body th {
  border-bottom-color: rgb(223, 218, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(223, 218, 236);
  border-left-width: 0px;
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
  border-top-color: rgb(223, 218, 236);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  text-align: center;
}

body thead {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body tr {
  background-color: rgb(152, 115, 247);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    code: `body code {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(75, 73, 80);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
}

body pre:has(> code) {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
}`,
    images: `body audio {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body figcaption {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body figure {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body img {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body video {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    embeds: `body .file-embed {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
}

body .footnotes {
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

body .transclude {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
  text-decoration-color: rgb(117, 102, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgba(153, 142, 180, 0.65);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(153, 142, 180, 0.65);
  border-right-color: rgba(153, 142, 180, 0.65);
  border-top-color: rgba(153, 142, 180, 0.65);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='*'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='-'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='/'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='>'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='?'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='I'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='S'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='b'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='c'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='d'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='f'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='i'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='k'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='l'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='p'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='u'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body li.task-list-item[data-task='w'] {
  color: rgb(75, 73, 80);
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 500;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(253, 252, 255);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(75, 73, 80);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 252, 255);
  border-bottom-color: rgb(209, 193, 245);
  border-left-color: rgb(209, 193, 245);
  border-right-color: rgb(209, 193, 245);
  border-top-color: rgb(209, 193, 245);
}

body .search > .search-container > .search-space > * {
  color: rgb(75, 73, 80);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  outline: rgb(75, 73, 80) none 0px;
  text-decoration: rgb(75, 73, 80);
  text-decoration-color: rgb(75, 73, 80);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(75, 73, 80);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(75, 73, 80);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(75, 73, 80);
  font-weight: 300;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(209, 193, 245);
  border-left-color: rgb(209, 193, 245);
  border-right-color: rgb(209, 193, 245);
  border-top-color: rgb(209, 193, 245);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 235, 247);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(75, 73, 80);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

body h1 {
  color: rgb(61, 57, 70);
  font-family: Lato;
}

body h2 {
  color: rgb(61, 57, 70);
  font-family: "Work Sans";
}

body h2.page-title, h2.page-title a {
  color: rgb(61, 57, 70);
  font-family: Lato;
}

body h3 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body h4 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body h5 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body h6 {
  color: rgb(61, 57, 70);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body hr {
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 17px;
  padding-left: 37px;
  padding-right: 27px;
  padding-top: 17px;
}

body ::-webkit-scrollbar {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 235, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 235, 247);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(117, 102, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(117, 102, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
  text-decoration: rgb(117, 102, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
}`,
    footer: `body footer {
  background-color: rgb(239, 235, 247);
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body footer ul li a {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(75, 73, 80);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
  font-weight: 300;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body li.section-li > .section .meta {
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 102, 153);
  text-decoration: rgb(117, 102, 153);
}

body ul.section-ul {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
}

body .darkmode svg {
  color: rgb(117, 102, 153);
  stroke: rgb(117, 102, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
}

body .breadcrumb-element p {
  color: rgba(153, 142, 180, 0.65);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

body .metadata {
  border-bottom-color: rgb(223, 218, 236);
  border-left-color: rgb(223, 218, 236);
  border-right-color: rgb(223, 218, 236);
  border-top-color: rgb(223, 218, 236);
  color: rgb(117, 102, 153);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
  font-family: "??", "??", Roboto, Assistant, sans-serif;
}

body .navigation-progress {
  background-color: rgb(239, 235, 247);
}

body .page-header h2.page-title {
  color: rgb(75, 73, 80);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body abbr {
  color: rgb(75, 73, 80);
  text-decoration: underline dotted rgb(75, 73, 80);
}

body details {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body input[type=text] {
  border-bottom-color: rgb(117, 102, 153);
  border-left-color: rgb(117, 102, 153);
  border-right-color: rgb(117, 102, 153);
  border-top-color: rgb(117, 102, 153);
  color: rgb(117, 102, 153);
  font-family: "??", "??", "??", Roboto, Assistant, sans-serif;
}

body kbd {
  background-color: rgb(243, 241, 248);
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
  color: rgb(75, 73, 80);
}

body progress {
  border-bottom-color: rgb(75, 73, 80);
  border-left-color: rgb(75, 73, 80);
  border-right-color: rgb(75, 73, 80);
  border-top-color: rgb(75, 73, 80);
}

body sub {
  color: rgb(75, 73, 80);
}

body summary {
  color: rgb(75, 73, 80);
  font-weight: 300;
}

body sup {
  color: rgb(75, 73, 80);
}`,
  },
};
