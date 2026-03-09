import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dashboard", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-border: #acb7a7;
  --background-modifier-border-focus: #acb7a7;
  --background-modifier-border-hover: #acb7a7;
  --background-modifier-form-field: #FAFAFa;
  --background-modifier-form-field-hover: #FAFAFa;
  --background-primary: #FAFAFa;
  --background-secondary: #fafafa;
  --background-secondary-alt: #acb7a7;
  --bases-cards-background: #FAFAFa;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #acb7a7;
  --bases-cards-shadow-hover: 0 0 0 1px #acb7a7;
  --bases-embed-border-color: #acb7a7;
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: #434B56;
  --bases-table-border-color: #acb7a7;
  --bases-table-cell-background-active: #FAFAFa;
  --bases-table-cell-shadow-active: 0 0 0 2px #acb7a7;
  --bases-table-container-border-radius: 5px;
  --bases-table-header-background: #FAFAFa;
  --bases-table-header-color: #434B56;
  --bases-table-summary-background: #FAFAFa;
  --blur-background: color-mix(in srgb, #FAFAFa 65%, transparent) linear-gradient(#FAFAFa, color-mix(in srgb, #FAFAFa 65%, transparent));
  --button-radius: 0px;
  --callout-radius: 5px;
  --canvas-background: #FAFAFa;
  --canvas-card-label-color: #4E4D49;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #acb7a7;
  --caret-color: #222;
  --checkbox-border-color: #4E4D49;
  --checkbox-border-color-hover: #434B56;
  --checkbox-marker-color: #FAFAFa;
  --checkbox-radius: 5px;
  --checklist-done-color: #434B56;
  --clickable-icon-radius: 5px;
  --code-background: #F5F4F4;
  --code-border-color: #acb7a7;
  --code-comment: #4E4D49;
  --code-normal: #222;
  --code-punctuation: #434B56;
  --code-radius: 5px;
  --collapse-icon-color: #4E4D49;
  --collapse-icon-color-collapsed: #7e9573;
  --color-base-00: #FAFAFa;
  --color-base-05: #acb7a7;
  --color-base-100: #222;
  --color-base-20: #fafafa;
  --color-base-25: #acb7a7;
  --color-base-30: #acb7a7;
  --color-base-35: #acb7a7;
  --color-base-40: #acb7a7;
  --color-base-50: #4E4D49;
  --color-base-60: #acb7a7;
  --color-base-70: #434B56;
  --divider-color: transparent;
  --dropdown-background: #acb7a7;
  --embed-block-shadow-hover: 0 0 0 1px #acb7a7, inset 0 0 0 1px #acb7a7;
  --file-header-background: #FAFAFa;
  --file-header-background-focused: #FAFAFa;
  --flair-background: #acb7a7;
  --flair-color: #222;
  --footnote-divider-color: #acb7a7;
  --footnote-id-color: #434B56;
  --footnote-id-color-no-occurrences: #4E4D49;
  --footnote-radius: 5px;
  --graph-line: #acb7a7;
  --graph-node: #434B56;
  --graph-node-focused: #7e9573;
  --graph-node-unresolved: #4E4D49;
  --graph-text: #222;
  --heading-formatting: #4E4D49;
  --hr-color: #eaeaea;
  --hr-thickness: 3px;
  --icon-color: #222222;
  --icon-color-active: #7e9573;
  --icon-color-focused: #949494;
  --icon-color-hover: #96a869;
  --inline-title-color: #97a392;
  --inline-title-size: 2.5em;
  --inline-title-weight: 200;
  --input-date-separator: #4E4D49;
  --input-placeholder-color: #4E4D49;
  --input-radius: 0px;
  --interactive-normal: #acb7a7;
  --link-color: #7e9573;
  --link-color-hover: #c7c7c7;
  --link-external-color: #7e9573;
  --link-external-color-hover: #c7c7c7;
  --link-unresolved-color: #7e9573;
  --list-marker-color: #4E4D49;
  --list-marker-color-collapsed: #7e9573;
  --list-marker-color-hover: #434B56;
  --menu-background: #fafafa;
  --menu-border-color: #acb7a7;
  --menu-radius: 5px;
  --metadata-border-color: #acb7a7;
  --metadata-divider-color: #acb7a7;
  --metadata-input-text-color: #222;
  --metadata-label-text-color: #434B56;
  --metadata-label-text-color-hover: #434B56;
  --metadata-property-box-shadow-focus: 0 0 0 2px #acb7a7;
  --metadata-property-box-shadow-hover: 0 0 0 1px #acb7a7;
  --modal-background: #FAFAFa;
  --modal-border-color: #acb7a7;
  --modal-radius: 5px;
  --nav-collapse-icon-color: #4E4D49;
  --nav-collapse-icon-color-collapsed: #4E4D49;
  --nav-heading-color: #222;
  --nav-heading-color-collapsed: #4E4D49;
  --nav-heading-color-collapsed-hover: #434B56;
  --nav-heading-color-hover: #222;
  --nav-item-background-active: none;
  --nav-item-background-hover: #acb7a7;
  --nav-item-color: #202430;
  --nav-item-color-active: #888888;
  --nav-item-color-highlighted: #7e9573;
  --nav-item-color-selected: #222;
  --nav-item-radius: 5px;
  --nav-tag-color: #4E4D49;
  --nav-tag-color-active: #434B56;
  --nav-tag-color-hover: #434B56;
  --nav-tag-radius: 5px;
  --pdf-background: #FAFAFa;
  --pdf-page-background: #FAFAFa;
  --pdf-sidebar-background: #FAFAFa;
  --pill-border-color: #acb7a7;
  --pill-border-color-hover: #acb7a7;
  --pill-color: #434B56;
  --pill-color-hover: #222;
  --pill-color-remove: #4E4D49;
  --pill-color-remove-hover: #7e9573;
  --prompt-background: #FAFAFa;
  --prompt-border-color: #acb7a7;
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --raised-background: color-mix(in srgb, #FAFAFa 65%, transparent) linear-gradient(#FAFAFa, color-mix(in srgb, #FAFAFa 65%, transparent));
  --ribbon-background: #fafafa;
  --ribbon-background-collapsed: #FAFAFa;
  --scrollbar-radius: 5px;
  --search-clear-button-color: #434B56;
  --search-icon-color: #434B56;
  --search-result-background: #FAFAFa;
  --setting-group-heading-color: #222;
  --setting-items-border-color: #acb7a7;
  --setting-items-radius: 5px;
  --slider-thumb-border-color: #acb7a7;
  --slider-thumb-radius: 5px;
  --slider-track-background: #acb7a7;
  --status-bar-background: #fafafa;
  --status-bar-border-color: transparent;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: #434B56;
  --suggestion-background: #FAFAFa;
  --tab-background-active: #FAFAFa;
  --tab-container-background: #fafafa;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 5px;
  --tab-radius-active: 5px;
  --tab-switcher-background: #fafafa;
  --tab-switcher-menubar-background: linear-gradient(to top, #fafafa, transparent);
  --tab-text-color: #4E4D49;
  --tab-text-color-active: #434B56;
  --tab-text-color-focused: #434B56;
  --tab-text-color-focused-active: #434B56;
  --tab-text-color-focused-active-current: #222;
  --tab-text-color-focused-highlighted: #7e9573;
  --table-add-button-border-color: #acb7a7;
  --table-border-color: #acb7a7;
  --table-drag-handle-color: #4E4D49;
  --table-header-border-color: #acb7a7;
  --table-header-color: #222;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-color: #7e9573;
  --tag-color-hover: #999999;
  --text-accent: #7e9573;
  --text-accent-hover: #c7c7c7;
  --text-faint: #4E4D49;
  --text-highlight-bg: transparent;
  --text-muted: #434B56;
  --text-normal: #222;
  --titlebar-background: #fafafa;
  --titlebar-background-focused: #acb7a7;
  --titlebar-border-color: #acb7a7;
  --titlebar-text-color: #434B56;
  --titlebar-text-color-focused: #222;
  --toggle-radius: 5px;
  --toggle-thumb-radius: 5px;
  --vault-profile-color: #222;
  --vault-profile-color-hover: #222;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(250, 250, 250);
}`,
    typography: `body .page article p > em, em {
  color: rgb(117, 138, 82);
  outline: rgb(117, 138, 82) none 0px;
  text-decoration: rgb(117, 138, 82);
  text-decoration-color: rgb(117, 138, 82);
}

body .page article p > i, i {
  color: rgb(117, 138, 82);
  outline: rgb(117, 138, 82) none 0px;
  text-decoration: rgb(117, 138, 82);
  text-decoration-color: rgb(117, 138, 82);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
}

body p {
  color: rgb(67, 75, 86);
  outline: rgb(67, 75, 86) none 0px;
  text-decoration: rgb(67, 75, 86);
  text-decoration-color: rgb(67, 75, 86);
}`,
    links: `body a.external, footer a {
  color: rgb(126, 149, 115);
  outline: rgb(126, 149, 115) none 0px;
  text-decoration: underline rgba(172, 183, 167, 0);
  text-decoration-color: rgba(172, 183, 167, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(126, 149, 115);
  outline: rgb(126, 149, 115) none 0px;
  text-decoration: underline rgba(172, 183, 167, 0);
  text-decoration-color: rgba(172, 183, 167, 0);
}

body a.internal.broken {
  color: rgb(126, 149, 115);
  outline: rgb(126, 149, 115) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(250, 250, 250);
}

body ul.overflow {
  background-color: rgb(250, 250, 250);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 77, 73);
  text-decoration: rgba(172, 183, 167, 0);
}`,
    tables: `body table {
  width: 227.125px;
}

body td {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
}

body th {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
}`,
    code: `body code {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(67, 75, 86);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(67, 75, 86);
  text-decoration: line-through rgb(67, 75, 86);
  text-decoration-color: rgb(67, 75, 86);
}

body input[type=checkbox] {
  border-bottom-color: rgb(78, 77, 73);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(78, 77, 73);
  border-right-color: rgb(78, 77, 73);
  border-top-color: rgb(78, 77, 73);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(250, 250, 250, 0.514);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 250, 250);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

body a.internal.tag-link::before {
  color: rgb(126, 149, 115);
}

body h2.page-title, h2.page-title a {
  color: rgb(151, 163, 146);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgb(172, 183, 167);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgb(172, 183, 167);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(136, 136, 136);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(34, 34, 34);
}`,
    footer: `body footer {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  color: rgb(67, 75, 86);
}

body footer ul li a {
  color: rgb(67, 75, 86);
  text-decoration: rgb(67, 75, 86);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(32, 36, 48);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(32, 36, 48);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(34, 34, 34);
}

body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(67, 75, 86);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(67, 75, 86);
}

body .breadcrumb-element p {
  color: rgb(78, 77, 73);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  color: rgb(67, 75, 86);
}

body .metadata-properties {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
}

body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

body input[type=text] {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
}

body kbd {
  background-color: rgb(245, 244, 244);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
  },
};
