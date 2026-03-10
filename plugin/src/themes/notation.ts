import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "notation",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --L0: 0%;
  --L1: 20%;
  --L2: 23%;
  --L3: 26%;
  --background-accent: rgb(0, 0, 0);
  --background-blue: rgb(54, 73, 84);
  --background-brown: rgb(67, 64, 64);
  --background-gray: rgb(69, 75, 78);
  --background-green: rgb(53, 76, 75);
  --background-modifier-border: rgba(255, 255, 255, 0.14);
  --background-orange: rgb(89, 74, 58);
  --background-pink: rgb(83, 59, 76);
  --background-primary: rgb(47, 52, 55);
  --background-primary-alt: rgb(61, 68, 72);
  --background-purple: rgb(68, 63, 87);
  --background-red: rgb(89, 65, 65);
  --background-secondary: rgb(54, 60, 63);
  --background-secondary-alt: rgb(61, 68, 72);
  --background-yellow: rgb(89, 86, 59);
  --bases-cards-background: rgb(47, 52, 55);
  --bases-cards-cover-background: rgb(61, 68, 72);
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --bases-embed-border-color: rgba(255, 255, 255, 0.14);
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.45);
  --bases-table-border-color: rgba(255, 255, 255, 0.14);
  --bases-table-cell-background-active: rgb(47, 52, 55);
  --bases-table-cell-background-disabled: rgb(61, 68, 72);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220);
  --bases-table-group-background: rgb(61, 68, 72);
  --bases-table-header-background: rgb(47, 52, 55);
  --bases-table-header-color: rgba(255, 255, 255, 0.45);
  --bases-table-summary-background: rgb(47, 52, 55);
  --blockquote-border-color: rgb(46, 170, 220);
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --canvas-background: rgb(47, 52, 55);
  --canvas-card-label-color: rgba(255, 255, 255, 0.25);
  --caret-color: rgba(255, 255, 255, 0.9);
  --checkbox-border-color: rgba(255, 255, 255, 0.25);
  --checkbox-border-color-hover: rgba(255, 255, 255, 0.45);
  --checkbox-color: rgb(46, 170, 220);
  --checkbox-color-hover: rgba(46, 170, 220, 0.8);
  --checkbox-marker-color: rgb(47, 52, 55);
  --checklist-done-color: rgba(255, 255, 255, 0.45);
  --code: #EB5757;
  --code-background: rgb(61, 68, 72);
  --code-border-color: rgba(255, 255, 255, 0.14);
  --code-comment: rgba(255, 255, 255, 0.25);
  --code-normal: rgba(255, 255, 255, 0.9);
  --code-punctuation: rgba(255, 255, 255, 0.45);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgba(255, 255, 255, 0.25);
  --collapse-icon-color-collapsed: rgba(255, 255, 255, 0.45);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgba(255, 255, 255, 0.14);
  --divider-color-hover: rgb(46, 170, 220);
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  --embed-border-start: 2px solid rgb(46, 170, 220);
  --file-header-background: rgb(47, 52, 55);
  --file-header-background-focused: rgb(47, 52, 55);
  --flair-background: #2a2a2a;
  --flair-color: rgba(255, 255, 255, 0.9);
  --font-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --footnote-divider-color: rgba(255, 255, 255, 0.14);
  --footnote-id-color: rgba(255, 255, 255, 0.45);
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.25);
  --graph-node: rgba(255, 255, 255, 0.45);
  --graph-node-focused: rgba(255, 255, 255, 0.45);
  --graph-node-unresolved: rgba(255, 255, 255, 0.25);
  --graph-text: rgba(255, 255, 255, 0.9);
  --gray: var(--text-muted);
  --heading-formatting: rgba(255, 255, 255, 0.25);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(255, 255, 255, 0.14);
  --hue: 203;
  --icon-color: rgba(255, 255, 255, 0.45);
  --icon-color-active: rgba(255, 255, 255, 0.45);
  --icon-color-focused: rgba(255, 255, 255, 0.9);
  --icon-color-hover: rgba(255, 255, 255, 0.45);
  --input-date-separator: rgba(255, 255, 255, 0.25);
  --input-placeholder-color: rgba(255, 255, 255, 0.25);
  --interactive-accent: rgb(46, 170, 220);
  --interactive-accent-hover: rgba(46, 170, 220, 0.8);
  --interactive-accent-rgb: 46, 170, 220;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgba(255, 255, 255, 0.45);
  --link-color-hover: rgba(255, 255, 255, 0.45);
  --link-external-color: rgba(255, 255, 255, 0.45);
  --link-external-color-hover: rgba(255, 255, 255, 0.45);
  --link-unresolved-color: rgba(255, 255, 255, 0.45);
  --list-marker-color: rgba(255, 255, 255, 0.25);
  --list-marker-color-collapsed: rgba(255, 255, 255, 0.45);
  --list-marker-color-hover: rgba(255, 255, 255, 0.45);
  --menu-background: rgb(54, 60, 63);
  --metadata-border-color: rgba(255, 255, 255, 0.14);
  --metadata-divider-color: rgba(255, 255, 255, 0.14);
  --metadata-input-text-color: rgba(255, 255, 255, 0.9);
  --metadata-label-text-color: rgba(255, 255, 255, 0.45);
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.45);
  --modal-background: rgb(47, 52, 55);
  --nav-collapse-icon-color: rgba(255, 255, 255, 0.25);
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.25);
  --nav-heading-color: rgba(255, 255, 255, 0.9);
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.25);
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.45);
  --nav-heading-color-hover: rgba(255, 255, 255, 0.9);
  --nav-item-color: rgba(255, 255, 255, 0.45);
  --nav-item-color-active: rgba(255, 255, 255, 0.9);
  --nav-item-color-highlighted: rgba(255, 255, 255, 0.45);
  --nav-item-color-hover: rgba(255, 255, 255, 0.9);
  --nav-item-color-selected: rgba(255, 255, 255, 0.9);
  --nav-tag-color: rgba(255, 255, 255, 0.25);
  --nav-tag-color-active: rgba(255, 255, 255, 0.45);
  --nav-tag-color-hover: rgba(255, 255, 255, 0.45);
  --opacity-translucency: 0.7;
  --pdf-background: rgb(47, 52, 55);
  --pdf-page-background: rgb(47, 52, 55);
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --pdf-sidebar-background: rgb(47, 52, 55);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --pill-border-color: rgba(255, 255, 255, 0.14);
  --pill-color: rgba(255, 255, 255, 0.45);
  --pill-color-hover: rgba(255, 255, 255, 0.9);
  --pill-color-remove: rgba(255, 255, 255, 0.25);
  --pill-color-remove-hover: rgba(255, 255, 255, 0.45);
  --prompt-background: rgb(47, 52, 55);
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: rgb(54, 60, 63);
  --ribbon-background-collapsed: rgb(47, 52, 55);
  --sat: 8%;
  --search-clear-button-color: rgba(255, 255, 255, 0.45);
  --search-icon-color: rgba(255, 255, 255, 0.45);
  --search-result-background: rgb(47, 52, 55);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgba(255, 255, 255, 0.9);
  --setting-items-background: rgb(61, 68, 72);
  --setting-items-border-color: rgba(255, 255, 255, 0.14);
  --slider-track-background: rgba(255, 255, 255, 0.14);
  --status-bar-background: rgb(54, 60, 63);
  --status-bar-border-color: rgba(255, 255, 255, 0.14);
  --status-bar-text-color: rgba(255, 255, 255, 0.45);
  --suggestion-background: rgb(47, 52, 55);
  --tab-background-active: rgb(47, 52, 55);
  --tab-container-background: rgb(54, 60, 63);
  --tab-outline-color: rgba(255, 255, 255, 0.14);
  --tab-switcher-background: rgb(54, 60, 63);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(54, 60, 63), transparent);
  --tab-text-color: rgba(255, 255, 255, 0.25);
  --tab-text-color-active: rgba(255, 255, 255, 0.45);
  --tab-text-color-focused: rgba(255, 255, 255, 0.45);
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.45);
  --tab-text-color-focused-active-current: rgba(255, 255, 255, 0.9);
  --tab-text-color-focused-highlighted: rgba(255, 255, 255, 0.45);
  --table-add-button-border-color: rgba(255, 255, 255, 0.14);
  --table-border-color: rgba(255, 255, 255, 0.14);
  --table-drag-handle-background-active: rgb(46, 170, 220);
  --table-drag-handle-color: rgba(255, 255, 255, 0.25);
  --table-drag-handle-color-active: rgba(255, 255, 255, 0.9);
  --table-header-border-color: rgba(255, 255, 255, 0.14);
  --table-header-color: rgba(255, 255, 255, 0.9);
  --table-selection-border-color: rgb(46, 170, 220);
  --tag-color: rgba(255, 255, 255, 0.45);
  --tag-color-hover: rgba(255, 255, 255, 0.45);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgba(255, 255, 255, 0.45);
  --text-accent-hover: rgba(255, 255, 255, 0.45);
  --text-blue: rgb(82, 156, 202);
  --text-brown: rgb(147, 114, 100);
  --text-faint: rgba(255, 255, 255, 0.25);
  --text-gray: rgba(255, 255, 255, 0.6);
  --text-green: rgb(77, 171, 154);
  --text-highlight-bg: rgb(89, 86, 59);
  --text-muted: rgba(255, 255, 255, 0.45);
  --text-normal: rgba(255, 255, 255, 0.9);
  --text-on-accent: rgba(255, 255, 255, 0.9);
  --text-orange: rgb(255, 163, 68);
  --text-pink: rgb(226, 85, 161);
  --text-purple: rgb(154, 109, 215);
  --text-red: rgb(255, 115, 105);
  --text-rgb: 255, 255, 255;
  --text-selection: rgba(0, 123, 255, 0.2);
  --text-yellow: rgb(255, 220, 73);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(54, 60, 63);
  --titlebar-background-focused: rgb(61, 68, 72);
  --titlebar-border-color: rgba(255, 255, 255, 0.14);
  --titlebar-text-color: rgba(255, 255, 255, 0.45);
  --titlebar-text-color-focused: rgba(255, 255, 255, 0.9);
  --vault-profile-color: rgba(255, 255, 255, 0.9);
  --vault-profile-color-hover: rgba(255, 255, 255, 0.9);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.14);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

