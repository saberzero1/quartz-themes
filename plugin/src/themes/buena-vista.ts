import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "buena-vista",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-i-h: 438;
  --accent-l-alt: max(66%, 75%);
  --accent-s-alt: max(66%, 75%);
  --background-blurred: rgb(26, 26, 26);
  --background-blurred-alt: rgb(36, 36, 36);
  --background-modifier-border: rgb(69, 69, 69);
  --background-modifier-border-focus: rgb(89, 89, 89);
  --background-modifier-border-hover: rgb(79, 79, 79);
  --background-modifier-form-field: rgb(41, 41, 41);
  --background-modifier-form-field-hover: rgb(41, 41, 41);
  --background-modifier-hover: rgb(73, 13, 211);
  --background-primary: rgb(26, 26, 26);
  --background-primary-alt: rgb(36, 36, 36);
  --background-secondary: rgb(69, 69, 69);
  --background-secondary-alt: rgb(69, 69, 69);
  --background-semitransp: rgba(26, 26, 26, 0.85);
  --background-semitransp-alt: rgba(36, 36, 36, 0.85);
  --bases-cards-background: rgb(26, 26, 26);
  --bases-cards-cover-background: rgb(36, 36, 36);
  --bases-cards-shadow: 0 0 0 1px rgb(69, 69, 69);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(79, 79, 79);
  --bases-embed-border-color: rgb(69, 69, 69);
  --bases-group-heading-property-color: rgb(166, 166, 166);
  --bases-table-border-color: rgb(69, 69, 69);
  --bases-table-cell-background-active: rgb(26, 26, 26);
  --bases-table-cell-background-disabled: rgb(36, 36, 36);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 89, 89);
  --bases-table-group-background: rgb(36, 36, 36);
  --bases-table-header-background: rgb(26, 26, 26);
  --bases-table-header-background-hover: rgb(73, 13, 211);
  --bases-table-header-color: rgb(166, 166, 166);
  --bases-table-summary-background: rgb(26, 26, 26);
  --bases-table-summary-background-hover: rgb(73, 13, 211);
  --blockquote-border-thickness: 0;
  --blur-background: color-mix(in srgb, rgb(69, 69, 69) 65%, transparent) linear-gradient(rgb(69, 69, 69), color-mix(in srgb, rgb(69, 69, 69) 65%, transparent));
  --blur-size: 4;
  --bold-color: hsl(438,  88%, 76%);
  --bold-h: 438;
  --button-alt-h: 258;
  --button-h: 258;
  --callout-background-hsla: 258, 88%, 66%, 20%;
  --callout-h: 258;
  --canvas-background: rgb(26, 26, 26);
  --canvas-card-label-color: rgb(112, 112, 112);
  --canvas-dot-pattern: rgb(69, 69, 69);
  --caret-color: rgb(255, 255, 255);
  --checkbox-border-color: rgb(112, 112, 112);
  --checkbox-border-color-hover: rgb(166, 166, 166);
  --checkbox-color: rgb(141, 103, 228);
  --checkbox-color-hover: rgb(172, 140, 248);
  --checkbox-marker-color: rgb(26, 26, 26);
  --checklist-done-color: rgb(166, 166, 166);
  --code-background: rgb(36, 36, 36);
  --code-border-color: rgb(69, 69, 69);
  --code-bracket-background: rgb(73, 13, 211);
  --code-comment: rgb(112, 112, 112);
  --code-normal: rgb(255, 255, 255);
  --code-punctuation: rgb(166, 166, 166);
  --collapse-icon-color: rgb(112, 112, 112);
  --color-00-l: 10.0%;
  --color-05-l: 11.4%;
  --color-10-l: 13.6%;
  --color-100-l: 100%;
  --color-15-l: 16.3%;
  --color-20-l: 19.5%;
  --color-25-l: 22.9%;
  --color-30-l: 26.7%;
  --color-35-l: 30.7%;
  --color-40-l: 34.9%;
  --color-50-l: 44.1%;
  --color-60-l: 54.0%;
  --color-70-l: 64.6%;
  --color-80-l: 75.9%;
  --color-90-l: 87.7%;
  --color-base-00: rgb(26, 26, 26);
  --color-base-00-transp: #1e1e1e80;
  --color-base-05: rgb(28, 28, 28);
  --color-base-10: rgb(36, 36, 36);
  --color-base-10-transp: #24242480;
  --color-base-100: rgb(255, 255, 255);
  --color-base-15: rgb(41, 41, 41);
  --color-base-20: rgb(51, 51, 51);
  --color-base-20-transp: #26262680;
  --color-base-25: rgb(59, 59, 59);
  --color-base-30: rgb(69, 69, 69);
  --color-base-30-transp: #36363680;
  --color-base-35: rgb(79, 79, 79);
  --color-base-40: rgb(89, 89, 89);
  --color-base-50: rgb(112, 112, 112);
  --color-base-60: rgb(138, 138, 138);
  --color-base-70: rgb(166, 166, 166);
  --color-base-80: rgb(194, 194, 194);
  --color-base-90: rgb(224, 224, 224);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(69, 69, 69);
  --dropdown-background: rgb(69, 69, 69);
  --dropdown-background-hover: rgb(79, 79, 79);
  --embed-block-shadow-hover: 0 0 0 1px rgb(69, 69, 69), inset 0 0 0 1px rgb(69, 69, 69);
  --embed-border-left: 1px solid rgb(138, 92, 245);
  --embed-border-right: dashed white 1px;
  --embed-max-height: 80vh;
  --file-header-background: rgb(26, 26, 26);
  --file-header-background-focused: rgb(26, 26, 26);
  --file-header-font-weight: 600;
  --flair-background: rgb(69, 69, 69);
  --flair-color: rgb(255, 255, 255);
  --footnote-divider-color: rgb(69, 69, 69);
  --footnote-id-color: rgb(166, 166, 166);
  --footnote-id-color-no-occurrences: rgb(112, 112, 112);
  --footnote-input-background-active: rgb(73, 13, 211);
  --graph-line: rgb(79, 79, 79);
  --graph-node: rgb(166, 166, 166);
  --graph-node-unresolved: rgb(112, 112, 112);
  --graph-text: rgb(255, 255, 255);
  --gray: var(--text-muted);
  --heading-formatting: rgb(112, 112, 112);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(69, 69, 69);
  --icon-color: rgb(166, 166, 166);
  --icon-color-focused: rgb(255, 255, 255);
  --icon-color-hover: rgb(214, 197, 251);
  --input-date-separator: rgb(112, 112, 112);
  --input-placeholder-color: rgb(112, 112, 112);
  --interactive-hover: rgb(79, 79, 79);
  --interactive-normal: rgb(69, 69, 69);
  --italic-color: rgb(172, 140, 248);
  --italic-h: 258;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-marker-color: rgb(112, 112, 112);
  --list-marker-color-hover: rgb(166, 166, 166);
  --max-highlight: 45%;
  --menu-background: rgb(69, 69, 69);
  --menu-border-color: rgb(79, 79, 79);
  --metadata-border-color: rgb(69, 69, 69);
  --metadata-divider-color: rgb(69, 69, 69);
  --metadata-input-background-active: rgb(73, 13, 211);
  --metadata-input-text-color: rgb(255, 255, 255);
  --metadata-label-background-active: rgb(73, 13, 211);
  --metadata-label-text-color: rgb(166, 166, 166);
  --metadata-label-text-color-hover: rgb(166, 166, 166);
  --metadata-property-background-active: rgb(73, 13, 211);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 89, 89);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(79, 79, 79);
  --min-highlight: 35%;
  --modal-background: rgb(26, 26, 26);
  --modal-border-color: rgb(89, 89, 89);
  --modal-border-width: 0;
  --nav-collapse-icon-color: rgb(112, 112, 112);
  --nav-collapse-icon-color-collapsed: rgb(112, 112, 112);
  --nav-heading-color: rgb(255, 255, 255);
  --nav-heading-color-collapsed: rgb(112, 112, 112);
  --nav-heading-color-collapsed-hover: rgb(166, 166, 166);
  --nav-heading-color-hover: rgb(255, 255, 255);
  --nav-item-background-active: rgb(138, 92, 245);
  --nav-item-background-hover: rgba(58, 11, 168, 0.33);
  --nav-item-color: rgb(166, 166, 166);
  --nav-item-color-active: white;
  --nav-item-color-hover: rgb(214, 197, 251);
  --nav-item-color-selected: rgb(255, 255, 255);
  --nav-tag-color: rgb(112, 112, 112);
  --nav-tag-color-active: rgb(166, 166, 166);
  --nav-tag-color-hover: rgb(166, 166, 166);
  --pdf-background: rgb(26, 26, 26);
  --pdf-page-background: rgb(26, 26, 26);
  --pdf-shadow: 0 0 0 1px rgb(69, 69, 69);
  --pdf-sidebar-background: rgb(26, 26, 26);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 69, 69);
  --pill-border-color: rgb(69, 69, 69);
  --pill-border-color-hover: rgb(79, 79, 79);
  --pill-color: rgb(166, 166, 166);
  --pill-color-hover: rgb(255, 255, 255);
  --pill-color-remove: rgb(112, 112, 112);
  --prompt-background: rgb(26, 26, 26);
  --prompt-border-color: rgb(89, 89, 89);
  --prompt-border-width: 0;
  --raised-background: color-mix(in srgb, rgb(69, 69, 69) 65%, transparent) linear-gradient(rgb(69, 69, 69), color-mix(in srgb, rgb(69, 69, 69) 65%, transparent));
  --ribbon-background: rgb(69, 69, 69);
  --ribbon-background-collapsed: rgb(26, 26, 26);
  --search-clear-button-color: rgb(166, 166, 166);
  --search-icon-color: rgb(166, 166, 166);
  --search-result-background: rgb(26, 26, 26);
  --setting-group-heading-color: rgb(255, 255, 255);
  --setting-items-background: rgb(36, 36, 36);
  --setting-items-border-color: rgb(69, 69, 69);
  --slider-thumb-border-color: rgb(79, 79, 79);
  --slider-track-background: rgb(69, 69, 69);
  --status-bar-background: rgb(69, 69, 69);
  --status-bar-border-color: rgb(69, 69, 69);
  --status-bar-text-color: rgb(166, 166, 166);
  --suggestion-background: rgb(26, 26, 26);
  --tab-background-active: rgb(26, 26, 26);
  --tab-container-background: rgb(51, 51, 51);
  --tab-divider-color: rgb(79, 79, 79);
  --tab-outline-color: rgb(69, 69, 69);
  --tab-outline-width: 0;
  --tab-switcher-background: rgb(69, 69, 69);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(69, 69, 69), transparent);
  --tab-text-color: rgb(112, 112, 112);
  --tab-text-color-active: rgb(166, 166, 166);
  --tab-text-color-focused: rgb(166, 166, 166);
  --tab-text-color-focused-active: rgb(166, 166, 166);
  --tab-text-color-focused-active-current: rgb(255, 255, 255);
  --table-add-button-border-color: rgb(69, 69, 69);
  --table-border-color: rgb(69, 69, 69);
  --table-drag-handle-color: rgb(112, 112, 112);
  --table-header-border-color: rgb(69, 69, 69);
  --table-header-color: rgb(255, 255, 255);
  --text-faint: rgb(112, 112, 112);
  --text-highlight-bg: hsla( 438, 88%, 66%, 50%);
  --text-highlight-h: 438;
  --text-muted: rgb(166, 166, 166);
  --text-normal: rgb(255, 255, 255);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(51, 51, 51);
  --titlebar-background-focused: #36363680;
  --titlebar-border-color: rgb(69, 69, 69);
  --titlebar-text-color: rgb(166, 166, 166);
  --titlebar-text-color-focused: rgb(255, 255, 255);
  --vault-profile-color: rgb(255, 255, 255);
  --vault-profile-color-hover: rgb(255, 255, 255);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 35, 35);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 68, 68);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(215, 248, 139);
  outline: rgb(215, 248, 139) none 0px;
  text-decoration: rgb(215, 248, 139);
  text-decoration-color: rgb(215, 248, 139);
}

