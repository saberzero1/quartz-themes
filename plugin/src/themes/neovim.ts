import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "neovim", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 132;
  --accent-l: 83%;
  --accent-s: 79%;
  --background-modifier-active-hover: rgba(177, 246, 191, 0.1);
  --background-modifier-border: #2c2e33;
  --background-modifier-border-focus: #4f5258;
  --background-modifier-border-hover: #2c2e33;
  --background-modifier-error: #ffc0b9;
  --background-modifier-error-hover: #ffc0b9;
  --background-modifier-error-rgb: 255, 192, 185;
  --background-modifier-form-field: #2c2e33;
  --background-modifier-form-field-hover: #2c2e33;
  --background-modifier-success: #b3f6c0;
  --background-modifier-success-rgb: 179, 246, 192;
  --background-primary: #14161b;
  --background-primary-alt: #2c2e33;
  --background-secondary: #14161b;
  --background-secondary-alt: #2c2e33;
  --bases-cards-background: #14161b;
  --bases-cards-cover-background: #2c2e33;
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px #2c2e33;
  --bases-cards-shadow-hover: 0 0 0 1px #2c2e33;
  --bases-embed-border-color: #2c2e33;
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: #e0e2ea;
  --bases-table-border-color: #2c2e33;
  --bases-table-cell-background-active: #14161b;
  --bases-table-cell-background-disabled: #2c2e33;
  --bases-table-cell-background-selected: rgba(177, 246, 191, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #4f5258;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(177, 246, 191);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: #2c2e33;
  --bases-table-header-background: #14161b;
  --bases-table-header-color: #e0e2ea;
  --bases-table-summary-background: #14161b;
  --blockquote-border-color: rgb(177, 246, 191);
  --blur-background: color-mix(in srgb, #07080d 65%, transparent) linear-gradient(#07080d, color-mix(in srgb, #07080d 65%, transparent));
  --button-radius: 3px;
  --callout-bug: 255, 192, 185;
  --callout-default: 166, 219, 255;
  --callout-error: 255, 192, 185;
  --callout-example: 255, 202, 255;
  --callout-fail: 255, 192, 185;
  --callout-important: 140, 248, 247;
  --callout-info: 166, 219, 255;
  --callout-radius: 3px;
  --callout-success: 179, 246, 192;
  --callout-summary: 140, 248, 247;
  --callout-tip: 140, 248, 247;
  --callout-todo: 166, 219, 255;
  --canvas-background: #14161b;
  --canvas-card-label-color: #eef1f8;
  --canvas-color-1: 255, 192, 185;
  --canvas-color-3: 254, 224, 148;
  --canvas-color-4: 179, 246, 192;
  --canvas-color-5: 140, 248, 247;
  --canvas-color-6: 255, 202, 255;
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: #2c2e33;
  --caret-color: #c4c6cd;
  --checkbox-border-color: #eef1f8;
  --checkbox-border-color-hover: #e0e2ea;
  --checkbox-color: rgb(177, 246, 191);
  --checkbox-color-hover: rgb(195, 249, 205);
  --checkbox-marker-color: #14161b;
  --checkbox-radius: 3px;
  --checklist-done-color: #e0e2ea;
  --clickable-icon-radius: 3px;
  --code-background: #2c2e33;
  --code-border-color: #2c2e33;
  --code-comment: #eef1f8;
  --code-function: #fce094;
  --code-normal: #c4c6cd;
  --code-operator: #ffc0b9;
  --code-property: #8cf8f7;
  --code-punctuation: #e0e2ea;
  --code-radius: 3px;
  --code-string: #b3f6c0;
  --code-tag: #ffc0b9;
  --code-value: #ffcaff;
  --collapse-icon-color: #eef1f8;
  --collapse-icon-color-collapsed: rgb(177, 246, 191);
  --color-accent: rgb(177, 246, 191);
  --color-accent-1: rgb(195, 249, 205);
  --color-accent-2: rgb(232, 253, 235);
  --color-accent-hsl: 132, 79%, 83%;
  --color-base-10: #07080d;
  --color-base-20: #14161b;
  --color-base-30: #2c2e33;
  --color-base-40: #4f5258;
  --color-base-50: #9b9ea4;
  --color-base-60: #c4c6cd;
  --color-base-70: #e0e2ea;
  --color-base-80: #eef1f8;
  --color-blue: #a6dbff;
  --color-blue-rgb: 166, 219, 255;
  --color-cyan: #8cf8f7;
  --color-cyan-rgb: 140, 248, 247;
  --color-green: #b3f6c0;
  --color-green-rgb: 179, 246, 192;
  --color-purple: #ffcaff;
  --color-purple-rgb: 255, 202, 255;
  --color-red: #ffc0b9;
  --color-red-rgb: 255, 192, 185;
  --color-yellow: #fce094;
  --color-yellow-rgb: 254, 224, 148;
  --divider-color: #2c2e33;
  --divider-color-hover: rgb(177, 246, 191);
  --dropdown-background: #07080d;
  --dropdown-background-hover: #14161b;
  --embed-block-shadow-hover: 0 0 0 1px #2c2e33, inset 0 0 0 1px #2c2e33;
  --embed-border-start: 2px solid rgb(177, 246, 191);
  --file-header-background: #14161b;
  --file-header-background-focused: #14161b;
  --flair-background: #07080d;
  --flair-color: #c4c6cd;
  --footnote-divider-color: #2c2e33;
  --footnote-id-color: #e0e2ea;
  --footnote-id-color-no-occurrences: #eef1f8;
  --footnote-radius: 3px;
  --graph-node: #e0e2ea;
  --graph-node-attachment: #fce094;
  --graph-node-focused: rgb(177, 246, 191);
  --graph-node-tag: #b3f6c0;
  --graph-node-unresolved: #eef1f8;
  --graph-text: #c4c6cd;
  --heading-formatting: #eef1f8;
  --hr-color: #2c2e33;
  --icon-color: #e0e2ea;
  --icon-color-active: rgb(177, 246, 191);
  --icon-color-focused: #c4c6cd;
  --icon-color-hover: #e0e2ea;
  --input-date-separator: #eef1f8;
  --input-placeholder-color: #eef1f8;
  --input-radius: 3px;
  --interactive-accent: rgb(177, 246, 191);
  --interactive-accent-hover: rgb(195, 249, 205);
  --interactive-accent-hsl: 132, 79%, 83%;
  --interactive-hover: #14161b;
  --interactive-normal: #07080d;
  --link-color: rgb(177, 246, 191);
  --link-color-hover: rgb(232, 253, 235);
  --link-external-color: rgb(177, 246, 191);
  --link-external-color-hover: rgb(232, 253, 235);
  --link-unresolved-color: rgb(177, 246, 191);
  --link-unresolved-decoration-color: rgba(177, 246, 191, 0.3);
  --list-marker-color: #eef1f8;
  --list-marker-color-collapsed: rgb(177, 246, 191);
  --list-marker-color-hover: #e0e2ea;
  --menu-background: #14161b;
  --menu-border-color: #2c2e33;
  --menu-radius: 6px;
  --metadata-border-color: #2c2e33;
  --metadata-divider-color: #2c2e33;
  --metadata-input-text-color: #c4c6cd;
  --metadata-label-text-color: #e0e2ea;
  --metadata-label-text-color-hover: #e0e2ea;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4f5258;
  --metadata-property-box-shadow-hover: 0 0 0 1px #2c2e33;
  --modal-background: #14161b;
  --modal-border-color: #2c2e33;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #eef1f8;
  --nav-collapse-icon-color-collapsed: #eef1f8;
  --nav-heading-color: #c4c6cd;
  --nav-heading-color-collapsed: #eef1f8;
  --nav-heading-color-collapsed-hover: #e0e2ea;
  --nav-heading-color-hover: #c4c6cd;
  --nav-item-background-selected: rgba(177, 246, 191, 0.15);
  --nav-item-color: #e0e2ea;
  --nav-item-color-active: #c4c6cd;
  --nav-item-color-highlighted: rgb(177, 246, 191);
  --nav-item-color-hover: #c4c6cd;
  --nav-item-color-selected: #c4c6cd;
  --nav-item-radius: 3px;
  --nav-tag-color: #eef1f8;
  --nav-tag-color-active: #e0e2ea;
  --nav-tag-color-hover: #e0e2ea;
  --nav-tag-radius: 3px;
  --pdf-background: #14161b;
  --pdf-page-background: #14161b;
  --pdf-shadow: 0 0 0 1px #2c2e33;
  --pdf-sidebar-background: #14161b;
  --pdf-thumbnail-shadow: 0 0 0 1px #2c2e33;
  --pill-border-color: #2c2e33;
  --pill-border-color-hover: #2c2e33;
  --pill-color: #e0e2ea;
  --pill-color-hover: #c4c6cd;
  --pill-color-remove: #eef1f8;
  --pill-color-remove-hover: rgb(177, 246, 191);
  --prompt-background: #14161b;
  --prompt-border-color: #2c2e33;
  --radius-l: 8px;
  --radius-m: 6px;
  --radius-s: 3px;
  --radius-xl: 10px;
  --raised-background: color-mix(in srgb, #07080d 65%, transparent) linear-gradient(#07080d, color-mix(in srgb, #07080d 65%, transparent));
  --ribbon-background: #14161b;
  --ribbon-background-collapsed: #14161b;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #e0e2ea;
  --search-icon-color: #e0e2ea;
  --search-result-background: #14161b;
  --setting-group-heading-color: #c4c6cd;
  --setting-items-background: #2c2e33;
  --setting-items-border-color: #2c2e33;
  --setting-items-radius: 8px;
  --slider-thumb-border-color: #2c2e33;
  --slider-thumb-radius: 3px;
  --slider-track-background: #2c2e33;
  --status-bar-background: #14161b;
  --status-bar-border-color: #2c2e33;
  --status-bar-radius: 6px 0 0 0;
  --status-bar-text-color: #e0e2ea;
  --suggestion-background: #14161b;
  --sync-avatar-color-1: #ffc0b9;
  --sync-avatar-color-3: #fce094;
  --sync-avatar-color-4: #b3f6c0;
  --sync-avatar-color-5: #8cf8f7;
  --sync-avatar-color-6: #a6dbff;
  --sync-avatar-color-7: #ffcaff;
  --tab-background-active: #14161b;
  --tab-container-background: #14161b;
  --tab-divider-color: #2c2e33;
  --tab-outline-color: #2c2e33;
  --tab-radius: 6px;
  --tab-radius-active: 6px;
  --tab-switcher-background: #14161b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14161b, transparent);
  --tab-switcher-preview-radius: 10px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(177, 246, 191);
  --tab-text-color: #eef1f8;
  --tab-text-color-active: #e0e2ea;
  --tab-text-color-focused: #e0e2ea;
  --tab-text-color-focused-active: #e0e2ea;
  --tab-text-color-focused-active-current: #c4c6cd;
  --tab-text-color-focused-highlighted: rgb(177, 246, 191);
  --table-add-button-border-color: #2c2e33;
  --table-border-color: #2c2e33;
  --table-drag-handle-background-active: rgb(177, 246, 191);
  --table-drag-handle-color: #eef1f8;
  --table-drag-handle-color-active: #14161b;
  --table-header-border-color: #2c2e33;
  --table-header-color: #c4c6cd;
  --table-selection: rgba(177, 246, 191, 0.1);
  --table-selection-border-color: rgb(177, 246, 191);
  --tag-background: rgba(177, 246, 191, 0.1);
  --tag-background-hover: rgba(177, 246, 191, 0.2);
  --tag-border-color: rgba(177, 246, 191, 0.15);
  --tag-border-color-hover: rgba(177, 246, 191, 0.15);
  --tag-color: rgb(177, 246, 191);
  --tag-color-hover: rgb(177, 246, 191);
  --text-accent: rgb(177, 246, 191);
  --text-accent-hover: rgb(232, 253, 235);
  --text-error: #ffc0b9;
  --text-faint: #eef1f8;
  --text-muted: #e0e2ea;
  --text-normal: #c4c6cd;
  --text-on-accent: #14161b;
  --text-selection: rgba(177, 246, 191, 0.33);
  --text-success: #b3f6c0;
  --titlebar-background: #14161b;
  --titlebar-background-focused: #2c2e33;
  --titlebar-border-color: #2c2e33;
  --titlebar-text-color: #e0e2ea;
  --titlebar-text-color-focused: #c4c6cd;
  --toggle-radius: 3px;
  --toggle-thumb-radius: 3px;
  --vault-profile-color: #c4c6cd;
  --vault-profile-color-hover: #c4c6cd;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 46, 51);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 22, 27);
  border-left-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}

body div#quartz-root {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body .page article p > em, em {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body .page article p > i, i {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body .page article p > strong, strong {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body .text-highlight {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body del {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration: line-through rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body p {
  color: rgb(224, 226, 234);
  outline: rgb(224, 226, 234) none 0px;
  text-decoration: rgb(224, 226, 234);
  text-decoration-color: rgb(224, 226, 234);
}`,
    links: `body a.external, footer a {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration: underline rgb(177, 246, 191);
  text-decoration-color: rgb(177, 246, 191);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration: underline rgb(177, 246, 191);
  text-decoration-color: rgb(177, 246, 191);
}

body a.internal.broken {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration: underline rgba(177, 246, 191, 0.3);
  text-decoration-color: rgba(177, 246, 191, 0.3);
}`,
    lists: `body dd {
  color: rgb(196, 198, 205);
}

body dt {
  color: rgb(196, 198, 205);
}

body ol > li {
  color: rgb(196, 198, 205);
}

body ol.overflow {
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body ul > li {
  color: rgb(196, 198, 205);
}

body ul.overflow {
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(238, 241, 248);
  text-decoration: rgb(238, 241, 248);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body table {
  color: rgb(196, 198, 205);
}

body td {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}

body th {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}`,
    code: `body code {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

body pre > code > [data-line] {
  border-left-color: rgb(252, 224, 148);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(252, 224, 148);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(252, 224, 148);
  border-left-color: rgb(252, 224, 148);
  border-right-color: rgb(252, 224, 148);
  border-top-color: rgb(252, 224, 148);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body figcaption {
  color: rgb(196, 198, 205);
}

body figure {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body img {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body video {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: rgb(196, 198, 205);
  color: rgb(196, 198, 205);
}

body .transclude {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(177, 246, 191);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body .transclude-inner {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(177, 246, 191);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(224, 226, 234);
  text-decoration: line-through rgb(224, 226, 234);
  text-decoration-color: rgb(224, 226, 234);
}

body input[type=checkbox] {
  border-bottom-color: rgb(238, 241, 248);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(238, 241, 248);
  border-right-color: rgb(238, 241, 248);
  border-top-color: rgb(238, 241, 248);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='/'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(196, 198, 205);
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 140, 248, 247;
  background-color: rgba(140, 248, 247, 0.1);
  border-bottom-color: rgba(140, 248, 247, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(140, 248, 247, 0.25);
  border-right-color: rgba(140, 248, 247, 0.25);
  border-top-color: rgba(140, 248, 247, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 192, 185;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 192, 185;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  --callout-color: 255, 202, 255;
  background-color: rgba(255, 202, 255, 0.1);
  border-bottom-color: rgba(255, 202, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 202, 255, 0.25);
  border-right-color: rgba(255, 202, 255, 0.25);
  border-top-color: rgba(255, 202, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 192, 185;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  --callout-color: 166, 219, 255;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  --callout-color: 166, 219, 255;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  --callout-color: 179, 246, 192;
  background-color: rgba(179, 246, 192, 0.1);
  border-bottom-color: rgba(179, 246, 192, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(179, 246, 192, 0.25);
  border-right-color: rgba(179, 246, 192, 0.25);
  border-top-color: rgba(179, 246, 192, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  --callout-color: 140, 248, 247;
  background-color: rgba(140, 248, 247, 0.1);
  border-bottom-color: rgba(140, 248, 247, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(140, 248, 247, 0.25);
  border-right-color: rgba(140, 248, 247, 0.25);
  border-top-color: rgba(140, 248, 247, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  --callout-color: 166, 219, 255;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(196, 198, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(196, 198, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(196, 198, 205);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 22, 27);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(177, 246, 191, 0.1);
  border-bottom-color: rgba(177, 246, 191, 0.15);
  border-left-color: rgba(177, 246, 191, 0.15);
  border-right-color: rgba(177, 246, 191, 0.15);
  border-top-color: rgba(177, 246, 191, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(177, 246, 191);
}

body h1 {
  color: rgb(196, 198, 205);
}

body h2 {
  color: rgb(196, 198, 205);
}

body h2.page-title, h2.page-title a {
  color: rgb(196, 198, 205);
}

body h3 {
  color: rgb(196, 198, 205);
}

body h4 {
  color: rgb(196, 198, 205);
}

body h5 {
  color: rgb(196, 198, 205);
}

body h6 {
  color: rgb(196, 198, 205);
}

body hr {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
}`,
    scrollbars: `body .callout {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body ::-webkit-scrollbar {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(224, 226, 234);
  text-decoration: rgb(224, 226, 234);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(224, 226, 234);
  text-decoration: rgb(224, 226, 234);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(224, 226, 234);
  text-decoration: rgb(224, 226, 234);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 226, 234);
}`,
    footer: `body footer {
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 6px;
  color: rgb(224, 226, 234);
}

body footer ul li a {
  color: rgb(224, 226, 234);
  text-decoration: rgb(224, 226, 234);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(196, 198, 205);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(196, 198, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 226, 234);
  text-decoration: rgb(224, 226, 234);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 226, 234);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body li.section-li > .section .meta {
  color: rgb(224, 226, 234);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 226, 234);
  text-decoration: rgb(224, 226, 234);
}

body ul.section-ul {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 226, 234);
}

body .darkmode svg {
  color: rgb(224, 226, 234);
  stroke: rgb(224, 226, 234);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 226, 234);
}

body .breadcrumb-element p {
  color: rgb(238, 241, 248);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(196, 198, 205);
}

body .metadata {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(224, 226, 234);
}

body .metadata-properties {
  border-bottom-color: rgb(224, 226, 234);
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  color: rgb(224, 226, 234);
}

body .navigation-progress {
  background-color: rgb(20, 22, 27);
}

body .page-header h2.page-title {
  color: rgb(196, 198, 205);
}

body abbr {
  color: rgb(196, 198, 205);
  text-decoration: underline dotted rgb(196, 198, 205);
}

body details {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body input[type=text] {
  border-bottom-color: rgb(224, 226, 234);
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  color: rgb(224, 226, 234);
}

body kbd {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

body progress {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

body sub {
  color: rgb(196, 198, 205);
}

body summary {
  color: rgb(196, 198, 205);
}

body sup {
  color: rgb(196, 198, 205);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 145;
  --accent-l: 17%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(0, 87, 36, 0.1);
  --background-modifier-border: #c4c6cd;
  --background-modifier-border-focus: #9b9ea4;
  --background-modifier-border-hover: #c4c6cd;
  --background-modifier-error: #590008;
  --background-modifier-error-hover: #590008;
  --background-modifier-error-rgb: 89, 0, 8;
  --background-modifier-form-field: #c4c6cd;
  --background-modifier-form-field-hover: #c4c6cd;
  --background-modifier-success: #005523;
  --background-modifier-success-rgb: 0, 85, 35;
  --background-primary: #e0e2ea;
  --background-primary-alt: #c4c6cd;
  --background-secondary: #e0e2ea;
  --background-secondary-alt: #c4c6cd;
  --bases-cards-background: #e0e2ea;
  --bases-cards-cover-background: #c4c6cd;
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px #c4c6cd;
  --bases-cards-shadow-hover: 0 0 0 1px #c4c6cd;
  --bases-embed-border-color: #c4c6cd;
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: #14161b;
  --bases-table-border-color: #c4c6cd;
  --bases-table-cell-background-active: #e0e2ea;
  --bases-table-cell-background-disabled: #c4c6cd;
  --bases-table-cell-background-selected: rgba(0, 87, 36, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #9b9ea4;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(144, 101%, 19.55%);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: #c4c6cd;
  --bases-table-header-background: #e0e2ea;
  --bases-table-header-color: #14161b;
  --bases-table-summary-background: #e0e2ea;
  --blockquote-border-color: hsl(144, 101%, 19.55%);
  --blur-background: color-mix(in srgb, #e0e2ea 65%, transparent) linear-gradient(#e0e2ea, color-mix(in srgb, #e0e2ea 65%, transparent));
  --button-radius: 3px;
  --callout-bug: 89, 0, 8;
  --callout-default: 0, 76, 115;
  --callout-error: 89, 0, 8;
  --callout-example: 71, 0, 69;
  --callout-fail: 89, 0, 8;
  --callout-important: 0, 115, 115;
  --callout-info: 0, 76, 115;
  --callout-radius: 3px;
  --callout-success: 0, 85, 35;
  --callout-summary: 0, 115, 115;
  --callout-tip: 0, 115, 115;
  --callout-todo: 0, 76, 115;
  --canvas-background: #e0e2ea;
  --canvas-card-label-color: #07080d;
  --canvas-color-1: 89, 0, 8;
  --canvas-color-3: 107, 83, 0;
  --canvas-color-4: 0, 85, 35;
  --canvas-color-5: 0, 115, 115;
  --canvas-color-6: 71, 0, 69;
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: #c4c6cd;
  --caret-color: #2c2e33;
  --checkbox-border-color: #07080d;
  --checkbox-border-color-hover: #14161b;
  --checkbox-color: hsl(144, 101%, 19.55%);
  --checkbox-color-hover: hsl(142, 102%, 25.5%);
  --checkbox-marker-color: #e0e2ea;
  --checkbox-radius: 3px;
  --checklist-done-color: #14161b;
  --clickable-icon-radius: 3px;
  --code-background: #c4c6cd;
  --code-border-color: #c4c6cd;
  --code-comment: #07080d;
  --code-function: #6b5300;
  --code-normal: #2c2e33;
  --code-operator: #590008;
  --code-property: #007373;
  --code-punctuation: #14161b;
  --code-radius: 3px;
  --code-string: #005523;
  --code-tag: #590008;
  --code-value: #470045;
  --collapse-icon-color: #07080d;
  --collapse-icon-color-collapsed: rgb(0, 87, 36);
  --color-accent: rgb(0, 87, 36);
  --color-accent-1: hsl(144, 101%, 19.55%);
  --color-accent-2: hsl(142, 102%, 25.5%);
  --color-accent-hsl: 145, 100%, 17%;
  --color-base-10: #eef1f8;
  --color-base-20: #e0e2ea;
  --color-base-30: #c4c6cd;
  --color-base-40: #9b9ea4;
  --color-base-50: #4f5258;
  --color-base-60: #2c2e33;
  --color-base-70: #14161b;
  --color-base-80: #07080d;
  --color-blue: #004c73;
  --color-blue-rgb: 0, 76, 115;
  --color-cyan: #007373;
  --color-cyan-rgb: 0, 115, 115;
  --color-green: #005523;
  --color-green-rgb: 0, 85, 35;
  --color-purple: #470045;
  --color-purple-rgb: 71, 0, 69;
  --color-red: #590008;
  --color-red-rgb: 89, 0, 8;
  --color-yellow: #6b5300;
  --color-yellow-rgb: 107, 83, 0;
  --divider-color: #c4c6cd;
  --divider-color-hover: hsl(144, 101%, 19.55%);
  --dropdown-background: #eef1f8;
  --dropdown-background-hover: #e0e2ea;
  --embed-block-shadow-hover: 0 0 0 1px #c4c6cd, inset 0 0 0 1px #c4c6cd;
  --embed-border-start: 2px solid hsl(144, 101%, 19.55%);
  --file-header-background: #e0e2ea;
  --file-header-background-focused: #e0e2ea;
  --flair-background: #eef1f8;
  --flair-color: #2c2e33;
  --footnote-divider-color: #c4c6cd;
  --footnote-id-color: #14161b;
  --footnote-id-color-no-occurrences: #07080d;
  --footnote-radius: 3px;
  --graph-node: #14161b;
  --graph-node-attachment: #6b5300;
  --graph-node-focused: rgb(0, 87, 36);
  --graph-node-tag: #005523;
  --graph-node-unresolved: #07080d;
  --graph-text: #2c2e33;
  --heading-formatting: #07080d;
  --hr-color: #c4c6cd;
  --icon-color: #14161b;
  --icon-color-active: rgb(0, 87, 36);
  --icon-color-focused: #2c2e33;
  --icon-color-hover: #14161b;
  --input-date-separator: #07080d;
  --input-placeholder-color: #07080d;
  --input-radius: 3px;
  --interactive-accent: hsl(144, 101%, 19.55%);
  --interactive-accent-hover: hsl(142, 102%, 25.5%);
  --interactive-accent-hsl: 145, 100%, 17%;
  --interactive-hover: #e0e2ea;
  --interactive-normal: #eef1f8;
  --link-color: rgb(0, 87, 36);
  --link-color-hover: hsl(142, 102%, 25.5%);
  --link-external-color: rgb(0, 87, 36);
  --link-external-color-hover: hsl(142, 102%, 25.5%);
  --link-unresolved-color: rgb(0, 87, 36);
  --link-unresolved-decoration-color: rgba(0, 87, 36, 0.3);
  --list-marker-color: #07080d;
  --list-marker-color-collapsed: rgb(0, 87, 36);
  --list-marker-color-hover: #14161b;
  --menu-background: #e0e2ea;
  --menu-border-color: #c4c6cd;
  --menu-radius: 6px;
  --metadata-border-color: #c4c6cd;
  --metadata-divider-color: #c4c6cd;
  --metadata-input-text-color: #2c2e33;
  --metadata-label-text-color: #14161b;
  --metadata-label-text-color-hover: #14161b;
  --metadata-property-box-shadow-focus: 0 0 0 2px #9b9ea4;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c4c6cd;
  --modal-background: #e0e2ea;
  --modal-border-color: #c4c6cd;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #07080d;
  --nav-collapse-icon-color-collapsed: #07080d;
  --nav-heading-color: #2c2e33;
  --nav-heading-color-collapsed: #07080d;
  --nav-heading-color-collapsed-hover: #14161b;
  --nav-heading-color-hover: #2c2e33;
  --nav-item-background-selected: rgba(0, 87, 36, 0.15);
  --nav-item-color: #14161b;
  --nav-item-color-active: #2c2e33;
  --nav-item-color-highlighted: rgb(0, 87, 36);
  --nav-item-color-hover: #2c2e33;
  --nav-item-color-selected: #2c2e33;
  --nav-item-radius: 3px;
  --nav-tag-color: #07080d;
  --nav-tag-color-active: #14161b;
  --nav-tag-color-hover: #14161b;
  --nav-tag-radius: 3px;
  --pdf-background: #e0e2ea;
  --pdf-page-background: #e0e2ea;
  --pdf-sidebar-background: #e0e2ea;
  --pill-border-color: #c4c6cd;
  --pill-border-color-hover: #c4c6cd;
  --pill-color: #14161b;
  --pill-color-hover: #2c2e33;
  --pill-color-remove: #07080d;
  --pill-color-remove-hover: rgb(0, 87, 36);
  --prompt-background: #e0e2ea;
  --prompt-border-color: #c4c6cd;
  --radius-l: 8px;
  --radius-m: 6px;
  --radius-s: 3px;
  --radius-xl: 10px;
  --raised-background: color-mix(in srgb, #e0e2ea 65%, transparent) linear-gradient(#e0e2ea, color-mix(in srgb, #e0e2ea 65%, transparent));
  --ribbon-background: #e0e2ea;
  --ribbon-background-collapsed: #e0e2ea;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #14161b;
  --search-icon-color: #14161b;
  --search-result-background: #e0e2ea;
  --setting-group-heading-color: #2c2e33;
  --setting-items-background: #c4c6cd;
  --setting-items-border-color: #c4c6cd;
  --setting-items-radius: 8px;
  --slider-thumb-border-color: #c4c6cd;
  --slider-thumb-radius: 3px;
  --slider-track-background: #c4c6cd;
  --status-bar-background: #e0e2ea;
  --status-bar-border-color: #c4c6cd;
  --status-bar-radius: 6px 0 0 0;
  --status-bar-text-color: #14161b;
  --suggestion-background: #e0e2ea;
  --sync-avatar-color-1: #590008;
  --sync-avatar-color-3: #6b5300;
  --sync-avatar-color-4: #005523;
  --sync-avatar-color-5: #007373;
  --sync-avatar-color-6: #004c73;
  --sync-avatar-color-7: #470045;
  --tab-background-active: #e0e2ea;
  --tab-container-background: #e0e2ea;
  --tab-divider-color: #c4c6cd;
  --tab-outline-color: #c4c6cd;
  --tab-radius: 6px;
  --tab-radius-active: 6px;
  --tab-switcher-background: #e0e2ea;
  --tab-switcher-menubar-background: linear-gradient(to top, #e0e2ea, transparent);
  --tab-switcher-preview-radius: 10px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 87, 36);
  --tab-text-color: #07080d;
  --tab-text-color-active: #14161b;
  --tab-text-color-focused: #14161b;
  --tab-text-color-focused-active: #14161b;
  --tab-text-color-focused-active-current: #2c2e33;
  --tab-text-color-focused-highlighted: rgb(0, 87, 36);
  --table-add-button-border-color: #c4c6cd;
  --table-border-color: #c4c6cd;
  --table-drag-handle-background-active: hsl(144, 101%, 19.55%);
  --table-drag-handle-color: #07080d;
  --table-drag-handle-color-active: #e0e2ea;
  --table-header-border-color: #c4c6cd;
  --table-header-color: #2c2e33;
  --table-selection: rgba(0, 87, 36, 0.1);
  --table-selection-border-color: hsl(144, 101%, 19.55%);
  --tag-background: rgba(0, 87, 36, 0.1);
  --tag-background-hover: rgba(0, 87, 36, 0.2);
  --tag-border-color: rgba(0, 87, 36, 0.15);
  --tag-border-color-hover: rgba(0, 87, 36, 0.15);
  --tag-color: rgb(0, 87, 36);
  --tag-color-hover: rgb(0, 87, 36);
  --text-accent: rgb(0, 87, 36);
  --text-accent-hover: hsl(142, 102%, 25.5%);
  --text-error: #590008;
  --text-faint: #07080d;
  --text-muted: #14161b;
  --text-normal: #2c2e33;
  --text-on-accent: #e0e2ea;
  --text-selection: rgba(0, 87, 36, 0.2);
  --text-success: #005523;
  --titlebar-background: #e0e2ea;
  --titlebar-background-focused: #c4c6cd;
  --titlebar-border-color: #c4c6cd;
  --titlebar-text-color: #14161b;
  --titlebar-text-color-focused: #2c2e33;
  --toggle-radius: 3px;
  --toggle-thumb-radius: 3px;
  --vault-profile-color: #2c2e33;
  --vault-profile-color-hover: #2c2e33;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(196, 198, 205);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(224, 226, 234);
  border-left-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}

body div#quartz-root {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}`,
    typography: `body .page article p > b, b {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body .page article p > em, em {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body .page article p > i, i {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body .page article p > strong, strong {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body .text-highlight {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body del {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration: line-through rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body p {
  color: rgb(20, 22, 27);
  outline: rgb(20, 22, 27) none 0px;
  text-decoration: rgb(20, 22, 27);
  text-decoration-color: rgb(20, 22, 27);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration: underline rgb(0, 87, 36);
  text-decoration-color: rgb(0, 87, 36);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration: underline rgb(0, 87, 36);
  text-decoration-color: rgb(0, 87, 36);
}

body a.internal.broken {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration: underline rgba(0, 87, 36, 0.3);
  text-decoration-color: rgba(0, 87, 36, 0.3);
}`,
    lists: `body dd {
  color: rgb(44, 46, 51);
}

body dt {
  color: rgb(44, 46, 51);
}

body ol > li {
  color: rgb(44, 46, 51);
}

body ol.overflow {
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body ul > li {
  color: rgb(44, 46, 51);
}

body ul.overflow {
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(7, 8, 13);
  text-decoration: rgb(7, 8, 13);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body table {
  color: rgb(44, 46, 51);
}

body td {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}

body th {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}`,
    code: `body code {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

body pre > code > [data-line] {
  border-left-color: rgb(107, 83, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(107, 83, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(107, 83, 0);
  border-left-color: rgb(107, 83, 0);
  border-right-color: rgb(107, 83, 0);
  border-top-color: rgb(107, 83, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body figcaption {
  color: rgb(44, 46, 51);
}

body figure {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body img {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body video {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    embeds: `body .file-embed {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: rgb(44, 46, 51);
  color: rgb(44, 46, 51);
}

body .transclude {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(0, 100, 40);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body .transclude-inner {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(0, 100, 40);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(20, 22, 27);
  text-decoration: line-through rgb(20, 22, 27);
  text-decoration-color: rgb(20, 22, 27);
}

body input[type=checkbox] {
  border-bottom-color: rgb(7, 8, 13);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(7, 8, 13);
  border-right-color: rgb(7, 8, 13);
  border-top-color: rgb(7, 8, 13);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='*'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='-'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='/'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='>'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='?'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='I'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='S'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='b'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='c'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='d'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='f'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='i'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='k'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='l'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='p'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='u'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body li.task-list-item[data-task='w'] {
  color: rgb(44, 46, 51);
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 115, 115;
  background-color: rgba(0, 115, 115, 0.1);
  border-bottom-color: rgba(0, 115, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 115, 115, 0.25);
  border-right-color: rgba(0, 115, 115, 0.25);
  border-top-color: rgba(0, 115, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  --callout-color: 89, 0, 8;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  --callout-color: 89, 0, 8;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  --callout-color: 71, 0, 69;
  background-color: rgba(71, 0, 69, 0.1);
  border-bottom-color: rgba(71, 0, 69, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(71, 0, 69, 0.25);
  border-right-color: rgba(71, 0, 69, 0.25);
  border-top-color: rgba(71, 0, 69, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  --callout-color: 89, 0, 8;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  --callout-color: 0, 76, 115;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  --callout-color: 0, 76, 115;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  --callout-color: 0, 85, 35;
  background-color: rgba(0, 85, 35, 0.1);
  border-bottom-color: rgba(0, 85, 35, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 85, 35, 0.25);
  border-right-color: rgba(0, 85, 35, 0.25);
  border-top-color: rgba(0, 85, 35, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 115, 115;
  background-color: rgba(0, 115, 115, 0.1);
  border-bottom-color: rgba(0, 115, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 115, 115, 0.25);
  border-right-color: rgba(0, 115, 115, 0.25);
  border-top-color: rgba(0, 115, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 76, 115;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

body .search > .search-container > .search-space {
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 46, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(44, 46, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(44, 46, 51);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 226, 234);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 87, 36, 0.1);
  border-bottom-color: rgba(0, 87, 36, 0.15);
  border-left-color: rgba(0, 87, 36, 0.15);
  border-right-color: rgba(0, 87, 36, 0.15);
  border-top-color: rgba(0, 87, 36, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(0, 87, 36);
}

body h1 {
  color: rgb(44, 46, 51);
}

body h2 {
  color: rgb(44, 46, 51);
}

body h2.page-title, h2.page-title a {
  color: rgb(44, 46, 51);
}

body h3 {
  color: rgb(44, 46, 51);
}

body h4 {
  color: rgb(44, 46, 51);
}

body h5 {
  color: rgb(44, 46, 51);
}

body h6 {
  color: rgb(44, 46, 51);
}

body hr {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
}`,
    scrollbars: `body .callout {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body ::-webkit-scrollbar {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

body ::-webkit-scrollbar-corner {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

body ::-webkit-scrollbar-track {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(20, 22, 27);
  text-decoration: rgb(20, 22, 27);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(20, 22, 27);
  text-decoration: rgb(20, 22, 27);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(20, 22, 27);
  text-decoration: rgb(20, 22, 27);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(20, 22, 27);
}`,
    footer: `body footer {
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 6px;
  color: rgb(20, 22, 27);
}

body footer ul li a {
  color: rgb(20, 22, 27);
  text-decoration: rgb(20, 22, 27);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(44, 46, 51);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(44, 46, 51);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(20, 22, 27);
  text-decoration: rgb(20, 22, 27);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(20, 22, 27);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body li.section-li > .section .meta {
  color: rgb(20, 22, 27);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(20, 22, 27);
  text-decoration: rgb(20, 22, 27);
}

body ul.section-ul {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(20, 22, 27);
}

body .darkmode svg {
  color: rgb(20, 22, 27);
  stroke: rgb(20, 22, 27);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(20, 22, 27);
}

body .breadcrumb-element p {
  color: rgb(7, 8, 13);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(44, 46, 51);
}

body .metadata {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(20, 22, 27);
}

body .metadata-properties {
  border-bottom-color: rgb(20, 22, 27);
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  color: rgb(20, 22, 27);
}

body .navigation-progress {
  background-color: rgb(224, 226, 234);
}

body .page-header h2.page-title {
  color: rgb(44, 46, 51);
}

body abbr {
  color: rgb(44, 46, 51);
  text-decoration: underline dotted rgb(44, 46, 51);
}

body details {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body input[type=text] {
  border-bottom-color: rgb(20, 22, 27);
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  color: rgb(20, 22, 27);
}

body kbd {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

body progress {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

body sub {
  color: rgb(44, 46, 51);
}

body summary {
  color: rgb(44, 46, 51);
}

body sup {
  color: rgb(44, 46, 51);
}`,
  },
};