body div#quartz-root {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}`,
    typography: `body .page article p > b, b {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .page article p > em, em {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .page article p > i, i {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .page article p > strong, strong {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .text-highlight {
  background-color: rgb(89, 86, 59);
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body del {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: line-through rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body p {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.45) none 0px;
  text-decoration: rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}`,
    links: `body a.external, footer a {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body a.internal.broken {
  color: rgba(255, 255, 255, 0.45);
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.45) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgba(255, 255, 255, 0.9);
}

body dt {
  color: rgba(255, 255, 255, 0.9);
}

body ol > li {
  color: rgba(255, 255, 255, 0.9);
}

body ol.overflow {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body ul > li {
  color: rgba(255, 255, 255, 0.9);
}

body ul.overflow {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.25);
  text-decoration: rgba(255, 255, 255, 0.25);
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body table {
  color: rgba(255, 255, 255, 0.9);
  width: 200.938px;
}

body td {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

body th {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
  text-align: left;
}`,
    code: `body code {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

body pre > code, pre:has(> code) {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
}

body pre:has(> code) {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
}`,
    images: `body audio {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body figcaption {
  color: rgba(255, 255, 255, 0.9);
}

body figure {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body img {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body video {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    embeds: `body .file-embed {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
}

body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2px;
  margin-right: 4px;
  transition: background-color 0.2s ease-out;
}

