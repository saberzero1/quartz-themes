import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "aura",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-mono", "ia-writer-duo", "ia-writer-quattro-s", "monaco"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(50, 50, 50);
  --background-modifier-border-hover: rgb(50, 50, 50);
  --background-modifier-form-field: rgb(18, 18, 18);
  --background-modifier-form-field-hover: rgb(18, 18, 18);
  --background-modifier-hover: rgba(18, 18, 18, 0.7);
  --background-primary: rgb(25, 25, 25);
  --background-primary-alt: rgb(27, 27, 27);
  --background-secondary: rgb(20, 20, 20);
  --background-secondary-alt: rgb(22, 22, 22);
  --bases-cards-background: rgb(25, 25, 25);
  --bases-cards-cover-background: rgb(27, 27, 27);
  --bases-cards-shadow: 0 0 0 1px rgb(50, 50, 50);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(50, 50, 50);
  --bases-embed-border-color: rgb(50, 50, 50);
  --bases-group-heading-property-color: rgba(240, 240, 240, 0.7);
  --bases-table-border-color: rgb(50, 50, 50);
  --bases-table-cell-background-active: rgb(25, 25, 25);
  --bases-table-cell-background-disabled: rgb(27, 27, 27);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(112, 122, 250);
  --bases-table-group-background: rgb(27, 27, 27);
  --bases-table-header-background: rgb(25, 25, 25);
  --bases-table-header-background-hover: rgba(18, 18, 18, 0.7);
  --bases-table-header-color: rgba(240, 240, 240, 0.7);
  --bases-table-summary-background: rgb(25, 25, 25);
  --bases-table-summary-background-hover: rgba(18, 18, 18, 0.7);
  --blockquote-border-color: rgb(112, 122, 250);
  --blur-background: color-mix(in srgb, rgb(18, 18, 18) 65%, transparent) linear-gradient(rgb(18, 18, 18), color-mix(in srgb, rgb(18, 18, 18) 65%, transparent));
  --bold-color: rgb(208, 66, 85);
  --bold-colors: rgb(208, 66, 85);
  --canvas-background: rgb(25, 25, 25);
  --canvas-card-label-color: rgba(240, 240, 240, 0.7);
  --card-background-color: rgb(18, 18, 18);
  --caret-color: rgb(240, 240, 240);
  --checkbox-border-color: rgba(240, 240, 240, 0.7);
  --checkbox-border-color-hover: rgba(240, 240, 240, 0.7);
  --checkbox-color: rgb(112, 122, 250);
  --checkbox-color-hover: rgba(112, 122, 250, 0.7);
  --checkbox-marker-color: rgb(10, 10, 10);
  --checklist-done-color: rgba(240, 240, 240, 0.7);
  --code-background: rgb(27, 27, 27);
  --code-border-color: rgb(50, 50, 50);
  --code-bracket-background: rgba(18, 18, 18, 0.7);
  --code-comment: rgba(240, 240, 240, 0.7);
  --code-normal: rgb(240, 240, 240);
  --code-punctuation: rgba(240, 240, 240, 0.7);
  --collapse-icon-color: rgba(240, 240, 240, 0.7);
  --collapse-icon-color-collapsed: rgb(112, 122, 250);
  --color-accent: rgb(112, 122, 250);
  --cpt-accent: 112, 122, 250;
  --cpt-aura: 112, 122, 250;
  --cpt-black: 10, 10, 10;
  --cpt-blue: 112, 122, 250;
  --cpt-border: 50, 50, 50;
  --cpt-core: 25, 25, 25;
  --cpt-core-alt: 27, 27, 27;
  --cpt-crust: 18, 18, 18;
  --cpt-crust-alt: 19, 19, 19;
  --cpt-cyan: 50, 181, 185;
  --cpt-green: 168, 195, 115;
  --cpt-mantle: 20, 20, 20;
  --cpt-mantle-alt: 22, 22, 22;
  --cpt-marker-shadow: rgb(112, 122, 250);
  --cpt-orange: 213, 118, 52;
  --cpt-pink: 235, 0, 235;
  --cpt-purple: 147, 134, 200;
  --cpt-red: 208, 66, 85;
  --cpt-text: 240, 240, 240;
  --cpt-white: 240, 240, 240;
  --cpt-yellow: 229, 181, 103;
  --divider-color: rgb(50, 50, 50);
  --divider-color-hover: rgb(112, 122, 250);
  --dropdown-background: rgb(18, 18, 18);
  --dropdown-background-hover: rgb(18, 18, 18, 0.5);
  --embed-block-shadow-hover: 0 0 0 1px rgb(50, 50, 50), inset 0 0 0 1px rgb(50, 50, 50);
  --embed-border-start: 2px solid rgb(112, 122, 250);
  --file-header-background: rgb(25, 25, 25);
  --file-header-background-focused: rgb(25, 25, 25);
  --file-header-font: '??', '??', '??', "iA Writer Quattro S";
  --flair-background: rgb(18, 18, 18);
  --flair-color: rgb(240, 240, 240);
  --font-default: "iA Writer Quattro S";
  --font-default-custom: "iA Writer Quattro S";
  --font-interface: '??', '??', '??', "iA Writer Quattro S";
  --font-mermaid: '??', '??', "iA Writer Quattro S";
  --font-monospace: "iA Writer Mono S";
  --font-monospace-custom: "iA Writer Mono S";
  --font-secondary: "iA Writer Duo S";
  --font-secondary-custom: "iA Writer Duo S";
  --font-text: '??', '??', "iA Writer Quattro S";
  --footnote-divider-color: rgb(50, 50, 50);
  --footnote-id-color: rgba(240, 240, 240, 0.7);
  --footnote-id-color-no-occurrences: rgba(240, 240, 240, 0.7);
  --footnote-input-background-active: rgba(18, 18, 18, 0.7);
  --graph-node: rgba(240, 240, 240, 0.7);
  --graph-node-focused: rgb(112, 122, 250);
  --graph-node-unresolved: rgba(240, 240, 240, 0.7);
  --graph-text: rgb(240, 240, 240);
  --h1-color: rgb(208, 66, 85);
  --h1-font: Rubik;
  --h1-size: 2em;
  --h2-color: rgb(213, 118, 52);
  --h2-font: Rubik;
  --h2-size: 1.75em;
  --h3-color: rgb(229, 181, 103);
  --h3-font: Rubik;
  --h3-size: 1.5em;
  --h4-color: rgb(168, 195, 115);
  --h4-font: Rubik;
  --h4-size: 1.25em;
  --h5-color: rgb(112, 122, 250);
  --h5-font: Rubik;
  --h5-size: 1em;
  --h6-color: rgb(147, 134, 200);
  --h6-font: Rubik;
  --heading-formatting: rgba(240, 240, 240, 0.7);
  --hr-color: rgb(112, 122, 250);
  --icon-color: rgba(240, 240, 240, 0.7);
  --icon-color-active: rgb(112, 122, 250);
  --icon-color-focused: rgb(240, 240, 240);
  --icon-color-hover: rgba(240, 240, 240, 0.7);
  --inline-title-color: rgb(208, 66, 85);
  --inline-title-font: Rubik;
  --inline-title-size: 2em;
  --input-date-separator: rgba(240, 240, 240, 0.7);
  --input-placeholder-color: rgba(240, 240, 240, 0.7);
  --interactive-accent: rgb(112, 122, 250);
  --interactive-accent-hover: rgba(112, 122, 250, 0.7);
  --interactive-hover: rgb(18, 18, 18, 0.5);
  --interactive-normal: rgb(18, 18, 18);
  --italic-color: rgb(112, 122, 250);
  --italic-colors: rgb(112, 122, 250);
  --link-color: rgb(112, 122, 250);
  --link-color-hover: rgba(112, 122, 250, 0.7);
  --link-external-color: rgb(112, 122, 250);
  --link-external-color-hover: rgba(112, 122, 250, 0.7);
  --link-unresolved-color: rgb(112, 122, 250);
  --list-marker-color: rgba(240, 240, 240, 0.7);
  --list-marker-color-collapsed: rgb(112, 122, 250);
  --list-marker-color-hover: rgba(240, 240, 240, 0.7);
  --menu-background: rgb(20, 20, 20);
  --menu-border-color: rgb(50, 50, 50);
  --metadata-border-color: rgb(50, 50, 50);
  --metadata-divider-color: rgb(50, 50, 50);
  --metadata-input-background-active: rgba(18, 18, 18, 0.7);
  --metadata-input-font: '??', '??', '??', "iA Writer Quattro S";
  --metadata-input-text-color: rgb(240, 240, 240);
  --metadata-label-background-active: rgba(18, 18, 18, 0.7);
  --metadata-label-font: '??', '??', '??', "iA Writer Quattro S";
  --metadata-label-text-color: rgba(240, 240, 240, 0.7);
  --metadata-label-text-color-hover: rgba(240, 240, 240, 0.7);
  --metadata-property-background-active: rgba(18, 18, 18, 0.7);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(50, 50, 50);
  --modal-background: rgb(25, 25, 25);
  --modal-border-color: rgb(50, 50, 50);
  --nav-collapse-icon-color: rgba(240, 240, 240, 0.7);
  --nav-collapse-icon-color-collapsed: rgba(240, 240, 240, 0.7);
  --nav-heading-color: rgb(240, 240, 240);
  --nav-heading-color-collapsed: rgba(240, 240, 240, 0.7);
  --nav-heading-color-collapsed-hover: rgba(240, 240, 240, 0.7);
  --nav-heading-color-hover: rgb(240, 240, 240);
  --nav-item-background-active: rgba(18, 18, 18, 0.7);
  --nav-item-background-hover: rgba(18, 18, 18, 0.7);
  --nav-item-color: rgba(240, 240, 240, 0.7);
  --nav-item-color-active: rgb(240, 240, 240);
  --nav-item-color-highlighted: rgb(112, 122, 250);
  --nav-item-color-hover: rgb(240, 240, 240);
  --nav-item-color-selected: rgb(240, 240, 240);
  --nav-tag-color: rgba(240, 240, 240, 0.7);
  --nav-tag-color-active: rgba(240, 240, 240, 0.7);
  --nav-tag-color-hover: rgba(240, 240, 240, 0.7);
  --pdf-background: rgb(25, 25, 25);
  --pdf-page-background: rgb(25, 25, 25);
  --pdf-shadow: 0 0 0 1px rgb(50, 50, 50);
  --pdf-sidebar-background: rgb(25, 25, 25);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(50, 50, 50);
  --pill-border-color: rgb(50, 50, 50);
  --pill-border-color-hover: rgb(50, 50, 50);
  --pill-color: rgba(240, 240, 240, 0.7);
  --pill-color-hover: rgb(240, 240, 240);
  --pill-color-remove: rgba(240, 240, 240, 0.7);
  --pill-color-remove-hover: rgb(112, 122, 250);
  --prompt-background: rgb(25, 25, 25);
  --raised-background: color-mix(in srgb, rgb(18, 18, 18) 65%, transparent) linear-gradient(rgb(18, 18, 18), color-mix(in srgb, rgb(18, 18, 18) 65%, transparent));
  --ribbon-background: rgb(20, 20, 20);
  --ribbon-background-collapsed: rgb(25, 25, 25);
  --scrollbar-active-thumb-bg: rgba(18, 18, 18, 0.7);
  --scrollbar-thumb-bg: rgba(18, 18, 18, 0.5);
  --search-clear-button-color: rgba(240, 240, 240, 0.7);
  --search-icon-color: rgba(240, 240, 240, 0.7);
  --search-result-background: rgb(25, 25, 25);
  --setting-group-heading-color: rgb(240, 240, 240);
  --setting-items-background: rgb(27, 27, 27);
  --setting-items-border-color: rgb(50, 50, 50);
  --slider-thumb-border-color: rgb(50, 50, 50);
  --slider-track-background: rgb(50, 50, 50);
  --status-bar-background: rgb(20, 20, 20);
  --status-bar-border-color: rgb(50, 50, 50);
  --status-bar-text-color: rgba(240, 240, 240, 0.7);
  --suggestion-background: rgb(25, 25, 25);
  --tab-background-active: rgb(25, 25, 25);
  --tab-container-background: rgb(20, 20, 20);
  --tab-divider-color: rgb(50, 50, 50);
  --tab-outline-color: rgb(50, 50, 50);
  --tab-switcher-background: rgb(20, 20, 20);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(20, 20, 20), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(112, 122, 250);
  --tab-text-color: rgba(240, 240, 240, 0.7);
  --tab-text-color-active: rgba(240, 240, 240, 0.7);
  --tab-text-color-focused: rgba(240, 240, 240, 0.7);
  --tab-text-color-focused-active: rgba(240, 240, 240, 0.7);
  --tab-text-color-focused-active-current: rgb(240, 240, 240);
  --tab-text-color-focused-highlighted: rgb(112, 122, 250);
  --table-add-button-border-color: rgb(50, 50, 50);
  --table-border-color: rgb(50, 50, 50);
  --table-drag-handle-background-active: rgb(112, 122, 250);
  --table-drag-handle-color: rgba(240, 240, 240, 0.7);
  --table-drag-handle-color-active: black;
  --table-header-border-color: rgb(50, 50, 50);
  --table-header-color: rgb(240, 240, 240);
  --table-selection-border-color: rgb(112, 122, 250);
  --tag-color: rgb(112, 122, 250);
  --tag-color-hover: rgb(112, 122, 250);
  --text-accent: rgb(112, 122, 250);
  --text-accent-hover: rgba(112, 122, 250, 0.7);
  --text-faint: rgba(240, 240, 240, 0.7);
  --text-muted: rgba(240, 240, 240, 0.7);
  --text-normal: rgb(240, 240, 240);
  --text-on-accent: black;
  --text-selection: rgba(112, 122, 250, 0.1);
  --titlebar-background: rgb(20, 20, 20);
  --titlebar-background-focused: rgb(18, 18, 18);
  --titlebar-border-color: rgb(50, 50, 50);
  --titlebar-text-color: rgba(240, 240, 240, 0.7);
  --titlebar-text-color-focused: rgb(240, 240, 240);
  --vault-profile-color: rgb(240, 240, 240);
  --vault-profile-color-hover: rgb(240, 240, 240);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(240, 240, 240);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 25, 25);
  color: rgb(240, 240, 240);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(240, 240, 240);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 50, 50);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}

