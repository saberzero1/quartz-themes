import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-dracula",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #191A21;
  --background-modifier-border-focus: #282A36;
  --background-modifier-border-hover: #282A36;
  --background-modifier-form-field: #191A21;
  --background-modifier-form-field-hover: #191A21;
  --background-primary: #191A21;
  --background-primary-alt: #191A21;
  --background-secondary: #191A21;
  --background-secondary-alt: #191A21;
  --bases-cards-background: #191A21;
  --bases-cards-cover-background: #191A21;
  --bases-cards-shadow: 0 0 0 1px #191A21;
  --bases-cards-shadow-hover: 0 0 0 1px #282A36;
  --bases-embed-border-color: #191A21;
  --bases-group-heading-property-color: #BABCC9;
  --bases-table-border-color: #191A21;
  --bases-table-cell-background-active: #191A21;
  --bases-table-cell-background-disabled: #191A21;
  --bases-table-cell-shadow-active: 0 0 0 2px #282A36;
  --bases-table-group-background: #191A21;
  --bases-table-header-background: #191A21;
  --bases-table-header-color: #BABCC9;
  --bases-table-summary-background: #191A21;
  --blur-background: color-mix(in srgb, #191A21 65%, transparent) linear-gradient(#191A21, color-mix(in srgb, #191A21 65%, transparent));
  --bold-color: #BD93F9;
  --callout-bug: 255, 85, 85;
  --callout-default: 98, 114, 164;
  --callout-error: 255, 85, 85;
  --callout-example: 255, 121, 198;
  --callout-fail: 255, 85, 85;
  --callout-important: 189, 147, 249;
  --callout-info: 98, 114, 164;
  --callout-question: 255, 184, 108;
  --callout-quote: 189, 147, 249;
  --callout-success: 55, 235, 98;
  --callout-summary: 114, 208, 228;
  --callout-tip: 114, 208, 228;
  --callout-todo: white;
  --callout-warning: 255, 184, 108;
  --canvas-background: #191A21;
  --canvas-card-label-color: #707487;
  --canvas-dot-pattern: #191A21;
  --caret-color: #F8F8F2;
  --checkbox-border-color: #707487;
  --checkbox-border-color-hover: #BABCC9;
  --checkbox-marker-color: #191A21;
  --checklist-done-color: #BABCC9;
  --checklist-done-decoration: none;
  --code-background: #191A21;
  --code-border-color: #191A21;
  --code-comment: #6270A4;
  --code-function: #50FA7B;
  --code-important: #FF5555;
  --code-keyword: #FF79C6;
  --code-normal: #BABCC9;
  --code-operator: #FF5555;
  --code-property: #FFB86C;
  --code-punctuation: #BABCC9;
  --code-string: #F1FA8C;
  --code-tag: #FF5555;
  --code-value: #BD93F9;
  --collapse-icon-color: #707487;
  --color-base-00: #191A21;
  --color-base-10: #191A21;
  --color-base-100: #F8F8F2;
  --color-base-20: #191A21;
  --color-base-25: #191A21;
  --color-base-30: #191A21;
  --color-base-35: #282A36;
  --color-base-40: #282A36;
  --color-base-50: #707487;
  --color-base-60: red;
  --color-base-70: #BABCC9;
  --divider-color: #191A21;
  --dropdown-background: #191A21;
  --dropdown-background-hover: #282A36;
  --drx-border-radius: 10px;
  --drx-border-width: 2px;
  --drx-color-accent: #BD93F9;
  --drx-color-base: #191A21;
  --drx-color-blue-1: #6DCCFF;
  --drx-color-blue-2: #54B3FF;
  --drx-color-blue-3: #3B9AE6;
  --drx-color-callout-blue: 84, 179, 255;
  --drx-color-callout-comment: 98, 114, 164;
  --drx-color-callout-cyan: 114, 208, 228;
  --drx-color-callout-green: 55, 235, 98;
  --drx-color-callout-orange: 255, 184, 108;
  --drx-color-callout-pink: 255, 121, 198;
  --drx-color-callout-purple: 189, 147, 249;
  --drx-color-callout-red: 255, 85, 85;
  --drx-color-callout-yellow: 241, 250, 140;
  --drx-color-comment: #6270A4;
  --drx-color-cyan-1: #A4FFFF;
  --drx-color-cyan-2: #8BE9FD;
  --drx-color-cyan-3: #72D0E4;
  --drx-color-deactivate: #707487;
  --drx-color-green-1: #69FF94;
  --drx-color-green-2: #50FA7B;
  --drx-color-green-3: #37EB62;
  --drx-color-highlight: #343746;
  --drx-color-important: #D6ACFF;
  --drx-color-orange-1: #FFD185;
  --drx-color-orange-2: #FFB86C;
  --drx-color-orange-3: #E69F53;
  --drx-color-overlay: #282A36;
  --drx-color-pink-1: #FF92DF;
  --drx-color-pink-2: #FF79C6;
  --drx-color-pink-3: #E660AD;
  --drx-color-purple-1: #D6ACFF;
  --drx-color-purple-2: #BD93F9;
  --drx-color-purple-3: #A47AE0;
  --drx-color-red-1: #FF6E6E;
  --drx-color-red-2: #FF5555;
  --drx-color-red-3: #E63C3C;
  --drx-color-subtext: #BABCC9;
  --drx-color-surface: #21222C;
  --drx-color-text: #F8F8F2;
  --drx-color-yellow-1: #FFFFA5;
  --drx-color-yellow-2: #F1FA8C;
  --drx-color-yellow-3: #D8E173;
  --drx-shadow-radius: 8px;
  --embed-block-shadow-hover: 0 0 0 1px #191A21, inset 0 0 0 1px #191A21;
  --file-header-background: #191A21;
  --file-header-background-focused: #191A21;
  --flair-background: #191A21;
  --flair-color: #F8F8F2;
  --footnote-divider-color: #191A21;
  --footnote-id-color: #BABCC9;
  --footnote-id-color-no-occurrences: #707487;
  --graph-line: #282A36;
  --graph-node: #BABCC9;
  --graph-node-unresolved: #707487;
  --graph-text: #F8F8F2;
  --h1-line-height: 1.00em;
  --h1-size: 1.50em;
  --h1-weight: 600;
  --h2-line-height: 1.00em;
  --h2-size: 1.35em;
  --h2-weight: 600;
  --h3-line-height: 1.00em;
  --h3-size: 1.20em;
  --h3-weight: 600;
  --h4-line-height: 1.00em;
  --h4-size: 1.15em;
  --h4-weight: 500;
  --h5-line-height: 1.00em;
  --h5-size: 1.10em;
  --h5-weight: 500;
  --h6-line-height: 1.00em;
  --h6-size: 1.05em;
  --h6-weight: 500;
  --heading-formatting: #707487;
  --hr-color: #707487;
  --icon-color: #BABCC9;
  --icon-color-focused: #F8F8F2;
  --icon-color-hover: #BABCC9;
  --inline-title-line-height: 1.00em;
  --inline-title-size: 1.50em;
  --inline-title-weight: 600;
  --input-date-separator: #707487;
  --input-placeholder-color: #707487;
  --interactive-hover: #282A36;
  --interactive-normal: #191A21;
  --link-color: #BD93F9;
  --link-color-hover: #D6ACFF;
  --link-external-color: #BD93F9;
  --link-external-color-hover: #D6ACFF;
  --link-unresolved-color: #50FA7B;
  --link-unresolved-decoration-color: #FF5555;
  --link-unresolved-opacity: 0.5;
  --list-marker-color: #707487;
  --list-marker-color-hover: #BABCC9;
  --menu-background: #191A21;
  --menu-border-color: #282A36;
  --metadata-border-color: #191A21;
  --metadata-divider-color: #191A21;
  --metadata-input-text-color: #F8F8F2;
  --metadata-label-text-color: #BABCC9;
  --metadata-label-text-color-hover: #BABCC9;
  --metadata-property-box-shadow-focus: 0 0 0 2px #282A36;
  --metadata-property-box-shadow-hover: 0 0 0 1px #282A36;
  --modal-background: #191A21;
  --modal-border-color: #282A36;
  --nav-collapse-icon-color: #707487;
  --nav-collapse-icon-color-collapsed: #707487;
  --nav-heading-color: #F8F8F2;
  --nav-heading-color-collapsed: #707487;
  --nav-heading-color-collapsed-hover: #BABCC9;
  --nav-heading-color-hover: #F8F8F2;
  --nav-item-active: #343746;
  --nav-item-color: #BABCC9;
  --nav-item-color-active: #F8F8F2;
  --nav-item-color-hover: #F8F8F2;
  --nav-item-color-selected: #F8F8F2;
  --nav-tag-color: #707487;
  --nav-tag-color-active: #BABCC9;
  --nav-tag-color-hover: #BABCC9;
  --pdf-background: #191A21;
  --pdf-page-background: #191A21;
  --pdf-shadow: 0 0 0 1px #191A21;
  --pdf-sidebar-background: #191A21;
  --pdf-thumbnail-shadow: 0 0 0 1px #191A21;
  --pill-border-color: #191A21;
  --pill-border-color-hover: #282A36;
  --pill-color: #BABCC9;
  --pill-color-hover: #F8F8F2;
  --pill-color-remove: #707487;
  --prompt-background: #191A21;
  --prompt-border-color: #282A36;
  --raised-background: color-mix(in srgb, #191A21 65%, transparent) linear-gradient(#191A21, color-mix(in srgb, #191A21 65%, transparent));
  --ribbon-background: #21222C;
  --ribbon-background-collapsed: #191A21;
  --search-clear-button-color: #BABCC9;
  --search-icon-color: #BABCC9;
  --search-result-background: #191A21;
  --setting-group-heading-color: #F8F8F2;
  --setting-items-background: #191A21;
  --setting-items-border-color: #191A21;
  --slider-thumb-border-color: #282A36;
  --slider-track-background: #191A21;
  --status-bar-background: #21222C;
  --status-bar-border-color: #191A21;
  --status-bar-text-color: #BABCC9;
  --suggestion-background: #191A21;
  --tab-background-active: #191A21;
  --tab-container-background: #191A21;
  --tab-divider-color: #282A36;
  --tab-outline-color: #191A21;
  --tab-switcher-background: #191A21;
  --tab-switcher-menubar-background: linear-gradient(to top, #191A21, transparent);
  --tab-text-color: #707487;
  --tab-text-color-active: #BABCC9;
  --tab-text-color-focused: #BABCC9;
  --tab-text-color-focused-active: #BABCC9;
  --tab-text-color-focused-active-current: #F8F8F2;
  --table-add-button-border-color: #191A21;
  --table-border-color: #191A21;
  --table-drag-handle-color: #707487;
  --table-header-background: #282A36;
  --table-header-border-color: #191A21;
  --table-header-color: #F8F8F2;
  --table-width: 88cqw;
  --tag-color: #BD93F9;
  --text-faint: #707487;
  --text-muted: #BABCC9;
  --text-normal: #F8F8F2;
  --text-selection: #282A36;
  --titlebar-background: #191A21;
  --titlebar-background-focused: #191A21;
  --titlebar-border-color: #191A21;
  --titlebar-text-color: #BABCC9;
  --titlebar-text-color-focused: #F8F8F2;
  --vault-profile-color: #F8F8F2;
  --vault-profile-color-hover: #F8F8F2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 26, 33);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body .page article p > em, em {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > i, i {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > strong, strong {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body p {
  color: rgb(186, 188, 201);
  outline: rgb(186, 188, 201) none 0px;
  text-decoration: rgb(186, 188, 201);
  text-decoration-color: rgb(186, 188, 201);
}`,
    links: `body a.external, footer a {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: underline rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: underline rgb(189, 147, 249);
  text-decoration-color: rgb(189, 147, 249);
}

body a.internal.broken {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: underline rgb(255, 85, 85);
  text-decoration-color: rgb(255, 85, 85);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 147, 249);
  text-decoration: rgb(189, 147, 249);
}`,
    tables: `body .spacer {
  background-color: rgb(33, 34, 44);
}

body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
  width: 662px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(25, 26, 33);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(25, 26, 33);
}