body .page article p > em, em {
  color: rgb(172, 139, 248);
  outline: rgb(172, 139, 248) none 0px;
  text-decoration: rgb(172, 139, 248);
  text-decoration-color: rgb(172, 139, 248);
}

body .page article p > i, i {
  color: rgb(172, 139, 248);
  outline: rgb(172, 139, 248) none 0px;
  text-decoration: rgb(172, 139, 248);
  text-decoration-color: rgb(172, 139, 248);
}

body .page article p > strong, strong {
  color: rgb(215, 248, 139);
  outline: rgb(215, 248, 139) none 0px;
  text-decoration: rgb(215, 248, 139);
  text-decoration-color: rgb(215, 248, 139);
}

body .text-highlight {
  background-color: rgba(199, 245, 92, 0.5);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(165, 165, 165);
  outline: rgb(165, 165, 165) none 0px;
  text-decoration: rgb(165, 165, 165);
  text-decoration-color: rgb(165, 165, 165);
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
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  background-color: rgba(35, 35, 35, 0.85);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
}

body td {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body pre:has(> code) {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
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
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  background-color: rgba(35, 35, 35, 0.85);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .transclude-inner {
  background-color: rgba(35, 35, 35, 0.85);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(165, 165, 165);
  text-decoration: line-through rgb(165, 165, 165);
  text-decoration-color: rgb(165, 165, 165);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
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
    callouts: `body .callout .callout-title {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-width: 0px;
  border-left-color: rgb(89, 89, 89);
  border-left-width: 0px;
  border-right-color: rgb(89, 89, 89);
  border-right-width: 0px;
  border-top-color: rgb(89, 89, 89);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(73, 13, 211, 0.25);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-width: 0px;
  border-left-color: rgb(89, 89, 89);
  border-left-width: 0px;
  border-right-color: rgb(89, 89, 89);
  border-right-width: 0px;
  border-top-color: rgb(89, 89, 89);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(73, 13, 211, 0.25);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(73, 13, 211, 0.25);
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(255, 255, 255);
}

body h2 {
  color: rgb(255, 255, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
}

body h3 {
  color: rgb(255, 255, 255);
}

body h4 {
  color: rgb(255, 255, 255);
}

body h5 {
  color: rgb(255, 255, 255);
}

body h6 {
  color: rgb(255, 255, 255);
}

body hr {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
}`,
    scrollbars: `body .callout {
  padding-bottom: 8px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(165, 165, 165);
  cursor: pointer;
  font-weight: 600;
  text-decoration: rgb(165, 165, 165);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(165, 165, 165);
  cursor: pointer;
  font-weight: 600;
  text-decoration: rgb(165, 165, 165);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(165, 165, 165);
  cursor: pointer;
  text-decoration: rgb(165, 165, 165);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}`,
    footer: `body footer {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(165, 165, 165);
}

body footer ul li a {
  color: rgb(165, 165, 165);
  text-decoration: rgb(165, 165, 165);
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
  color: rgb(165, 165, 165);
  text-decoration: rgb(165, 165, 165);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(165, 165, 165);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(165, 165, 165);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(165, 165, 165);
  text-decoration: rgb(165, 165, 165);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

body .darkmode svg {
  color: rgb(165, 165, 165);
  stroke: rgb(165, 165, 165);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

body .breadcrumb-element p {
  color: rgb(112, 112, 112);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(165, 165, 165);
}

body .metadata-properties {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

body .navigation-progress {
  background-color: rgb(68, 68, 68);
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
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

body kbd {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
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
  --accent-i-h: 438;
  --accent-l-alt: min(66%, 40%);
  --accent-s-alt: min(110%, 75%);
  --background-blurred: rgb(255, 255, 255);
  --background-blurred-alt: rgb(245, 245, 245);
  --background-modifier-border: rgb(207, 207, 207);
  --background-modifier-border-focus: rgb(186, 186, 186);
  --background-modifier-border-hover: rgb(196, 196, 196);
  --background-modifier-form-field: rgb(235, 235, 235);
  --background-modifier-form-field-hover: rgb(235, 235, 235);
  --background-modifier-hover: rgb(127, 78, 244);
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(245, 245, 245);
  --background-secondary: rgb(207, 207, 207);
  --background-secondary-alt: rgb(250, 250, 250);
  --background-semitransp: rgba(255, 255, 255, 0.85);
  --background-semitransp-alt: rgba(245, 245, 245, 0.85);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(245, 245, 245);
  --bases-cards-shadow: 0 0 0 1px rgb(207, 207, 207);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(196, 196, 196);
  --bases-embed-border-color: rgb(207, 207, 207);
  --bases-group-heading-property-color: rgb(110, 110, 110);
  --bases-table-border-color: rgb(207, 207, 207);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(245, 245, 245);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(186, 186, 186);
  --bases-table-group-background: rgb(245, 245, 245);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-background-hover: rgb(127, 78, 244);
  --bases-table-header-color: rgb(110, 110, 110);
  --bases-table-summary-background: rgb(255, 255, 255);
  --bases-table-summary-background-hover: rgb(127, 78, 244);
  --blockquote-border-thickness: 0;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --blur-size: 4;
  --bold-color: hsl(438,  88%, 33%);
  --bold-h: 438;
  --button-alt-h: 258;
  --button-h: 258;
  --callout-background-hsla: 258, 88%, 66%, 20%;
  --callout-h: 258;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgb(161, 161, 161);
  --canvas-dot-pattern: rgb(207, 207, 207);
  --caret-color: rgb(26, 26, 26);
  --checkbox-border-color: rgb(161, 161, 161);
  --checkbox-border-color-hover: rgb(110, 110, 110);
  --checkbox-color: rgb(79, 33, 186);
  --checkbox-color-hover: rgb(55, 10, 158);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checklist-done-color: rgb(110, 110, 110);
  --code-background: rgb(245, 245, 245);
  --code-border-color: rgb(207, 207, 207);
  --code-bracket-background: rgb(127, 78, 244);
  --code-comment: rgb(161, 161, 161);
  --code-normal: rgb(26, 26, 26);
  --code-punctuation: rgb(110, 110, 110);
  --collapse-icon-color: rgb(161, 161, 161);
  --color-00-l: 100%;
  --color-05-l: 98.2%;
  --color-10-l: 95.5%;
  --color-100-l: 10%;
  --color-15-l: 92.4%;
  --color-20-l: 88.9%;
  --color-25-l: 85.2%;
  --color-30-l: 81.2%;
  --color-35-l: 77.0%;
  --color-40-l: 72.7%;
  --color-50-l: 63.4%;
  --color-60-l: 53.7%;
  --color-70-l: 43.4%;
  --color-80-l: 32.7%;
  --color-90-l: 21.5%;
  --color-base-00: rgb(255, 255, 255);
  --color-base-00-transp: #ffffff80;
  --color-base-05: rgb(250, 250, 250);
  --color-base-10: rgb(245, 245, 245);
  --color-base-10-transp: #fafafa80;
  --color-base-100: rgb(26, 26, 26);
  --color-base-15: rgb(235, 235, 235);
  --color-base-20: rgb(227, 227, 227);
  --color-base-20-transp: #f6f6f680;
  --color-base-25: rgb(217, 217, 217);
  --color-base-30: rgb(207, 207, 207);
  --color-base-30-transp: #e0e0e080;
  --color-base-35: rgb(196, 196, 196);
  --color-base-40: rgb(186, 186, 186);
  --color-base-50: rgb(161, 161, 161);
  --color-base-60: rgb(138, 138, 138);
  --color-base-70: rgb(110, 110, 110);
  --color-base-80: rgb(84, 84, 84);
  --color-base-90: rgb(56, 56, 56);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(207, 207, 207);
  --dropdown-background: rgb(255, 255, 255);
  --dropdown-background-hover: rgb(245, 245, 245);
  --embed-block-shadow-hover: 0 0 0 1px rgb(207, 207, 207), inset 0 0 0 1px rgb(207, 207, 207);
  --embed-border-left: 1px solid rgb(153, 115, 247);
  --embed-border-right: dashed white 1px;
  --embed-max-height: 80vh;
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --file-header-font-weight: 600;
  --flair-background: rgb(255, 255, 255);
  --flair-color: rgb(26, 26, 26);
  --footnote-divider-color: rgb(207, 207, 207);
  --footnote-id-color: rgb(110, 110, 110);
  --footnote-id-color-no-occurrences: rgb(161, 161, 161);
  --footnote-input-background-active: rgb(127, 78, 244);
  --graph-line: rgb(196, 196, 196);
  --graph-node: rgb(110, 110, 110);
  --graph-node-unresolved: rgb(161, 161, 161);
  --graph-text: rgb(26, 26, 26);
  --gray: var(--text-muted);
  --heading-formatting: rgb(161, 161, 161);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(207, 207, 207);
  --icon-color: rgb(110, 110, 110);
  --icon-color-focused: rgb(26, 26, 26);
  --icon-color-hover: rgb(36, 7, 105);
  --input-date-separator: rgb(161, 161, 161);
  --input-placeholder-color: rgb(161, 161, 161);
  --interactive-hover: rgb(245, 245, 245);
  --interactive-normal: rgb(255, 255, 255);
  --italic-color: rgb(55, 10, 158);
  --italic-h: 258;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-marker-color: rgb(161, 161, 161);
  --list-marker-color-hover: rgb(110, 110, 110);
  --max-highlight: 65%;
  --menu-background: rgb(207, 207, 207);
  --menu-border-color: rgb(196, 196, 196);
  --metadata-border-color: rgb(207, 207, 207);
  --metadata-divider-color: rgb(207, 207, 207);
  --metadata-input-background-active: rgb(127, 78, 244);
  --metadata-input-text-color: rgb(26, 26, 26);
  --metadata-label-background-active: rgb(127, 78, 244);
  --metadata-label-text-color: rgb(110, 110, 110);
  --metadata-label-text-color-hover: rgb(110, 110, 110);
  --metadata-property-background-active: rgb(127, 78, 244);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(186, 186, 186);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(196, 196, 196);
  --min-highlight: 45%;
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: rgb(186, 186, 186);
  --modal-border-width: 0;
  --nav-collapse-icon-color: rgb(161, 161, 161);
  --nav-collapse-icon-color-collapsed: rgb(161, 161, 161);
  --nav-heading-color: rgb(26, 26, 26);
  --nav-heading-color-collapsed: rgb(161, 161, 161);
  --nav-heading-color-collapsed-hover: rgb(110, 110, 110);
  --nav-heading-color-hover: rgb(26, 26, 26);
  --nav-item-background-active: rgb(153, 115, 247);
  --nav-item-background-hover: rgba(162, 126, 247, 0.33);
  --nav-item-color: rgb(110, 110, 110);
  --nav-item-color-active: white;
  --nav-item-color-hover: rgb(36, 7, 105);
  --nav-item-color-selected: rgb(26, 26, 26);
  --nav-tag-color: rgb(161, 161, 161);
  --nav-tag-color-active: rgb(110, 110, 110);
  --nav-tag-color-hover: rgb(110, 110, 110);
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: rgb(207, 207, 207);
  --pill-border-color-hover: rgb(196, 196, 196);
  --pill-color: rgb(110, 110, 110);
  --pill-color-hover: rgb(26, 26, 26);
  --pill-color-remove: rgb(161, 161, 161);
  --prompt-background: rgb(255, 255, 255);
  --prompt-border-color: rgb(186, 186, 186);
  --prompt-border-width: 0;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(207, 207, 207);
  --ribbon-background-collapsed: rgb(255, 255, 255);
  --search-clear-button-color: rgb(110, 110, 110);
  --search-icon-color: rgb(110, 110, 110);
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: rgb(26, 26, 26);
  --setting-items-background: rgb(245, 245, 245);
  --setting-items-border-color: rgb(207, 207, 207);
  --slider-thumb-border-color: rgb(196, 196, 196);
  --slider-track-background: rgb(207, 207, 207);
  --status-bar-background: rgb(207, 207, 207);
  --status-bar-border-color: rgb(207, 207, 207);
  --status-bar-text-color: rgb(110, 110, 110);
  --suggestion-background: rgb(255, 255, 255);
  --tab-background-active: rgb(255, 255, 255);
  --tab-container-background: rgb(227, 227, 227);
  --tab-divider-color: rgb(196, 196, 196);
  --tab-outline-color: rgb(207, 207, 207);
  --tab-outline-width: 0;
  --tab-switcher-background: rgb(207, 207, 207);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(207, 207, 207), transparent);
  --tab-text-color: rgb(161, 161, 161);
  --tab-text-color-active: rgb(110, 110, 110);
  --tab-text-color-focused: rgb(110, 110, 110);
  --tab-text-color-focused-active: rgb(110, 110, 110);
  --tab-text-color-focused-active-current: rgb(26, 26, 26);
  --table-add-button-border-color: rgb(207, 207, 207);
  --table-border-color: rgb(207, 207, 207);
  --table-drag-handle-color: rgb(161, 161, 161);
  --table-header-border-color: rgb(207, 207, 207);
  --table-header-color: rgb(26, 26, 26);
  --text-faint: rgb(161, 161, 161);
  --text-highlight-bg: hsla( 438, 88%, 66%, 50%);
  --text-highlight-h: 438;
  --text-muted: rgb(110, 110, 110);
  --text-normal: rgb(26, 26, 26);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(227, 227, 227);
  --titlebar-background-focused: #e0e0e080;
  --titlebar-border-color: rgb(207, 207, 207);
  --titlebar-text-color: rgb(110, 110, 110);
  --titlebar-text-color-focused: rgb(26, 26, 26);
  --vault-profile-color: rgb(26, 26, 26);
  --vault-profile-color-hover: rgb(26, 26, 26);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 244);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 207, 207);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

body div#quartz-root {
  color: rgb(26, 26, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(113, 157, 10);
  outline: rgb(113, 157, 10) none 0px;
  text-decoration: rgb(113, 157, 10);
  text-decoration-color: rgb(113, 157, 10);
}

body .page article p > em, em {
  color: rgb(54, 10, 157);
  outline: rgb(54, 10, 157) none 0px;
  text-decoration: rgb(54, 10, 157);
  text-decoration-color: rgb(54, 10, 157);
}

body .page article p > i, i {
  color: rgb(54, 10, 157);
  outline: rgb(54, 10, 157) none 0px;
  text-decoration: rgb(54, 10, 157);
  text-decoration-color: rgb(54, 10, 157);
}

body .page article p > strong, strong {
  color: rgb(113, 157, 10);
  outline: rgb(113, 157, 10) none 0px;
  text-decoration: rgb(113, 157, 10);
  text-decoration-color: rgb(113, 157, 10);
}

body .text-highlight {
  background-color: rgba(199, 245, 92, 0.5);
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body del {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body p {
  color: rgb(111, 111, 111);
  outline: rgb(111, 111, 111) none 0px;
  text-decoration: rgb(111, 111, 111);
  text-decoration-color: rgb(111, 111, 111);
}`,
    lists: `body dd {
  color: rgb(26, 26, 26);
}

body dt {
  color: rgb(26, 26, 26);
}

body ol > li {
  color: rgb(26, 26, 26);
}

body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ul > li {
  color: rgb(26, 26, 26);
}

body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(152, 115, 247);
  text-decoration: rgb(152, 115, 247);
}

body blockquote {
  background-color: rgba(244, 244, 244, 0.85);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body table {
  color: rgb(26, 26, 26);
}

body td {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

body th {
  border-bottom-color: rgb(207, 207, 207);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

body pre > code, pre:has(> code) {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
}

body pre:has(> code) {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body figcaption {
  color: rgb(26, 26, 26);
}

body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `body .file-embed {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
}

body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .transclude {
  background-color: rgba(244, 244, 244, 0.85);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 0px;
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .transclude-inner {
  background-color: rgba(244, 244, 244, 0.85);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 0px;
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(111, 111, 111);
  text-decoration: line-through rgb(111, 111, 111);
  text-decoration-color: rgb(111, 111, 111);
}

body input[type=checkbox] {
  border-bottom-color: rgb(162, 162, 162);
  border-left-color: rgb(162, 162, 162);
  border-right-color: rgb(162, 162, 162);
  border-top-color: rgb(162, 162, 162);
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(185, 185, 185);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 185, 185);
  border-left-width: 0px;
  border-right-color: rgb(185, 185, 185);
  border-right-width: 0px;
  border-top-color: rgb(185, 185, 185);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(129, 80, 244, 0.25);
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(185, 185, 185);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 185, 185);
  border-left-width: 0px;
  border-right-color: rgb(185, 185, 185);
  border-right-width: 0px;
  border-top-color: rgb(185, 185, 185);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(129, 80, 244, 0.25);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(129, 80, 244, 0.25);
  color: rgb(26, 26, 26);
}

body h1 {
  color: rgb(26, 26, 26);
}

body h2 {
  color: rgb(26, 26, 26);
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 26, 26);
}

body h3 {
  color: rgb(26, 26, 26);
}

body h4 {
  color: rgb(26, 26, 26);
}

body h5 {
  color: rgb(26, 26, 26);
}

body h6 {
  color: rgb(26, 26, 26);
}

body hr {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
}`,
    scrollbars: `body .callout {
  padding-bottom: 8px;
  padding-top: 8px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 111, 111);
  cursor: pointer;
  font-weight: 600;
  text-decoration: rgb(111, 111, 111);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 111, 111);
  cursor: pointer;
  font-weight: 600;
  text-decoration: rgb(111, 111, 111);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(111, 111, 111);
  cursor: pointer;
  text-decoration: rgb(111, 111, 111);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(152, 115, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}`,
    footer: `body footer {
  background-color: rgb(207, 207, 207);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(111, 111, 111);
}

body footer ul li a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 111, 111);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body li.section-li > .section .meta {
  color: rgb(111, 111, 111);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body .darkmode svg {
  color: rgb(111, 111, 111);
  stroke: rgb(111, 111, 111);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body .breadcrumb-element p {
  color: rgb(162, 162, 162);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .metadata {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(111, 111, 111);
}

body .metadata-properties {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body .navigation-progress {
  background-color: rgb(207, 207, 207);
}

body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

body abbr {
  color: rgb(26, 26, 26);
  text-decoration: underline dotted rgb(26, 26, 26);
}

body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body input[type=text] {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

body kbd {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body sub {
  color: rgb(26, 26, 26);
}

body summary {
  color: rgb(26, 26, 26);
}

body sup {
  color: rgb(26, 26, 26);
}`,
  },
};
