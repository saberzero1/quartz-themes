import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lumines",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 259.1;
  --accent-l: 69.9%;
  --accent-s: 89.9%;
  --background-modifier-active-hover: transparent;
  --background-modifier-border: rgb(51, 51, 51);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-form-field: rgb(51, 51, 51);
  --background-modifier-form-field-hover: rgb(51, 51, 51);
  --background-primary: rgb(28, 28, 28);
  --background-primary-alt: rgb(43, 43, 43);
  --background-secondary: rgb(36, 36, 36);
  --background-secondary-alt: rgb(77, 77, 77);
  --bases-cards-background: rgb(36, 36, 36);
  --bases-cards-cover-background: rgb(43, 43, 43);
  --bases-cards-shadow: 0 0 0 1px rgb(43, 43, 43);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(153, 110, 247);
  --bases-cards-text-size: 0.875em;
  --bases-embed-border-color: rgb(43, 43, 43);
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: rgb(230, 230, 230);
  --bases-table-border-color: rgb(43, 43, 43);
  --bases-table-cell-background-active: rgb(36, 36, 36);
  --bases-table-cell-background-disabled: transparent;
  --bases-table-cell-background-selected: rgba(153, 110, 247, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(153, 110, 247);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 110, 247);
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: rgb(43, 43, 43);
  --bases-table-header-background: rgb(28, 28, 28);
  --bases-table-header-background-hover: none;
  --bases-table-header-color: rgb(230, 230, 230);
  --bases-table-header-icon-display: none;
  --bases-table-row-background-hover: rgb(36, 36, 36);
  --bases-table-summary-background: rgb(28, 28, 28);
  --bases-table-text-size: 0.875em;
  --blockquote-border-color: rgb(153, 110, 247);
  --blue-h: 207;
  --blue-l: 57%;
  --blue-s: 86%;
  --blur-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent));
  --bold-color: rgb(153, 110, 247);
  --bold-weight: 600;
  --button-radius: 8px;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
  --callout-title-weight: 600;
  --canvas-background: rgb(28, 28, 28);
  --canvas-card-label-color: rgb(128, 128, 128);
  --canvas-dot-pattern: rgb(77, 77, 77);
  --caret-color: rgb(245, 245, 245);
  --checkbox-border-color: rgb(128, 128, 128);
  --checkbox-border-color-hover: rgb(153, 110, 247);
  --checkbox-color: rgb(153, 110, 247);
  --checkbox-color-hover: rgb(182, 157, 251);
  --checkbox-marker-color: rgb(28, 28, 28);
  --checkbox-radius: 35%;
  --checklist-done-color: rgb(128, 128, 128);
  --checklist-done-decoration: none;
  --code-background: rgb(36, 36, 36);
  --code-border-color: rgb(43, 43, 43);
  --code-border-width: 1px;
  --code-comment: rgb(128, 128, 128);
  --code-function: rgb(152, 195, 121);
  --code-important: rgb(198, 120, 221);
  --code-keyword: rgb(86, 182, 194);
  --code-normal: rgb(237, 237, 237);
  --code-operator: rgb(237, 237, 237);
  --code-property: rgb(86, 182, 194);
  --code-punctuation: rgb(230, 230, 230);
  --code-radius: 8px;
  --code-string: rgb(229, 192, 123);
  --code-tag: rgb(224, 108, 117);
  --code-value: rgb(198, 120, 221);
  --collapse-icon-color: rgb(128, 128, 128);
  --collapse-icon-color-collapsed: rgb(153, 110, 247);
  --color-accent: rgb(153, 110, 247);
  --color-accent-1: rgb(182, 157, 251);
  --color-accent-2: rgb(217, 206, 253);
  --color-accent-hsl: 259.1, 89.9%, 69.9%;
  --color-base-00: rgb(28, 28, 28);
  --color-base-05: rgb(36, 36, 36);
  --color-base-10: rgb(43, 43, 43);
  --color-base-100: rgb(252, 252, 252);
  --color-base-20: rgb(51, 51, 51);
  --color-base-25: rgb(64, 64, 64);
  --color-base-30: rgb(77, 77, 77);
  --color-base-35: rgb(89, 89, 89);
  --color-base-40: rgb(102, 102, 102);
  --color-base-50: rgb(128, 128, 128);
  --color-base-60: rgb(153, 153, 153);
  --color-base-70: rgb(230, 230, 230);
  --color-base-80: rgb(237, 237, 237);
  --color-base-90: rgb(245, 245, 245);
  --components-background: rgb(51, 51, 51);
  --components-background-hover: rgb(64, 64, 64);
  --custom-icon-size: 1.2em;
  --cyan-h: 187;
  --cyan-l: 55%;
  --cyan-s: 69%;
  --divider-color: rgb(43, 43, 43);
  --divider-color-hover: rgb(153, 110, 247);
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: rgb(51, 51, 51);
  --dropdown-background-hover: rgb(64, 64, 64);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(153, 110, 247);
  --file-header-background: rgb(28, 28, 28);
  --file-header-background-focused: rgb(28, 28, 28);
  --filename-margin-bottom: 0.8rem;
  --flair-background: rgb(51, 51, 51);
  --flair-color: rgb(245, 245, 245);
  --font-weight-table-titles: 700;
  --footnote-divider-color: transparent;
  --footnote-id-color: rgb(230, 230, 230);
  --footnote-id-color-no-occurrences: rgb(128, 128, 128);
  --footnote-input-background-active: transparent;
  --graph-line: rgb(77, 77, 77);
  --graph-node: rgb(230, 230, 230);
  --graph-node-attachment: rgb(255, 213, 61);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(153, 110, 247);
  --graph-node-unresolved: rgb(128, 128, 128);
  --graph-text: rgb(245, 245, 245);
  --gray-h: 210;
  --gray-l: 71%;
  --gray-s: 11%;
  --green-h: 130;
  --green-l: 64%;
  --green-s: 61%;
  --h1-color: rgb(153, 110, 247);
  --h1-size: 1.5em;
  --h2-color: rgb(153, 110, 247);
  --h2-size: 1.4em;
  --h3-color: rgb(153, 110, 247);
  --h3-size: 1.3em;
  --h4-color: rgb(153, 110, 247);
  --h4-size: 1.2em;
  --h5-color: rgb(153, 110, 247);
  --h5-size: 1.1em;
  --h6-color: rgb(153, 110, 247);
  --h6-size: 1.0em;
  --header-padding-top: 0.3em;
  --heading-formatting: rgb(128, 128, 128);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(43, 43, 43);
  --icon-color: rgb(230, 230, 230);
  --icon-color-active: rgb(237, 237, 237);
  --icon-color-focused: rgb(245, 245, 245);
  --icon-color-hover: rgb(230, 230, 230);
  --indigo-h: 228;
  --indigo-l: 72%;
  --indigo-s: 96%;
  --inline-title-color: rgb(245, 245, 245);
  --inline-title-size: 1.5em;
  --input-date-separator: rgb(128, 128, 128);
  --input-placeholder-color: rgb(128, 128, 128);
  --input-radius: 8px;
  --interactive-accent: rgb(153, 110, 247);
  --interactive-accent-hover: rgb(182, 157, 251);
  --interactive-accent-hsl: 259.1, 89.9%, 69.9%;
  --interactive-hover: rgb(64, 64, 64);
  --interactive-normal: rgb(51, 51, 51);
  --italic-color: rgb(153, 110, 247);
  --lime-h: 82;
  --lime-l: 69%;
  --lime-s: 75%;
  --link-color: rgb(153, 110, 247);
  --link-color-hover: rgb(217, 206, 253);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(153, 110, 247);
  --link-external-color-hover: rgb(217, 206, 253);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(182, 157, 251);
  --link-unresolved-decoration-color: rgba(153, 110, 247, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: rgb(128, 128, 128);
  --list-marker-color-collapsed: rgb(182, 157, 251);
  --list-marker-color-hover: rgb(230, 230, 230);
  --menu-background: rgb(36, 36, 36);
  --menu-border-color: transparent;
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-input-background-active: transparent;
  --metadata-input-height: 28px;
  --metadata-input-text-color: rgb(245, 245, 245);
  --metadata-label-background-active: transparent;
  --metadata-label-text-color: rgb(230, 230, 230);
  --metadata-label-text-color-hover: rgb(230, 230, 230);
  --metadata-margin-bottom: 0.8rem;
  --metadata-padding: 0;
  --metadata-property-background-active: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-property-radius: 8px;
  --metadata-property-radius-focus: 8px;
  --metadata-property-radius-hover: 8px;
  --modal-background: rgb(28, 28, 28);
  --modal-border-color: rgb(43, 43, 43);
  --modal-radius: 8px;
  --nav-collapse-icon-color: rgb(128, 128, 128);
  --nav-collapse-icon-color-collapsed: rgb(128, 128, 128);
  --nav-heading-color: rgb(245, 245, 245);
  --nav-heading-color-collapsed: rgb(128, 128, 128);
  --nav-heading-color-collapsed-hover: rgb(230, 230, 230);
  --nav-heading-color-hover: rgb(245, 245, 245);
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.07);
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-background-selected: rgba(153, 110, 247, 0.15);
  --nav-item-color: rgb(230, 230, 230);
  --nav-item-color-active: rgb(230, 230, 230);
  --nav-item-color-highlighted: rgb(182, 157, 251);
  --nav-item-color-hover: rgb(230, 230, 230);
  --nav-item-color-selected: rgb(245, 245, 245);
  --nav-tag-color: rgb(128, 128, 128);
  --nav-tag-color-active: rgb(230, 230, 230);
  --nav-tag-color-hover: rgb(230, 230, 230);
  --orange-h: 31;
  --orange-l: 65%;
  --orange-s: 100%;
  --pdf-background: rgb(28, 28, 28);
  --pdf-page-background: rgb(28, 28, 28);
  --pdf-shadow: 0 0 0 1px rgb(51, 51, 51);
  --pdf-sidebar-background: rgb(28, 28, 28);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(51, 51, 51);
  --pill-border-color: rgb(51, 51, 51);
  --pill-border-color-hover: transparent;
  --pill-color: rgb(230, 230, 230);
  --pill-color-hover: rgb(245, 245, 245);
  --pill-color-remove: rgb(128, 128, 128);
  --pill-color-remove-hover: rgb(182, 157, 251);
  --pink-h: 339;
  --pink-l: 74%;
  --pink-s: 88%;
  --popover-height: 300px;
  --popover-width: 500px;
  --primary-blue: 207, 86%, 57%;
  --primary-cyan: 187, 69%, 55%;
  --primary-gray: 210, 11%, 71%;
  --primary-green: 130, 61%, 64%;
  --primary-indigo: 228, 96%, 72%;
  --primary-lime: 82, 75%, 69%;
  --primary-orange: 31, 100%, 65%;
  --primary-pink: 339, 88%, 74%;
  --primary-red: 0, 94%, 65%;
  --primary-sky: 206, 96%, 72%;
  --primary-violet: 259, 90%, 70%;
  --primary-white: 0, 0%, 100%;
  --primary-yellow: 47, 100%, 62%;
  --prompt-background: rgb(28, 28, 28);
  --prompt-border-color: rgb(43, 43, 43);
  --raised-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent));
  --red-h: 0;
  --red-l: 65%;
  --red-s: 94%;
  --ribbon-background: rgb(28, 28, 28);
  --ribbon-background-collapsed: rgb(28, 28, 28);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.1);
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.05);
  --search-clear-button-color: rgb(230, 230, 230);
  --search-icon-color: rgb(230, 230, 230);
  --search-result-background: rgb(36, 36, 36);
  --setting-group-heading-color: rgb(245, 245, 245);
  --setting-items-background: rgb(36, 36, 36);
  --setting-items-border-color: rgb(51, 51, 51);
  --sidebar-markdown-font-size: 14.4px;
  --sky-h: 206;
  --sky-l: 72%;
  --sky-s: 96%;
  --slider-thumb-border-color: transparent;
  --slider-track-background: rgb(51, 51, 51);
  --status-bar-background: rgb(36, 36, 36);
  --status-bar-border-color: rgb(43, 43, 43);
  --status-bar-border-width: 0;
  --status-bar-position: related;
  --status-bar-radius: 0;
  --status-bar-text-color: rgb(230, 230, 230);
  --suggestion-background: rgb(28, 28, 28);
  --tab-background-active: rgb(28, 28, 28);
  --tab-container-background: rgb(28, 28, 28);
  --tab-curve: 8px;
  --tab-divider-color: transparent;
  --tab-outline-color: rgb(43, 43, 43);
  --tab-radius-active: 8px 8px 0 0;
  --tab-switcher-background: rgb(36, 36, 36);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(36, 36, 36), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(153, 110, 247);
  --tab-text-color: rgb(128, 128, 128);
  --tab-text-color-active: rgb(230, 230, 230);
  --tab-text-color-focused: rgb(128, 128, 128);
  --tab-text-color-focused-active: rgb(128, 128, 128);
  --tab-text-color-focused-active-current: rgb(245, 245, 245);
  --tab-text-color-focused-highlighted: rgb(182, 157, 251);
  --table-add-button-border-color: rgb(51, 51, 51);
  --table-border-color: rgb(51, 51, 51);
  --table-drag-handle-background-active: rgb(153, 110, 247);
  --table-drag-handle-color: rgb(128, 128, 128);
  --table-header-background: rgb(36, 36, 36);
  --table-header-border-color: rgb(51, 51, 51);
  --table-header-color: rgb(245, 245, 245);
  --table-header-weight: 600;
  --table-selection: rgba(153, 110, 247, 0.1);
  --table-selection-border-color: rgb(153, 110, 247);
  --tag-background: rgba(153, 110, 247, 0.1);
  --tag-background-hover: rgba(153, 110, 247, 0.2);
  --tag-border-color: rgba(153, 110, 247, 0.15);
  --tag-border-color-hover: rgba(153, 110, 247, 0.15);
  --tag-color: rgb(153, 110, 247);
  --tag-color-hover: rgb(182, 157, 251);
  --text-accent: rgb(182, 157, 251);
  --text-accent-hover: rgb(217, 206, 253);
  --text-faint: rgb(128, 128, 128);
  --text-muted: rgb(230, 230, 230);
  --text-normal: rgb(245, 245, 245);
  --text-selection: rgba(153, 110, 247, 0.33);
  --titlebar-background: rgb(36, 36, 36);
  --titlebar-background-focused: rgb(36, 36, 36);
  --titlebar-border-color: rgb(51, 51, 51);
  --titlebar-text-color: rgb(230, 230, 230);
  --titlebar-text-color-focused: rgb(245, 245, 245);
  --vault-profile-color: rgb(245, 245, 245);
  --vault-profile-color-hover: rgb(245, 245, 245);
  --violet-h: 259;
  --violet-l: 70%;
  --violet-s: 90%;
  --white-h: 0;
  --white-l: 100%;
  --white-s: 0%;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --yellow-h: 47;
  --yellow-l: 62%;
  --yellow-s: 100%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(245, 245, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(43, 43, 43);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(43, 43, 43);
  color: rgb(245, 245, 245);
}

