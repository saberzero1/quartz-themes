import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "allium",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --AccentA1: #a32d7f;
  --AccentA2: #D560B1;
  --Axt: #A32D7F36;
  --Axt2: #50125A94;
  --Bgcl: #A32D7F52;
  --Bgnd: #2C1C27;
  --EBgnd: #211F23;
  --background-modifier-accent: #D560B1;
  --background-modifier-active-hover: #A32D7F52;
  --background-modifier-border: #A32D7F36;
  --background-modifier-border-focus: #a32d7f;
  --background-modifier-border-hover: #50125A94;
  --background-modifier-form-field: #211F23;
  --background-modifier-form-field-highlighted: #211F23;
  --background-modifier-form-field-hover: #211F23;
  --background-modifier-hover: #A32D7F52;
  --background-primary: #211F23;
  --background-primary-alt: #211F23;
  --background-secondary: #2C1C27;
  --background-secondary-alt: #A32D7F36;
  --background-table-rows: #2C1C27;
  --bases-cards-background: #211F23;
  --bases-cards-cover-background: #211F23;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #A32D7F36;
  --bases-cards-shadow-hover: 0 0 0 1px #50125A94;
  --bases-embed-border-color: #A32D7F36;
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: #e499e4a2;
  --bases-table-border-color: #A32D7F36;
  --bases-table-cell-background-active: #211F23;
  --bases-table-cell-background-disabled: #211F23;
  --bases-table-cell-shadow-active: 0 0 0 2px #a32d7f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a32d7f;
  --bases-table-container-border-radius: 5px;
  --bases-table-group-background: #211F23;
  --bases-table-header-background: #211F23;
  --bases-table-header-background-hover: #A32D7F52;
  --bases-table-header-color: #e499e4a2;
  --bases-table-summary-background: #211F23;
  --bases-table-summary-background-hover: #A32D7F52;
  --blockquote-border-color: #a32d7f;
  --blur-background: color-mix(in srgb, #A32D7F36 65%, transparent) linear-gradient(#A32D7F36, color-mix(in srgb, #A32D7F36 65%, transparent));
  --bold-color: #9c4296;
  --callout-radius: 5px;
  --canvas-background: #211F23;
  --canvas-card-label-color: #e499e4a2;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #A32D7F36;
  --caret-color: #d8bcd8;
  --chbx-B: 216, 188, 216;
  --chbx-C: 241, 99, 125;
  --chbx-I: 243, 150, 122;
  --chbx-N: 216, 188, 216;
  --chbx-P: 200, 216, 155;
  --chbx-R: 200, 216, 155;
  --chbx-a: 241, 99, 125;
  --chbx-b: 243, 150, 122;
  --chbx-c: 163, 45, 127;
  --chbx-d: 163, 45, 127;
  --chbx-h: 216, 188, 216;
  --chbx-i: 241, 99, 125;
  --chbx-id: 243, 150, 122;
  --chbx-q: 243, 150, 122;
  --chbx-r: 243, 150, 122;
  --checkbox-border-color: #e499e4a2;
  --checkbox-border-color-hover: #e499e4a2;
  --checkbox-color: #a32d7f;
  --checkbox-color-hover: #D560B1;
  --checkbox-marker-color: #211F23;
  --checkbox-radius: 2px;
  --checklist-done-color: #e499e4a2;
  --clickable-icon-radius: 5px;
  --code-background: #211F23;
  --code-border-color: #A32D7F36;
  --code-bracket-background: #A32D7F52;
  --code-comment: #e499e4a2;
  --code-normal: #e499e4a2;
  --code-punctuation: #e499e4a2;
  --code-radius: 5px;
  --collapse-icon-color: #e499e4a2;
  --collapse-icon-color-collapsed: #D560B1;
  --color-base-00: #211F23;
  --color-base-05: #211F23;
  --color-base-10: #211F23;
  --color-base-100: #d8bcd8;
  --color-base-20: #2C1C27;
  --color-base-25: #252429;
  --color-base-30: #A32D7F36;
  --color-base-35: #a540a55f;
  --color-base-40: #A32D7F36;
  --color-base-50: #e499e4a2;
  --color-base-60: #d8bcd8;
  --color-base-70: #d8bcd8;
  --color-scheme: dark;
  --divider-color: #A32D7F36;
  --divider-color-hover: #a32d7f;
  --dropdown-background: #2C1C27;
  --dropdown-background-hover: #2C1C27;
  --dropdown-background-normal: #2C1C27;
  --embed-block-shadow-hover: 0 0 0 1px #A32D7F36, inset 0 0 0 1px #A32D7F36;
  --embed-border-start: 2px solid #a32d7f;
  --file-header-background: #211F23;
  --file-header-background-focused: #211F23;
  --flair-background: #A32D7F36;
  --flair-color: #d8bcd8;
  --footnote-divider-color: #A32D7F36;
  --footnote-id-color: #e499e4a2;
  --footnote-id-color-no-occurrences: #e499e4a2;
  --footnote-input-background-active: #A32D7F52;
  --footnote-radius: 5px;
  --frame-divider-color: #A32D7F36;
  --graph-line: #a540a55f;
  --graph-node: #d8bcd8;
  --graph-node-attachment: #d6d89b;
  --graph-node-focused: #D560B1;
  --graph-node-tag: #C8D89BDB;
  --graph-node-unresolved: #e499e4a2;
  --graph-text: #d8bcd8;
  --h1-color: #d8bcd8;
  --h2-color: #c4a5c4;
  --h3-color: #ac81ac;
  --h4-color: #946a94;
  --h5-color: #835783;
  --h6-color: #805380;
  --heading-formatting: #e499e4a2;
  --hr-color: #A32D7F36;
  --icon-color: #d8bcd8;
  --icon-color-active: #d8bcd8;
  --icon-color-focused: #d8bcd8;
  --icon-color-hover: #e499e4a2;
  --inline-title-color: #d8bcd8;
  --input-date-separator: #e499e4a2;
  --input-placeholder-color: #e499e4a2;
  --interactive-accent: #a32d7f;
  --interactive-accent-hover: #D560B1;
  --interactive-hover: #A32D7F36;
  --interactive-normal: #A32D7F36;
  --italic-color: #f3967a;
  --its: "its";
  --link-color: #D560B1;
  --link-color-hover: #D560B1;
  --link-external-color: #D560B1;
  --link-external-color-hover: #D560B1;
  --link-unresolved-color: #D560B1;
  --list-marker-color: #e499e4a2;
  --list-marker-color-collapsed: #D560B1;
  --list-marker-color-hover: #e499e4a2;
  --menu-background: #2C1C27;
  --menu-border-color: #50125A94;
  --menu-radius: 5px;
  --metadata-border-color: #A32D7F36;
  --metadata-divider-color: #A32D7F36;
  --metadata-input-background-active: #A32D7F52;
  --metadata-input-text-color: #d8bcd8;
  --metadata-label-background-active: #A32D7F52;
  --metadata-label-text-color: #e499e4a2;
  --metadata-label-text-color-hover: #e499e4a2;
  --metadata-property-background-active: #A32D7F52;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a32d7f;
  --metadata-property-box-shadow-hover: 0 0 0 1px #50125A94;
  --modal-background: #211F23;
  --modal-border-color: #A32D7F36;
  --modal-radius: 5px;
  --nav-collapse-icon-color: #e499e4a2;
  --nav-collapse-icon-color-collapsed: #e499e4a2;
  --nav-heading-color: #d8bcd8;
  --nav-heading-color-collapsed: #e499e4a2;
  --nav-heading-color-collapsed-hover: #e499e4a2;
  --nav-heading-color-hover: #d8bcd8;
  --nav-indentation-guide-color: #A32D7F36;
  --nav-item-background-active: #A32D7F52;
  --nav-item-background-hover: #A32D7F52;
  --nav-item-background-selected: #A32D7F36;
  --nav-item-color: #d8bcd8;
  --nav-item-color-active: #d8bcd8;
  --nav-item-color-highlighted: #D560B1;
  --nav-item-color-hover: #d8bcd8;
  --nav-item-color-selected: #d8bcd8;
  --nav-item-radius: 5px;
  --nav-tag-color: #e499e4a2;
  --nav-tag-color-active: #e499e4a2;
  --nav-tag-color-hover: #e499e4a2;
  --nav-tag-radius: 5px;
  --pdf-background: #211F23;
  --pdf-page-background: #211F23;
  --pdf-shadow: 0 0 0 1px #A32D7F36;
  --pdf-sidebar-background: #211F23;
  --pdf-thumbnail-shadow: 0 0 0 1px #A32D7F36;
  --pill-border-color: #A32D7F36;
  --pill-border-color-hover: #50125A94;
  --pill-color: #e499e4a2;
  --pill-color-hover: #d8bcd8;
  --pill-color-remove: #e499e4a2;
  --pill-color-remove-hover: #D560B1;
  --prompt-background: #211F23;
  --prompt-border-color: #a32d7f;
  --quote-opening-modifier: #50125A94;
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --raised-background: color-mix(in srgb, #A32D7F36 65%, transparent) linear-gradient(#A32D7F36, color-mix(in srgb, #A32D7F36 65%, transparent));
  --ribbon-background: #2C1C27;
  --ribbon-background-collapsed: #211F23;
  --scrollbar-active-thumb-bg: #a32d7f;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 5px;
  --scrollbar-thumb-bg: #A32D7F36;
  --search-clear-button-color: #e499e4a2;
  --search-icon-color: #e499e4a2;
  --search-result-background: #211F23;
  --setting-group-heading-color: #d8bcd8;
  --setting-items-background: #211F23;
  --setting-items-border-color: #A32D7F36;
  --setting-items-radius: 5px;
  --slider-thumb-border-color: #50125A94;
  --slider-thumb-radius: 2px;
  --slider-track-background: #A32D7F36;
  --status-bar-background: #2C1C27;
  --status-bar-border-color: #A32D7F36;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: #e499e4a2;
  --suggestion-background: #211F23;
  --tab-background-active: #211F23;
  --tab-container-background: #2C1C27;
  --tab-divider-color: #50125A94;
  --tab-outline-color: #A32D7F36;
  --tab-radius: 5px;
  --tab-radius-active: 1px;
  --tab-switcher-background: #2C1C27;
  --tab-switcher-menubar-background: linear-gradient(to top, #2C1C27, transparent);
  --tab-text-color: #e499e4a2;
  --tab-text-color-active: #e499e4a2;
  --tab-text-color-focused: #e499e4a2;
  --tab-text-color-focused-active: #d8bcd8;
  --tab-text-color-focused-active-current: #d8bcd8;
  --tab-text-color-focused-highlighted: #D560B1;
  --table-add-button-border-color: #A32D7F36;
  --table-border-color: #A32D7F36;
  --table-drag-handle-background-active: #a32d7f;
  --table-drag-handle-color: #e499e4a2;
  --table-header-border-color: #A32D7F36;
  --table-header-color: #d8bcd8;
  --table-selection-border-color: #a32d7f;
  --tag-color: #D560B1;
  --tag-color-hover: #D560B1;
  --text-accent: #D560B1;
  --text-accent-hover: #D560B1;
  --text-blockquote: #e499e4a2;
  --text-bold: #d8bcd8;
  --text-code: #e499e4a2;
  --text-error: #f1637d;
  --text-faint: #e499e4a2;
  --text-formatting: #9c4296;
  --text-highlight-bg: #A32D7F52;
  --text-italic: #d8bcd8;
  --text-muted: #e499e4a2;
  --text-normal: #d8bcd8;
  --text-selection: #e499e4a2;
  --titlebar-background: #2C1C27;
  --titlebar-background-focused: #2C1C27;
  --titlebar-border-color: #2C1C27;
  --titlebar-text-color: #d8bcd8;
  --titlebar-text-color-focused: #d8bcd8;
  --toggle-radius: 2px;
  --toggle-thumb-radius: 2px;
  --txi: #e499e4a2;
  --txt: #d8bcd8;
  --vault-profile-color: #d8bcd8;
  --vault-profile-color-hover: #d8bcd8;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 28, 39);
  color: rgb(216, 188, 216);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 31, 35);
  color: rgb(216, 188, 216);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(44, 28, 39);
  color: rgb(216, 188, 216);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(163, 45, 127, 0.21);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 28, 39);
  border-left-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}

