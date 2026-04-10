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
  --accent-strong: #efe9d9 !important;
  --allow-1: #f93759 !important;
  --aqua: #30daff !important;
  --background-accent: #e4ba6c !important;
  --background-blockquote-dark: #292929 !important;
  --background-blue: #2f5264 !important;
  --background-brown: #493a3a !important;
  --background-gray: #535353 !important;
  --background-green: #32503e !important;
  --background-modifier-border: #191919 !important;
  --background-modifier-box-shadow: #292929 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-error: #f93759 !important;
  --background-modifier-error-hover: #F93758 !important;
  --background-modifier-error-rgb: #f93759 !important;
  --background-modifier-form-field: #f39ba0 !important;
  --background-modifier-form-field-highlighted: #e5c7a9 !important;
  --background-modifier-form-field-hover: #f39ba0 !important;
  --background-modifier-success: #f93759 !important;
  --background-orange: #53422f !important;
  --background-pink: #533b4a !important;
  --background-primary: #212121 !important;
  --background-primary-alt: #f937590d !important;
  --background-purple: #443f57 !important;
  --background-red: #683c3c !important;
  --background-search-result: #292929 !important;
  --background-secondary: #242424 !important;
  --background-secondary-alt: #191919 !important;
  --background-yellow: #585536 !important;
  --bases-cards-background: #212121 !important;
  --bases-cards-cover-background: #f937590d !important;
  --bases-cards-shadow: 0 0 0 1px #191919 !important;
  --bases-embed-border-color: #191919 !important;
  --bases-group-heading-property-color: #efe9d9 !important;
  --bases-table-border-color: #ffebec !important;
  --bases-table-cell-background-active: #212121 !important;
  --bases-table-cell-background-disabled: #f937590d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f39ba0 !important;
  --bases-table-group-background: #f937590d !important;
  --bases-table-header-background: #212121 !important;
  --bases-table-header-color: #efe9d9 !important;
  --bases-table-summary-background: #212121 !important;
  --blockquote-border-color: #f39ba0 !important;
  --blue: #00a3b9 !important;
  --blur-background: color-mix(in srgb, #f39ba0 65%, transparent) linear-gradient(#f39ba0, color-mix(in srgb, #f39ba0 65%, transparent)) !important;
  --calendar-week-background-color: transparent !important;
  --calendar-week-color: #ffccbc !important;
  --calendar-week-hover: #f39ba0 !important;
  --canvas-background: #212121 !important;
  --canvas-card-label-color: #efe9d9 !important;
  --caret-color: #efe9d9 !important;
  --checkbox-border-color: #efe9d9 !important;
  --checkbox-border-color-hover: #efe9d9 !important;
  --checkbox-color: #f39ba0 !important;
  --checkbox-color-hover: #f93759 !important;
  --checkbox-marker-color: #212121 !important;
  --checklist-done-color: #efe9d9 !important;
  --code-background: #f937590d !important;
  --code-border-color: #191919 !important;
  --code-comment: #efe9d9 !important;
  --code-normal: #efe9d9 !important;
  --code-punctuation: #efe9d9 !important;
  --collapse-icon-color: #efe9d9 !important;
  --collapse-icon-color-collapsed: #ffccbc !important;
  --color-specification: #f93759 !important;
  --dark: #efe9d9 !important;
  --darkblue: #0040ff !important;
  --darkgray: #efe9d9 !important;
  --darkgreen: #1bbc9b !important;
  --day-planner-dot: #ffebec !important;
  --day-planner-item-hover: #f39ba0 !important;
  --day-planner-line: #f39ba0 !important;
  --day-planner-pie: #ffccbc !important;
  --day-planner-timeline: #ff9b7c !important;
  --divider-color: #191919 !important;
  --divider-color-hover: #f39ba0 !important;
  --dropdown-background: #f39ba0 !important;
  --dropdown-background-hover: #ffccbc !important;
  --embed-block-shadow-hover: 0 0 0 1px #191919, inset 0 0 0 1px #191919 !important;
  --embed-border-start: 2px solid #f39ba0 !important;
  --embed-color: #2929297d !important;
  --event-item-color1: #ffe4bc !important;
  --event-item-color10: #ffccbc !important;
  --event-item-color2: #ffdcbc !important;
  --event-item-color3: #ffd4bc !important;
  --event-item-color4: #ffccbc !important;
  --event-item-color5: #ffc3bc !important;
  --event-item-color6: #ffbcbc !important;
  --event-item-color7: #ffbcc4 !important;
  --event-item-color8: #ffbcbc !important;
  --event-item-color9: #ffc3bc !important;
  --file-header-background: #212121 !important;
  --file-header-background-focused: #212121 !important;
  --flair-background: #f39ba0 !important;
  --flair-color: #efe9d9 !important;
  --folder-title: #fff !important;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive !important;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace !important;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive !important;
  --font-size-code: 0.9375em !important;
  --font-size-edit-blockquote: 1em !important;
  --font-size-edit-code: 1em !important;
  --font-size-edit-normal: 1em !important;
  --font-size-embed-file: 1.25em !important;
  --font-size-embed-title-size: 1.125em !important;
  --font-size-file-header-title: 0.9375em !important;
  --font-size-file-header-title-andy-plugin: 1em !important;
  --font-size-folder-and-file: 0.8125em !important;
  --font-size-h1: 1.5625em !important;
  --font-size-h2: 1.4375em !important;
  --font-size-h3: 1.3125em !important;
  --font-size-h4: 1.1875em !important;
  --font-size-h5: 1.0625em !important;
  --font-size-h6: 0.9375em !important;
  --font-size-latex: 1.25em !important;
  --font-size-list: 1em !important;
  --font-size-obsidian-titlebar: 0.75em !important;
  --font-size-preview-blockquote: 1em !important;
  --font-size-preview-normal: 1em !important;
  --font-size-tag: 1em !important;
  --font-size-vault-name: 0.875em !important;
  --footnote-divider-color: #191919 !important;
  --footnote-id-color: #efe9d9 !important;
  --footnote-id-color-no-occurrences: #efe9d9 !important;
  --graph-arrow: #ffc3bc !important;
  --graph-attach: #ffebec !important;
  --graph-circle: #f39ba0 !important;
  --graph-line: #ffc3bc !important;
  --graph-node: #efe9d9 !important;
  --graph-node-focused: #ffccbc !important;
  --graph-node-unresolved: #efe9d9 !important;
  --graph-text: #efe9d9 !important;
  --graph-text-color: #efe9d9 !important;
  --graph-unresolved: #ffccbc !important;
  --graphtag: #f39ba0 !important;
  --gray: #efe9d9 !important;
  --gray-1: #c9b0b0 !important;
  --gray-2: #b4b1c6 !important;
  --green: #00ffc7 !important;
  --h1-color: #ffccbc !important;
  --h2-color: #ffccbc !important;
  --h3-color: #ffccbc !important;
  --h4-color: #ffccbc !important;
  --h5-color: #ffccbc !important;
  --h6-color: #ffccbc !important;
  --header-color: #f39ba0 !important;
  --heading-formatting: #efe9d9 !important;
  --highlight: #f39ba0 !important;
  --hr-color: #191919 !important;
  --icon-color: #efe9d9 !important;
  --icon-color-active: #ffccbc !important;
  --icon-color-focused: #efe9d9 !important;
  --icon-color-hover: #efe9d9 !important;
  --inline-title-color: #ffccbc !important;
  --input-date-separator: #efe9d9 !important;
  --input-placeholder-color: #efe9d9 !important;
  --interactive-accent: #f39ba0 !important;
  --interactive-accent-hover: #f93759 !important;
  --interactive-accent-rgb: 45, 135, 211 !important;
  --interactive-hover: #ffccbc !important;
  --interactive-normal: #f39ba0 !important;
  --light: #212121 !important;
  --light-yellow: #ffd26c !important;
  --lightgray: #242424 !important;
  --link-color: #ffccbc !important;
  --link-color-hover: #f93759 !important;
  --link-external-color: #ffccbc !important;
  --link-external-color-hover: #f93759 !important;
  --link-unresolved-color: #ffccbc !important;
  --list-marker-color: #efe9d9 !important;
  --list-marker-color-collapsed: #ffccbc !important;
  --list-marker-color-hover: #efe9d9 !important;
  --list-ol-block-color: #f39ba0 !important;
  --list-ol-hover: #ffebec !important;
  --list-ol-number-color: #ffccbc !important;
  --list-ul-block-color: #f39ba0 !important;
  --list-ul-disc-color: #f93759 !important;
  --list-ul-hover: #ffebec !important;
  --mark-highlight: #f93759 !important;
  --menu-background: #242424 !important;
  --mermaid-active-task-color: #F39BA4 !important;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  --mermaid-seq-dia-color: #ffebec !important;
  --metadata-border-color: #191919 !important;
  --metadata-divider-color: #191919 !important;
  --metadata-input-text-color: #efe9d9 !important;
  --metadata-label-text-color: #efe9d9 !important;
  --metadata-label-text-color-hover: #efe9d9 !important;
  --modal-background: #212121 !important;
  --nav-collapse-icon-color: #efe9d9 !important;
  --nav-collapse-icon-color-collapsed: #efe9d9 !important;
  --nav-heading-color: #efe9d9 !important;
  --nav-heading-color-collapsed: #efe9d9 !important;
  --nav-heading-color-collapsed-hover: #efe9d9 !important;
  --nav-heading-color-hover: #efe9d9 !important;
  --nav-item-color: #efe9d9 !important;
  --nav-item-color-active: #efe9d9 !important;
  --nav-item-color-highlighted: #ffccbc !important;
  --nav-item-color-hover: #efe9d9 !important;
  --nav-item-color-selected: #efe9d9 !important;
  --nav-tag-color: #efe9d9 !important;
  --nav-tag-color-active: #efe9d9 !important;
  --nav-tag-color-hover: #efe9d9 !important;
  --note-cloze: #f93759 !important;
  --note-important: #f93759 !important;
  --orange: #f28d61 !important;
  --panel-border-color: #f93759 !important;
  --pdf-background: #212121 !important;
  --pdf-page-background: #212121 !important;
  --pdf-shadow: 0 0 0 1px #191919 !important;
  --pdf-sidebar-background: #212121 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #191919 !important;
  --pill-border-color: #191919 !important;
  --pill-color: #efe9d9 !important;
  --pill-color-hover: #efe9d9 !important;
  --pill-color-remove: #efe9d9 !important;
  --pill-color-remove-hover: #ffccbc !important;
  --prompt-background: #212121 !important;
  --purple: #b073ff !important;
  --raised-background: color-mix(in srgb, #f39ba0 65%, transparent) linear-gradient(#f39ba0, color-mix(in srgb, #f39ba0 65%, transparent)) !important;
  --red: #ff9090 !important;
  --red-1: #f93759 !important;
  --ribbon-background: #242424 !important;
  --ribbon-background-collapsed: #212121 !important;
  --search-clear-button-color: #efe9d9 !important;
  --search-icon-color: #efe9d9 !important;
  --search-result-background: #212121 !important;
  --search-result-file-title-color: #f39ba0 !important;
  --search-text: #fff !important;
  --secondary: #ffccbc !important;
  --setting-group-heading-color: #efe9d9 !important;
  --setting-items-background: #f937590d !important;
  --setting-items-border-color: #191919 !important;
  --slider-track-background: #191919 !important;
  --stag1: #f39ba0 !important;
  --stag2: #ffccbc !important;
  --stag3: #ffebec !important;
  --status-bar-background: #242424 !important;
  --status-bar-border-color: #191919 !important;
  --status-bar-text-color: #efe9d9 !important;
  --stickies-color-1: #f39ba0 !important;
  --stickies-color-2: #ffebec !important;
  --suggestion-background: #212121 !important;
  --tab-background-active: #212121 !important;
  --tab-container-background: #242424 !important;
  --tab-outline-color: #191919 !important;
  --tab-switcher-background: #242424 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #242424, transparent) !important;
  --tab-text-color: #efe9d9 !important;
  --tab-text-color-active: #efe9d9 !important;
  --tab-text-color-focused: #efe9d9 !important;
  --tab-text-color-focused-active: #efe9d9 !important;
  --tab-text-color-focused-active-current: #efe9d9 !important;
  --tab-text-color-focused-highlighted: #ffccbc !important;
  --table-add-button-border-color: #191919 !important;
  --table-background-color: #212121 !important;
  --table-background-color-odd: transparent !important;
  --table-border-color: #ffebec !important;
  --table-drag-handle-background-active: #f39ba0 !important;
  --table-drag-handle-color: #efe9d9 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #ffebec !important;
  --table-header-color: #efe9d9 !important;
  --table-hover-color: #ffccbc0a !important;
  --table-hover-raw-color: #292929 !important;
  --table-hover-thead-color: #f39ba0 !important;
  --table-selection-border-color: #f39ba0 !important;
  --table-thead-background-color: #f39ba0ad !important;
  --tag-color: #ffccbc !important;
  --tag-color-hover: #ffccbc !important;
  --tag1: #028588 !important;
  --tag2: #40916c !important;
  --tag3: #69a2ee !important;
  --tag4: #c47a5e !important;
  --tag5: #004f2d !important;
  --tag6: #f5a7a2 !important;
  --tag7: #f19c79 !important;
  --tag8: #02a588 !important;
  --tag9: #ab4967 !important;
  --tape-color: #ffccbc47 !important;
  --tertiary: #f93759 !important;
  --text-accent: #ffccbc !important;
  --text-accent-hover: #f93759 !important;
  --text-blue: #8ca1ff !important;
  --text-brown: #be9684 !important;
  --text-em-color: #f93759 !important;
  --text-error: #f93759 !important;
  --text-error-hover: #f93759 !important;
  --text-faint: #efe9d9 !important;
  --text-family-inline-code: "Consolas", "Monaco", monospace !important;
  --text-gray: #acacac !important;
  --text-green: #52c7b2 !important;
  --text-highlight-bg: #f39ba0 !important;
  --text-muted: #efe9d9 !important;
  --text-normal: #efe9d9 !important;
  --text-on-accent: #ffffff !important;
  --text-orange: #ffa344 !important;
  --text-pink: #ff6bba !important;
  --text-purple: #b386f1 !important;
  --text-red: #ff4f4f !important;
  --text-selection: #e5c7a94a !important;
  --text-size-cloze: 0.9375em !important;
  --text-yellow: #ffdc51 !important;
  --textHighlight: #f39ba0 !important;
  --theme-color: #ffccbc !important;
  --theme-color-translucent: #f39ba0 !important;
  --theme-color-translucent-1: #f39ba0 !important;
  --titlebar-background: #242424 !important;
  --titlebar-background-focused: #191919 !important;
  --titlebar-border-color: #191919 !important;
  --titlebar-text-color: #efe9d9 !important;
  --titlebar-text-color-focused: #efe9d9 !important;
  --vault-profile-color: #efe9d9 !important;
  --vault-profile-color-hover: #efe9d9 !important;
  --yellow: #fcdc00 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(255, 235, 236);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(36, 36, 36);
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(25, 25, 25);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 33, 33);
  color: rgb(239, 233, 217);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(249, 55, 89);
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(239, 233, 217);
  font-size: 12.1875px;
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(243, 155, 160);
  border-color: rgb(243, 155, 160);
}

