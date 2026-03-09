import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "panic-mode",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgba(0, 0, 0, 0.1);
  --background-accent: rgba(0, 0, 0, 0.08);
  --background-modifier-border: #a1a1a1;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgb(21, 30, 45);
  --background-modifier-form-field-highlighted: #5c34ae;
  --background-modifier-form-field-hover: rgb(21, 30, 45);
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: rgb(21, 30, 45);
  --background-primary-alt: rgb(14, 20, 30);
  --background-secondary: rgb(21, 30, 45);
  --background-secondary-alt: rgb(21, 30, 45);
  --bases-cards-background: rgb(21, 30, 45);
  --bases-cards-cover-background: rgb(14, 20, 30);
  --bases-cards-shadow: 0 0 0 1px #a1a1a1;
  --bases-embed-border-color: #a1a1a1;
  --bases-group-heading-property-color: #a1a1a1;
  --bases-table-border-color: #a1a1a1;
  --bases-table-cell-background-active: rgb(21, 30, 45);
  --bases-table-cell-background-disabled: rgb(14, 20, 30);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.1);
  --bases-table-group-background: rgb(14, 20, 30);
  --bases-table-header-background: rgb(21, 30, 45);
  --bases-table-header-color: #a1a1a1;
  --bases-table-summary-background: rgb(21, 30, 45);
  --blockquote-bg: rgb(21, 30, 45);
  --blockquote-border: #46b4d3;
  --blockquote-border-color: rgba(0, 0, 0, 0.1);
  --blur-background: color-mix(in srgb, rgb(21, 30, 45) 65%, transparent) linear-gradient(rgb(21, 30, 45), color-mix(in srgb, rgb(21, 30, 45) 65%, transparent));
  --border-color: #090b0d;
  --bracket-color: #a77e32;
  --canvas-background: rgb(21, 30, 45);
  --canvas-card-label-color: #a1a1a1;
  --caret-color: rgb(224, 226, 213);
  --checkbox-border-color: #a1a1a1;
  --checkbox-border-color-hover: #a1a1a1;
  --checkbox-color: rgb(21, 30, 45);
  --checkbox-color-hover: rgba(80, 102, 130, 0.5);
  --checkbox-enabled: #5c34ae;
  --checkbox-marker-color: rgb(21, 30, 45);
  --checklist-done-color: #a1a1a1;
  --code-background: rgb(14, 20, 30);
  --code-block: #a1a1a1;
  --code-border-color: #a1a1a1;
  --code-comment: #a1a1a1;
  --code-normal: rgb(224, 226, 213);
  --code-punctuation: #a1a1a1;
  --collapse-icon-color: #a1a1a1;
  --collapse-icon-color-collapsed: #46b4d3;
  --divider-color: #a1a1a1;
  --divider-color-hover: rgba(0, 0, 0, 0.1);
  --dropdown-background: rgb(21, 30, 45);
  --dropdown-background-hover: rgba(0, 0, 0, 0.05);
  --embed-block-shadow-hover: 0 0 0 1px #a1a1a1, inset 0 0 0 1px #a1a1a1;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.1);
  --file-header-background: rgb(21, 30, 45);
  --file-header-background-focused: rgb(21, 30, 45);
  --file-name-color: #46b4d3;
  --flair-background: rgb(21, 30, 45);
  --flair-color: rgb(224, 226, 213);
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
  --footnote-divider-color: #a1a1a1;
  --footnote-id-color: #a1a1a1;
  --footnote-id-color-no-occurrences: #a1a1a1;
  --graph-line-color: #282c3c;
  --graph-line-on-hover: #a77e32;
  --graph-node: #a1a1a1;
  --graph-node-color: #a77e32;
  --graph-node-focused: #46b4d3;
  --graph-node-unresolved: #a1a1a1;
  --graph-note-name: rgb(224, 226, 213);
  --graph-text: rgb(224, 226, 213);
  --hashtag-color: rgb(224, 226, 213);
  --header-before-color: #a77e32;
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: #a1a1a1;
  --hr-color: rgb(99, 99, 99);
  --icon-color: #a1a1a1;
  --icon-color-active: #46b4d3;
  --icon-color-focused: rgb(224, 226, 213);
  --icon-color-hover: #a1a1a1;
  --inline-code: #a1a1a1;
  --input-date-separator: #a1a1a1;
  --input-placeholder-color: #a1a1a1;
  --interactive-accent: rgba(0, 0, 0, 0.1);
  --interactive-accent-hover: rgba(80, 102, 130, 0.5);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.05);
  --interactive-normal: rgb(21, 30, 45);
  --interfa-color-icon: rgba(250, 250, 250, 0.045);
  --interface-color-action: rgb(224, 226, 213);
  --interface-color-background: #415358;
  --interface-color-background-alt: rgb(21, 30, 45);
  --interface-color-border: rgba(250, 250, 250, 0.045);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #46b4d3;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: rgb(224, 226, 213);
  --interface-color-three-dots: #a0e85b;
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-color: #46b4d3;
  --link-color-hover: #a1a1a1;
  --link-external-color: #46b4d3;
  --link-external-color-hover: #a1a1a1;
  --link-text: #46b4d3;
  --link-text-hover: #46b4d3;
  --link-unresolved-color: #46b4d3;
  --list-marker-color: #a1a1a1;
  --list-marker-color-collapsed: #46b4d3;
  --list-marker-color-hover: #a1a1a1;
  --menu-background: rgb(21, 30, 45);
  --metadata-border-color: #a1a1a1;
  --metadata-divider-color: #a1a1a1;
  --metadata-input-text-color: rgb(224, 226, 213);
  --metadata-label-text-color: #a1a1a1;
  --metadata-label-text-color-hover: #a1a1a1;
  --modal-background: rgb(21, 30, 45);
  --nav-collapse-icon-color: #a1a1a1;
  --nav-collapse-icon-color-collapsed: #a1a1a1;
  --nav-heading-color: rgb(224, 226, 213);
  --nav-heading-color-collapsed: #a1a1a1;
  --nav-heading-color-collapsed-hover: #a1a1a1;
  --nav-heading-color-hover: rgb(224, 226, 213);
  --nav-item-color: #a1a1a1;
  --nav-item-color-active: rgb(224, 226, 213);
  --nav-item-color-highlighted: #46b4d3;
  --nav-item-color-hover: rgb(224, 226, 213);
  --nav-item-color-selected: rgb(224, 226, 213);
  --nav-tag-color: #a1a1a1;
  --nav-tag-color-active: #a1a1a1;
  --nav-tag-color-hover: #a1a1a1;
  --pdf-background: rgb(21, 30, 45);
  --pdf-page-background: rgb(21, 30, 45);
  --pdf-shadow: 0 0 0 1px #a1a1a1;
  --pdf-sidebar-background: rgb(21, 30, 45);
  --pdf-thumbnail-shadow: 0 0 0 1px #a1a1a1;
  --pill-border-color: #a1a1a1;
  --pill-color: #a1a1a1;
  --pill-color-hover: rgb(224, 226, 213);
  --pill-color-remove: #a1a1a1;
  --pill-color-remove-hover: #46b4d3;
  --pre-code-bg: #121826;
  --prompt-background: rgb(21, 30, 45);
  --quick-switcher: rgba(80, 102, 130, 0.5);
  --raised-background: color-mix(in srgb, rgb(21, 30, 45) 65%, transparent) linear-gradient(rgb(21, 30, 45), color-mix(in srgb, rgb(21, 30, 45) 65%, transparent));
  --ribbon-background: rgb(21, 30, 45);
  --ribbon-background-collapsed: rgb(21, 30, 45);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #a1a1a1;
  --search-icon-color: #a1a1a1;
  --search-result-background: rgb(21, 30, 45);
  --setting-group-heading-color: rgb(224, 226, 213);
  --setting-items-background: rgb(14, 20, 30);
  --setting-items-border-color: #a1a1a1;
  --slider-track-background: #a1a1a1;
  --status-bar-background: rgb(21, 30, 45);
  --status-bar-border-color: #a1a1a1;
  --status-bar-text-color: #a1a1a1;
  --suggestion-background: rgb(21, 30, 45);
  --tab-background-active: rgb(21, 30, 45);
  --tab-container-background: rgb(21, 30, 45);
  --tab-outline-color: #a1a1a1;
  --tab-switcher-background: rgb(21, 30, 45);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(21, 30, 45), transparent);
  --tab-text-color: #a1a1a1;
  --tab-text-color-active: #a1a1a1;
  --tab-text-color-focused: #a1a1a1;
  --tab-text-color-focused-active: #a1a1a1;
  --tab-text-color-focused-active-current: rgb(224, 226, 213);
  --tab-text-color-focused-highlighted: #46b4d3;
  --table-add-button-border-color: #a1a1a1;
  --table-border-color: #a1a1a1;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.1);
  --table-drag-handle-color: #a1a1a1;
  --table-drag-handle-color-active: rgb(224, 226, 213);
  --table-header-border-color: #a1a1a1;
  --table-header-color: rgb(224, 226, 213);
  --table-selection-border-color: rgba(0, 0, 0, 0.1);
  --tag-bg: #5c34ae;
  --tag-bg-hover: #5c34ae;
  --tag-color: #46b4d3;
  --tag-color-hover: #46b4d3;
  --tag-text-color: rgb(224, 226, 213);
  --tag-text-hover: rgb(224, 226, 213);
  --text-accent: #46b4d3;
  --text-accent-hover: #a1a1a1;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #a1a1a1;
  --text-highlight-bg: rgba(80, 102, 130, 0.5);
  --text-muted: #a1a1a1;
  --text-normal: rgb(224, 226, 213);
  --text-on-accent: rgb(224, 226, 213);
  --text-selection: rgba(80, 102, 130, 0.5);
  --text-title-font-weight: 600;
  --text-title-h1: #f6a82a;
  --text-title-h2: #f6a82a;
  --text-title-h3: #f6a82a;
  --text-title-h4: #f6a82a;
  --text-title-h5: #f6a82a;
  --text-title-h6: #f6a82a;
  --titlebar-background: rgb(21, 30, 45);
  --titlebar-background-focused: rgb(21, 30, 45);
  --titlebar-border-color: #a1a1a1;
  --titlebar-text-color: #a1a1a1;
  --titlebar-text-color-focused: rgb(224, 226, 213);
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: rgb(224, 226, 213);
  --vault-profile-color-hover: rgb(224, 226, 213);
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 30, 45);
  color: rgb(224, 226, 213);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(21, 30, 45);
  color: rgb(224, 226, 213);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 30, 45);
  color: rgb(224, 226, 213);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(161, 161, 161);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 30, 45);
  border-left-color: rgb(161, 161, 161);
  color: rgb(224, 226, 213);
}

