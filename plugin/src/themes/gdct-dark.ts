import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "gdct-dark",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgba(0, 0, 0, 0.1);
  --background-accent: rgba(0, 0, 0, 0.08);
  --background-modifier-border: #6f6f6f;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #313030;
  --background-modifier-form-field-highlighted: #313030;
  --background-modifier-form-field-hover: #313030;
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: #313030;
  --background-primary-alt: rgba(0, 0, 0, 0.08);
  --background-secondary: #313030;
  --background-secondary-alt: #313030;
  --bases-cards-background: #313030;
  --bases-cards-cover-background: rgba(0, 0, 0, 0.08);
  --bases-cards-shadow: 0 0 0 1px #6f6f6f;
  --bases-embed-border-color: #6f6f6f;
  --bases-group-heading-property-color: #6f6f6f;
  --bases-table-border-color: #6f6f6f;
  --bases-table-cell-background-active: #313030;
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.08);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.1);
  --bases-table-group-background: rgba(0, 0, 0, 0.08);
  --bases-table-header-background: #313030;
  --bases-table-header-color: #6f6f6f;
  --bases-table-summary-background: #313030;
  --blockquote-bg: #313030;
  --blockquote-border: #3daddb;
  --blockquote-border-color: rgba(0, 0, 0, 0.1);
  --blur-background: color-mix(in srgb, #313030 65%, transparent) linear-gradient(#313030, color-mix(in srgb, #313030 65%, transparent));
  --border-color: #6f6f6f;
  --bracket-color: #4c535a;
  --canvas-background: #313030;
  --canvas-card-label-color: #6f6f6f;
  --caret-color: #fffdf9;
  --checkbox-border-color: #6f6f6f;
  --checkbox-border-color-hover: #6f6f6f;
  --checkbox-color: rgba(250, 250, 250, 0.1);
  --checkbox-color-hover: rgba(250, 250, 250, 0.1);
  --checkbox-enabled: #6f6f6f;
  --checkbox-marker-color: #313030;
  --checklist-done-color: #6f6f6f;
  --code-background: rgba(0, 0, 0, 0.08);
  --code-block: #6f6f6f;
  --code-border-color: #6f6f6f;
  --code-comment: #6f6f6f;
  --code-normal: #fffdf9;
  --code-punctuation: #6f6f6f;
  --collapse-icon-color: #6f6f6f;
  --collapse-icon-color-collapsed: #3daddb;
  --divider-color: #6f6f6f;
  --divider-color-hover: rgba(0, 0, 0, 0.1);
  --dropdown-background: #313030;
  --dropdown-background-hover: rgba(0, 0, 0, 0.05);
  --embed-block-shadow-hover: 0 0 0 1px #6f6f6f, inset 0 0 0 1px #6f6f6f;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.1);
  --file-header-background: #313030;
  --file-header-background-focused: #313030;
  --file-name-color: #3daddb;
  --flair-background: #313030;
  --flair-color: #fffdf9;
  --font-family-code: Ubuntu Mono derivative Powerline, Menlo, Monaco;
  --font-family-editor: Skolar PE, iA Writer Quattro S, Menlo, Avenir Next, Times New Roman;
  --font-family-mdpreview: Skolar PE, Gentium Plus, Alegreya, Source Sans Pro, Avenir Next, Times New Roman;
  --font-family-preview: Gentium Plus, Alegreya, Source Sans Pro, Palatino, Avenir Next, Times New Roman;
  --font-size-blockquote: 22px;
  --font-size-code: 22px;
  --font-size-footnote: 22px;
  --font-size-h1: 1.9em;
  --font-size-h2: 1.6em;
  --font-size-h3: 1.3em;
  --font-size-h4: 1.2em;
  --font-size-h5: 1.1em;
  --font-size-h6: 1em;
  --font-size-normal: 24px;
  --font-size-side-dock: 16px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 16px;
  --footnote-divider-color: #6f6f6f;
  --footnote-id-color: #6f6f6f;
  --footnote-id-color-no-occurrences: #6f6f6f;
  --graph-line-color: #4c535a;
  --graph-line-on-hover: #6f6f6f;
  --graph-node: #6f6f6f;
  --graph-node-color: #6f6f6f;
  --graph-node-focused: #3daddb;
  --graph-node-unresolved: #6f6f6f;
  --graph-note-name: #fffdf9;
  --graph-text: #fffdf9;
  --hashtag-color: #313030;
  --header-before-color: #4c535a;
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: #6f6f6f;
  --hr-color: rgb(99, 99, 99);
  --icon-color: #6f6f6f;
  --icon-color-active: #3daddb;
  --icon-color-focused: #fffdf9;
  --icon-color-hover: #6f6f6f;
  --inline-code: #6f6f6f;
  --input-date-separator: #6f6f6f;
  --input-placeholder-color: #6f6f6f;
  --interactive-accent: rgba(0, 0, 0, 0.1);
  --interactive-accent-hover: rgba(250, 250, 250, 0.1);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.05);
  --interactive-normal: #313030;
  --interfa-color-icon: rgba(250, 250, 250, 0.045);
  --interface-color-action: #fffdf9;
  --interface-color-background: #415358;
  --interface-color-background-alt: #313030;
  --interface-color-border: rgba(250, 250, 250, 0.045);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #3daddb;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: #fffdf9;
  --interface-color-three-dots: #a0e85b;
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-bg-hover: #3daddb;
  --link-color: #3daddb;
  --link-color-hover: #6f6f6f;
  --link-external-color: #3daddb;
  --link-external-color-hover: #6f6f6f;
  --link-text: #3daddb;
  --link-text-hover: #313030;
  --link-unresolved-color: #3daddb;
  --list-marker-color: #6f6f6f;
  --list-marker-color-collapsed: #3daddb;
  --list-marker-color-hover: #6f6f6f;
  --menu-background: #313030;
  --metadata-border-color: #6f6f6f;
  --metadata-divider-color: #6f6f6f;
  --metadata-input-text-color: #fffdf9;
  --metadata-label-text-color: #6f6f6f;
  --metadata-label-text-color-hover: #6f6f6f;
  --modal-background: #313030;
  --nav-collapse-icon-color: #6f6f6f;
  --nav-collapse-icon-color-collapsed: #6f6f6f;
  --nav-heading-color: #fffdf9;
  --nav-heading-color-collapsed: #6f6f6f;
  --nav-heading-color-collapsed-hover: #6f6f6f;
  --nav-heading-color-hover: #fffdf9;
  --nav-item-color: #6f6f6f;
  --nav-item-color-active: #fffdf9;
  --nav-item-color-highlighted: #3daddb;
  --nav-item-color-hover: #fffdf9;
  --nav-item-color-selected: #fffdf9;
  --nav-tag-color: #6f6f6f;
  --nav-tag-color-active: #6f6f6f;
  --nav-tag-color-hover: #6f6f6f;
  --pdf-background: #313030;
  --pdf-page-background: #313030;
  --pdf-shadow: 0 0 0 1px #6f6f6f;
  --pdf-sidebar-background: #313030;
  --pdf-thumbnail-shadow: 0 0 0 1px #6f6f6f;
  --pill-border-color: #6f6f6f;
  --pill-color: #6f6f6f;
  --pill-color-hover: #fffdf9;
  --pill-color-remove: #6f6f6f;
  --pill-color-remove-hover: #3daddb;
  --pre-code-bg: rgba(0, 0, 0, 0.001);
  --prompt-background: #313030;
  --quick-switcher: rgba(250, 250, 250, 0.1);
  --raised-background: color-mix(in srgb, #313030 65%, transparent) linear-gradient(#313030, color-mix(in srgb, #313030 65%, transparent));
  --ribbon-background: #313030;
  --ribbon-background-collapsed: #313030;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #6f6f6f;
  --search-icon-color: #6f6f6f;
  --search-result-background: #313030;
  --setting-group-heading-color: #fffdf9;
  --setting-items-background: rgba(0, 0, 0, 0.08);
  --setting-items-border-color: #6f6f6f;
  --slider-track-background: #6f6f6f;
  --status-bar-background: #313030;
  --status-bar-border-color: #6f6f6f;
  --status-bar-text-color: #6f6f6f;
  --suggestion-background: #313030;
  --tab-background-active: #313030;
  --tab-container-background: #313030;
  --tab-outline-color: #6f6f6f;
  --tab-switcher-background: #313030;
  --tab-switcher-menubar-background: linear-gradient(to top, #313030, transparent);
  --tab-text-color: #6f6f6f;
  --tab-text-color-active: #6f6f6f;
  --tab-text-color-focused: #6f6f6f;
  --tab-text-color-focused-active: #6f6f6f;
  --tab-text-color-focused-active-current: #fffdf9;
  --tab-text-color-focused-highlighted: #3daddb;
  --table-add-button-border-color: #6f6f6f;
  --table-border-color: #6f6f6f;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.1);
  --table-drag-handle-color: #6f6f6f;
  --table-drag-handle-color-active: #fffdf9;
  --table-header-border-color: #6f6f6f;
  --table-header-color: #fffdf9;
  --table-selection-border-color: rgba(0, 0, 0, 0.1);
  --tag-bg: #6f6f6f;
  --tag-bg-hover: #6f6f6f;
  --tag-color: #3daddb;
  --tag-color-hover: #3daddb;
  --tag-text-color: #313030;
  --tag-text-hover: #313030;
  --text-accent: #3daddb;
  --text-accent-hover: #6f6f6f;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #6f6f6f;
  --text-highlight-bg: rgba(250, 250, 250, 0.1);
  --text-muted: #6f6f6f;
  --text-normal: #fffdf9;
  --text-on-accent: #fffdf9;
  --text-search-highlight-bg: rgba(262, 127, 125, 0.9);
  --text-selection: rgba(250, 250, 250, 0.1);
  --text-title-font-weight: 600;
  --text-title-h1: #fffdf9;
  --text-title-h2: #fffdf9;
  --text-title-h3: #fffdf9;
  --text-title-h4: #fffdf9;
  --text-title-h5: #fffdf9;
  --text-title-h6: #fffdf9;
  --titlebar-background: #313030;
  --titlebar-background-focused: #313030;
  --titlebar-border-color: #6f6f6f;
  --titlebar-text-color: #6f6f6f;
  --titlebar-text-color-focused: #fffdf9;
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: #fffdf9;
  --vault-profile-color-hover: #fffdf9;
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(111, 111, 111);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 48, 48);
  border-left-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
}

