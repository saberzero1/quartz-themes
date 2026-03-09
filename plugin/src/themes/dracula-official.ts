import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dracula-official",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --accent-h: 135;
  --accent-l: 65%;
  --accent-s: 94%;
  --background-modifier-active-hover: rgba(82, 250, 124, 0.1);
  --background-primary: #282a36;
  --background-primary-alt: #44475a;
  --background-secondary: #20212B;
  --background-secondary-alt: #282a36;
  --bases-cards-background: #282a36;
  --bases-cards-cover-background: #44475a;
  --bases-group-heading-property-color: #bababa;
  --bases-table-cell-background-active: #282a36;
  --bases-table-cell-background-disabled: #44475a;
  --bases-table-cell-background-selected: rgba(82, 250, 124, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #50fa7b;
  --bases-table-group-background: #44475a;
  --bases-table-header-background: #282a36;
  --bases-table-header-color: #bababa;
  --bases-table-summary-background: #282a36;
  --blockquote-border: #b294bb;
  --blockquote-border-color: #50fa7b;
  --canvas-background: #282a36;
  --canvas-color-1: 255,  85,  85;
  --canvas-color-2: 255, 184, 108;
  --canvas-color-3: 241, 250, 140;
  --canvas-color-4: 82, 250, 124;
  --canvas-color-5: 139, 233, 253;
  --canvas-color-6: 189, 147, 244;
  --caret-color: #f8f8f2;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #50fa7b;
  --checkbox-color-hover: rgb(62, 249, 109);
  --checkbox-marker-color: #282a36;
  --checklist-done-color: #bababa;
  --code-background: #20212B;
  --code-normal: #F8F8F2;
  --code-punctuation: #bababa;
  --collapse-icon-color-collapsed: rgb(62, 249, 109);
  --color-accent: rgb(82, 250, 124);
  --color-accent-1: rgb(62, 249, 109);
  --color-accent-2: rgb(102, 250, 139);
  --color-accent-hsl: 135, 94%, 65%;
  --color-base-70: #bababa;
  --color-scheme: dark;
  --divider-color-hover: #50fa7b;
  --dracula-Comment: #6272A4;
  --dracula-definition: #50FA7B;
  --dracula-foreground: #F8F8F2;
  --dracula-function: #8BE9FD;
  --dracula-keyword: #FF79C6;
  --dracula-number: #BD93F9;
  --dracula-string: #F1FA8C;
  --dracula-variable: #F8F8F2;
  --embed-border-start: 2px solid #50fa7b;
  --file-header-background: #282a36;
  --file-header-background-focused: #282a36;
  --flair-color: #f8f8f2;
  --footnote-id-color: #bababa;
  --graph-node: #bababa;
  --graph-node-focused: rgb(62, 249, 109);
  --graph-text: #f8f8f2;
  --icon-color: #bababa;
  --icon-color-active: rgb(62, 249, 109);
  --icon-color-focused: #f8f8f2;
  --icon-color-hover: #bababa;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16), 0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --interactive-accent: #50fa7b;
  --interactive-accent-hover: rgb(62, 249, 109);
  --interactive-accent-hsl: 135, 94%, 65%;
  --interactive-accent-rgb: #f1fa8c;
  --link-color: rgb(62, 249, 109);
  --link-color-hover: rgb(102, 250, 139);
  --link-external-color: rgb(62, 249, 109);
  --link-external-color-hover: rgb(102, 250, 139);
  --link-unresolved-color: rgb(62, 249, 109);
  --link-unresolved-decoration-color: rgba(82, 250, 124, 0.3);
  --list-marker-color-collapsed: rgb(62, 249, 109);
  --list-marker-color-hover: #bababa;
  --markup-code: #ffb86c;
  --menu-background: #20212B;
  --metadata-input-text-color: #f8f8f2;
  --metadata-label-text-color: #bababa;
  --metadata-label-text-color-hover: #bababa;
  --modal-background: #282a36;
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-collapsed-hover: #bababa;
  --nav-heading-color-hover: #f8f8f2;
  --nav-item-background-selected: rgba(82, 250, 124, 0.15);
  --nav-item-color: #bababa;
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-highlighted: rgb(62, 249, 109);
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --nav-tag-color-active: #bababa;
  --nav-tag-color-hover: #bababa;
  --pdf-background: #282a36;
  --pdf-page-background: #282a36;
  --pdf-sidebar-background: #282a36;
  --pill-color: #bababa;
  --pill-color-hover: #f8f8f2;
  --pill-color-remove-hover: rgb(62, 249, 109);
  --prompt-background: #282a36;
  --ribbon-background: #20212B;
  --ribbon-background-collapsed: #282a36;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #282a36;
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: #44475a;
  --status-bar-background: #20212B;
  --status-bar-text-color: #bababa;
  --suggestion-background: #282a36;
  --tab-background-active: #282a36;
  --tab-container-background: #20212B;
  --tab-switcher-background: #20212B;
  --tab-switcher-menubar-background: linear-gradient(to top, #20212B, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(82, 250, 124);
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #bababa;
  --tab-text-color-focused-active-current: #f8f8f2;
  --tab-text-color-focused-highlighted: rgb(62, 249, 109);
  --table-drag-handle-background-active: #50fa7b;
  --table-drag-handle-color-active: #282a36;
  --table-header-color: #f8f8f2;
  --table-selection: rgba(82, 250, 124, 0.1);
  --table-selection-border-color: #50fa7b;
  --tag-background: rgba(82, 250, 124, 0.1);
  --tag-background-hover: rgba(82, 250, 124, 0.2);
  --tag-border-color: rgba(82, 250, 124, 0.15);
  --tag-border-color-hover: rgba(82, 250, 124, 0.15);
  --tag-color: rgb(62, 249, 109);
  --tag-color-hover: rgb(62, 249, 109);
  --text-a: #ff79c6;
  --text-a-hover: #ff79c0;
  --text-accent: rgb(62, 249, 109);
  --text-accent-hover: rgb(102, 250, 139);
  --text-link: rgb(62, 249, 109);
  --text-mark: #f1fa8c;
  --text-muted: #bababa;
  --text-normal: #f8f8f2;
  --text-on-accent: #282a36;
  --text-selection: rgba(82, 250, 124, 0.25);
  --text-tag: #50fa7b;
  --text-title-h1: #bd93f9;
  --text-title-h2: #ffb86c;
  --text-title-h3: #50fa7b;
  --text-title-h4: #ff5555;
  --text-title-h5: #f1fa8c;
  --text-title-h6: #bd93f4;
  --titlebar-background: #20212B;
  --titlebar-background-focused: #20212B;
  --titlebar-text-color: #bababa;
  --titlebar-text-color-focused: #f8f8f2;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .page article p > em, em {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .page article p > i, i {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .page article p > strong, strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
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
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
}

body td {
  border-bottom-color: rgb(68, 71, 90);
  border-left-color: rgb(68, 71, 90);
  border-right-color: rgb(68, 71, 90);
  border-top-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

body th {
  border-bottom-color: rgb(68, 71, 90);
  border-left-color: rgb(68, 71, 90);
  border-right-color: rgb(68, 71, 90);
  border-top-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

body thead {
  border-bottom-color: rgb(68, 71, 90);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  border-bottom-color: rgb(68, 71, 90);
}`,
    code: `body code {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 33, 43);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 33, 43);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(32, 33, 43);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  padding-left: 8px;
  padding-right: 4px;
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
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
    search: `body .search > .search-button {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
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
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 33, 43);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(178, 148, 187);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
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
  color: rgb(189, 147, 249);
}

body h2 {
  color: rgb(255, 184, 108);
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
}

body h3 {
  color: rgb(80, 250, 123);
}

body h4 {
  color: rgb(255, 85, 85);
}

body h5 {
  color: rgb(241, 250, 140);
}

body h6 {
  color: rgb(189, 147, 244);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
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
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    footer: `body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(186, 186, 186);
}

body footer ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
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
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
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
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
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
  background-color: rgb(40, 42, 54);
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
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body kbd {
  background-color: rgb(32, 33, 43);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
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
  light: {},
};
