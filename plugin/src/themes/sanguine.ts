import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sanguine",
    modes: ["dark"],
    variations: [],
    fonts: ["slasher-film"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: #D8B131;
  --background-modifier-border: #232221;
  --background-modifier-border-focus: #D8B131;
  --background-modifier-border-hover: #232221;
  --background-modifier-error: #191919;
  --background-modifier-error-hover: #D92926;
  --background-modifier-error-rgb: #D8B131;
  --background-modifier-form-field: #191919;
  --background-modifier-form-field-hover: #191919;
  --background-modifier-hover: #D8B131;
  --background-modifier-message: #D92926;
  --background-modifier-success: #232221;
  --background-modifier-success-rgb: #FF4949;
  --background-primary: #030308;
  --background-primary-alt: black;
  --background-secondary: #030308;
  --background-secondary-alt: #030308;
  --bases-cards-background: #030308;
  --bases-cards-cover-background: black;
  --bases-cards-shadow: 0 0 0 1px #232221;
  --bases-cards-shadow-hover: 0 0 0 1px #232221;
  --bases-embed-border-color: #232221;
  --bases-group-heading-property-color: #83888C;
  --bases-table-border-color: #232221;
  --bases-table-cell-background-active: #030308;
  --bases-table-cell-background-disabled: black;
  --bases-table-cell-shadow-active: 0 0 0 2px #D8B131;
  --bases-table-cell-shadow-focus: 0 0 0 2px #D92926;
  --bases-table-group-background: black;
  --bases-table-header-background: #030308;
  --bases-table-header-background-hover: #D8B131;
  --bases-table-header-color: #83888C;
  --bases-table-summary-background: #030308;
  --bases-table-summary-background-hover: #D8B131;
  --blockquote-border-color: #D92926;
  --blur-background: color-mix(in srgb, #E4E5E0 65%, transparent) linear-gradient(#E4E5E0, color-mix(in srgb, #E4E5E0 65%, transparent));
  --canvas-background: #030308;
  --canvas-card-label-color: #83888C;
  --caret-color: #83888C;
  --checkbox-border-color: #83888C;
  --checkbox-border-color-hover: #83888C;
  --checkbox-color: #D92926;
  --checkbox-color-hover: #D8B131;
  --checkbox-marker-color: #030308;
  --checklist-done-color: #83888C;
  --code-background: black;
  --code-border-color: #232221;
  --code-bracket-background: #D8B131;
  --code-comment: #83888C;
  --code-normal: #83888C;
  --code-punctuation: #83888C;
  --col-accent: #D92926;
  --col-accent-plus: #FF4949;
  --col-base: #E4E5E0;
  --col-base-background: #030308;
  --col-bckg-filetreeheader: #030308;
  --col-bckg-mainpanels: #191919;
  --col-bckg-menudropdownhover: #232221;
  --col-bckg-menudropdowns: #191919;
  --col-bckg-selectedtitles: #D8B131;
  --col-danger: #232221;
  --col-ed-background: #030308;
  --col-ed-bckg-checkbox-empty: #D92926;
  --col-ed-bckg-checkbox-full: #83888C;
  --col-ed-bckg-codeblock: #232221;
  --col-ed-bckg-highlight: #D8B131;
  --col-ed-bckg-hyperlink-broken: #232221;
  --col-ed-bckg-quote: #030308;
  --col-ed-bckg-quote-callout: #232221;
  --col-ed-bckg-quote-warning: #232221;
  --col-ed-bckg-table: #030308;
  --col-ed-bckg-tableh: #232221;
  --col-ed-bckg-tagbeg: #232221;
  --col-ed-bckg-tagend: #232221;
  --col-ed-caret: #FF4949;
  --col-ed-hr: #83888C;
  --col-ed-hyperlink: #D8B131;
  --col-ed-hyperlink-broken: red;
  --col-ed-hyperlink-highlight-hover: #232221;
  --col-ed-hyperlink-hover: #FFD059;
  --col-ed-hyperlink-strikethrough: #9B7F31;
  --col-ed-txt-checkbox-full: #83888C;
  --col-ed-txt-codeblock: #D92926;
  --col-ed-txt-h1: #D92926;
  --col-ed-txt-h2: #D92926;
  --col-ed-txt-h3: #D92926;
  --col-ed-txt-h4: #D92926;
  --col-ed-txt-h5: #D92926;
  --col-ed-txt-h6: #D92926;
  --col-ed-txt-highlight: #232221;
  --col-ed-txt-italic: #D92926;
  --col-ed-txt-ol-bullet: #FF4949;
  --col-ed-txt-p: #E4E5E0;
  --col-ed-txt-quote: #FF4949;
  --col-ed-txt-strikethrough: #83888C;
  --col-ed-txt-strong: #D92926;
  --col-ed-txt-table: #E4E5E0;
  --col-ed-txt-tableh: #D92926;
  --col-ed-txt-tagbeg: #D8B131;
  --col-ed-txt-tagend: #D8B131;
  --col-ed-txt-title: #D92926;
  --col-ed-txt-ul-bullet: #FF4949;
  --col-icons: #83888C;
  --col-important: #D8B131;
  --col-important-muted: #9B7F31;
  --col-important-plus: #FFD059;
  --col-menucheckbox: #D92926;
  --col-muted: #83888C;
  --col-muted-plus: #232221;
  --col-muted-plus-plus: #191919;
  --col-pr-background: #030308;
  --col-pr-bckg-checkbox-empty: #D92926;
  --col-pr-bckg-checkbox-full: #83888C;
  --col-pr-bckg-codeblock: #232221;
  --col-pr-bckg-highlight: #D8B131;
  --col-pr-bckg-quote: #030308;
  --col-pr-bckg-quote-callout: #232221;
  --col-pr-bckg-quote-warning: #232221;
  --col-pr-bckg-table: #030308;
  --col-pr-bckg-tableh: #232221;
  --col-pr-bckg-tag: #D8B131;
  --col-pr-hr: #83888C;
  --col-pr-hyperlink-broken: red;
  --col-pr-txt-checkbox-full: #83888C;
  --col-pr-txt-codeblock: #D92926;
  --col-pr-txt-h1: #D92926;
  --col-pr-txt-h2: #D92926;
  --col-pr-txt-h3: #D92926;
  --col-pr-txt-h4: #D92926;
  --col-pr-txt-h5: #D92926;
  --col-pr-txt-h6: #D92926;
  --col-pr-txt-highlight: #232221;
  --col-pr-txt-hyperlink: #D8B131;
  --col-pr-txt-hyperlink-highlight-hover: #232221;
  --col-pr-txt-hyperlink-hover: #FFD059;
  --col-pr-txt-hyperlink-strikethrough: #9B7F31;
  --col-pr-txt-hyperlink-unresolved: #D8B131;
  --col-pr-txt-italic: #D92926;
  --col-pr-txt-ol-bullet: #FF4949;
  --col-pr-txt-p: #E4E5E0;
  --col-pr-txt-quote: #FF4949;
  --col-pr-txt-strikethrough: #83888C;
  --col-pr-txt-strong: #D92926;
  --col-pr-txt-table: #E4E5E0;
  --col-pr-txt-tableh: #D92926;
  --col-pr-txt-tag: #232221;
  --col-pr-txt-title: #D92926;
  --col-pr-txt-ul-bullet: #FF4949;
  --col-safety: #232221;
  --col-txt-files: #E4E5E0;
  --col-txt-menudropdownhover: #D92926;
  --col-txt-menudropdowns: #D92926;
  --col-txt-selectedtitles: #232221;
  --col-txt-titlebars: #030308;
  --col-txt-titles: #D92926;
  --collapse-icon-color: #83888C;
  --collapse-icon-color-collapsed: #FF4949;
  --divider-color: #232221;
  --divider-color-hover: #D92926;
  --dropdown-background: #E4E5E0;
  --dropdown-background-hover: #D8B131;
  --embed-block-shadow-hover: 0 0 0 1px #232221, inset 0 0 0 1px #232221;
  --embed-border-start: 2px solid #D92926;
  --file-header-background: #030308;
  --file-header-background-focused: #030308;
  --file-header-font: "Slasher Regular";
  --files-font-size: 1em;
  --flair-background: #E4E5E0;
  --flair-color: #83888C;
  --fnt-ed-headers: "Slasher Regular";
  --fnt-ed-text: "Slasher Regular";
  --fnt-ed-title: "Slasher Title";
  --fnt-head-p: "Slasher Regular";
  --fnt-pr-headers: "Slasher Regular";
  --fnt-pr-text: "Slasher Regular";
  --fnt-pr-title: "Slasher Title";
  --fnt-title: "Slasher Title";
  --folders-font-size: 1em;
  --font-interface: "Slasher Regular";
  --footnote-divider-color: #232221;
  --footnote-id-color: #83888C;
  --footnote-id-color-no-occurrences: #83888C;
  --footnote-input-background-active: #D8B131;
  --graph-node: #83888C;
  --graph-node-focused: #FF4949;
  --graph-node-unresolved: #83888C;
  --graph-text: #83888C;
  --heading-formatting: #83888C;
  --hr-color: #232221;
  --icon-color: #83888C;
  --icon-color-active: #FF4949;
  --icon-color-focused: #83888C;
  --icon-color-hover: #83888C;
  --input-date-separator: #83888C;
  --input-placeholder-color: #83888C;
  --interactive-accent: #D92926;
  --interactive-accent-hover: #D8B131;
  --interactive-accent-hsl: #D92926;
  --interactive-hover: #D8B131;
  --interactive-normal: #E4E5E0;
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
  --link-color: #FF4949;
  --link-color-hover: #FFD059;
  --link-external-color: #FF4949;
  --link-external-color-hover: #FFD059;
  --link-unresolved-color: #FF4949;
  --link-unresolved-decoration-color: hsla(#D92926, 0.3);
  --list-marker-color: #83888C;
  --list-marker-color-collapsed: #FF4949;
  --list-marker-color-hover: #83888C;
  --menu-background: #030308;
  --menu-border-color: #232221;
  --metadata-border-color: #232221;
  --metadata-divider-color: #232221;
  --metadata-input-background-active: #D8B131;
  --metadata-input-font: "Slasher Regular";
  --metadata-input-text-color: #83888C;
  --metadata-label-background-active: #D8B131;
  --metadata-label-font: "Slasher Regular";
  --metadata-label-text-color: #83888C;
  --metadata-label-text-color-hover: #83888C;
  --metadata-property-background-active: #D8B131;
  --metadata-property-box-shadow-focus: 0 0 0 2px #D8B131;
  --metadata-property-box-shadow-hover: 0 0 0 1px #232221;
  --modal-background: #030308;
  --nav-collapse-icon-color: #83888C;
  --nav-collapse-icon-color-collapsed: #83888C;
  --nav-heading-color: #83888C;
  --nav-heading-color-collapsed: #83888C;
  --nav-heading-color-collapsed-hover: #83888C;
  --nav-heading-color-hover: #83888C;
  --nav-item-background-active: #D8B131;
  --nav-item-background-hover: #D8B131;
  --nav-item-color: #83888C;
  --nav-item-color-active: #83888C;
  --nav-item-color-highlighted: #FF4949;
  --nav-item-color-hover: #83888C;
  --nav-item-color-selected: #83888C;
  --nav-tag-color: #83888C;
  --nav-tag-color-active: #83888C;
  --nav-tag-color-hover: #83888C;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --pad-ed-headers: 5px;
  --pdf-background: #030308;
  --pdf-page-background: #030308;
  --pdf-shadow: 0 0 0 1px #232221;
  --pdf-sidebar-background: #030308;
  --pdf-thumbnail-shadow: 0 0 0 1px #232221;
  --pill-border-color: #232221;
  --pill-border-color-hover: #232221;
  --pill-color: #83888C;
  --pill-color-hover: #83888C;
  --pill-color-remove: #83888C;
  --pill-color-remove-hover: #FF4949;
  --prompt-background: #030308;
  --raised-background: color-mix(in srgb, #E4E5E0 65%, transparent) linear-gradient(#E4E5E0, color-mix(in srgb, #E4E5E0 65%, transparent));
  --ribbon-background: #030308;
  --ribbon-background-collapsed: #030308;
  --search-clear-button-color: #83888C;
  --search-icon-color: #83888C;
  --search-result-background: #030308;
  --setting-group-heading-color: #83888C;
  --setting-items-background: black;
  --setting-items-border-color: #232221;
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
  --slider-thumb-border-color: #232221;
  --slider-track-background: #232221;
  --status-bar-background: #030308;
  --status-bar-border-color: #232221;
  --status-bar-text-color: #83888C;
  --suggestion-background: #030308;
  --tab-background-active: #030308;
  --tab-container-background: #030308;
  --tab-divider-color: #232221;
  --tab-outline-color: #232221;
  --tab-switcher-background: #030308;
  --tab-switcher-menubar-background: linear-gradient(to top, #030308, transparent);
  --tab-text-color: #83888C;
  --tab-text-color-active: #83888C;
  --tab-text-color-focused: #83888C;
  --tab-text-color-focused-active: #83888C;
  --tab-text-color-focused-active-current: #83888C;
  --tab-text-color-focused-highlighted: #FF4949;
  --table-add-button-border-color: #232221;
  --table-border-color: #232221;
  --table-drag-handle-background-active: #D92926;
  --table-drag-handle-color: #83888C;
  --table-drag-handle-color-active: #232221;
  --table-header-border-color: #232221;
  --table-header-color: #83888C;
  --table-selection-border-color: #D92926;
  --tag-background: hsla(#D92926, 0.1);
  --tag-background-hover: hsla(#D92926, 0.2);
  --tag-border-color: hsla(#D92926, 0.15);
  --tag-border-color-hover: hsla(#D92926, 0.15);
  --tag-color: #FF4949;
  --tag-color-hover: #FF4949;
  --text-accent: #FF4949;
  --text-accent-hover: #FFD059;
  --text-error: #D8B131;
  --text-faint: #83888C;
  --text-muted: #83888C;
  --text-normal: #83888C;
  --text-on-accent: #232221;
  --text-selection: #83888C;
  --text-success: #D92926;
  --titlebar-background: #030308;
  --titlebar-background-focused: #030308;
  --titlebar-border-color: #232221;
  --titlebar-text-color: #83888C;
  --titlebar-text-color-focused: #83888C;
  --vault-profile-color: #83888C;
  --vault-profile-color-hover: #83888C;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(35, 34, 33);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(3, 3, 8);
  border-left-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
}

body div#quartz-root {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}`,
    typography: `body .page article p > b, b {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration: rgb(217, 41, 38);
  text-decoration-color: rgb(217, 41, 38);
}

body .page article p > em, em {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration: rgb(217, 41, 38);
  text-decoration-color: rgb(217, 41, 38);
}

body .page article p > i, i {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration: rgb(217, 41, 38);
  text-decoration-color: rgb(217, 41, 38);
}

body .page article p > strong, strong {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration: rgb(217, 41, 38);
  text-decoration-color: rgb(217, 41, 38);
}

body .text-highlight {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body del {
  color: rgb(228, 229, 224);
  font-family: "Slasher Regular";
  outline: rgb(228, 229, 224) none 0px;
  text-decoration: line-through rgb(228, 229, 224);
  text-decoration-color: rgb(228, 229, 224);
}

body p {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}`,
    links: `body a.external, footer a {
  color: rgb(216, 177, 49);
  font-family: "Slasher Regular";
  outline: rgb(216, 177, 49) none 0px;
  text-decoration: underline rgb(216, 177, 49);
  text-decoration-color: rgb(216, 177, 49);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(216, 177, 49);
  font-family: "Slasher Regular";
  outline: rgb(216, 177, 49) none 0px;
  text-decoration: underline rgb(216, 177, 49);
  text-decoration-color: rgb(216, 177, 49);
}

body a.internal.broken {
  color: rgb(255, 0, 0);
  font-family: "Slasher Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `body dd {
  color: rgb(131, 136, 140);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(131, 136, 140);
}

body ol > li {
  color: rgb(228, 229, 224);
}

body ol.overflow {
  background-color: rgb(3, 3, 8);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body ul > li {
  color: rgb(228, 229, 224);
}

body ul.overflow {
  background-color: rgb(3, 3, 8);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
}

body blockquote {
  font-family: "Slasher Regular";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body table {
  background-color: rgb(3, 3, 8);
  color: rgb(228, 229, 224);
  font-family: "Slasher Regular";
  width: 196.234px;
}

body tbody {
  background-color: rgb(3, 3, 8);
}

body td {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(228, 229, 224);
}

body th {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(217, 41, 38);
}

body thead {
  background-color: rgb(35, 34, 33);
}`,
    code: `body code {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(217, 41, 38);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
}

body pre:has(> code) {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
}`,
    images: `body audio {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body figcaption {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body figure {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body img {
  border-bottom-color: rgb(228, 229, 224);
  border-left-color: rgb(228, 229, 224);
  border-right-color: rgb(228, 229, 224);
  border-top-color: rgb(228, 229, 224);
}

body video {
  border-bottom-color: rgb(228, 229, 224);
  border-left-color: rgb(228, 229, 224);
  border-right-color: rgb(228, 229, 224);
  border-top-color: rgb(228, 229, 224);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body .footnotes {
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

body .transclude {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(217, 41, 38);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body .transclude-inner {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(217, 41, 38);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Slasher Regular";
}

body .katex-display > .katex > .katex-html {
  font-family: "Slasher Regular";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(131, 136, 140);
  text-decoration: line-through rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body input[type=checkbox] {
  border-bottom-color: rgb(217, 41, 38);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-bottom-width: 2px;
  border-left-color: rgb(217, 41, 38);
  border-left-width: 2px;
  border-right-color: rgb(217, 41, 38);
  border-right-width: 2px;
  border-top-color: rgb(217, 41, 38);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  border-top-width: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='*'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='-'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='/'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='>'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='?'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='I'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='S'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='b'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='c'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='d'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='f'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='i'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='k'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='l'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='p'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='u'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body li.task-list-item[data-task='w'] {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="bug"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="danger"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="example"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="failure"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="info"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="note"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="question"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="quote"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="success"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="tip"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="todo"] {
  background-color: rgb(35, 34, 33);
}

body .callout[data-callout="warning"] {
  background-color: rgb(35, 34, 33);
}`,
    search: `body .search > .search-button {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body .search > .search-container > .search-space {
  background-color: rgb(3, 3, 8);
}

body .search > .search-container > .search-space > * {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(131, 136, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(131, 136, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(216, 177, 49);
  color: rgb(131, 136, 140);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(3, 3, 8);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(216, 177, 49);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(216, 177, 49);
  color: rgb(131, 136, 140);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 73, 73);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-left-color: rgb(255, 73, 73);
  border-right-color: rgb(255, 73, 73);
  border-top-color: rgb(255, 73, 73);
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
  font-family: "Slasher Regular";
}

body a.internal.tag-link::before {
  color: rgb(255, 73, 73);
}

body h1 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

body h2 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

body h2.page-title, h2.page-title a {
  color: rgb(217, 41, 38);
  font-family: "Slasher Title";
}

body h3 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

body h4 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

body h5 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

body h6 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

body hr {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

body ::-webkit-scrollbar-corner {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

body ::-webkit-scrollbar-track {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  font-weight: 700;
  text-decoration: rgb(217, 41, 38);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  font-weight: 700;
  text-decoration: rgb(217, 41, 38);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  text-decoration: rgb(131, 136, 140);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(216, 177, 49);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(35, 34, 33);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}`,
    footer: `body footer {
  background-color: rgb(3, 3, 8);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body footer ul li a {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(228, 229, 224);
  font-family: "Slasher Regular";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body li.section-li > .section .meta {
  color: rgb(228, 229, 224);
  font-family: "Slasher Regular";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(131, 136, 140);
  text-decoration: rgb(131, 136, 140);
}

body ul.section-ul {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

body .darkmode svg {
  color: rgb(131, 136, 140);
  stroke: rgb(131, 136, 140);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

body .breadcrumb-element p {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

body .metadata {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body .metadata-properties {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body .navigation-progress {
  background-color: rgb(3, 3, 8);
}

body .page-header h2.page-title {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body abbr {
  color: rgb(228, 229, 224);
  text-decoration: underline dotted rgb(228, 229, 224);
}

body details {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

body input[type=text] {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(228, 229, 224);
  border-left-color: rgb(228, 229, 224);
  border-right-color: rgb(228, 229, 224);
  border-top-color: rgb(228, 229, 224);
}

body sub {
  color: rgb(228, 229, 224);
  font-size: 12.5px;
}

body summary {
  color: rgb(131, 136, 140);
}

body sup {
  color: rgb(228, 229, 224);
  font-size: 12.5px;
}`,
  },
  light: {},
};
