import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "suddha",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["monaco", "roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-d: 85%;
  --accent-h-o: 50;
  --background-match-highlight: rgba(143, 119, 197, 0.2);
  --background-modifier-accent: rgb(169, 135, 247);
  --background-modifier-border: rgb(38, 38, 38);
  --background-modifier-border-focus: rgb(77, 77, 77);
  --background-modifier-border-hover: rgb(51, 51, 51);
  --background-primary: rgb(15, 15, 15);
  --background-primary-alt: rgb(18, 18, 18);
  --background-secondary: rgb(26, 26, 26);
  --background-secondary-alt: rgb(26, 26, 26);
  --background-secondary-table: rgb(20, 20, 20);
  --background-tertiary: rgb(36, 36, 36);
  --background-translucent: rgba(26, 26, 26, 0.85);
  --background-transparent: rgba(26, 26, 26, 0);
  --base-d: 10%;
  --base-h: 0;
  --base-l: 95%;
  --base-s: 0%;
  --bases-cards-background: rgb(15, 15, 15);
  --bases-cards-cover-background: rgb(18, 18, 18);
  --bases-cards-shadow: 0 0 0 1px rgb(38, 38, 38);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(51, 51, 51);
  --bases-embed-border-color: rgb(38, 38, 38);
  --bases-group-heading-property-color: rgb(140, 140, 140);
  --bases-table-border-color: rgb(38, 38, 38);
  --bases-table-cell-background-active: rgb(15, 15, 15);
  --bases-table-cell-background-disabled: rgb(18, 18, 18);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(77, 77, 77);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(203, 183, 250);
  --bases-table-group-background: rgb(18, 18, 18);
  --bases-table-header-background: rgb(15, 15, 15);
  --bases-table-header-color: rgb(140, 140, 140);
  --bases-table-summary-background: rgb(15, 15, 15);
  --blockquote-border-color: rgb(203, 183, 250);
  --button-background: rgb(38, 38, 38);
  --button-background-active: rgb(102, 102, 102);
  --buttons-fade-in-speed: filter 100ms ease-in-out;
  --buttons-fade-out-speed: filter 2000ms ease-in-out;
  --canvas-background: rgb(15, 15, 15);
  --canvas-card-label-color: rgb(77, 77, 77);
  --caret-color: rgb(204, 204, 204);
  --checkbox-border-color: rgb(77, 77, 77);
  --checkbox-border-color-hover: rgb(140, 140, 140);
  --checkbox-color: rgb(203, 183, 250);
  --checkbox-color-hover: rgb(238, 231, 253);
  --checkbox-marker-color: rgb(15, 15, 15);
  --checklist-done-color: rgb(140, 140, 140);
  --code-background: rgb(18, 18, 18);
  --code-border-color: rgb(38, 38, 38);
  --code-comment: rgb(77, 77, 77);
  --code-normal: rgb(204, 204, 204);
  --code-punctuation: rgb(140, 140, 140);
  --collapse-icon-color: rgb(77, 77, 77);
  --collapse-icon-color-collapsed: rgb(203, 183, 250);
  --color-accent: rgb(224, 82, 82);
  --color-accent-bright: rgba(240, 168, 168, 0.9);
  --color-accent-hover: rgb(232, 125, 125);
  --color-accent-hover-invert: rgb(140, 140, 140);
  --color-accent-shadow: rgba(232, 125, 125, 0.2);
  --color-accent-shadow-more: rgba(232, 125, 125, 0.1);
  --color-external: #4ed5ff;
  --divider-color: rgb(38, 38, 38);
  --divider-color-hover: rgb(203, 183, 250);
  --embed-block-shadow-hover: 0 0 0 1px rgb(38, 38, 38), inset 0 0 0 1px rgb(38, 38, 38);
  --embed-border-start: 2px solid rgb(203, 183, 250);
  --file-header-background: rgb(15, 15, 15);
  --file-header-background-focused: rgb(15, 15, 15);
  --flair-color: rgb(204, 204, 204);
  --footnote-divider-color: rgb(38, 38, 38);
  --footnote-id-color: rgb(140, 140, 140);
  --footnote-id-color-no-occurrences: rgb(77, 77, 77);
  --graph-node: rgb(140, 140, 140);
  --graph-node-focused: rgb(203, 183, 250);
  --graph-node-unresolved: rgb(77, 77, 77);
  --graph-text: rgb(204, 204, 204);
  --heading-formatting: rgb(77, 77, 77);
  --hr-color: rgb(38, 38, 38);
  --icon-bright: brightness(140%);
  --icon-color: rgb(140, 140, 140);
  --icon-color-active: rgb(203, 183, 250);
  --icon-color-focused: rgb(204, 204, 204);
  --icon-color-hover: rgb(140, 140, 140);
  --icon-dark: brightness(90%);
  --icon-normal: brightness(100%);
  --input-date-separator: rgb(77, 77, 77);
  --input-placeholder-color: rgb(77, 77, 77);
  --interactive-accent: rgb(203, 183, 250);
  --interactive-accent-hover: rgb(238, 231, 253);
  --interactive-accent-rgb: 66, 66, 66;
  --line-shadow: rgb(31, 31, 31);
  --line-width: 800px;
  --link-color: rgb(203, 183, 250);
  --link-color-hover: rgb(238, 231, 253);
  --link-external-color: rgb(203, 183, 250);
  --link-external-color-hover: rgb(238, 231, 253);
  --link-unresolved-color: rgb(203, 183, 250);
  --list-marker-color: rgb(77, 77, 77);
  --list-marker-color-collapsed: rgb(203, 183, 250);
  --list-marker-color-hover: rgb(140, 140, 140);
  --main-accent-d: 60%;
  --main-accent-h: 360;
  --main-accent-l: 10%;
  --main-accent-s: 70%;
  --max-width: 100%;
  --menu-background: rgb(26, 26, 26);
  --menu-border-color: rgb(51, 51, 51);
  --metadata-border-color: rgb(38, 38, 38);
  --metadata-divider-color: rgb(38, 38, 38);
  --metadata-input-text-color: rgb(204, 204, 204);
  --metadata-label-text-color: rgb(140, 140, 140);
  --metadata-label-text-color-hover: rgb(140, 140, 140);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(77, 77, 77);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(51, 51, 51);
  --modal-background: rgb(15, 15, 15);
  --nav-collapse-icon-color: rgb(77, 77, 77);
  --nav-collapse-icon-color-collapsed: rgb(77, 77, 77);
  --nav-heading-color: rgb(204, 204, 204);
  --nav-heading-color-collapsed: rgb(77, 77, 77);
  --nav-heading-color-collapsed-hover: rgb(140, 140, 140);
  --nav-heading-color-hover: rgb(204, 204, 204);
  --nav-item-color: rgb(140, 140, 140);
  --nav-item-color-active: rgb(204, 204, 204);
  --nav-item-color-highlighted: rgb(203, 183, 250);
  --nav-item-color-hover: rgb(204, 204, 204);
  --nav-item-color-selected: rgb(204, 204, 204);
  --nav-tag-color: rgb(77, 77, 77);
  --nav-tag-color-active: rgb(140, 140, 140);
  --nav-tag-color-hover: rgb(140, 140, 140);
  --normal-weight: 300;
  --pdf-background: rgb(15, 15, 15);
  --pdf-page-background: rgb(15, 15, 15);
  --pdf-shadow: 0 0 0 1px rgb(38, 38, 38);
  --pdf-sidebar-background: rgb(15, 15, 15);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(38, 38, 38);
  --pill-border-color: rgb(38, 38, 38);
  --pill-border-color-hover: rgb(51, 51, 51);
  --pill-color: rgb(140, 140, 140);
  --pill-color-hover: rgb(204, 204, 204);
  --pill-color-remove: rgb(77, 77, 77);
  --pill-color-remove-hover: rgb(203, 183, 250);
  --prompt-background: rgb(15, 15, 15);
  --quote-opening-modifier: rgb(64, 64, 64);
  --ribbon-background: rgb(26, 26, 26);
  --ribbon-background-collapsed: rgb(15, 15, 15);
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: rgb(140, 140, 140);
  --search-icon-color: rgb(140, 140, 140);
  --search-result-background: rgb(15, 15, 15);
  --setting-group-heading-color: rgb(204, 204, 204);
  --setting-items-background: rgb(18, 18, 18);
  --setting-items-border-color: rgb(38, 38, 38);
  --slider-thumb-border-color: rgb(51, 51, 51);
  --slider-track-background: rgb(38, 38, 38);
  --status-bar-background: rgb(26, 26, 26);
  --status-bar-border-color: rgb(38, 38, 38);
  --status-bar-text-color: rgb(140, 140, 140);
  --suggestion-background: rgb(15, 15, 15);
  --tab-background-active: rgb(15, 15, 15);
  --tab-container-background: rgb(26, 26, 26);
  --tab-divider-color: rgb(51, 51, 51);
  --tab-outline-color: rgb(38, 38, 38);
  --tab-switcher-background: rgb(26, 26, 26);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(26, 26, 26), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(224, 82, 82);
  --tab-text-color: rgb(77, 77, 77);
  --tab-text-color-active: rgb(140, 140, 140);
  --tab-text-color-focused: rgb(140, 140, 140);
  --tab-text-color-focused-active: rgb(140, 140, 140);
  --tab-text-color-focused-active-current: rgb(204, 204, 204);
  --tab-text-color-focused-highlighted: rgb(203, 183, 250);
  --table-add-button-border-color: rgb(38, 38, 38);
  --table-border-color: rgb(38, 38, 38);
  --table-drag-handle-background-active: rgb(203, 183, 250);
  --table-drag-handle-color: rgb(77, 77, 77);
  --table-header-border-color: rgb(38, 38, 38);
  --table-header-color: rgb(204, 204, 204);
  --table-selection-border-color: rgb(203, 183, 250);
  --tag-color: rgb(203, 183, 250);
  --tag-color-hover: rgb(203, 183, 250);
  --tags-fade-in-speed: 100ms cubic-bezier(0.4, 0, 1, 1);
  --tags-fade-out-speed: 2000ms cubic-bezier(0.4, 0, 1, 1);
  --text: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,'m1+ 1p';
  --text-accent: rgb(203, 183, 250);
  --text-accent-hover: rgb(238, 231, 253);
  --text-editor: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", 'm1+ 1p';
  --text-faint: rgb(77, 77, 77);
  --text-highlight-bg: rgba(168, 220, 250, 0.33);
  --text-muted: rgb(140, 140, 140);
  --text-normal: rgb(204, 204, 204);
  --text-selection: rgb(50, 50, 50);
  --text-shadow: rgb(33, 33, 33);
  --titlebar-background: rgb(26, 26, 26);
  --titlebar-background-focused: rgb(26, 26, 26);
  --titlebar-border-color: rgb(38, 38, 38);
  --titlebar-text-color: rgb(140, 140, 140);
  --titlebar-text-color-focused: rgb(204, 204, 204);
  --translucency: 0.95;
  --vault-profile-color: rgb(204, 204, 204);
  --vault-profile-color-hover: rgb(204, 204, 204);
  --view-width: 95%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: rgb(38, 38, 38);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > em, em {
  color: rgb(204, 204, 204);
  font-weight: 300;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > i, i {
  color: rgb(204, 204, 204);
  font-weight: 300;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > strong, strong {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .text-highlight {
  background-color: rgba(255, 251, 104, 0.06);
  color: rgb(255, 252, 125);
  font-weight: 300;
  outline: rgb(255, 252, 125) none 0px;
  text-decoration: rgb(255, 252, 125);
  text-decoration-color: rgb(255, 252, 125);
}

body del {
  color: rgb(204, 204, 204);
  font-weight: 300;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body p {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  outline: rgb(140, 140, 140) none 0px;
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    links: `body a.external, footer a {
  color: rgba(240, 168, 168, 0.9);
  outline: rgba(240, 168, 168, 0.9) none 0px;
  text-decoration: rgba(240, 168, 168, 0.9);
  text-decoration-color: rgba(240, 168, 168, 0.9);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(169, 135, 247);
  font-weight: 300;
  outline: rgb(169, 135, 247) none 0px;
  text-decoration: rgb(169, 135, 247);
  text-decoration-color: rgb(169, 135, 247);
}

body a.internal.broken {
  color: rgb(77, 77, 77);
  filter: brightness(1.2);
  font-weight: 300;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dl {
  margin-bottom: 14.08px;
  margin-top: 14.08px;
}

body dt {
  color: rgb(204, 204, 204);
  font-weight: 150;
}

body ol > li {
  color: rgb(204, 204, 204);
  text-align: left;
}

body ol.overflow {
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
  text-align: left;
}

body ul.overflow {
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

body blockquote {
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
  margin-top: 30px;
  width: 725.797px;
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
  font-weight: 150;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: left;
}

body th {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(204, 204, 204);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: center;
}

body thead {
  background-color: rgb(26, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(204, 204, 204);
}

body pre > code, pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
  text-align: justify;
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  text-align: justify;
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  filter: opacity(1);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(203, 183, 250);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(203, 183, 250);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body input[type=checkbox] {
  border-bottom-color: rgb(224, 82, 82);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(224, 82, 82);
  border-right-color: rgb(224, 82, 82);
  border-top-color: rgb(224, 82, 82);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  margin-right: 15px;
  width: 10px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='*'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='-'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='/'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='>'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='?'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='I'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='S'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='b'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='c'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='d'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='f'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='i'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='k'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='l'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='p'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='u'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='w'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body ul > li.task-list-item {
  text-align: left;
}`,
    search: `body .search > .search-button {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  font-weight: 150;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
  font-weight: 150;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(63, 63, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(38, 38, 38);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 24.64px;
  border-bottom-right-radius: 24.64px;
  border-top-left-radius: 24.64px;
  border-top-right-radius: 24.64px;
  font-weight: 150;
}

body a.internal.tag-link::before {
  color: rgb(203, 183, 250);
}

body h1 {
  color: rgb(204, 204, 204);
}

body h2 {
  color: rgb(204, 204, 204);
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 204, 204);
}

body h3 {
  color: rgb(204, 204, 204);
}

body h4 {
  color: rgb(204, 204, 204);
}

body h5 {
  color: rgb(204, 204, 204);
}

body h6 {
  color: rgb(204, 204, 204);
}

body hr {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(140, 140, 140);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(140, 140, 140);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(140, 140, 140);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(204, 204, 204);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}`,
    footer: `body footer {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgba(219, 219, 220, 0);
  border-left-color: rgba(219, 219, 220, 0);
  border-right-color: rgba(219, 219, 220, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

body footer ul li a {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

body .darkmode svg {
  color: rgb(140, 140, 140);
  stroke: rgb(140, 140, 140);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

body .breadcrumb-element p {
  color: rgb(77, 77, 77);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .metadata {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(140, 140, 140);
}

body .metadata-properties {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body input[type=text] {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 38, 38);
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-width: 1px;
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  padding-bottom: 5px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  font-size: 12.32px;
  padding-bottom: 1.232px;
  padding-left: 3.08px;
  padding-right: 3.08px;
  padding-top: 1.232px;
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
  font-size: 11.7333px;
}

body summary {
  color: rgb(204, 204, 204);
  font-weight: 150;
}

body sup {
  color: rgb(204, 204, 204);
  font-size: 11.7333px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 85%;
  --accent-h-o: 50;
  --background-match-highlight: rgba(143, 119, 197, 0.2);
  --background-modifier-accent: rgb(145, 102, 245);
  --background-modifier-border: rgb(222, 222, 222);
  --background-modifier-border-focus: rgb(191, 191, 191);
  --background-modifier-border-hover: rgb(212, 212, 212);
  --background-primary: rgb(230, 230, 230);
  --background-primary-alt: rgb(237, 237, 237);
  --background-secondary: rgb(242, 242, 242);
  --background-secondary-alt: rgb(242, 242, 242);
  --background-secondary-table: rgb(237, 237, 237);
  --background-tertiary: rgb(212, 212, 212);
  --background-translucent: rgba(242, 242, 242, 0.85);
  --background-transparent: rgba(242, 242, 242, 0);
  --base-d: 10%;
  --base-h: 0;
  --base-l: 95%;
  --base-s: 0%;
  --bases-cards-background: rgb(230, 230, 230);
  --bases-cards-cover-background: rgb(237, 237, 237);
  --bases-cards-shadow: 0 0 0 1px rgb(222, 222, 222);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(212, 212, 212);
  --bases-embed-border-color: rgb(222, 222, 222);
  --bases-group-heading-property-color: rgb(102, 102, 102);
  --bases-table-border-color: rgb(222, 222, 222);
  --bases-table-cell-background-active: rgb(230, 230, 230);
  --bases-table-cell-background-disabled: rgb(237, 237, 237);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(191, 191, 191);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-group-background: rgb(237, 237, 237);
  --bases-table-header-background: rgb(230, 230, 230);
  --bases-table-header-color: rgb(102, 102, 102);
  --bases-table-summary-background: rgb(230, 230, 230);
  --blockquote-border-color: rgb(138, 92, 245);
  --blur-background: color-mix(in srgb, rgb(230, 230, 230) 65%, transparent) linear-gradient(rgb(230, 230, 230), color-mix(in srgb, rgb(230, 230, 230) 65%, transparent));
  --button-background: rgb(217, 217, 217);
  --button-background-active: rgb(179, 179, 179);
  --buttons-fade-in-speed: filter 100ms ease-in-out;
  --buttons-fade-out-speed: filter 2000ms ease-in-out;
  --canvas-background: rgb(230, 230, 230);
  --canvas-card-label-color: hsl(0,0%,calc(95% - 3s5%));
  --caret-color: hsl(0,0%,-5%);
  --checkbox-border-color: hsl(0,0%,calc(95% - 3s5%));
  --checkbox-border-color-hover: rgb(102, 102, 102);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(103, 44, 242);
  --checkbox-marker-color: rgb(230, 230, 230);
  --checklist-done-color: rgb(102, 102, 102);
  --code-background: rgb(237, 237, 237);
  --code-border-color: rgb(222, 222, 222);
  --code-comment: hsl(0,0%,calc(95% - 3s5%));
  --code-normal: hsl(0,0%,-5%);
  --code-punctuation: rgb(102, 102, 102);
  --collapse-icon-color: hsl(0,0%,calc(95% - 3s5%));
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(224, 82, 82);
  --color-accent-bright: hsla(360,70%,65%,1.9);
  --color-accent-hover: rgb(227, 99, 99);
  --color-accent-hover-invert: rgb(102, 102, 102);
  --color-accent-shadow: rgba(232, 125, 125, 0.4);
  --color-external: #389ebd;
  --divider-color: rgb(222, 222, 222);
  --divider-color-hover: rgb(138, 92, 245);
  --embed-block-shadow-hover: 0 0 0 1px rgb(222, 222, 222), inset 0 0 0 1px rgb(222, 222, 222);
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --file-header-background: rgb(230, 230, 230);
  --file-header-background-focused: rgb(230, 230, 230);
  --flair-color: hsl(0,0%,-5%);
  --footnote-divider-color: rgb(222, 222, 222);
  --footnote-id-color: rgb(102, 102, 102);
  --footnote-id-color-no-occurrences: hsl(0,0%,calc(95% - 3s5%));
  --graph-node: rgb(102, 102, 102);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-unresolved: hsl(0,0%,calc(95% - 3s5%));
  --graph-text: hsl(0,0%,-5%);
  --heading-formatting: hsl(0,0%,calc(95% - 3s5%));
  --hr-color: rgb(222, 222, 222);
  --icon-bright: brightness(20%);
  --icon-color: rgb(102, 102, 102);
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-focused: hsl(0,0%,-5%);
  --icon-color-hover: rgb(102, 102, 102);
  --icon-dark: brightness(120%);
  --icon-normal: brightness(100%);
  --input-date-separator: hsl(0,0%,calc(95% - 3s5%));
  --input-placeholder-color: hsl(0,0%,calc(95% - 3s5%));
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(103, 44, 242);
  --interactive-accent-rgb: 220, 220, 220;
  --line-shadow: rgb(204, 204, 204);
  --line-width: 800px;
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(103, 44, 242);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(103, 44, 242);
  --link-unresolved-color: rgb(138, 92, 245);
  --list-marker-color: hsl(0,0%,calc(95% - 3s5%));
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --list-marker-color-hover: rgb(102, 102, 102);
  --main-accent-d: 60%;
  --main-accent-h: 360;
  --main-accent-l: 10%;
  --main-accent-s: 70%;
  --max-width: 100%;
  --menu-background: rgb(242, 242, 242);
  --menu-border-color: rgb(212, 212, 212);
  --metadata-border-color: rgb(222, 222, 222);
  --metadata-divider-color: rgb(222, 222, 222);
  --metadata-input-text-color: hsl(0,0%,-5%);
  --metadata-label-text-color: rgb(102, 102, 102);
  --metadata-label-text-color-hover: rgb(102, 102, 102);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(191, 191, 191);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(212, 212, 212);
  --modal-background: rgb(230, 230, 230);
  --nav-collapse-icon-color: hsl(0,0%,calc(95% - 3s5%));
  --nav-collapse-icon-color-collapsed: hsl(0,0%,calc(95% - 3s5%));
  --nav-heading-color: hsl(0,0%,-5%);
  --nav-heading-color-collapsed: hsl(0,0%,calc(95% - 3s5%));
  --nav-heading-color-collapsed-hover: rgb(102, 102, 102);
  --nav-heading-color-hover: hsl(0,0%,-5%);
  --nav-item-color: rgb(102, 102, 102);
  --nav-item-color-active: hsl(0,0%,-5%);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-item-color-hover: hsl(0,0%,-5%);
  --nav-item-color-selected: hsl(0,0%,-5%);
  --nav-tag-color: hsl(0,0%,calc(95% - 3s5%));
  --nav-tag-color-active: rgb(102, 102, 102);
  --nav-tag-color-hover: rgb(102, 102, 102);
  --normal-weight: 300;
  --pdf-background: rgb(230, 230, 230);
  --pdf-page-background: rgb(230, 230, 230);
  --pdf-sidebar-background: rgb(230, 230, 230);
  --pill-border-color: rgb(222, 222, 222);
  --pill-border-color-hover: rgb(212, 212, 212);
  --pill-color: rgb(102, 102, 102);
  --pill-color-hover: hsl(0,0%,-5%);
  --pill-color-remove: hsl(0,0%,calc(95% - 3s5%));
  --pill-color-remove-hover: rgb(138, 92, 245);
  --prompt-background: rgb(230, 230, 230);
  --quote-opening-modifier: rgb(204, 204, 204);
  --raised-background: color-mix(in srgb, rgb(230, 230, 230) 65%, transparent) linear-gradient(rgb(230, 230, 230), color-mix(in srgb, rgb(230, 230, 230) 65%, transparent));
  --ribbon-background: rgb(242, 242, 242);
  --ribbon-background-collapsed: rgb(230, 230, 230);
  --search-clear-button-color: rgb(102, 102, 102);
  --search-icon-color: rgb(102, 102, 102);
  --search-result-background: rgb(230, 230, 230);
  --setting-group-heading-color: hsl(0,0%,-5%);
  --setting-items-background: rgb(237, 237, 237);
  --setting-items-border-color: rgb(222, 222, 222);
  --slider-thumb-border-color: rgb(212, 212, 212);
  --slider-track-background: rgb(222, 222, 222);
  --status-bar-background: rgb(242, 242, 242);
  --status-bar-border-color: rgb(222, 222, 222);
  --status-bar-text-color: rgb(102, 102, 102);
  --suggestion-background: rgb(230, 230, 230);
  --tab-background-active: rgb(230, 230, 230);
  --tab-container-background: rgb(242, 242, 242);
  --tab-divider-color: rgb(212, 212, 212);
  --tab-outline-color: rgb(222, 222, 222);
  --tab-switcher-background: rgb(242, 242, 242);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(242, 242, 242), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(224, 82, 82);
  --tab-text-color: hsl(0,0%,calc(95% - 3s5%));
  --tab-text-color-active: rgb(102, 102, 102);
  --tab-text-color-focused: rgb(102, 102, 102);
  --tab-text-color-focused-active: rgb(102, 102, 102);
  --tab-text-color-focused-active-current: hsl(0,0%,-5%);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-add-button-border-color: rgb(222, 222, 222);
  --table-border-color: rgb(222, 222, 222);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: hsl(0,0%,calc(95% - 3s5%));
  --table-header-border-color: rgb(222, 222, 222);
  --table-header-color: hsl(0,0%,-5%);
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tags-fade-in-speed: 100ms cubic-bezier(0.4, 0, 1, 1);
  --tags-fade-out-speed: 2000ms cubic-bezier(0.4, 0, 1, 1);
  --text: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,'m1+ 1p';
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(103, 44, 242);
  --text-editor: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", 'm1+ 1p';
  --text-faint: hsl(0,0%,calc(95% - 3s5%));
  --text-muted: rgb(102, 102, 102);
  --text-normal: hsl(0,0%,-5%);
  --text-selection: rgb(227, 227, 227);
  --text-shadow: rgb(230, 230, 230);
  --titlebar-background: rgb(242, 242, 242);
  --titlebar-background-focused: rgb(242, 242, 242);
  --titlebar-border-color: rgb(222, 222, 222);
  --titlebar-text-color: rgb(102, 102, 102);
  --titlebar-text-color-focused: hsl(0,0%,-5%);
  --translucency: 0.85;
  --vault-profile-color: hsl(0,0%,-5%);
  --vault-profile-color-hover: hsl(0,0%,-5%);
  --view-width: 95%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(230, 230, 230);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(222, 222, 222);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgb(222, 222, 222);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(230, 230, 230);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(255, 251, 104, 0.32);
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `body a.external, footer a {
  color: rgb(228, 103, 103);
  outline: rgb(228, 103, 103) none 0px;
  text-decoration: rgb(228, 103, 103);
  text-decoration-color: rgb(228, 103, 103);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 102, 245);
  font-weight: 300;
  outline: rgb(145, 102, 245) none 0px;
  text-decoration: rgb(145, 102, 245);
  text-decoration-color: rgb(145, 102, 245);
}

body a.internal.broken {
  color: rgb(0, 0, 0);
  filter: opacity(0.3);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dl {
  margin-bottom: 14.08px;
  margin-top: 14.08px;
}

body dt {
  color: rgb(0, 0, 0);
  font-weight: 150;
}

body ol > li {
  color: rgb(0, 0, 0);
  text-align: left;
}

body ol.overflow {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
  text-align: left;
}

body ul.overflow {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body blockquote {
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  margin-top: 30px;
  width: 725.797px;
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  font-weight: 150;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: left;
}

body th {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: center;
}

body thead {
  background-color: rgb(242, 242, 242);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(0, 0, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body pre:has(> code) {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  text-align: justify;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  text-align: justify;
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  filter: opacity(0.95);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body input[type=checkbox] {
  border-bottom-color: rgb(224, 82, 82);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(224, 82, 82);
  border-right-color: rgb(224, 82, 82);
  border-top-color: rgb(224, 82, 82);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  margin-right: 15px;
  width: 10px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body ul > li.task-list-item {
  text-align: left;
}`,
    search: `body .search > .search-button {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 242, 242);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-weight: 150;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
  font-weight: 150;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(222, 222, 222);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 24.64px;
  border-bottom-right-radius: 24.64px;
  border-top-left-radius: 24.64px;
  border-top-right-radius: 24.64px;
  font-weight: 150;
}

body h1 {
  color: rgb(0, 0, 0);
}

body h2 {
  color: rgb(0, 0, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

body h3 {
  color: rgb(0, 0, 0);
}

body h4 {
  color: rgb(0, 0, 0);
}

body h5 {
  color: rgb(0, 0, 0);
}

body h6 {
  color: rgb(0, 0, 0);
}

body hr {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-corner {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-track {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(102, 102, 102);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(102, 102, 102);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(102, 102, 102);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(0, 0, 0);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}`,
    footer: `body footer {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgba(219, 219, 220, 0);
  border-left-color: rgba(219, 219, 220, 0);
  border-right-color: rgba(219, 219, 220, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

body footer ul li a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body .darkmode svg {
  color: rgb(102, 102, 102);
  stroke: rgb(102, 102, 102);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body .breadcrumb-element p {
  color: rgb(102, 102, 102);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(102, 102, 102);
}

body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(222, 222, 222);
  border-left-width: 1px;
  border-right-color: rgb(222, 222, 222);
  border-right-width: 1px;
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  padding-bottom: 5px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-size: 12.32px;
  padding-bottom: 1.232px;
  padding-left: 3.08px;
  padding-right: 3.08px;
  padding-top: 1.232px;
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
  font-size: 11.7333px;
}

body summary {
  color: rgb(0, 0, 0);
  font-weight: 150;
}

body sup {
  color: rgb(0, 0, 0);
  font-size: 11.7333px;
}`,
  },
};
