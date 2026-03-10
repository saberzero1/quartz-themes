import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "gdct",
    modes: ["light"],
    variations: [],
    fonts: ["ia-writer-quattro-s", "monaco"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --background-accent: rgba(0, 0, 0, 0.04);
  --background-modifier-border: #828282;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgb(254, 254, 254);
  --background-modifier-form-field-highlighted: rgb(254, 254, 254);
  --background-modifier-form-field-hover: rgb(254, 254, 254);
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: rgb(254, 254, 254);
  --background-primary-alt: rgba(0, 0, 0, 0.04);
  --background-secondary: rgb(254, 254, 254);
  --background-secondary-alt: rgb(254, 254, 254);
  --bases-cards-background: rgb(254, 254, 254);
  --bases-cards-cover-background: rgba(0, 0, 0, 0.04);
  --bases-cards-shadow: 0 0 0 1px #828282;
  --bases-embed-border-color: #828282;
  --bases-group-heading-property-color: #828282;
  --bases-table-border-color: #828282;
  --bases-table-cell-background-active: rgb(254, 254, 254);
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.04);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.09);
  --bases-table-group-background: rgba(0, 0, 0, 0.04);
  --bases-table-header-background: rgb(254, 254, 254);
  --bases-table-header-color: #828282;
  --bases-table-summary-background: rgb(254, 254, 254);
  --blockquote-bg: rgb(254, 254, 254);
  --blockquote-border: rgba(232, 167, 165, 0.5);
  --blockquote-border-color: rgba(0, 0, 0, 0.09);
  --blur-background: color-mix(in srgb, rgb(254, 254, 254) 65%, transparent) linear-gradient(rgb(254, 254, 254), color-mix(in srgb, rgb(254, 254, 254) 65%, transparent));
  --border-color: rgba(0, 0, 0, 0.1);
  --bracket-color: rgb(200, 200, 200);
  --canvas-background: rgb(254, 254, 254);
  --canvas-card-label-color: #828282;
  --caret-color: #27384B;
  --checkbox-border-color: #828282;
  --checkbox-border-color-hover: #828282;
  --checkbox-color: rgba(0, 0, 0, 0.09);
  --checkbox-color-hover: rgba(232, 167, 165, 0.5);
  --checkbox-marker-color: rgb(254, 254, 254);
  --checklist-done-color: #828282;
  --code-background: rgba(0, 0, 0, 0.04);
  --code-block: #828282;
  --code-border-color: #828282;
  --code-comment: #828282;
  --code-normal: #27384B;
  --code-punctuation: #828282;
  --collapse-icon-color: #828282;
  --collapse-icon-color-collapsed: #C15E50;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #828282;
  --divider-color-hover: rgba(0, 0, 0, 0.09);
  --dropdown-background: rgb(254, 254, 254);
  --dropdown-background-hover: rgba(0, 0, 0, 0.02);
  --embed-block-shadow-hover: 0 0 0 1px #828282, inset 0 0 0 1px #828282;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.09);
  --file-header-background: rgb(254, 254, 254);
  --file-header-background-focused: rgb(254, 254, 254);
  --file-name-color: #C15E50;
  --flair-background: rgb(254, 254, 254);
  --flair-color: #27384B;
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
  --footnote-divider-color: #828282;
  --footnote-id-color: #828282;
  --footnote-id-color-no-occurrences: #828282;
  --graph-line-color: rgb(200, 200, 200);
  --graph-line-on-hover: #C15E50;
  --graph-node: #828282;
  --graph-node-color: #C15E50;
  --graph-node-focused: #C15E50;
  --graph-node-unresolved: #828282;
  --graph-note-name: #27384B;
  --graph-text: #27384B;
  --gray: var(--text-muted);
  --hashtag-color: rgb(254, 254, 254);
  --header-before-color: rgb(200, 200, 200);
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: #828282;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(99, 99, 99);
  --icon-color: #828282;
  --icon-color-active: #C15E50;
  --icon-color-focused: #27384B;
  --icon-color-hover: #828282;
  --inline-code: #828282;
  --input-date-separator: #828282;
  --input-placeholder-color: #828282;
  --interactive-accent: rgba(0, 0, 0, 0.09);
  --interactive-accent-hover: rgba(232, 167, 165, 0.5);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.02);
  --interactive-normal: rgb(254, 254, 254);
  --interfa-color-icon: rgba(0, 0, 0, 0.03);
  --interface-color-action: #27384B;
  --interface-color-background: #415358;
  --interface-color-background-alt: rgb(254, 254, 254);
  --interface-color-border: rgba(0, 0, 0, 0.03);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #C15E50;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: #27384B;
  --interface-color-three-dots: #a0e85b;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-bg-hover: #C15E50;
  --link-color: #C15E50;
  --link-color-hover: #828282;
  --link-external-color: #C15E50;
  --link-external-color-hover: #828282;
  --link-text: #C15E50;
  --link-text-hover: rgb(254, 254, 254);
  --link-unresolved-color: #C15E50;
  --list-marker-color: #828282;
  --list-marker-color-collapsed: #C15E50;
  --list-marker-color-hover: #828282;
  --menu-background: rgb(254, 254, 254);
  --metadata-border-color: #828282;
  --metadata-divider-color: #828282;
  --metadata-input-text-color: #27384B;
  --metadata-label-text-color: #828282;
  --metadata-label-text-color-hover: #828282;
  --modal-background: rgb(254, 254, 254);
  --nav-collapse-icon-color: #828282;
  --nav-collapse-icon-color-collapsed: #828282;
  --nav-heading-color: #27384B;
  --nav-heading-color-collapsed: #828282;
  --nav-heading-color-collapsed-hover: #828282;
  --nav-heading-color-hover: #27384B;
  --nav-item-color: #828282;
  --nav-item-color-active: #27384B;
  --nav-item-color-highlighted: #C15E50;
  --nav-item-color-hover: #27384B;
  --nav-item-color-selected: #27384B;
  --nav-tag-color: #828282;
  --nav-tag-color-active: #828282;
  --nav-tag-color-hover: #828282;
  --pdf-background: rgb(254, 254, 254);
  --pdf-page-background: rgb(254, 254, 254);
  --pdf-sidebar-background: rgb(254, 254, 254);
  --pill-border-color: #828282;
  --pill-color: #828282;
  --pill-color-hover: #27384B;
  --pill-color-remove: #828282;
  --pill-color-remove-hover: #C15E50;
  --pre-code-bg: rgb(250, 250, 250);
  --prompt-background: rgb(254, 254, 254);
  --quick-switcher: rgba(232, 167, 165, 0.5);
  --raised-background: color-mix(in srgb, rgb(254, 254, 254) 65%, transparent) linear-gradient(rgb(254, 254, 254), color-mix(in srgb, rgb(254, 254, 254) 65%, transparent));
  --ribbon-background: rgb(254, 254, 254);
  --ribbon-background-collapsed: rgb(254, 254, 254);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #828282;
  --search-icon-color: #828282;
  --search-result-background: rgb(254, 254, 254);
  --secondary: var(--text-accent);
  --setting-group-heading-color: #27384B;
  --setting-items-background: rgba(0, 0, 0, 0.04);
  --setting-items-border-color: #828282;
  --slider-track-background: #828282;
  --status-bar-background: rgb(254, 254, 254);
  --status-bar-border-color: #828282;
  --status-bar-text-color: #828282;
  --suggestion-background: rgb(254, 254, 254);
  --tab-background-active: rgb(254, 254, 254);
  --tab-container-background: rgb(254, 254, 254);
  --tab-outline-color: #828282;
  --tab-switcher-background: rgb(254, 254, 254);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(254, 254, 254), transparent);
  --tab-text-color: #828282;
  --tab-text-color-active: #828282;
  --tab-text-color-focused: #828282;
  --tab-text-color-focused-active: #828282;
  --tab-text-color-focused-active-current: #27384B;
  --tab-text-color-focused-highlighted: #C15E50;
  --table-add-button-border-color: #828282;
  --table-border-color: #828282;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.09);
  --table-drag-handle-color: #828282;
  --table-drag-handle-color-active: #27384B;
  --table-header-border-color: #828282;
  --table-header-color: #27384B;
  --table-selection-border-color: rgba(0, 0, 0, 0.09);
  --tag-bg: #27384B;
  --tag-color: #C15E50;
  --tag-color-hover: #C15E50;
  --tag-text-color: rgb(254, 254, 254);
  --tertiary: var(--text-accent-hover);
  --text-accent: #C15E50;
  --text-accent-hover: #828282;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #828282;
  --text-highlight-bg: rgba(232, 167, 165, 0.5);
  --text-muted: #828282;
  --text-normal: #27384B;
  --text-on-accent: #27384B;
  --text-search-highlight-bg: rgba(280, 137, 135, 0.9);
  --text-selection: rgba(232, 167, 165, 0.5);
  --text-title-font-weight: 600;
  --text-title-h1: #27384B;
  --text-title-h2: #27384B;
  --text-title-h3: #27384B;
  --text-title-h4: #27384B;
  --text-title-h5: #27384B;
  --text-title-h6: #27384B;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(254, 254, 254);
  --titlebar-background-focused: rgb(254, 254, 254);
  --titlebar-border-color: #828282;
  --titlebar-text-color: #828282;
  --titlebar-text-color-focused: #27384B;
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: #27384B;
  --vault-profile-color-hover: #27384B;
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(254, 254, 254);
  color: rgb(39, 56, 75);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 254, 254);
  color: rgb(39, 56, 75);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(254, 254, 254);
  color: rgb(39, 56, 75);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(130, 130, 130);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(254, 254, 254);
  border-left-color: rgb(130, 130, 130);
  color: rgb(39, 56, 75);
}