body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(245, 245, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .page article p > em, em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .page article p > i, i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .page article p > strong, strong {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .text-highlight {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: line-through rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body p {
  color: rgb(230, 230, 230);
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}`,
    links: `body a.external, footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body a.internal.broken {
  color: rgb(184, 159, 251);
  outline: rgb(184, 159, 251) none 0px;
  text-decoration: rgba(153, 109, 247, 0.3);
  text-decoration-color: rgba(153, 109, 247, 0.3);
}`,
    lists: `body dd {
  color: rgb(245, 245, 245);
}

body dt {
  color: rgb(245, 245, 245);
}

body ol > li {
  color: rgb(245, 245, 245);
}

body ol.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body ul > li {
  color: rgb(245, 245, 245);
}

body ul.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}`,
    tables: `body .spacer {
  background-color: rgb(28, 28, 28);
}

body .table-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body table {
  color: rgb(245, 245, 245);
}

body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(245, 245, 245);
}

body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(245, 245, 245);
}

body tr {
  background-color: rgb(36, 36, 36);
}`,
    code: `body code {
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(237, 237, 237);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(152, 195, 121);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 195, 121);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 195, 121);
  border-left-color: rgb(152, 195, 121);
  border-right-color: rgb(152, 195, 121);
  border-top-color: rgb(152, 195, 121);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body pre:has(> code) {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body figcaption {
  color: rgb(245, 245, 245);
}

body figure {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body img {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(245, 245, 245);
  border-radius: 8px;
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(245, 245, 245);
  border-radius: 8px;
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(43, 43, 43);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body .footnotes {
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .transclude {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(153, 109, 247);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(153, 109, 247);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
  text-decoration-color: rgb(128, 128, 128);
}

body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 35%;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 35%;
  border-top-right-radius: 35%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(173, 181, 189, 0.1);
  border-bottom-color: rgba(173, 181, 189, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(173, 181, 189, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(173, 181, 189, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(173, 181, 189, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(107, 219, 126, 0.1);
  border-bottom-color: rgba(107, 219, 126, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 219, 126, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(107, 219, 126, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(107, 219, 126, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
}

body .search > .search-container > .search-space > * {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(153, 109, 247);
}

body h1 {
  color: rgb(153, 109, 247);
}

body h2 {
  color: rgb(153, 109, 247);
}

body h2.page-title, h2.page-title a {
  color: rgb(245, 245, 245);
}

body h3 {
  color: rgb(153, 109, 247);
}

body h4 {
  color: rgb(153, 109, 247);
}

body h5 {
  color: rgb(153, 109, 247);
}

body h6 {
  color: rgb(153, 109, 247);
}

body hr {
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}`,
    footer: `body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-left-width: 0px;
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(230, 230, 230);
}

body footer ul li a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(245, 245, 245);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(230, 230, 230);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body li.section-li > .section .meta {
  color: rgb(230, 230, 230);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body ul.section-ul {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(43, 43, 43);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body .darkmode svg {
  color: rgb(230, 230, 230);
  stroke: rgb(230, 230, 230);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body .breadcrumb-element p {
  color: rgb(128, 128, 128);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(230, 230, 230);
  margin-bottom: 12.8px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

body .page-header h2.page-title {
  color: rgb(245, 245, 245);
}

body abbr {
  color: rgb(245, 245, 245);
  text-decoration: underline dotted rgb(245, 245, 245);
}

body details {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body input[type=text] {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body kbd {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

body progress {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body sub {
  color: rgb(245, 245, 245);
}

body summary {
  color: rgb(245, 245, 245);
}

body sup {
  color: rgb(245, 245, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 259.1;
  --accent-l: 69.9%;
  --accent-s: 89.9%;
  --background-modifier-active-hover: transparent;
  --background-modifier-border: rgb(230, 230, 230);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-form-field: rgb(230, 230, 230);
  --background-modifier-form-field-hover: rgb(230, 230, 230);
  --background-primary: rgb(252, 252, 252);
  --background-primary-alt: rgb(237, 237, 237);
  --background-secondary: rgb(245, 245, 245);
  --background-secondary-alt: rgb(245, 245, 245);
  --bases-cards-background: rgb(245, 245, 245);
  --bases-cards-cover-background: rgb(237, 237, 237);
  --bases-cards-shadow: 0 0 0 1px rgb(237, 237, 237);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(153, 110, 247);
  --bases-cards-text-size: 0.875em;
  --bases-embed-border-color: rgb(237, 237, 237);
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: rgb(51, 51, 51);
  --bases-table-border-color: rgb(237, 237, 237);
  --bases-table-cell-background-active: rgb(245, 245, 245);
  --bases-table-cell-background-disabled: transparent;
  --bases-table-cell-background-selected: rgba(153, 110, 247, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(168, 133, 249);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(168, 133, 249);
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: rgb(237, 237, 237);
  --bases-table-header-background: rgb(252, 252, 252);
  --bases-table-header-background-hover: none;
  --bases-table-header-color: rgb(51, 51, 51);
  --bases-table-header-icon-display: none;
  --bases-table-row-background-hover: rgb(245, 245, 245);
  --bases-table-summary-background: rgb(252, 252, 252);
  --bases-table-text-size: 0.875em;
  --blockquote-border-color: rgb(153, 110, 247);
  --blue-h: 207;
  --blue-l: 57%;
  --blue-s: 86%;
  --blur-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent));
  --bold-color: rgb(153, 110, 247);
  --bold-weight: 600;
  --button-radius: 8px;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
  --callout-title-weight: 600;
  --canvas-background: rgb(252, 252, 252);
  --canvas-card-label-color: rgb(153, 153, 153);
  --canvas-dot-pattern: rgb(204, 204, 204);
  --caret-color: rgb(36, 36, 36);
  --checkbox-border-color: rgb(153, 153, 153);
  --checkbox-border-color-hover: rgb(153, 110, 247);
  --checkbox-color: rgb(168, 133, 249);
  --checkbox-color-hover: rgb(182, 157, 251);
  --checkbox-marker-color: rgb(252, 252, 252);
  --checkbox-radius: 35%;
  --checklist-done-color: rgb(153, 153, 153);
  --checklist-done-decoration: none;
  --code-background: rgb(245, 245, 245);
  --code-border-color: rgb(237, 237, 237);
  --code-border-width: 1px;
  --code-comment: rgb(153, 153, 153);
  --code-function: rgb(152, 195, 121);
  --code-important: rgb(198, 120, 221);
  --code-keyword: rgb(86, 182, 194);
  --code-normal: rgb(43, 43, 43);
  --code-operator: rgb(43, 43, 43);
  --code-property: rgb(86, 182, 194);
  --code-punctuation: rgb(51, 51, 51);
  --code-radius: 8px;
  --code-string: rgb(229, 192, 123);
  --code-tag: rgb(224, 108, 117);
  --code-value: rgb(198, 120, 221);
  --collapse-icon-color: rgb(153, 153, 153);
  --collapse-icon-color-collapsed: rgb(153, 110, 247);
  --color-accent: rgb(153, 110, 247);
  --color-accent-1: rgb(168, 133, 249);
  --color-accent-2: rgb(182, 157, 251);
  --color-accent-hsl: 259.1, 89.9%, 69.9%;
  --color-base-00: rgb(252, 252, 252);
  --color-base-05: rgb(245, 245, 245);
  --color-base-10: rgb(237, 237, 237);
  --color-base-100: rgb(28, 28, 28);
  --color-base-20: rgb(230, 230, 230);
  --color-base-25: rgb(217, 217, 217);
  --color-base-30: rgb(204, 204, 204);
  --color-base-35: rgb(191, 191, 191);
  --color-base-40: rgb(179, 179, 179);
  --color-base-50: rgb(153, 153, 153);
  --color-base-60: rgb(128, 128, 128);
  --color-base-70: rgb(51, 51, 51);
  --color-base-80: rgb(43, 43, 43);
  --color-base-90: rgb(36, 36, 36);
  --components-background: rgb(230, 230, 230);
  --components-background-hover: rgb(217, 217, 217);
  --custom-icon-size: 1.2em;
  --cyan-h: 187;
  --cyan-l: 55%;
  --cyan-s: 69%;
  --divider-color: rgb(237, 237, 237);
  --divider-color-hover: rgb(168, 133, 249);
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: rgb(230, 230, 230);
  --dropdown-background-hover: rgb(217, 217, 217);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(168, 133, 249);
  --file-header-background: rgb(252, 252, 252);
  --file-header-background-focused: rgb(252, 252, 252);
  --filename-margin-bottom: 0.8rem;
  --flair-background: rgb(230, 230, 230);
  --flair-color: rgb(36, 36, 36);
  --font-weight-table-titles: 700;
  --footnote-divider-color: transparent;
  --footnote-id-color: rgb(51, 51, 51);
  --footnote-id-color-no-occurrences: rgb(153, 153, 153);
  --footnote-input-background-active: transparent;
  --graph-line: rgb(204, 204, 204);
  --graph-node: rgb(51, 51, 51);
  --graph-node-attachment: rgb(255, 213, 61);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(153, 110, 247);
  --graph-node-unresolved: rgb(153, 153, 153);
  --graph-text: rgb(36, 36, 36);
  --gray-h: 210;
  --gray-l: 71%;
  --gray-s: 11%;
  --green-h: 130;
  --green-l: 64%;
  --green-s: 61%;
  --h1-color: rgb(153, 110, 247);
  --h1-size: 1.5em;
  --h2-color: rgb(153, 110, 247);
  --h2-size: 1.4em;
  --h3-color: rgb(153, 110, 247);
  --h3-size: 1.3em;
  --h4-color: rgb(153, 110, 247);
  --h4-size: 1.2em;
  --h5-color: rgb(153, 110, 247);
  --h5-size: 1.1em;
  --h6-color: rgb(153, 110, 247);
  --h6-size: 1.0em;
  --header-padding-top: 0.3em;
  --heading-formatting: rgb(153, 153, 153);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(237, 237, 237);
  --icon-color: rgb(51, 51, 51);
  --icon-color-active: rgb(43, 43, 43);
  --icon-color-focused: rgb(36, 36, 36);
  --icon-color-hover: rgb(51, 51, 51);
  --indigo-h: 228;
  --indigo-l: 72%;
  --indigo-s: 96%;
  --inline-title-color: rgb(36, 36, 36);
  --inline-title-size: 1.5em;
  --input-date-separator: rgb(153, 153, 153);
  --input-placeholder-color: rgb(153, 153, 153);
  --input-radius: 8px;
  --interactive-accent: rgb(168, 133, 249);
  --interactive-accent-hover: rgb(182, 157, 251);
  --interactive-accent-hsl: 259.1, 89.9%, 69.9%;
  --interactive-hover: rgb(217, 217, 217);
  --interactive-normal: rgb(230, 230, 230);
  --italic-color: rgb(153, 110, 247);
  --lime-h: 82;
  --lime-l: 69%;
  --lime-s: 75%;
  --link-color: rgb(153, 110, 247);
  --link-color-hover: rgb(182, 157, 251);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(153, 110, 247);
  --link-external-color-hover: rgb(182, 157, 251);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(153, 110, 247);
  --link-unresolved-decoration-color: rgba(153, 110, 247, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: rgb(153, 153, 153);
  --list-marker-color-collapsed: rgb(153, 110, 247);
  --list-marker-color-hover: rgb(51, 51, 51);
  --menu-background: rgb(245, 245, 245);
  --menu-border-color: transparent;
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-input-background-active: transparent;
  --metadata-input-height: 28px;
  --metadata-input-text-color: rgb(36, 36, 36);
  --metadata-label-background-active: transparent;
  --metadata-label-text-color: rgb(51, 51, 51);
  --metadata-label-text-color-hover: rgb(51, 51, 51);
  --metadata-margin-bottom: 0.8rem;
  --metadata-padding: 0;
  --metadata-property-background-active: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-property-radius: 8px;
  --metadata-property-radius-focus: 8px;
  --metadata-property-radius-hover: 8px;
  --modal-background: rgb(252, 252, 252);
  --modal-border-color: rgb(237, 237, 237);
  --modal-radius: 8px;
  --nav-collapse-icon-color: rgb(153, 153, 153);
  --nav-collapse-icon-color-collapsed: rgb(153, 153, 153);
  --nav-heading-color: rgb(36, 36, 36);
  --nav-heading-color-collapsed: rgb(153, 153, 153);
  --nav-heading-color-collapsed-hover: rgb(51, 51, 51);
  --nav-heading-color-hover: rgb(36, 36, 36);
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.07);
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-background-selected: rgba(153, 110, 247, 0.15);
  --nav-item-color: rgb(51, 51, 51);
  --nav-item-color-active: rgb(51, 51, 51);
  --nav-item-color-highlighted: rgb(153, 110, 247);
  --nav-item-color-hover: rgb(51, 51, 51);
  --nav-item-color-selected: rgb(36, 36, 36);
  --nav-tag-color: rgb(153, 153, 153);
  --nav-tag-color-active: rgb(51, 51, 51);
  --nav-tag-color-hover: rgb(51, 51, 51);
  --orange-h: 31;
  --orange-l: 65%;
  --orange-s: 100%;
  --pdf-background: rgb(252, 252, 252);
  --pdf-page-background: rgb(252, 252, 252);
  --pdf-sidebar-background: rgb(252, 252, 252);
  --pill-border-color: rgb(230, 230, 230);
  --pill-border-color-hover: transparent;
  --pill-color: rgb(51, 51, 51);
  --pill-color-hover: rgb(36, 36, 36);
  --pill-color-remove: rgb(153, 153, 153);
  --pill-color-remove-hover: rgb(153, 110, 247);
  --pink-h: 339;
  --pink-l: 74%;
  --pink-s: 88%;
  --popover-height: 300px;
  --popover-width: 500px;
  --primary-blue: 207, 86%, 57%;
  --primary-cyan: 187, 69%, 55%;
  --primary-gray: 210, 11%, 71%;
  --primary-green: 130, 61%, 64%;
  --primary-indigo: 228, 96%, 72%;
  --primary-lime: 82, 75%, 69%;
  --primary-orange: 31, 100%, 65%;
  --primary-pink: 339, 88%, 74%;
  --primary-red: 0, 94%, 65%;
  --primary-sky: 206, 96%, 72%;
  --primary-violet: 259, 90%, 70%;
  --primary-white: 0, 0%, 100%;
  --primary-yellow: 47, 100%, 62%;
  --prompt-background: rgb(252, 252, 252);
  --prompt-border-color: rgb(237, 237, 237);
  --raised-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent));
  --red-h: 0;
  --red-l: 65%;
  --red-s: 94%;
  --ribbon-background: rgb(252, 252, 252);
  --ribbon-background-collapsed: rgb(252, 252, 252);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.05);
  --search-clear-button-color: rgb(51, 51, 51);
  --search-icon-color: rgb(51, 51, 51);
  --search-result-background: rgb(245, 245, 245);
  --setting-group-heading-color: rgb(36, 36, 36);
  --setting-items-background: rgb(245, 245, 245);
  --setting-items-border-color: rgb(230, 230, 230);
  --sidebar-markdown-font-size: 14.4px;
  --sky-h: 206;
  --sky-l: 72%;
  --sky-s: 96%;
  --slider-thumb-border-color: transparent;
  --slider-track-background: rgb(230, 230, 230);
  --status-bar-background: rgb(245, 245, 245);
  --status-bar-border-color: rgb(237, 237, 237);
  --status-bar-border-width: 0;
  --status-bar-position: related;
  --status-bar-radius: 0;
  --status-bar-text-color: rgb(51, 51, 51);
  --suggestion-background: rgb(252, 252, 252);
  --tab-background-active: rgb(252, 252, 252);
  --tab-container-background: rgb(252, 252, 252);
  --tab-curve: 8px;
  --tab-divider-color: transparent;
  --tab-outline-color: rgb(237, 237, 237);
  --tab-radius-active: 8px 8px 0 0;
  --tab-switcher-background: rgb(245, 245, 245);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 245, 245), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(153, 110, 247);
  --tab-text-color: rgb(153, 153, 153);
  --tab-text-color-active: rgb(51, 51, 51);
  --tab-text-color-focused: rgb(153, 153, 153);
  --tab-text-color-focused-active: rgb(153, 153, 153);
  --tab-text-color-focused-active-current: rgb(36, 36, 36);
  --tab-text-color-focused-highlighted: rgb(153, 110, 247);
  --table-add-button-border-color: rgb(230, 230, 230);
  --table-border-color: rgb(230, 230, 230);
  --table-drag-handle-background-active: rgb(168, 133, 249);
  --table-drag-handle-color: rgb(153, 153, 153);
  --table-header-background: rgb(245, 245, 245);
  --table-header-border-color: rgb(230, 230, 230);
  --table-header-color: rgb(36, 36, 36);
  --table-header-weight: 600;
  --table-selection: rgba(153, 110, 247, 0.1);
  --table-selection-border-color: rgb(168, 133, 249);
  --tag-background: rgba(153, 110, 247, 0.1);
  --tag-background-hover: rgba(153, 110, 247, 0.2);
  --tag-border-color: rgba(153, 110, 247, 0.15);
  --tag-border-color-hover: rgba(153, 110, 247, 0.15);
  --tag-color: rgb(153, 110, 247);
  --tag-color-hover: rgb(153, 110, 247);
  --text-accent: rgb(153, 110, 247);
  --text-accent-hover: rgb(182, 157, 251);
  --text-faint: rgb(153, 153, 153);
  --text-muted: rgb(51, 51, 51);
  --text-normal: rgb(36, 36, 36);
  --text-selection: rgba(153, 110, 247, 0.2);
  --titlebar-background: rgb(245, 245, 245);
  --titlebar-background-focused: rgb(245, 245, 245);
  --titlebar-border-color: rgb(230, 230, 230);
  --titlebar-text-color: rgb(51, 51, 51);
  --titlebar-text-color-focused: rgb(36, 36, 36);
  --vault-profile-color: rgb(36, 36, 36);
  --vault-profile-color-hover: rgb(36, 36, 36);
  --violet-h: 259;
  --violet-l: 70%;
  --violet-s: 90%;
  --white-h: 0;
  --white-l: 100%;
  --white-s: 0%;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --yellow-h: 47;
  --yellow-l: 62%;
  --yellow-s: 100%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(36, 36, 36);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(36, 36, 36);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(36, 36, 36);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(237, 237, 237);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(237, 237, 237);
  color: rgb(36, 36, 36);
}

body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(36, 36, 36);
}`,
    typography: `body .page article p > b, b {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .page article p > em, em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .page article p > i, i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .page article p > strong, strong {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body .text-highlight {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body del {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration: line-through rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body p {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `body a.external, footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

body a.internal.broken {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgba(153, 109, 247, 0.3);
  text-decoration-color: rgba(153, 109, 247, 0.3);
}`,
    lists: `body dd {
  color: rgb(36, 36, 36);
}

body dt {
  color: rgb(36, 36, 36);
}

body ol > li {
  color: rgb(36, 36, 36);
}

body ol.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body ul > li {
  color: rgb(36, 36, 36);
}

body ul.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    tables: `body .spacer {
  background-color: rgb(252, 252, 252);
}

body .table-container {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body table {
  color: rgb(36, 36, 36);
}

body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(36, 36, 36);
}

body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(36, 36, 36);
}

body tr {
  background-color: rgb(245, 245, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(43, 43, 43);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
}

body pre > code > [data-line] {
  border-left-color: rgb(152, 195, 121);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 195, 121);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 195, 121);
  border-left-color: rgb(152, 195, 121);
  border-right-color: rgb(152, 195, 121);
  border-top-color: rgb(152, 195, 121);
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body figcaption {
  color: rgb(36, 36, 36);
}

body figure {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body img {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(36, 36, 36);
  border-radius: 8px;
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(36, 36, 36);
  border-radius: 8px;
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .footnotes {
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

body .transclude {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(169, 134, 249);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body .transclude-inner {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(169, 134, 249);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 35%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 35%;
  border-top-right-radius: 35%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='*'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='-'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='/'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='>'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='?'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='I'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='S'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='b'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='c'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='d'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='f'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='i'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='k'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='l'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='p'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='u'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body li.task-list-item[data-task='w'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(173, 181, 189, 0.1);
  border-bottom-color: rgba(173, 181, 189, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(173, 181, 189, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(173, 181, 189, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(173, 181, 189, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(107, 219, 126, 0.1);
  border-bottom-color: rgba(107, 219, 126, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 219, 126, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(107, 219, 126, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(107, 219, 126, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > * {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(153, 109, 247);
}

body h1 {
  color: rgb(153, 109, 247);
}

body h2 {
  color: rgb(153, 109, 247);
}

body h2.page-title, h2.page-title a {
  color: rgb(36, 36, 36);
}

body h3 {
  color: rgb(153, 109, 247);
}

body h4 {
  color: rgb(153, 109, 247);
}

body h5 {
  color: rgb(153, 109, 247);
}

body h6 {
  color: rgb(153, 109, 247);
}

body hr {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-left-width: 0px;
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(51, 51, 51);
}

body footer ul li a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(36, 36, 36);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

body ul.section-ul {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(237, 237, 237);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  margin-bottom: 12.8px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

body .page-header h2.page-title {
  color: rgb(36, 36, 36);
}

body abbr {
  color: rgb(36, 36, 36);
  text-decoration: underline dotted rgb(36, 36, 36);
}

body details {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
  color: rgb(43, 43, 43);
}

body progress {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body sub {
  color: rgb(36, 36, 36);
}

body summary {
  color: rgb(36, 36, 36);
}

body sup {
  color: rgb(36, 36, 36);
}`,
  },
};