body div#quartz-root {
  background-color: rgb(21, 30, 45);
  color: rgb(224, 226, 213);
}`,
    typography: `body .page article p > b, b {
  color: rgb(246, 168, 42);
  outline: rgb(246, 168, 42) none 0px;
  text-decoration: rgb(246, 168, 42);
  text-decoration-color: rgb(246, 168, 42);
}

body .page article p > em, em {
  color: rgb(224, 226, 213);
  font-weight: 500;
  outline: rgb(224, 226, 213) none 0px;
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body .page article p > i, i {
  color: rgb(224, 226, 213);
  font-weight: 500;
  outline: rgb(224, 226, 213) none 0px;
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body .page article p > strong, strong {
  color: rgb(246, 168, 42);
  outline: rgb(246, 168, 42) none 0px;
  text-decoration: rgb(246, 168, 42);
  text-decoration-color: rgb(246, 168, 42);
}

body .text-highlight {
  background-color: rgba(80, 102, 130, 0.5);
  color: rgb(224, 226, 213);
  font-weight: 500;
  outline: rgb(224, 226, 213) none 0px;
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body del {
  color: rgb(224, 226, 213);
  font-weight: 500;
  outline: rgb(224, 226, 213) none 0px;
  text-decoration: line-through rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body p {
  color: rgb(161, 161, 161);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(161, 161, 161) none 0px;
  text-decoration: rgb(161, 161, 161);
  text-decoration-color: rgb(161, 161, 161);
}`,
    links: `body a.external, footer a {
  color: rgb(70, 180, 211);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(70, 180, 211) none 0px;
  text-decoration: rgb(70, 180, 211);
  text-decoration-color: rgb(70, 180, 211);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(70, 180, 211);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(70, 180, 211) none 0px;
  text-decoration: rgb(70, 180, 211);
  text-decoration-color: rgb(70, 180, 211);
}

body a.internal.broken {
  color: rgb(70, 180, 211);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(70, 180, 211) none 0px;
  text-decoration: rgb(70, 180, 211);
  text-decoration-color: rgb(70, 180, 211);
}`,
    lists: `body dd {
  color: rgb(224, 226, 213);
}

body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

body dt {
  color: rgb(224, 226, 213);
}

body ol > li {
  color: rgb(224, 226, 213);
}

body ol.overflow {
  background-color: rgb(21, 30, 45);
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body ul > li {
  color: rgb(224, 226, 213);
}

body ul.overflow {
  background-color: rgb(21, 30, 45);
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(70, 180, 211);
  text-decoration: rgb(70, 180, 211);
}

body blockquote {
  background-color: rgb(21, 30, 45);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body table {
  color: rgb(224, 226, 213);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(224, 226, 213);
}

body th {
  background-color: rgb(21, 30, 45);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(224, 226, 213);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(161, 161, 161);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(161, 161, 161);
}`,
    code: `body code {
  background-color: rgb(18, 24, 38);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(14, 20, 30);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(14, 20, 30);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
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
  background-color: rgb(14, 20, 30);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(14, 20, 30);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body figcaption {
  color: rgb(224, 226, 213);
  font-size: 24px;
}

body figure {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
  margin-bottom: 24px;
  margin-top: 24px;
}

body img {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body video {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}`,
    embeds: `body .file-embed {
  background-color: rgb(14, 20, 30);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
}

body .footnotes {
  border-top-color: rgb(224, 226, 213);
  color: rgb(224, 226, 213);
}

body .transclude {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body .transclude-inner {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(161, 161, 161);
  text-decoration: line-through rgb(161, 161, 161);
  text-decoration-color: rgb(161, 161, 161);
}

body input[type=checkbox] {
  border-bottom-color: rgb(161, 161, 161);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='*'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='-'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='/'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='>'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='?'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='I'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='S'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='b'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='c'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='d'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='f'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='i'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='k'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='l'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='p'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='u'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body li.task-list-item[data-task='w'] {
  color: rgb(224, 226, 213);
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}`,
    search: `body .search > .search-button {
  background-color: rgb(21, 30, 45);
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(224, 226, 213);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgb(21, 30, 45);
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 226, 213);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(224, 226, 213) none 0px;
  text-decoration: rgb(224, 226, 213);
  text-decoration-color: rgb(224, 226, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 226, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 226, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(80, 102, 130, 0.5);
  color: rgb(224, 226, 213);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 30, 45);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(80, 102, 130, 0.5);
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
  color: rgb(224, 226, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(80, 102, 130, 0.5);
  color: rgb(224, 226, 213);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

body a.internal.tag-link::before {
  color: rgb(70, 180, 211);
}

body h1 {
  color: rgb(246, 168, 42);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2 {
  color: rgb(246, 168, 42);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 226, 213);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h3 {
  color: rgb(246, 168, 42);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h4 {
  color: rgb(246, 168, 42);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h5 {
  color: rgb(246, 168, 42);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h6 {
  color: rgb(246, 168, 42);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body hr {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(21, 30, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 30, 45);
}

body ::-webkit-scrollbar-corner {
  background: rgb(21, 30, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 30, 45);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(21, 30, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 30, 45);
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(21, 30, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 30, 45);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(21, 30, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 30, 45);
}

body ::-webkit-scrollbar-track {
  background: rgb(21, 30, 45) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 30, 45);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(161, 161, 161);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(161, 161, 161);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(161, 161, 161);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(161, 161, 161);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(161, 161, 161);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(161, 161, 161);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(224, 226, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 226, 213);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
}`,
    footer: `body footer {
  background-color: rgb(21, 30, 45);
  border-bottom-color: rgb(21, 30, 45);
  border-left-color: rgb(21, 30, 45);
  border-right-color: rgb(21, 30, 45);
  border-top-color: rgb(21, 30, 45);
  border-top-width: 0px;
  color: rgb(161, 161, 161);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body footer ul li a {
  color: rgb(161, 161, 161);
  text-decoration: rgb(161, 161, 161);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(224, 226, 213);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
  color: rgb(224, 226, 213);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(161, 161, 161);
  text-decoration: rgb(161, 161, 161);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(161, 161, 161);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body li.section-li > .section .meta {
  color: rgb(161, 161, 161);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(161, 161, 161);
  text-decoration: rgb(161, 161, 161);
}

body ul.section-ul {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
}

body .darkmode svg {
  color: rgb(161, 161, 161);
  stroke: rgb(161, 161, 161);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
}

body .breadcrumb-element p {
  color: rgb(161, 161, 161);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
  color: rgb(224, 226, 213);
}

body .metadata {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .metadata-properties {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .navigation-progress {
  background-color: rgb(21, 30, 45);
}

body .page-header h2.page-title {
  color: rgb(70, 180, 211);
}

body abbr {
  color: rgb(224, 226, 213);
  text-decoration: underline dotted rgb(224, 226, 213);
}

body details {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body input[type=text] {
  border-bottom-color: rgb(161, 161, 161);
  border-left-color: rgb(161, 161, 161);
  border-right-color: rgb(161, 161, 161);
  border-top-color: rgb(161, 161, 161);
  color: rgb(161, 161, 161);
}

body kbd {
  background-color: rgb(14, 20, 30);
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
  color: rgb(224, 226, 213);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

body progress {
  border-bottom-color: rgb(224, 226, 213);
  border-left-color: rgb(224, 226, 213);
  border-right-color: rgb(224, 226, 213);
  border-top-color: rgb(224, 226, 213);
}

body sub {
  color: rgb(224, 226, 213);
  font-size: 16.8px;
  vertical-align: super;
}

body summary {
  color: rgb(224, 226, 213);
}

body sup {
  color: rgb(224, 226, 213);
  font-size: 16.8px;
}`,
  },
  light: {},
};
