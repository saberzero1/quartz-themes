import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dashboard", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-border: #acb7a7 !important;
  --background-modifier-border-focus: #acb7a7 !important;
  --background-modifier-border-hover: #acb7a7 !important;
  --background-modifier-form-field: #FAFAFa !important;
  --background-modifier-form-field-hover: #FAFAFa !important;
  --background-primary: #FAFAFa !important;
  --background-secondary: #fafafa !important;
  --background-secondary-alt: #acb7a7 !important;
  --bases-cards-background: #FAFAFa !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #acb7a7 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #acb7a7 !important;
  --bases-embed-border-color: #acb7a7 !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: #434B56 !important;
  --bases-table-border-color: #acb7a7 !important;
  --bases-table-cell-background-active: #FAFAFa !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #acb7a7 !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-header-background: #FAFAFa !important;
  --bases-table-header-color: #434B56 !important;
  --bases-table-summary-background: #FAFAFa !important;
  --blur-background: color-mix(in srgb, #FAFAFa 65%, transparent) linear-gradient(#FAFAFa, color-mix(in srgb, #FAFAFa 65%, transparent)) !important;
  --button-radius: 0px !important;
  --callout-radius: 5px;
  --canvas-background: #FAFAFa !important;
  --canvas-card-label-color: #4E4D49 !important;
  --canvas-controls-radius: 5px !important;
  --canvas-dot-pattern: #acb7a7 !important;
  --caret-color: #222 !important;
  --checkbox-border-color: #4E4D49 !important;
  --checkbox-border-color-hover: #434B56 !important;
  --checkbox-marker-color: #FAFAFa !important;
  --checkbox-radius: 5px !important;
  --checklist-done-color: #434B56 !important;
  --clickable-icon-radius: 5px !important;
  --code-background: #F5F4F4 !important;
  --code-border-color: #acb7a7 !important;
  --code-comment: #4E4D49 !important;
  --code-normal: #222 !important;
  --code-punctuation: #434B56 !important;
  --code-radius: 5px !important;
  --collapse-icon-color: #4E4D49 !important;
  --collapse-icon-color-collapsed: #7e9573 !important;
  --color-base-00: #FAFAFa !important;
  --color-base-05: #acb7a7 !important;
  --color-base-100: #222 !important;
  --color-base-20: #fafafa !important;
  --color-base-25: #acb7a7 !important;
  --color-base-30: #acb7a7 !important;
  --color-base-35: #acb7a7 !important;
  --color-base-40: #acb7a7 !important;
  --color-base-50: #4E4D49 !important;
  --color-base-60: #acb7a7 !important;
  --color-base-70: #434B56 !important;
  --dark: #222 !important;
  --darkgray: #222 !important;
  --divider-color: transparent !important;
  --dropdown-background: #acb7a7 !important;
  --embed-block-shadow-hover: 0 0 0 1px #acb7a7, inset 0 0 0 1px #acb7a7 !important;
  --file-header-background: #FAFAFa !important;
  --file-header-background-focused: #FAFAFa !important;
  --flair-background: #acb7a7 !important;
  --flair-color: #222 !important;
  --footnote-divider-color: #acb7a7 !important;
  --footnote-id-color: #434B56 !important;
  --footnote-id-color-no-occurrences: #4E4D49 !important;
  --footnote-radius: 5px !important;
  --graph-line: #acb7a7 !important;
  --graph-node: #434B56 !important;
  --graph-node-focused: #7e9573 !important;
  --graph-node-unresolved: #4E4D49 !important;
  --graph-text: #222 !important;
  --gray: #434B56 !important;
  --heading-formatting: #4E4D49 !important;
  --highlight: transparent !important;
  --hr-color: #eaeaea !important;
  --hr-thickness: 3px !important;
  --icon-color: #222222 !important;
  --icon-color-active: #7e9573 !important;
  --icon-color-focused: #949494 !important;
  --icon-color-hover: #96a869 !important;
  --inline-title-color: #97a392 !important;
  --inline-title-size: 2.5em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #4E4D49 !important;
  --input-placeholder-color: #4E4D49 !important;
  --input-radius: 0px !important;
  --interactive-normal: #acb7a7 !important;
  --light: #FAFAFa !important;
  --lightgray: #fafafa !important;
  --link-color: #7e9573 !important;
  --link-color-hover: #c7c7c7 !important;
  --link-external-color: #7e9573 !important;
  --link-external-color-hover: #c7c7c7 !important;
  --link-unresolved-color: #7e9573 !important;
  --list-marker-color: #4E4D49 !important;
  --list-marker-color-collapsed: #7e9573 !important;
  --list-marker-color-hover: #434B56 !important;
  --menu-background: #fafafa !important;
  --menu-border-color: #acb7a7 !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #acb7a7 !important;
  --metadata-divider-color: #acb7a7 !important;
  --metadata-input-text-color: #222 !important;
  --metadata-label-text-color: #434B56 !important;
  --metadata-label-text-color-hover: #434B56 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #acb7a7 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #acb7a7 !important;
  --modal-background: #FAFAFa !important;
  --modal-border-color: #acb7a7 !important;
  --modal-radius: 5px !important;
  --nav-collapse-icon-color: #4E4D49 !important;
  --nav-collapse-icon-color-collapsed: #4E4D49 !important;
  --nav-heading-color: #222 !important;
  --nav-heading-color-collapsed: #4E4D49 !important;
  --nav-heading-color-collapsed-hover: #434B56 !important;
  --nav-heading-color-hover: #222 !important;
  --nav-item-background-active: none !important;
  --nav-item-background-hover: #acb7a7 !important;
  --nav-item-color: #202430 !important;
  --nav-item-color-active: #888888 !important;
  --nav-item-color-highlighted: #7e9573 !important;
  --nav-item-color-selected: #222 !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: #4E4D49 !important;
  --nav-tag-color-active: #434B56 !important;
  --nav-tag-color-hover: #434B56 !important;
  --nav-tag-radius: 5px !important;
  --pdf-background: #FAFAFa !important;
  --pdf-page-background: #FAFAFa !important;
  --pdf-sidebar-background: #FAFAFa !important;
  --pill-border-color: #acb7a7 !important;
  --pill-border-color-hover: #acb7a7 !important;
  --pill-color: #434B56 !important;
  --pill-color-hover: #222 !important;
  --pill-color-remove: #4E4D49 !important;
  --pill-color-remove-hover: #7e9573 !important;
  --prompt-background: #FAFAFa !important;
  --prompt-border-color: #acb7a7 !important;
  --radius-l: 5px !important;
  --radius-m: 5px !important;
  --radius-s: 5px !important;
  --raised-background: color-mix(in srgb, #FAFAFa 65%, transparent) linear-gradient(#FAFAFa, color-mix(in srgb, #FAFAFa 65%, transparent)) !important;
  --ribbon-background: #fafafa !important;
  --ribbon-background-collapsed: #FAFAFa !important;
  --scrollbar-radius: 5px !important;
  --search-clear-button-color: #434B56 !important;
  --search-icon-color: #434B56 !important;
  --search-result-background: #FAFAFa !important;
  --secondary: #7e9573 !important;
  --setting-group-heading-color: #222 !important;
  --setting-items-border-color: #acb7a7 !important;
  --setting-items-radius: 5px !important;
  --slider-thumb-border-color: #acb7a7 !important;
  --slider-thumb-radius: 5px !important;
  --slider-track-background: #acb7a7 !important;
  --status-bar-background: #fafafa !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: #434B56 !important;
  --suggestion-background: #FAFAFa !important;
  --tab-background-active: #FAFAFa !important;
  --tab-container-background: #fafafa !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 5px !important;
  --tab-radius-active: 5px !important;
  --tab-switcher-background: #fafafa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fafafa, transparent) !important;
  --tab-text-color: #4E4D49 !important;
  --tab-text-color-active: #434B56 !important;
  --tab-text-color-focused: #434B56 !important;
  --tab-text-color-focused-active: #434B56 !important;
  --tab-text-color-focused-active-current: #222 !important;
  --tab-text-color-focused-highlighted: #7e9573 !important;
  --table-add-button-border-color: #acb7a7 !important;
  --table-border-color: #acb7a7 !important;
  --table-drag-handle-color: #4E4D49 !important;
  --table-header-border-color: #acb7a7 !important;
  --table-header-color: #222 !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-color: #7e9573 !important;
  --tag-color-hover: #999999 !important;
  --tertiary: #c7c7c7 !important;
  --text-accent: #7e9573 !important;
  --text-accent-hover: #c7c7c7 !important;
  --text-faint: #4E4D49 !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #434B56 !important;
  --text-normal: #222 !important;
  --textHighlight: transparent !important;
  --titlebar-background: #fafafa !important;
  --titlebar-background-focused: #acb7a7 !important;
  --titlebar-border-color: #acb7a7 !important;
  --titlebar-text-color: #434B56 !important;
  --titlebar-text-color-focused: #222 !important;
  --toggle-radius: 5px !important;
  --toggle-thumb-radius: 5px !important;
  --vault-profile-color: #222 !important;
  --vault-profile-color-hover: #222 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
}

html body .bases-table thead th {
  border-color: rgb(172, 183, 167);
}

html body .canvas-sidebar {
  background-color: rgb(250, 250, 250);
}

html body .note-properties {
  border-color: rgb(172, 183, 167);
}

html body .note-properties-key {
  color: rgb(67, 75, 86);
}

html body .note-properties-row {
  border-color: rgb(67, 75, 86);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(126, 149, 115);
}

html body .note-properties-value {
  color: rgb(67, 75, 86);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}

html body div#quartz-root {
  background-color: rgb(250, 250, 250);
}`,
    typography: `html body .page article p > em, html em {
  color: rgb(117, 138, 82);
  outline: rgb(117, 138, 82) none 0px;
  text-decoration-color: rgb(117, 138, 82);
}

