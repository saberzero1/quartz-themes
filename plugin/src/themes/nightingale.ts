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
  --bodyFont: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --codeFont: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --file-header-font: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #b7b7b7 !important;
  --font-interface: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --metadata-input-font: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #b7b7b7 !important;
  --metadata-label-font: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: Avenir LT Std, Helvetica, Arial, Amazon Ember, Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html body .bases-table thead th {
  border-color: rgba(14, 210, 247, 0.05);
  color: rgba(173, 144, 1, 0.8);
}

html body .canvas-node {
  border-color: rgb(183, 183, 183);
}

html body .canvas-node-content {
  color: rgb(183, 183, 183);
}

html body .canvas-node-file {
  color: rgb(183, 183, 183);
}

html body .canvas-node-group {
  border-color: rgb(183, 183, 183);
}

html body .canvas-sidebar {
  background-color: rgb(21, 17, 30);
  border-color: rgb(183, 183, 183);
}

html body .note-properties {
  border-color: rgba(14, 210, 247, 0.05);
}

html body .note-properties-tags {
  color: rgba(184, 71, 255, 0.8);
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
  text-decoration-color: rgb(183, 183, 183);
}

html body .page article p > em, html em {
  color: rgba(15, 197, 85, 0.8);
  outline: rgba(15, 197, 85, 0.8) none 0px;
  text-decoration-color: rgba(15, 197, 85, 0.8);
}

html body .page article p > i, html i {
  color: rgba(15, 197, 85, 0.8);
  outline: rgba(15, 197, 85, 0.8) none 0px;
  text-decoration-color: rgba(15, 197, 85, 0.8);
}

html body .page article p > strong, html strong {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration-color: rgb(183, 183, 183);
}

html body .text-highlight {
  background-color: rgba(192, 205, 14, 0.8);
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration-color: rgb(183, 183, 183);
}

html body del {
  color: rgb(183, 183, 183);
  outline: rgb(183, 183, 183) none 0px;
  text-decoration-color: rgb(183, 183, 183);
}

html body h1.article-title {
  color: rgb(183, 183, 183);
  font-size: 16px;
  font-weight: 600;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgba(122, 162, 247, 0.8);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(27, 128, 210, 0.843);
  border-color: rgba(27, 128, 210, 0.843);
}

html body p {
  font-family: "??", "??", "Avenir LT Std", Helvetica, Arial, "Amazon Ember", Rubik, Roboto, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
  text-decoration-color: rgba(184, 71, 255, 0.8);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgba(184, 71, 255, 0.8);
  outline: rgba(184, 71, 255, 0.8) none 0px;
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
  border-left-color: rgb(183, 183, 183);
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
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(122, 162, 247, 0.8);
  text-decoration: line-through 3px rgba(203, 16, 16, 0.8);
  text-decoration-color: rgba(203, 16, 16, 0.8);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(183, 183, 183);
  text-decoration-color: rgb(183, 183, 183);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgba(203, 16, 16, 0.8);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgba(192, 205, 14, 0.8);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgba(252, 123, 30, 0.8);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgba(23, 255, 221, 0.7);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgba(255, 200, 0, 0.8);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgba(15, 197, 85, 0.8);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgba(69, 170, 255, 0.8);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgba(184, 71, 255, 0.8);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  color: rgba(252, 123, 30, 0.8);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  color: rgba(173, 144, 1, 0.8);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  color: rgba(15, 197, 85, 0.8);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  color: rgba(23, 255, 221, 0.7);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="B"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgba(252, 123, 30, 0.8);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgba(252, 123, 30, 0.8);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgba(69, 170, 255, 0.8);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgba(192, 205, 14, 0.8);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(69, 170, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgba(255, 200, 0, 0.8);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgba(255, 200, 0, 0.8);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgba(15, 197, 85, 0.8);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath d='M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgba(255, 40, 137, 0.8);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-16 w-16' viewBox='0 0 16 16' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  color: rgb(251, 70, 76);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar-thumb {
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
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(183, 183, 183);
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
}

html body ul.tags > li {
  color: rgba(184, 71, 255, 0.8);
}`,
  },
  light: {},
};