body div#quartz-root {
  background-color: rgb(25, 25, 25);
  color: rgb(240, 240, 240);
}`,
    typography: `body .page article p > b, b {
  color: rgb(208, 66, 85);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(208, 66, 85) none 0px;
  text-decoration: rgb(208, 66, 85);
  text-decoration-color: rgb(208, 66, 85);
}

body .page article p > em, em {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: rgb(112, 122, 250);
  text-decoration-color: rgb(112, 122, 250);
}

body .page article p > i, i {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: rgb(112, 122, 250);
  text-decoration-color: rgb(112, 122, 250);
}

body .page article p > strong, strong {
  color: rgb(208, 66, 85);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(208, 66, 85) none 0px;
  text-decoration: rgb(208, 66, 85);
  text-decoration-color: rgb(208, 66, 85);
}

body .text-highlight {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body del {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: line-through rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body p {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  outline: rgba(240, 240, 240, 0.7) none 0px;
  text-decoration: rgba(240, 240, 240, 0.7);
  text-decoration-color: rgba(240, 240, 240, 0.7);
}`,
    links: `body a.external, footer a {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: underline rgb(112, 122, 250);
  text-decoration-color: rgb(112, 122, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
  text-decoration: underline rgb(112, 122, 250);
  text-decoration-color: rgb(112, 122, 250);
}

body a.internal.broken {
  color: rgb(112, 122, 250);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(112, 122, 250) none 0px;
}`,
    lists: `body dd {
  color: rgb(240, 240, 240);
}

body dt {
  color: rgb(240, 240, 240);
}

body ol > li {
  color: rgb(240, 240, 240);
}

body ol.overflow {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body ul > li {
  color: rgb(240, 240, 240);
}

body ul.overflow {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(240, 240, 240, 0.7);
  text-decoration: rgba(240, 240, 240, 0.7);
}

body blockquote {
  font-family: "??", "??", "iA Writer Quattro S";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body table {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  width: 662px;
}

body td {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}

body th {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}`,
    code: `body code {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
  font-family: "iA Writer Mono S";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
}

body pre > code, pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}

body pre:has(> code) {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
}`,
    images: `body audio {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body figcaption {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
}

body figure {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body img {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body video {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    embeds: `body .file-embed {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
}

body .footnotes {
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

body .transclude {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(112, 122, 250);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body .transclude-inner {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(112, 122, 250);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "iA Writer Quattro S";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "iA Writer Quattro S";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(240, 240, 240, 0.7);
  text-decoration: line-through rgba(240, 240, 240, 0.7);
  text-decoration-color: rgba(240, 240, 240, 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
}

body li.task-list-item[data-task='!'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='*'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='-'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='/'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='>'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='?'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='I'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='S'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='b'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='c'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='d'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='f'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='i'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='k'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='l'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='p'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='u'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body li.task-list-item[data-task='w'] {
  color: rgb(240, 240, 240);
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}`,
    callouts: `body .callout[data-callout="quote"] {
  --callout-color: 112, 122, 250;
  background-color: rgba(112, 122, 250, 0.1);
  border-bottom-color: rgba(112, 122, 250, 0.25);
  border-left-color: rgba(112, 122, 250, 0.25);
  border-right-color: rgba(112, 122, 250, 0.25);
  border-top-color: rgba(112, 122, 250, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgb(240, 240, 240);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > * {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 240, 240) none 0px;
  text-decoration: rgb(240, 240, 240);
  text-decoration-color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(18, 18, 18, 0.7);
  color: rgb(240, 240, 240);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(20, 20, 20, 0.5);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(18, 18, 18, 0.7);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(18, 18, 18, 0.7);
  color: rgb(240, 240, 240);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body a.internal.tag-link::before {
  color: rgb(112, 122, 250);
}

body h1 {
  color: rgb(208, 66, 85);
  font-family: Rubik;
}

body h2 {
  color: rgb(213, 118, 52);
  font-family: Rubik;
}

body h2.page-title, h2.page-title a {
  color: rgb(208, 66, 85);
  font-family: Rubik;
}

body h3 {
  color: rgb(229, 181, 103);
  font-family: Rubik;
}

body h4 {
  color: rgb(168, 195, 115);
  font-family: Rubik;
}

body h5 {
  color: rgb(112, 122, 250);
  font-family: Rubik;
}

body h6 {
  color: rgb(147, 134, 200);
  font-family: Rubik;
}

body hr {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(240, 240, 240, 0.7);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(240, 240, 240, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(240, 240, 240, 0.7);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body footer ul li a {
  color: rgba(240, 240, 240, 0.7);
  text-decoration: rgba(240, 240, 240, 0.7);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(240, 240, 240, 0.7);
  text-decoration: rgba(240, 240, 240, 0.7);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body li.section-li > .section .meta {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(240, 240, 240, 0.7);
  text-decoration: rgba(240, 240, 240, 0.7);
}

body ul.section-ul {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
}

body .darkmode svg {
  color: rgba(240, 240, 240, 0.7);
  stroke: rgba(240, 240, 240, 0.7);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
}

body .breadcrumb-element p {
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
}

body .metadata {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "iA Writer Quattro S";
}

body .metadata-properties {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "iA Writer Quattro S";
}

body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

body .page-header h2.page-title {
  color: rgb(240, 240, 240);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body abbr {
  color: rgb(240, 240, 240);
  text-decoration: underline dotted rgb(240, 240, 240);
}

body details {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body input[type=text] {
  border-bottom-color: rgba(240, 240, 240, 0.7);
  border-left-color: rgba(240, 240, 240, 0.7);
  border-right-color: rgba(240, 240, 240, 0.7);
  border-top-color: rgba(240, 240, 240, 0.7);
  color: rgba(240, 240, 240, 0.7);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body kbd {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  color: rgb(240, 240, 240);
  font-family: "iA Writer Mono S";
}

body progress {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
}

body sub {
  color: rgb(240, 240, 240);
}

body summary {
  color: rgb(240, 240, 240);
}

body sup {
  color: rgb(240, 240, 240);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(233, 223, 209);
  --background-modifier-border-hover: rgb(233, 223, 209);
  --background-modifier-form-field: rgb(241, 230, 214);
  --background-modifier-form-field-hover: rgb(241, 230, 214);
  --background-modifier-hover: rgba(241, 230, 214, 0.7);
  --background-primary: rgb(247, 243, 238);
  --background-primary-alt: rgb(250, 238, 225);
  --background-secondary: rgb(238, 231, 221);
  --background-secondary-alt: rgb(22, 22, 22);
  --bases-cards-background: rgb(247, 243, 238);
  --bases-cards-cover-background: rgb(250, 238, 225);
  --bases-cards-shadow: 0 0 0 1px rgb(233, 223, 209);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(233, 223, 209);
  --bases-embed-border-color: rgb(233, 223, 209);
  --bases-group-heading-property-color: rgba(74, 52, 28, 0.9);
  --bases-table-border-color: rgb(233, 223, 209);
  --bases-table-cell-background-active: rgb(247, 243, 238);
  --bases-table-cell-background-disabled: rgb(250, 238, 225);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(233, 179, 92);
  --bases-table-group-background: rgb(250, 238, 225);
  --bases-table-header-background: rgb(247, 243, 238);
  --bases-table-header-background-hover: rgba(241, 230, 214, 0.7);
  --bases-table-header-color: rgba(74, 52, 28, 0.9);
  --bases-table-summary-background: rgb(247, 243, 238);
  --bases-table-summary-background-hover: rgba(241, 230, 214, 0.7);
  --blockquote-border-color: rgb(233, 179, 92);
  --blur-background: color-mix(in srgb, rgb(247, 243, 238) 65%, transparent) linear-gradient(rgb(247, 243, 238), color-mix(in srgb, rgb(247, 243, 238) 65%, transparent));
  --bold-color: rgb(240, 100, 119);
  --bold-colors: rgb(240, 100, 119);
  --canvas-background: rgb(247, 243, 238);
  --canvas-card-label-color: rgba(74, 52, 28, 0.9);
  --card-background-color: rgb(241, 230, 214);
  --caret-color: rgb(74, 52, 28);
  --checkbox-border-color: rgba(74, 52, 28, 0.9);
  --checkbox-border-color-hover: rgba(74, 52, 28, 0.9);
  --checkbox-color: rgb(233, 179, 92);
  --checkbox-color-hover: rgba(233, 179, 92, 0.7);
  --checkbox-marker-color: rgb(74, 52, 28);
  --checklist-done-color: rgba(74, 52, 28, 0.9);
  --code-background: rgb(250, 238, 225);
  --code-border-color: rgb(233, 223, 209);
  --code-bracket-background: rgba(241, 230, 214, 0.7);
  --code-comment: rgba(74, 52, 28, 0.9);
  --code-normal: rgb(74, 52, 28);
  --code-punctuation: rgba(74, 52, 28, 0.9);
  --collapse-icon-color: rgba(74, 52, 28, 0.9);
  --collapse-icon-color-collapsed: rgb(233, 179, 92);
  --color-accent: rgb(233, 179, 92);
  --cpt-accent: 233, 179, 92;
  --cpt-aura: 233, 179, 92;
  --cpt-black: 74, 52, 28;
  --cpt-blue: 124, 155, 255;
  --cpt-border: 233, 223, 209;
  --cpt-core: 247, 243, 238;
  --cpt-core-alt: 250, 238, 225;
  --cpt-crust: 241, 230, 214;
  --cpt-crust-alt: 247, 203, 160;
  --cpt-cyan: 89, 202, 206;
  --cpt-green: 154, 230, 92;
  --cpt-mantle: 238, 231, 221;
  --cpt-mantle-alt: 22, 22, 22;
  --cpt-marker-shadow: rgb(233, 179, 92);
  --cpt-orange: 245, 146, 75;
  --cpt-pink: 235, 0, 235;
  --cpt-purple: 144, 120, 241;
  --cpt-red: 240, 100, 119;
  --cpt-text: 74, 52, 28;
  --cpt-white: 240, 240, 240;
  --cpt-yellow: 233, 179, 92;
  --divider-color: rgb(233, 223, 209);
  --divider-color-hover: rgb(233, 179, 92);
  --dropdown-background: rgb(238, 231, 221);
  --dropdown-background-hover: rgb(247, 243, 238, 0.7);
  --embed-block-shadow-hover: 0 0 0 1px rgb(233, 223, 209), inset 0 0 0 1px rgb(233, 223, 209);
  --embed-border-start: 2px solid rgb(233, 179, 92);
  --file-header-background: rgb(247, 243, 238);
  --file-header-background-focused: rgb(247, 243, 238);
  --file-header-font: '??', '??', '??', "iA Writer Quattro S";
  --flair-background: rgb(238, 231, 221);
  --flair-color: rgb(74, 52, 28);
  --font-default: "iA Writer Quattro S";
  --font-default-custom: "iA Writer Quattro S";
  --font-interface: '??', '??', '??', "iA Writer Quattro S";
  --font-mermaid: '??', '??', "iA Writer Quattro S";
  --font-monospace: "iA Writer Mono S";
  --font-monospace-custom: "iA Writer Mono S";
  --font-secondary: "iA Writer Duo S";
  --font-secondary-custom: "iA Writer Duo S";
  --font-text: '??', '??', "iA Writer Quattro S";
  --footnote-divider-color: rgb(233, 223, 209);
  --footnote-id-color: rgba(74, 52, 28, 0.9);
  --footnote-id-color-no-occurrences: rgba(74, 52, 28, 0.9);
  --footnote-input-background-active: rgba(241, 230, 214, 0.7);
  --graph-node: rgba(74, 52, 28, 0.9);
  --graph-node-focused: rgb(233, 179, 92);
  --graph-node-unresolved: rgba(74, 52, 28, 0.9);
  --graph-text: rgb(74, 52, 28);
  --h1-color: rgb(240, 100, 119);
  --h1-font: Rubik;
  --h1-size: 2em;
  --h2-color: rgb(245, 146, 75);
  --h2-font: Rubik;
  --h2-size: 1.75em;
  --h3-color: rgb(233, 179, 92);
  --h3-font: Rubik;
  --h3-size: 1.5em;
  --h4-color: rgb(154, 230, 92);
  --h4-font: Rubik;
  --h4-size: 1.25em;
  --h5-color: rgb(124, 155, 255);
  --h5-font: Rubik;
  --h5-size: 1em;
  --h6-color: rgb(144, 120, 241);
  --h6-font: Rubik;
  --heading-formatting: rgba(74, 52, 28, 0.9);
  --hr-color: rgb(233, 179, 92);
  --icon-color: rgba(74, 52, 28, 0.9);
  --icon-color-active: rgb(233, 179, 92);
  --icon-color-focused: rgb(74, 52, 28);
  --icon-color-hover: rgba(74, 52, 28, 0.9);
  --inline-title-color: rgb(240, 100, 119);
  --inline-title-font: Rubik;
  --inline-title-size: 2em;
  --input-date-separator: rgba(74, 52, 28, 0.9);
  --input-placeholder-color: rgba(74, 52, 28, 0.9);
  --interactive-accent: rgb(233, 179, 92);
  --interactive-accent-hover: rgba(233, 179, 92, 0.7);
  --interactive-hover: rgb(247, 243, 238, 0.7);
  --interactive-normal: rgb(238, 231, 221);
  --italic-color: rgb(124, 155, 255);
  --italic-colors: rgb(124, 155, 255);
  --link-color: rgb(233, 179, 92);
  --link-color-hover: rgba(233, 179, 92, 0.7);
  --link-external-color: rgb(233, 179, 92);
  --link-external-color-hover: rgba(233, 179, 92, 0.7);
  --link-unresolved-color: rgb(233, 179, 92);
  --list-marker-color: rgba(74, 52, 28, 0.9);
  --list-marker-color-collapsed: rgb(233, 179, 92);
  --list-marker-color-hover: rgba(74, 52, 28, 0.9);
  --menu-background: rgb(238, 231, 221);
  --menu-border-color: rgb(233, 223, 209);
  --metadata-border-color: rgb(233, 223, 209);
  --metadata-divider-color: rgb(233, 223, 209);
  --metadata-input-background-active: rgba(241, 230, 214, 0.7);
  --metadata-input-font: '??', '??', '??', "iA Writer Quattro S";
  --metadata-input-text-color: rgb(74, 52, 28);
  --metadata-label-background-active: rgba(241, 230, 214, 0.7);
  --metadata-label-font: '??', '??', '??', "iA Writer Quattro S";
  --metadata-label-text-color: rgba(74, 52, 28, 0.9);
  --metadata-label-text-color-hover: rgba(74, 52, 28, 0.9);
  --metadata-property-background-active: rgba(241, 230, 214, 0.7);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(233, 223, 209);
  --modal-background: rgb(247, 243, 238);
  --modal-border-color: rgb(233, 223, 209);
  --nav-collapse-icon-color: rgba(74, 52, 28, 0.9);
  --nav-collapse-icon-color-collapsed: rgba(74, 52, 28, 0.9);
  --nav-heading-color: rgb(74, 52, 28);
  --nav-heading-color-collapsed: rgba(74, 52, 28, 0.9);
  --nav-heading-color-collapsed-hover: rgba(74, 52, 28, 0.9);
  --nav-heading-color-hover: rgb(74, 52, 28);
  --nav-item-background-active: rgba(241, 230, 214, 0.7);
  --nav-item-background-hover: rgba(241, 230, 214, 0.7);
  --nav-item-color: rgba(74, 52, 28, 0.9);
  --nav-item-color-active: rgb(74, 52, 28);
  --nav-item-color-highlighted: rgb(233, 179, 92);
  --nav-item-color-hover: rgb(74, 52, 28);
  --nav-item-color-selected: rgb(74, 52, 28);
  --nav-tag-color: rgba(74, 52, 28, 0.9);
  --nav-tag-color-active: rgba(74, 52, 28, 0.9);
  --nav-tag-color-hover: rgba(74, 52, 28, 0.9);
  --pdf-background: rgb(247, 243, 238);
  --pdf-page-background: rgb(247, 243, 238);
  --pdf-sidebar-background: rgb(247, 243, 238);
  --pill-border-color: rgb(233, 223, 209);
  --pill-border-color-hover: rgb(233, 223, 209);
  --pill-color: rgba(74, 52, 28, 0.9);
  --pill-color-hover: rgb(74, 52, 28);
  --pill-color-remove: rgba(74, 52, 28, 0.9);
  --pill-color-remove-hover: rgb(233, 179, 92);
  --prompt-background: rgb(247, 243, 238);
  --raised-background: color-mix(in srgb, rgb(247, 243, 238) 65%, transparent) linear-gradient(rgb(247, 243, 238), color-mix(in srgb, rgb(247, 243, 238) 65%, transparent));
  --ribbon-background: rgb(238, 231, 221);
  --ribbon-background-collapsed: rgb(247, 243, 238);
  --scrollbar-active-thumb-bg: rgba(241, 230, 214, 0.7);
  --scrollbar-thumb-bg: rgba(241, 230, 214, 0.5);
  --search-clear-button-color: rgba(74, 52, 28, 0.9);
  --search-icon-color: rgba(74, 52, 28, 0.9);
  --search-result-background: rgb(247, 243, 238);
  --setting-group-heading-color: rgb(74, 52, 28);
  --setting-items-background: rgb(250, 238, 225);
  --setting-items-border-color: rgb(233, 223, 209);
  --slider-thumb-border-color: rgb(233, 223, 209);
  --slider-track-background: rgb(233, 223, 209);
  --status-bar-background: rgb(238, 231, 221);
  --status-bar-border-color: rgb(233, 223, 209);
  --status-bar-text-color: rgba(74, 52, 28, 0.9);
  --suggestion-background: rgb(247, 243, 238);
  --tab-background-active: rgb(247, 243, 238);
  --tab-container-background: rgb(238, 231, 221);
  --tab-divider-color: rgb(233, 223, 209);
  --tab-outline-color: rgb(233, 223, 209);
  --tab-switcher-background: rgb(238, 231, 221);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(238, 231, 221), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(233, 179, 92);
  --tab-text-color: rgba(74, 52, 28, 0.9);
  --tab-text-color-active: rgba(74, 52, 28, 0.9);
  --tab-text-color-focused: rgba(74, 52, 28, 0.9);
  --tab-text-color-focused-active: rgba(74, 52, 28, 0.9);
  --tab-text-color-focused-active-current: rgb(74, 52, 28);
  --tab-text-color-focused-highlighted: rgb(233, 179, 92);
  --table-add-button-border-color: rgb(233, 223, 209);
  --table-border-color: rgb(233, 223, 209);
  --table-drag-handle-background-active: rgb(233, 179, 92);
  --table-drag-handle-color: rgba(74, 52, 28, 0.9);
  --table-drag-handle-color-active: black;
  --table-header-border-color: rgb(233, 223, 209);
  --table-header-color: rgb(74, 52, 28);
  --table-selection-border-color: rgb(233, 179, 92);
  --tag-color: rgb(233, 179, 92);
  --tag-color-hover: rgb(233, 179, 92);
  --text-accent: rgb(233, 179, 92);
  --text-accent-hover: rgba(233, 179, 92, 0.7);
  --text-faint: rgba(74, 52, 28, 0.9);
  --text-muted: rgba(74, 52, 28, 0.9);
  --text-normal: rgb(74, 52, 28);
  --text-on-accent: black;
  --text-selection: rgba(233, 179, 92, 0.1);
  --titlebar-background: rgb(238, 231, 221);
  --titlebar-background-focused: rgb(241, 230, 214);
  --titlebar-border-color: rgb(233, 223, 209);
  --titlebar-text-color: rgba(74, 52, 28, 0.9);
  --titlebar-text-color-focused: rgb(74, 52, 28);
  --vault-profile-color: rgb(74, 52, 28);
  --vault-profile-color-hover: rgb(74, 52, 28);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(233, 223, 209);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 231, 221);
  border-left-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}

body div#quartz-root {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}`,
    typography: `body .page article p > b, b {
  color: rgb(240, 100, 119);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 100, 119) none 0px;
  text-decoration: rgb(240, 100, 119);
  text-decoration-color: rgb(240, 100, 119);
}

body .page article p > em, em {
  color: rgb(124, 155, 255);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(124, 155, 255) none 0px;
  text-decoration: rgb(124, 155, 255);
  text-decoration-color: rgb(124, 155, 255);
}

body .page article p > i, i {
  color: rgb(124, 155, 255);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(124, 155, 255) none 0px;
  text-decoration: rgb(124, 155, 255);
  text-decoration-color: rgb(124, 155, 255);
}

body .page article p > strong, strong {
  color: rgb(240, 100, 119);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(240, 100, 119) none 0px;
  text-decoration: rgb(240, 100, 119);
  text-decoration-color: rgb(240, 100, 119);
}

body .text-highlight {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body del {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: line-through rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body p {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  outline: rgba(74, 52, 28, 0.9) none 0px;
  text-decoration: rgba(74, 52, 28, 0.9);
  text-decoration-color: rgba(74, 52, 28, 0.9);
}`,
    links: `body a.external, footer a {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
  text-decoration: underline rgb(233, 179, 92);
  text-decoration-color: rgb(233, 179, 92);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
  text-decoration: underline rgb(233, 179, 92);
  text-decoration-color: rgb(233, 179, 92);
}

body a.internal.broken {
  color: rgb(233, 179, 92);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(233, 179, 92) none 0px;
}`,
    lists: `body dd {
  color: rgb(74, 52, 28);
}

body dt {
  color: rgb(74, 52, 28);
}

body ol > li {
  color: rgb(74, 52, 28);
}

body ol.overflow {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body ul > li {
  color: rgb(74, 52, 28);
}

body ul.overflow {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(74, 52, 28, 0.9);
  text-decoration: rgba(74, 52, 28, 0.9);
}

body blockquote {
  font-family: "??", "??", "iA Writer Quattro S";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body table {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  width: 662px;
}

body td {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}

body th {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}`,
    code: `body code {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
  font-family: "iA Writer Mono S";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
}

body pre > code, pre:has(> code) {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
}

body pre:has(> code) {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
}`,
    images: `body audio {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body figcaption {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
}

body figure {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body img {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body video {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    embeds: `body .file-embed {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
}

body .footnotes {
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .transclude {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(233, 179, 92);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .transclude-inner {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(233, 179, 92);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "iA Writer Quattro S";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "iA Writer Quattro S";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(74, 52, 28, 0.9);
  text-decoration: line-through rgba(74, 52, 28, 0.9);
  text-decoration-color: rgba(74, 52, 28, 0.9);
}

body input[type=checkbox] {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
}

body li.task-list-item[data-task='!'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='*'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='-'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='/'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='>'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='?'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='I'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='S'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='b'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='c'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='d'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='f'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='i'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='k'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='l'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='p'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='u'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='w'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}`,
    callouts: `body .callout[data-callout="quote"] {
  --callout-color: 124, 155, 255;
  background-color: rgba(124, 155, 255, 0.1);
  border-bottom-color: rgba(124, 155, 255, 0.25);
  border-left-color: rgba(124, 155, 255, 0.25);
  border-right-color: rgba(124, 155, 255, 0.25);
  border-top-color: rgba(124, 155, 255, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(241, 230, 214);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgb(74, 52, 28);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body .search > .search-container > .search-space {
  background-color: rgb(238, 231, 221);
}

body .search > .search-container > .search-space > * {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "iA Writer Quattro S";
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(241, 230, 214, 0.7);
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(241, 230, 214);
  border-bottom-color: rgba(238, 231, 221, 0.5);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(241, 230, 214, 0.7);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(241, 230, 214, 0.7);
  color: rgb(74, 52, 28);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body a.internal.tag-link::before {
  color: rgb(233, 179, 92);
}

body h1 {
  color: rgb(240, 100, 119);
  font-family: Rubik;
}

body h2 {
  color: rgb(245, 146, 75);
  font-family: Rubik;
}

body h2.page-title, h2.page-title a {
  color: rgb(240, 100, 119);
  font-family: Rubik;
}

body h3 {
  color: rgb(233, 179, 92);
  font-family: Rubik;
}

body h4 {
  color: rgb(154, 230, 92);
  font-family: Rubik;
}

body h5 {
  color: rgb(124, 155, 255);
  font-family: Rubik;
}

body h6 {
  color: rgb(144, 120, 241);
  font-family: Rubik;
}

body hr {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

body ::-webkit-scrollbar-corner {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}

body ::-webkit-scrollbar-track {
  background: rgb(247, 243, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 243, 238);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(74, 52, 28, 0.9);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(74, 52, 28, 0.9);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
  text-decoration: rgba(74, 52, 28, 0.9);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(247, 203, 160);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
}`,
    footer: `body footer {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body footer ul li a {
  color: rgba(74, 52, 28, 0.9);
  text-decoration: rgba(74, 52, 28, 0.9);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(74, 52, 28, 0.9);
  text-decoration: rgba(74, 52, 28, 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body li.section-li > .section .meta {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(74, 52, 28, 0.9);
  text-decoration: rgba(74, 52, 28, 0.9);
}

body ul.section-ul {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
}

body .darkmode svg {
  color: rgba(74, 52, 28, 0.9);
  stroke: rgba(74, 52, 28, 0.9);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
}

body .breadcrumb-element p {
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .metadata {
  border-bottom-color: rgb(233, 223, 209);
  border-left-color: rgb(233, 223, 209);
  border-right-color: rgb(233, 223, 209);
  border-top-color: rgb(233, 223, 209);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "iA Writer Quattro S";
}

body .metadata-properties {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "iA Writer Quattro S";
}

body .navigation-progress {
  background-color: rgb(238, 231, 221);
}

body .page-header h2.page-title {
  color: rgb(74, 52, 28);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body abbr {
  color: rgb(74, 52, 28);
  text-decoration: underline dotted rgb(74, 52, 28);
}

body details {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body input[type=text] {
  border-bottom-color: rgba(74, 52, 28, 0.9);
  border-left-color: rgba(74, 52, 28, 0.9);
  border-right-color: rgba(74, 52, 28, 0.9);
  border-top-color: rgba(74, 52, 28, 0.9);
  color: rgba(74, 52, 28, 0.9);
  font-family: "??", "??", "??", "iA Writer Quattro S";
}

body kbd {
  background-color: rgb(250, 238, 225);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
  font-family: "iA Writer Mono S";
}

body progress {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body sub {
  color: rgb(74, 52, 28);
}

body summary {
  color: rgb(74, 52, 28);
}

body sup {
  color: rgb(74, 52, 28);
}`,
  },
};