body div#quartz-root {
  background-color: rgb(49, 48, 48);
  color: rgb(255, 253, 249);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 253, 249);
  outline: rgb(255, 253, 249) none 0px;
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body .page article p > em, em {
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body .page article p > i, i {
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body .page article p > strong, strong {
  color: rgb(255, 253, 249);
  outline: rgb(255, 253, 249) none 0px;
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body .text-highlight {
  background-color: rgba(250, 250, 250, 0.1);
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body del {
  color: rgb(255, 253, 249);
  font-weight: 500;
  outline: rgb(255, 253, 249) none 0px;
  text-decoration: line-through rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body p {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(111, 111, 111) none 0px;
  text-decoration: rgb(111, 111, 111);
  text-decoration-color: rgb(111, 111, 111);
}`,
    links: `body a.external, footer a {
  color: rgb(61, 173, 219);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(61, 173, 219) none 0px;
  text-decoration: rgb(61, 173, 219);
  text-decoration-color: rgb(61, 173, 219);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(61, 173, 219);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(61, 173, 219) none 0px;
  text-decoration: rgb(61, 173, 219);
  text-decoration-color: rgb(61, 173, 219);
}

body a.internal.broken {
  color: rgb(61, 173, 219);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(61, 173, 219) none 0px;
  text-decoration: rgb(61, 173, 219);
  text-decoration-color: rgb(61, 173, 219);
}`,
    lists: `body dd {
  color: rgb(255, 253, 249);
}

body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

body dt {
  color: rgb(255, 253, 249);
}

body ol > li {
  color: rgb(255, 253, 249);
}

body ol.overflow {
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body ul > li {
  color: rgb(255, 253, 249);
}

body ul.overflow {
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(61, 173, 219);
  text-decoration: rgb(61, 173, 219);
}

body blockquote {
  background-color: rgb(49, 48, 48);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body table {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
}

body th {
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(111, 111, 111);
}`,
    code: `body code {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body pre > code > [data-line] {
  border-left-color: rgb(221, 74, 104);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(221, 74, 104);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(221, 74, 104);
  border-left-color: rgb(221, 74, 104);
  border-right-color: rgb(221, 74, 104);
  border-top-color: rgb(221, 74, 104);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body figcaption {
  color: rgb(255, 253, 249);
  font-size: 24px;
}

body figure {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  margin-bottom: 24px;
  margin-top: 24px;
}

body img {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body video {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
}

body .footnotes {
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

body .transclude {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(111, 111, 111);
  text-decoration: line-through rgb(111, 111, 111);
  text-decoration-color: rgb(111, 111, 111);
}

body input[type=checkbox] {
  border-bottom-color: rgb(111, 111, 111);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 253, 249);
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}`,
    search: `body .search > .search-button {
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(255, 253, 249);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgb(49, 48, 48);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(255, 253, 249) none 0px;
  text-decoration: rgb(255, 253, 249);
  text-decoration-color: rgb(255, 253, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 253, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 253, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(250, 250, 250, 0.1);
  color: rgb(255, 253, 249);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 48, 48);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(250, 250, 250, 0.1);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(250, 250, 250, 0.1);
  color: rgb(255, 253, 249);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

body a.internal.tag-link::before {
  color: rgb(61, 173, 219);
}

body h1 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h3 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h4 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h5 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h6 {
  color: rgb(255, 253, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body hr {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

body ::-webkit-scrollbar-corner {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}

body ::-webkit-scrollbar-track {
  background: rgb(49, 48, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 48, 48);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(111, 111, 111);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(111, 111, 111);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(111, 111, 111);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 253, 249);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 253, 249);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}`,
    footer: `body footer {
  background-color: rgb(49, 48, 48);
  border-bottom-color: rgb(49, 48, 48);
  border-left-color: rgb(49, 48, 48);
  border-right-color: rgb(49, 48, 48);
  border-top-color: rgb(49, 48, 48);
  border-top-width: 0px;
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body footer ul li a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 253, 249);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body li.section-li > .section .meta {
  color: rgb(111, 111, 111);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body .darkmode svg {
  color: rgb(111, 111, 111);
  stroke: rgb(111, 111, 111);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body .breadcrumb-element p {
  color: rgb(111, 111, 111);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
}

body .metadata {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .metadata-properties {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .navigation-progress {
  background-color: rgb(49, 48, 48);
}

body .page-header h2.page-title {
  color: rgb(61, 173, 219);
}

body abbr {
  color: rgb(255, 253, 249);
  text-decoration: underline dotted rgb(255, 253, 249);
}

body details {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body input[type=text] {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body kbd {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
  color: rgb(255, 253, 249);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

body progress {
  border-bottom-color: rgb(255, 253, 249);
  border-left-color: rgb(255, 253, 249);
  border-right-color: rgb(255, 253, 249);
  border-top-color: rgb(255, 253, 249);
}

body sub {
  color: rgb(255, 253, 249);
  font-size: 16.8px;
  vertical-align: super;
}

body summary {
  color: rgb(255, 253, 249);
}

body sup {
  color: rgb(255, 253, 249);
  font-size: 16.8px;
}`,
  },
  light: {},
};