html body .page article p > i, html i {
  color: rgb(117, 138, 82);
  outline: rgb(117, 138, 82) none 0px;
  text-decoration-color: rgb(117, 138, 82);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(78, 77, 73);
  border-radius: 5px;
}

html body p {
  color: rgb(67, 75, 86);
  outline: rgb(67, 75, 86) none 0px;
  text-decoration-color: rgb(67, 75, 86);
}`,
    links: `html body a.external, html footer a {
  color: rgb(126, 149, 115);
  outline: rgb(126, 149, 115) none 0px;
  text-decoration: underline rgba(172, 183, 167, 0);
  text-decoration-color: rgba(172, 183, 167, 0);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(126, 149, 115);
  outline: rgb(126, 149, 115) none 0px;
  text-decoration: underline rgba(172, 183, 167, 0);
  text-decoration-color: rgba(172, 183, 167, 0);
}

html body a.internal.broken {
  color: rgb(126, 149, 115);
  outline: rgb(126, 149, 115) none 0px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(78, 77, 73);
  text-decoration: rgba(172, 183, 167, 0);
}`,
    tables: `html body table {
  width: 227.125px;
}

html body td {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
}

html body th {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
}`,
    code: `html body code {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    embeds: `html body .file-embed {
  border-bottom-color: rgb(67, 75, 86);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(78, 77, 73);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(78, 77, 73);
  border-right-color: rgb(78, 77, 73);
  border-top-color: rgb(78, 77, 73);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  color: rgb(172, 183, 167);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(172, 183, 167);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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

html body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
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

html body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
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

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
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

html body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
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

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
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

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
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

html body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
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

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
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

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
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

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
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

html body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
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

html body .search > .search-container > .search-space {
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

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(172, 183, 167);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 250, 250);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

html body a.internal.tag-link::before {
  color: rgb(126, 149, 115);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(151, 163, 146);
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
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

html body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 36, 48);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 36, 48);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html body footer {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  color: rgb(67, 75, 86);
}

html body footer ul li a {
  color: rgb(67, 75, 86);
}`,
    recentNotes: `html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(32, 36, 48);
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(32, 36, 48);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
}`,
    darkmode: `html body .darkmode {
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

html body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `html body .breadcrumb-container {
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

html body .breadcrumb-element p {
  color: rgb(78, 77, 73);
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(172, 183, 167);
  border-left-color: rgb(172, 183, 167);
  border-right-color: rgb(172, 183, 167);
  border-top-color: rgb(172, 183, 167);
  color: rgb(67, 75, 86);
}

html body .metadata-properties {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
}

html body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

html body input[type=text] {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
}

html body kbd {
  background-color: rgb(245, 244, 244);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(126, 149, 115);
}`,
  },
};
