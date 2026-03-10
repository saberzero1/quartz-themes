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
  --background-modifier-border: rgba(14, 210, 247, 0.05) !important;
  --background-primary-alt: #1e2127 !important;
  --background-secondary: #15111e !important;
  --background-secondary-alt: #0a080f !important;
  --bases-cards-cover-background: #1e2127 !important;
  --bases-cards-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --bases-embed-border-color: rgba(14, 210, 247, 0.05) !important;
  --bases-table-border-color: rgba(14, 210, 247, 0.05) !important;
  --bases-table-cell-background-disabled: #1e2127 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(27, 128, 210, 0.842) !important;
  --bases-table-group-background: #1e2127 !important;
  --blockquote-border-color: rgba(27, 128, 210, 0.842) !important;
  --body-font-weight: 450 !important;
  --bodyFont: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-card-label-color: rgba(122, 162, 247, 0.8) !important;
  --caret-color: #b7b7b7 !important;
  --checkbox-border-color: rgba(122, 162, 247, 0.8) !important;
  --checkbox-color: rgba(27, 128, 210, 0.842) !important;
  --checkbox-color-hover: rgba(14, 210, 247, 0.8) !important;
  --code-background: #15111e !important;
  --code-border-color: rgba(14, 210, 247, 0.05) !important;
  --code-comment: rgba(122, 162, 247, 0.8) !important;
  --code-mono-font: 'Incosolata', 'Consolas' !important;
  --code-normal: #b7b7b7 !important;
  --codeFont: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgba(122, 162, 247, 0.8) !important;
  --collapse-icon-color-collapsed: rgba(184, 71, 255, 0.8) !important;
  --dark: #b7b7b7 !important;
  --darkgray: #b7b7b7 !important;
  --default-font: 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif !important;
  --default-font-size: 18px !important;
  --divider-color: rgba(14, 210, 247, 0.05) !important;
  --divider-color-hover: rgba(27, 128, 210, 0.842) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(14, 210, 247, 0.05), inset 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --embed-border-start: 2px solid rgba(27, 128, 210, 0.842) !important;
  --file-header-font: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #b7b7b7 !important;
  --font-interface: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgba(14, 210, 247, 0.05) !important;
  --footnote-id-color-no-occurrences: rgba(122, 162, 247, 0.8) !important;
  --graph-node-focused: rgba(184, 71, 255, 0.8) !important;
  --graph-node-unresolved: rgba(122, 162, 247, 0.8) !important;
  --graph-text: #b7b7b7 !important;
  --gray: rgba(122, 162, 247, 0.8) !important;
  --h1-size: 44px !important;
  --h1-weight: 600 !important;
  --h2-size: 36px !important;
  --h2-weight: 600 !important;
  --h3-size: 30px !important;
  --h3-weight: 550 !important;
  --h4-size: 26px !important;
  --h4-weight: 550 !important;
  --h5-size: 22px !important;
  --h5-weight: 500 !important;
  --h6-size: 20px !important;
  --h6-weight: 500 !important;
  --headerFont: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(122, 162, 247, 0.8) !important;
  --highlight: rgba(192, 205, 14, 0.8) !important;
  --hr-color: rgba(14, 210, 247, 0.05) !important;
  --icon-color-active: rgba(184, 71, 255, 0.8) !important;
  --icon-color-focused: #b7b7b7 !important;
  --inline-title-size: 44px !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgba(122, 162, 247, 0.8) !important;
  --input-placeholder-color: rgba(122, 162, 247, 0.8) !important;
  --interactive-accent: rgba(27, 128, 210, 0.842) !important;
  --interactive-accent-hover: rgba(14, 210, 247, 0.8) !important;
  --interactive-accent-rgb: #3dd7fb !important;
  --interactive-before: #5e6565 !important;
  --light: #1e2127 !important;
  --lightgray: #15111e !important;
  --link-color: rgba(184, 71, 255, 0.8) !important;
  --link-external-color: rgba(184, 71, 255, 0.8) !important;
  --link-unresolved-color: rgba(184, 71, 255, 0.8) !important;
  --list-marker-color: rgba(122, 162, 247, 0.8) !important;
  --list-marker-color-collapsed: rgba(184, 71, 255, 0.8) !important;
  --menu-background: #15111e !important;
  --metadata-border-color: rgba(14, 210, 247, 0.05) !important;
  --metadata-divider-color: rgba(14, 210, 247, 0.05) !important;
  --metadata-input-font: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #b7b7b7 !important;
  --metadata-label-font: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --nav-collapse-icon-color: rgba(122, 162, 247, 0.8) !important;
  --nav-collapse-icon-color-collapsed: rgba(122, 162, 247, 0.8) !important;
  --nav-heading-color: #b7b7b7 !important;
  --nav-heading-color-collapsed: rgba(122, 162, 247, 0.8) !important;
  --nav-heading-color-hover: #b7b7b7 !important;
  --nav-item-color-active: #b7b7b7 !important;
  --nav-item-color-highlighted: rgba(184, 71, 255, 0.8) !important;
  --nav-item-color-hover: #b7b7b7 !important;
  --nav-item-color-selected: #b7b7b7 !important;
  --nav-tag-color: rgba(122, 162, 247, 0.8) !important;
  --nightingale-blue: rgba(1, 65, 203, 1.0) !important;
  --nightingale-brown: rgba(127, 60, 0, 1.0) !important;
  --nightingale-cyan: rgba(23, 255, 221, 0.7) !important;
  --nightingale-darkblue: rgba(0, 26, 112, 1.0) !important;
  --nightingale-golden: rgba(255, 200, 0, 0.8) !important;
  --nightingale-green: rgba(15, 197, 85, 0.8) !important;
  --nightingale-orange: rgba(252, 123, 30, 0.8) !important;
  --nightingale-pink: rgba(251, 169, 245, 0.7) !important;
  --nightingale-red: rgba(203, 16, 16, 0.8) !important;
  --nightingale-skyblue: rgba(69, 170, 255, 1.0) !important;
  --nightingale-transparent-blue: rgba(69, 170, 255, 0.18) !important;
  --nightingale-transparent-darkblue: rgba(0, 26, 112, 0.2) !important;
  --nightingale-yellow: rgba(173, 144, 1, 0.8) !important;
  --pdf-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(14, 210, 247, 0.05) !important;
  --pill-border-color: rgba(14, 210, 247, 0.05) !important;
  --pill-color-hover: #b7b7b7 !important;
  --pill-color-remove: rgba(122, 162, 247, 0.8) !important;
  --pill-color-remove-hover: rgba(184, 71, 255, 0.8) !important;
  --quote-background: #1e2127 !important;
  --ribbon-background: #15111e !important;
  --secondary: rgba(184, 71, 255, 0.8) !important;
  --setting-group-heading-color: #b7b7b7 !important;
  --setting-items-background: #1e2127 !important;
  --setting-items-border-color: rgba(14, 210, 247, 0.05) !important;
  --slider-track-background: rgba(14, 210, 247, 0.05) !important;
  --status-bar-background: #15111e !important;
  --status-bar-border-color: rgba(14, 210, 247, 0.05) !important;
  --tab-container-background: #15111e !important;
  --tab-outline-color: rgba(14, 210, 247, 0.05) !important;
  --tab-switcher-background: #15111e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #15111e, transparent) !important;
  --tab-text-color: rgba(122, 162, 247, 0.8) !important;
  --tab-text-color-focused-active-current: #b7b7b7 !important;
  --tab-text-color-focused-highlighted: rgba(184, 71, 255, 0.8) !important;
  --table-add-button-border-color: rgba(14, 210, 247, 0.05) !important;
  --table-border-color: rgba(14, 210, 247, 0.05) !important;
  --table-drag-handle-background-active: rgba(27, 128, 210, 0.842) !important;
  --table-drag-handle-color: rgba(122, 162, 247, 0.8) !important;
  --table-header-border-color: rgba(14, 210, 247, 0.05) !important;
  --table-header-color: #b7b7b7 !important;
  --table-selection-border-color: rgba(27, 128, 210, 0.842) !important;
  --tag-color: rgba(184, 71, 255, 0.8) !important;
  --tag-color-hover: rgba(184, 71, 255, 0.8) !important;
  --tag-font-family: 'Microsoft Yahei', 'SimSun', 'Helvetica Neue', 'Helvetica', sans-serif !important;
  --tertiary: rgba(14, 210, 247, 0.8) !important;
  --text-accent: rgba(184, 71, 255, 0.8) !important;
  --text-dim: rgba(69, 170, 255, 0.8) !important;
  --text-faint: rgba(122, 162, 247, 0.8) !important;
  --text-highlight-bg: rgba(192, 205, 14, 0.8) !important;
  --text-normal: #b7b7b7 !important;
  --text-sub-accent: rgba(255, 40, 137, 0.8) !important;
  --text-title-1: rgba(216, 253, 7, 0.8) !important;
  --text-title-2: rgba(253, 49, 6, 0.8) !important;
  --textHighlight: rgba(192, 205, 14, 0.8) !important;
  --title-font: 'Optima LT Std', 'Microsoft Yahei', 'Noto Sans SC', sans-serif !important;
  --titleFont: '??', '??', 'Avenir LT Std', Helvetica, Arial, 'Amazon Ember', 'Rubik', Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #15111e !important;
  --titlebar-background-focused: #0a080f !important;
  --titlebar-border-color: rgba(14, 210, 247, 0.05) !important;
  --titlebar-text-color-focused: #b7b7b7 !important;
  --vault-profile-color: #b7b7b7 !important;
  --vault-profile-color-hover: #b7b7b7 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 17, 30);
  color: rgb(183, 183, 183);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: rgb(183, 183, 183);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 17, 30);
  color: rgb(183, 183, 183);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(14, 210, 247, 0.05);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 17, 30);
  border-left-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
}

