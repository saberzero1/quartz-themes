import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nightingale",
    modes: ["dark"],
    variations: [],
    fonts: ["inconsolata", "noto-sans"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgba(14, 210, 247, 0.05);
  --background-primary-alt: #1e2127;
  --background-secondary: #15111e;
  --background-secondary-alt: #0a080f;
  --bases-cards-cover-background: #1e2127;
  --bases-cards-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05);
  --bases-embed-border-color: rgba(14, 210, 247, 0.05);
  --bases-table-border-color: rgba(14, 210, 247, 0.05);
  --bases-table-cell-background-disabled: #1e2127;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(27, 128, 210, 0.842);
  --bases-table-group-background: #1e2127;
  --blockquote-border-color: rgba(27, 128, 210, 0.842);
  --body-font-weight: 450;
  --canvas-card-label-color: rgba(122, 162, 247, 0.8);
  --caret-color: #b7b7b7;
  --checkbox-border-color: rgba(122, 162, 247, 0.8);
  --checkbox-color: rgba(27, 128, 210, 0.842);
  --checkbox-color-hover: rgba(14, 210, 247, 0.8);
  --code-background: #15111e;
  --code-border-color: rgba(14, 210, 247, 0.05);
  --code-comment: rgba(122, 162, 247, 0.8);
  --code-mono-font: 'Incosolata', 'Consolas';
  --code-normal: #b7b7b7;
  --collapse-icon-color: rgba(122, 162, 247, 0.8);
  --collapse-icon-color-collapsed: rgba(184, 71, 255, 0.8);
  --default-font: 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif;
  --default-font-size: 18px;
  --divider-color: rgba(14, 210, 247, 0.05);
  --divider-color-hover: rgba(27, 128, 210, 0.842);
  --embed-block-shadow-hover: 0 0 0 1px rgba(14, 210, 247, 0.05), inset 0 0 0 1px rgba(14, 210, 247, 0.05);
  --embed-border-start: 2px solid rgba(27, 128, 210, 0.842);
  --file-header-font: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #b7b7b7;
  --font-interface: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgba(14, 210, 247, 0.05);
  --footnote-id-color-no-occurrences: rgba(122, 162, 247, 0.8);
  --graph-node-focused: rgba(184, 71, 255, 0.8);
  --graph-node-unresolved: rgba(122, 162, 247, 0.8);
  --graph-text: #b7b7b7;
  --h1-size: 44px;
  --h1-weight: 600;
  --h2-size: 36px;
  --h2-weight: 600;
  --h3-size: 30px;
  --h3-weight: 550;
  --h4-size: 26px;
  --h4-weight: 550;
  --h5-size: 22px;
  --h5-weight: 500;
  --h6-size: 20px;
  --h6-weight: 500;
  --heading-formatting: rgba(122, 162, 247, 0.8);
  --hr-color: rgba(14, 210, 247, 0.05);
  --icon-color-active: rgba(184, 71, 255, 0.8);
  --icon-color-focused: #b7b7b7;
  --inline-title-size: 44px;
  --inline-title-weight: 600;
  --input-date-separator: rgba(122, 162, 247, 0.8);
  --input-placeholder-color: rgba(122, 162, 247, 0.8);
  --interactive-accent: rgba(27, 128, 210, 0.842);
  --interactive-accent-hover: rgba(14, 210, 247, 0.8);
  --interactive-accent-rgb: #3dd7fb;
  --interactive-before: #5e6565;
  --link-color: rgba(184, 71, 255, 0.8);
  --link-external-color: rgba(184, 71, 255, 0.8);
  --link-unresolved-color: rgba(184, 71, 255, 0.8);
  --list-marker-color: rgba(122, 162, 247, 0.8);
  --list-marker-color-collapsed: rgba(184, 71, 255, 0.8);
  --menu-background: #15111e;
  --metadata-border-color: rgba(14, 210, 247, 0.05);
  --metadata-divider-color: rgba(14, 210, 247, 0.05);
  --metadata-input-font: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #b7b7b7;
  --metadata-label-font: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --nav-collapse-icon-color: rgba(122, 162, 247, 0.8);
  --nav-collapse-icon-color-collapsed: rgba(122, 162, 247, 0.8);
  --nav-heading-color: #b7b7b7;
  --nav-heading-color-collapsed: rgba(122, 162, 247, 0.8);
  --nav-heading-color-hover: #b7b7b7;
  --nav-item-color-active: #b7b7b7;
  --nav-item-color-highlighted: rgba(184, 71, 255, 0.8);
  --nav-item-color-hover: #b7b7b7;
  --nav-item-color-selected: #b7b7b7;
  --nav-tag-color: rgba(122, 162, 247, 0.8);
  --nightingale-blue: rgba(1, 65, 203, 1.0);
  --nightingale-brown: rgba(127, 60, 0, 1.0);
  --nightingale-cyan: rgba(23, 255, 221, 0.7);
  --nightingale-darkblue: rgba(0, 26, 112, 1.0);
  --nightingale-golden: rgba(255, 200, 0, 0.8);
  --nightingale-green: rgba(15, 197, 85, 0.8);
  --nightingale-orange: rgba(252, 123, 30, 0.8);
  --nightingale-pink: rgba(251, 169, 245, 0.7);
  --nightingale-red: rgba(203, 16, 16, 0.8);
  --nightingale-skyblue: rgba(69, 170, 255, 1.0);
  --nightingale-transparent-blue: rgba(69, 170, 255, 0.18);
  --nightingale-transparent-darkblue: rgba(0, 26, 112, 0.2);
  --nightingale-yellow: rgba(173, 144, 1, 0.8);
  --pdf-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05);
  --pill-border-color: rgba(14, 210, 247, 0.05);
  --pill-color-hover: #b7b7b7;
  --pill-color-remove: rgba(122, 162, 247, 0.8);
  --pill-color-remove-hover: rgba(184, 71, 255, 0.8);
  --quote-background: #1e2127;
  --ribbon-background: #15111e;
  --setting-group-heading-color: #b7b7b7;
  --setting-items-background: #1e2127;
  --setting-items-border-color: rgba(14, 210, 247, 0.05);
  --slider-track-background: rgba(14, 210, 247, 0.05);
  --status-bar-background: #15111e;
  --status-bar-border-color: rgba(14, 210, 247, 0.05);
  --tab-container-background: #15111e;
  --tab-outline-color: rgba(14, 210, 247, 0.05);
  --tab-switcher-background: #15111e;
  --tab-switcher-menubar-background: linear-gradient(to top, #15111e, transparent);
  --tab-text-color: rgba(122, 162, 247, 0.8);
  --tab-text-color-focused-active-current: #b7b7b7;
  --tab-text-color-focused-highlighted: rgba(184, 71, 255, 0.8);
  --table-add-button-border-color: rgba(14, 210, 247, 0.05);
  --table-border-color: rgba(14, 210, 247, 0.05);
  --table-drag-handle-background-active: rgba(27, 128, 210, 0.842);
  --table-drag-handle-color: rgba(122, 162, 247, 0.8);
  --table-header-border-color: rgba(14, 210, 247, 0.05);
  --table-header-color: #b7b7b7;
  --table-selection-border-color: rgba(27, 128, 210, 0.842);
  --tag-color: rgba(184, 71, 255, 0.8);
  --tag-color-hover: rgba(184, 71, 255, 0.8);
  --tag-font-family: 'Microsoft Yahei', 'SimSun', 'Helvetica Neue', 'Helvetica', sans-serif;
  --text-accent: rgba(184, 71, 255, 0.8);
  --text-dim: rgba(69, 170, 255, 0.8);
  --text-faint: rgba(122, 162, 247, 0.8);
  --text-highlight-bg: rgba(192, 205, 14, 0.8);
  --text-normal: #b7b7b7;
  --text-sub-accent: rgba(255, 40, 137, 0.8);
  --text-title-1: rgba(216, 253, 7, 0.8);
  --text-title-2: rgba(253, 49, 6, 0.8);
  --title-font: 'Optima LT Std', 'Microsoft Yahei', 'Noto Sans SC', sans-serif;
  --titlebar-background: #15111e;
  --titlebar-background-focused: #0a080f;
  --titlebar-border-color: rgba(14, 210, 247, 0.05);
  --titlebar-text-color-focused: #b7b7b7;
  --vault-profile-color: #b7b7b7;
  --vault-profile-color-hover: #b7b7b7;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 17, 30);
  color: rgb(183, 183, 183);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(183, 183, 183);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 17, 30);
  color: rgb(183, 183, 183);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(14, 210, 247, 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 17, 30);
  border-left-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
}

