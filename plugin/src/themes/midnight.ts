import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "midnight", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.15) !important;
  --background-modifier-border: #282828 !important;
  --background-modifier-border-focus: #849dff !important;
  --background-modifier-form-field: #3c3c3c !important;
  --background-modifier-form-field-hover: #3c3c3c !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-primary: #040812 !important;
  --background-primary-alt: #0f1116 !important;
  --background-secondary: #0f1116 !important;
  --background-secondary-alt: #0f1116 !important;
  --bases-cards-background: #040812 !important;
  --bases-cards-cover-background: #0f1116 !important;
  --bases-cards-shadow: 0 0 0 1px #282828 !important;
  --bases-embed-border-color: #282828 !important;
  --bases-group-heading-property-color: #666666 !important;
  --bases-table-border-color: #282828 !important;
  --bases-table-cell-background-active: #040812 !important;
  --bases-table-cell-background-disabled: #0f1116 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #849dff !important;
  --bases-table-group-background: #0f1116 !important;
  --bases-table-header-background: #040812 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #666666 !important;
  --bases-table-row-background-hover: #1e1e32 !important;
  --bases-table-summary-background: #040812 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-background-color: #0f1116 !important;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent)) !important;
  --bold-color: #d8bfd8 !important;
  --bold-weight: 600 !important;
  --callout-default: 168, 130, 255;
  --callout-info: 41, 98, 208;
  --callout-padding: 12px 12px 12px
    24px;
  --callout-radius: 8px;
  --callout-todo: 41, 98, 208;
  --canvas-background: #040812 !important;
  --canvas-dot-pattern: #282828 !important;
  --checkbox-border-color-hover: #666666 !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: #040812 !important;
  --checklist-done-color: #666666 !important;
  --code-background: #0f1116 !important;
  --code-border-color: #282828 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-function: rgb(204, 65, 67) !important;
  --code-keyword: rgb(172, 37, 131) !important;
  --code-normal: #666666 !important;
  --code-operator: rgb(110, 178, 190) !important;
  --code-property: rgb(159, 101, 247) !important;
  --code-punctuation: rgb(204, 118, 209) !important;
  --code-string: rgb(224, 153, 66) !important;
  --code-value: rgb(93, 100, 212) !important;
  --collapse-icon-color-collapsed: rgb(166, 139, 249) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --color-base-00: #040812 !important;
  --color-base-10: #0f1116 !important;
  --color-base-20: #0f1116 !important;
  --color-base-25: #3c3c3c !important;
  --color-base-30: #282828 !important;
  --color-base-40: #849dff !important;
  --color-base-70: #666666 !important;
  --color-blue: #0064d7 !important;
  --color-blue-rgb: 41, 98, 208 !important;
  --color-dark-magenta: rgb(213, 26, 126) !important;
  --color-graph-node: rgb(140, 140, 140) !important;
  --color-graph-node-unresolved: rgb(95, 95, 100) !important;
  --color-light-blue: #849dff !important;
  --color-light-purple: #aa8fd1 !important;
  --color-main-dark: #040812 !important;
  --color-muted-purple: #1e1e32 !important;
  --color-outline: #282828 !important;
  --color-secondary-dark: #0f1116 !important;
  --color-thistle: #d8bfd8 !important;
  --dark: #666666 !important;
  --darkgray: #666666 !important;
  --divider-color: #282828 !important;
  --dropdown-background: #282828 !important;
  --embed-background: #0f1116 !important;
  --embed-block-shadow-hover: 0 0 0 1px #282828,
    inset 0 0 0 1px #282828 !important;
  --embed-border-bottom: 1px solid #282828 !important;
  --embed-border-left: 4px solid rgb(138, 92, 245) !important;
  --embed-border-right: 1px solid #282828 !important;
  --embed-border-top: 1px solid #282828 !important;
  --embed-canvas-max-height: 64px !important;
  --embed-max-height: 640px !important;
  --embed-padding: 0 24px 0 24px !important;
  --file-header-background: #040812 !important;
  --file-header-background-focused: #040812 !important;
  --file-line-width: 750px !important;
  --file-margins: 32px !important;
  --flair-background: #282828 !important;
  --font-footnote: 0.65em !important;
  --footnote-background: rgba(102, 102, 102, 0.1) !important;
  --footnote-border-width: 0px !important;
  --footnote-color: #666666 !important;
  --footnote-decoration: none !important;
  --footnote-divider-color: #282828 !important;
  --footnote-id-color: #666666 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --footnote-padding-x: 0.65em !important;
  --footnote-padding-y: 0.25em !important;
  --footnote-radius: 0.5em !important;
  --footnote-size: 0.65em !important;
  --graph-node: rgb(140, 140, 140) !important;
  --graph-node-focused: rgb(213, 26, 126) !important;
  --graph-node-tag: #0064d7 !important;
  --graph-node-unresolved: rgb(95, 95, 100) !important;
  --gray: #666666 !important;
  --h1-size: 2.002em !important;
  --h2-size: 1.802em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.624em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.466em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.325em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.155em !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --hr-color: #282828 !important;
  --icon-color: #666666 !important;
  --icon-color-active: rgb(166, 139, 249) !important;
  --icon-color-focused: #849dff !important;
  --icon-color-hover: #849dff !important;
  --inline-title-size: 2.5em !important;
  --input-disabled-border-color: transparent !important;
  --input-focus-border-color: Highlight !important;
  --input-focus-outline: 1px solid Canvas !important;
  --input-hover-border-color: black !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
    0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --input-unfocused-border-color: transparent !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --interactive-normal: #282828 !important;
  --italic-color: #d8bfd8 !important;
  --light: #040812 !important;
  --lightgray: #0f1116 !important;
  --link-color: rgb(166, 139, 249) !important;
  --link-color-hover: rgb(197, 182, 252) !important;
  --link-external-color: rgb(166, 139, 249) !important;
  --link-external-color-hover: rgb(197, 182, 252) !important;
  --link-unresolved-color: rgb(166, 139, 249) !important;
  --list-bullet-size: 0.33em !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(166, 139, 249) !important;
  --list-marker-color-hover: #666666 !important;
  --menu-background: #0f1116 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: #282828 !important;
  --metadata-divider-color: #282828 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-text-color: #666666 !important;
  --metadata-label-text-color-hover: #666666 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #849dff !important;
  --modal-background: #040812 !important;
  --modal-border-color: #849dff !important;
  --nav-heading-color-collapsed-hover: #666666 !important;
  --nav-item-background-active: #1e1e32 !important;
  --nav-item-background-hover: #1e1e32 !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #666666 !important;
  --nav-item-color-active: #849dff !important;
  --nav-item-color-highlighted: rgb(197, 182, 252) !important;
  --nav-item-color-hover: #849dff !important;
  --nav-item-padding: 4px 8px 4px
    24px !important;
  --nav-item-parent-padding: 4px 8px 4px
    24px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color-active: #666666 !important;
  --nav-tag-color-hover: #666666 !important;
  --pdf-background: #040812 !important;
  --pdf-page-background: #040812 !important;
  --pdf-shadow: 0 0 0 1px #282828 !important;
  --pdf-sidebar-background: #040812 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #282828 !important;
  --pill-border-color: #282828 !important;
  --pill-color: #666666 !important;
  --pill-color-remove-hover: rgb(166, 139, 249) !important;
  --popover-height: 530px !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --popover-width: 550px !important;
  --prompt-background: #040812 !important;
  --prompt-border-color: #849dff !important;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent)) !important;
  --ribbon-background: #0f1116 !important;
  --ribbon-background-collapsed: #040812 !important;
  --search-clear-button-color: #666666 !important;
  --search-icon-color: #666666 !important;
  --search-result-background: #040812 !important;
  --secondary: rgb(166, 139, 249) !important;
  --setting-items-background: #0f1116 !important;
  --setting-items-border-color: #282828 !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
    0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #282828 !important;
  --status-bar-background: #0f1116 !important;
  --status-bar-border-color: #282828 !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #666666 !important;
  --suggestion-background: #040812 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-6: #0064d7 !important;
  --tab-background-active: #1e1e32 !important;
  --tab-container-background: #0f1116 !important;
  --tab-outline-color: #282828 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #0f1116 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f1116, transparent) !important;
  --tab-text-color-active: #666666 !important;
  --tab-text-color-focused: #666666 !important;
  --tab-text-color-focused-active: #666666 !important;
  --tab-text-color-focused-active-current: #849dff !important;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249) !important;
  --table-add-button-border-color: #282828 !important;
  --table-background: rgb(22, 22, 22) !important;
  --table-border-color: #282828 !important;
  --table-column-min-width: 5ch !important;
  --table-header-background: rgb(15, 15, 15) !important;
  --table-header-border-color: #282828 !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: rgb(27, 27, 27) !important;
  --table-row-alt-background-hover: #1e1e32 !important;
  --table-row-background-hover: #1e1e32 !important;
  --tag-color: rgb(166, 139, 249) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tag-radius: 0.5em !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-muted: #666666 !important;
  --text-selection: rgba(138, 92, 245, 0.25) !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titlebar-background: #0f1116 !important;
  --titlebar-background-focused: #0f1116 !important;
  --titlebar-border-color: #282828 !important;
  --titlebar-text-color: #666666 !important;
  --titlebar-text-color-focused: #666666 !important;
  --vault-name-color: #dadada !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
