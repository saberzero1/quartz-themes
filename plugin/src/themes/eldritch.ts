import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "eldritch", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 135;
  --accent-l: 65%;
  --accent-s: 94%;
  --background-modifier-active-hover: rgba(82, 250, 124, 0.1);
  --background-primary: #212337;
  --background-primary-alt: #323449;
  --background-secondary: rgb(29, 33, 40);
  --background-secondary-alt: rgb(44, 46, 57);
  --bases-cards-background: #212337;
  --bases-cards-cover-background: #323449;
  --bases-group-heading-property-color: #bababa;
  --bases-table-cell-background-active: #212337;
  --bases-table-cell-background-disabled: #323449;
  --bases-table-cell-background-selected: rgba(82, 250, 124, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #37f499;
  --bases-table-group-background: #323449;
  --bases-table-header-background: #212337;
  --bases-table-header-color: #bababa;
  --bases-table-summary-background: #212337;
  --blockquote-border: #7081d0;
  --blockquote-border-color: #37f499;
  --canvas-background: #212337;
  --canvas-color-1: 255, 85, 85;
  --canvas-color-2: 255, 184, 108;
  --canvas-color-3: 241, 250, 140;
  --canvas-color-4: 82, 250, 124;
  --canvas-color-5: 139, 233, 253;
  --canvas-color-6: 189, 147, 244;
  --caret-color: #ebfafa;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #37f499;
  --checkbox-color-hover: rgb(62, 249, 109);
  --checkbox-marker-color: #212337;
  --checklist-done-color: #bababa;
  --code-background: #282a36;
  --code-normal: #ebfafa;
  --code-punctuation: #bababa;
  --collapse-icon-color-collapsed: rgb(62, 249, 109);
  --color-accent: rgb(82, 250, 124);
  --color-accent-1: rgb(62, 249, 109);
  --color-accent-2: rgb(102, 250, 139);
  --color-accent-hsl: 135, 94%, 65%;
  --color-base-70: #bababa;
  --color-scheme: dark;
  --divider-color-hover: #37f499;
  --eldritch-Comment: #7081d0;
  --eldritch-definition: #37f499;
  --eldritch-foreground: #ebfafa;
  --eldritch-function: #a48cf2;
  --eldritch-keyword: #ff79c6;
  --eldritch-number: #04d1f9;
  --eldritch-string: #f1fc79;
  --eldritch-variable: #ebfafa;
  --embed-border-start: 2px solid #37f499;
  --file-header-background: #212337;
  --file-header-background-focused: #212337;
  --flair-color: #ebfafa;
  --footnote-id-color: #bababa;
  --graph-node: #bababa;
  --graph-node-focused: rgb(62, 249, 109);
  --graph-text: #ebfafa;
  --icon-color: #bababa;
  --icon-color-active: rgb(62, 249, 109);
  --icon-color-focused: #ebfafa;
  --icon-color-hover: #bababa;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
		0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
		0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
		0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
		0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --interactive-accent: #37f499;
  --interactive-accent-hover: rgb(62, 249, 109);
  --interactive-accent-hsl: 135, 94%, 65%;
  --interactive-accent-rgb: #f1fc79;
  --link-color: rgb(62, 249, 109);
  --link-color-hover: rgb(102, 250, 139);
  --link-external-color: rgb(62, 249, 109);
  --link-external-color-hover: rgb(102, 250, 139);
  --link-unresolved-color: rgb(62, 249, 109);
  --link-unresolved-decoration-color: rgba(82, 250, 124, 0.3);
  --list-marker-color-collapsed: rgb(62, 249, 109);
  --list-marker-color-hover: #bababa;
  --markup-code: #f7c67f;
  --menu-background: rgb(29, 33, 40);
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-input-text-color: #ebfafa;
  --metadata-label-text-color: #bababa;
  --metadata-label-text-color-hover: #bababa;
  --modal-background: #212337;
  --nav-heading-color: #ebfafa;
  --nav-heading-color-collapsed-hover: #bababa;
  --nav-heading-color-hover: #ebfafa;
  --nav-item-background-selected: rgba(82, 250, 124, 0.15);
  --nav-item-color: #bababa;
  --nav-item-color-active: #ebfafa;
  --nav-item-color-highlighted: rgb(62, 249, 109);
  --nav-item-color-hover: #ebfafa;
  --nav-item-color-selected: #ebfafa;
  --nav-tag-color-active: #bababa;
  --nav-tag-color-hover: #bababa;
  --pdf-background: #212337;
  --pdf-page-background: #212337;
  --pdf-sidebar-background: #212337;
  --pill-color: #bababa;
  --pill-color-hover: #ebfafa;
  --pill-color-remove-hover: rgb(62, 249, 109);
  --prompt-background: #212337;
  --ribbon-background: rgb(29, 33, 40);
  --ribbon-background-collapsed: #212337;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #212337;
  --setting-group-heading-color: #ebfafa;
  --setting-items-background: #323449;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --status-bar-background: rgb(29, 33, 40);
  --status-bar-text-color: #bababa;
  --suggestion-background: #212337;
  --tab-background-active: #212337;
  --tab-container-background: rgb(29, 33, 40);
  --tab-switcher-background: rgb(29, 33, 40);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 33, 40), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(82, 250, 124);
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #bababa;
  --tab-text-color-focused-active-current: #ebfafa;
  --tab-text-color-focused-highlighted: rgb(62, 249, 109);
  --table-drag-handle-background-active: #37f499;
  --table-drag-handle-color-active: #323449;
  --table-header-color: #ebfafa;
  --table-selection: rgba(82, 250, 124, 0.1);
  --table-selection-border-color: #37f499;
  --tag-background: rgba(82, 250, 124, 0.1);
  --tag-background-hover: rgba(82, 250, 124, 0.2);
  --tag-border-color: rgba(82, 250, 124, 0.15);
  --tag-border-color-hover: rgba(82, 250, 124, 0.15);
  --tag-color: rgb(62, 249, 109);
  --tag-color-hover: rgb(62, 249, 109);
  --text-a: #f265b5;
  --text-a-hover: #f265b5;
  --text-accent: rgb(62, 249, 109);
  --text-accent-hover: rgb(102, 250, 139);
  --text-link: rgb(62, 249, 109);
  --text-mark: #f1fc79;
  --text-muted: #bababa;
  --text-normal: #ebfafa;
  --text-on-accent: #323449;
  --text-selection: rgba(82, 250, 124, 0.25);
  --text-tag: #37f499;
  --text-title-h1: #37f499;
  --text-title-h2: #04d1f9;
  --text-title-h3: #a48cf2;
  --text-title-h4: #f16c75;
  --text-title-h5: #f1fc79;
  --text-title-h6: #f265b5;
  --titlebar-background: rgb(29, 33, 40);
  --titlebar-background-focused: rgb(44, 46, 57);
  --titlebar-text-color: #bababa;
  --titlebar-text-color-focused: #ebfafa;
  --vault-profile-color: #ebfafa;
  --vault-profile-color-hover: #ebfafa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 33, 40);
  color: rgb(235, 250, 250);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 35, 55);
  color: rgb(235, 250, 250);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 33, 40);
  color: rgb(235, 250, 250);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 33, 40);
  color: rgb(235, 250, 250);
}