html[saved-theme="dark"] body p {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 204, 188);
  outline: rgb(255, 204, 188) none 0px;
  text-decoration-color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 204, 188);
  outline: rgb(255, 204, 188) none 0px;
  text-decoration-color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 204, 188);
  outline: rgb(255, 204, 188) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(255, 204, 188);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(41, 41, 41);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(239, 233, 217);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: 0px;
  width: 273.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 235, 236);
  border-left-color: rgb(255, 235, 236);
  border-right-color: rgb(255, 235, 236);
  border-top-color: rgb(255, 235, 236);
  color: rgb(239, 233, 217);
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(255, 235, 236);
  border-left-color: rgb(255, 235, 236);
  border-right-color: rgb(255, 235, 236);
  border-top-color: rgb(255, 235, 236);
  color: rgb(239, 233, 217);
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="dark"] body thead {
  background-color: rgba(243, 155, 160, 0.68);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: Consolas, Monaco, monospace;
  padding-right: 30px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(252, 220, 0);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(252, 220, 0);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(252, 220, 0);
  border-left-color: rgb(252, 220, 0);
  border-right-color: rgb(252, 220, 0);
  border-top-color: rgb(252, 220, 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(239, 233, 217);
  text-align: justify;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  text-align: justify;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 204, 188);
  border-left-color: rgb(255, 204, 188);
  border-right-color: rgb(255, 204, 188);
  border-top-color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgba(249, 55, 89, 0.05);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(243, 155, 160);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(239, 233, 217);
  text-decoration: line-through;
  text-decoration-color: rgb(239, 233, 217);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(243, 155, 160);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(239, 233, 217);
  outline: rgb(239, 233, 217) none 0px;
  text-decoration-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(243, 155, 160);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(243, 155, 160);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(243, 155, 160);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 204, 188);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(239, 233, 217);
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(239, 233, 217);
  font-weight: 600;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(249, 55, 89);
  border-bottom-width: 1px;
  border-left-color: rgb(249, 55, 89);
  border-right-color: rgb(249, 55, 89);
  border-right-width: 1px;
  border-top-color: rgb(249, 55, 89);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(239, 233, 217);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(239, 233, 217);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(239, 233, 217);
  stroke: rgb(239, 233, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(239, 233, 217);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body abbr {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(249, 55, 89, 0.05);
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(239, 233, 217);
  border-right-color: rgb(239, 233, 217);
  border-top-color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(239, 233, 217);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(2, 133, 136);
  border-bottom-color: rgb(241, 241, 241);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(241, 241, 241);
  border-right-color: rgb(241, 241, 241);
  border-top-color: rgb(241, 241, 241);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: rgb(241, 241, 241);
}`,
  },
  light: {
    base: `:root:root {
  --accent-strong: #37291a !important;
  --allow-1: #fd355a !important;
  --aqua: #4dd8ef !important;
  --background-accent: #fefcf9 !important;
  --background-blue: #ddebf1 !important;
  --background-brown: #e9e5e3 !important;
  --background-gray: #ebeced !important;
  --background-green: #ddedea !important;
  --background-modifier-border: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-error: #f5a7a2 !important;
  --background-modifier-error-hover: #fefcf9 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: #ffdece !important;
  --background-modifier-form-field-highlighted: #f5a7a2 !important;
  --background-modifier-form-field-hover: #ffdece !important;
  --background-modifier-success: #ffdece !important;
  --background-orange: #faebdd !important;
  --background-pink: #f4dfeb !important;
  --background-primary: #efe9d9 !important;
  --background-primary-alt: #ffdece !important;
  --background-purple: #eae4f2 !important;
  --background-red: #ffe3e3 !important;
  --background-search-result: #ffdece !important;
  --background-secondary: #efe9d9 !important;
  --background-secondary-alt: #efe9d9 !important;
  --background-yellow: #fbf3db !important;
  --bases-cards-background: #efe9d9 !important;
  --bases-cards-cover-background: #ffdece !important;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) !important;
  --bases-embed-border-color: rgba(0, 0, 0, 0.1) !important;
  --bases-group-heading-property-color: #37291a !important;
  --bases-table-border-color: #fd355a !important;
  --bases-table-cell-background-active: #efe9d9 !important;
  --bases-table-cell-background-disabled: #ffdece !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f5a7a2 !important;
  --bases-table-group-background: #ffdece !important;
  --bases-table-header-background: #efe9d9 !important;
  --bases-table-header-color: #37291a !important;
  --bases-table-summary-background: #efe9d9 !important;
  --blockquote-border-color: #f5a7a2 !important;
  --blue: #69a2ee !important;
  --blue-green: #16bcc0 !important;
  --blur-background: color-mix(in srgb, #efe9d9 65%, transparent) linear-gradient(#efe9d9, color-mix(in srgb, #efe9d9 65%, transparent)) !important;
  --calendar-week-background-color: #ffdece !important;
  --calendar-week-color: #f5a7a2 !important;
  --calendar-week-hover: #ffdece !important;
  --canvas-background: #efe9d9 !important;
  --canvas-card-label-color: #37291a !important;
  --caret-color: #37291a !important;
  --checkbox-border-color: #37291a !important;
  --checkbox-border-color-hover: #37291a !important;
  --checkbox-color: #f5a7a2 !important;
  --checkbox-color-hover: #fd355a !important;
  --checkbox-marker-color: #efe9d9 !important;
  --checklist-done-color: #37291a !important;
  --code-background: #ffdece !important;
  --code-border-color: rgba(0, 0, 0, 0.1) !important;
  --code-comment: #37291a !important;
  --code-normal: #37291a !important;
  --code-punctuation: #37291a !important;
  --collapse-icon-color: #37291a !important;
  --collapse-icon-color-collapsed: #980000 !important;
  --color-specification: #fd355a !important;
  --dark: #37291a !important;
  --darkblue: #5981f0 !important;
  --darkgray: #37291a !important;
  --darkgreen: #004f2d !important;
  --day-planner-dot: #ffdece !important;
  --day-planner-item-hover: #f5a7a2 !important;
  --day-planner-line: #fd355a !important;
  --day-planner-pie: #f5a7a2 !important;
  --day-planner-timeline: #ffdece !important;
  --divider-color: rgba(0, 0, 0, 0.1) !important;
  --divider-color-hover: #f5a7a2 !important;
  --dropdown-background: #f39ba0 !important;
  --dropdown-background-hover: #ffdece !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1) !important;
  --embed-border-start: 2px solid #f5a7a2 !important;
  --embed-color: #fd355a1a !important;
  --event-item-color1: #f39ba063 !important;
  --event-item-color10: #f39ba091 !important;
  --event-item-color2: #f39ba091 !important;
  --event-item-color3: #f39ba0c4 !important;
  --event-item-color4: #f39ba0 !important;
  --event-item-color5: #D08489 !important;
  --event-item-color6: #B27175 !important;
  --event-item-color7: #D08489 !important;
  --event-item-color8: #f39ba0 !important;
  --event-item-color9: #f39ba0c4 !important;
  --file-header-background: #efe9d9 !important;
  --file-header-background-focused: #efe9d9 !important;
  --flair-background: #f39ba0 !important;
  --flair-color: #37291a !important;
  --folder-title: #37291a !important;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive !important;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace !important;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive !important;
  --font-size-code: 0.9375em !important;
  --font-size-edit-blockquote: 1em !important;
  --font-size-edit-code: 1em !important;
  --font-size-edit-normal: 1em !important;
  --font-size-embed-file: 1.25em !important;
  --font-size-embed-title-size: 1.125em !important;
  --font-size-file-header-title: 0.9375em !important;
  --font-size-file-header-title-andy-plugin: 1em !important;
  --font-size-folder-and-file: 0.8125em !important;
  --font-size-h1: 1.5625em !important;
  --font-size-h2: 1.4375em !important;
  --font-size-h3: 1.3125em !important;
  --font-size-h4: 1.1875em !important;
  --font-size-h5: 1.0625em !important;
  --font-size-h6: 0.9375em !important;
  --font-size-latex: 1.25em !important;
  --font-size-list: 1em !important;
  --font-size-obsidian-titlebar: 0.75em !important;
  --font-size-preview-blockquote: 1em !important;
  --font-size-preview-normal: 1em !important;
  --font-size-tag: 1em !important;
  --font-size-vault-name: 0.875em !important;
  --footnote-divider-color: rgba(0, 0, 0, 0.1) !important;
  --footnote-id-color: #37291a !important;
  --footnote-id-color-no-occurrences: #37291a !important;
  --graph-arrow: #980000 !important;
  --graph-attach: #f5a7a2 !important;
  --graph-circle: #FD355C !important;
  --graph-line: #fea2c2 !important;
  --graph-node: #37291a !important;
  --graph-node-focused: #980000 !important;
  --graph-node-unresolved: #37291a !important;
  --graph-text: #37291a !important;
  --graph-text-color: #37291a !important;
  --graph-unresolved: #E87659 !important;
  --graphtag: #ffdece !important;
  --gray: #37291a !important;
  --gray-1: #c4c4c4 !important;
  --gray-2: #7c8595 !important;
  --green: #40916c !important;
  --h1-color: #f39ba0 !important;
  --h2-color: #f39ba0 !important;
  --h3-color: #f39ba0 !important;
  --h4-color: #f39ba0 !important;
  --h5-color: #f39ba0 !important;
  --h6-color: #f39ba0 !important;
  --header-color: #f5a7a2 !important;
  --heading-formatting: #37291a !important;
  --highlight: #f5a7a2 !important;
  --hr-color: rgba(0, 0, 0, 0.1) !important;
  --icon-color: #37291a !important;
  --icon-color-active: #980000 !important;
  --icon-color-focused: #37291a !important;
  --icon-color-hover: #37291a !important;
  --inline-title-color: #f39ba0 !important;
  --input-date-separator: #37291a !important;
  --input-placeholder-color: #37291a !important;
  --interactive-accent: #f5a7a2 !important;
  --interactive-accent-hover: #fd355a !important;
  --interactive-accent-rgb: #fd355a !important;
  --interactive-hover: #ffdece !important;
  --interactive-normal: #f39ba0 !important;
  --light: #efe9d9 !important;
  --light-purple: #d3d6fe !important;
  --light-yellow: #e5e79c !important;
  --lightgray: #efe9d9 !important;
  --link-color: #980000 !important;
  --link-color-hover: #37291a !important;
  --link-external-color: #980000 !important;
  --link-external-color-hover: #37291a !important;
  --link-unresolved-color: #980000 !important;
  --list-marker-color: #37291a !important;
  --list-marker-color-collapsed: #980000 !important;
  --list-marker-color-hover: #37291a !important;
  --list-ol-block-color: #f5a7a2 !important;
  --list-ol-hover: #980000 !important;
  --list-ol-number-color: #f5a7a2 !important;
  --list-ul-block-color: #f5a7a2 !important;
  --list-ul-disc-color: #fd355a !important;
  --list-ul-hover: #980000 !important;
  --mark-highlight: #fd355a !important;
  --menu-background: #efe9d9 !important;
  --mermaid-active-task-color: #f5a7a2 !important;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  --mermaid-seq-dia-color: #ffdece !important;
  --metadata-border-color: rgba(0, 0, 0, 0.1) !important;
  --metadata-divider-color: rgba(0, 0, 0, 0.1) !important;
  --metadata-input-text-color: #37291a !important;
  --metadata-label-text-color: #37291a !important;
  --metadata-label-text-color-hover: #37291a !important;
  --modal-background: #efe9d9 !important;
  --nav-collapse-icon-color: #37291a !important;
  --nav-collapse-icon-color-collapsed: #37291a !important;
  --nav-heading-color: #37291a !important;
  --nav-heading-color-collapsed: #37291a !important;
  --nav-heading-color-collapsed-hover: #37291a !important;
  --nav-heading-color-hover: #37291a !important;
  --nav-item-color: #37291a !important;
  --nav-item-color-active: #37291a !important;
  --nav-item-color-highlighted: #980000 !important;
  --nav-item-color-hover: #37291a !important;
  --nav-item-color-selected: #37291a !important;
  --nav-tag-color: #37291a !important;
  --nav-tag-color-active: #37291a !important;
  --nav-tag-color-hover: #37291a !important;
  --note-cloze: #fd355a !important;
  --note-important: #fd355a !important;
  --orange: #f19c79 !important;
  --panel-border-color: #fd355a !important;
  --pdf-background: #efe9d9 !important;
  --pdf-page-background: #efe9d9 !important;
  --pdf-sidebar-background: #efe9d9 !important;
  --pill-border-color: rgba(0, 0, 0, 0.1) !important;
  --pill-color: #37291a !important;
  --pill-color-hover: #37291a !important;
  --pill-color-remove: #37291a !important;
  --pill-color-remove-hover: #980000 !important;
  --prompt-background: #efe9d9 !important;
  --purple: #8673b4 !important;
  --raised-background: color-mix(in srgb, #efe9d9 65%, transparent) linear-gradient(#efe9d9, color-mix(in srgb, #efe9d9 65%, transparent)) !important;
  --red: #fd355a !important;
  --red-1: #980000 !important;
  --ribbon-background: #efe9d9 !important;
  --ribbon-background-collapsed: #efe9d9 !important;
  --search-clear-button-color: #37291a !important;
  --search-icon-color: #37291a !important;
  --search-result-background: #efe9d9 !important;
  --search-result-file-title-color: #980000 !important;
  --search-text: #37291a !important;
  --secondary: #980000 !important;
  --setting-group-heading-color: #37291a !important;
  --setting-items-background: #ffdece !important;
  --setting-items-border-color: rgba(0, 0, 0, 0.1) !important;
  --slider-track-background: rgba(0, 0, 0, 0.1) !important;
  --stag1: #fd355a !important;
  --stag2: #fd355a !important;
  --stag3: #fd355a !important;
  --status-bar-background: #efe9d9 !important;
  --status-bar-border-color: rgba(0, 0, 0, 0.1) !important;
  --status-bar-text-color: #37291a !important;
  --stickies-color-1: #fd355a !important;
  --stickies-color-2: #f5a7a2 !important;
  --suggestion-background: #efe9d9 !important;
  --tab-background-active: #efe9d9 !important;
  --tab-container-background: #efe9d9 !important;
  --tab-outline-color: rgba(0, 0, 0, 0.1) !important;
  --tab-switcher-background: #efe9d9 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #efe9d9, transparent) !important;
  --tab-text-color: #37291a !important;
  --tab-text-color-active: #37291a !important;
  --tab-text-color-focused: #37291a !important;
  --tab-text-color-focused-active: #37291a !important;
  --tab-text-color-focused-active-current: #37291a !important;
  --tab-text-color-focused-highlighted: #980000 !important;
  --table-add-button-border-color: rgba(0, 0, 0, 0.1) !important;
  --table-background-color: #ffdece !important;
  --table-background-color-odd: #ffdece !important;
  --table-border-color: #fd355a !important;
  --table-drag-handle-background-active: #f5a7a2 !important;
  --table-drag-handle-color: #37291a !important;
  --table-drag-handle-color-active: #37291a !important;
  --table-header-border-color: #fd355a !important;
  --table-header-color: #37291a !important;
  --table-hover-color: #f5a7a2 !important;
  --table-hover-raw-color: #ffdece !important;
  --table-hover-thead-color: #f5a7a2 !important;
  --table-selection-border-color: #f5a7a2 !important;
  --table-thead-background-color: #f5a7a2 !important;
  --tag-color: #980000 !important;
  --tag-color-hover: #980000 !important;
  --tag1: #e5c7a9 !important;
  --tag2: #fea2c2 !important;
  --tag3: #69a2ee !important;
  --tag4: #40916c !important;
  --tag5: #c47a5e !important;
  --tag6: #f5a7a2 !important;
  --tag7: #ab4967 !important;
  --tag8: #dbb671 !important;
  --tag9: #f19c79 !important;
  --tape-color: #acacac65 !important;
  --tertiary: #37291a !important;
  --text-accent: #980000 !important;
  --text-accent-hover: #37291a !important;
  --text-blue: #0083bb !important;
  --text-brown: #855a46 !important;
  --text-error: #f5a7a2 !important;
  --text-error-hover: #fefcf9 !important;
  --text-faint: #37291a !important;
  --text-family-inline-code: "Consolas", "Monaco", monospace !important;
  --text-gray: #37352f99 !important;
  --text-green: #00927f !important;
  --text-highlight-bg: #f5a7a2 !important;
  --text-muted: #37291a !important;
  --text-normal: #37291a !important;
  --text-on-accent: #37291a !important;
  --text-orange: #d9730d !important;
  --text-pink: #c40075 !important;
  --text-purple: #5d1fb9 !important;
  --text-red: #ff4343 !important;
  --text-selection: #ffebec !important;
  --text-size-cloze: 0.9375em !important;
  --text-yellow: #d4a300 !important;
  --textHighlight: #f5a7a2 !important;
  --theme-color: #f5a7a2 !important;
  --theme-color-translucent: #f5a7a2 !important;
  --theme-color-translucent-1: #ffdece !important;
  --titlebar-background: #efe9d9 !important;
  --titlebar-background-focused: #efe9d9 !important;
  --titlebar-border-color: rgba(0, 0, 0, 0.1) !important;
  --titlebar-text-color: #37291a !important;
  --titlebar-text-color-focused: #37291a !important;
  --vault-profile-color: #37291a !important;
  --vault-profile-color-hover: #37291a !important;
  --yellow: #ffc727 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(239, 233, 217);
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(152, 0, 0);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 233, 217);
  border-left-color: rgba(0, 0, 0, 0.1);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 233, 217);
  color: rgb(55, 41, 26);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body del {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(55, 41, 26);
  font-size: 12.1875px;
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 167, 162);
  border-color: rgb(245, 167, 162);
}

html[saved-theme="light"] body p {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(152, 0, 0);
  outline: rgb(152, 0, 0) none 0px;
  text-decoration-color: rgb(152, 0, 0);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 0, 0);
  outline: rgb(152, 0, 0) none 0px;
  text-decoration-color: rgb(152, 0, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(232, 118, 89);
  outline: rgb(232, 118, 89) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(232, 118, 89);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body dt {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(255, 222, 206);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body table {
  color: rgb(55, 41, 26);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: 0px;
  width: 273.219px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(253, 53, 90);
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-top-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(253, 53, 90);
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-top-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
  padding-left: 20px;
  padding-right: 20px;
}

html[saved-theme="light"] body thead {
  background-color: rgb(245, 167, 162);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-right: 30px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(255, 199, 39);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 199, 39);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 199, 39);
  border-left-color: rgb(255, 199, 39);
  border-right-color: rgb(255, 199, 39);
  border-top-color: rgb(255, 199, 39);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(55, 41, 26);
  text-align: justify;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  text-align: justify;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(243, 155, 160);
  border-left-color: rgb(243, 155, 160);
  border-right-color: rgb(243, 155, 160);
  border-top-color: rgb(243, 155, 160);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(245, 167, 162);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(55, 41, 26);
  text-decoration: line-through;
  text-decoration-color: rgb(55, 41, 26);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(239, 233, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(55, 41, 26);
  outline: rgb(55, 41, 26) none 0px;
  text-decoration-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(255, 222, 206);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 233, 217);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(255, 222, 206);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(152, 0, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(243, 155, 160);
}

html[saved-theme="light"] body h2 {
  color: rgb(243, 155, 160);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(243, 155, 160);
}

html[saved-theme="light"] body h3 {
  color: rgb(243, 155, 160);
}

html[saved-theme="light"] body h4 {
  color: rgb(243, 155, 160);
}

html[saved-theme="light"] body h5 {
  color: rgb(243, 155, 160);
}

html[saved-theme="light"] body h6 {
  color: rgb(243, 155, 160);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 233, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 217);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(55, 41, 26);
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(55, 41, 26);
  font-weight: 600;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 233, 217);
  border-bottom-color: rgb(253, 53, 90);
  border-bottom-width: 1px;
  border-left-color: rgb(253, 53, 90);
  border-right-color: rgb(253, 53, 90);
  border-right-width: 1px;
  border-top-color: rgb(253, 53, 90);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(55, 41, 26);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(55, 41, 26);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(55, 41, 26);
  stroke: rgb(55, 41, 26);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(55, 41, 26);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 233, 217);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body abbr {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 222, 206);
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(55, 41, 26);
  border-left-color: rgb(55, 41, 26);
  border-right-color: rgb(55, 41, 26);
  border-top-color: rgb(55, 41, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body summary {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(55, 41, 26);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(229, 199, 169);
  border-bottom-color: rgb(241, 241, 241);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(241, 241, 241);
  border-right-color: rgb(241, 241, 241);
  border-top-color: rgb(241, 241, 241);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: rgb(241, 241, 241);
}`,
  },
};
