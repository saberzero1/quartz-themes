import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wy-console",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["audiowide", "dotgothic16"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: #163F26;
  --background-modifier-border: #020704;
  --background-modifier-border-focus: #99E5B5;
  --background-modifier-border-hover: #3FFF8C;
  --background-modifier-error: #020704;
  --background-modifier-error-hover: #3FFF8C;
  --background-modifier-error-rgb: #3FFF8C;
  --background-modifier-form-field: #020704;
  --background-modifier-form-field-hover: #020704;
  --background-modifier-hover: #163F26;
  --background-modifier-message: #40B266;
  --background-modifier-success: #020704;
  --background-modifier-success-rgb: #99E5B5;
  --background-primary: #0B1510;
  --background-primary-alt: black;
  --background-secondary: #0B1510;
  --background-secondary-alt: #0B1510;
  --bases-cards-background: #0B1510;
  --bases-cards-cover-background: black;
  --bases-cards-shadow: 0 0 0 1px #020704;
  --bases-cards-shadow-hover: 0 0 0 1px #3FFF8C;
  --bases-embed-border-color: #020704;
  --bases-group-heading-property-color: #99E5B5;
  --bases-table-border-color: #020704;
  --bases-table-cell-background-active: #0B1510;
  --bases-table-cell-background-disabled: black;
  --bases-table-cell-shadow-active: 0 0 0 2px #99E5B5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3FFF8C;
  --bases-table-group-background: black;
  --bases-table-header-background: #0B1510;
  --bases-table-header-background-hover: #163F26;
  --bases-table-header-color: #99E5B5;
  --bases-table-summary-background: #0B1510;
  --bases-table-summary-background-hover: #163F26;
  --blockquote-border-color: #3FFF8C;
  --blur-background: color-mix(in srgb, #40B266 65%, transparent) linear-gradient(#40B266, color-mix(in srgb, #40B266 65%, transparent));
  --canvas-background: #0B1510;
  --canvas-card-label-color: #99E5B5;
  --caret-color: #99E5B5;
  --checkbox-border-color: #99E5B5;
  --checkbox-border-color-hover: #99E5B5;
  --checkbox-color: #3FFF8C;
  --checkbox-color-hover: #99E5B5;
  --checkbox-marker-color: #0B1510;
  --checklist-done-color: #99E5B5;
  --code-background: black;
  --code-border-color: #020704;
  --code-bracket-background: #163F26;
  --code-comment: #99E5B5;
  --code-normal: #99E5B5;
  --code-punctuation: #99E5B5;
  --col-accent: #3FFF8C;
  --col-accent-plus: #99E5B5;
  --col-base: #40B266;
  --col-base-background: #0B1510;
  --col-bckg-filetreeheader: #0B1510;
  --col-bckg-mainpanels: #020704;
  --col-bckg-menudropdownhover: #163F26;
  --col-bckg-menudropdowns: #163F26;
  --col-bckg-selectedtitles: #163F26;
  --col-danger: #318C54;
  --col-ed-background: #0B1510;
  --col-ed-bckg-checkbox-empty: #163F26;
  --col-ed-bckg-checkbox-full: #99E5B5;
  --col-ed-bckg-codeblock: #163F26;
  --col-ed-bckg-highlight: #40B266;
  --col-ed-bckg-hyperlink-broken: #318C54;
  --col-ed-bckg-quote: #0B1510;
  --col-ed-bckg-quote-callout: #163F26;
  --col-ed-bckg-quote-warning: #318C54;
  --col-ed-bckg-table: #0B1510;
  --col-ed-bckg-tableh: #163F26;
  --col-ed-bckg-tagbeg: #163F26;
  --col-ed-bckg-tagend: #163F26;
  --col-ed-caret: #99E5B5;
  --col-ed-hr: #40B266;
  --col-ed-hyperlink: #FFD303;
  --col-ed-hyperlink-broken: red;
  --col-ed-hyperlink-highlight-hover: #020704;
  --col-ed-hyperlink-hover: #FFF2BF;
  --col-ed-hyperlink-strikethrough: #3F3401;
  --col-ed-txt-checkbox-full: #163F26;
  --col-ed-txt-codeblock: #3FFF8C;
  --col-ed-txt-h1: #3FFF8C;
  --col-ed-txt-h2: #3FFF8C;
  --col-ed-txt-h3: #3FFF8C;
  --col-ed-txt-h4: #3FFF8C;
  --col-ed-txt-h5: #3FFF8C;
  --col-ed-txt-h6: #3FFF8C;
  --col-ed-txt-highlight: #020704;
  --col-ed-txt-italic: #3FFF8C;
  --col-ed-txt-ol-bullet: #99E5B5;
  --col-ed-txt-p: #40B266;
  --col-ed-txt-quote: #99E5B5;
  --col-ed-txt-strikethrough: #163F26;
  --col-ed-txt-strong: #3FFF8C;
  --col-ed-txt-table: #40B266;
  --col-ed-txt-tableh: #99E5B5;
  --col-ed-txt-tagbeg: #FFD303;
  --col-ed-txt-tagend: #FFD303;
  --col-ed-txt-title: #99E5B5;
  --col-ed-txt-ul-bullet: #99E5B5;
  --col-icons: #99E5B5;
  --col-important: #FFD303;
  --col-important-muted: #3F3401;
  --col-important-plus: #FFF2BF;
  --col-menucheckbox: #3FFF8C;
  --col-muted: #163F26;
  --col-muted-plus: #020704;
  --col-pr-background: #0B1510;
  --col-pr-bckg-checkbox-empty: #163F26;
  --col-pr-bckg-checkbox-full: #99E5B5;
  --col-pr-bckg-codeblock: #163F26;
  --col-pr-bckg-highlight: #40B266;
  --col-pr-bckg-quote: #0B1510;
  --col-pr-bckg-quote-callout: #163F26;
  --col-pr-bckg-quote-warning: #318C54;
  --col-pr-bckg-table: #0B1510;
  --col-pr-bckg-tableh: #40B266;
  --col-pr-bckg-tag: #FFD303;
  --col-pr-hr: #40B266;
  --col-pr-hyperlink-broken: red;
  --col-pr-txt-checkbox-full: #163F26;
  --col-pr-txt-codeblock: #3FFF8C;
  --col-pr-txt-h1: #3FFF8C;
  --col-pr-txt-h2: #3FFF8C;
  --col-pr-txt-h3: #3FFF8C;
  --col-pr-txt-h4: #3FFF8C;
  --col-pr-txt-h5: #3FFF8C;
  --col-pr-txt-h6: #3FFF8C;
  --col-pr-txt-highlight: #020704;
  --col-pr-txt-hyperlink: #FFD303;
  --col-pr-txt-hyperlink-highlight-hover: #020704;
  --col-pr-txt-hyperlink-hover: #FFF2BF;
  --col-pr-txt-hyperlink-strikethrough: #3F3401;
  --col-pr-txt-hyperlink-unresolved: #FFD303;
  --col-pr-txt-italic: #3FFF8C;
  --col-pr-txt-ol-bullet: #99E5B5;
  --col-pr-txt-p: #40B266;
  --col-pr-txt-quote: #99E5B5;
  --col-pr-txt-strikethrough: #163F26;
  --col-pr-txt-strong: #3FFF8C;
  --col-pr-txt-table: #020704;
  --col-pr-txt-tableh: #99E5B5;
  --col-pr-txt-tag: #163F26;
  --col-pr-txt-title: #99E5B5;
  --col-pr-txt-ul-bullet: #99E5B5;
  --col-safety: #163F26;
  --col-text-selection: #437254;
  --col-txt-menudropdownhover: #3FFF8C;
  --col-txt-menudropdowns: #3FFF8C;
  --col-txt-selectedtitles: #99E5B5;
  --col-txt-titlebars: #070707;
  --col-txt-titles: #3FFF8C;
  --collapse-icon-color: #99E5B5;
  --collapse-icon-color-collapsed: #99E5B5;
  --divider-color: #020704;
  --divider-color-hover: #3FFF8C;
  --dropdown-background: #40B266;
  --dropdown-background-hover: #163F26;
  --embed-block-shadow-hover: 0 0 0 1px #020704, inset 0 0 0 1px #020704;
  --embed-border-start: 2px solid #3FFF8C;
  --file-header-background: #0B1510;
  --file-header-background-focused: #0B1510;
  --file-header-font: "ModeSeven Regular";
  --files-font-size: 1em;
  --flair-background: #40B266;
  --flair-color: #99E5B5;
  --fnt-ed-headers: "ModeSeven Regular";
  --fnt-ed-text: "ModeSeven Regular";
  --fnt-ed-title: "Scifi Title";
  --fnt-head-p: "ModeSeven Regular";
  --fnt-pr-headers: "ModeSeven Regular";
  --fnt-pr-text: "ModeSeven Regular";
  --fnt-pr-title: "Scifi Title";
  --fnt-title: "Scifi Title";
  --folders-font-size: 1em;
  --font-interface: "ModeSeven Regular";
  --footnote-divider-color: #020704;
  --footnote-id-color: #99E5B5;
  --footnote-id-color-no-occurrences: #99E5B5;
  --footnote-input-background-active: #163F26;
  --graph-node: #99E5B5;
  --graph-node-focused: #99E5B5;
  --graph-node-unresolved: #99E5B5;
  --graph-text: #99E5B5;
  --heading-formatting: #99E5B5;
  --hr-color: #020704;
  --icon-color: #99E5B5;
  --icon-color-active: #99E5B5;
  --icon-color-focused: #99E5B5;
  --icon-color-hover: #99E5B5;
  --input-date-separator: #99E5B5;
  --input-placeholder-color: #99E5B5;
  --interactive-accent: #3FFF8C;
  --interactive-accent-hover: #99E5B5;
  --interactive-accent-hsl: #3FFF8C;
  --interactive-hover: #163F26;
  --interactive-normal: #40B266;
  --letterspacing-ed-headers: 1.5px;
  --letterspacing-ed-text: 0.5px;
  --letterspacing-pr-headers: 1.5px;
  --letterspacing-pr-text: 0.5px;
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --line-height-ed-headers: 20px;
  --line-height-ed-text: 20px;
  --line-height-pr-headers: 20px;
  --line-height-pr-text: 20px;
  --link-color: #99E5B5;
  --link-color-hover: #FFF2BF;
  --link-external-color: #99E5B5;
  --link-external-color-hover: #FFF2BF;
  --link-unresolved-color: #99E5B5;
  --link-unresolved-decoration-color: hsla(#3FFF8C, 0.3);
  --list-marker-color: #99E5B5;
  --list-marker-color-collapsed: #99E5B5;
  --list-marker-color-hover: #99E5B5;
  --menu-background: #0B1510;
  --menu-border-color: #3FFF8C;
  --metadata-border-color: #020704;
  --metadata-divider-color: #020704;
  --metadata-input-background-active: #163F26;
  --metadata-input-font: "ModeSeven Regular";
  --metadata-input-text-color: #99E5B5;
  --metadata-label-background-active: #163F26;
  --metadata-label-font: "ModeSeven Regular";
  --metadata-label-text-color: #99E5B5;
  --metadata-label-text-color-hover: #99E5B5;
  --metadata-property-background-active: #163F26;
  --metadata-property-box-shadow-focus: 0 0 0 2px #99E5B5;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3FFF8C;
  --modal-background: #0B1510;
  --nav-collapse-icon-color: #99E5B5;
  --nav-collapse-icon-color-collapsed: #99E5B5;
  --nav-heading-color: #99E5B5;
  --nav-heading-color-collapsed: #99E5B5;
  --nav-heading-color-collapsed-hover: #99E5B5;
  --nav-heading-color-hover: #99E5B5;
  --nav-item-background-active: #163F26;
  --nav-item-background-hover: #163F26;
  --nav-item-color: #99E5B5;
  --nav-item-color-active: #99E5B5;
  --nav-item-color-highlighted: #99E5B5;
  --nav-item-color-hover: #99E5B5;
  --nav-item-color-selected: #99E5B5;
  --nav-tag-color: #99E5B5;
  --nav-tag-color-active: #99E5B5;
  --nav-tag-color-hover: #99E5B5;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --pad-ed-headers: 5px;
  --pdf-background: #0B1510;
  --pdf-page-background: #0B1510;
  --pdf-shadow: 0 0 0 1px #020704;
  --pdf-sidebar-background: #0B1510;
  --pdf-thumbnail-shadow: 0 0 0 1px #020704;
  --pill-border-color: #020704;
  --pill-border-color-hover: #3FFF8C;
  --pill-color: #99E5B5;
  --pill-color-hover: #99E5B5;
  --pill-color-remove: #99E5B5;
  --pill-color-remove-hover: #99E5B5;
  --prompt-background: #0B1510;
  --raised-background: color-mix(in srgb, #40B266 65%, transparent) linear-gradient(#40B266, color-mix(in srgb, #40B266 65%, transparent));
  --ribbon-background: #0B1510;
  --ribbon-background-collapsed: #0B1510;
  --search-clear-button-color: #99E5B5;
  --search-icon-color: #99E5B5;
  --search-result-background: #0B1510;
  --setting-group-heading-color: #99E5B5;
  --setting-items-background: black;
  --setting-items-border-color: #020704;
  --siz-ed-txt-codeblock: 1em;
  --siz-ed-txt-h1: 1.75em;
  --siz-ed-txt-h2: 1.6em;
  --siz-ed-txt-h3: 1.45em;
  --siz-ed-txt-h4: 1.3em;
  --siz-ed-txt-h5: 1.15em;
  --siz-ed-txt-h6: 1em;
  --siz-ed-txt-highlight: 1em;
  --siz-ed-txt-italic: 1em;
  --siz-ed-txt-p: 1em;
  --siz-ed-txt-quote: 1em;
  --siz-ed-txt-strong: 1em;
  --siz-ed-txt-table: 1em;
  --siz-ed-txt-title: 2em;
  --siz-pr-txt-codeblock: 1em;
  --siz-pr-txt-h1: 1.75em;
  --siz-pr-txt-h2: 1.6em;
  --siz-pr-txt-h3: 1.45em;
  --siz-pr-txt-h4: 1.3em;
  --siz-pr-txt-h5: 1.15em;
  --siz-pr-txt-h6: 1em;
  --siz-pr-txt-highlight: 1em;
  --siz-pr-txt-italic: 1em;
  --siz-pr-txt-p: 1em;
  --siz-pr-txt-quote: 1em;
  --siz-pr-txt-strong: 1em;
  --siz-pr-txt-table: 1em;
  --siz-pr-txt-title: 2em;
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
  --slider-thumb-border-color: #3FFF8C;
  --slider-track-background: #020704;
  --status-bar-background: #0B1510;
  --status-bar-border-color: #020704;
  --status-bar-text-color: #99E5B5;
  --suggestion-background: #0B1510;
  --tab-background-active: #0B1510;
  --tab-container-background: #0B1510;
  --tab-divider-color: #3FFF8C;
  --tab-outline-color: #020704;
  --tab-switcher-background: #0B1510;
  --tab-switcher-menubar-background: linear-gradient(to top, #0B1510, transparent);
  --tab-text-color: #99E5B5;
  --tab-text-color-active: #99E5B5;
  --tab-text-color-focused: #99E5B5;
  --tab-text-color-focused-active: #99E5B5;
  --tab-text-color-focused-active-current: #99E5B5;
  --tab-text-color-focused-highlighted: #99E5B5;
  --table-add-button-border-color: #020704;
  --table-border-color: #020704;
  --table-drag-handle-background-active: #3FFF8C;
  --table-drag-handle-color: #99E5B5;
  --table-drag-handle-color-active: #020704;
  --table-header-border-color: #020704;
  --table-header-color: #99E5B5;
  --table-selection-border-color: #3FFF8C;
  --tag-background: hsla(#3FFF8C, 0.1);
  --tag-background-hover: hsla(#3FFF8C, 0.2);
  --tag-border-color: hsla(#3FFF8C, 0.15);
  --tag-border-color-hover: hsla(#3FFF8C, 0.15);
  --tag-color: #99E5B5;
  --tag-color-hover: #99E5B5;
  --text-accent: #99E5B5;
  --text-accent-hover: #FFF2BF;
  --text-error: #FFD303;
  --text-faint: #99E5B5;
  --text-muted: #99E5B5;
  --text-normal: #99E5B5;
  --text-on-accent: #020704;
  --text-selection: #437254;
  --text-success: #3FFF8C;
  --titlebar-background: #0B1510;
  --titlebar-background-focused: #0B1510;
  --titlebar-border-color: #020704;
  --titlebar-text-color: #99E5B5;
  --titlebar-text-color-focused: #99E5B5;
  --vault-profile-color: #99E5B5;
  --vault-profile-color-hover: #99E5B5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(2, 7, 4);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 21, 16);
  border-left-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

body div#quartz-root {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}`,
    typography: `body .page article p > b, b {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .page article p > em, em {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .page article p > i, i {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .page article p > strong, strong {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .text-highlight {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration: rgb(153, 229, 181);
  text-decoration-color: rgb(153, 229, 181);
}

body del {
  color: rgb(64, 178, 102);
  font-family: "ModeSeven Regular";
  outline: rgb(64, 178, 102) none 0px;
  text-decoration: line-through rgb(64, 178, 102);
  text-decoration-color: rgb(64, 178, 102);
}

body p {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration: rgb(153, 229, 181);
  text-decoration-color: rgb(153, 229, 181);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 211, 3);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 211, 3) none 0px;
  text-decoration: underline rgb(255, 211, 3);
  text-decoration-color: rgb(255, 211, 3);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 211, 3);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 211, 3) none 0px;
  text-decoration: underline rgb(255, 211, 3);
  text-decoration-color: rgb(255, 211, 3);
}

body a.internal.broken {
  color: rgb(255, 0, 0);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `body dd {
  color: rgb(153, 229, 181);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(153, 229, 181);
}

body ol > li {
  color: rgb(64, 178, 102);
}

body ol.overflow {
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body ul > li {
  color: rgb(64, 178, 102);
}

body ul.overflow {
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}

body blockquote {
  font-family: "ModeSeven Regular";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body table {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  width: 226.922px;
}

body td {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

body th {
  background-color: rgb(64, 178, 102);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

body thead {
  background-color: rgb(64, 178, 102);
}`,
    code: `body code {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(63, 255, 140);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
}

body pre:has(> code) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
}`,
    images: `body audio {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body figcaption {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body figure {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body img {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}

body video {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .footnotes {
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .transclude {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(63, 255, 140);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .transclude-inner {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(63, 255, 140);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "ModeSeven Regular";
}

body .katex-display > .katex > .katex-html {
  font-family: "ModeSeven Regular";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(22, 63, 38);
  text-decoration: line-through rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body input[type=checkbox] {
  border-bottom-color: rgb(22, 63, 38);
  border-left-color: rgb(22, 63, 38);
  border-right-color: rgb(22, 63, 38);
  border-top-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='!'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='/'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="bug"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="danger"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="example"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="failure"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="info"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="note"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="question"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="quote"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="success"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="tip"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="todo"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="warning"] {
  background-color: rgb(49, 140, 84);
}`,
    search: `body .search > .search-button {
  background-color: rgb(2, 7, 4);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .search > .search-container > .search-space {
  background-color: rgb(11, 21, 16);
}

body .search > .search-container > .search-space > * {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration: rgb(153, 229, 181);
  text-decoration-color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(11, 21, 16);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(153, 229, 181);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
  font-family: "ModeSeven Regular";
}

body a.internal.tag-link::before {
  color: rgb(153, 229, 181);
}

body h1 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h2 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h2.page-title, h2.page-title a {
  color: rgb(153, 229, 181);
  font-family: "Scifi Title";
}

body h3 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h4 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h5 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h6 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body hr {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-corner {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-track {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(153, 229, 181);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(153, 229, 181);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(153, 229, 181);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}`,
    footer: `body footer {
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body footer ul li a {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body li.section-li > .section .meta {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}

body ul.section-ul {
  background-color: rgb(2, 7, 4);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .darkmode svg {
  color: rgb(153, 229, 181);
  stroke: rgb(153, 229, 181);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .breadcrumb-element p {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .metadata {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .metadata-properties {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .navigation-progress {
  background-color: rgb(11, 21, 16);
}

body .page-header h2.page-title {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body abbr {
  color: rgb(64, 178, 102);
  text-decoration: underline dotted rgb(64, 178, 102);
}

body details {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body input[type=text] {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}

body sub {
  color: rgb(64, 178, 102);
  font-size: 12.5px;
}

body summary {
  color: rgb(153, 229, 181);
}

body sup {
  color: rgb(64, 178, 102);
  font-size: 12.5px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: #86C66C;
  --background-modifier-border: #C9D3CB;
  --background-modifier-border-focus: #20542C;
  --background-modifier-border-hover: #437A41;
  --background-modifier-error: #C9D3CB;
  --background-modifier-error-hover: #437A41;
  --background-modifier-error-rgb: #437A41;
  --background-modifier-form-field: #C9D3CB;
  --background-modifier-form-field-hover: #C9D3CB;
  --background-modifier-hover: #86C66C;
  --background-modifier-message: #64A055;
  --background-modifier-success: #C9D3CB;
  --background-modifier-success-rgb: #20542C;
  --background-primary: #D7DDD9;
  --background-primary-alt: black;
  --background-secondary: #D7DDD9;
  --background-secondary-alt: #D7DDD9;
  --bases-cards-background: #D7DDD9;
  --bases-cards-cover-background: black;
  --bases-cards-shadow: 0 0 0 1px #C9D3CB;
  --bases-cards-shadow-hover: 0 0 0 1px #437A41;
  --bases-embed-border-color: #C9D3CB;
  --bases-group-heading-property-color: #20542C;
  --bases-table-border-color: #C9D3CB;
  --bases-table-cell-background-active: #D7DDD9;
  --bases-table-cell-background-disabled: black;
  --bases-table-cell-shadow-active: 0 0 0 2px #20542C;
  --bases-table-cell-shadow-focus: 0 0 0 2px #437A41;
  --bases-table-group-background: black;
  --bases-table-header-background: #D7DDD9;
  --bases-table-header-background-hover: #86C66C;
  --bases-table-header-color: #20542C;
  --bases-table-summary-background: #D7DDD9;
  --bases-table-summary-background-hover: #86C66C;
  --blockquote-border-color: #437A41;
  --blur-background: color-mix(in srgb, #D7DDD9 65%, transparent) linear-gradient(#D7DDD9, color-mix(in srgb, #D7DDD9 65%, transparent));
  --canvas-background: #D7DDD9;
  --canvas-card-label-color: #20542C;
  --caret-color: #20542C;
  --checkbox-border-color: #20542C;
  --checkbox-border-color-hover: #20542C;
  --checkbox-color: #437A41;
  --checkbox-color-hover: #20542C;
  --checkbox-marker-color: #D7DDD9;
  --checklist-done-color: #20542C;
  --code-background: black;
  --code-border-color: #C9D3CB;
  --code-bracket-background: #86C66C;
  --code-comment: #20542C;
  --code-normal: #20542C;
  --code-punctuation: #20542C;
  --col-accent: #437A41;
  --col-accent-plus: #20542C;
  --col-base: #64A055;
  --col-base-background: #D7DDD9;
  --col-bckg-filetreeheader: #D7DDD9;
  --col-bckg-mainpanels: #C9D3CB;
  --col-bckg-menudropdownhover: #86C66C;
  --col-bckg-menudropdowns: #86C66C;
  --col-bckg-selectedtitles: #86C66C;
  --col-danger: #86C66C;
  --col-ed-background: #D7DDD9;
  --col-ed-bckg-checkbox-empty: #86C66C;
  --col-ed-bckg-checkbox-full: #20542C;
  --col-ed-bckg-codeblock: #86C66C;
  --col-ed-bckg-highlight: #64A055;
  --col-ed-bckg-hyperlink-broken: #86C66C;
  --col-ed-bckg-quote: #D7DDD9;
  --col-ed-bckg-quote-callout: #ACD580;
  --col-ed-bckg-quote-warning: #86C66C;
  --col-ed-bckg-table: #D7DDD9;
  --col-ed-bckg-tableh: #86C66C;
  --col-ed-bckg-tagbeg: #86C66C;
  --col-ed-bckg-tagend: #86C66C;
  --col-ed-caret: #20542C;
  --col-ed-hr: #64A055;
  --col-ed-hyperlink: #0457E5;
  --col-ed-hyperlink-broken: red;
  --col-ed-hyperlink-highlight-hover: #C9D3CB;
  --col-ed-hyperlink-hover: #011F64;
  --col-ed-hyperlink-strikethrough: #3F8CFF;
  --col-ed-txt-checkbox-full: #86C66C;
  --col-ed-txt-codeblock: #437A41;
  --col-ed-txt-h1: #437A41;
  --col-ed-txt-h2: #437A41;
  --col-ed-txt-h3: #437A41;
  --col-ed-txt-h4: #437A41;
  --col-ed-txt-h5: #437A41;
  --col-ed-txt-h6: #437A41;
  --col-ed-txt-highlight: #C9D3CB;
  --col-ed-txt-italic: #437A41;
  --col-ed-txt-ol-bullet: #20542C;
  --col-ed-txt-p: #64A055;
  --col-ed-txt-quote: #20542C;
  --col-ed-txt-strikethrough: #86C66C;
  --col-ed-txt-strong: #437A41;
  --col-ed-txt-table: #64A055;
  --col-ed-txt-tableh: #20542C;
  --col-ed-txt-tagbeg: #0457E5;
  --col-ed-txt-tagend: #0457E5;
  --col-ed-txt-title: #20542C;
  --col-ed-txt-ul-bullet: #20542C;
  --col-icons: #20542C;
  --col-important: #0457E5;
  --col-important-muted: #3F8CFF;
  --col-important-plus: #011F64;
  --col-menucheckbox: #437A41;
  --col-muted: #86C66C;
  --col-muted-plus: #C9D3CB;
  --col-pr-background: #D7DDD9;
  --col-pr-bckg-checkbox-empty: #86C66C;
  --col-pr-bckg-checkbox-full: #20542C;
  --col-pr-bckg-codeblock: #86C66C;
  --col-pr-bckg-highlight: #64A055;
  --col-pr-bckg-quote: #D7DDD9;
  --col-pr-bckg-quote-callout: #ACD580;
  --col-pr-bckg-quote-warning: #86C66C;
  --col-pr-bckg-table: #D7DDD9;
  --col-pr-bckg-tableh: #64A055;
  --col-pr-bckg-tag: #0457E5;
  --col-pr-hr: #64A055;
  --col-pr-hyperlink-broken: red;
  --col-pr-txt-checkbox-full: #86C66C;
  --col-pr-txt-codeblock: #437A41;
  --col-pr-txt-h1: #437A41;
  --col-pr-txt-h2: #437A41;
  --col-pr-txt-h3: #437A41;
  --col-pr-txt-h4: #437A41;
  --col-pr-txt-h5: #437A41;
  --col-pr-txt-h6: #437A41;
  --col-pr-txt-highlight: #C9D3CB;
  --col-pr-txt-hyperlink: #0457E5;
  --col-pr-txt-hyperlink-highlight-hover: #C9D3CB;
  --col-pr-txt-hyperlink-hover: #011F64;
  --col-pr-txt-hyperlink-strikethrough: #3F8CFF;
  --col-pr-txt-hyperlink-unresolved: #0457E5;
  --col-pr-txt-italic: #437A41;
  --col-pr-txt-ol-bullet: #20542C;
  --col-pr-txt-p: #64A055;
  --col-pr-txt-quote: #20542C;
  --col-pr-txt-strikethrough: #86C66C;
  --col-pr-txt-strong: #437A41;
  --col-pr-txt-table: #C9D3CB;
  --col-pr-txt-tableh: #20542C;
  --col-pr-txt-tag: #86C66C;
  --col-pr-txt-title: #20542C;
  --col-pr-txt-ul-bullet: #20542C;
  --col-safety: #ACD580;
  --col-text-selection: #437254;
  --col-txt-menudropdownhover: #437A41;
  --col-txt-menudropdowns: #437A41;
  --col-txt-selectedtitles: #20542C;
  --col-txt-titlebars: #E5EAE7;
  --col-txt-titles: #437A41;
  --collapse-icon-color: #20542C;
  --collapse-icon-color-collapsed: #20542C;
  --divider-color: #C9D3CB;
  --divider-color-hover: #437A41;
  --dropdown-background: #64A055;
  --dropdown-background-hover: #86C66C;
  --embed-block-shadow-hover: 0 0 0 1px #C9D3CB, inset 0 0 0 1px #C9D3CB;
  --embed-border-start: 2px solid #437A41;
  --file-header-background: #D7DDD9;
  --file-header-background-focused: #D7DDD9;
  --file-header-font: "ModeSeven Regular";
  --files-font-size: 1em;
  --flair-background: #64A055;
  --flair-color: #20542C;
  --fnt-ed-headers: "ModeSeven Regular";
  --fnt-ed-text: "ModeSeven Regular";
  --fnt-ed-title: "Scifi Title";
  --fnt-head-p: "ModeSeven Regular";
  --fnt-pr-headers: "ModeSeven Regular";
  --fnt-pr-text: "ModeSeven Regular";
  --fnt-pr-title: "Scifi Title";
  --fnt-title: "Scifi Title";
  --folders-font-size: 1em;
  --font-interface: "ModeSeven Regular";
  --footnote-divider-color: #C9D3CB;
  --footnote-id-color: #20542C;
  --footnote-id-color-no-occurrences: #20542C;
  --footnote-input-background-active: #86C66C;
  --graph-node: #20542C;
  --graph-node-focused: #20542C;
  --graph-node-unresolved: #20542C;
  --graph-text: #20542C;
  --heading-formatting: #20542C;
  --hr-color: #C9D3CB;
  --icon-color: #20542C;
  --icon-color-active: #20542C;
  --icon-color-focused: #20542C;
  --icon-color-hover: #20542C;
  --input-date-separator: #20542C;
  --input-placeholder-color: #20542C;
  --interactive-accent: #437A41;
  --interactive-accent-hover: #20542C;
  --interactive-accent-hsl: #437A41;
  --interactive-hover: #86C66C;
  --interactive-normal: #64A055;
  --letterspacing-ed-headers: 1.5px;
  --letterspacing-ed-text: 0.5px;
  --letterspacing-pr-headers: 1.5px;
  --letterspacing-pr-text: 0.5px;
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --line-height-ed-headers: 20px;
  --line-height-ed-text: 20px;
  --line-height-pr-headers: 20px;
  --line-height-pr-text: 20px;
  --link-color: #20542C;
  --link-color-hover: #011F64;
  --link-external-color: #20542C;
  --link-external-color-hover: #011F64;
  --link-unresolved-color: #20542C;
  --link-unresolved-decoration-color: hsla(#437A41, 0.3);
  --list-marker-color: #20542C;
  --list-marker-color-collapsed: #20542C;
  --list-marker-color-hover: #20542C;
  --menu-background: #D7DDD9;
  --menu-border-color: #437A41;
  --metadata-border-color: #C9D3CB;
  --metadata-divider-color: #C9D3CB;
  --metadata-input-background-active: #86C66C;
  --metadata-input-font: "ModeSeven Regular";
  --metadata-input-text-color: #20542C;
  --metadata-label-background-active: #86C66C;
  --metadata-label-font: "ModeSeven Regular";
  --metadata-label-text-color: #20542C;
  --metadata-label-text-color-hover: #20542C;
  --metadata-property-background-active: #86C66C;
  --metadata-property-box-shadow-focus: 0 0 0 2px #20542C;
  --metadata-property-box-shadow-hover: 0 0 0 1px #437A41;
  --modal-background: #D7DDD9;
  --nav-collapse-icon-color: #20542C;
  --nav-collapse-icon-color-collapsed: #20542C;
  --nav-heading-color: #20542C;
  --nav-heading-color-collapsed: #20542C;
  --nav-heading-color-collapsed-hover: #20542C;
  --nav-heading-color-hover: #20542C;
  --nav-item-background-active: #86C66C;
  --nav-item-background-hover: #86C66C;
  --nav-item-color: #20542C;
  --nav-item-color-active: #20542C;
  --nav-item-color-highlighted: #20542C;
  --nav-item-color-hover: #20542C;
  --nav-item-color-selected: #20542C;
  --nav-tag-color: #20542C;
  --nav-tag-color-active: #20542C;
  --nav-tag-color-hover: #20542C;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --pad-ed-headers: 5px;
  --pdf-background: #D7DDD9;
  --pdf-page-background: #D7DDD9;
  --pdf-sidebar-background: #D7DDD9;
  --pill-border-color: #C9D3CB;
  --pill-border-color-hover: #437A41;
  --pill-color: #20542C;
  --pill-color-hover: #20542C;
  --pill-color-remove: #20542C;
  --pill-color-remove-hover: #20542C;
  --prompt-background: #D7DDD9;
  --raised-background: color-mix(in srgb, #D7DDD9 65%, transparent) linear-gradient(#D7DDD9, color-mix(in srgb, #D7DDD9 65%, transparent));
  --ribbon-background: #D7DDD9;
  --ribbon-background-collapsed: #D7DDD9;
  --search-clear-button-color: #20542C;
  --search-icon-color: #20542C;
  --search-result-background: #D7DDD9;
  --setting-group-heading-color: #20542C;
  --setting-items-background: black;
  --setting-items-border-color: #C9D3CB;
  --siz-ed-txt-codeblock: 1em;
  --siz-ed-txt-h1: 1.75em;
  --siz-ed-txt-h2: 1.6em;
  --siz-ed-txt-h3: 1.45em;
  --siz-ed-txt-h4: 1.3em;
  --siz-ed-txt-h5: 1.15em;
  --siz-ed-txt-h6: 1em;
  --siz-ed-txt-highlight: 1em;
  --siz-ed-txt-italic: 1em;
  --siz-ed-txt-p: 1em;
  --siz-ed-txt-quote: 1em;
  --siz-ed-txt-strong: 1em;
  --siz-ed-txt-table: 1em;
  --siz-ed-txt-title: 2em;
  --siz-pr-txt-codeblock: 1em;
  --siz-pr-txt-h1: 1.75em;
  --siz-pr-txt-h2: 1.6em;
  --siz-pr-txt-h3: 1.45em;
  --siz-pr-txt-h4: 1.3em;
  --siz-pr-txt-h5: 1.15em;
  --siz-pr-txt-h6: 1em;
  --siz-pr-txt-highlight: 1em;
  --siz-pr-txt-italic: 1em;
  --siz-pr-txt-p: 1em;
  --siz-pr-txt-quote: 1em;
  --siz-pr-txt-strong: 1em;
  --siz-pr-txt-table: 1em;
  --siz-pr-txt-title: 2em;
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
  --slider-thumb-border-color: #437A41;
  --slider-track-background: #C9D3CB;
  --status-bar-background: #D7DDD9;
  --status-bar-border-color: #C9D3CB;
  --status-bar-text-color: #20542C;
  --suggestion-background: #D7DDD9;
  --tab-background-active: #D7DDD9;
  --tab-container-background: #D7DDD9;
  --tab-divider-color: #437A41;
  --tab-outline-color: #C9D3CB;
  --tab-switcher-background: #D7DDD9;
  --tab-switcher-menubar-background: linear-gradient(to top, #D7DDD9, transparent);
  --tab-text-color: #20542C;
  --tab-text-color-active: #20542C;
  --tab-text-color-focused: #20542C;
  --tab-text-color-focused-active: #20542C;
  --tab-text-color-focused-active-current: #20542C;
  --tab-text-color-focused-highlighted: #20542C;
  --table-add-button-border-color: #C9D3CB;
  --table-border-color: #C9D3CB;
  --table-drag-handle-background-active: #437A41;
  --table-drag-handle-color: #20542C;
  --table-drag-handle-color-active: #C9D3CB;
  --table-header-border-color: #C9D3CB;
  --table-header-color: #20542C;
  --table-selection-border-color: #437A41;
  --tag-background: hsla(#437A41, 0.1);
  --tag-background-hover: hsla(#437A41, 0.2);
  --tag-border-color: hsla(#437A41, 0.15);
  --tag-border-color-hover: hsla(#437A41, 0.15);
  --tag-color: #20542C;
  --tag-color-hover: #20542C;
  --text-accent: #20542C;
  --text-accent-hover: #011F64;
  --text-error: #0457E5;
  --text-faint: #20542C;
  --text-muted: #20542C;
  --text-normal: #20542C;
  --text-on-accent: #C9D3CB;
  --text-selection: #437254;
  --text-success: #437A41;
  --titlebar-background: #D7DDD9;
  --titlebar-background-focused: #D7DDD9;
  --titlebar-border-color: #C9D3CB;
  --titlebar-text-color: #20542C;
  --titlebar-text-color-focused: #20542C;
  --vault-profile-color: #20542C;
  --vault-profile-color-hover: #20542C;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(201, 211, 203);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(215, 221, 217);
  border-left-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

body div#quartz-root {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}`,
    typography: `body .page article p > b, b {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .page article p > em, em {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .page article p > i, i {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .page article p > strong, strong {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .text-highlight {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration: rgb(32, 84, 44);
  text-decoration-color: rgb(32, 84, 44);
}

body del {
  color: rgb(100, 160, 85);
  font-family: "ModeSeven Regular";
  outline: rgb(100, 160, 85) none 0px;
  text-decoration: line-through rgb(100, 160, 85);
  text-decoration-color: rgb(100, 160, 85);
}

body p {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration: rgb(32, 84, 44);
  text-decoration-color: rgb(32, 84, 44);
}`,
    links: `body a.external, footer a {
  color: rgb(4, 87, 229);
  font-family: "ModeSeven Regular";
  outline: rgb(4, 87, 229) none 0px;
  text-decoration: underline rgb(4, 87, 229);
  text-decoration-color: rgb(4, 87, 229);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(4, 87, 229);
  font-family: "ModeSeven Regular";
  outline: rgb(4, 87, 229) none 0px;
  text-decoration: underline rgb(4, 87, 229);
  text-decoration-color: rgb(4, 87, 229);
}

body a.internal.broken {
  color: rgb(255, 0, 0);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `body dd {
  color: rgb(32, 84, 44);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(32, 84, 44);
}

body ol > li {
  color: rgb(100, 160, 85);
}

body ol.overflow {
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body ul > li {
  color: rgb(100, 160, 85);
}

body ul.overflow {
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}

body blockquote {
  font-family: "ModeSeven Regular";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body table {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  width: 226.922px;
}

body td {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

body th {
  background-color: rgb(100, 160, 85);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

body thead {
  background-color: rgb(100, 160, 85);
}`,
    code: `body code {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(67, 122, 65);
}

body pre > code, pre:has(> code) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
}

body pre:has(> code) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
}`,
    images: `body audio {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body figcaption {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body figure {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body img {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}

body video {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .footnotes {
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .transclude {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(67, 122, 65);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .transclude-inner {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(67, 122, 65);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "ModeSeven Regular";
}

body .katex-display > .katex > .katex-html {
  font-family: "ModeSeven Regular";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(134, 198, 108);
  text-decoration: line-through rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body input[type=checkbox] {
  border-bottom-color: rgb(134, 198, 108);
  border-left-color: rgb(134, 198, 108);
  border-right-color: rgb(134, 198, 108);
  border-top-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='!'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='*'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='-'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='/'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='>'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='?'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='I'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='S'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='b'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='c'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='d'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='f'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='i'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='k'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='l'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='p'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='u'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='w'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="bug"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="danger"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="example"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="failure"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="info"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="note"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="question"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="quote"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="success"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="tip"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="todo"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="warning"] {
  background-color: rgb(134, 198, 108);
}`,
    search: `body .search > .search-button {
  background-color: rgb(201, 211, 203);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .search > .search-container > .search-space {
  background-color: rgb(215, 221, 217);
}

body .search > .search-container > .search-space > * {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration: rgb(32, 84, 44);
  text-decoration-color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(134, 198, 108);
  color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(215, 221, 217);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(134, 198, 108);
  color: rgb(32, 84, 44);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(32, 84, 44);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
  font-family: "ModeSeven Regular";
}

body a.internal.tag-link::before {
  color: rgb(32, 84, 44);
}

body h1 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h2 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h2.page-title, h2.page-title a {
  color: rgb(32, 84, 44);
  font-family: "Scifi Title";
}

body h3 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h4 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h5 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h6 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body hr {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-corner {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-track {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(32, 84, 44);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(32, 84, 44);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(32, 84, 44);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}`,
    footer: `body footer {
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body footer ul li a {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body li.section-li > .section .meta {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}

body ul.section-ul {
  background-color: rgb(201, 211, 203);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .darkmode svg {
  color: rgb(32, 84, 44);
  stroke: rgb(32, 84, 44);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .breadcrumb-element p {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .metadata {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .metadata-properties {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .navigation-progress {
  background-color: rgb(215, 221, 217);
}

body .page-header h2.page-title {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body abbr {
  color: rgb(100, 160, 85);
  text-decoration: underline dotted rgb(100, 160, 85);
}

body details {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body input[type=text] {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}

body sub {
  color: rgb(100, 160, 85);
  font-size: 12.5px;
}

body summary {
  color: rgb(32, 84, 44);
}

body sup {
  color: rgb(100, 160, 85);
  font-size: 12.5px;
}`,
  },
};