body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}

body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: line-through rgba(255, 255, 255, 0.45);
  text-decoration-color: rgba(255, 255, 255, 0.45);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 52, 55);
}

body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.9);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgba(255, 255, 255, 0.9);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgba(255, 255, 255, 0.9);
}

body a.internal.tag-link::before {
  color: rgba(255, 255, 255, 0.45);
}

body h1 {
  color: rgba(255, 255, 255, 0.9);
}

body h2 {
  color: rgba(255, 255, 255, 0.9);
}

body h2.page-title, h2.page-title a {
  color: rgba(255, 255, 255, 0.9);
}

body h3 {
  color: rgba(255, 255, 255, 0.9);
}

body h4 {
  color: rgba(255, 255, 255, 0.9);
}

body h5 {
  color: rgba(255, 255, 255, 0.9);
}

body h6 {
  color: rgba(255, 255, 255, 0.9);
}

body hr {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: rgba(255, 255, 255, 0.45);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: rgba(255, 255, 255, 0.45);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: rgba(255, 255, 255, 0.45);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}`,
    footer: `body footer {
  background-color: rgb(54, 60, 63);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body footer ul li a {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: rgba(255, 255, 255, 0.45);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: rgba(255, 255, 255, 0.45);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: rgba(255, 255, 255, 0.45);
}

body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

body .darkmode svg {
  color: rgba(255, 255, 255, 0.45);
  stroke: rgba(255, 255, 255, 0.45);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.25);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.45);
}

