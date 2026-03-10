import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "charcoal",
    modes: ["dark"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco", "source-sans-pro"],
  },
  dark: {
    base: `:root:root {
  --active-title-border: rgba(0, 0, 0, 0.1);
  --background-accent: rgba(0, 0, 0, 0.08);
  --background-modifier-border: rgb(109, 109, 109);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #222527;
  --background-modifier-form-field-highlighted: #222527;
  --background-modifier-form-field-hover: #222527;
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: #222527;
  --background-primary-alt: rgba(0, 0, 0, 0.08);
  --background-secondary: #1c1e21;
  --background-secondary-alt: #1c1e21;
  --bases-cards-background: #222527;
  --bases-cards-cover-background: rgba(0, 0, 0, 0.08);
  --bases-cards-shadow: 0 0 0 1px rgb(109, 109, 109);
  --bases-embed-border-color: rgb(109, 109, 109);
  --bases-group-heading-property-color: rgb(109, 109, 109);
  --bases-table-border-color: rgb(109, 109, 109);
  --bases-table-cell-background-active: #222527;
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.08);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.1);
  --bases-table-group-background: rgba(0, 0, 0, 0.08);
  --bases-table-header-background: #222527;
  --bases-table-header-color: rgb(109, 109, 109);
  --bases-table-summary-background: #222527;
  --blockquote-bg: #222527;
  --blockquote-border: #9bb7c5;
  --blockquote-border-color: rgba(0, 0, 0, 0.1);
  --blur-background: color-mix(in srgb, #222527 65%, transparent) linear-gradient(#222527, color-mix(in srgb, #222527 65%, transparent));
  --border-color: #1f1f20;
  --canvas-background: #222527;
  --canvas-card-label-color: rgb(109, 109, 109);
  --caret-color: #959595;
  --checkbox-border-color: rgb(109, 109, 109);
  --checkbox-border-color-hover: rgb(109, 109, 109);
  --checkbox-color: #2f3337;
  --checkbox-color-hover: rgba(60, 68, 76, 0.5);
  --checkbox-enabled: #9bb7c5;
  --checkbox-marker-color: #222527;
  --checklist-done-color: rgb(109, 109, 109);
  --code-background: rgba(0, 0, 0, 0.08);
  --code-block: #868787;
  --code-border-color: rgb(109, 109, 109);
  --code-comment: rgb(109, 109, 109);
  --code-normal: #959595;
  --code-punctuation: rgb(109, 109, 109);
  --collapse-icon-color: rgb(109, 109, 109);
  --collapse-icon-color-collapsed: #9bb7c5;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(109, 109, 109);
  --divider-color-hover: rgba(0, 0, 0, 0.1);
  --dropdown-background: #222527;
  --dropdown-background-hover: rgba(0, 0, 0, 0.05);
  --embed-block-shadow-hover: 0 0 0 1px rgb(109, 109, 109), inset 0 0 0 1px rgb(109, 109, 109);
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.1);
  --file-header-background: #222527;
  --file-header-background-focused: #222527;
  --file-name-color: #9bb7c5;
  --flair-background: #222527;
  --flair-color: #959595;
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
  --footnote-divider-color: rgb(109, 109, 109);
  --footnote-id-color: rgb(109, 109, 109);
  --footnote-id-color-no-occurrences: rgb(109, 109, 109);
  --graph-line-color: rgb(48, 47, 48);
  --graph-line-on-hover: #4F565E;
  --graph-node: rgb(109, 109, 109);
  --graph-node-color: rgb(109, 109, 109);
  --graph-node-focused: #9bb7c5;
  --graph-node-unresolved: rgb(109, 109, 109);
  --graph-note-name: #959595;
  --graph-text: #959595;
  --gray: var(--text-muted);
  --hashtag-color: #4c535a;
  --header-before-color: #575757;
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: rgb(109, 109, 109);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(99, 99, 99);
  --icon-color: rgb(109, 109, 109);
  --icon-color-active: #9bb7c5;
  --icon-color-focused: #959595;
  --icon-color-hover: rgb(109, 109, 109);
  --inline-code: rgb(109, 109, 109);
  --input-date-separator: rgb(109, 109, 109);
  --input-placeholder-color: rgb(109, 109, 109);
  --interactive-accent: rgba(0, 0, 0, 0.1);
  --interactive-accent-hover: rgba(60, 68, 76, 0.5);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.05);
  --interactive-normal: #222527;
  --interfa-color-icon: rgba(250, 250, 250, 0.045);
  --interface-color-action: #959595;
  --interface-color-background: #415358;
  --interface-color-background-alt: #222527;
  --interface-color-border: rgba(250, 250, 250, 0.045);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #9bb7c5;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: #959595;
  --interface-color-three-dots: #a0e85b;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-color: #9bb7c5;
  --link-color-hover: rgb(109, 109, 109);
  --link-external-color: #9bb7c5;
  --link-external-color-hover: rgb(109, 109, 109);
  --link-text: #9bb7c5;
  --link-text-hover: #9bb7c5;
  --link-unresolved-color: #9bb7c5;
  --list-marker-color: rgb(109, 109, 109);
  --list-marker-color-collapsed: #9bb7c5;
  --list-marker-color-hover: rgb(109, 109, 109);
  --menu-background: #1c1e21;
  --metadata-border-color: rgb(109, 109, 109);
  --metadata-divider-color: rgb(109, 109, 109);
  --metadata-input-text-color: #959595;
  --metadata-label-text-color: rgb(109, 109, 109);
  --metadata-label-text-color-hover: rgb(109, 109, 109);
  --modal-background: #222527;
  --nav-collapse-icon-color: rgb(109, 109, 109);
  --nav-collapse-icon-color-collapsed: rgb(109, 109, 109);
  --nav-heading-color: #959595;
  --nav-heading-color-collapsed: rgb(109, 109, 109);
  --nav-heading-color-collapsed-hover: rgb(109, 109, 109);
  --nav-heading-color-hover: #959595;
  --nav-item-color: rgb(109, 109, 109);
  --nav-item-color-active: #959595;
  --nav-item-color-highlighted: #9bb7c5;
  --nav-item-color-hover: #959595;
  --nav-item-color-selected: #959595;
  --nav-tag-color: rgb(109, 109, 109);
  --nav-tag-color-active: rgb(109, 109, 109);
  --nav-tag-color-hover: rgb(109, 109, 109);
  --pdf-background: #222527;
  --pdf-page-background: #222527;
  --pdf-shadow: 0 0 0 1px rgb(109, 109, 109);
  --pdf-sidebar-background: #222527;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(109, 109, 109);
  --pill-border-color: rgb(109, 109, 109);
  --pill-color: rgb(109, 109, 109);
  --pill-color-hover: #959595;
  --pill-color-remove: rgb(109, 109, 109);
  --pill-color-remove-hover: #9bb7c5;
  --pre-code-bg: #22262a;
  --prompt-background: #222527;
  --quick-switcher: rgba(60, 68, 76, 0.5);
  --raised-background: color-mix(in srgb, #222527 65%, transparent) linear-gradient(#222527, color-mix(in srgb, #222527 65%, transparent));
  --ribbon-background: #1c1e21;
  --ribbon-background-collapsed: #222527;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: rgb(109, 109, 109);
  --search-icon-color: rgb(109, 109, 109);
  --search-result-background: #222527;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #959595;
  --setting-items-background: rgba(0, 0, 0, 0.08);
  --setting-items-border-color: rgb(109, 109, 109);
  --slider-track-background: rgb(109, 109, 109);
  --status-bar-background: #1c1e21;
  --status-bar-border-color: rgb(109, 109, 109);
  --status-bar-text-color: rgb(109, 109, 109);
  --suggestion-background: #222527;
  --tab-background-active: #222527;
  --tab-container-background: #1c1e21;
  --tab-outline-color: rgb(109, 109, 109);
  --tab-switcher-background: #1c1e21;
  --tab-switcher-menubar-background: linear-gradient(to top, #1c1e21, transparent);
  --tab-text-color: rgb(109, 109, 109);
  --tab-text-color-active: rgb(109, 109, 109);
  --tab-text-color-focused: rgb(109, 109, 109);
  --tab-text-color-focused-active: rgb(109, 109, 109);
  --tab-text-color-focused-active-current: #959595;
  --tab-text-color-focused-highlighted: #9bb7c5;
  --table-add-button-border-color: rgb(109, 109, 109);
  --table-border-color: rgb(109, 109, 109);
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.1);
  --table-drag-handle-color: rgb(109, 109, 109);
  --table-drag-handle-color-active: #959595;
  --table-header-border-color: rgb(109, 109, 109);
  --table-header-color: #959595;
  --table-selection-border-color: rgba(0, 0, 0, 0.1);
  --tag-bg: #2f3337;
  --tag-bg-hover: #2f3337;
  --tag-color: #9bb7c5;
  --tag-color-hover: #9bb7c5;
  --tag-text-color: #959595;
  --tag-text-hover: #959595;
  --tertiary: var(--text-accent-hover);
  --text-accent: #9bb7c5;
  --text-accent-hover: rgb(109, 109, 109);
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: rgb(109, 109, 109);
  --text-highlight-bg: rgba(60, 68, 76, 0.5);
  --text-muted: rgb(109, 109, 109);
  --text-normal: #959595;
  --text-on-accent: #959595;
  --text-selection: rgba(60, 68, 76, 0.5);
  --text-title-font-weight: 600;
  --text-title-h1: #9c9c9d;
  --text-title-h2: #9c9c9d;
  --text-title-h3: #9c9c9d;
  --text-title-h4: #9c9c9d;
  --text-title-h5: #9c9c9d;
  --text-title-h6: #9c9c9d;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #1c1e21;
  --titlebar-background-focused: #1c1e21;
  --titlebar-border-color: rgb(109, 109, 109);
  --titlebar-text-color: rgb(109, 109, 109);
  --titlebar-text-color-focused: #959595;
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: #959595;
  --vault-profile-color-hover: #959595;
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 30, 33);
  color: rgb(149, 149, 149);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 37, 39);
  color: rgb(149, 149, 149);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 30, 33);
  color: rgb(149, 149, 149);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(109, 109, 109);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 30, 33);
  border-left-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
}

body div#quartz-root {
  background-color: rgb(34, 37, 39);
  color: rgb(149, 149, 149);
}`,
    typography: `body .page article p > b, b {
  color: rgb(149, 149, 149);
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body .page article p > em, em {
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body .page article p > i, i {
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body .page article p > strong, strong {
  color: rgb(149, 149, 149);
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body .text-highlight {
  background-color: rgba(60, 68, 76, 0.5);
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body del {
  color: rgb(149, 149, 149);
  font-weight: 500;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: line-through rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body p {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(109, 109, 109) none 0px;
  text-decoration: rgb(109, 109, 109);
  text-decoration-color: rgb(109, 109, 109);
}`,
    links: `body a.external, footer a {
  color: rgb(155, 183, 197);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(155, 183, 197) none 0px;
  text-decoration: rgb(155, 183, 197);
  text-decoration-color: rgb(155, 183, 197);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(155, 183, 197);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(155, 183, 197) none 0px;
  text-decoration: rgb(155, 183, 197);
  text-decoration-color: rgb(155, 183, 197);
}

body a.internal.broken {
  color: rgb(155, 183, 197);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(155, 183, 197) none 0px;
  text-decoration: rgb(155, 183, 197);
  text-decoration-color: rgb(155, 183, 197);
}`,
    lists: `body dd {
  color: rgb(149, 149, 149);
}

body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

body dt {
  color: rgb(149, 149, 149);
}

body ol > li {
  color: rgb(149, 149, 149);
}

body ol.overflow {
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body ul > li {
  color: rgb(149, 149, 149);
}

body ul.overflow {
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(155, 183, 197);
  text-decoration: rgb(155, 183, 197);
}

body blockquote {
  background-color: rgb(28, 30, 33);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body table {
  color: rgb(149, 149, 149);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
}

body th {
  background-color: rgb(28, 30, 33);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(109, 109, 109);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(109, 109, 109);
}`,
    code: `body code {
  background-color: rgb(34, 38, 42);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
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
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body figcaption {
  color: rgb(149, 149, 149);
  font-size: 24px;
}

body figure {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  margin-bottom: 24px;
  margin-top: 24px;
}

body img {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body video {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
}

body .footnotes {
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

body .transclude {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body .transclude-inner {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(109, 109, 109);
  text-decoration: line-through rgb(109, 109, 109);
  text-decoration-color: rgb(109, 109, 109);
}

body input[type=checkbox] {
  border-bottom-color: rgb(109, 109, 109);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='*'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='-'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='/'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='>'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='?'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='I'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='S'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='b'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='c'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='d'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='f'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='i'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='k'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='l'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='p'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='u'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body li.task-list-item[data-task='w'] {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}`,
    search: `body .search > .search-button {
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(149, 149, 149);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 37, 39);
}

body .search > .search-container > .search-space > * {
  color: rgb(149, 149, 149);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(149, 149, 149);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(149, 149, 149);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 68, 76, 0.5);
  color: rgb(149, 149, 149);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 30, 33);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(60, 68, 76, 0.5);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 68, 76, 0.5);
  color: rgb(149, 149, 149);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

body a.internal.tag-link::before {
  color: rgb(155, 183, 197);
}

body h1 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2.page-title, h2.page-title a {
  color: rgb(149, 149, 149);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h3 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h4 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h5 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h6 {
  color: rgb(156, 156, 157);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body hr {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 37, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 37, 39);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(109, 109, 109);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(109, 109, 109);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(109, 109, 109);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(149, 149, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(149, 149, 149);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}`,
    footer: `body footer {
  background-color: rgb(28, 30, 33);
  border-bottom-color: rgb(28, 30, 33);
  border-left-color: rgb(28, 30, 33);
  border-right-color: rgb(28, 30, 33);
  border-top-color: rgb(28, 30, 33);
  border-top-width: 0px;
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body footer ul li a {
  color: rgb(109, 109, 109);
  text-decoration: rgb(109, 109, 109);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(149, 149, 149);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(109, 109, 109);
  text-decoration: rgb(109, 109, 109);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body li.section-li > .section .meta {
  color: rgb(109, 109, 109);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(109, 109, 109);
  text-decoration: rgb(109, 109, 109);
}

body ul.section-ul {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}

body .darkmode svg {
  color: rgb(109, 109, 109);
  stroke: rgb(109, 109, 109);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}

body .breadcrumb-element p {
  color: rgb(109, 109, 109);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}

body .metadata {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .metadata-properties {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body .navigation-progress {
  background-color: rgb(28, 30, 33);
}

body .page-header h2.page-title {
  color: rgb(155, 183, 197);
}

body abbr {
  color: rgb(149, 149, 149);
  text-decoration: underline dotted rgb(149, 149, 149);
}

body details {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body input[type=text] {
  border-bottom-color: rgb(109, 109, 109);
  border-left-color: rgb(109, 109, 109);
  border-right-color: rgb(109, 109, 109);
  border-top-color: rgb(109, 109, 109);
  color: rgb(109, 109, 109);
}

body kbd {
  background-color: rgba(0, 0, 0, 0.08);
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

body progress {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
}

body sub {
  color: rgb(149, 149, 149);
  font-size: 16.8px;
  vertical-align: super;
}

body summary {
  color: rgb(149, 149, 149);
}

body sup {
  color: rgb(149, 149, 149);
  font-size: 16.8px;
}`,
  },
  light: {},
};
