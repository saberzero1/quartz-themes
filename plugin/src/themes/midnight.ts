import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "midnight", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.15);
  --background-modifier-border: #282828;
  --background-modifier-border-focus: #849dff;
  --background-modifier-form-field: #3c3c3c;
  --background-modifier-form-field-hover: #3c3c3c;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-primary: #040812;
  --background-primary-alt: #0f1116;
  --background-secondary: #0f1116;
  --background-secondary-alt: #0f1116;
  --bases-cards-background: #040812;
  --bases-cards-cover-background: #0f1116;
  --bases-cards-shadow: 0 0 0 1px #282828;
  --bases-embed-border-color: #282828;
  --bases-group-heading-property-color: #666666;
  --bases-table-border-color: #282828;
  --bases-table-cell-background-active: #040812;
  --bases-table-cell-background-disabled: #0f1116;
  --bases-table-cell-shadow-active: 0 0 0 2px #849dff;
  --bases-table-group-background: #0f1116;
  --bases-table-header-background: #040812;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #666666;
  --bases-table-row-background-hover: #1e1e32;
  --bases-table-summary-background: #040812;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-background-color: #0f1116;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --bold-color: #d8bfd8;
  --bold-weight: 600;
  --callout-default: 168, 130, 255;
  --callout-info: 41, 98, 208;
  --callout-padding: 12px 12px 12px
    24px;
  --callout-radius: 8px;
  --callout-todo: 41, 98, 208;
  --canvas-background: #040812;
  --canvas-dot-pattern: #282828;
  --checkbox-border-color-hover: #666666;
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: #040812;
  --checklist-done-color: #666666;
  --code-background: #0f1116;
  --code-border-color: #282828;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-function: rgb(204, 65, 67);
  --code-keyword: rgb(172, 37, 131);
  --code-normal: #666666;
  --code-operator: rgb(110, 178, 190);
  --code-property: rgb(159, 101, 247);
  --code-punctuation: rgb(204, 118, 209);
  --code-string: rgb(224, 153, 66);
  --code-value: rgb(93, 100, 212);
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-base-00: #040812;
  --color-base-10: #0f1116;
  --color-base-20: #0f1116;
  --color-base-25: #3c3c3c;
  --color-base-30: #282828;
  --color-base-40: #849dff;
  --color-base-70: #666666;
  --color-blue: #0064d7;
  --color-blue-rgb: 41, 98, 208;
  --color-dark-magenta: rgb(213, 26, 126);
  --color-graph-node: rgb(140, 140, 140);
  --color-graph-node-unresolved: rgb(95, 95, 100);
  --color-light-blue: #849dff;
  --color-light-purple: #aa8fd1;
  --color-main-dark: #040812;
  --color-muted-purple: #1e1e32;
  --color-outline: #282828;
  --color-secondary-dark: #0f1116;
  --color-thistle: #d8bfd8;
  --divider-color: #282828;
  --dropdown-background: #282828;
  --embed-background: #0f1116;
  --embed-block-shadow-hover: 0 0 0 1px #282828,
    inset 0 0 0 1px #282828;
  --embed-border-bottom: 1px solid #282828;
  --embed-border-left: 4px solid rgb(138, 92, 245);
  --embed-border-right: 1px solid #282828;
  --embed-border-top: 1px solid #282828;
  --embed-canvas-max-height: 64px;
  --embed-max-height: 640px;
  --embed-padding: 0 24px 0 24px;
  --file-header-background: #040812;
  --file-header-background-focused: #040812;
  --file-line-width: 750px;
  --file-margins: 32px;
  --flair-background: #282828;
  --font-footnote: 0.65em;
  --footnote-background: rgba(102, 102, 102, 0.1);
  --footnote-border-width: 0px;
  --footnote-color: #666666;
  --footnote-decoration: none;
  --footnote-divider-color: #282828;
  --footnote-id-color: #666666;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --footnote-padding-x: 0.65em;
  --footnote-padding-y: 0.25em;
  --footnote-radius: 0.5em;
  --footnote-size: 0.65em;
  --graph-node: rgb(140, 140, 140);
  --graph-node-focused: rgb(213, 26, 126);
  --graph-node-tag: #0064d7;
  --graph-node-unresolved: rgb(95, 95, 100);
  --h1-size: 2.002em;
  --h2-size: 1.802em;
  --h2-weight: 600;
  --h3-size: 1.624em;
  --h3-weight: 600;
  --h4-size: 1.466em;
  --h4-weight: 600;
  --h5-size: 1.325em;
  --h5-weight: 600;
  --h6-size: 1.155em;
  --hr-color: #282828;
  --icon-color: #666666;
  --icon-color-active: rgb(166, 139, 249);
  --icon-color-focused: #849dff;
  --icon-color-hover: #849dff;
  --inline-title-size: 2.5em;
  --input-disabled-border-color: transparent;
  --input-focus-border-color: Highlight;
  --input-focus-outline: 1px solid Canvas;
  --input-hover-border-color: black;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
    0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --input-unfocused-border-color: transparent;
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-normal: #282828;
  --italic-color: #d8bfd8;
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-unresolved-color: rgb(166, 139, 249);
  --list-bullet-size: 0.33em;
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --list-marker-color-hover: #666666;
  --menu-background: #0f1116;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-border-color: #282828;
  --metadata-divider-color: #282828;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-text-color: #666666;
  --metadata-label-text-color-hover: #666666;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #849dff;
  --modal-background: #040812;
  --modal-border-color: #849dff;
  --nav-heading-color-collapsed-hover: #666666;
  --nav-item-background-active: #1e1e32;
  --nav-item-background-hover: #1e1e32;
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: #666666;
  --nav-item-color-active: #849dff;
  --nav-item-color-highlighted: rgb(197, 182, 252);
  --nav-item-color-hover: #849dff;
  --nav-item-padding: 4px 8px 4px
    24px;
  --nav-item-parent-padding: 4px 8px 4px
    24px;
  --nav-item-white-space: nowrap;
  --nav-tag-color-active: #666666;
  --nav-tag-color-hover: #666666;
  --pdf-background: #040812;
  --pdf-page-background: #040812;
  --pdf-shadow: 0 0 0 1px #282828;
  --pdf-sidebar-background: #040812;
  --pdf-thumbnail-shadow: 0 0 0 1px #282828;
  --pill-border-color: #282828;
  --pill-color: #666666;
  --pill-color-remove-hover: rgb(166, 139, 249);
  --popover-height: 530px;
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --popover-width: 550px;
  --prompt-background: #040812;
  --prompt-border-color: #849dff;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --ribbon-background: #0f1116;
  --ribbon-background-collapsed: #040812;
  --search-clear-button-color: #666666;
  --search-icon-color: #666666;
  --search-result-background: #040812;
  --setting-items-background: #0f1116;
  --setting-items-border-color: #282828;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
    0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3);
  --slider-thumb-radius: 50%;
  --slider-track-background: #282828;
  --status-bar-background: #0f1116;
  --status-bar-border-color: #282828;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #666666;
  --suggestion-background: #040812;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-6: #0064d7;
  --tab-background-active: #1e1e32;
  --tab-container-background: #0f1116;
  --tab-outline-color: #282828;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #0f1116;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f1116, transparent);
  --tab-text-color-active: #666666;
  --tab-text-color-focused: #666666;
  --tab-text-color-focused-active: #666666;
  --tab-text-color-focused-active-current: #849dff;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-add-button-border-color: #282828;
  --table-background: rgb(22, 22, 22);
  --table-border-color: #282828;
  --table-column-min-width: 5ch;
  --table-header-background: rgb(15, 15, 15);
  --table-header-border-color: #282828;
  --table-header-weight: 600;
  --table-row-alt-background: rgb(27, 27, 27);
  --table-row-alt-background-hover: #1e1e32;
  --table-row-background-hover: #1e1e32;
  --tag-color: rgb(166, 139, 249);
  --tag-color-hover: rgb(166, 139, 249);
  --tag-radius: 0.5em;
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-muted: #666666;
  --text-selection: rgba(138, 92, 245, 0.25);
  --titlebar-background: #0f1116;
  --titlebar-background-focused: #0f1116;
  --titlebar-border-color: #282828;
  --titlebar-text-color: #666666;
  --titlebar-text-color-focused: #666666;
  --vault-name-color: #dadada;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 17, 22);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(4, 8, 18);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 17, 22);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(40, 40, 40);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 17, 22);
  border-left-color: rgb(40, 40, 40);
}

