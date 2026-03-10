import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dark-graphite",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgba(0, 0, 0, 0.1);
  --background-accent: rgba(0, 0, 0, 0.08);
  --background-modifier-border: #949594;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #161719;
  --background-modifier-form-field-highlighted: #161719;
  --background-modifier-form-field-hover: #161719;
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: #161719;
  --background-primary-alt: rgba(0, 0, 0, 0.08);
  --background-secondary: #202123;
  --background-secondary-alt: #202123;
  --bases-cards-background: #161719;
  --bases-cards-cover-background: rgba(0, 0, 0, 0.08);
  --bases-cards-shadow: 0 0 0 1px #949594;
  --bases-embed-border-color: #949594;
  --bases-group-heading-property-color: #949594;
  --bases-table-border-color: #949594;
  --bases-table-cell-background-active: #161719;
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.08);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.1);
  --bases-table-group-background: rgba(0, 0, 0, 0.08);
  --bases-table-header-background: #161719;
  --bases-table-header-color: #949594;
  --bases-table-summary-background: #161719;
  --blockquote-bg: #161719;
  --blockquote-border: #3c95fa;
  --blockquote-border-color: rgba(0, 0, 0, 0.1);
  --blur-background: color-mix(in srgb, #161719 65%, transparent) linear-gradient(#161719, color-mix(in srgb, #161719 65%, transparent));
  --border-color: #000000;
  --bracket-color: #4c535a;
  --canvas-background: #161719;
  --canvas-card-label-color: #949594;
  --caret-color: #d5d5d5;
  --checkbox-border-color: #949594;
  --checkbox-border-color-hover: #949594;
  --checkbox-color: #666a6c;
  --checkbox-color-hover: rgba(42, 48, 56, 0.5);
  --checkbox-enabled: #3c95fa;
  --checkbox-marker-color: #161719;
  --checklist-done-color: #949594;
  --code-background: rgba(0, 0, 0, 0.08);
  --code-block: #949594;
  --code-border-color: #949594;
  --code-comment: #949594;
  --code-normal: #d5d5d5;
  --code-punctuation: #949594;
  --collapse-icon-color: #949594;
  --collapse-icon-color-collapsed: #3c95fa;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #949594;
  --divider-color-hover: rgba(0, 0, 0, 0.1);
  --dropdown-background: #161719;
  --dropdown-background-hover: rgba(0, 0, 0, 0.05);
  --embed-block-shadow-hover: 0 0 0 1px #949594, inset 0 0 0 1px #949594;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.1);
  --file-header-background: #161719;
  --file-header-background-focused: #161719;
  --file-name-color: #3c95fa;
  --flair-background: #161719;
  --flair-color: #d5d5d5;
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
  --footnote-divider-color: #949594;
  --footnote-id-color: #949594;
  --footnote-id-color-no-occurrences: #949594;
  --graph-line-color: #4c535a;
  --graph-line-on-hover: #666a6c;
  --graph-node: #949594;
  --graph-node-color: #666a6c;
  --graph-node-focused: #3c95fa;
  --graph-node-unresolved: #949594;
  --graph-note-name: #d5d5d5;
  --graph-text: #d5d5d5;
  --gray: var(--text-muted);
  --hashtag-color: #3b3e43;
  --header-before-color: #4c535a;
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: #949594;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(99, 99, 99);
  --icon-color: #949594;
  --icon-color-active: #3c95fa;
  --icon-color-focused: #d5d5d5;
  --icon-color-hover: #949594;
  --inline-code: #949594;
  --input-date-separator: #949594;
  --input-placeholder-color: #949594;
  --interactive-accent: rgba(0, 0, 0, 0.1);
  --interactive-accent-hover: rgba(42, 48, 56, 0.5);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.05);
  --interactive-normal: #161719;
  --interfa-color-icon: rgba(250, 250, 250, 0.045);
  --interface-color-action: #d5d5d5;
  --interface-color-background: #415358;
  --interface-color-background-alt: #161719;
  --interface-color-border: rgba(250, 250, 250, 0.045);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #3c95fa;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: #d5d5d5;
  --interface-color-three-dots: #a0e85b;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-color: #3c95fa;
  --link-color-hover: #949594;
  --link-external-color: #3c95fa;
  --link-external-color-hover: #949594;
  --link-text: #3c95fa;
  --link-text-hover: #3c95fa;
  --link-unresolved-color: #3c95fa;
  --list-marker-color: #949594;
  --list-marker-color-collapsed: #3c95fa;
  --list-marker-color-hover: #949594;
  --menu-background: #202123;
  --metadata-border-color: #949594;
  --metadata-divider-color: #949594;
  --metadata-input-text-color: #d5d5d5;
  --metadata-label-text-color: #949594;
  --metadata-label-text-color-hover: #949594;
  --modal-background: #161719;
  --nav-collapse-icon-color: #949594;
  --nav-collapse-icon-color-collapsed: #949594;
  --nav-heading-color: #d5d5d5;
  --nav-heading-color-collapsed: #949594;
  --nav-heading-color-collapsed-hover: #949594;
  --nav-heading-color-hover: #d5d5d5;
  --nav-item-color: #949594;
  --nav-item-color-active: #d5d5d5;
  --nav-item-color-highlighted: #3c95fa;
  --nav-item-color-hover: #d5d5d5;
  --nav-item-color-selected: #d5d5d5;
  --nav-tag-color: #949594;
  --nav-tag-color-active: #949594;
  --nav-tag-color-hover: #949594;
  --pdf-background: #161719;
  --pdf-page-background: #161719;
  --pdf-shadow: 0 0 0 1px #949594;
  --pdf-sidebar-background: #161719;
  --pdf-thumbnail-shadow: 0 0 0 1px #949594;
  --pill-border-color: #949594;
  --pill-color: #949594;
  --pill-color-hover: #d5d5d5;
  --pill-color-remove: #949594;
  --pill-color-remove-hover: #3c95fa;
  --pre-code-bg: #1b1b1a;
  --prompt-background: #161719;
  --quick-switcher: rgba(42, 48, 56, 0.5);
  --raised-background: color-mix(in srgb, #161719 65%, transparent) linear-gradient(#161719, color-mix(in srgb, #161719 65%, transparent));
  --ribbon-background: #202123;
  --ribbon-background-collapsed: #161719;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #949594;
  --search-icon-color: #949594;
  --search-result-background: #161719;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d5d5d5;
  --setting-items-background: rgba(0, 0, 0, 0.08);
  --setting-items-border-color: #949594;
  --slider-track-background: #949594;
  --status-bar-background: #202123;
  --status-bar-border-color: #949594;
  --status-bar-text-color: #949594;
  --suggestion-background: #161719;
  --tab-background-active: #161719;
  --tab-container-background: #202123;
  --tab-outline-color: #949594;
  --tab-switcher-background: #202123;
  --tab-switcher-menubar-background: linear-gradient(to top, #202123, transparent);
  --tab-text-color: #949594;
  --tab-text-color-active: #949594;
  --tab-text-color-focused: #949594;
  --tab-text-color-focused-active: #949594;
  --tab-text-color-focused-active-current: #d5d5d5;
  --tab-text-color-focused-highlighted: #3c95fa;
  --table-add-button-border-color: #949594;
  --table-border-color: #949594;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.1);
  --table-drag-handle-color: #949594;
  --table-drag-handle-color-active: #d5d5d5;
  --table-header-border-color: #949594;
  --table-header-color: #d5d5d5;
  --table-selection-border-color: rgba(0, 0, 0, 0.1);
  --tag-bg: #666a6c;
  --tag-bg-hover: #666a6c;
  --tag-color: #3c95fa;
  --tag-color-hover: #3c95fa;
  --tag-text-color: #161719;
  --tag-text-hover: #161719;
  --tertiary: var(--text-accent-hover);
  --text-accent: #3c95fa;
  --text-accent-hover: #949594;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #949594;
  --text-highlight-bg: rgba(42, 48, 56, 0.5);
  --text-muted: #949594;
  --text-normal: #d5d5d5;
  --text-on-accent: #d5d5d5;
  --text-selection: rgba(42, 48, 56, 0.5);
  --text-title-font-weight: 600;
  --text-title-h1: #c0d2de;
  --text-title-h2: #c0d2de;
  --text-title-h3: #c0d2de;
  --text-title-h4: #c0d2de;
  --text-title-h5: #c0d2de;
  --text-title-h6: #c0d2de;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #202123;
  --titlebar-background-focused: #202123;
  --titlebar-border-color: #949594;
  --titlebar-text-color: #949594;
  --titlebar-text-color-focused: #d5d5d5;
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: #d5d5d5;
  --vault-profile-color-hover: #d5d5d5;
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 33, 35);
  color: rgb(213, 213, 213);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 23, 25);
  color: rgb(213, 213, 213);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 33, 35);
  color: rgb(213, 213, 213);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(148, 149, 148);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 33, 35);
  border-left-color: rgb(148, 149, 148);
  color: rgb(213, 213, 213);
}