body div#quartz-root {
  background-color: rgb(33, 35, 55);
  color: rgb(235, 250, 250);
}`,
    typography: `body .page article p > b, b {
  color: rgb(247, 198, 127);
  outline: rgb(247, 198, 127) none 0px;
  text-decoration: rgb(247, 198, 127);
  text-decoration-color: rgb(247, 198, 127);
}

body .page article p > em, em {
  color: rgb(55, 244, 153);
  outline: rgb(55, 244, 153) none 0px;
  text-decoration: rgb(55, 244, 153);
  text-decoration-color: rgb(55, 244, 153);
}

body .page article p > i, i {
  color: rgb(55, 244, 153);
  outline: rgb(55, 244, 153) none 0px;
  text-decoration: rgb(55, 244, 153);
  text-decoration-color: rgb(55, 244, 153);
}

body .page article p > strong, strong {
  color: rgb(247, 198, 127);
  outline: rgb(247, 198, 127) none 0px;
  text-decoration: rgb(247, 198, 127);
  text-decoration-color: rgb(247, 198, 127);
}

body .text-highlight {
  color: rgb(235, 250, 250);
  outline: rgb(235, 250, 250) none 0px;
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body del {
  color: rgb(235, 250, 250);
  outline: rgb(235, 250, 250) none 0px;
  text-decoration: line-through rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body p {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}`,
    links: `body a.external, footer a {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgb(63, 249, 110);
  text-decoration-color: rgb(63, 249, 110);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgb(63, 249, 110);
  text-decoration-color: rgb(63, 249, 110);
}

body a.internal.broken {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgba(82, 250, 124, 0.3);
  text-decoration-color: rgba(82, 250, 124, 0.3);
}`,
    lists: `body dd {
  color: rgb(235, 250, 250);
}

body dt {
  color: rgb(235, 250, 250);
}

body ol > li {
  color: rgb(235, 250, 250);
}

body ol.overflow {
  background-color: rgb(33, 35, 55);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body ul > li {
  color: rgb(235, 250, 250);
}

body ul.overflow {
  background-color: rgb(33, 35, 55);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body table {
  color: rgb(235, 250, 250);
}

body td {
  border-bottom-color: rgb(50, 52, 73);
  border-left-color: rgb(50, 52, 73);
  border-right-color: rgb(50, 52, 73);
  border-top-color: rgb(50, 52, 73);
  color: rgb(235, 250, 250);
}

body th {
  border-bottom-color: rgb(50, 52, 73);
  border-left-color: rgb(50, 52, 73);
  border-right-color: rgb(50, 52, 73);
  border-top-color: rgb(50, 52, 73);
  color: rgb(235, 250, 250);
}

body thead {
  border-bottom-color: rgb(50, 52, 73);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  border-bottom-color: rgb(50, 52, 73);
}`,
    code: `body code {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 54);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 54);
  color: rgb(235, 250, 250);
}

body pre > code, pre:has(> code) {
  background-color: rgb(40, 42, 54);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(40, 42, 54);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body figcaption {
  color: rgb(235, 250, 250);
}

body figure {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body img {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body video {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}`,
    embeds: `body .file-embed {
  background-color: rgb(50, 52, 73);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .footnotes {
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

body .transclude {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(55, 244, 153);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  padding-left: 8px;
  padding-right: 4px;
}

body .transclude-inner {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(55, 244, 153);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  padding-left: 8px;
  padding-right: 4px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 186, 186);
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='*'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='-'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='/'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='>'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='?'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='I'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='S'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='b'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='c'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='d'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='f'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='i'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='k'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='l'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='p'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='u'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body li.task-list-item[data-task='w'] {
  color: rgb(235, 250, 250);
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}`,
    search: `body .search > .search-button {
  color: rgb(235, 250, 250);
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 35, 55);
}

body .search > .search-container > .search-space > * {
  color: rgb(235, 250, 250);
  outline: rgb(235, 250, 250) none 0px;
  text-decoration: rgb(235, 250, 250);
  text-decoration-color: rgb(235, 250, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 250, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(235, 250, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(112, 129, 208);
  color: rgb(235, 250, 250);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 33, 40);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(112, 129, 208);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(112, 129, 208);
  color: rgb(235, 250, 250);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(63, 249, 110);
}

body h1 {
  color: rgb(55, 244, 153);
}

body h2 {
  color: rgb(4, 209, 249);
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 250, 250);
}

body h3 {
  color: rgb(164, 140, 242);
}

body h4 {
  color: rgb(241, 108, 117);
}

body h5 {
  color: rgb(241, 252, 121);
}

body h6 {
  color: rgb(242, 101, 181);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 35, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 35, 55);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    footer: `body footer {
  background-color: rgb(44, 46, 57);
  color: rgb(186, 186, 186);
}

body footer ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(235, 250, 250);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body ul.section-ul {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

body .metadata {
  color: rgb(186, 186, 186);
}

body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .navigation-progress {
  background-color: rgb(44, 46, 57);
}

body .page-header h2.page-title {
  color: rgb(235, 250, 250);
}

body abbr {
  color: rgb(235, 250, 250);
  text-decoration: underline dotted rgb(235, 250, 250);
}

body details {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body input[type=text] {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
  color: rgb(235, 250, 250);
}

body progress {
  border-bottom-color: rgb(235, 250, 250);
  border-left-color: rgb(235, 250, 250);
  border-right-color: rgb(235, 250, 250);
  border-top-color: rgb(235, 250, 250);
}

body sub {
  color: rgb(235, 250, 250);
}

body summary {
  color: rgb(235, 250, 250);
}

body sup {
  color: rgb(235, 250, 250);
}`,
  },
  light: {},
};