body td {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body th {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body tr {
  background-color: rgb(40, 42, 54);
}`,
    code: `body code {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body pre > code > [data-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(80, 250, 123);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(80, 250, 123);
  border-top-color: rgb(80, 250, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
}

body pre:has(> code) {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
  text-decoration-color: rgb(186, 188, 201);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 116, 135);
  border-left-color: rgb(112, 116, 135);
  border-right-color: rgb(112, 116, 135);
  border-top-color: rgb(112, 116, 135);
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
}

body .callout[data-callout="abstract"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(114, 208, 228, 0.1);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 255, 121, 198;
  background-color: rgba(255, 121, 198, 0.1);
  border-bottom-color: rgba(255, 121, 198, 0.25);
  border-left-color: rgba(255, 121, 198, 0.25);
  border-right-color: rgba(255, 121, 198, 0.25);
  border-top-color: rgba(255, 121, 198, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.1);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.1);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.1);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(255, 184, 108, 0.1);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 189, 147, 249;
  background-color: rgba(189, 147, 249, 0.1);
  border-bottom-color: rgba(189, 147, 249, 0.25);
  border-left-color: rgba(189, 147, 249, 0.25);
  border-right-color: rgba(189, 147, 249, 0.25);
  border-top-color: rgba(189, 147, 249, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 55, 235, 98;
  background-color: rgba(55, 235, 98, 0.1);
  border-bottom-color: rgba(55, 235, 98, 0.25);
  border-left-color: rgba(55, 235, 98, 0.25);
  border-right-color: rgba(55, 235, 98, 0.25);
  border-top-color: rgba(55, 235, 98, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(114, 208, 228, 0.1);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: white;
  background-color: rgb(255, 85, 85);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(255, 184, 108, 0.1);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(40, 42, 54);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 42, 54);
  border-right-color: rgb(40, 42, 54);
  border-top-color: rgb(40, 42, 54);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(40, 42, 54);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(40, 42, 54);
  border-right-color: rgb(40, 42, 54);
  border-top-color: rgb(40, 42, 54);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body a.internal.tag-link::before {
  color: rgb(189, 147, 249);
}

body h1 {
  color: rgb(248, 248, 242);
}

body h2 {
  color: rgb(248, 248, 242);
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
}

body h3 {
  color: rgb(248, 248, 242);
}

body h4 {
  color: rgb(248, 248, 242);
}

body h5 {
  color: rgb(248, 248, 242);
}

body h6 {
  color: rgb(248, 248, 242);
}

body hr {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
}`,
    scrollbars: `body .callout {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 26, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}`,
    footer: `body footer {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-left-width: 3px;
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(186, 188, 201);
}

body footer ul li a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 188, 201);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(186, 188, 201);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 188, 201);
  text-decoration: rgb(186, 188, 201);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body .darkmode svg {
  color: rgb(186, 188, 201);
  stroke: rgb(186, 188, 201);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body .breadcrumb-element p {
  color: rgb(112, 116, 135);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .metadata {
  border-bottom-color: rgb(25, 26, 33);
  border-left-color: rgb(25, 26, 33);
  border-right-color: rgb(25, 26, 33);
  border-top-color: rgb(25, 26, 33);
  color: rgb(186, 188, 201);
}

body .metadata-properties {
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body .navigation-progress {
  background-color: rgb(25, 26, 33);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body kbd {
  background-color: rgb(25, 26, 33);
  border-bottom-color: rgb(186, 188, 201);
  border-left-color: rgb(186, 188, 201);
  border-right-color: rgb(186, 188, 201);
  border-top-color: rgb(186, 188, 201);
  color: rgb(186, 188, 201);
}

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #EDE9DA;
  --background-modifier-border-focus: #DEDBCC;
  --background-modifier-border-hover: #DEDBCC;
  --background-modifier-form-field: #EDE9DA;
  --background-modifier-form-field-hover: #EDE9DA;
  --background-primary: #EDE9DA;
  --background-primary-alt: #EDE9DA;
  --background-secondary: #EDE9DA;
  --bases-cards-background: #EDE9DA;
  --bases-cards-cover-background: #EDE9DA;
  --bases-cards-shadow: 0 0 0 1px #EDE9DA;
  --bases-cards-shadow-hover: 0 0 0 1px #DEDBCC;
  --bases-embed-border-color: #EDE9DA;
  --bases-group-heading-property-color: #6C664B;
  --bases-table-border-color: #EDE9DA;
  --bases-table-cell-background-active: #EDE9DA;
  --bases-table-cell-background-disabled: #EDE9DA;
  --bases-table-cell-shadow-active: 0 0 0 2px #DEDBCC;
  --bases-table-group-background: #EDE9DA;
  --bases-table-header-background: #EDE9DA;
  --bases-table-header-color: #6C664B;
  --bases-table-summary-background: #EDE9DA;
  --blur-background: color-mix(in srgb, #EDE9DA 65%, transparent) linear-gradient(#EDE9DA, color-mix(in srgb, #EDE9DA 65%, transparent));
  --bold-color: #CB3A2A;
  --callout-bug: 255, 85, 85;
  --callout-default: 98, 114, 164;
  --callout-error: 255, 85, 85;
  --callout-example: 255, 121, 198;
  --callout-fail: 255, 85, 85;
  --callout-important: 189, 147, 249;
  --callout-info: 98, 114, 164;
  --callout-question: 255, 184, 108;
  --callout-quote: 189, 147, 249;
  --callout-success: 55, 235, 98;
  --callout-summary: 114, 208, 228;
  --callout-tip: 114, 208, 228;
  --callout-todo: white;
  --callout-warning: 255, 184, 108;
  --canvas-background: #EDE9DA;
  --canvas-card-label-color: #BCBAB3;
  --canvas-dot-pattern: #EDE9DA;
  --caret-color: #1F1F1F;
  --checkbox-border-color: #BCBAB3;
  --checkbox-border-color-hover: #6C664B;
  --checkbox-marker-color: #EDE9DA;
  --checklist-done-color: #6C664B;
  --checklist-done-decoration: none;
  --code-background: #EDE9DA;
  --code-border-color: #EDE9DA;
  --code-comment: #6C664B;
  --code-function: #14710A;
  --code-important: #A3144D;
  --code-keyword: #B16286;
  --code-normal: #6C664B;
  --code-operator: #A3144D;
  --code-property: #D65D0E;
  --code-punctuation: #6C664B;
  --code-string: #846E15;
  --code-tag: #A3144D;
  --code-value: #644AC9;
  --collapse-icon-color: #BCBAB3;
  --color-base-00: #EDE9DA;
  --color-base-10: #EDE9DA;
  --color-base-100: #1F1F1F;
  --color-base-20: #EDE9DA;
  --color-base-25: #EDE9DA;
  --color-base-30: #EDE9DA;
  --color-base-35: #DEDBCC;
  --color-base-40: #DEDBCC;
  --color-base-50: #BCBAB3;
  --color-base-60: red;
  --color-base-70: #6C664B;
  --divider-color: #EDE9DA;
  --dropdown-background: #EDE9DA;
  --dropdown-background-hover: #EDE9DA;
  --drx-border-radius: 10px;
  --drx-border-width: 2px;
  --drx-color-accent: #CB3A2A;
  --drx-color-base: #EDE9DA;
  --drx-color-blue-1: #047FB4;
  --drx-color-blue-2: #036A96;
  --drx-color-blue-3: #000000;
  --drx-color-callout-blue: 84, 179, 255;
  --drx-color-callout-comment: 98, 114, 164;
  --drx-color-callout-cyan: 114, 208, 228;
  --drx-color-callout-green: 55, 235, 98;
  --drx-color-callout-orange: 255, 184, 108;
  --drx-color-callout-pink: 255, 121, 198;
  --drx-color-callout-purple: 189, 147, 249;
  --drx-color-callout-red: 255, 85, 85;
  --drx-color-callout-yellow: 241, 250, 140;
  --drx-color-comment: #6C664B;
  --drx-color-cyan-1: #000000;
  --drx-color-cyan-2: #036A96;
  --drx-color-cyan-3: #000000;
  --drx-color-deactivate: #BCBAB3;
  --drx-color-green-1: #198D0C;
  --drx-color-green-2: #14710A;
  --drx-color-green-3: #000000;
  --drx-color-highlight: #CECCC0;
  --drx-color-important: #E1776B;
  --drx-color-orange-1: #000000;
  --drx-color-orange-2: #D65D0E;
  --drx-color-orange-3: #AF3A03;
  --drx-color-overlay: #DEDBCC;
  --drx-color-pink-1: #000000;
  --drx-color-pink-2: #B16286;
  --drx-color-pink-3: #8F3F71;
  --drx-color-purple-1: #7862D0;
  --drx-color-purple-2: #644AC9;
  --drx-color-purple-3: #000000;
  --drx-color-red-1: #BF185A;
  --drx-color-red-2: #A3144D;
  --drx-color-red-3: #000000;
  --drx-color-subtext: #6C664B;
  --drx-color-surface: #FFFBEB;
  --drx-color-text: #1F1F1F;
  --drx-color-yellow-1: #9E841A;
  --drx-color-yellow-2: #846E15;
  --drx-color-yellow-3: #000000;
  --drx-shadow-radius: 8px;
  --embed-block-shadow-hover: 0 0 0 1px #EDE9DA, inset 0 0 0 1px #EDE9DA;
  --file-header-background: #EDE9DA;
  --file-header-background-focused: #EDE9DA;
  --flair-background: #EDE9DA;
  --flair-color: #1F1F1F;
  --footnote-divider-color: #EDE9DA;
  --footnote-id-color: #6C664B;
  --footnote-id-color-no-occurrences: #BCBAB3;
  --graph-line: #DEDBCC;
  --graph-node: #6C664B;
  --graph-node-unresolved: #BCBAB3;
  --graph-text: #1F1F1F;
  --h1-line-height: 1.00em;
  --h1-size: 1.50em;
  --h1-weight: 600;
  --h2-line-height: 1.00em;
  --h2-size: 1.35em;
  --h2-weight: 600;
  --h3-line-height: 1.00em;
  --h3-size: 1.20em;
  --h3-weight: 600;
  --h4-line-height: 1.00em;
  --h4-size: 1.15em;
  --h4-weight: 500;
  --h5-line-height: 1.00em;
  --h5-size: 1.10em;
  --h5-weight: 500;
  --h6-line-height: 1.00em;
  --h6-size: 1.05em;
  --h6-weight: 500;
  --heading-formatting: #BCBAB3;
  --hr-color: #BCBAB3;
  --icon-color: #6C664B;
  --icon-color-focused: #1F1F1F;
  --icon-color-hover: #6C664B;
  --inline-title-line-height: 1.00em;
  --inline-title-size: 1.50em;
  --inline-title-weight: 600;
  --input-date-separator: #BCBAB3;
  --input-placeholder-color: #BCBAB3;
  --interactive-hover: #EDE9DA;
  --interactive-normal: #EDE9DA;
  --link-color: #CB3A2A;
  --link-color-hover: #E1776B;
  --link-external-color: #CB3A2A;
  --link-external-color-hover: #E1776B;
  --link-unresolved-color: #14710A;
  --link-unresolved-decoration-color: #A3144D;
  --link-unresolved-opacity: 0.5;
  --list-marker-color: #BCBAB3;
  --list-marker-color-hover: #6C664B;
  --menu-background: #EDE9DA;
  --menu-border-color: #DEDBCC;
  --metadata-border-color: #EDE9DA;
  --metadata-divider-color: #EDE9DA;
  --metadata-input-text-color: #1F1F1F;
  --metadata-label-text-color: #6C664B;
  --metadata-label-text-color-hover: #6C664B;
  --metadata-property-box-shadow-focus: 0 0 0 2px #DEDBCC;
  --metadata-property-box-shadow-hover: 0 0 0 1px #DEDBCC;
  --modal-background: #EDE9DA;
  --modal-border-color: #DEDBCC;
  --nav-collapse-icon-color: #BCBAB3;
  --nav-collapse-icon-color-collapsed: #BCBAB3;
  --nav-heading-color: #1F1F1F;
  --nav-heading-color-collapsed: #BCBAB3;
  --nav-heading-color-collapsed-hover: #6C664B;
  --nav-heading-color-hover: #1F1F1F;
  --nav-item-active: #CECCC0;
  --nav-item-color: #6C664B;
  --nav-item-color-active: #1F1F1F;
  --nav-item-color-hover: #1F1F1F;
  --nav-item-color-selected: #1F1F1F;
  --nav-tag-color: #BCBAB3;
  --nav-tag-color-active: #6C664B;
  --nav-tag-color-hover: #6C664B;
  --pdf-background: #EDE9DA;
  --pdf-page-background: #EDE9DA;
  --pdf-sidebar-background: #EDE9DA;
  --pill-border-color: #EDE9DA;
  --pill-border-color-hover: #DEDBCC;
  --pill-color: #6C664B;
  --pill-color-hover: #1F1F1F;
  --pill-color-remove: #BCBAB3;
  --prompt-background: #EDE9DA;
  --prompt-border-color: #DEDBCC;
  --raised-background: color-mix(in srgb, #EDE9DA 65%, transparent) linear-gradient(#EDE9DA, color-mix(in srgb, #EDE9DA 65%, transparent));
  --ribbon-background: #FFFBEB;
  --ribbon-background-collapsed: #EDE9DA;
  --search-clear-button-color: #6C664B;
  --search-icon-color: #6C664B;
  --search-result-background: #EDE9DA;
  --setting-group-heading-color: #1F1F1F;
  --setting-items-background: #EDE9DA;
  --setting-items-border-color: #EDE9DA;
  --slider-thumb-border-color: #DEDBCC;
  --slider-track-background: #EDE9DA;
  --status-bar-background: #FFFBEB;
  --status-bar-border-color: #EDE9DA;
  --status-bar-text-color: #6C664B;
  --suggestion-background: #EDE9DA;
  --tab-background-active: #EDE9DA;
  --tab-container-background: #EDE9DA;
  --tab-divider-color: #DEDBCC;
  --tab-outline-color: #EDE9DA;
  --tab-switcher-background: #EDE9DA;
  --tab-switcher-menubar-background: linear-gradient(to top, #EDE9DA, transparent);
  --tab-text-color: #BCBAB3;
  --tab-text-color-active: #6C664B;
  --tab-text-color-focused: #6C664B;
  --tab-text-color-focused-active: #6C664B;
  --tab-text-color-focused-active-current: #1F1F1F;
  --table-add-button-border-color: #EDE9DA;
  --table-border-color: #EDE9DA;
  --table-drag-handle-color: #BCBAB3;
  --table-header-background: #DEDBCC;
  --table-header-border-color: #EDE9DA;
  --table-header-color: #1F1F1F;
  --table-width: 88cqw;
  --tag-color: #CB3A2A;
  --text-faint: #BCBAB3;
  --text-muted: #6C664B;
  --text-normal: #1F1F1F;
  --text-selection: #DEDBCC;
  --titlebar-background: #EDE9DA;
  --titlebar-border-color: #EDE9DA;
  --titlebar-text-color: #6C664B;
  --titlebar-text-color-focused: #1F1F1F;
  --vault-profile-color: #1F1F1F;
  --vault-profile-color-hover: #1F1F1F;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(237, 233, 218);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body div#quartz-root {
  background-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}`,
    typography: `body .page article p > b, b {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body .page article p > em, em {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .page article p > i, i {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .page article p > strong, strong {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body .text-highlight {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body del {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: line-through rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body p {
  color: rgb(108, 102, 75);
  outline: rgb(108, 102, 75) none 0px;
  text-decoration: rgb(108, 102, 75);
  text-decoration-color: rgb(108, 102, 75);
}`,
    links: `body a.external, footer a {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: underline rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: underline rgb(203, 58, 42);
  text-decoration-color: rgb(203, 58, 42);
}

body a.internal.broken {
  color: rgb(203, 58, 42);
  outline: rgb(203, 58, 42) none 0px;
  text-decoration: underline rgb(163, 20, 77);
  text-decoration-color: rgb(163, 20, 77);
}`,
    lists: `body dd {
  color: rgb(31, 31, 31);
}

body dt {
  color: rgb(31, 31, 31);
}

body ol > li {
  color: rgb(31, 31, 31);
}

body ol.overflow {
  background-color: rgb(255, 251, 235);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body ul > li {
  color: rgb(31, 31, 31);
}

body ul.overflow {
  background-color: rgb(255, 251, 235);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(203, 58, 42);
  text-decoration: rgb(203, 58, 42);
}`,
    tables: `body .spacer {
  background-color: rgb(255, 251, 235);
}

body .table-container {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body table {
  color: rgb(31, 31, 31);
  width: 662px;
}

body td {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body th {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body tr {
  background-color: rgb(255, 251, 235);
}`,
    code: `body code {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body pre > code > [data-line] {
  border-left-color: rgb(20, 113, 10);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(20, 113, 10);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(20, 113, 10);
  border-left-color: rgb(20, 113, 10);
  border-right-color: rgb(20, 113, 10);
  border-top-color: rgb(20, 113, 10);
}

body pre > code, pre:has(> code) {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
}

body pre:has(> code) {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
}`,
    images: `body audio {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body figcaption {
  color: rgb(31, 31, 31);
}

body figure {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body img {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body video {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    embeds: `body .file-embed {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
}

body .footnotes {
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .transclude {
  border-bottom-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .transclude-inner {
  border-bottom-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
  text-decoration-color: rgb(108, 102, 75);
}

body input[type=checkbox] {
  border-bottom-color: rgb(188, 186, 179);
  border-left-color: rgb(188, 186, 179);
  border-right-color: rgb(188, 186, 179);
  border-top-color: rgb(188, 186, 179);
}

body li.task-list-item[data-task='!'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='*'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='-'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='/'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='>'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='?'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='I'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='S'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='b'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='c'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='d'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='f'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='i'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='k'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='l'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='p'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='u'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='w'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(98, 114, 164);
  border-left-color: rgb(98, 114, 164);
  border-right-color: rgb(98, 114, 164);
  border-top-color: rgb(98, 114, 164);
  gap: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout > .callout-content {
  background-color: rgb(237, 233, 218);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(255, 85, 85, 0.247);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 255, 121, 198;
  background-color: rgba(163, 20, 77, 0.31);
  border-bottom-color: rgba(255, 121, 198, 0.25);
  border-left-color: rgba(255, 121, 198, 0.25);
  border-right-color: rgba(255, 121, 198, 0.25);
  border-top-color: rgba(255, 121, 198, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 85, 85;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(255, 85, 85, 0.25);
  border-left-color: rgba(255, 85, 85, 0.25);
  border-right-color: rgba(255, 85, 85, 0.25);
  border-top-color: rgba(255, 85, 85, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 98, 114, 164;
  background-color: rgba(98, 114, 164, 0.247);
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(255, 184, 108, 0.247);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 189, 147, 249;
  background-color: rgba(100, 74, 201, 0.31);
  border-bottom-color: rgba(189, 147, 249, 0.25);
  border-left-color: rgba(189, 147, 249, 0.25);
  border-right-color: rgba(189, 147, 249, 0.25);
  border-top-color: rgba(189, 147, 249, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 55, 235, 98;
  background-color: rgba(80, 250, 123, 0.247);
  border-bottom-color: rgba(55, 235, 98, 0.25);
  border-left-color: rgba(55, 235, 98, 0.25);
  border-right-color: rgba(55, 235, 98, 0.25);
  border-top-color: rgba(55, 235, 98, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 114, 208, 228;
  background-color: rgba(3, 106, 150, 0.31);
  border-bottom-color: rgba(114, 208, 228, 0.25);
  border-left-color: rgba(114, 208, 228, 0.25);
  border-right-color: rgba(114, 208, 228, 0.25);
  border-top-color: rgba(114, 208, 228, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: white;
  background-color: rgb(163, 20, 77);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 184, 108;
  background-color: rgba(214, 93, 14, 0.31);
  border-bottom-color: rgba(255, 184, 108, 0.25);
  border-left-color: rgba(255, 184, 108, 0.25);
  border-right-color: rgba(255, 184, 108, 0.25);
  border-top-color: rgba(255, 184, 108, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(222, 219, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(222, 219, 204);
  border-right-color: rgb(222, 219, 204);
  border-top-color: rgb(222, 219, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(222, 219, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(222, 219, 204);
  border-right-color: rgb(222, 219, 204);
  border-top-color: rgb(222, 219, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

body a.internal.tag-link::before {
  color: rgb(203, 58, 42);
}

body h1 {
  color: rgb(31, 31, 31);
}

body h2 {
  color: rgb(31, 31, 31);
}

body h2.page-title, h2.page-title a {
  color: rgb(31, 31, 31);
}

body h3 {
  color: rgb(31, 31, 31);
}

body h4 {
  color: rgb(31, 31, 31);
}

body h5 {
  color: rgb(31, 31, 31);
}

body h6 {
  color: rgb(31, 31, 31);
}

body hr {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
}`,
    scrollbars: `body .callout {
  --callout-color: 98, 114, 164;
  border-bottom-color: rgba(98, 114, 164, 0.25);
  border-left-color: rgba(98, 114, 164, 0.25);
  border-right-color: rgba(98, 114, 164, 0.25);
  border-top-color: rgba(98, 114, 164, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-corner {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}

body ::-webkit-scrollbar-track {
  background: rgb(237, 233, 218) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 233, 218);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}`,
    footer: `body footer {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-left-width: 3px;
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(108, 102, 75);
}

body footer ul li a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(31, 31, 31);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 102, 75);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body li.section-li > .section .meta {
  color: rgb(108, 102, 75);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 102, 75);
  text-decoration: rgb(108, 102, 75);
}

body ul.section-ul {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body .darkmode svg {
  color: rgb(108, 102, 75);
  stroke: rgb(108, 102, 75);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body .breadcrumb-element p {
  color: rgb(188, 186, 179);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .metadata {
  border-bottom-color: rgb(237, 233, 218);
  border-left-color: rgb(237, 233, 218);
  border-right-color: rgb(237, 233, 218);
  border-top-color: rgb(237, 233, 218);
  color: rgb(108, 102, 75);
}

body .metadata-properties {
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body .navigation-progress {
  background-color: rgb(237, 233, 218);
}

body .page-header h2.page-title {
  color: rgb(31, 31, 31);
}

body abbr {
  color: rgb(31, 31, 31);
  text-decoration: underline dotted rgb(31, 31, 31);
}

body details {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body input[type=text] {
  background-color: rgb(222, 219, 204);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body kbd {
  background-color: rgb(237, 233, 218);
  border-bottom-color: rgb(108, 102, 75);
  border-left-color: rgb(108, 102, 75);
  border-right-color: rgb(108, 102, 75);
  border-top-color: rgb(108, 102, 75);
  color: rgb(108, 102, 75);
}

body progress {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body sub {
  color: rgb(31, 31, 31);
}

body summary {
  color: rgb(31, 31, 31);
}

body sup {
  color: rgb(31, 31, 31);
}`,
  },
};