body div#quartz-root {
  background-color: rgb(22, 23, 25);
  color: rgb(213, 213, 213);
}`,
    typography: `body .page article p > b, b {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .page article p > em, em {
  color: rgb(213, 213, 213);
  font-weight: 500;
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .page article p > i, i {
  color: rgb(213, 213, 213);
  font-weight: 500;
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .page article p > strong, strong {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .text-highlight {
  background-color: rgba(42, 48, 56, 0.5);
  color: rgb(213, 213, 213);
  font-weight: 500;
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body del {
  color: rgb(213, 213, 213);
  font-weight: 500;
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: line-through rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body p {
  color: rgb(148, 149, 148);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(148, 149, 148) none 0px;
  text-decoration: rgb(148, 149, 148);
  text-decoration-color: rgb(148, 149, 148);
}`,
    links: `body a.external, footer a {
  color: rgb(60, 149, 250);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(60, 149, 250) none 0px;
  text-decoration: rgb(60, 149, 250);
  text-decoration-color: rgb(60, 149, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(60, 149, 250);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(60, 149, 250) none 0px;
  text-decoration: rgb(60, 149, 250);
  text-decoration-color: rgb(60, 149, 250);
}

body a.internal.broken {
  color: rgb(60, 149, 250);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(60, 149, 250) none 0px;
  text-decoration: rgb(60, 149, 250);
  text-decoration-color: rgb(60, 149, 250);
}`,
    lists: `body dd {
  color: rgb(213, 213, 213);
}

body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

body dt {
  color: rgb(213, 213, 213);
}

body ol > li {
  color: rgb(213, 213, 213);
}

body ol.overflow {
  background-color: rgb(22, 23, 25);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body ul > li {
  color: rgb(213, 213, 213);
}

body ul.overflow {
  background-color: rgb(22, 23, 25);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(60, 149, 250);
  text-decoration: rgb(60, 149, 250);
}

body blockquote {
  background-color: rgb(32, 33, 35);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body table {
  color: rgb(213, 213, 213);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(213, 213, 213);
}

body th {
  background-color: rgb(32, 33, 35);
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(213, 213, 213);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(148, 149, 148);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(148, 149, 148);
}`,
    code: `body code {
  background-color: rgb(27, 27, 26);
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
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
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body figcaption {
  color: rgb(213, 213, 213);
  font-size: 24px;
}

body figure {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  margin-bottom: 24px;
  margin-top: 24px;
}

body img {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body video {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
}

body .footnotes {
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .transclude {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body .transclude-inner {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(148, 149, 148);
  text-decoration: line-through rgb(148, 149, 148);
  text-decoration-color: rgb(148, 149, 148);
}

body input[type=checkbox] {
  border-bottom-color: rgb(148, 149, 148);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='*'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='-'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='/'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='>'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='?'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='I'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='S'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='b'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='c'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='d'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='f'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='i'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='k'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='l'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='p'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='u'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='w'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}`,
    search: `body .search > .search-button {
  background-color: rgb(22, 23, 25);
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(213, 213, 213);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 23, 25);
}

body .search > .search-container > .search-space > * {
  color: rgb(213, 213, 213);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(42, 48, 56, 0.5);
  color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 33, 35);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(42, 48, 56, 0.5);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(42, 48, 56, 0.5);
  color: rgb(213, 213, 213);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

body a.internal.tag-link::before {
  color: rgb(60, 149, 250);
}

body h1 {
  color: rgb(192, 210, 222);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2 {
  color: rgb(192, 210, 222);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2.page-title, h2.page-title a {
  color: rgb(213, 213, 213);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h3 {
  color: rgb(192, 210, 222);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h4 {
  color: rgb(192, 210, 222);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h5 {
  color: rgb(192, 210, 222);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h6 {
  color: rgb(192, 210, 222);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body hr {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(22, 23, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 23, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 23, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 23, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 23, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 23, 25);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 23, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 23, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 23, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 23, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 23, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 23, 25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(148, 149, 148);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(148, 149, 148);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 149, 148);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(148, 149, 148);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(148, 149, 148);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(148, 149, 148);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(213, 213, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(213, 213, 213);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
}`,
    footer: `body footer {
  background-color: rgb(32, 33, 35);
  border-bottom-color: rgb(32, 33, 35);
  border-left-color: rgb(32, 33, 35);
  border-right-color: rgb(32, 33, 35);
  border-top-color: rgb(32, 33, 35);
  border-top-width: 0px;
  color: rgb(148, 149, 148);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body footer ul li a {
  color: rgb(148, 149, 148);
  text-decoration: rgb(148, 149, 148);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(213, 213, 213);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(148, 149, 148);
  text-decoration: rgb(148, 149, 148);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(148, 149, 148);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body li.section-li > .section .meta {
  color: rgb(148, 149, 148);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(148, 149, 148);
  text-decoration: rgb(148, 149, 148);
}

body ul.section-ul {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
}

body .darkmode svg {
  color: rgb(148, 149, 148);
  stroke: rgb(148, 149, 148);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
}

body .breadcrumb-element p {
  color: rgb(148, 149, 148);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .metadata {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .metadata-properties {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .navigation-progress {
  background-color: rgb(32, 33, 35);
}

body .page-header h2.page-title {
  color: rgb(60, 149, 250);
}

body abbr {
  color: rgb(213, 213, 213);
  text-decoration: underline dotted rgb(213, 213, 213);
}

body details {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body input[type=text] {
  border-bottom-color: rgb(148, 149, 148);
  border-left-color: rgb(148, 149, 148);
  border-right-color: rgb(148, 149, 148);
  border-top-color: rgb(148, 149, 148);
  color: rgb(148, 149, 148);
}

body kbd {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

body progress {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body sub {
  color: rgb(213, 213, 213);
  font-size: 16.8px;
  vertical-align: super;
}

body summary {
  color: rgb(213, 213, 213);
}

body sup {
  color: rgb(213, 213, 213);
  font-size: 16.8px;
}`,
  },
  light: {},
};
