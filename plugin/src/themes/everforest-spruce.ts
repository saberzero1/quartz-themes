import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "everforest-spruce",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 83 !important;
  --accent-l: 63% !important;
  --accent-s: 34% !important;
  --background-modifier-active-hover: hsla(83, 34%, 63%, 0.1) !important;
  --background-modifier-border: #343F44 !important;
  --background-modifier-border-focus: #475258 !important;
  --background-modifier-border-hover: #3D484D !important;
  --background-modifier-error: #E67E80 !important;
  --background-modifier-error-hover: #E67E80 !important;
  --background-modifier-form-field: #343F44 !important;
  --background-modifier-form-field-hover: #343F44 !important;
  --background-modifier-success: #A7C080 !important;
  --background-primary: #232A2E !important;
  --background-primary-alt: #2D353B !important;
  --background-secondary: #232A2E !important;
  --background-secondary-alt: #232A2E !important;
  --bases-cards-background: #232A2E !important;
  --bases-cards-cover-background: #2D353B !important;
  --bases-cards-shadow: 0 0 0 1px #343F44 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3D484D !important;
  --bases-embed-border-color: #343F44 !important;
  --bases-group-heading-property-color: #9DA9A0 !important;
  --bases-table-border-color: #343F44 !important;
  --bases-table-cell-background-active: #232A2E !important;
  --bases-table-cell-background-disabled: #2D353B !important;
  --bases-table-cell-background-selected: hsla(83, 34%, 63%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #475258 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(83, 34%, 63%) !important;
  --bases-table-group-background: #2D353B !important;
  --bases-table-header-background: #232A2E !important;
  --bases-table-header-color: #9DA9A0 !important;
  --bases-table-summary-background: #232A2E !important;
  --blockquote-border-color: #83C092 !important;
  --blockquote-color: #83C092 !important;
  --blur-background: color-mix(in srgb, #343F44 65%, transparent) linear-gradient(#343F44, color-mix(in srgb, #343F44 65%, transparent)) !important;
  --bold-color: #E69875 !important;
  --bold-modifier: 0 !important;
  --bold-weight: 400 !important;
  --callout-title-weight: 400;
  --canvas-background: #232A2E !important;
  --canvas-card-label-color: #7A8478 !important;
  --canvas-dot-pattern: #343F44 !important;
  --caret-color: #D3C6AA !important;
  --checkbox-border-color: #7A8478 !important;
  --checkbox-border-color-hover: #9DA9A0 !important;
  --checkbox-color: #E67E80 !important;
  --checkbox-color-hover: color-mix(
        in srgb, #E67E80, 25% black
        ) !important;
  --checkbox-marker-color: #232A2E !important;
  --checklist-done-color: #9DA9A0 !important;
  --code-background: #2D353B !important;
  --code-border-color: #343F44 !important;
  --code-comment: #859289 !important;
  --code-function: #A7C080 !important;
  --code-important: #E67E80 !important;
  --code-keyword: #E67E80 !important;
  --code-normal: #D3C6AA !important;
  --code-operator: #E69875 !important;
  --code-property: #D3C6AA !important;
  --code-punctuation: #859289 !important;
  --code-string: #A7C080 !important;
  --code-tag: #83C092 !important;
  --code-value: #D699B6 !important;
  --collapse-icon-color: #7A8478 !important;
  --collapse-icon-color-collapsed: hsl(80, 34.68%, 72.45%) !important;
  --color-accent: hsl(83, 34%, 63%) !important;
  --color-accent-1: hsl(80, 34.68%, 72.45%) !important;
  --color-accent-2: hsl(78, 35.7%, 81.27%) !important;
  --color-accent-hsl: 83, 34%, 63% !important;
  --color-base-00: #232A2E !important;
  --color-base-05: #232A2E !important;
  --color-base-10: #2D353B !important;
  --color-base-100: #9DA9A0 !important;
  --color-base-20: #2D353B !important;
  --color-base-25: #343F44 !important;
  --color-base-30: #343F44 !important;
  --color-base-35: #3D484D !important;
  --color-base-40: #475258 !important;
  --color-base-50: #7A8478 !important;
  --color-base-60: #7A8478 !important;
  --color-base-70: #859289 !important;
  --color-blue: #7FBBB3 !important;
  --color-cyan: #7FBBB3 !important;
  --color-green: #A7C080 !important;
  --color-orange: #E69875 !important;
  --color-pink: #D699B6 !important;
  --color-purple: #D699B6 !important;
  --color-red: #E67E80 !important;
  --color-yellow: #DBBC7F !important;
  --dark: #D3C6AA !important;
  --darken-ratio: 25% !important;
  --darkgray: #D3C6AA !important;
  --divider-color: #343F44 !important;
  --divider-color-hover: hsl(83, 34%, 63%) !important;
  --dropdown-background: #343F44 !important;
  --dropdown-background-hover: #3D484D !important;
  --embed-block-shadow-hover: 0 0 0 1px #343F44, inset 0 0 0 1px #343F44 !important;
  --embed-border-start: 2px solid hsl(83, 34%, 63%) !important;
  --everforest-aqua: #83C092 !important;
  --everforest-bg0: #2D353B !important;
  --everforest-bg1: #343F44 !important;
  --everforest-bg2: #3D484D !important;
  --everforest-bg3: #475258 !important;
  --everforest-bg4: #4F585E !important;
  --everforest-bg5: #56635f !important;
  --everforest-bg_dim: #232A2E !important;
  --everforest-bg_visual: #543A48 !important;
  --everforest-blue: #7FBBB3 !important;
  --everforest-fg: #D3C6AA !important;
  --everforest-green: #A7C080 !important;
  --everforest-grey0: #7A8478 !important;
  --everforest-grey1: #859289 !important;
  --everforest-grey2: #9DA9A0 !important;
  --everforest-orange: #E69875 !important;
  --everforest-purple: #D699B6 !important;
  --everforest-red: #E67E80 !important;
  --everforest-yellow: #DBBC7F !important;
  --file-header-background: #232A2E !important;
  --file-header-background-focused: #232A2E !important;
  --flair-background: #343F44 !important;
  --flair-color: #D3C6AA !important;
  --footnote-divider-color: #343F44 !important;
  --footnote-id-color: #9DA9A0 !important;
  --footnote-id-color-no-occurrences: #7A8478 !important;
  --graph-line: #3D484D !important;
  --graph-node: #9DA9A0 !important;
  --graph-node-attachment: #DBBC7F !important;
  --graph-node-focused: hsl(80, 34.68%, 72.45%) !important;
  --graph-node-tag: #A7C080 !important;
  --graph-node-unresolved: #7A8478 !important;
  --graph-text: #D3C6AA !important;
  --gray: #9DA9A0 !important;
  --heading-formatting: #7A8478 !important;
  --highlight: #543A48 !important;
  --hr-color: #343F44 !important;
  --icon-color: #9DA9A0 !important;
  --icon-color-active: hsl(80, 34.68%, 72.45%) !important;
  --icon-color-focused: #9DA9A0 !important;
  --icon-color-hover: #9DA9A0 !important;
  --input-date-separator: #7A8478 !important;
  --input-placeholder-color: #7A8478 !important;
  --interactive-accent: hsl(83, 34%, 63%) !important;
  --interactive-accent-hover: hsl(80, 34.68%, 72.45%) !important;
  --interactive-accent-hsl: 83, 34%, 63% !important;
  --interactive-hover: #3D484D !important;
  --interactive-normal: #343F44 !important;
  --italic-color: #DBBC7F !important;
  --light: #232A2E !important;
  --lightgray: #232A2E !important;
  --link-color: #7FBBB3 !important;
  --link-color-hover: color-mix(
        in srgb, #7FBBB3, 25% black
        ) !important;
  --link-external-color: #7FBBB3 !important;
  --link-external-color-hover: color-mix(
        in srgb, #7FBBB3, 25% black
        ) !important;
  --link-unresolved-color: #859289 !important;
  --link-unresolved-decoration-color: hsla(83, 34%, 63%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: #D699B6 !important;
  --list-marker-color-collapsed: hsl(80, 34.68%, 72.45%) !important;
  --list-marker-color-hover: #9DA9A0 !important;
  --menu-background: #232A2E !important;
  --menu-border-color: #3D484D !important;
  --metadata-border-color: #343F44 !important;
  --metadata-divider-color: #343F44 !important;
  --metadata-input-text-color: #D3C6AA !important;
  --metadata-label-text-color: #9DA9A0 !important;
  --metadata-label-text-color-hover: #9DA9A0 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #475258 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3D484D !important;
  --modal-background: #232A2E !important;
  --modal-border-color: #475258 !important;
  --nav-collapse-icon-color: #7A8478 !important;
  --nav-collapse-icon-color-collapsed: #7A8478 !important;
  --nav-heading-color: #D3C6AA !important;
  --nav-heading-color-collapsed: #7A8478 !important;
  --nav-heading-color-collapsed-hover: #9DA9A0 !important;
  --nav-heading-color-hover: #D3C6AA !important;
  --nav-item-background-selected: hsla(83, 34%, 63%, 0.15) !important;
  --nav-item-color: #9DA9A0 !important;
  --nav-item-color-active: #A7C080 !important;
  --nav-item-color-highlighted: hsl(80, 34.68%, 72.45%) !important;
  --nav-item-color-hover: #D3C6AA !important;
  --nav-item-color-selected: #D3C6AA !important;
  --nav-tag-color: #7A8478 !important;
  --nav-tag-color-active: #9DA9A0 !important;
  --nav-tag-color-hover: #9DA9A0 !important;
  --pdf-background: #232A2E !important;
  --pdf-page-background: #232A2E !important;
  --pdf-shadow: 0 0 0 1px #343F44 !important;
  --pdf-sidebar-background: #232A2E !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #343F44 !important;
  --pill-border-color: #343F44 !important;
  --pill-border-color-hover: #3D484D !important;
  --pill-color: #9DA9A0 !important;
  --pill-color-hover: #D3C6AA !important;
  --pill-color-remove: #7A8478 !important;
  --pill-color-remove-hover: hsl(80, 34.68%, 72.45%) !important;
  --prompt-background: #232A2E !important;
  --prompt-border-color: #475258 !important;
  --raised-background: color-mix(in srgb, #343F44 65%, transparent) linear-gradient(#343F44, color-mix(in srgb, #343F44 65%, transparent)) !important;
  --ribbon-background: #232A2E !important;
  --ribbon-background-collapsed: #232A2E !important;
  --search-clear-button-color: #9DA9A0 !important;
  --search-icon-color: #9DA9A0 !important;
  --search-result-background: #232A2E !important;
  --secondary: hsl(80, 34.68%, 72.45%) !important;
  --setting-group-heading-color: #D3C6AA !important;
  --setting-items-background: #2D353B !important;
  --setting-items-border-color: #343F44 !important;
  --slider-thumb-border-color: #3D484D !important;
  --slider-track-background: #343F44 !important;
  --status-bar-background: #232A2E !important;
  --status-bar-border-color: #343F44 !important;
  --status-bar-text-color: #9DA9A0 !important;
  --suggestion-background: #232A2E !important;
  --sync-avatar-color-1: #E67E80 !important;
  --sync-avatar-color-2: #E69875 !important;
  --sync-avatar-color-3: #DBBC7F !important;
  --sync-avatar-color-4: #A7C080 !important;
  --sync-avatar-color-5: #7FBBB3 !important;
  --sync-avatar-color-6: #7FBBB3 !important;
  --sync-avatar-color-7: #D699B6 !important;
  --sync-avatar-color-8: #D699B6 !important;
  --tab-background-active: #232A2E !important;
  --tab-container-background: #232A2E !important;
  --tab-divider-color: #3D484D !important;
  --tab-outline-color: #343F44 !important;
  --tab-switcher-background: #232A2E !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #232A2E, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(83, 34%, 63%) !important;
  --tab-text-color: #7A8478 !important;
  --tab-text-color-active: #9DA9A0 !important;
  --tab-text-color-focused: #9DA9A0 !important;
  --tab-text-color-focused-active: #9DA9A0 !important;
  --tab-text-color-focused-active-current: #A7C080 !important;
  --tab-text-color-focused-highlighted: hsl(80, 34.68%, 72.45%) !important;
  --table-add-button-border-color: #343F44 !important;
  --table-border-color: #343F44 !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-drag-handle-background-active: hsl(83, 34%, 63%) !important;
  --table-drag-handle-color: #7A8478 !important;
  --table-drag-handle-color-active: #232A2E !important;
  --table-header-background: #2D353B !important;
  --table-header-background-hover: #2D353B !important;
  --table-header-border-color: #343F44 !important;
  --table-header-border-width: 0px !important;
  --table-header-color: #D3C6AA !important;
  --table-header-weight: 400 !important;
  --table-row-last-border-width: 0px !important;
  --table-selection: hsla(83, 34%, 63%, 0.1) !important;
  --table-selection-border-color: hsl(83, 34%, 63%) !important;
  --tag-background: hsla(83, 34%, 63%, 0.1) !important;
  --tag-background-hover: hsla(83, 34%, 63%, 0.2) !important;
  --tag-border-color: hsla(83, 34%, 63%, 0.15) !important;
  --tag-border-color-hover: hsla(83, 34%, 63%, 0.15) !important;
  --tag-color: hsl(80, 34.68%, 72.45%) !important;
  --tag-color-hover: hsl(80, 34.68%, 72.45%) !important;
  --tertiary: hsl(78, 35.7%, 81.27%) !important;
  --text-accent: hsl(80, 34.68%, 72.45%) !important;
  --text-accent-hover: hsl(78, 35.7%, 81.27%) !important;
  --text-error: #E67E80 !important;
  --text-faint: #7A8478 !important;
  --text-highlight-bg: #543A48 !important;
  --text-muted: #9DA9A0 !important;
  --text-normal: #D3C6AA !important;
  --text-on-accent: #232A2E !important;
  --text-selection: #543A48 !important;
  --text-success: #A7C080 !important;
  --text-warning: #E69875 !important;
  --textHighlight: #543A48 !important;
  --titlebar-background: #232A2E !important;
  --titlebar-background-focused: #232A2E !important;
  --titlebar-border-color: #343F44 !important;
  --titlebar-text-color: #9DA9A0 !important;
  --titlebar-text-color-focused: #D3C6AA !important;
  --vault-profile-color: #D3C6AA !important;
  --vault-profile-color-hover: #D3C6AA !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
  font-weight: 400;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(35, 42, 46);
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(52, 63, 68);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(168, 193, 129, 0.1);
  color: rgb(193, 209, 160);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(52, 63, 68);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 42, 46);
  border-left-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(230, 152, 117);
  font-weight: 400;
  outline: rgb(230, 152, 117) none 0px;
  text-decoration-color: rgb(230, 152, 117);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(219, 188, 127);
  outline: rgb(219, 188, 127) none 0px;
  text-decoration-color: rgb(219, 188, 127);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(219, 188, 127);
  outline: rgb(219, 188, 127) none 0px;
  text-decoration-color: rgb(219, 188, 127);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(230, 152, 117);
  font-weight: 400;
  outline: rgb(230, 152, 117) none 0px;
  text-decoration-color: rgb(230, 152, 117);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(84, 58, 72);
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body del {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(122, 132, 120);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(230, 126, 128);
  border-color: rgb(230, 126, 128);
}

html[saved-theme="dark"] body p {
  color: rgb(157, 169, 160);
  outline: rgb(157, 169, 160) none 0px;
  text-decoration-color: rgb(157, 169, 160);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(127, 187, 179);
  outline: rgb(127, 187, 179) none 0px;
  text-decoration-color: rgb(127, 187, 179);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(127, 187, 179);
  outline: rgb(127, 187, 179) none 0px;
  text-decoration-color: rgb(127, 187, 179);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(133, 146, 137);
  outline: rgb(133, 146, 137) none 0px;
  text-decoration: underline rgba(168, 193, 129, 0.3);
  text-decoration-color: rgba(168, 193, 129, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body dt {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(122, 132, 120);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(211, 198, 170);
  width: 200.938px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-left-width: 0px;
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-left-width: 0px;
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  border-top-width: 0px;
  color: rgb(211, 198, 170);
  font-weight: 400;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(45, 53, 59);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(167, 192, 128);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(167, 192, 128);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(167, 192, 128);
  border-left-color: rgb(167, 192, 128);
  border-right-color: rgb(167, 192, 128);
  border-top-color: rgb(167, 192, 128);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(168, 193, 129);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(122, 132, 120);
  border-left-color: rgb(122, 132, 120);
  border-right-color: rgb(122, 132, 120);
  border-top-color: rgb(122, 132, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(52, 63, 68);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(71, 82, 88);
  border-left-color: rgb(71, 82, 88);
  border-right-color: rgb(71, 82, 88);
  border-top-color: rgb(71, 82, 88);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(71, 82, 88);
  border-left-color: rgb(71, 82, 88);
  border-right-color: rgb(71, 82, 88);
  border-top-color: rgb(71, 82, 88);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(35, 42, 46);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(168, 193, 129, 0.1);
  border-bottom-color: rgba(168, 193, 129, 0.15);
  border-left-color: rgba(168, 193, 129, 0.15);
  border-right-color: rgba(168, 193, 129, 0.15);
  border-top-color: rgba(168, 193, 129, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(193, 209, 160);
}

html[saved-theme="dark"] body h1 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h2 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h3 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h4 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h5 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body h6 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(157, 169, 160);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 198, 170);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(157, 169, 160);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(157, 169, 160);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(157, 169, 160);
  stroke: rgb(157, 169, 160);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(122, 132, 120);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(35, 42, 46);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body abbr {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body summary {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(168, 193, 129, 0.1);
  border-bottom-color: rgba(168, 193, 129, 0.15);
  border-left-color: rgba(168, 193, 129, 0.15);
  border-right-color: rgba(168, 193, 129, 0.15);
  border-top-color: rgba(168, 193, 129, 0.15);
  color: rgb(193, 209, 160);
}`,
  },
  light: {
    base: `:root:root {
  --darken-ratio: 25% !important;
  --everforest-aqua: #83C092 !important;
  --everforest-bg0: #2D353B !important;
  --everforest-bg1: #343F44 !important;
  --everforest-bg2: #3D484D !important;
  --everforest-bg3: #475258 !important;
  --everforest-bg4: #4F585E !important;
  --everforest-bg5: #56635f !important;
  --everforest-bg_dim: #232A2E !important;
  --everforest-bg_visual: #543A48 !important;
  --everforest-blue: #7FBBB3 !important;
  --everforest-fg: #D3C6AA !important;
  --everforest-green: #A7C080 !important;
  --everforest-grey0: #7A8478 !important;
  --everforest-grey1: #859289 !important;
  --everforest-grey2: #9DA9A0 !important;
  --everforest-orange: #E69875 !important;
  --everforest-purple: #D699B6 !important;
  --everforest-red: #E67E80 !important;
  --everforest-yellow: #DBBC7F !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
  },
};
