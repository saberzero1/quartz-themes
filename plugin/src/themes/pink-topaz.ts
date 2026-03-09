import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "pink-topaz",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lucida-handwriting", "monaco"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-strong: #efe9d9;
  --allow-1: #f93759;
  --aqua: #30daff;
  --background-accent: #e4ba6c;
  --background-blockquote-dark: #292929;
  --background-blue: #2f5264;
  --background-brown: #493a3a;
  --background-gray: #535353;
  --background-green: #32503e;
  --background-modifier-border: #191919;
  --background-modifier-box-shadow: #292929;
  --background-modifier-cover: rgba(0, 0, 0, 0.3);
  --background-modifier-error: #f93759;
  --background-modifier-error-hover: #F93758;
  --background-modifier-error-rgb: #f93759;
  --background-modifier-form-field: #f39ba0;
  --background-modifier-form-field-highlighted: #e5c7a9;
  --background-modifier-form-field-hover: #f39ba0;
  --background-modifier-success: #f93759;
  --background-orange: #53422f;
  --background-pink: #533b4a;
  --background-primary: #212121;
  --background-primary-alt: #f937590d;
  --background-purple: #443f57;
  --background-red: #683c3c;
  --background-search-result: #292929;
  --background-secondary: #242424;
  --background-secondary-alt: #191919;
  --background-yellow: #585536;
  --bases-cards-background: #212121;
  --bases-cards-cover-background: #f937590d;
  --bases-cards-shadow: 0 0 0 1px #191919;
  --bases-embed-border-color: #191919;
  --bases-group-heading-property-color: #efe9d9;
  --bases-table-border-color: #ffebec;
  --bases-table-cell-background-active: #212121;
  --bases-table-cell-background-disabled: #f937590d;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f39ba0;
  --bases-table-group-background: #f937590d;
  --bases-table-header-background: #212121;
  --bases-table-header-color: #efe9d9;
  --bases-table-summary-background: #212121;
  --blockquote-border-color: #f39ba0;
  --blue: #00a3b9;
  --blur-background: color-mix(in srgb, #f39ba0 65%, transparent) linear-gradient(#f39ba0, color-mix(in srgb, #f39ba0 65%, transparent));
  --calendar-week-background-color: transparent;
  --calendar-week-color: #ffccbc;
  --calendar-week-hover: #f39ba0;
  --canvas-background: #212121;
  --canvas-card-label-color: #efe9d9;
  --caret-color: #efe9d9;
  --checkbox-border-color: #efe9d9;
  --checkbox-border-color-hover: #efe9d9;
  --checkbox-color: #f39ba0;
  --checkbox-color-hover: #f93759;
  --checkbox-marker-color: #212121;
  --checklist-done-color: #efe9d9;
  --code-background: #f937590d;
  --code-border-color: #191919;
  --code-comment: #efe9d9;
  --code-normal: #efe9d9;
  --code-punctuation: #efe9d9;
  --collapse-icon-color: #efe9d9;
  --collapse-icon-color-collapsed: #ffccbc;
  --color-specification: #f93759;
  --darkblue: #0040ff;
  --darkgreen: #1bbc9b;
  --day-planner-dot: #ffebec;
  --day-planner-item-hover: #f39ba0;
  --day-planner-line: #f39ba0;
  --day-planner-pie: #ffccbc;
  --day-planner-timeline: #ff9b7c;
  --divider-color: #191919;
  --divider-color-hover: #f39ba0;
  --dropdown-background: #f39ba0;
  --dropdown-background-hover: #ffccbc;
  --embed-block-shadow-hover: 0 0 0 1px #191919, inset 0 0 0 1px #191919;
  --embed-border-start: 2px solid #f39ba0;
  --embed-color: #2929297d;
  --event-item-color1: #ffe4bc;
  --event-item-color10: #ffccbc;
  --event-item-color2: #ffdcbc;
  --event-item-color3: #ffd4bc;
  --event-item-color4: #ffccbc;
  --event-item-color5: #ffc3bc;
  --event-item-color6: #ffbcbc;
  --event-item-color7: #ffbcc4;
  --event-item-color8: #ffbcbc;
  --event-item-color9: #ffc3bc;
  --file-header-background: #212121;
  --file-header-background-focused: #212121;
  --flair-background: #f39ba0;
  --flair-color: #efe9d9;
  --folder-title: #fff;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --footnote-divider-color: #191919;
  --footnote-id-color: #efe9d9;
  --footnote-id-color-no-occurrences: #efe9d9;
  --graph-arrow: #ffc3bc;
  --graph-attach: #ffebec;
  --graph-circle: #f39ba0;
  --graph-line: #ffc3bc;
  --graph-node: #efe9d9;
  --graph-node-focused: #ffccbc;
  --graph-node-unresolved: #efe9d9;
  --graph-text: #efe9d9;
  --graph-text-color: #efe9d9;
  --graph-unresolved: #ffccbc;
  --graphtag: #f39ba0;
  --gray-1: #c9b0b0;
  --gray-2: #b4b1c6;
  --green: #00ffc7;
  --h1-color: #ffccbc;
  --h2-color: #ffccbc;
  --h3-color: #ffccbc;
  --h4-color: #ffccbc;
  --h5-color: #ffccbc;
  --h6-color: #ffccbc;
  --header-color: #f39ba0;
  --heading-formatting: #efe9d9;
  --hr-color: #191919;
  --icon-color: #efe9d9;
  --icon-color-active: #ffccbc;
  --icon-color-focused: #efe9d9;
  --icon-color-hover: #efe9d9;
  --inline-title-color: #ffccbc;
  --input-date-separator: #efe9d9;
  --input-placeholder-color: #efe9d9;
  --interactive-accent: #f39ba0;
  --interactive-accent-hover: #f93759;
  --interactive-accent-rgb: 45, 135, 211;
  --interactive-hover: #ffccbc;
  --interactive-normal: #f39ba0;
  --light-yellow: #ffd26c;
  --link-color: #ffccbc;
  --link-color-hover: #f93759;
  --link-external-color: #ffccbc;
  --link-external-color-hover: #f93759;
  --link-unresolved-color: #ffccbc;
  --list-marker-color: #efe9d9;
  --list-marker-color-collapsed: #ffccbc;
  --list-marker-color-hover: #efe9d9;
  --list-ol-block-color: #f39ba0;
  --list-ol-hover: #ffebec;
  --list-ol-number-color: #ffccbc;
  --list-ul-block-color: #f39ba0;
  --list-ul-disc-color: #f93759;
  --list-ul-hover: #ffebec;
  --mark-highlight: #f93759;
  --menu-background: #242424;
  --mermaid-active-task-color: #F39BA4;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #ffebec;
  --metadata-border-color: #191919;
  --metadata-divider-color: #191919;
  --metadata-input-text-color: #efe9d9;
  --metadata-label-text-color: #efe9d9;
  --metadata-label-text-color-hover: #efe9d9;
  --modal-background: #212121;
  --nav-collapse-icon-color: #efe9d9;
  --nav-collapse-icon-color-collapsed: #efe9d9;
  --nav-heading-color: #efe9d9;
  --nav-heading-color-collapsed: #efe9d9;
  --nav-heading-color-collapsed-hover: #efe9d9;
  --nav-heading-color-hover: #efe9d9;
  --nav-item-color: #efe9d9;
  --nav-item-color-active: #efe9d9;
  --nav-item-color-highlighted: #ffccbc;
  --nav-item-color-hover: #efe9d9;
  --nav-item-color-selected: #efe9d9;
  --nav-tag-color: #efe9d9;
  --nav-tag-color-active: #efe9d9;
  --nav-tag-color-hover: #efe9d9;
  --note-cloze: #f93759;
  --note-important: #f93759;
  --orange: #f28d61;
  --panel-border-color: #f93759;
  --pdf-background: #212121;
  --pdf-page-background: #212121;
  --pdf-shadow: 0 0 0 1px #191919;
  --pdf-sidebar-background: #212121;
  --pdf-thumbnail-shadow: 0 0 0 1px #191919;
  --pill-border-color: #191919;
  --pill-color: #efe9d9;
  --pill-color-hover: #efe9d9;
  --pill-color-remove: #efe9d9;
  --pill-color-remove-hover: #ffccbc;
  --prompt-background: #212121;
  --purple: #b073ff;
  --raised-background: color-mix(in srgb, #f39ba0 65%, transparent) linear-gradient(#f39ba0, color-mix(in srgb, #f39ba0 65%, transparent));
  --red: #ff9090;
  --red-1: #f93759;
  --ribbon-background: #242424;
  --ribbon-background-collapsed: #212121;
  --search-clear-button-color: #efe9d9;
  --search-icon-color: #efe9d9;
  --search-result-background: #212121;
  --search-result-file-title-color: #f39ba0;
  --search-text: #fff;
  --setting-group-heading-color: #efe9d9;
  --setting-items-background: #f937590d;
  --setting-items-border-color: #191919;
  --slider-track-background: #191919;
  --stag1: #f39ba0;
  --stag2: #ffccbc;
  --stag3: #ffebec;
  --status-bar-background: #242424;
  --status-bar-border-color: #191919;
  --status-bar-text-color: #efe9d9;
  --stickies-color-1: #f39ba0;
  --stickies-color-2: #ffebec;
  --suggestion-background: #212121;
  --tab-background-active: #212121;
  --tab-container-background: #242424;
  --tab-outline-color: #191919;
  --tab-switcher-background: #242424;
  --tab-switcher-menubar-background: linear-gradient(to top, #242424, transparent);
  --tab-text-color: #efe9d9;
  --tab-text-color-active: #efe9d9;
  --tab-text-color-focused: #efe9d9;
  --tab-text-color-focused-active: #efe9d9;
  --tab-text-color-focused-active-current: #efe9d9;
  --tab-text-color-focused-highlighted: #ffccbc;
  --table-add-button-border-color: #191919;
  --table-background-color: #212121;
  --table-background-color-odd: transparent;
  --table-border-color: #ffebec;
  --table-drag-handle-background-active: #f39ba0;
  --table-drag-handle-color: #efe9d9;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #ffebec;
  --table-header-color: #efe9d9;
  --table-hover-color: #ffccbc0a;
  --table-hover-raw-color: #292929;
  --table-hover-thead-color: #f39ba0;
  --table-selection-border-color: #f39ba0;
  --table-thead-background-color: #f39ba0ad;
  --tag-color: #ffccbc;
  --tag-color-hover: #ffccbc;
  --tag1: #028588;
  --tag2: #40916c;
  --tag3: #69a2ee;
  --tag4: #c47a5e;
  --tag5: #004f2d;
  --tag6: #f5a7a2;
  --tag7: #f19c79;
  --tag8: #02a588;
  --tag9: #ab4967;
  --tape-color: #ffccbc47;
  --text-accent: #ffccbc;
  --text-accent-hover: #f93759;
  --text-blue: #8ca1ff;
  --text-brown: #be9684;
  --text-em-color: #f93759;
  --text-error: #f93759;
  --text-error-hover: #f93759;
  --text-faint: #efe9d9;
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #acacac;
  --text-green: #52c7b2;
  --text-highlight-bg: #f39ba0;
  --text-muted: #efe9d9;
  --text-normal: #efe9d9;
  --text-on-accent: #ffffff;
  --text-orange: #ffa344;
  --text-pink: #ff6bba;
  --text-purple: #b386f1;
  --text-red: #ff4f4f;
  --text-selection: #e5c7a94a;
  --text-size-cloze: 0.9375em;
  --text-yellow: #ffdc51;
  --theme-color: #ffccbc;
  --theme-color-translucent: #f39ba0;
  --theme-color-translucent-1: #f39ba0;
  --titlebar-background: #242424;
  --titlebar-background-focused: #191919;
  --titlebar-border-color: #191919;
  --titlebar-text-color: #efe9d9;
  --titlebar-text-color-focused: #efe9d9;
  --vault-profile-color: #efe9d9;
  --vault-profile-color-hover: #efe9d9;
  --yellow: #fcdc00;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(239, 233, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(239, 233, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(239, 233, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 25, 25);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(25, 25, 25);
  color: rgb(239, 233, 217);
}

body div#quartz-root {
  background-color: rgb(33, 33, 33);
  color: rgb(239, 233, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body .page article p > em, em {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body .page article p > i, i {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body .page article p > strong, strong {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body .text-highlight {
  background-color: rgb(249, 55, 89);
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body del {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body p {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 204, 188);
  outline: rgb(255, 204, 188) none 0px;
  text-decoration: underline rgb(255, 204, 188);
  text-decoration-color: rgb(255, 204, 188);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 204, 188);
  outline: rgb(255, 204, 188) none 0px;
  text-decoration: rgb(255, 204, 188);
  text-decoration-color: rgb(255, 204, 188);
}

body a.internal.broken {
  color: rgb(255, 204, 188);
  outline: rgb(255, 204, 188) none 0px;
  text-decoration: underline rgb(255, 204, 188);
  text-decoration-color: rgb(255, 204, 188);
}`,
    lists: `body dd {
  color: rgb(239, 233, 217);
}

body dt {
  color: rgb(239, 233, 217);
}

body ol > li {
  color: rgb(239, 233, 217);
}

body ol.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body ul > li {
  color: rgb(239, 233, 217);
}

body ul.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(239, 233, 217);
  text-decoration: rgb(239, 233, 217);
}

body blockquote {
  background-color: rgb(41, 41, 41);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body table {
  color: rgb(239, 233, 217);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: 0px;
  width: 273.219px;
}

body td {
  border-bottom-color: rgb(255, 235, 236);
  border-left-color: rgb(255, 235, 236);
  border-right-color: rgb(255, 235, 236);
  border-top-color: rgb(255, 235, 236);
  color: rgb(239, 233, 217);
  padding-left: 20px;
  padding-right: 20px;
}

body th {
  border-bottom-color: rgb(255, 235, 236);
  border-left-color: rgb(255, 235, 236);
  border-right-color: rgb(255, 235, 236);
  border-top-color: rgb(255, 235, 236);
  color: rgb(239, 233, 217);
  padding-left: 20px;
  padding-right: 20px;
}

body thead {
  background-color: rgba(243, 155, 160, 0.68);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: Consolas, Monaco, monospace;
  padding-right: 30px;
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(231, 231, 231);
}

body pre > code > [data-line] {
  border-left-color: rgb(252, 220, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(252, 220, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(252, 220, 0);
  border-left-color: rgb(252, 220, 0);
  border-right-color: rgb(252, 220, 0);
  border-top-color: rgb(252, 220, 0);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}

body pre:has(> code) {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}`,
    images: `body audio {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body figcaption {
  color: rgb(239, 233, 217);
  text-align: justify;
}

body figure {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  text-align: justify;
}

body img {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body video {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgba(249, 55, 89, 0.05);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body .footnotes {
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body .transclude {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(243, 155, 160);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body .transclude-inner {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(243, 155, 160);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body input[type=checkbox] {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}`,
    search: `body .search > .search-button {
  background-color: rgb(243, 155, 160);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(239, 233, 217);
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > * {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration: rgb(239, 233, 217);
  text-decoration-color: rgb(239, 233, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(239, 233, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(239, 233, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(243, 155, 160);
  color: rgb(239, 233, 217);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(243, 155, 160);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(243, 155, 160);
  color: rgb(239, 233, 217);
}

body a.internal.tag-link::before {
  color: rgb(255, 204, 188);
}

body h1 {
  color: rgb(255, 204, 188);
}

body h2 {
  color: rgb(255, 204, 188);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 204, 188);
}

body h3 {
  color: rgb(255, 204, 188);
}

body h4 {
  color: rgb(255, 204, 188);
}

body h5 {
  color: rgb(255, 204, 188);
}

body h6 {
  color: rgb(255, 204, 188);
}

body hr {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(239, 233, 217);
  font-weight: 600;
  text-decoration: rgb(239, 233, 217);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(239, 233, 217);
  font-weight: 600;
  text-decoration: rgb(239, 233, 217);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(239, 233, 217);
  text-decoration: rgb(239, 233, 217);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(239, 233, 217);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}`,
    footer: `body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(249, 55, 89);
  border-bottom-width: 1px;
  border-left-color: rgb(249, 55, 89);
  border-right-color: rgb(249, 55, 89);
  border-right-width: 1px;
  border-top-color: rgb(249, 55, 89);
  color: rgb(239, 233, 217);
}

body footer ul li a {
  color: rgb(239, 233, 217);
  text-decoration: rgb(239, 233, 217);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(239, 233, 217);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(239, 233, 217);
  text-decoration: rgb(239, 233, 217);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(239, 233, 217);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body li.section-li > .section .meta {
  color: rgb(239, 233, 217);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(239, 233, 217);
  text-decoration: rgb(239, 233, 217);
}

body ul.section-ul {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body .darkmode svg {
  color: rgb(239, 233, 217);
  stroke: rgb(239, 233, 217);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body .breadcrumb-element p {
  color: rgb(239, 233, 217);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body .metadata {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(239, 233, 217);
}

body .metadata-properties {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

body .page-header h2.page-title {
  color: rgb(239, 233, 217);
}

body abbr {
  color: rgb(239, 233, 217);
  text-decoration: underline dotted rgb(239, 233, 217);
}

body details {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body input[type=text] {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body kbd {
  background-color: rgba(249, 55, 89, 0.05);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

body progress {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

body sub {
  color: rgb(239, 233, 217);
}

body summary {
  color: rgb(239, 233, 217);
}

body sup {
  color: rgb(239, 233, 217);
}`,
  },
  light: {
    base: `:root:root {
  --accent-strong: #37291a;
  --allow-1: #fd355a;
  --aqua: #4dd8ef;
  --background-accent: #fefcf9;
  --background-blue: #ddebf1;
  --background-brown: #e9e5e3;
  --background-gray: #ebeced;
  --background-green: #ddedea;
  --background-modifier-border: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(0, 0, 0, 0.2);
  --background-modifier-error: #f5a7a2;
  --background-modifier-error-hover: #fefcf9;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #ffdece;
  --background-modifier-form-field-highlighted: #f5a7a2;
  --background-modifier-form-field-hover: #ffdece;
  --background-modifier-success: #ffdece;
  --background-orange: #faebdd;
  --background-pink: #f4dfeb;
  --background-primary: #efe9d9;
  --background-primary-alt: #ffdece;
  --background-purple: #eae4f2;
  --background-red: #ffe3e3;
  --background-search-result: #ffdece;
  --background-secondary: #efe9d9;
  --background-secondary-alt: #efe9d9;
  --background-yellow: #fbf3db;
  --bases-cards-background: #efe9d9;
  --bases-cards-cover-background: #ffdece;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  --bases-embed-border-color: rgba(0, 0, 0, 0.1);
  --bases-group-heading-property-color: #37291a;
  --bases-table-border-color: #fd355a;
  --bases-table-cell-background-active: #efe9d9;
  --bases-table-cell-background-disabled: #ffdece;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f5a7a2;
  --bases-table-group-background: #ffdece;
  --bases-table-header-background: #efe9d9;
  --bases-table-header-color: #37291a;
  --bases-table-summary-background: #efe9d9;
  --blockquote-border-color: #f5a7a2;
  --blue: #69a2ee;
  --blue-green: #16bcc0;
  --blur-background: color-mix(in srgb, #efe9d9 65%, transparent) linear-gradient(#efe9d9, color-mix(in srgb, #efe9d9 65%, transparent));
  --calendar-week-background-color: #ffdece;
  --calendar-week-color: #f5a7a2;
  --calendar-week-hover: #ffdece;
  --canvas-background: #efe9d9;
  --canvas-card-label-color: #37291a;
  --caret-color: #37291a;
  --checkbox-border-color: #37291a;
  --checkbox-border-color-hover: #37291a;
  --checkbox-color: #f5a7a2;
  --checkbox-color-hover: #fd355a;
  --checkbox-marker-color: #efe9d9;
  --checklist-done-color: #37291a;
  --code-background: #ffdece;
  --code-border-color: rgba(0, 0, 0, 0.1);
  --code-comment: #37291a;
  --code-normal: #37291a;
  --code-punctuation: #37291a;
  --collapse-icon-color: #37291a;
  --collapse-icon-color-collapsed: #980000;
  --color-specification: #fd355a;
  --darkblue: #5981f0;
  --darkgreen: #004f2d;
  --day-planner-dot: #ffdece;
  --day-planner-item-hover: #f5a7a2;
  --day-planner-line: #fd355a;
  --day-planner-pie: #f5a7a2;
  --day-planner-timeline: #ffdece;
  --divider-color: rgba(0, 0, 0, 0.1);
  --divider-color-hover: #f5a7a2;
  --dropdown-background: #f39ba0;
  --dropdown-background-hover: #ffdece;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  --embed-border-start: 2px solid #f5a7a2;
  --embed-color: #fd355a1a;
  --event-item-color1: #f39ba063;
  --event-item-color10: #f39ba091;
  --event-item-color2: #f39ba091;
  --event-item-color3: #f39ba0c4;
  --event-item-color4: #f39ba0;
  --event-item-color5: #D08489;
  --event-item-color6: #B27175;
  --event-item-color7: #D08489;
  --event-item-color8: #f39ba0;
  --event-item-color9: #f39ba0c4;
  --file-header-background: #efe9d9;
  --file-header-background-focused: #efe9d9;
  --flair-background: #f39ba0;
  --flair-color: #37291a;
  --folder-title: #37291a;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --footnote-divider-color: rgba(0, 0, 0, 0.1);
  --footnote-id-color: #37291a;
  --footnote-id-color-no-occurrences: #37291a;
  --graph-arrow: #980000;
  --graph-attach: #f5a7a2;
  --graph-circle: #FD355C;
  --graph-line: #fea2c2;
  --graph-node: #37291a;
  --graph-node-focused: #980000;
  --graph-node-unresolved: #37291a;
  --graph-text: #37291a;
  --graph-text-color: #37291a;
  --graph-unresolved: #E87659;
  --graphtag: #ffdece;
  --gray-1: #c4c4c4;
  --gray-2: #7c8595;
  --green: #40916c;
  --h1-color: #f39ba0;
  --h2-color: #f39ba0;
  --h3-color: #f39ba0;
  --h4-color: #f39ba0;
  --h5-color: #f39ba0;
  --h6-color: #f39ba0;
  --header-color: #f5a7a2;
  --heading-formatting: #37291a;
  --hr-color: rgba(0, 0, 0, 0.1);
  --icon-color: #37291a;
  --icon-color-active: #980000;
  --icon-color-focused: #37291a;
  --icon-color-hover: #37291a;
  --inline-title-color: #f39ba0;
  --input-date-separator: #37291a;
  --input-placeholder-color: #37291a;
  --interactive-accent: #f5a7a2;
  --interactive-accent-hover: #fd355a;
  --interactive-accent-rgb: #fd355a;
  --interactive-hover: #ffdece;
  --interactive-normal: #f39ba0;
  --light-purple: #d3d6fe;
  --light-yellow: #e5e79c;
  --link-color: #980000;
  --link-color-hover: #37291a;
  --link-external-color: #980000;
  --link-external-color-hover: #37291a;
  --link-unresolved-color: #980000;
  --list-marker-color: #37291a;
  --list-marker-color-collapsed: #980000;
  --list-marker-color-hover: #37291a;
  --list-ol-block-color: #f5a7a2;
  --list-ol-hover: #980000;
  --list-ol-number-color: #f5a7a2;
  --list-ul-block-color: #f5a7a2;
  --list-ul-disc-color: #fd355a;
  --list-ul-hover: #980000;
  --mark-highlight: #fd355a;
  --menu-background: #efe9d9;
  --mermaid-active-task-color: #f5a7a2;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #ffdece;
  --metadata-border-color: rgba(0, 0, 0, 0.1);
  --metadata-divider-color: rgba(0, 0, 0, 0.1);
  --metadata-input-text-color: #37291a;
  --metadata-label-text-color: #37291a;
  --metadata-label-text-color-hover: #37291a;
  --modal-background: #efe9d9;
  --nav-collapse-icon-color: #37291a;
  --nav-collapse-icon-color-collapsed: #37291a;
  --nav-heading-color: #37291a;
  --nav-heading-color-collapsed: #37291a;
  --nav-heading-color-collapsed-hover: #37291a;
  --nav-heading-color-hover: #37291a;
  --nav-item-color: #37291a;
  --nav-item-color-active: #37291a;
  --nav-item-color-highlighted: #980000;
  --nav-item-color-hover: #37291a;
  --nav-item-color-selected: #37291a;
  --nav-tag-color: #37291a;
  --nav-tag-color-active: #37291a;
  --nav-tag-color-hover: #37291a;
  --note-cloze: #fd355a;
  --note-important: #fd355a;
  --orange: #f19c79;
  --panel-border-color: #fd355a;
  --pdf-background: #efe9d9;
  --pdf-page-background: #efe9d9;
  --pdf-sidebar-background: #efe9d9;
  --pill-border-color: rgba(0, 0, 0, 0.1);
  --pill-color: #37291a;
  --pill-color-hover: #37291a;
  --pill-color-remove: #37291a;
  --pill-color-remove-hover: #980000;
  --prompt-background: #efe9d9;
  --purple: #8673b4;
  --raised-background: color-mix(in srgb, #efe9d9 65%, transparent) linear-gradient(#efe9d9, color-mix(in srgb, #efe9d9 65%, transparent));
  --red: #fd355a;
  --red-1: #980000;
  --ribbon-background: #efe9d9;
  --ribbon-background-collapsed: #efe9d9;
  --search-clear-button-color: #37291a;
  --search-icon-color: #37291a;
  --search-result-background: #efe9d9;
  --search-result-file-title-color: #980000;
  --search-text: #37291a;
  --setting-group-heading-color: #37291a;
  --setting-items-background: #ffdece;
  --setting-items-border-color: rgba(0, 0, 0, 0.1);
  --slider-track-background: rgba(0, 0, 0, 0.1);
  --stag1: #fd355a;
  --stag2: #fd355a;
  --stag3: #fd355a;
  --status-bar-background: #efe9d9;
  --status-bar-border-color: rgba(0, 0, 0, 0.1);
  --status-bar-text-color: #37291a;
  --stickies-color-1: #fd355a;
  --stickies-color-2: #f5a7a2;
  --suggestion-background: #efe9d9;
  --tab-background-active: #efe9d9;
  --tab-container-background: #efe9d9;
  --tab-outline-color: rgba(0, 0, 0, 0.1);
  --tab-switcher-background: #efe9d9;
  --tab-switcher-menubar-background: linear-gradient(to top, #efe9d9, transparent);
  --tab-text-color: #37291a;
  --tab-text-color-active: #37291a;
  --tab-text-color-focused: #37291a;
  --tab-text-color-focused-active: #37291a;
  --tab-text-color-focused-active-current: #37291a;
  --tab-text-color-focused-highlighted: #980000;
  --table-add-button-border-color: rgba(0, 0, 0, 0.1);
  --table-background-color: #ffdece;
  --table-background-color-odd: #ffdece;
  --table-border-color: #fd355a;
  --table-drag-handle-background-active: #f5a7a2;
  --table-drag-handle-color: #37291a;
  --table-drag-handle-color-active: #37291a;
  --table-header-border-color: #fd355a;
  --table-header-color: #37291a;
  --table-hover-color: #f5a7a2;
  --table-hover-raw-color: #ffdece;
  --table-hover-thead-color: #f5a7a2;
  --table-selection-border-color: #f5a7a2;
  --table-thead-background-color: #f5a7a2;
  --tag-color: #980000;
  --tag-color-hover: #980000;
  --tag1: #e5c7a9;
  --tag2: #fea2c2;
  --tag3: #69a2ee;
  --tag4: #40916c;
  --tag5: #c47a5e;
  --tag6: #f5a7a2;
  --tag7: #ab4967;
  --tag8: #dbb671;
  --tag9: #f19c79;
  --tape-color: #acacac65;
  --text-accent: #980000;
  --text-accent-hover: #37291a;
  --text-blue: #0083bb;
  --text-brown: #855a46;
  --text-error: #f5a7a2;
  --text-error-hover: #fefcf9;
  --text-faint: #37291a;
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #37352f99;
  --text-green: #00927f;
  --text-highlight-bg: #f5a7a2;
  --text-muted: #37291a;
  --text-normal: #37291a;
  --text-on-accent: #37291a;
  --text-orange: #d9730d;
  --text-pink: #c40075;
  --text-purple: #5d1fb9;
  --text-red: #ff4343;
  --text-selection: #ffebec;
  --text-size-cloze: 0.9375em;
  --text-yellow: #d4a300;
  --theme-color: #f5a7a2;
  --theme-color-translucent: #f5a7a2;
  --theme-color-translucent-1: #ffdece;
  --titlebar-background: #efe9d9;
  --titlebar-background-focused: #efe9d9;
  --titlebar-border-color: rgba(0, 0, 0, 0.1);
  --titlebar-text-color: #37291a;
  --titlebar-text-color-focused: #37291a;
  --vault-profile-color: #37291a;
  --vault-profile-color-hover: #37291a;
  --yellow: #ffc727;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.1);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 233, 217);
  border-left-color: rgba(0, 0, 0, 0.1);
  color: rgb(55, 41, 26);
}

body div#quartz-root {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body .page article p > em, em {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body .page article p > i, i {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body .page article p > strong, strong {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body .text-highlight {
  background-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body del {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body p {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}`,
    links: `body a.external, footer a {
  color: rgb(152, 0, 0);
  outline: rgb(152, 0, 0) none 0px;
  text-decoration: underline rgb(152, 0, 0);
  text-decoration-color: rgb(152, 0, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 0, 0);
  outline: rgb(152, 0, 0) none 0px;
  text-decoration: rgb(152, 0, 0);
  text-decoration-color: rgb(152, 0, 0);
}

body a.internal.broken {
  color: rgb(232, 118, 89);
  outline: rgb(232, 118, 89) none 0px;
  text-decoration: underline rgb(232, 118, 89);
  text-decoration-color: rgb(232, 118, 89);
}`,
    lists: `body dd {
  color: rgb(55, 41, 26);
}

body dt {
  color: rgb(55, 41, 26);
}

body ol > li {
  color: rgb(55, 41, 26);
}

body ol.overflow {
  background-color: rgb(239, 233, 217);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body ul > li {
  color: rgb(55, 41, 26);
}

body ul.overflow {
  background-color: rgb(239, 233, 217);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(55, 41, 26);
  text-decoration: rgb(55, 41, 26);
}

body blockquote {
  background-color: rgb(255, 222, 206);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body table {
  color: rgb(55, 41, 26);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: 0px;
  width: 273.219px;
}

body td {
  border-bottom-color: rgb(253, 53, 90);
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-top-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
  padding-left: 20px;
  padding-right: 20px;
}

body th {
  border-bottom-color: rgb(253, 53, 90);
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-top-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
  padding-left: 20px;
  padding-right: 20px;
}

body thead {
  background-color: rgb(245, 167, 162);
}`,
    code: `body code {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-right: 30px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(55, 41, 26);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 199, 39);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 199, 39);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 199, 39);
  border-left-color: rgb(255, 199, 39);
  border-right-color: rgb(255, 199, 39);
  border-top-color: rgb(255, 199, 39);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}

body pre:has(> code) {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}`,
    images: `body audio {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body figcaption {
  color: rgb(55, 41, 26);
  text-align: justify;
}

body figure {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  text-align: justify;
}

body img {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body video {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    embeds: `body .file-embed {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body .footnotes {
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body .transclude {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(245, 167, 162);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body .transclude-inner {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(245, 167, 162);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body input[type=checkbox] {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}`,
    search: `body .search > .search-button {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(55, 41, 26);
}

body .search > .search-container > .search-space {
  background-color: rgb(239, 233, 217);
}

body .search > .search-container > .search-space > * {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration: rgb(55, 41, 26);
  text-decoration-color: rgb(55, 41, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(55, 41, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(55, 41, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(255, 222, 206);
  color: rgb(55, 41, 26);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(255, 222, 206);
  color: rgb(55, 41, 26);
}

body a.internal.tag-link::before {
  color: rgb(152, 0, 0);
}

body h1 {
  color: rgb(243, 155, 160);
}

body h2 {
  color: rgb(243, 155, 160);
}

body h2.page-title, h2.page-title a {
  color: rgb(243, 155, 160);
}

body h3 {
  color: rgb(243, 155, 160);
}

body h4 {
  color: rgb(243, 155, 160);
}

body h5 {
  color: rgb(243, 155, 160);
}

body h6 {
  color: rgb(243, 155, 160);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(55, 41, 26);
  font-weight: 600;
  text-decoration: rgb(55, 41, 26);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(55, 41, 26);
  font-weight: 600;
  text-decoration: rgb(55, 41, 26);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(55, 41, 26);
  text-decoration: rgb(55, 41, 26);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(55, 41, 26);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}`,
    footer: `body footer {
  background-color: rgb(239, 233, 217);
  border-bottom-color: rgb(253, 53, 90);
  border-bottom-width: 1px;
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-right-width: 1px;
  border-top-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
}

body footer ul li a {
  color: rgb(55, 41, 26);
  text-decoration: rgb(55, 41, 26);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(55, 41, 26);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(55, 41, 26);
  text-decoration: rgb(55, 41, 26);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(55, 41, 26);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body li.section-li > .section .meta {
  color: rgb(55, 41, 26);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(55, 41, 26);
  text-decoration: rgb(55, 41, 26);
}

body ul.section-ul {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body .darkmode svg {
  color: rgb(55, 41, 26);
  stroke: rgb(55, 41, 26);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body .breadcrumb-element p {
  color: rgb(55, 41, 26);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(55, 41, 26);
}

body .metadata-properties {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body .navigation-progress {
  background-color: rgb(239, 233, 217);
}

body .page-header h2.page-title {
  color: rgb(55, 41, 26);
}

body abbr {
  color: rgb(55, 41, 26);
  text-decoration: underline dotted rgb(55, 41, 26);
}

body details {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body input[type=text] {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body kbd {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

body progress {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

body sub {
  color: rgb(55, 41, 26);
}

body summary {
  color: rgb(55, 41, 26);
}

body sup {
  color: rgb(55, 41, 26);
}`,
  },
};