html body div#quartz-root {
  color: rgb(183, 183, 183);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body .page article p > em, html em {
  color: rgba(15, 197, 85, 0.8);
  outline: rgba(15, 197, 85, 0.8) none 0px;
  text-decoration: rgba(15, 197, 85, 0.8);
  text-decoration-color: rgba(15, 197, 85, 0.8);
}

html body .page article p > i, html i {
  color: rgba(15, 197, 85, 0.8);
  outline: rgba(15, 197, 85, 0.8) none 0px;
  text-decoration: rgba(15, 197, 85, 0.8);
  text-decoration-color: rgba(15, 197, 85, 0.8);
}

html body .page article p > strong, html strong {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body .text-highlight {
  background-color: rgba(192, 205, 14, 0.8);
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body del {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: line-through rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body p {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
  text-decoration: underline rgba(184, 71, 255, 0.8);
  text-decoration-color: rgba(184, 71, 255, 0.8);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
  text-decoration: underline rgba(184, 71, 255, 0.8);
  text-decoration-color: rgba(184, 71, 255, 0.8);
}

html body a.internal.broken {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
}`,
    lists: `html body dd {
  color: rgb(183, 183, 183);
}

html body dt {
  color: rgb(183, 183, 183);
}

html body ol > li {
  color: rgb(183, 183, 183);
}

html body ol.overflow {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body ul > li {
  color: rgb(183, 183, 183);
}

html body ul.overflow {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(122, 162, 247, 0.8);
  text-decoration: rgba(122, 162, 247, 0.8);
}

html body blockquote {
  background-color: rgb(30, 33, 39);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body table {
  color: rgb(183, 183, 183);
  margin-left: 218.391px;
  margin-right: 218.391px;
}

html body td {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
}

html body th {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgba(173, 144, 1, 0.8);
}`,
    code: `html body code {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

html body pre:has(> code) {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}`,
    images: `html body audio {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body figcaption {
  color: rgb(183, 183, 183);
}

html body figure {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body img {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body video {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(30, 33, 39);
}

html body .footnotes {
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

html body .transclude {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgba(27, 128, 210, 0.843);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body .transclude-inner {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgba(27, 128, 210, 0.843);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgba(122, 162, 247, 0.8);
  border-left-color: rgba(122, 162, 247, 0.8);
  border-right-color: rgba(122, 162, 247, 0.8);
  border-top-color: rgba(122, 162, 247, 0.8);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(122, 162, 247, 0.8);
  text-decoration: line-through 3px rgba(203, 16, 16, 0.8);
  text-decoration-color: rgba(203, 16, 16, 0.8);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(183, 183, 183);
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  color: rgb(183, 183, 183);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space > * {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(183, 183, 183);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(183, 183, 183);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(183, 183, 183);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 17, 30);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(183, 183, 183);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgba(184, 71, 255, 0.8);
}

html body h1 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

html body h2 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(183, 183, 183);
}

html body h3 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

html body h4 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

html body h5 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

html body h6 {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

html body hr {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
}`,
    scrollbars: `html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    footer: `html body footer {
  background-color: rgb(21, 17, 30);
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(183, 183, 183);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body li.section-li > .section .meta {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgba(122, 162, 247, 0.8);
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
  color: rgb(183, 183, 183);
}

html body .metadata {
  border-bottom-color: rgba(14, 210, 247, 0.05);
  border-left-color: rgba(14, 210, 247, 0.05);
  border-right-color: rgba(14, 210, 247, 0.05);
  border-top-color: rgba(14, 210, 247, 0.05);
}

html body .navigation-progress {
  background-color: rgb(21, 17, 30);
}

html body .page-header h2.page-title {
  color: rgb(183, 183, 183);
  font-family: "Optima LT Std", "Microsoft Yahei", "Noto Sans SC", sans-serif;
}

html body abbr {
  color: rgb(183, 183, 183);
  text-decoration: underline dotted rgb(183, 183, 183);
}

html body details {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body input[type=text] {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(183, 183, 183);
  border-bottom-color: rgb(10, 8, 15);
  border-left-color: rgb(10, 8, 15);
  border-right-color: rgb(10, 8, 15);
  border-top-color: rgb(10, 8, 15);
  color: rgb(10, 8, 15);
  font-family: Incosolata, Consolas;
}

html body progress {
  border-bottom-color: rgb(183, 183, 183);
  border-left-color: rgb(183, 183, 183);
  border-right-color: rgb(183, 183, 183);
  border-top-color: rgb(183, 183, 183);
}

html body sub {
  color: rgb(183, 183, 183);
}

html body summary {
  color: rgb(183, 183, 183);
}

html body sup {
  color: rgb(183, 183, 183);
}`,
  },
  light: {},
};
