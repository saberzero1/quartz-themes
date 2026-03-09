import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ayu-mirage",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco", "source-sans-pro"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgb(63, 69, 91);
  --background-accent: rgba(0, 0, 0, 0.08);
  --background-modifier-border: #686e80;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #171a23;
  --background-modifier-form-field-highlighted: #171a23;
  --background-modifier-form-field-hover: #171a23;
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: #171a23;
  --background-primary-alt: rgba(0, 0, 0, 0.08);
  --background-secondary: #13151e;
  --background-secondary-alt: #13151e;
  --bases-cards-background: #171a23;
  --bases-cards-cover-background: rgba(0, 0, 0, 0.08);
  --bases-cards-shadow: 0 0 0 1px #686e80;
  --bases-embed-border-color: #686e80;
  --bases-group-heading-property-color: #686e80;
  --bases-table-border-color: #686e80;
  --bases-table-cell-background-active: #171a23;
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.08);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(63, 69, 91);
  --bases-table-group-background: rgba(0, 0, 0, 0.08);
  --bases-table-header-background: #171a23;
  --bases-table-header-color: #686e80;
  --bases-table-summary-background: #171a23;
  --blockquote-bg: #171a23;
  --blockquote-border: #fec154;
  --blockquote-border-color: rgb(63, 69, 91);
  --blur-background: color-mix(in srgb, #171a23 65%, transparent) linear-gradient(#171a23, color-mix(in srgb, #171a23 65%, transparent));
  --border-color: #282c3c;
  --bracket-color: rgb(93, 99, 121);
  --canvas-background: #171a23;
  --canvas-card-label-color: #686e80;
  --caret-color: #d1cec6;
  --checkbox-border-color: #686e80;
  --checkbox-border-color-hover: #686e80;
  --checkbox-color: rgb(63, 69, 91);
  --checkbox-color-hover: rgba(49, 54, 70, 0.5);
  --checkbox-enabled: #fec154;
  --checkbox-marker-color: #171a23;
  --checklist-done-color: #686e80;
  --code-background: rgba(0, 0, 0, 0.08);
  --code-block: #686e80;
  --code-border-color: #686e80;
  --code-comment: #686e80;
  --code-normal: #d1cec6;
  --code-punctuation: #686e80;
  --collapse-icon-color: #686e80;
  --collapse-icon-color-collapsed: #fec154;
  --divider-color: #686e80;
  --divider-color-hover: rgb(63, 69, 91);
  --dropdown-background: #171a23;
  --dropdown-background-hover: rgba(0, 0, 0, 0.05);
  --embed-block-shadow-hover: 0 0 0 1px #686e80, inset 0 0 0 1px #686e80;
  --embed-border-start: 2px solid rgb(63, 69, 91);
  --file-header-background: #171a23;
  --file-header-background-focused: #171a23;
  --file-name-color: #fec154;
  --flair-background: #171a23;
  --flair-color: #d1cec6;
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
  --footnote-divider-color: #686e80;
  --footnote-id-color: #686e80;
  --footnote-id-color-no-occurrences: #686e80;
  --graph-line-color: #282c3c;
  --graph-line-on-hover: rgb(63, 69, 91);
  --graph-node: #686e80;
  --graph-node-color: rgb(63, 69, 91);
  --graph-node-focused: #fec154;
  --graph-node-unresolved: #686e80;
  --graph-note-name: #d1cec6;
  --graph-text: #d1cec6;
  --hashtag-color: #6875aa;
  --header-before-color: rgb(93, 99, 121);
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: #686e80;
  --hr-color: rgb(99, 99, 99);
  --icon-color: #686e80;
  --icon-color-active: #fec154;
  --icon-color-focused: #d1cec6;
  --icon-color-hover: #686e80;
  --inline-code: #686e80;
  --input-date-separator: #686e80;
  --input-placeholder-color: #686e80;
  --interactive-accent: rgb(63, 69, 91);
  --interactive-accent-hover: rgba(49, 54, 70, 0.5);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.05);
  --interactive-normal: #171a23;
  --interfa-color-icon: rgba(250, 250, 250, 0.045);
  --interface-color-action: #d1cec6;
  --interface-color-background: #415358;
  --interface-color-background-alt: #171a23;
  --interface-color-border: rgba(250, 250, 250, 0.045);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #fec154;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: #d1cec6;
  --interface-color-three-dots: #a0e85b;
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-color: #fec154;
  --link-color-hover: #686e80;
  --link-external-color: #fec154;
  --link-external-color-hover: #686e80;
  --link-text: #fec154;
  --link-text-hover: #fec154;
  --link-unresolved-color: #fec154;
  --list-marker-color: #686e80;
  --list-marker-color-collapsed: #fec154;
  --list-marker-color-hover: #686e80;
  --menu-background: #13151e;
  --metadata-border-color: #686e80;
  --metadata-divider-color: #686e80;
  --metadata-input-text-color: #d1cec6;
  --metadata-label-text-color: #686e80;
  --metadata-label-text-color-hover: #686e80;
  --modal-background: #171a23;
  --nav-collapse-icon-color: #686e80;
  --nav-collapse-icon-color-collapsed: #686e80;
  --nav-heading-color: #d1cec6;
  --nav-heading-color-collapsed: #686e80;
  --nav-heading-color-collapsed-hover: #686e80;
  --nav-heading-color-hover: #d1cec6;
  --nav-item-color: #686e80;
  --nav-item-color-active: #d1cec6;
  --nav-item-color-highlighted: #fec154;
  --nav-item-color-hover: #d1cec6;
  --nav-item-color-selected: #d1cec6;
  --nav-tag-color: #686e80;
  --nav-tag-color-active: #686e80;
  --nav-tag-color-hover: #686e80;
  --pdf-background: #171a23;
  --pdf-page-background: #171a23;
  --pdf-shadow: 0 0 0 1px #686e80;
  --pdf-sidebar-background: #171a23;
  --pdf-thumbnail-shadow: 0 0 0 1px #686e80;
  --pill-border-color: #686e80;
  --pill-color: #686e80;
  --pill-color-hover: #d1cec6;
  --pill-color-remove: #686e80;
  --pill-color-remove-hover: #fec154;
  --pre-code-bg: #13141b;
  --prompt-background: #171a23;
  --quick-switcher: rgba(49, 54, 70, 0.5);
  --raised-background: color-mix(in srgb, #171a23 65%, transparent) linear-gradient(#171a23, color-mix(in srgb, #171a23 65%, transparent));
  --ribbon-background: #13151e;
  --ribbon-background-collapsed: #171a23;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #686e80;
  --search-icon-color: #686e80;
  --search-result-background: #171a23;
  --setting-group-heading-color: #d1cec6;
  --setting-items-background: rgba(0, 0, 0, 0.08);
  --setting-items-border-color: #686e80;
  --slider-track-background: #686e80;
  --status-bar-background: #13151e;
  --status-bar-border-color: #686e80;
  --status-bar-text-color: #686e80;
  --suggestion-background: #171a23;
  --tab-background-active: #171a23;
  --tab-container-background: #13151e;
  --tab-outline-color: #686e80;
  --tab-switcher-background: #13151e;
  --tab-switcher-menubar-background: linear-gradient(to top, #13151e, transparent);
  --tab-text-color: #686e80;
  --tab-text-color-active: #686e80;
  --tab-text-color-focused: #686e80;
  --tab-text-color-focused-active: #686e80;
  --tab-text-color-focused-active-current: #d1cec6;
  --tab-text-color-focused-highlighted: #fec154;
  --table-add-button-border-color: #686e80;
  --table-border-color: #686e80;
  --table-drag-handle-background-active: rgb(63, 69, 91);
  --table-drag-handle-color: #686e80;
  --table-drag-handle-color-active: #d1cec6;
  --table-header-border-color: #686e80;
  --table-header-color: #d1cec6;
  --table-selection-border-color: rgb(63, 69, 91);
  --tag-bg: rgb(63, 69, 91);
  --tag-bg-hover: #2b3147;
  --tag-color: #fec154;
  --tag-color-hover: #fec154;
  --tag-text-color: #eaebeb;
  --tag-text-hover: #eaebeb;
  --text-accent: #fec154;
  --text-accent-hover: #686e80;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #686e80;
  --text-highlight-bg: rgba(49, 54, 70, 0.5);
  --text-muted: #686e80;
  --text-normal: #d1cec6;
  --text-on-accent: #d1cec6;
  --text-selection: rgba(49, 54, 70, 0.5);
  --text-title-font-weight: 600;
  --text-title-h1: #8e98aa;
  --text-title-h2: #8e98aa;
  --text-title-h3: #8e98aa;
  --text-title-h4: #8e98aa;
  --text-title-h5: #8e98aa;
  --text-title-h6: #8e98aa;
  --titlebar-background: #13151e;
  --titlebar-background-focused: #13151e;
  --titlebar-border-color: #686e80;
  --titlebar-text-color: #686e80;
  --titlebar-text-color-focused: #d1cec6;
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: #d1cec6;
  --vault-profile-color-hover: #d1cec6;
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(19, 21, 30);
  color: rgb(209, 206, 198);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 26, 35);
  color: rgb(209, 206, 198);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 21, 30);
  color: rgb(209, 206, 198);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(104, 110, 128);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(19, 21, 30);
  border-left-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
}