body div#quartz-root {
  background-color: rgb(254, 254, 254);
  color: rgb(39, 56, 75);
}`,
    typography: `body .page article p > b, b {
  color: rgb(39, 56, 75);
  outline: rgb(39, 56, 75) none 0px;
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body .page article p > em, em {
  color: rgb(39, 56, 75);
  font-weight: 500;
  outline: rgb(39, 56, 75) none 0px;
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body .page article p > i, i {
  color: rgb(39, 56, 75);
  font-weight: 500;
  outline: rgb(39, 56, 75) none 0px;
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body .page article p > strong, strong {
  color: rgb(39, 56, 75);
  outline: rgb(39, 56, 75) none 0px;
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body .text-highlight {
  background-color: rgba(232, 167, 165, 0.5);
  color: rgb(39, 56, 75);
  font-weight: 500;
  outline: rgb(39, 56, 75) none 0px;
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body del {
  color: rgb(39, 56, 75);
  font-weight: 500;
  outline: rgb(39, 56, 75) none 0px;
  text-decoration: line-through rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body p {
  color: rgb(130, 130, 130);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(130, 130, 130) none 0px;
  text-decoration: rgb(130, 130, 130);
  text-decoration-color: rgb(130, 130, 130);
}`,
    links: `body a.external, footer a {
  color: rgb(193, 94, 80);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(193, 94, 80) none 0px;
  text-decoration: rgb(193, 94, 80);
  text-decoration-color: rgb(193, 94, 80);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(193, 94, 80);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(193, 94, 80) none 0px;
  text-decoration: rgb(193, 94, 80);
  text-decoration-color: rgb(193, 94, 80);
}

body a.internal.broken {
  color: rgb(193, 94, 80);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(193, 94, 80) none 0px;
  text-decoration: rgb(193, 94, 80);
  text-decoration-color: rgb(193, 94, 80);
}`,
    lists: `body dd {
  color: rgb(39, 56, 75);
}

body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

body dt {
  color: rgb(39, 56, 75);
}

body ol > li {
  color: rgb(39, 56, 75);
}

body ol.overflow {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body ul > li {
  color: rgb(39, 56, 75);
}

body ul.overflow {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(193, 94, 80);
  text-decoration: rgb(193, 94, 80);
}

body blockquote {
  background-color: rgb(254, 254, 254);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body table {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(39, 56, 75);
}

body th {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(39, 56, 75);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(130, 130, 130);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(130, 130, 130);
}`,
    code: `body code {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
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
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body figcaption {
  color: rgb(39, 56, 75);
  font-size: 24px;
}

body figure {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
  margin-bottom: 24px;
  margin-top: 24px;
}

body img {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body video {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
}

body .footnotes {
  border-top-color: rgb(39, 56, 75);
  color: rgb(39, 56, 75);
}

body .transclude {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgba(0, 0, 0, 0.09);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body .transclude-inner {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgba(0, 0, 0, 0.09);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(130, 130, 130);
  text-decoration: line-through rgb(130, 130, 130);
  text-decoration-color: rgb(130, 130, 130);
}

body input[type=checkbox] {
  border-bottom-color: rgb(130, 130, 130);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='*'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='-'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='/'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='>'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='?'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='I'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='S'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='b'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='c'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='d'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='f'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='i'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='k'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='l'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='p'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='u'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body li.task-list-item[data-task='w'] {
  color: rgb(39, 56, 75);
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}`,
    search: `body .search > .search-button {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(39, 56, 75);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .search > .search-container > .search-space {
  background-color: rgb(254, 254, 254);
}

body .search > .search-container > .search-space > * {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(39, 56, 75) none 0px;
  text-decoration: rgb(39, 56, 75);
  text-decoration-color: rgb(39, 56, 75);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(39, 56, 75);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(39, 56, 75);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(232, 167, 165, 0.5);
  color: rgb(39, 56, 75);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(254, 254, 254);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(232, 167, 165, 0.5);
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
  color: rgb(39, 56, 75);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(232, 167, 165, 0.5);
  color: rgb(39, 56, 75);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

body a.internal.tag-link::before {
  color: rgb(193, 94, 80);
}

body h1 {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2 {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h2.page-title, h2.page-title a {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
}

body h3 {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h4 {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h5 {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body h6 {
  color: rgb(39, 56, 75);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

body hr {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 254, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 254);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(130, 130, 130);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(130, 130, 130);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(130, 130, 130);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(130, 130, 130);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(130, 130, 130);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  text-decoration: rgb(130, 130, 130);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(39, 56, 75);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(39, 56, 75);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
}`,
    footer: `body footer {
  background-color: rgb(254, 254, 254);
  border-bottom-color: rgb(254, 254, 254);
  border-left-color: rgb(254, 254, 254);
  border-right-color: rgb(254, 254, 254);
  border-top-color: rgb(254, 254, 254);
  border-top-width: 0px;
  color: rgb(130, 130, 130);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body footer ul li a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(39, 56, 75);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
  color: rgb(39, 56, 75);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 130, 130);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body li.section-li > .section .meta {
  color: rgb(130, 130, 130);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

body ul.section-ul {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
}

body .darkmode svg {
  color: rgb(130, 130, 130);
  stroke: rgb(130, 130, 130);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
}

body .breadcrumb-element p {
  color: rgb(130, 130, 130);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
  color: rgb(39, 56, 75);
}

body .metadata {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
}

body .metadata-properties {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
}

body .navigation-progress {
  background-color: rgb(254, 254, 254);
}

body .page-header h2.page-title {
  color: rgb(193, 94, 80);
}

body abbr {
  color: rgb(39, 56, 75);
  text-decoration: underline dotted rgb(39, 56, 75);
}

body details {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body input[type=text] {
  border-bottom-color: rgb(130, 130, 130);
  border-left-color: rgb(130, 130, 130);
  border-right-color: rgb(130, 130, 130);
  border-top-color: rgb(130, 130, 130);
  color: rgb(130, 130, 130);
}

body kbd {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
  color: rgb(39, 56, 75);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

body progress {
  border-bottom-color: rgb(39, 56, 75);
  border-left-color: rgb(39, 56, 75);
  border-right-color: rgb(39, 56, 75);
  border-top-color: rgb(39, 56, 75);
}

body sub {
  color: rgb(39, 56, 75);
  font-size: 16.8px;
  vertical-align: super;
}

body summary {
  color: rgb(39, 56, 75);
}

body sup {
  color: rgb(39, 56, 75);
  font-size: 16.8px;
}`,
  },
};
