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
  --accent-h: 83;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: rgba(168, 193, 129, 0.1);
  --background-modifier-border: #343F44;
  --background-modifier-border-focus: #475258;
  --background-modifier-border-hover: #3D484D;
  --background-modifier-error: #E67E80;
  --background-modifier-error-hover: #E67E80;
  --background-modifier-form-field: #343F44;
  --background-modifier-form-field-hover: #343F44;
  --background-modifier-success: #A7C080;
  --background-primary: #232A2E;
  --background-primary-alt: #2D353B;
  --background-secondary: #232A2E;
  --background-secondary-alt: #232A2E;
  --bases-cards-background: #232A2E;
  --bases-cards-cover-background: #2D353B;
  --bases-cards-shadow: 0 0 0 1px #343F44;
  --bases-cards-shadow-hover: 0 0 0 1px #3D484D;
  --bases-embed-border-color: #343F44;
  --bases-group-heading-property-color: #9DA9A0;
  --bases-table-border-color: #343F44;
  --bases-table-cell-background-active: #232A2E;
  --bases-table-cell-background-disabled: #2D353B;
  --bases-table-cell-background-selected: rgba(168, 193, 129, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #475258;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(168, 193, 129);
  --bases-table-group-background: #2D353B;
  --bases-table-header-background: #232A2E;
  --bases-table-header-color: #9DA9A0;
  --bases-table-summary-background: #232A2E;
  --blockquote-border-color: #83C092;
  --blockquote-color: #83C092;
  --blur-background: color-mix(in srgb, #343F44 65%, transparent) linear-gradient(#343F44, color-mix(in srgb, #343F44 65%, transparent));
  --bold-color: #E69875;
  --bold-modifier: 0;
  --bold-weight: 400;
  --callout-title-weight: 400;
  --canvas-background: #232A2E;
  --canvas-card-label-color: #7A8478;
  --canvas-dot-pattern: #343F44;
  --caret-color: #D3C6AA;
  --checkbox-border-color: #7A8478;
  --checkbox-border-color-hover: #9DA9A0;
  --checkbox-color: #E67E80;
  --checkbox-color-hover: color-mix(
        in srgb, #E67E80, 25% black
        );
  --checkbox-marker-color: #232A2E;
  --checklist-done-color: #9DA9A0;
  --code-background: #2D353B;
  --code-border-color: #343F44;
  --code-comment: #859289;
  --code-function: #A7C080;
  --code-important: #E67E80;
  --code-keyword: #E67E80;
  --code-normal: #D3C6AA;
  --code-operator: #E69875;
  --code-property: #D3C6AA;
  --code-punctuation: #859289;
  --code-string: #A7C080;
  --code-tag: #83C092;
  --code-value: #D699B6;
  --collapse-icon-color: #7A8478;
  --collapse-icon-color-collapsed: rgb(192, 209, 159);
  --color-accent: rgb(168, 193, 129);
  --color-accent-1: rgb(192, 209, 159);
  --color-accent-2: rgb(214, 224, 189);
  --color-accent-hsl: 83, 34%, 63%;
  --color-base-00: #232A2E;
  --color-base-05: #232A2E;
  --color-base-10: #2D353B;
  --color-base-100: #9DA9A0;
  --color-base-20: #2D353B;
  --color-base-25: #343F44;
  --color-base-30: #343F44;
  --color-base-35: #3D484D;
  --color-base-40: #475258;
  --color-base-50: #7A8478;
  --color-base-60: #7A8478;
  --color-base-70: #859289;
  --color-blue: #7FBBB3;
  --color-cyan: #7FBBB3;
  --color-green: #A7C080;
  --color-orange: #E69875;
  --color-pink: #D699B6;
  --color-purple: #D699B6;
  --color-red: #E67E80;
  --color-yellow: #DBBC7F;
  --darken-ratio: 25%;
  --divider-color: #343F44;
  --divider-color-hover: rgb(168, 193, 129);
  --dropdown-background: #343F44;
  --dropdown-background-hover: #3D484D;
  --embed-block-shadow-hover: 0 0 0 1px #343F44, inset 0 0 0 1px #343F44;
  --embed-border-start: 2px solid rgb(168, 193, 129);
  --everforest-aqua: #83C092;
  --everforest-bg0: #2D353B;
  --everforest-bg1: #343F44;
  --everforest-bg2: #3D484D;
  --everforest-bg3: #475258;
  --everforest-bg4: #4F585E;
  --everforest-bg5: #56635f;
  --everforest-bg_dim: #232A2E;
  --everforest-bg_visual: #543A48;
  --everforest-blue: #7FBBB3;
  --everforest-fg: #D3C6AA;
  --everforest-green: #A7C080;
  --everforest-grey0: #7A8478;
  --everforest-grey1: #859289;
  --everforest-grey2: #9DA9A0;
  --everforest-orange: #E69875;
  --everforest-purple: #D699B6;
  --everforest-red: #E67E80;
  --everforest-yellow: #DBBC7F;
  --file-header-background: #232A2E;
  --file-header-background-focused: #232A2E;
  --flair-background: #343F44;
  --flair-color: #D3C6AA;
  --footnote-divider-color: #343F44;
  --footnote-id-color: #9DA9A0;
  --footnote-id-color-no-occurrences: #7A8478;
  --graph-line: #3D484D;
  --graph-node: #9DA9A0;
  --graph-node-attachment: #DBBC7F;
  --graph-node-focused: rgb(192, 209, 159);
  --graph-node-tag: #A7C080;
  --graph-node-unresolved: #7A8478;
  --graph-text: #D3C6AA;
  --heading-formatting: #7A8478;
  --hr-color: #343F44;
  --icon-color: #9DA9A0;
  --icon-color-active: rgb(192, 209, 159);
  --icon-color-focused: #9DA9A0;
  --icon-color-hover: #9DA9A0;
  --input-date-separator: #7A8478;
  --input-placeholder-color: #7A8478;
  --interactive-accent: rgb(168, 193, 129);
  --interactive-accent-hover: rgb(192, 209, 159);
  --interactive-accent-hsl: 83, 34%, 63%;
  --interactive-hover: #3D484D;
  --interactive-normal: #343F44;
  --italic-color: #DBBC7F;
  --link-color: #7FBBB3;
  --link-color-hover: color-mix(
        in srgb, #7FBBB3, 25% black
        );
  --link-external-color: #7FBBB3;
  --link-external-color-hover: color-mix(
        in srgb, #7FBBB3, 25% black
        );
  --link-unresolved-color: #859289;
  --link-unresolved-decoration-color: rgba(168, 193, 129, 0.3);
  --link-unresolved-opacity: 1;
  --list-marker-color: #D699B6;
  --list-marker-color-collapsed: rgb(192, 209, 159);
  --list-marker-color-hover: #9DA9A0;
  --menu-background: #232A2E;
  --menu-border-color: #3D484D;
  --metadata-border-color: #343F44;
  --metadata-divider-color: #343F44;
  --metadata-input-text-color: #D3C6AA;
  --metadata-label-text-color: #9DA9A0;
  --metadata-label-text-color-hover: #9DA9A0;
  --metadata-property-box-shadow-focus: 0 0 0 2px #475258;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3D484D;
  --modal-background: #232A2E;
  --modal-border-color: #475258;
  --nav-collapse-icon-color: #7A8478;
  --nav-collapse-icon-color-collapsed: #7A8478;
  --nav-heading-color: #D3C6AA;
  --nav-heading-color-collapsed: #7A8478;
  --nav-heading-color-collapsed-hover: #9DA9A0;
  --nav-heading-color-hover: #D3C6AA;
  --nav-item-background-selected: rgba(168, 193, 129, 0.15);
  --nav-item-color: #9DA9A0;
  --nav-item-color-active: #A7C080;
  --nav-item-color-highlighted: rgb(192, 209, 159);
  --nav-item-color-hover: #D3C6AA;
  --nav-item-color-selected: #D3C6AA;
  --nav-tag-color: #7A8478;
  --nav-tag-color-active: #9DA9A0;
  --nav-tag-color-hover: #9DA9A0;
  --pdf-background: #232A2E;
  --pdf-page-background: #232A2E;
  --pdf-shadow: 0 0 0 1px #343F44;
  --pdf-sidebar-background: #232A2E;
  --pdf-thumbnail-shadow: 0 0 0 1px #343F44;
  --pill-border-color: #343F44;
  --pill-border-color-hover: #3D484D;
  --pill-color: #9DA9A0;
  --pill-color-hover: #D3C6AA;
  --pill-color-remove: #7A8478;
  --pill-color-remove-hover: rgb(192, 209, 159);
  --prompt-background: #232A2E;
  --prompt-border-color: #475258;
  --raised-background: color-mix(in srgb, #343F44 65%, transparent) linear-gradient(#343F44, color-mix(in srgb, #343F44 65%, transparent));
  --ribbon-background: #232A2E;
  --ribbon-background-collapsed: #232A2E;
  --search-clear-button-color: #9DA9A0;
  --search-icon-color: #9DA9A0;
  --search-result-background: #232A2E;
  --setting-group-heading-color: #D3C6AA;
  --setting-items-background: #2D353B;
  --setting-items-border-color: #343F44;
  --slider-thumb-border-color: #3D484D;
  --slider-track-background: #343F44;
  --status-bar-background: #232A2E;
  --status-bar-border-color: #343F44;
  --status-bar-text-color: #9DA9A0;
  --suggestion-background: #232A2E;
  --sync-avatar-color-1: #E67E80;
  --sync-avatar-color-2: #E69875;
  --sync-avatar-color-3: #DBBC7F;
  --sync-avatar-color-4: #A7C080;
  --sync-avatar-color-5: #7FBBB3;
  --sync-avatar-color-6: #7FBBB3;
  --sync-avatar-color-7: #D699B6;
  --sync-avatar-color-8: #D699B6;
  --tab-background-active: #232A2E;
  --tab-container-background: #232A2E;
  --tab-divider-color: #3D484D;
  --tab-outline-color: #343F44;
  --tab-switcher-background: #232A2E;
  --tab-switcher-menubar-background: linear-gradient(to top, #232A2E, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(168, 193, 129);
  --tab-text-color: #7A8478;
  --tab-text-color-active: #9DA9A0;
  --tab-text-color-focused: #9DA9A0;
  --tab-text-color-focused-active: #9DA9A0;
  --tab-text-color-focused-active-current: #A7C080;
  --tab-text-color-focused-highlighted: rgb(192, 209, 159);
  --table-add-button-border-color: #343F44;
  --table-border-color: #343F44;
  --table-column-first-border-width: 0px;
  --table-column-last-border-width: 0px;
  --table-drag-handle-background-active: rgb(168, 193, 129);
  --table-drag-handle-color: #7A8478;
  --table-drag-handle-color-active: #232A2E;
  --table-header-background: #2D353B;
  --table-header-background-hover: #2D353B;
  --table-header-border-color: #343F44;
  --table-header-border-width: 0px;
  --table-header-color: #D3C6AA;
  --table-header-weight: 400;
  --table-row-last-border-width: 0px;
  --table-selection: rgba(168, 193, 129, 0.1);
  --table-selection-border-color: rgb(168, 193, 129);
  --tag-background: rgba(168, 193, 129, 0.1);
  --tag-background-hover: rgba(168, 193, 129, 0.2);
  --tag-border-color: rgba(168, 193, 129, 0.15);
  --tag-border-color-hover: rgba(168, 193, 129, 0.15);
  --tag-color: rgb(192, 209, 159);
  --tag-color-hover: rgb(192, 209, 159);
  --text-accent: rgb(192, 209, 159);
  --text-accent-hover: rgb(214, 224, 189);
  --text-error: #E67E80;
  --text-faint: #7A8478;
  --text-highlight-bg: #543A48;
  --text-muted: #9DA9A0;
  --text-normal: #D3C6AA;
  --text-on-accent: #232A2E;
  --text-selection: #543A48;
  --text-success: #A7C080;
  --text-warning: #E69875;
  --titlebar-background: #232A2E;
  --titlebar-background-focused: #232A2E;
  --titlebar-border-color: #343F44;
  --titlebar-text-color: #9DA9A0;
  --titlebar-text-color-focused: #D3C6AA;
  --vault-profile-color: #D3C6AA;
  --vault-profile-color-hover: #D3C6AA;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(52, 63, 68);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 42, 46);
  border-left-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

body div#quartz-root {
  background-color: rgb(35, 42, 46);
  color: rgb(211, 198, 170);
}`,
    typography: `body .page article p > b, b {
  color: rgb(230, 152, 117);
  font-weight: 400;
  outline: rgb(230, 152, 117) none 0px;
  text-decoration: rgb(230, 152, 117);
  text-decoration-color: rgb(230, 152, 117);
}

body .page article p > em, em {
  color: rgb(219, 188, 127);
  outline: rgb(219, 188, 127) none 0px;
  text-decoration: rgb(219, 188, 127);
  text-decoration-color: rgb(219, 188, 127);
}

body .page article p > i, i {
  color: rgb(219, 188, 127);
  outline: rgb(219, 188, 127) none 0px;
  text-decoration: rgb(219, 188, 127);
  text-decoration-color: rgb(219, 188, 127);
}

body .page article p > strong, strong {
  color: rgb(230, 152, 117);
  font-weight: 400;
  outline: rgb(230, 152, 117) none 0px;
  text-decoration: rgb(230, 152, 117);
  text-decoration-color: rgb(230, 152, 117);
}

body .text-highlight {
  background-color: rgb(84, 58, 72);
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body del {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: line-through rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body p {
  color: rgb(157, 169, 160);
  outline: rgb(157, 169, 160) none 0px;
  text-decoration: rgb(157, 169, 160);
  text-decoration-color: rgb(157, 169, 160);
}`,
    links: `body a.external, footer a {
  color: rgb(127, 187, 179);
  outline: rgb(127, 187, 179) none 0px;
  text-decoration: underline rgb(127, 187, 179);
  text-decoration-color: rgb(127, 187, 179);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(127, 187, 179);
  outline: rgb(127, 187, 179) none 0px;
  text-decoration: underline rgb(127, 187, 179);
  text-decoration-color: rgb(127, 187, 179);
}

body a.internal.broken {
  color: rgb(133, 146, 137);
  outline: rgb(133, 146, 137) none 0px;
  text-decoration: underline rgba(168, 193, 129, 0.3);
  text-decoration-color: rgba(168, 193, 129, 0.3);
}`,
    lists: `body dd {
  color: rgb(211, 198, 170);
}

body dt {
  color: rgb(211, 198, 170);
}

body ol > li {
  color: rgb(211, 198, 170);
}

body ol.overflow {
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body ul > li {
  color: rgb(211, 198, 170);
}

body ul.overflow {
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(122, 132, 120);
  text-decoration: rgb(122, 132, 120);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body table {
  color: rgb(211, 198, 170);
  width: 200.938px;
}

body td {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-left-width: 0px;
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

body th {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-left-width: 0px;
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  border-top-width: 0px;
  color: rgb(211, 198, 170);
  font-weight: 400;
}

body tr {
  background-color: rgb(45, 53, 59);
}`,
    code: `body code {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

body pre > code > [data-line] {
  border-left-color: rgb(167, 192, 128);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(167, 192, 128);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(167, 192, 128);
  border-left-color: rgb(167, 192, 128);
  border-right-color: rgb(167, 192, 128);
  border-top-color: rgb(167, 192, 128);
}

body pre > code, pre:has(> code) {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
}

body pre:has(> code) {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
}`,
    images: `body audio {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body figcaption {
  color: rgb(211, 198, 170);
}

body figure {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body img {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body video {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    embeds: `body .file-embed {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
}

body .footnotes {
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body .transclude {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(168, 193, 129);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body .transclude-inner {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(168, 193, 129);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(157, 169, 160);
  text-decoration: line-through rgb(157, 169, 160);
  text-decoration-color: rgb(157, 169, 160);
}

body input[type=checkbox] {
  border-bottom-color: rgb(122, 132, 120);
  border-left-color: rgb(122, 132, 120);
  border-right-color: rgb(122, 132, 120);
  border-top-color: rgb(122, 132, 120);
}

body li.task-list-item[data-task='!'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='*'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='-'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='/'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='>'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='?'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='I'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='S'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='b'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='c'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='d'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='f'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='i'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='k'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='l'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='p'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='u'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='w'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}`,
    search: `body .search > .search-button {
  background-color: rgb(52, 63, 68);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space {
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(71, 82, 88);
  border-left-color: rgb(71, 82, 88);
  border-right-color: rgb(71, 82, 88);
  border-top-color: rgb(71, 82, 88);
}

body .search > .search-container > .search-space > * {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(71, 82, 88);
  border-left-color: rgb(71, 82, 88);
  border-right-color: rgb(71, 82, 88);
  border-top-color: rgb(71, 82, 88);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(35, 42, 46);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(168, 193, 129, 0.1);
  border-bottom-color: rgba(168, 193, 129, 0.15);
  border-left-color: rgba(168, 193, 129, 0.15);
  border-right-color: rgba(168, 193, 129, 0.15);
  border-top-color: rgba(168, 193, 129, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(193, 209, 160);
}

body h1 {
  color: rgb(211, 198, 170);
}

body h2 {
  color: rgb(211, 198, 170);
}

body h2.page-title, h2.page-title a {
  color: rgb(211, 198, 170);
}

body h3 {
  color: rgb(211, 198, 170);
}

body h4 {
  color: rgb(211, 198, 170);
}

body h5 {
  color: rgb(211, 198, 170);
}

body h6 {
  color: rgb(211, 198, 170);
}

body hr {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

body ::-webkit-scrollbar-corner {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}

body ::-webkit-scrollbar-track {
  background: rgb(35, 42, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 42, 46);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(157, 169, 160);
  text-decoration: rgb(157, 169, 160);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(157, 169, 160);
  text-decoration: rgb(157, 169, 160);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(157, 169, 160);
  text-decoration: rgb(157, 169, 160);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(167, 192, 128);
  border-left-color: rgb(167, 192, 128);
  border-right-color: rgb(167, 192, 128);
  border-top-color: rgb(167, 192, 128);
  color: rgb(167, 192, 128);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}`,
    footer: `body footer {
  background-color: rgb(35, 42, 46);
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(157, 169, 160);
}

body footer ul li a {
  color: rgb(157, 169, 160);
  text-decoration: rgb(157, 169, 160);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(211, 198, 170);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(157, 169, 160);
  text-decoration: rgb(157, 169, 160);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(157, 169, 160);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body li.section-li > .section .meta {
  color: rgb(157, 169, 160);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(157, 169, 160);
  text-decoration: rgb(157, 169, 160);
}

body ul.section-ul {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

body .darkmode svg {
  color: rgb(157, 169, 160);
  stroke: rgb(157, 169, 160);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

body .breadcrumb-element p {
  color: rgb(122, 132, 120);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body .metadata {
  border-bottom-color: rgb(52, 63, 68);
  border-left-color: rgb(52, 63, 68);
  border-right-color: rgb(52, 63, 68);
  border-top-color: rgb(52, 63, 68);
  color: rgb(157, 169, 160);
}

body .metadata-properties {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

body .navigation-progress {
  background-color: rgb(35, 42, 46);
}

body .page-header h2.page-title {
  color: rgb(211, 198, 170);
}

body abbr {
  color: rgb(211, 198, 170);
  text-decoration: underline dotted rgb(211, 198, 170);
}

body details {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body input[type=text] {
  border-bottom-color: rgb(157, 169, 160);
  border-left-color: rgb(157, 169, 160);
  border-right-color: rgb(157, 169, 160);
  border-top-color: rgb(157, 169, 160);
  color: rgb(157, 169, 160);
}

body kbd {
  background-color: rgb(45, 53, 59);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body progress {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body sub {
  color: rgb(211, 198, 170);
}

body summary {
  color: rgb(211, 198, 170);
}

body sup {
  color: rgb(211, 198, 170);
}`,
  },
  light: {
    base: `:root:root {
  --darken-ratio: 25%;
  --everforest-aqua: #83C092;
  --everforest-bg0: #2D353B;
  --everforest-bg1: #343F44;
  --everforest-bg2: #3D484D;
  --everforest-bg3: #475258;
  --everforest-bg4: #4F585E;
  --everforest-bg5: #56635f;
  --everforest-bg_dim: #232A2E;
  --everforest-bg_visual: #543A48;
  --everforest-blue: #7FBBB3;
  --everforest-fg: #D3C6AA;
  --everforest-green: #A7C080;
  --everforest-grey0: #7A8478;
  --everforest-grey1: #859289;
  --everforest-grey2: #9DA9A0;
  --everforest-orange: #E69875;
  --everforest-purple: #D699B6;
  --everforest-red: #E67E80;
  --everforest-yellow: #DBBC7F;
  --quartz-icon-color: currentColor;
}`,
  },
};