body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

body .navigation-progress {
  background-color: rgb(54, 60, 63);
}

body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.9);
}

body abbr {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: underline dotted rgba(255, 255, 255, 0.9);
}

body details {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body input[type=text] {
  border-bottom-color: rgba(255, 255, 255, 0.45);
  border-left-color: rgba(255, 255, 255, 0.45);
  border-right-color: rgba(255, 255, 255, 0.45);
  border-top-color: rgba(255, 255, 255, 0.45);
  color: rgba(255, 255, 255, 0.45);
}

body kbd {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

body progress {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

body sub {
  color: rgba(255, 255, 255, 0.9);
}

body summary {
  color: rgba(255, 255, 255, 0.9);
}

body sup {
  color: rgba(255, 255, 255, 0.9);
}`,
  },
  light: {
    base: `:root:root {
  --L0: 0%;
  --L1: 100%;
  --L2: 96%;
  --L3: 90%;
  --background-accent: rgb(0, 0, 0);
  --background-blue: rgb(221, 235, 241);
  --background-brown: rgb(233, 229, 227);
  --background-gray: rgb(235, 236, 237);
  --background-green: rgb(221, 237, 234);
  --background-modifier-border: rgba(55, 53, 47, 0.14);
  --background-orange: rgb(250, 235, 221);
  --background-pink: rgb(244, 223, 235);
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(244, 245, 246);
  --background-purple: rgb(234, 228, 242);
  --background-red: rgb(251, 228, 228);
  --background-secondary: rgb(244, 245, 246);
  --background-secondary-alt: rgb(227, 230, 232);
  --background-yellow: rgb(251, 243, 219);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(244, 245, 246);
  --bases-cards-shadow: 0 0 0 1px rgba(55, 53, 47, 0.14);
  --bases-embed-border-color: rgba(55, 53, 47, 0.14);
  --bases-group-heading-property-color: rgba(55, 53, 47, 0.45);
  --bases-table-border-color: rgba(55, 53, 47, 0.14);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(244, 245, 246);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220);
  --bases-table-group-background: rgb(244, 245, 246);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-color: rgba(55, 53, 47, 0.45);
  --bases-table-summary-background: rgb(255, 255, 255);
  --blockquote-border-color: rgb(46, 170, 220);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgba(55, 53, 47, 0.25);
  --caret-color: rgba(55, 53, 47, 0.9);
  --checkbox-border-color: rgba(55, 53, 47, 0.25);
  --checkbox-border-color-hover: rgba(55, 53, 47, 0.45);
  --checkbox-color: rgb(46, 170, 220);
  --checkbox-color-hover: rgba(46, 170, 220, 0.8);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checklist-done-color: rgba(55, 53, 47, 0.45);
  --code: #EB5757;
  --code-background: rgb(244, 245, 246);
  --code-border-color: rgba(55, 53, 47, 0.14);
  --code-comment: rgba(55, 53, 47, 0.25);
  --code-normal: rgba(55, 53, 47, 0.9);
  --code-punctuation: rgba(55, 53, 47, 0.45);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgba(55, 53, 47, 0.25);
  --collapse-icon-color-collapsed: rgba(55, 53, 47, 0.45);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgba(55, 53, 47, 0.14);
  --divider-color-hover: rgb(46, 170, 220);
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px rgba(55, 53, 47, 0.14), inset 0 0 0 1px rgba(55, 53, 47, 0.14);
  --embed-border-start: 2px solid rgb(46, 170, 220);
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --flair-background: #f2f3f5;
  --flair-color: rgba(55, 53, 47, 0.9);
  --font-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --footnote-divider-color: rgba(55, 53, 47, 0.14);
  --footnote-id-color: rgba(55, 53, 47, 0.45);
  --footnote-id-color-no-occurrences: rgba(55, 53, 47, 0.25);
  --graph-node: rgba(55, 53, 47, 0.45);
  --graph-node-focused: rgba(55, 53, 47, 0.45);
  --graph-node-unresolved: rgba(55, 53, 47, 0.25);
  --graph-text: rgba(55, 53, 47, 0.9);
  --gray: var(--text-muted);
  --heading-formatting: rgba(55, 53, 47, 0.25);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(55, 53, 47, 0.14);
  --hue: 203;
  --icon-color: rgba(55, 53, 47, 0.45);
  --icon-color-active: rgba(55, 53, 47, 0.45);
  --icon-color-focused: rgba(55, 53, 47, 0.9);
  --icon-color-hover: rgba(55, 53, 47, 0.45);
  --input-date-separator: rgba(55, 53, 47, 0.25);
  --input-placeholder-color: rgba(55, 53, 47, 0.25);
  --interactive-accent: rgb(46, 170, 220);
  --interactive-accent-hover: rgba(46, 170, 220, 0.8);
  --interactive-accent-rgb: 46, 170, 220;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgba(55, 53, 47, 0.45);
  --link-color-hover: rgba(55, 53, 47, 0.45);
  --link-external-color: rgba(55, 53, 47, 0.45);
  --link-external-color-hover: rgba(55, 53, 47, 0.45);
  --link-unresolved-color: rgba(55, 53, 47, 0.45);
  --list-marker-color: rgba(55, 53, 47, 0.25);
  --list-marker-color-collapsed: rgba(55, 53, 47, 0.45);
  --list-marker-color-hover: rgba(55, 53, 47, 0.45);
  --menu-background: rgb(244, 245, 246);
  --metadata-border-color: rgba(55, 53, 47, 0.14);
  --metadata-divider-color: rgba(55, 53, 47, 0.14);
  --metadata-input-text-color: rgba(55, 53, 47, 0.9);
  --metadata-label-text-color: rgba(55, 53, 47, 0.45);
  --metadata-label-text-color-hover: rgba(55, 53, 47, 0.45);
  --modal-background: rgb(255, 255, 255);
  --nav-collapse-icon-color: rgba(55, 53, 47, 0.25);
  --nav-collapse-icon-color-collapsed: rgba(55, 53, 47, 0.25);
  --nav-heading-color: rgba(55, 53, 47, 0.9);
  --nav-heading-color-collapsed: rgba(55, 53, 47, 0.25);
  --nav-heading-color-collapsed-hover: rgba(55, 53, 47, 0.45);
  --nav-heading-color-hover: rgba(55, 53, 47, 0.9);
  --nav-item-color: rgba(55, 53, 47, 0.45);
  --nav-item-color-active: rgba(55, 53, 47, 0.9);
  --nav-item-color-highlighted: rgba(55, 53, 47, 0.45);
  --nav-item-color-hover: rgba(55, 53, 47, 0.9);
  --nav-item-color-selected: rgba(55, 53, 47, 0.9);
  --nav-tag-color: rgba(55, 53, 47, 0.25);
  --nav-tag-color-active: rgba(55, 53, 47, 0.45);
  --nav-tag-color-hover: rgba(55, 53, 47, 0.45);
  --opacity-translucency: 0.7;
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: rgba(55, 53, 47, 0.14);
  --pill-color: rgba(55, 53, 47, 0.45);
  --pill-color-hover: rgba(55, 53, 47, 0.9);
  --pill-color-remove: rgba(55, 53, 47, 0.25);
  --pill-color-remove-hover: rgba(55, 53, 47, 0.45);
  --prompt-background: rgb(255, 255, 255);
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(244, 245, 246);
  --ribbon-background-collapsed: rgb(255, 255, 255);
  --sat: 8%;
  --search-clear-button-color: rgba(55, 53, 47, 0.45);
  --search-icon-color: rgba(55, 53, 47, 0.45);
  --search-result-background: rgb(255, 255, 255);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgba(55, 53, 47, 0.9);
  --setting-items-background: rgb(244, 245, 246);
  --setting-items-border-color: rgba(55, 53, 47, 0.14);
  --slider-track-background: rgba(55, 53, 47, 0.14);
  --status-bar-background: rgb(244, 245, 246);
  --status-bar-border-color: rgba(55, 53, 47, 0.14);
  --status-bar-text-color: rgba(55, 53, 47, 0.45);
  --suggestion-background: rgb(255, 255, 255);
  --tab-background-active: rgb(255, 255, 255);
  --tab-container-background: rgb(244, 245, 246);
  --tab-outline-color: rgba(55, 53, 47, 0.14);
  --tab-switcher-background: rgb(244, 245, 246);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(244, 245, 246), transparent);
  --tab-text-color: rgba(55, 53, 47, 0.25);
  --tab-text-color-active: rgba(55, 53, 47, 0.45);
  --tab-text-color-focused: rgba(55, 53, 47, 0.45);
  --tab-text-color-focused-active: rgba(55, 53, 47, 0.45);
  --tab-text-color-focused-active-current: rgba(55, 53, 47, 0.9);
  --tab-text-color-focused-highlighted: rgba(55, 53, 47, 0.45);
  --table-add-button-border-color: rgba(55, 53, 47, 0.14);
  --table-border-color: rgba(55, 53, 47, 0.14);
  --table-drag-handle-background-active: rgb(46, 170, 220);
  --table-drag-handle-color: rgba(55, 53, 47, 0.25);
  --table-drag-handle-color-active: rgba(55, 53, 47, 0.9);
  --table-header-border-color: rgba(55, 53, 47, 0.14);
  --table-header-color: rgba(55, 53, 47, 0.9);
  --table-selection-border-color: rgb(46, 170, 220);
  --tag-color: rgba(55, 53, 47, 0.45);
  --tag-color-hover: rgba(55, 53, 47, 0.45);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgba(55, 53, 47, 0.45);
  --text-accent-hover: rgba(55, 53, 47, 0.45);
  --text-blue: rgb(11, 110, 153);
  --text-brown: rgb(100, 71, 58);
  --text-faint: rgba(55, 53, 47, 0.25);
  --text-gray: rgba(55, 53, 47, 0.6);
  --text-green: rgb(15, 123, 108);
  --text-highlight-bg: rgb(251, 243, 219);
  --text-muted: rgba(55, 53, 47, 0.45);
  --text-normal: rgba(55, 53, 47, 0.9);
  --text-on-accent: rgba(55, 53, 47, 0.9);
  --text-orange: rgb(217, 115, 13);
  --text-pink: rgb(173, 26, 114);
  --text-purple: rgb(105, 64, 165);
  --text-red: rgb(224, 62, 62);
  --text-rgb: 55, 53, 47;
  --text-selection: rgba(0, 122, 255, 0.15);
  --text-yellow: rgb(223, 171, 1);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(244, 245, 246);
  --titlebar-background-focused: rgb(227, 230, 232);
  --titlebar-border-color: rgba(55, 53, 47, 0.14);
  --titlebar-text-color: rgba(55, 53, 47, 0.45);
  --titlebar-text-color-focused: rgba(55, 53, 47, 0.9);
  --vault-profile-color: rgba(55, 53, 47, 0.9);
  --vault-profile-color-hover: rgba(55, 53, 47, 0.9);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgba(55, 53, 47, 0.9);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(55, 53, 47, 0.14);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

body div#quartz-root {
  color: rgba(55, 53, 47, 0.9);
}`,
    typography: `body .page article p > b, b {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .page article p > em, em {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .page article p > i, i {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .page article p > strong, strong {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .text-highlight {
  background-color: rgb(251, 243, 219);
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body del {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: line-through rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body p {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.45) none 0px;
  text-decoration: rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}`,
    links: `body a.external, footer a {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: underline rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(55, 53, 47, 0.9);
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body a.internal.broken {
  color: rgba(55, 53, 47, 0.45);
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.45) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgba(55, 53, 47, 0.9);
}

body dt {
  color: rgba(55, 53, 47, 0.9);
}

body ol > li {
  color: rgba(55, 53, 47, 0.9);
}

body ol.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body ul > li {
  color: rgba(55, 53, 47, 0.9);
}

body ul.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(55, 53, 47, 0.25);
  text-decoration: rgba(55, 53, 47, 0.25);
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body table {
  color: rgba(55, 53, 47, 0.9);
  width: 200.938px;
}

body td {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-left-width: 0px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
  font-weight: 600;
}

body th {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-left-width: 0px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.45);
  font-weight: 400;
  text-align: left;
}`,
    code: `body code {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

body pre > code, pre:has(> code) {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
}

body pre:has(> code) {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
}`,
    images: `body audio {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body figcaption {
  color: rgba(55, 53, 47, 0.9);
}

body figure {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body img {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body video {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    embeds: `body .file-embed {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
}

body .footnotes {
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

body .transclude {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body .transclude-inner {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body input[type=checkbox] {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  margin-bottom: 2px;
  margin-right: 4px;
  transition: background-color 0.2s ease-out;
}

body li.task-list-item[data-task='!'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='*'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='-'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='/'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='>'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='?'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='I'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='S'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='b'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='c'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='d'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='f'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='i'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='k'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='l'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='p'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='u'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}

body li.task-list-item[data-task='w'] {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: line-through rgba(55, 53, 47, 0.45);
  text-decoration-color: rgba(55, 53, 47, 0.45);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .search > .search-container > .search-space > * {
  color: rgba(55, 53, 47, 0.9);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgba(55, 53, 47, 0.9);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgba(55, 53, 47, 0.9);
}

body a.internal.tag-link::before {
  color: rgba(55, 53, 47, 0.45);
}

body h1 {
  color: rgba(55, 53, 47, 0.9);
}

body h2 {
  color: rgba(55, 53, 47, 0.9);
}

body h2.page-title, h2.page-title a {
  color: rgba(55, 53, 47, 0.9);
}

body h3 {
  color: rgba(55, 53, 47, 0.9);
}

body h4 {
  color: rgba(55, 53, 47, 0.9);
}

body h5 {
  color: rgba(55, 53, 47, 0.9);
}

body h6 {
  color: rgba(55, 53, 47, 0.9);
}

body hr {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: rgba(55, 53, 47, 0.45);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: rgba(55, 53, 47, 0.45);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: rgba(55, 53, 47, 0.45);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}`,
    footer: `body footer {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body footer ul li a {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: rgba(55, 53, 47, 0.45);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: rgba(55, 53, 47, 0.45);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body li.section-li > .section .meta {
  color: rgba(55, 53, 47, 0.45);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.45);
  text-decoration: rgba(55, 53, 47, 0.45);
}

body ul.section-ul {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

body .darkmode svg {
  color: rgba(55, 53, 47, 0.45);
  stroke: rgba(55, 53, 47, 0.45);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

body .breadcrumb-element p {
  color: rgba(55, 53, 47, 0.25);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

body .metadata {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.45);
}

body .metadata-properties {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

body .navigation-progress {
  background-color: rgb(244, 245, 246);
}

body .page-header h2.page-title {
  color: rgba(55, 53, 47, 0.9);
}

body abbr {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: underline dotted rgba(55, 53, 47, 0.9);
}

body details {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body input[type=text] {
  border-bottom-color: rgba(55, 53, 47, 0.45);
  border-left-color: rgba(55, 53, 47, 0.45);
  border-right-color: rgba(55, 53, 47, 0.45);
  border-top-color: rgba(55, 53, 47, 0.45);
  color: rgba(55, 53, 47, 0.45);
}

body kbd {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

body progress {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

body sub {
  color: rgba(55, 53, 47, 0.9);
}

body summary {
  color: rgba(55, 53, 47, 0.9);
}

body sup {
  color: rgba(55, 53, 47, 0.9);
}`,
  },
};