body div#quartz-root {
  background-color: rgb(4, 8, 18);
}`,
    typography: `body .page article p > b, b {
  color: rgb(216, 191, 216);
  outline: rgb(216, 191, 216) none 0px;
  text-decoration: rgb(216, 191, 216);
  text-decoration-color: rgb(216, 191, 216);
}

body .page article p > em, em {
  color: rgb(216, 191, 216);
  outline: rgb(216, 191, 216) none 0px;
  text-decoration: rgb(216, 191, 216);
  text-decoration-color: rgb(216, 191, 216);
}

body .page article p > i, i {
  color: rgb(216, 191, 216);
  outline: rgb(216, 191, 216) none 0px;
  text-decoration: rgb(216, 191, 216);
  text-decoration-color: rgb(216, 191, 216);
}

body .page article p > strong, strong {
  color: rgb(216, 191, 216);
  outline: rgb(216, 191, 216) none 0px;
  text-decoration: rgb(216, 191, 216);
  text-decoration-color: rgb(216, 191, 216);
}

body del {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: line-through rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body p {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    lists: `body ol.overflow {
  background-color: rgb(4, 8, 18);
}

body ul.overflow {
  background-color: rgb(4, 8, 18);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(15, 17, 22);
}`,
    tables: `body tbody tr:nth-child(even) {
  background-color: rgb(22, 22, 22);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(27, 27, 27);
}

body td {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body th {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body tr {
  background-color: rgb(15, 15, 15);
}`,
    code: `body code {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body pre > code > [data-line] {
  border-left-color: rgb(204, 65, 67);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(204, 65, 67);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(204, 65, 67);
  border-left-color: rgb(204, 65, 67);
  border-right-color: rgb(204, 65, 67);
  border-top-color: rgb(204, 65, 67);
}

body pre > code, pre:has(> code) {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body pre:has(> code) {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    embeds: `body .file-embed {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body .transclude {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(102, 102, 102);
  text-decoration: line-through rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(168, 130, 255);
  border-left-color: rgb(168, 130, 255);
  border-right-color: rgb(168, 130, 255);
  border-top-color: rgb(168, 130, 255);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 41, 98, 208;
  background-color: rgba(41, 98, 208, 0.12);
  border-bottom-color: rgba(41, 98, 208, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(41, 98, 208, 0.25);
  border-right-color: rgba(41, 98, 208, 0.25);
  border-top-color: rgba(41, 98, 208, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.12);
  border-bottom-color: rgba(168, 130, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(168, 130, 255, 0.25);
  border-right-color: rgba(168, 130, 255, 0.25);
  border-top-color: rgba(168, 130, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 41, 98, 208;
  background-color: rgba(41, 98, 208, 0.12);
  border-bottom-color: rgba(41, 98, 208, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(41, 98, 208, 0.25);
  border-right-color: rgba(41, 98, 208, 0.25);
  border-top-color: rgba(41, 98, 208, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(60, 60, 60);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space {
  background-color: rgb(4, 8, 18);
  border-bottom-color: rgb(132, 157, 255);
  border-left-color: rgb(132, 157, 255);
  border-right-color: rgb(132, 157, 255);
  border-top-color: rgb(132, 157, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(132, 157, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(132, 157, 255);
  border-left-color: rgb(132, 157, 255);
  border-right-color: rgb(132, 157, 255);
  border-top-color: rgb(132, 157, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(132, 157, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(30, 30, 50);
  color: rgb(132, 157, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(132, 157, 255);
  border-left-color: rgb(132, 157, 255);
  border-right-color: rgb(132, 157, 255);
  border-top-color: rgb(132, 157, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 17, 22);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(30, 30, 50);
  border-bottom-color: rgb(132, 157, 255);
  border-left-color: rgb(132, 157, 255);
  border-right-color: rgb(132, 157, 255);
  border-top-color: rgb(132, 157, 255);
  color: rgb(132, 157, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(30, 30, 50);
  color: rgb(132, 157, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body hr {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
}`,
    scrollbars: `body .callout {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgba(168, 130, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(168, 130, 255, 0.25);
  border-right-color: rgba(168, 130, 255, 0.25);
  border-top-color: rgba(168, 130, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(4, 8, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(4, 8, 18);
}

body ::-webkit-scrollbar-corner {
  background: rgb(4, 8, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(4, 8, 18);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(4, 8, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(4, 8, 18);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(4, 8, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(4, 8, 18);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(4, 8, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(4, 8, 18);
}

body ::-webkit-scrollbar-track {
  background: rgb(4, 8, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(4, 8, 18);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(30, 30, 50);
  border-bottom-color: rgb(132, 157, 255);
  border-left-color: rgb(132, 157, 255);
  border-right-color: rgb(132, 157, 255);
  border-top-color: rgb(132, 157, 255);
  color: rgb(132, 157, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}`,
    footer: `body footer {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(102, 102, 102);
}

body footer ul li a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(102, 102, 102);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(102, 102, 102);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body .darkmode svg {
  color: rgb(102, 102, 102);
  stroke: rgb(102, 102, 102);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(102, 102, 102);
}

body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body .navigation-progress {
  background-color: rgb(15, 17, 22);
}

body .page-header h2.page-title {
  color: rgb(102, 102, 102);
}

body input[type=text] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body kbd {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}`,
  },
  light: {},
};