body div#quartz-root {
  background-color: rgb(23, 26, 35);
  color: rgb(209, 206, 198);
}`,
    typography: `body .page article p > b, b {
  color: rgb(209, 206, 198);
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body .page article p > em, em {
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body .page article p > i, i {
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body .page article p > strong, strong {
  color: rgb(209, 206, 198);
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body .text-highlight {
  background-color: rgba(49, 54, 70, 0.5);
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body del {
  color: rgb(209, 206, 198);
  font-weight: 500;
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: line-through rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body p {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(104, 110, 128) none 0px;
  text-decoration: rgb(104, 110, 128);
  text-decoration-color: rgb(104, 110, 128);
}`,
    links: `body a.external, footer a {
  color: rgb(254, 193, 84);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(254, 193, 84) none 0px;
  text-decoration: rgb(254, 193, 84);
  text-decoration-color: rgb(254, 193, 84);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 193, 84);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(254, 193, 84) none 0px;
  text-decoration: rgb(254, 193, 84);
  text-decoration-color: rgb(254, 193, 84);
}

body a.internal.broken {
  color: rgb(254, 193, 84);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(254, 193, 84) none 0px;
  text-decoration: rgb(254, 193, 84);
  text-decoration-color: rgb(254, 193, 84);
}`,
    lists: `body dd {
  color: rgb(209, 206, 198);
}

body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

body dt {
  color: rgb(209, 206, 198);
}

body ol > li {
  color: rgb(209, 206, 198);
}

body ol.overflow {
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body ul > li {
  color: rgb(209, 206, 198);
}

body ul.overflow {
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(254, 193, 84);
  text-decoration: rgb(254, 193, 84);
}

body blockquote {
  background-color: rgb(19, 21, 30);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body table {
  color: rgb(209, 206, 198);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
}

body th {
  background-color: rgb(19, 21, 30);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(104, 110, 128);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(104, 110, 128);
}`,
    code: `body code {
  background-color: rgb(19, 20, 27);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
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
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body figcaption {
  color: rgb(209, 206, 198);
  font-size: 24px;
}

body figure {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  margin-bottom: 24px;
  margin-top: 24px;
}

body img {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body video {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
}

body .footnotes {
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

body .transclude {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(63, 69, 91);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body .transclude-inner {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(63, 69, 91);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(104, 110, 128);
  text-decoration: line-through rgb(104, 110, 128);
  text-decoration-color: rgb(104, 110, 128);
}

body input[type=checkbox] {
  border-bottom-color: rgb(104, 110, 128);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='*'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='-'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='/'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='>'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='?'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='I'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='S'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='b'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='c'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='d'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='f'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='i'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='k'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='l'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='p'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='u'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body li.task-list-item[data-task='w'] {
  color: rgb(209, 206, 198);
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}`,
    search: `body .search > .search-button {
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(209, 206, 198);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgb(23, 26, 35);
}

body .search > .search-container > .search-space > * {
  color: rgb(209, 206, 198);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(209, 206, 198) none 0px;
  text-decoration: rgb(209, 206, 198);
  text-decoration-color: rgb(209, 206, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 206, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(209, 206, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(49, 54, 70, 0.5);
  color: rgb(209, 206, 198);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 21, 30);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(49, 54, 70, 0.5);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(49, 54, 70, 0.5);
  color: rgb(209, 206, 198);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

body a.internal.tag-link::before {
  color: rgb(254, 193, 84);
}

body h1 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2.page-title, h2.page-title a {
  color: rgb(209, 206, 198);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h3 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h4 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h5 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h6 {
  color: rgb(142, 152, 170);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body hr {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 26, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 26, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(104, 110, 128);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(104, 110, 128);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(104, 110, 128);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(209, 206, 198);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(209, 206, 198);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}`,
    footer: `body footer {
  background-color: rgb(19, 21, 30);
  border-bottom-color: rgb(19, 21, 30);
  border-left-color: rgb(19, 21, 30);
  border-right-color: rgb(19, 21, 30);
  border-top-color: rgb(19, 21, 30);
  border-top-width: 0px;
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body footer ul li a {
  color: rgb(104, 110, 128);
  text-decoration: rgb(104, 110, 128);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(209, 206, 198);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(104, 110, 128);
  text-decoration: rgb(104, 110, 128);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body li.section-li > .section .meta {
  color: rgb(104, 110, 128);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(104, 110, 128);
  text-decoration: rgb(104, 110, 128);
}

body ul.section-ul {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}

body .darkmode svg {
  color: rgb(104, 110, 128);
  stroke: rgb(104, 110, 128);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}

body .breadcrumb-element p {
  color: rgb(104, 110, 128);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
}

body .metadata {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .metadata-properties {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .navigation-progress {
  background-color: rgb(19, 21, 30);
}

body .page-header h2.page-title {
  color: rgb(254, 193, 84);
}

body abbr {
  color: rgb(209, 206, 198);
  text-decoration: underline dotted rgb(209, 206, 198);
}

body details {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body input[type=text] {
  border-bottom-color: rgb(104, 110, 128);
  border-left-color: rgb(104, 110, 128);
  border-right-color: rgb(104, 110, 128);
  border-top-color: rgb(104, 110, 128);
  color: rgb(104, 110, 128);
}

body kbd {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
  color: rgb(209, 206, 198);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

body progress {
  border-bottom-color: rgb(209, 206, 198);
  border-left-color: rgb(209, 206, 198);
  border-right-color: rgb(209, 206, 198);
  border-top-color: rgb(209, 206, 198);
}

body sub {
  color: rgb(209, 206, 198);
  font-size: 16.8px;
  vertical-align: super;
}

body summary {
  color: rgb(209, 206, 198);
}

body sup {
  color: rgb(209, 206, 198);
  font-size: 16.8px;
}`,
  },
  light: {},
};