body div#quartz-root {
  color: rgb(183, 183, 183);
}`,
    typography: `body .page article p > b, b {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body .page article p > em, em {
  color: rgba(15, 197, 85, 0.8);
  outline: rgba(15, 197, 85, 0.8) none 0px;
  text-decoration: rgba(15, 197, 85, 0.8);
  text-decoration-color: rgba(15, 197, 85, 0.8);
}

body .page article p > i, i {
  color: rgba(15, 197, 85, 0.8);
  outline: rgba(15, 197, 85, 0.8) none 0px;
  text-decoration: rgba(15, 197, 85, 0.8);
  text-decoration-color: rgba(15, 197, 85, 0.8);
}

body .page article p > strong, strong {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body .text-highlight {
  background-color: rgba(192, 205, 14, 0.8);
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body del {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: line-through rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body p {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
  text-decoration: underline rgba(184, 71, 255, 0.8);
  text-decoration-color: rgba(184, 71, 255, 0.8);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
  text-decoration: underline rgba(184, 71, 255, 0.8);
  text-decoration-color: rgba(184, 71, 255, 0.8);
}

body a.internal.broken {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
}`,
    lists: `body dd {
  color: rgb(183, 183, 183);
}

body dt {
  color: rgb(183, 183, 183);
}

body ol > li {
  color: rgb(183, 183, 183);
}

body ol.overflow {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body ul > li {
  color: rgb(183, 183, 183);
}

body ul.overflow {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(122, 162, 247, 0.8);
  text-decoration: rgba(122, 162, 247, 0.8);
}

body blockquote {
  background-color: rgb(30, 33, 39);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body table {
  color: rgb(183, 183, 183);
  margin-left: 218.391px;
  margin-right: 218.391px;
}

body td {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
}

body th {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgba(173, 144, 1, 0.8);
}`,
    code: `body code {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
}

body pre > code, pre:has(> code) {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

body pre:has(> code) {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}`,
    images: `body audio {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body figcaption {
  color: rgb(183, 183, 183);
}

body figure {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body img {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body video {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    embeds: `body .file-embed {
  background-color: rgb(30, 33, 39);
}

body .footnotes {
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

body .transclude {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgba(27, 128, 210, 0.843);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body .transclude-inner {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgba(27, 128, 210, 0.843);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgba(122, 162, 247, 0.8);
  border-left-color: rgba(122, 162, 247, 0.8);
  border-right-color: rgba(122, 162, 247, 0.8);
  border-top-color: rgba(122, 162, 247, 0.8);
}

body li.task-list-item[data-task='!'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='*'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='-'] {
  color: rgba(122, 162, 247, 0.8);
  text-decoration: line-through 3px rgba(203, 16, 16, 0.8);
  text-decoration-color: rgba(203, 16, 16, 0.8);
}

body li.task-list-item[data-task='/'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='>'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='?'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='I'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='S'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='b'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='c'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='d'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='f'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='i'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='k'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='l'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='p'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='u'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body li.task-list-item[data-task='w'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(183, 183, 183);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(183, 183, 183);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(183, 183, 183);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 17, 30);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(183, 183, 183);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgba(184, 71, 255, 0.8);
}

body h1 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

body h2 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(183, 183, 183);
}

body h3 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

body h4 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

body h5 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

body h6 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

body hr {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(255, 200, 0, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 200, 0, 0.8);
  border-right-color: rgba(255, 200, 0, 0.8);
  border-top-color: rgba(255, 200, 0, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(255, 200, 0, 0.8);
}`,
    footer: `body footer {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(183, 183, 183);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body li.section-li > .section .meta {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgba(122, 162, 247, 0.8);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

body .metadata {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

body .navigation-progress {
  background-color: rgb(21, 17, 30);
}

body .page-header h2.page-title {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

body abbr {
  color: rgb(183, 183, 183);
  text-decoration: underline dotted rgb(183, 183, 183);
}

body details {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body input[type=text] {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(183, 183, 183);
  border-bottom-color: rgb(10, 8, 15);
  border-left-color: rgb(10, 8, 15);
  border-right-color: rgb(10, 8, 15);
  border-top-color: rgb(10, 8, 15);
  color: rgb(10, 8, 15);
  font-family: Incosolata, Consolas;
}

body progress {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

body sub {
  color: rgb(183, 183, 183);
}

body summary {
  color: rgb(183, 183, 183);
}

body sup {
  color: rgb(183, 183, 183);
}`,
  },
  light: {},
};
