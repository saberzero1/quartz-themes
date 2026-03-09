import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cardstock",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --alternate-lights: #988982;
  --background-modifier-active-hover: #38312e;
  --background-modifier-border: #38312e;
  --background-modifier-border-focus: #c43131;
  --background-modifier-border-hover: #c43131;
  --background-modifier-error: #c95454;
  --background-modifier-error-hover: #c43131;
  --background-modifier-error-rgb: 201, 84, 84;
  --background-modifier-form-field: #2f2a27;
  --background-modifier-form-field-hover: #2f2a27;
  --background-modifier-hover: #2f2a27;
  --background-modifier-message: #c95454;
  --background-modifier-success: #c95454;
  --background-modifier-success-rgb: 201, 84, 84;
  --background-primary: #2f2a27;
  --background-primary-alt: #38312e;
  --background-secondary: #2f2a27;
  --background-secondary-alt: #38312e;
  --bases-cards-background: #2f2a27;
  --bases-cards-cover-background: #38312e;
  --bases-cards-shadow: 0 0 0 1px #38312e;
  --bases-cards-shadow-hover: 0 0 0 1px #c43131;
  --bases-embed-border-color: #38312e;
  --bases-group-heading-property-color: #f0eae2;
  --bases-table-border-color: #38312e;
  --bases-table-cell-background-active: #2f2a27;
  --bases-table-cell-background-disabled: #38312e;
  --bases-table-cell-shadow-active: 0 0 0 2px #c43131;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c95454;
  --bases-table-group-background: #38312e;
  --bases-table-header-background: #2f2a27;
  --bases-table-header-background-hover: #2f2a27;
  --bases-table-header-color: #f0eae2;
  --bases-table-summary-background: #2f2a27;
  --bases-table-summary-background-hover: #2f2a27;
  --beige: #f0eae2;
  --blockquote-border-color: #c95454;
  --blur-background: color-mix(in srgb, #473e3a 65%, transparent) linear-gradient(#473e3a, color-mix(in srgb, #473e3a 65%, transparent));
  --callout-blend-mode: normal;
  --canvas-background: #2f2a27;
  --canvas-card-label-color: #949494;
  --caret-color: #ffffff;
  --checkbox-border-color: #949494;
  --checkbox-border-color-hover: #f0eae2;
  --checkbox-color: #c95454;
  --checkbox-color-hover: #c95454;
  --checkbox-marker-color: #2f2a27;
  --checklist-done-color: #f0eae2;
  --code-background: #38312e;
  --code-border-color: #38312e;
  --code-bracket-background: #2f2a27;
  --code-comment: #949494;
  --code-normal: #ffffff;
  --code-punctuation: #f0eae2;
  --collapse-icon-color: #949494;
  --collapse-icon-color-collapsed: #c95454;
  --dark-alternate: #988982;
  --dark-beige: #e6dbcc;
  --dark-bg: #2f2a27;
  --dark-light-text: #473e3a;
  --dark-lightness: #bbb1ac;
  --dark-secondary: #38312e;
  --darky-dark: #2f2a27;
  --divider-color: #38312e;
  --divider-color-hover: #c95454;
  --divider-vertical-height: calc(100% - 90px);
  --dropdown-background: #473e3a;
  --dropdown-background-hover: #38312e;
  --embed-block-shadow-hover: 0 0 0 1px #38312e, inset 0 0 0 1px #38312e;
  --embed-border-start: 2px solid #c95454;
  --file-header-background: #2f2a27;
  --file-header-background-focused: #2f2a27;
  --flair-background: #473e3a;
  --flair-color: #ffffff;
  --foldgutter-width: 1.8rem;
  --font-headings: "Source Serif Pro", "Source Serif 4", "Source Serif",
		"Rockwell", "New York", serif;
  --font-mermaid: "DM Sans", "Avenir Next", "Avenir", sans-serif;
  --font-monospace: MonoLisa, "Source Code Pro", monospace;
  --font-text: "DM Sans", "Avenir Next", "Avenir", sans-serif;
  --footnote-divider-color: #38312e;
  --footnote-id-color: #f0eae2;
  --footnote-id-color-no-occurrences: #949494;
  --footnote-input-background-active: #2f2a27;
  --graph-node: #f0eae2;
  --graph-node-focused: #c95454;
  --graph-node-unresolved: #949494;
  --graph-text: #ffffff;
  --green: #06b43c;
  --h1: 2.5em;
  --h2: 2em;
  --handle-icon: #ffffff;
  --heading-formatting: #949494;
  --heading-text: #000000;
  --highlight: #f3e118;
  --highlight-dark: #756b13;
  --highlight-mix-blend-mode: darken;
  --hr-color: #38312e;
  --icon-color: #f0eae2;
  --icon-color-active: #c95454;
  --icon-color-focused: #ffffff;
  --icon-color-hover: #f0eae2;
  --inline-title-color: #f0eae2;
  --inline-title-size: 0.8rem;
  --input-date-separator: #949494;
  --input-placeholder-color: #949494;
  --interactive-accent: #c95454;
  --interactive-accent-hover: #c95454;
  --interactive-accent-hsl: 0, 52, 55.9;
  --interactive-hover: #38312e;
  --interactive-normal: #473e3a;
  --light-beige: #f8f5f1;
  --light-text: #949494;
  --link-color: #c95454;
  --link-color-hover: #c43131;
  --link-external-color: #c95454;
  --link-external-color-hover: #c43131;
  --link-unresolved-color: #c95454;
  --link-unresolved-decoration-color: hsla(0, 52, 55.9, 0.3);
  --list-marker-color: #949494;
  --list-marker-color-collapsed: #c95454;
  --list-marker-color-hover: #f0eae2;
  --main-bg: #ffffff;
  --menu-background: #2f2a27;
  --menu-border-color: #c43131;
  --metadata-border-color: #38312e;
  --metadata-divider-color: #38312e;
  --metadata-input-background-active: #2f2a27;
  --metadata-input-text-color: #ffffff;
  --metadata-label-background-active: #2f2a27;
  --metadata-label-text-color: #f0eae2;
  --metadata-label-text-color-hover: #f0eae2;
  --metadata-property-background-active: #2f2a27;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c43131;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c43131;
  --modal-background: #2f2a27;
  --modal-buttons: #ffffff;
  --nav-collapse-icon-color: #949494;
  --nav-collapse-icon-color-collapsed: #949494;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed: #949494;
  --nav-heading-color-collapsed-hover: #f0eae2;
  --nav-heading-color-hover: #ffffff;
  --nav-item-background-active: #c95454;
  --nav-item-background-hover: #2f2a27;
  --nav-item-background-selected: #c95454;
  --nav-item-color: #f0eae2;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #ffffff;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #ffffff;
  --nav-tag-color: #949494;
  --nav-tag-color-active: #f0eae2;
  --nav-tag-color-hover: #f0eae2;
  --pdf-background: #2f2a27;
  --pdf-page-background: #2f2a27;
  --pdf-shadow: 0 0 0 1px #38312e;
  --pdf-sidebar-background: #2f2a27;
  --pdf-thumbnail-shadow: 0 0 0 1px #38312e;
  --pill-border-color: #38312e;
  --pill-border-color-hover: #c43131;
  --pill-color: #f0eae2;
  --pill-color-hover: #ffffff;
  --pill-color-remove: #949494;
  --pill-color-remove-hover: #c95454;
  --pre-bg: #38312e;
  --prompt-background: #2f2a27;
  --raised-background: color-mix(in srgb, #473e3a 65%, transparent) linear-gradient(#473e3a, color-mix(in srgb, #473e3a 65%, transparent));
  --red: #c95454;
  --red-deep: #c43131;
  --red-hsl: 0, 52, 55.9;
  --red-rgb: 201, 84, 84;
  --ribbon-background: #2f2a27;
  --ribbon-background-collapsed: #38312e;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #f0eae2;
  --search-icon-color: #f0eae2;
  --search-result-background: #2f2a27;
  --setting-group-heading-color: #ffffff;
  --setting-items-background: #38312e;
  --setting-items-border-color: #38312e;
  --slider-thumb-border-color: #c43131;
  --slider-track-background: #38312e;
  --status-bar-background: #2f2a27;
  --status-bar-border-color: #38312e;
  --status-bar-text-color: #f0eae2;
  --suggestion-background: #2f2a27;
  --tab-background-active: transparent;
  --tab-container-background: #2f2a27;
  --tab-curve: 10px;
  --tab-divider-color: #38312e;
  --tab-max-width: 350px;
  --tab-outline-color: #38312e;
  --tab-radius: 10px;
  --tab-radius-active: 10px 10px 0 0;
  --tab-switcher-background: #2f2a27;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2a27, transparent);
  --tab-text-color: #949494;
  --tab-text-color-active: #f0eae2;
  --tab-text-color-focused: #f0eae2;
  --tab-text-color-focused-active: #f0eae2;
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: #c95454;
  --table-add-button-border-color: #38312e;
  --table-border-color: #38312e;
  --table-drag-handle-background-active: #c95454;
  --table-drag-handle-color: #949494;
  --table-header-border-color: #38312e;
  --table-header-color: #ffffff;
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #c95454;
  --tag-background: rgba(201, 84, 84, 0.1);
  --tag-background-hover: hsla(0, 52, 55.9, 0.2);
  --tag-border-color: hsla(0, 52, 55.9, 0.15);
  --tag-border-color-hover: hsla(0, 52, 55.9, 0.15);
  --tag-color: #c95454;
  --tag-color-hover: #c95454;
  --text: #2d2c2c;
  --text-accent: #c95454;
  --text-accent-hover: #c43131;
  --text-error: #c95454;
  --text-faint: #949494;
  --text-highlight-bg: #756b13;
  --text-muted: #f0eae2;
  --text-normal: #ffffff;
  --text-selection: #171413;
  --text-success: #ccff00;
  --titlebar-background: #2f2a27;
  --titlebar-background-focused: #2f2a27;
  --titlebar-border-color: #38312e;
  --titlebar-text-color: #f0eae2;
  --titlebar-text-color-focused: #ffffff;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 42, 39);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 42, 39);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 49, 46);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 42, 39);
  border-left-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(47, 42, 39);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgb(117, 107, 19);
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(240, 234, 226);
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}`,
    links: `body a.external, footer a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration: underline rgb(201, 84, 84);
  text-decoration-color: rgb(201, 84, 84);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration: underline rgb(201, 84, 84);
  text-decoration-color: rgb(201, 84, 84);
}