body div#quartz-root {
  background-color: rgb(33, 31, 35);
  color: rgb(216, 188, 216);
}`,
    typography: `body .page article p > b, b {
  color: rgb(156, 66, 150);
  outline: rgb(156, 66, 150) none 0px;
  text-decoration: rgb(156, 66, 150);
  text-decoration-color: rgb(156, 66, 150);
}

body .page article p > em, em {
  color: rgb(243, 150, 122);
  outline: rgb(243, 150, 122) none 0px;
  text-decoration: rgb(243, 150, 122);
  text-decoration-color: rgb(243, 150, 122);
}

body .page article p > i, i {
  color: rgb(243, 150, 122);
  outline: rgb(243, 150, 122) none 0px;
  text-decoration: rgb(243, 150, 122);
  text-decoration-color: rgb(243, 150, 122);
}

body .page article p > strong, strong {
  color: rgb(156, 66, 150);
  outline: rgb(156, 66, 150) none 0px;
  text-decoration: rgb(156, 66, 150);
  text-decoration-color: rgb(156, 66, 150);
}

body .text-highlight {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body del {
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration: line-through rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body p {
  color: rgba(228, 153, 228, 0.635);
  outline: rgba(228, 153, 228, 0.635) none 0px;
  text-decoration: rgba(228, 153, 228, 0.635);
  text-decoration-color: rgba(228, 153, 228, 0.635);
}`,
    links: `body a.external, footer a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration: underline rgb(213, 96, 177);
  text-decoration-color: rgb(213, 96, 177);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration: underline rgb(213, 96, 177);
  text-decoration-color: rgb(213, 96, 177);
}

body a.internal.broken {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
}`,
    lists: `body dd {
  color: rgb(216, 188, 216);
}

body dt {
  color: rgb(216, 188, 216);
}

body ol > li {
  color: rgb(216, 188, 216);
}

body ol.overflow {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body ul > li {
  color: rgb(216, 188, 216);
}

body ul.overflow {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(228, 153, 228, 0.635);
  text-decoration: rgba(228, 153, 228, 0.635);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body table {
  color: rgb(216, 188, 216);
}

body td {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}

body th {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}`,
    code: `body code {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `body audio {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body figcaption {
  color: rgb(216, 188, 216);
}

body figure {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body img {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body video {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    embeds: `body .file-embed {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

body .transclude {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body .transclude-inner {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(228, 153, 228, 0.635);
  text-decoration: line-through rgba(228, 153, 228, 0.635);
  text-decoration-color: rgba(228, 153, 228, 0.635);
}

body input[type=checkbox] {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='*'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='-'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='/'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='>'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='?'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='I'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='S'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='b'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='c'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='d'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='f'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='i'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='k'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='l'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='p'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='u'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body li.task-list-item[data-task='w'] {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > * {
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 188, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(216, 188, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(216, 188, 216);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(44, 28, 39);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

body a.internal.tag-link::before {
  color: rgb(213, 96, 177);
}

body h1 {
  color: rgb(216, 188, 216);
}

body h2 {
  color: rgb(196, 165, 196);
}

body h2.page-title, h2.page-title a {
  color: rgb(216, 188, 216);
}

body h3 {
  color: rgb(172, 129, 172);
}

body h4 {
  color: rgb(148, 106, 148);
}

body h5 {
  color: rgb(131, 87, 131);
}

body h6 {
  color: rgb(128, 83, 128);
}

body hr {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body ::-webkit-scrollbar {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 31, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 31, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}`,
    footer: `body footer {
  background-color: rgb(44, 28, 39);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

body footer ul li a {
  color: rgba(228, 153, 228, 0.635);
  text-decoration: rgba(228, 153, 228, 0.635);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(216, 188, 216);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 188, 216);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body li.section-li > .section .meta {
  color: rgb(216, 188, 216);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(216, 188, 216);
  text-decoration: rgb(216, 188, 216);
}

body ul.section-ul {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

body .darkmode svg {
  color: rgb(216, 188, 216);
  stroke: rgb(216, 188, 216);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

body .breadcrumb-element p {
  color: rgba(228, 153, 228, 0.635);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

body .metadata {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgba(228, 153, 228, 0.635);
}

body .metadata-properties {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  color: rgba(228, 153, 228, 0.635);
}

body .navigation-progress {
  background-color: rgb(44, 28, 39);
}

body .page-header h2.page-title {
  color: rgb(216, 188, 216);
}

body abbr {
  color: rgb(216, 188, 216);
  text-decoration: underline dotted rgb(216, 188, 216);
}

body details {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body input[type=text] {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  color: rgba(228, 153, 228, 0.635);
}

body kbd {
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

body progress {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

body sub {
  color: rgb(216, 188, 216);
}

body summary {
  color: rgb(216, 188, 216);
}

body sup {
  color: rgb(216, 188, 216);
}`,
  },
  light: {
    base: `:root:root {
  --AccentA1: #a32d7f;
  --AccentA2: #D560B1;
  --Axt: #A32D7F36;
  --Axt2: #d5acdc94;
  --Bgcl: #A32D7F52;
  --Bgnd: rgb(241, 228, 241);
  --EBgnd: rgb(242, 250, 235);
  --background-modifier-accent: #D560B1;
  --background-modifier-active-hover: #A32D7F52;
  --background-modifier-border: #A32D7F36;
  --background-modifier-border-focus: #a32d7f;
  --background-modifier-border-hover: #d5acdc94;
  --background-modifier-form-field: rgb(242, 250, 235);
  --background-modifier-form-field-highlighted: rgb(242, 250, 235);
  --background-modifier-form-field-hover: rgb(242, 250, 235);
  --background-modifier-hover: #A32D7F52;
  --background-primary: rgb(242, 250, 235);
  --background-primary-alt: rgb(242, 250, 235);
  --background-secondary: rgb(241, 228, 241);
  --background-secondary-alt: rgb(242, 250, 235);
  --background-table-rows: rgb(241, 228, 241);
  --bases-cards-background: rgb(242, 250, 235);
  --bases-cards-cover-background: rgb(242, 250, 235);
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #A32D7F36;
  --bases-cards-shadow-hover: 0 0 0 1px #d5acdc94;
  --bases-embed-border-color: #A32D7F36;
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: #412438cd;
  --bases-table-border-color: #A32D7F36;
  --bases-table-cell-background-active: rgb(242, 250, 235);
  --bases-table-cell-background-disabled: rgb(242, 250, 235);
  --bases-table-cell-shadow-active: 0 0 0 2px #a32d7f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a32d7f;
  --bases-table-container-border-radius: 5px;
  --bases-table-group-background: rgb(242, 250, 235);
  --bases-table-header-background: rgb(242, 250, 235);
  --bases-table-header-background-hover: #A32D7F52;
  --bases-table-header-color: #412438cd;
  --bases-table-summary-background: rgb(242, 250, 235);
  --bases-table-summary-background-hover: #A32D7F52;
  --blockquote-border-color: #a32d7f;
  --blur-background: color-mix(in srgb, rgb(242, 250, 235) 65%, transparent) linear-gradient(rgb(242, 250, 235), color-mix(in srgb, rgb(242, 250, 235) 65%, transparent));
  --bold-color: #24262a;
  --callout-radius: 5px;
  --canvas-background: rgb(242, 250, 235);
  --canvas-card-label-color: #412438cd;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #A32D7F36;
  --caret-color: #30222b;
  --chbx-B: 216, 188, 216;
  --chbx-C: 241, 99, 125;
  --chbx-I: 243, 150, 122;
  --chbx-N: 216, 188, 216;
  --chbx-P: 200, 216, 155;
  --chbx-R: 200, 216, 155;
  --chbx-a: 241, 99, 125;
  --chbx-b: 243, 150, 122;
  --chbx-c: 163, 45, 127;
  --chbx-d: 163, 45, 127;
  --chbx-h: 216, 188, 216;
  --chbx-i: 241, 99, 125;
  --chbx-id: 243, 150, 122;
  --chbx-q: 243, 150, 122;
  --chbx-r: 243, 150, 122;
  --checkbox-border-color: #412438cd;
  --checkbox-border-color-hover: #412438cd;
  --checkbox-color: #a32d7f;
  --checkbox-color-hover: #D560B1;
  --checkbox-marker-color: rgb(242, 250, 235);
  --checkbox-radius: 2px;
  --checklist-done-color: #412438cd;
  --clickable-icon-radius: 5px;
  --code-background: rgb(242, 250, 235);
  --code-border-color: #A32D7F36;
  --code-bracket-background: #A32D7F52;
  --code-comment: #412438cd;
  --code-normal: #412438cd;
  --code-punctuation: #412438cd;
  --code-radius: 5px;
  --collapse-icon-color: #412438cd;
  --collapse-icon-color-collapsed: #D560B1;
  --color-base-00: rgb(242, 250, 235);
  --color-base-05: rgb(242, 250, 235);
  --color-base-10: rgb(242, 250, 235);
  --color-base-100: #412438;
  --color-base-20: rgb(241, 228, 241);
  --color-base-25: #412438;
  --color-base-30: #A32D7F36;
  --color-base-35: #c8a2c85f;
  --color-base-40: #A32D7F36;
  --color-base-50: #412438cd;
  --color-base-60: #412438;
  --color-base-70: #412438;
  --color-scheme: light;
  --divider-color: #A32D7F36;
  --divider-color-hover: #a32d7f;
  --dropdown-background: rgb(241, 228, 241);
  --dropdown-background-hover: rgb(241, 228, 241);
  --dropdown-background-normal: rgb(241, 228, 241);
  --embed-block-shadow-hover: 0 0 0 1px #A32D7F36, inset 0 0 0 1px #A32D7F36;
  --embed-border-start: 2px solid #a32d7f;
  --file-header-background: rgb(242, 250, 235);
  --file-header-background-focused: rgb(242, 250, 235);
  --flair-background: rgb(242, 250, 235);
  --flair-color: #30222b;
  --footnote-divider-color: #A32D7F36;
  --footnote-id-color: #412438cd;
  --footnote-id-color-no-occurrences: #412438cd;
  --footnote-input-background-active: #A32D7F52;
  --footnote-radius: 5px;
  --frame-divider-color: #A32D7F36;
  --graph-line: #c8a2c85f;
  --graph-node: #C8A2C8;
  --graph-node-attachment: #412438;
  --graph-node-focused: #D560B1;
  --graph-node-tag: #C8D89BDB;
  --graph-node-unresolved: #412438cd;
  --graph-text: #30222b;
  --heading-formatting: #412438cd;
  --hr-color: #A32D7F36;
  --icon-color: #24262a;
  --icon-color-active: #30222b;
  --icon-color-focused: #30222b;
  --icon-color-hover: #412438cd;
  --input-date-separator: #412438cd;
  --input-placeholder-color: #412438cd;
  --interactive-accent: #a32d7f;
  --interactive-accent-hover: #D560B1;
  --interactive-hover: #A32D7F36;
  --interactive-normal: rgb(242, 250, 235);
  --italic-color: #FCA287;
  --its: "its";
  --link-color: #D560B1;
  --link-color-hover: #D560B1;
  --link-external-color: #D560B1;
  --link-external-color-hover: #D560B1;
  --link-unresolved-color: #D560B1;
  --list-marker-color: #412438cd;
  --list-marker-color-collapsed: #D560B1;
  --list-marker-color-hover: #412438cd;
  --menu-background: rgb(241, 228, 241);
  --menu-border-color: #d5acdc94;
  --menu-radius: 5px;
  --metadata-border-color: #A32D7F36;
  --metadata-divider-color: #A32D7F36;
  --metadata-input-background-active: #A32D7F52;
  --metadata-input-text-color: #30222b;
  --metadata-label-background-active: #A32D7F52;
  --metadata-label-text-color: #412438cd;
  --metadata-label-text-color-hover: #412438cd;
  --metadata-property-background-active: #A32D7F52;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a32d7f;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d5acdc94;
  --modal-background: rgb(242, 250, 235);
  --modal-border-color: #A32D7F36;
  --modal-radius: 5px;
  --nav-collapse-icon-color: #412438cd;
  --nav-collapse-icon-color-collapsed: #412438cd;
  --nav-heading-color: #30222b;
  --nav-heading-color-collapsed: #412438cd;
  --nav-heading-color-collapsed-hover: #412438cd;
  --nav-heading-color-hover: #30222b;
  --nav-indentation-guide-color: #A32D7F36;
  --nav-item-background-active: #A32D7F52;
  --nav-item-background-hover: #A32D7F52;
  --nav-item-background-selected: #A32D7F36;
  --nav-item-color: #30222b;
  --nav-item-color-active: #30222b;
  --nav-item-color-highlighted: #D560B1;
  --nav-item-color-hover: #30222b;
  --nav-item-color-selected: #30222b;
  --nav-item-radius: 5px;
  --nav-tag-color: #412438cd;
  --nav-tag-color-active: #412438cd;
  --nav-tag-color-hover: #412438cd;
  --nav-tag-radius: 5px;
  --pdf-background: rgb(242, 250, 235);
  --pdf-page-background: rgb(242, 250, 235);
  --pdf-sidebar-background: rgb(242, 250, 235);
  --pill-border-color: #A32D7F36;
  --pill-border-color-hover: #d5acdc94;
  --pill-color: #412438cd;
  --pill-color-hover: #30222b;
  --pill-color-remove: #412438cd;
  --pill-color-remove-hover: #D560B1;
  --prompt-background: rgb(242, 250, 235);
  --prompt-border-color: #a32d7f;
  --quote-opening-modifier: #d5acdc94;
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --raised-background: color-mix(in srgb, rgb(242, 250, 235) 65%, transparent) linear-gradient(rgb(242, 250, 235), color-mix(in srgb, rgb(242, 250, 235) 65%, transparent));
  --ribbon-background: rgb(241, 228, 241);
  --ribbon-background-collapsed: rgb(242, 250, 235);
  --scrollbar-active-thumb-bg: #a32d7f;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 5px;
  --scrollbar-thumb-bg: #A32D7F36;
  --search-clear-button-color: #412438cd;
  --search-icon-color: #412438cd;
  --search-result-background: rgb(242, 250, 235);
  --setting-group-heading-color: #30222b;
  --setting-items-background: rgb(242, 250, 235);
  --setting-items-border-color: #A32D7F36;
  --setting-items-radius: 5px;
  --slider-thumb-border-color: #d5acdc94;
  --slider-thumb-radius: 2px;
  --slider-track-background: #A32D7F36;
  --status-bar-background: rgb(241, 228, 241);
  --status-bar-border-color: #A32D7F36;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: #412438cd;
  --suggestion-background: rgb(242, 250, 235);
  --tab-background-active: rgb(242, 250, 235);
  --tab-container-background: rgb(241, 228, 241);
  --tab-divider-color: #d5acdc94;
  --tab-outline-color: #A32D7F36;
  --tab-radius: 5px;
  --tab-radius-active: 1px;
  --tab-switcher-background: rgb(241, 228, 241);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(241, 228, 241), transparent);
  --tab-text-color: #412438cd;
  --tab-text-color-active: #412438cd;
  --tab-text-color-focused: #412438cd;
  --tab-text-color-focused-active: #30222b;
  --tab-text-color-focused-active-current: #30222b;
  --tab-text-color-focused-highlighted: #D560B1;
  --table-add-button-border-color: #A32D7F36;
  --table-border-color: #A32D7F36;
  --table-drag-handle-background-active: #a32d7f;
  --table-drag-handle-color: #412438cd;
  --table-header-border-color: #A32D7F36;
  --table-header-color: #30222b;
  --table-selection-border-color: #a32d7f;
  --tag-color: #D560B1;
  --tag-color-hover: #D560B1;
  --text-accent: #D560B1;
  --text-accent-hover: #D560B1;
  --text-blockquote: #412438cd;
  --text-bold: #30222b;
  --text-code: #412438cd;
  --text-error: #f1637d;
  --text-faint: #412438cd;
  --text-formatting: #635e6a;
  --text-highlight-bg: #A32D7F52;
  --text-italic: #30222b;
  --text-muted: #412438cd;
  --text-normal: #30222b;
  --text-selection: #a32d8053;
  --titlebar-background: rgb(241, 228, 241);
  --titlebar-background-focused: rgb(241, 228, 241);
  --titlebar-border-color: rgb(241, 228, 241);
  --titlebar-text-color: #30222b;
  --titlebar-text-color-focused: #30222b;
  --toggle-radius: 2px;
  --toggle-thumb-radius: 2px;
  --txi: #412438cd;
  --txt: #30222b;
  --vault-profile-color: #30222b;
  --vault-profile-color-hover: #30222b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 228, 241);
  color: rgb(48, 34, 43);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 250, 235);
  color: rgb(48, 34, 43);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(241, 228, 241);
  color: rgb(48, 34, 43);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(163, 45, 127, 0.21);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 228, 241);
  border-left-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}

body div#quartz-root {
  background-color: rgb(242, 250, 235);
  color: rgb(48, 34, 43);
}`,
    typography: `body .page article p > b, b {
  color: rgb(36, 38, 42);
  outline: rgb(36, 38, 42) none 0px;
  text-decoration: rgb(36, 38, 42);
  text-decoration-color: rgb(36, 38, 42);
}

body .page article p > em, em {
  color: rgb(252, 162, 135);
  outline: rgb(252, 162, 135) none 0px;
  text-decoration: rgb(252, 162, 135);
  text-decoration-color: rgb(252, 162, 135);
}

body .page article p > i, i {
  color: rgb(252, 162, 135);
  outline: rgb(252, 162, 135) none 0px;
  text-decoration: rgb(252, 162, 135);
  text-decoration-color: rgb(252, 162, 135);
}

body .page article p > strong, strong {
  color: rgb(36, 38, 42);
  outline: rgb(36, 38, 42) none 0px;
  text-decoration: rgb(36, 38, 42);
  text-decoration-color: rgb(36, 38, 42);
}

body .text-highlight {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body del {
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration: line-through rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body p {
  color: rgba(65, 36, 56, 0.804);
  outline: rgba(65, 36, 56, 0.804) none 0px;
  text-decoration: rgba(65, 36, 56, 0.804);
  text-decoration-color: rgba(65, 36, 56, 0.804);
}`,
    links: `body a.external, footer a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration: underline rgb(213, 96, 177);
  text-decoration-color: rgb(213, 96, 177);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
  text-decoration: underline rgb(213, 96, 177);
  text-decoration-color: rgb(213, 96, 177);
}

body a.internal.broken {
  color: rgb(213, 96, 177);
  outline: rgb(213, 96, 177) none 0px;
}`,
    lists: `body dd {
  color: rgb(48, 34, 43);
}

body dt {
  color: rgb(48, 34, 43);
}

body ol > li {
  color: rgb(48, 34, 43);
}

body ol.overflow {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body ul > li {
  color: rgb(48, 34, 43);
}

body ul.overflow {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(65, 36, 56, 0.804);
  text-decoration: rgba(65, 36, 56, 0.804);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body table {
  color: rgb(48, 34, 43);
}

body td {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}

body th {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}`,
    code: `body code {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

body pre > code, pre:has(> code) {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `body audio {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body figcaption {
  color: rgb(48, 34, 43);
}

body figure {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body img {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body video {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    embeds: `body .file-embed {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

body .transclude {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body .transclude-inner {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(65, 36, 56, 0.804);
  text-decoration: line-through rgba(65, 36, 56, 0.804);
  text-decoration-color: rgba(65, 36, 56, 0.804);
}

body input[type=checkbox] {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='*'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='-'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='/'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='>'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='?'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='I'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='S'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='b'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='c'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='d'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='f'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='i'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='k'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='l'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='p'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='u'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body li.task-list-item[data-task='w'] {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > * {
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 34, 43);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(48, 34, 43);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  color: rgb(48, 34, 43);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 228, 241);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

body a.internal.tag-link::before {
  color: rgb(213, 96, 177);
}

body h1 {
  color: rgb(48, 34, 43);
}

body h2 {
  color: rgb(48, 34, 43);
}

body h2.page-title, h2.page-title a {
  color: rgb(48, 34, 43);
}

body h3 {
  color: rgb(48, 34, 43);
}

body h4 {
  color: rgb(48, 34, 43);
}

body h5 {
  color: rgb(48, 34, 43);
}

body h6 {
  color: rgb(48, 34, 43);
}

body hr {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body ::-webkit-scrollbar {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 250, 235) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 250, 235);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(163, 45, 127, 0.32);
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(36, 38, 42);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 38, 42);
  border-right-color: rgb(36, 38, 42);
  border-top-color: rgb(36, 38, 42);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(36, 38, 42);
}`,
    footer: `body footer {
  background-color: rgb(241, 228, 241);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

body footer ul li a {
  color: rgba(65, 36, 56, 0.804);
  text-decoration: rgba(65, 36, 56, 0.804);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(48, 34, 43);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(48, 34, 43);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body li.section-li > .section .meta {
  color: rgb(48, 34, 43);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(48, 34, 43);
  text-decoration: rgb(48, 34, 43);
}

body ul.section-ul {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(36, 38, 42);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 38, 42);
  border-right-color: rgb(36, 38, 42);
  border-top-color: rgb(36, 38, 42);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(36, 38, 42);
}

body .darkmode svg {
  color: rgb(36, 38, 42);
  stroke: rgb(36, 38, 42);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

body .breadcrumb-element p {
  color: rgba(65, 36, 56, 0.804);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

body .metadata {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: rgba(65, 36, 56, 0.804);
}

body .metadata-properties {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  color: rgba(65, 36, 56, 0.804);
}

body .navigation-progress {
  background-color: rgb(241, 228, 241);
}

body .page-header h2.page-title {
  color: rgb(48, 34, 43);
}

body abbr {
  color: rgb(48, 34, 43);
  text-decoration: underline dotted rgb(48, 34, 43);
}

body details {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body input[type=text] {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  color: rgba(65, 36, 56, 0.804);
}

body kbd {
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

body progress {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

body sub {
  color: rgb(48, 34, 43);
}

body summary {
  color: rgb(48, 34, 43);
}

body sup {
  color: rgb(48, 34, 43);
}`,
  },
};