body a.internal.broken {
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration: underline rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(47, 42, 39);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(47, 42, 39);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body blockquote {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .spacer {
  background-color: rgb(56, 49, 46);
}

body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-top: 20px;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

body thead {
  background-color: rgb(152, 137, 130);
}`,
    code: `body code {
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
  color: rgb(201, 84, 84);
  font-family: MonoLisa, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body pre:has(> code) {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(56, 49, 46);
  border-left-width: 2px;
  border-right-color: rgb(56, 49, 46);
  border-right-width: 2px;
  border-top-color: rgb(56, 49, 46);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(240, 234, 226);
  text-decoration: line-through rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

body input[type=checkbox] {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-button {
  background-color: rgb(47, 42, 39);
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 42, 39);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(56, 49, 46);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 42, 39);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(56, 49, 46);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(201, 84, 84, 0.1);
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
}

body a.internal.tag-link::before {
  color: rgb(201, 84, 84);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: "Source Serif Pro", "Source Serif 4", "Source Serif", Rockwell, "New York", serif;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body hr {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 42, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 42, 39);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(201, 84, 84);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}`,
    footer: `body footer {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(240, 234, 226);
}

body footer ul li a {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(240, 234, 226);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(240, 234, 226);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(240, 234, 226);
  text-decoration: rgb(240, 234, 226);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body .darkmode svg {
  color: rgb(240, 234, 226);
  stroke: rgb(240, 234, 226);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body .breadcrumb-element p {
  color: rgb(148, 148, 148);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(56, 49, 46);
  border-left-color: rgb(56, 49, 46);
  border-right-color: rgb(56, 49, 46);
  border-top-color: rgb(56, 49, 46);
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-bottom: 40px;
}

body .metadata-properties {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body .navigation-progress {
  background-color: rgb(56, 49, 46);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

body kbd {
  background-color: rgb(56, 49, 46);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: MonoLisa, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --alternate-lights: #f8f5f1;
  --background-modifier-active-hover: #e6dbcc;
  --background-modifier-border: #f0eae2;
  --background-modifier-border-focus: #c43131;
  --background-modifier-border-hover: #c43131;
  --background-modifier-error: #c95454;
  --background-modifier-error-hover: #c43131;
  --background-modifier-error-rgb: 201, 84, 84;
  --background-modifier-hover: #f0eae2;
  --background-modifier-message: #c95454;
  --background-modifier-success: #c95454;
  --background-modifier-success-rgb: 201, 84, 84;
  --background-primary-alt: #f0eae2;
  --background-secondary: #ffffff;
  --background-secondary-alt: #f0eae2;
  --bases-cards-cover-background: #f0eae2;
  --bases-cards-shadow: 0 0 0 1px #f0eae2;
  --bases-cards-shadow-hover: 0 0 0 1px #c43131;
  --bases-embed-border-color: #f0eae2;
  --bases-group-heading-property-color: #949494;
  --bases-table-border-color: #f0eae2;
  --bases-table-cell-background-disabled: #f0eae2;
  --bases-table-cell-shadow-active: 0 0 0 2px #c43131;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c95454;
  --bases-table-group-background: #f0eae2;
  --bases-table-header-background-hover: #f0eae2;
  --bases-table-header-color: #949494;
  --bases-table-summary-background-hover: #f0eae2;
  --beige: #f0eae2;
  --blockquote-border-color: #c95454;
  --canvas-card-label-color: #949494;
  --caret-color: #2d2c2c;
  --checkbox-border-color: #949494;
  --checkbox-border-color-hover: #949494;
  --checkbox-color: #c95454;
  --checkbox-color-hover: #c95454;
  --checklist-done-color: #949494;
  --code-background: #f8f5f1;
  --code-border-color: #f0eae2;
  --code-bracket-background: #f0eae2;
  --code-comment: #949494;
  --code-normal: #2d2c2c;
  --code-punctuation: #949494;
  --collapse-icon-color: #949494;
  --collapse-icon-color-collapsed: #c95454;
  --dark-alternate: #988982;
  --dark-beige: #e6dbcc;
  --dark-bg: #2f2a27;
  --dark-light-text: #473e3a;
  --dark-lightness: #bbb1ac;
  --dark-secondary: #38312e;
  --darky-dark: #e6dbcc;
  --divider-color: #f0eae2;
  --divider-color-hover: #c95454;
  --divider-vertical-height: calc(100% - 90px);
  --dropdown-background: #f0eae2;
  --dropdown-background-hover: #f8f5f1;
  --embed-block-shadow-hover: 0 0 0 1px #f0eae2, inset 0 0 0 1px #f0eae2;
  --embed-border-start: 2px solid #c95454;
  --flair-background: #f0eae2;
  --flair-color: #2d2c2c;
  --foldgutter-width: 1.8rem;
  --font-headings: "Source Serif Pro", "Source Serif 4", "Source Serif",
		"Rockwell", "New York", serif;
  --font-mermaid: "DM Sans", "Avenir Next", "Avenir", sans-serif;
  --font-monospace: MonoLisa, "Source Code Pro", monospace;
  --font-text: "DM Sans", "Avenir Next", "Avenir", sans-serif;
  --footnote-divider-color: #f0eae2;
  --footnote-id-color: #949494;
  --footnote-id-color-no-occurrences: #949494;
  --footnote-input-background-active: #f0eae2;
  --graph-node: #949494;
  --graph-node-focused: #c95454;
  --graph-node-unresolved: #949494;
  --graph-text: #2d2c2c;
  --green: #06b43c;
  --h1: 2.5em;
  --h2: 2em;
  --handle-icon: #000000;
  --heading-formatting: #949494;
  --heading-text: #000000;
  --highlight: #f3e118;
  --highlight-dark: #756b13;
  --hr-color: #f0eae2;
  --icon-color: #949494;
  --icon-color-active: #c95454;
  --icon-color-focused: #2d2c2c;
  --icon-color-hover: #949494;
  --inline-title-color: #949494;
  --inline-title-size: 0.8rem;
  --input-date-separator: #949494;
  --input-placeholder-color: #949494;
  --interactive-accent: #c95454;
  --interactive-accent-hover: #c95454;
  --interactive-accent-hsl: 0, 52, 55.9;
  --interactive-hover: #f8f5f1;
  --interactive-normal: #f0eae2;
  --light-beige: #f8f5f1;
  --light-text: #949494;
  --link-color: #c95454;
  --link-color-hover: #c43131;
  --link-external-color: #c95454;
  --link-external-color-hover: #c43131;
  --link-unresolved-color: #c95454;
  --link-unresolved-decoration-color: hsla(0, 52, 55.9, 0.3);
  --list-marker-color: #949494;
  --list-marker-color-collapsed: #c95454;
  --list-marker-color-hover: #949494;
  --main-bg: #ffffff;
  --menu-background: #ffffff;
  --menu-border-color: #c43131;
  --metadata-border-color: #f0eae2;
  --metadata-divider-color: #f0eae2;
  --metadata-input-background-active: #f0eae2;
  --metadata-input-text-color: #2d2c2c;
  --metadata-label-background-active: #f0eae2;
  --metadata-label-text-color: #949494;
  --metadata-label-text-color-hover: #949494;
  --metadata-property-background-active: #f0eae2;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c43131;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c43131;
  --modal-buttons: #949494;
  --nav-collapse-icon-color: #949494;
  --nav-collapse-icon-color-collapsed: #949494;
  --nav-heading-color: #2d2c2c;
  --nav-heading-color-collapsed: #949494;
  --nav-heading-color-collapsed-hover: #949494;
  --nav-heading-color-hover: #2d2c2c;
  --nav-item-background-active: #c95454;
  --nav-item-background-hover: #e6dbcc;
  --nav-item-background-selected: #c95454;
  --nav-item-color: #949494;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #ffffff;
  --nav-item-color-hover: #2d2c2c;
  --nav-item-color-selected: #ffffff;
  --nav-tag-color: #949494;
  --nav-tag-color-active: #949494;
  --nav-tag-color-hover: #949494;
  --pill-border-color: #f0eae2;
  --pill-border-color-hover: #c43131;
  --pill-color: #949494;
  --pill-color-hover: #2d2c2c;
  --pill-color-remove: #949494;
  --pill-color-remove-hover: #c95454;
  --pre-bg: #f8f5f1;
  --red: #c95454;
  --red-deep: #c43131;
  --red-hsl: 0, 52, 55.9;
  --red-rgb: 201, 84, 84;
  --ribbon-background: #ffffff;
  --ribbon-background-collapsed: #f0eae2;
  --search-clear-button-color: #949494;
  --search-icon-color: #949494;
  --setting-group-heading-color: #2d2c2c;
  --setting-items-background: #f0eae2;
  --setting-items-border-color: #f0eae2;
  --slider-thumb-border-color: #c43131;
  --slider-track-background: #f0eae2;
  --status-bar-background: #ffffff;
  --status-bar-border-color: #f0eae2;
  --status-bar-text-color: #949494;
  --tab-background-active: transparent;
  --tab-container-background: #ffffff;
  --tab-curve: 10px;
  --tab-divider-color: #f0eae2;
  --tab-max-width: 350px;
  --tab-outline-color: #f0eae2;
  --tab-radius: 10px;
  --tab-radius-active: 10px 10px 0 0;
  --tab-switcher-background: #ffffff;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent);
  --tab-text-color: #949494;
  --tab-text-color-active: #949494;
  --tab-text-color-focused: #949494;
  --tab-text-color-focused-active: #949494;
  --tab-text-color-focused-active-current: #2d2c2c;
  --tab-text-color-focused-highlighted: #c95454;
  --table-add-button-border-color: #f0eae2;
  --table-border-color: #f0eae2;
  --table-drag-handle-background-active: #c95454;
  --table-drag-handle-color: #949494;
  --table-header-border-color: #f0eae2;
  --table-header-color: #2d2c2c;
  --table-selection-border-color: #c95454;
  --tag-background: rgba(201, 84, 84, 0.1);
  --tag-background-hover: hsla(0, 52, 55.9, 0.2);
  --tag-border-color: hsla(0, 52, 55.9, 0.15);
  --tag-border-color-hover: hsla(0, 52, 55.9, 0.15);
  --tag-color: #c95454;
  --tag-color-hover: #c95454;
  --text: #2d2c2c;
  --text-accent: #c95454;
  --text-accent-hover: #c43131;
  --text-error: #c95454;
  --text-faint: #949494;
  --text-highlight-bg: #f3e118;
  --text-muted: #949494;
  --text-normal: #2d2c2c;
  --text-selection: #e6dbcc;
  --text-success: #06b43c;
  --titlebar-background: #e6dbcc;
  --titlebar-background-focused: #e6dbcc;
  --titlebar-border-color: #f0eae2;
  --titlebar-text-color: #949494;
  --titlebar-text-color-focused: #2d2c2c;
  --vault-profile-color: #2d2c2c;
  --vault-profile-color-hover: #2d2c2c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(45, 44, 44);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(45, 44, 44);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(240, 234, 226);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

body div#quartz-root {
  color: rgb(45, 44, 44);
}`,
    typography: `body .page article p > b, b {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body .page article p > em, em {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body .page article p > i, i {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body .page article p > strong, strong {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body .text-highlight {
  background-color: rgb(243, 225, 24);
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body del {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration: line-through rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body p {
  color: rgb(148, 148, 148);
  outline: rgb(148, 148, 148) none 0px;
  text-decoration: rgb(148, 148, 148);
  text-decoration-color: rgb(148, 148, 148);
}`,
    links: `body a.external, footer a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration: underline rgb(201, 84, 84);
  text-decoration-color: rgb(201, 84, 84);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(201, 84, 84);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(201, 84, 84) none 0px;
  text-decoration: underline rgb(201, 84, 84);
  text-decoration-color: rgb(201, 84, 84);
}

body a.internal.broken {
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(148, 148, 148) none 0px;
  text-decoration: underline rgb(148, 148, 148);
  text-decoration-color: rgb(148, 148, 148);
}`,
    lists: `body dd {
  color: rgb(45, 44, 44);
}

body dt {
  color: rgb(45, 44, 44);
}

body ol > li {
  color: rgb(45, 44, 44);
}

body ol.overflow {
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body ul > li {
  color: rgb(45, 44, 44);
}

body ul.overflow {
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body blockquote {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .spacer {
  background-color: rgb(240, 234, 226);
}

body .table-container {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body table {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-top: 20px;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

body th {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

body thead {
  background-color: rgb(248, 245, 241);
}`,
    code: `body code {
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
  color: rgb(201, 84, 84);
  font-family: MonoLisa, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
  color: rgb(45, 44, 44);
}

body pre > code, pre:has(> code) {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body pre:has(> code) {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(240, 234, 226);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 234, 226);
  border-left-width: 2px;
  border-right-color: rgb(240, 234, 226);
  border-right-width: 2px;
  border-top-color: rgb(240, 234, 226);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body figcaption {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body figure {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body img {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body video {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 234, 226);
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
}

body .footnotes {
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
}

body .transclude {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body .transclude-inner {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(148, 148, 148);
  text-decoration: line-through rgb(148, 148, 148);
  text-decoration-color: rgb(148, 148, 148);
}

body input[type=checkbox] {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
}

body li.task-list-item[data-task='!'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='*'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='-'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='/'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='>'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='?'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='I'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='S'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='b'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='c'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='d'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='f'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='i'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='k'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='l'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='p'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='u'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body li.task-list-item[data-task='w'] {
  color: rgb(45, 44, 44);
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

body .search > .search-container > .search-space > * {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  outline: rgb(45, 44, 44) none 0px;
  text-decoration: rgb(45, 44, 44);
  text-decoration-color: rgb(45, 44, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 44, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(45, 44, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(240, 234, 226);
  color: rgb(45, 44, 44);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(240, 234, 226);
  border-bottom-color: rgb(45, 44, 44);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(45, 44, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(240, 234, 226);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(45, 44, 44);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(201, 84, 84, 0.1);
  border-bottom-color: rgb(201, 84, 84);
  border-left-color: rgb(201, 84, 84);
  border-right-color: rgb(201, 84, 84);
  border-top-color: rgb(201, 84, 84);
}

body a.internal.tag-link::before {
  color: rgb(201, 84, 84);
}

body h1 {
  color: rgb(45, 44, 44);
  font-family: "Source Serif Pro", "Source Serif 4", "Source Serif", Rockwell, "New York", serif;
}

body h2 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h3 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h4 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h5 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body h6 {
  color: rgb(45, 44, 44);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body hr {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(201, 84, 84);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}`,
    footer: `body footer {
  background-color: rgb(240, 234, 226);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(148, 148, 148);
}

body footer ul li a {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(45, 44, 44);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(148, 148, 148);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body li.section-li > .section .meta {
  color: rgb(148, 148, 148);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body ul.section-ul {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}

body .darkmode svg {
  color: rgb(148, 148, 148);
  stroke: rgb(148, 148, 148);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}

body .breadcrumb-element p {
  color: rgb(148, 148, 148);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
}

body .metadata {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
  margin-bottom: 40px;
}

body .metadata-properties {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
  font-family: "DM Sans", "Avenir Next", Avenir, sans-serif;
}

body .navigation-progress {
  background-color: rgb(240, 234, 226);
}

body .page-header h2.page-title {
  color: rgb(45, 44, 44);
}

body abbr {
  color: rgb(45, 44, 44);
  text-decoration: underline dotted rgb(45, 44, 44);
}

body details {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body input[type=text] {
  border-bottom-color: rgb(148, 148, 148);
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  color: rgb(148, 148, 148);
}

body kbd {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
  color: rgb(45, 44, 44);
  font-family: MonoLisa, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(45, 44, 44);
  border-left-color: rgb(45, 44, 44);
  border-right-color: rgb(45, 44, 44);
  border-top-color: rgb(45, 44, 44);
}

body sub {
  color: rgb(45, 44, 44);
}

body summary {
  color: rgb(45, 44, 44);
}

body sup {
  color: rgb(45, 44, 44);
}`,
  },
};
