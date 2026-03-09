import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "chime",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "archivo",
      "arima",
      "ibm-plex-sans",
      "linux-libertine",
      "icons/noto-sans-symbols-2",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #4e4560;
  --background-modifier-border-focus: rgb(98, 111, 134);
  --background-modifier-border-hover: #545e76;
  --background-modifier-error: #e17884;
  --background-modifier-error-hover: #e17884;
  --background-modifier-error-rgb: 225, 120, 132;
  --background-modifier-form-field: #55546e;
  --background-modifier-form-field-hover: #55546e;
  --background-modifier-success: #75c297;
  --background-modifier-success-rgb: 117, 194, 151;
  --background-primary: #3b3347;
  --background-primary-alt: #413b4e;
  --background-secondary: #2f2837;
  --background-secondary-alt: #2f2837;
  --bases-cards-background: #3b3347;
  --bases-cards-cover-background: #413b4e;
  --bases-cards-radius: 10px;
  --bases-cards-shadow: 0 0 0 1px #4e4560;
  --bases-cards-shadow-hover: 0 0 0 1px #545e76;
  --bases-embed-border-color: #4e4560;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #7f83a1;
  --bases-table-border-color: #4e4560;
  --bases-table-cell-background-active: #3b3347;
  --bases-table-cell-background-disabled: #413b4e;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(98, 111, 134);
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: #413b4e;
  --bases-table-header-background: #3b3347;
  --bases-table-header-color: #7f83a1;
  --bases-table-summary-background: #3b3347;
  --blockquote-background-color: #2f2837;
  --blockquote-border-thickness: 2.5px;
  --blockquote-color: #a0a7c4;
  --blur-background: color-mix(in srgb, #4e4560 65%, transparent) linear-gradient(#4e4560, color-mix(in srgb, #4e4560 65%, transparent));
  --border-radius-average: 11px;
  --callout-bug: 220, 118, 167;
  --callout-default: 136, 198, 227;
  --callout-error: 225, 120, 132;
  --callout-example: 181, 132, 199;
  --callout-fail: 225, 120, 132;
  --callout-important: 111, 210, 194;
  --callout-info: 136, 198, 227;
  --callout-question: 241, 144, 112;
  --callout-radius: 8px;
  --callout-success: 117, 194, 151;
  --callout-summary: 111, 210, 194;
  --callout-tip: 111, 210, 194;
  --callout-todo: 136, 198, 227;
  --callout-warning: 241, 144, 112;
  --canvas-background: #3b3347;
  --canvas-card-label-color: rgb(125, 127, 149);
  --canvas-color-1: 225, 120, 132;
  --canvas-color-2: 241, 144, 112;
  --canvas-color-3: 255, 168, 46;
  --canvas-color-4: 117, 194, 151;
  --canvas-color-5: 111, 210, 194;
  --canvas-color-6: 181, 132, 199;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #4e4560;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: #a0a7c4;
  --checkbox-border-color: rgb(125, 127, 149);
  --checkbox-border-color-hover: #7f83a1;
  --checkbox-marker-color: #3b3347;
  --checkbox-radius: 8px;
  --checklist-done-color: #7f83a1;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 8px;
  --code-background: #413b4e;
  --code-border-color: #4e4560;
  --code-comment: rgb(125, 127, 149);
  --code-function: #dcb46f;
  --code-important: #f19070;
  --code-keyword: #dc76a7;
  --code-normal: #a0a7c4;
  --code-operator: #e17884;
  --code-property: #6fd2c2;
  --code-punctuation: #7f83a1;
  --code-radius: 8px;
  --code-string: #75c297;
  --code-tag: #e17884;
  --code-value: #b584c7;
  --collapse-icon-color: rgb(125, 127, 149);
  --color-base-00: #3b3347;
  --color-base-05: #2f2837;
  --color-base-10: #413b4e;
  --color-base-100: #a0a7c4;
  --color-base-20: #2f2837;
  --color-base-25: #55546e;
  --color-base-30: #4e4560;
  --color-base-35: #545e76;
  --color-base-40: rgb(98, 111, 134);
  --color-base-50: rgb(125, 127, 149);
  --color-base-60: rgb(103, 129, 148);
  --color-base-70: #7f83a1;
  --color-blue: #88c6e3;
  --color-blue-rgb: 136, 198, 227;
  --color-cyan: #6fd2c2;
  --color-cyan-rgb: 111, 210, 194;
  --color-green: #75c297;
  --color-green-rgb: 117, 194, 151;
  --color-orange: #f19070;
  --color-orange-rgb: 241, 144, 112;
  --color-pink: #dc76a7;
  --color-pink-rgb: 220, 118, 167;
  --color-purple: #b584c7;
  --color-purple-rgb: 181, 132, 199;
  --color-red: #e17884;
  --color-red-rgb: 225, 120, 132;
  --color-yellow: #dcb46f;
  --color-yellow-rgb: 255, 168, 46;
  --divider-color: #4e4560;
  --divider-width: 0px;
  --dropdown-background: #4e4560;
  --dropdown-background-hover: #545e76;
  --embed-block-shadow-hover: 0 0 0 1px #4e4560, inset 0 0 0 1px #4e4560;
  --file-header-background: #3b3347;
  --file-header-background-focused: #3b3347;
  --file-header-font: '??', '??', '??', "Arima", cursive;
  --flair-background: #4e4560;
  --flair-color: #a0a7c4;
  --font-default: "Arima", cursive;
  --font-interface: '??', '??', '??', "Arima", cursive;
  --font-mermaid: '??', '??', "Arima", cursive;
  --font-text: '??', '??', "Arima", cursive;
  --footnote-divider-color: #4e4560;
  --footnote-id-color: #7f83a1;
  --footnote-id-color-no-occurrences: rgb(125, 127, 149);
  --footnote-line-height: 1.7;
  --footnote-radius: 8px;
  --graph-line: #545e76;
  --graph-node: #7f83a1;
  --graph-node-attachment: #dcb46f;
  --graph-node-tag: #75c297;
  --graph-node-unresolved: rgb(125, 127, 149);
  --graph-text: #a0a7c4;
  --h1-color: #a0a7c4;
  --h2-color: #a0a7c4;
  --h2-weight: 600;
  --h3-color: #a0a7c4;
  --h3-weight: 600;
  --h4-color: #a0a7c4;
  --h4-weight: 600;
  --h5-color: #a0a7c4;
  --h5-line-height: 1.7;
  --h5-weight: 600;
  --h6-color: #a0a7c4;
  --h6-line-height: 1.7;
  --h6-variant: small-caps;
  --heading-formatting: rgb(125, 127, 149);
  --hr-color: #4e4560;
  --icon-color: #7f83a1;
  --icon-color-focused: #a0a7c4;
  --icon-color-hover: #7f83a1;
  --inline-title-color: #a0a7c4;
  --input-date-separator: rgb(125, 127, 149);
  --input-placeholder-color: rgb(125, 127, 149);
  --interactive-hover: #545e76;
  --interactive-normal: #4e4560;
  --line-height-normal: 1.7;
  --line-style: solid;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-marker-color: rgb(125, 127, 149);
  --list-marker-color-hover: #7f83a1;
  --menu-background: #2f2837;
  --menu-border-color: #545e76;
  --menu-radius: 10px;
  --metadata-border-color: #4e4560;
  --metadata-divider-color: #4e4560;
  --metadata-input-font: '??', '??', '??', "Arima", cursive;
  --metadata-input-text-color: #a0a7c4;
  --metadata-label-font: '??', '??', '??', "Arima", cursive;
  --metadata-label-text-color: #7f83a1;
  --metadata-label-text-color-hover: #7f83a1;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(98, 111, 134);
  --metadata-property-box-shadow-hover: 0 0 0 1px #545e76;
  --modal-background: #3b3347;
  --modal-border-color: rgb(98, 111, 134);
  --modal-radius: 12px;
  --nav-collapse-icon-color: rgb(125, 127, 149);
  --nav-collapse-icon-color-collapsed: rgb(125, 127, 149);
  --nav-heading-color: #a0a7c4;
  --nav-heading-color-collapsed: rgb(125, 127, 149);
  --nav-heading-color-collapsed-hover: #7f83a1;
  --nav-heading-color-hover: #a0a7c4;
  --nav-item-color: #7f83a1;
  --nav-item-color-active: #a0a7c4;
  --nav-item-color-hover: #a0a7c4;
  --nav-item-color-selected: #a0a7c4;
  --nav-item-radius: 8px;
  --nav-tag-color: rgb(125, 127, 149);
  --nav-tag-color-active: #7f83a1;
  --nav-tag-color-hover: #7f83a1;
  --nav-tag-radius: 8px;
  --pdf-background: #3b3347;
  --pdf-page-background: #3b3347;
  --pdf-shadow: 0 0 0 1px #4e4560;
  --pdf-sidebar-background: #3b3347;
  --pdf-thumbnail-shadow: 0 0 0 1px #4e4560;
  --pill-border-color: #4e4560;
  --pill-border-color-hover: #545e76;
  --pill-color: #7f83a1;
  --pill-color-hover: #a0a7c4;
  --pill-color-remove: rgb(125, 127, 149);
  --prompt-background: #3b3347;
  --prompt-border-color: rgb(98, 111, 134);
  --prompt-width: 450px;
  --radius-l: 12px;
  --radius-m: 10px;
  --radius-s: 8px;
  --radius-xl: 14px;
  --raised-background: color-mix(in srgb, #4e4560 65%, transparent) linear-gradient(#4e4560, color-mix(in srgb, #4e4560 65%, transparent));
  --ribbon-background: #2f2837;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 12px;
  --search-clear-button-color: #7f83a1;
  --search-icon-color: #7f83a1;
  --search-result-background: #3b3347;
  --setting-group-heading-color: #a0a7c4;
  --setting-items-background: #413b4e;
  --setting-items-border-color: #4e4560;
  --setting-items-radius: 12px;
  --slider-thumb-border-color: #545e76;
  --slider-track-background: #4e4560;
  --status-bar-background: #2f2837;
  --status-bar-border-color: #4e4560;
  --status-bar-radius: 10px 0 0 0;
  --status-bar-text-color: #7f83a1;
  --suggestion-background: #3b3347;
  --sync-avatar-color-1: #e17884;
  --sync-avatar-color-2: #f19070;
  --sync-avatar-color-3: #dcb46f;
  --sync-avatar-color-4: #75c297;
  --sync-avatar-color-5: #6fd2c2;
  --sync-avatar-color-6: #88c6e3;
  --sync-avatar-color-7: #b584c7;
  --sync-avatar-color-8: #dc76a7;
  --tab-background-active: #3b3347;
  --tab-container-background: #2f2837;
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-font-size: 0.84em;
  --tab-outline-color: #4e4560;
  --tab-radius: 8px;
  --tab-radius-active: 8px;
  --tab-switcher-background: #2f2837;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2837, transparent);
  --tab-switcher-preview-radius: 14px;
  --tab-text-color: rgb(125, 127, 149);
  --tab-text-color-active: #7f83a1;
  --tab-text-color-focused: #7f83a1;
  --tab-text-color-focused-active: #7f83a1;
  --tab-text-color-focused-active-current: rgb(197, 182, 252);
  --tab-width: 240px;
  --table-add-button-border-color: #4e4560;
  --table-add-button-border-width: 0px;
  --table-border-color: #4e4560;
  --table-border-width: 0px;
  --table-column-first-border-width: 0px;
  --table-column-last-border-width: 0px;
  --table-drag-handle-color: rgb(125, 127, 149);
  --table-header-border-color: #4e4560;
  --table-header-border-width: 0px;
  --table-header-color: #a0a7c4;
  --table-row-alt-background: #2f2837;
  --table-row-last-border-width: 0px;
  --text-error: #e17884;
  --text-faint: rgb(125, 127, 149);
  --text-highlight-bg: hsl(
    258,
    88%,
    66%,
    0.3
  );
  --text-muted: #7f83a1;
  --text-normal: #a0a7c4;
  --text-success: #75c297;
  --text-warning: #f19070;
  --titlebar-background: #2f2837;
  --titlebar-background-focused: #2f2837;
  --titlebar-border-color: #4e4560;
  --titlebar-text-color: #7f83a1;
  --titlebar-text-color-focused: #a0a7c4;
  --vault-profile-color: #a0a7c4;
  --vault-profile-color-hover: #a0a7c4;
  --workspace-background: #2f2837;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 40, 55);
  color: rgb(160, 167, 196);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 167, 196);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 167, 196);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 40, 55);
  border-left-color: rgb(78, 69, 96);
  color: rgb(160, 167, 196);
}

body div#quartz-root {
  background-color: rgb(59, 51, 71);
  color: rgb(160, 167, 196);
}`,
    typography: `body .page article p > b, b {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body .page article p > em, em {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body .page article p > i, i {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body .page article p > strong, strong {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body .text-highlight {
  background-color: rgba(138, 92, 245, 0.3);
  color: rgb(255, 255, 255);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration: line-through rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body p {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
  outline: rgb(127, 131, 161) none 0px;
  text-decoration: rgb(127, 131, 161);
  text-decoration-color: rgb(127, 131, 161);
}`,
    links: `body a.external, footer a {
  font-family: "??", "??", Arima, cursive;
  text-decoration: rgb(166, 138, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Arima, cursive;
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  font-family: "??", "??", Arima, cursive;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(160, 167, 196);
}

body dt {
  color: rgb(160, 167, 196);
}

body ol > li {
  color: rgb(160, 167, 196);
}

body ol.overflow {
  background-color: rgb(59, 51, 71);
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body ul > li {
  color: rgb(160, 167, 196);
}

body ul.overflow {
  background-color: rgb(59, 51, 71);
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(125, 127, 149);
  text-decoration: rgb(125, 127, 149);
}

body blockquote {
  background-color: rgb(47, 40, 55);
  font-family: "??", "??", Arima, cursive;
  font-style: italic;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body table {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  width: 662px;
}

body tbody tr:nth-child(odd) {
  background-color: rgb(47, 40, 55);
}

body td {
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-width: 0px;
  border-left-color: rgb(78, 69, 96);
  border-left-width: 0px;
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
  border-top-color: rgb(78, 69, 96);
  border-top-width: 0px;
  color: rgb(160, 167, 196);
}

body th {
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-width: 0px;
  border-left-color: rgb(78, 69, 96);
  border-left-width: 0px;
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
  border-top-color: rgb(78, 69, 96);
  border-top-width: 0px;
  color: rgb(160, 167, 196);
}

body thead {
  border-bottom-color: rgb(197, 182, 252);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

body tr {
  border-bottom-color: rgb(197, 182, 252);
}`,
    code: `body code {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 180, 111);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 180, 111);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 180, 111);
  border-left-color: rgb(220, 180, 111);
  border-right-color: rgb(220, 180, 111);
  border-top-color: rgb(220, 180, 111);
}

body pre > code, pre:has(> code) {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body figcaption {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body figure {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body img {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 167, 196);
  border-radius: 10px;
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    embeds: `body .file-embed {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .footnotes {
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

body .transclude {
  border-bottom-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body .transclude-inner {
  border-bottom-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Arima, cursive;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arima, cursive;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(127, 131, 161);
  text-decoration: rgb(127, 131, 161);
  text-decoration-color: rgb(127, 131, 161);
}

body input[type=checkbox] {
  border-bottom-color: rgb(125, 127, 149);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 127, 149);
  border-right-color: rgb(125, 127, 149);
  border-top-color: rgb(125, 127, 149);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='*'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='-'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='/'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='>'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='?'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='I'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='S'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='b'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='c'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='d'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='f'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='i'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='k'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='l'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='p'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='u'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body li.task-list-item[data-task='w'] {
  color: rgb(160, 167, 196);
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 220, 118, 167;
  background-color: rgba(220, 118, 167, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background-color: rgba(181, 132, 199, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 225, 120, 132;
  background-color: rgba(225, 120, 132, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 117, 194, 151;
  background-color: rgba(117, 194, 151, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(85, 84, 110);
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

body .search > .search-container > .search-space {
  background-color: rgb(59, 51, 71);
  border-bottom-color: rgb(98, 111, 134);
  border-left-color: rgb(98, 111, 134);
  border-right-color: rgb(98, 111, 134);
  border-top-color: rgb(98, 111, 134);
}

body .search > .search-container > .search-space > * {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(160, 167, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(160, 167, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(160, 167, 196);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(98, 111, 134);
  border-left-color: rgb(98, 111, 134);
  border-right-color: rgb(98, 111, 134);
  border-top-color: rgb(98, 111, 134);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 40, 55);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Arima, cursive;
}

body h1 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body h2 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body h2.page-title, h2.page-title a {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body h3 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body h4 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body h5 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body h6 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

body hr {
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

body ::-webkit-scrollbar-corner {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

body ::-webkit-scrollbar-track {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
  text-decoration: rgb(127, 131, 161);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
  text-decoration: rgb(127, 131, 161);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
  text-decoration: rgb(127, 131, 161);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(127, 131, 161);
}`,
    footer: `body footer {
  background-color: rgb(47, 40, 55);
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 10px;
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

body footer ul li a {
  color: rgb(127, 131, 161);
  text-decoration: rgb(127, 131, 161);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(127, 131, 161);
  text-decoration: rgb(127, 131, 161);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body li.section-li > .section .meta {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(127, 131, 161);
  text-decoration: rgb(127, 131, 161);
}

body ul.section-ul {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(127, 131, 161);
}

body .darkmode svg {
  color: rgb(127, 131, 161);
  stroke: rgb(127, 131, 161);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(125, 127, 149);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 127, 149);
  border-right-color: rgb(125, 127, 149);
  border-top-color: rgb(125, 127, 149);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(125, 127, 149);
}

body .breadcrumb-element p {
  color: rgb(125, 127, 149);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

body .metadata {
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  color: rgb(127, 131, 161);
  font-family: "??", "??", Arima, cursive;
}

body .metadata-properties {
  border-bottom-color: rgb(127, 131, 161);
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  color: rgb(127, 131, 161);
  font-family: "??", "??", Arima, cursive;
}

body .navigation-progress {
  background-color: rgb(47, 40, 55);
}

body .page-header h2.page-title {
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

body abbr {
  color: rgb(160, 167, 196);
  text-decoration: underline dotted rgb(160, 167, 196);
}

body details {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body input[type=text] {
  border-bottom-color: rgb(127, 131, 161);
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

body kbd {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

body progress {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

body sub {
  color: rgb(160, 167, 196);
}

body summary {
  color: rgb(160, 167, 196);
}

body sup {
  color: rgb(160, 167, 196);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 323;
  --accent-l: 65%;
  --accent-s: 30%;
  --background-modifier-active-hover: rgba(193, 139, 172, 0.1);
  --background-modifier-border: #cec2c577;
  --background-modifier-border-focus: #b6a4b2;
  --background-modifier-border-hover: #b5a7ac;
  --background-modifier-error: #e17884;
  --background-modifier-error-hover: #e17884;
  --background-modifier-error-rgb: 225, 120, 132;
  --background-modifier-form-field: #f8f3f2;
  --background-modifier-form-field-hover: #f8f3f2;
  --background-modifier-success: #75c297;
  --background-modifier-success-rgb: 117, 194, 151;
  --background-primary: #f8f3f2;
  --background-primary-alt: #f0e9e4;
  --background-secondary: #f4ebeb;
  --background-secondary-alt: #faf3f1;
  --bases-cards-background: #f8f3f2;
  --bases-cards-cover-background: #f0e9e4;
  --bases-cards-radius: 10px;
  --bases-cards-shadow: 0 0 0 1px #cec2c577;
  --bases-cards-shadow-hover: 0 0 0 1px #b5a7ac;
  --bases-embed-border-color: #cec2c577;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #685a68;
  --bases-table-border-color: #cec2c577;
  --bases-table-cell-background-active: #f8f3f2;
  --bases-table-cell-background-disabled: #f0e9e4;
  --bases-table-cell-background-selected: rgba(193, 139, 172, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #b6a4b2;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(201, 156, 185);
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: #f0e9e4;
  --bases-table-header-background: #f8f3f2;
  --bases-table-header-color: #685a68;
  --bases-table-summary-background: #f8f3f2;
  --blockquote-background-color: #faf3f1;
  --blockquote-border-color: rgb(201, 156, 185);
  --blockquote-border-thickness: 2.5px;
  --blockquote-color: #594f67;
  --blur-background: color-mix(in srgb, #f8f3f2 65%, transparent) linear-gradient(#f8f3f2, color-mix(in srgb, #f8f3f2 65%, transparent));
  --border-radius-average: 11px;
  --callout-bug: 220, 118, 167;
  --callout-default: 136, 198, 227;
  --callout-error: 225, 120, 132;
  --callout-example: 181, 132, 199;
  --callout-fail: 225, 120, 132;
  --callout-important: 111, 210, 194;
  --callout-info: 136, 198, 227;
  --callout-question: 241, 144, 112;
  --callout-radius: 8px;
  --callout-success: 117, 194, 151;
  --callout-summary: 111, 210, 194;
  --callout-tip: 111, 210, 194;
  --callout-todo: 136, 198, 227;
  --callout-warning: 241, 144, 112;
  --canvas-background: #f8f3f2;
  --canvas-card-label-color: #a391a3;
  --canvas-color-1: 225, 120, 132;
  --canvas-color-2: 241, 144, 112;
  --canvas-color-3: 255, 168, 46;
  --canvas-color-4: 117, 194, 151;
  --canvas-color-5: 111, 210, 194;
  --canvas-color-6: 181, 132, 199;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #cec2c577;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: #594f67;
  --checkbox-border-color: #a391a3;
  --checkbox-border-color-hover: #685a68;
  --checkbox-color: rgb(201, 156, 185);
  --checkbox-color-hover: rgb(211, 171, 198);
  --checkbox-marker-color: #f8f3f2;
  --checkbox-radius: 8px;
  --checklist-done-color: #685a68;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 8px;
  --code-background: #f0e9e4;
  --code-border-color: #cec2c577;
  --code-comment: #a391a3;
  --code-function: #dcb46f;
  --code-important: #f19070;
  --code-keyword: #dc76a7;
  --code-normal: #594f67;
  --code-operator: #e17884;
  --code-property: #6fd2c2;
  --code-punctuation: #685a68;
  --code-radius: 8px;
  --code-string: #75c297;
  --code-tag: #e17884;
  --code-value: #b584c7;
  --collapse-icon-color: #a391a3;
  --collapse-icon-color-collapsed: rgb(193, 139, 172);
  --color-accent: rgb(193, 139, 172);
  --color-accent-1: rgb(201, 156, 185);
  --color-accent-2: rgb(211, 171, 198);
  --color-accent-hsl: 323, 30%, 65%;
  --color-base-00: #f8f3f2;
  --color-base-05: #faf3f1;
  --color-base-10: #f0e9e4;
  --color-base-100: #594f67;
  --color-base-20: #f4ebeb;
  --color-base-25: #d9c9ca;
  --color-base-30: #cec2c577;
  --color-base-35: #b5a7ac;
  --color-base-40: #b6a4b2;
  --color-base-50: #a391a3;
  --color-base-60: #867786;
  --color-base-70: #685a68;
  --color-blue: #88c6e3;
  --color-blue-rgb: 136, 198, 227;
  --color-cyan: #6fd2c2;
  --color-cyan-rgb: 111, 210, 194;
  --color-green: #75c297;
  --color-green-rgb: 117, 194, 151;
  --color-orange: #f19070;
  --color-orange-rgb: 241, 144, 112;
  --color-pink: #dc76a7;
  --color-pink-rgb: 220, 118, 167;
  --color-purple: #b584c7;
  --color-purple-rgb: 181, 132, 199;
  --color-red: #e17884;
  --color-red-rgb: 225, 120, 132;
  --color-yellow: #dcb46f;
  --color-yellow-rgb: 255, 168, 46;
  --divider-color: #cec2c577;
  --divider-color-hover: rgb(201, 156, 185);
  --divider-width: 0px;
  --dropdown-background: #f8f3f2;
  --dropdown-background-hover: #f0e9e4;
  --embed-block-shadow-hover: 0 0 0 1px #cec2c577, inset 0 0 0 1px #cec2c577;
  --embed-border-start: 2px solid rgb(201, 156, 185);
  --file-header-background: #f8f3f2;
  --file-header-background-focused: #f8f3f2;
  --file-header-font: '??', '??', '??', "Arima", cursive;
  --flair-background: #f8f3f2;
  --flair-color: #594f67;
  --font-default: "Arima", cursive;
  --font-interface: '??', '??', '??', "Arima", cursive;
  --font-mermaid: '??', '??', "Arima", cursive;
  --font-text: '??', '??', "Arima", cursive;
  --footnote-divider-color: #cec2c577;
  --footnote-id-color: #685a68;
  --footnote-id-color-no-occurrences: #a391a3;
  --footnote-line-height: 1.7;
  --footnote-radius: 8px;
  --graph-line: #b5a7ac;
  --graph-node: #685a68;
  --graph-node-attachment: #dcb46f;
  --graph-node-focused: rgb(193, 139, 172);
  --graph-node-tag: #75c297;
  --graph-node-unresolved: #a391a3;
  --graph-text: #594f67;
  --h1-color: #594f67;
  --h2-color: #594f67;
  --h2-weight: 600;
  --h3-color: #594f67;
  --h3-weight: 600;
  --h4-color: #594f67;
  --h4-weight: 600;
  --h5-color: #594f67;
  --h5-line-height: 1.7;
  --h5-weight: 600;
  --h6-color: #594f67;
  --h6-line-height: 1.7;
  --h6-variant: small-caps;
  --heading-formatting: #a391a3;
  --hr-color: #cec2c577;
  --icon-color: #685a68;
  --icon-color-active: rgb(193, 139, 172);
  --icon-color-focused: #594f67;
  --icon-color-hover: #685a68;
  --inline-title-color: #594f67;
  --input-date-separator: #a391a3;
  --input-placeholder-color: #a391a3;
  --interactive-accent: rgb(201, 156, 185);
  --interactive-accent-hover: rgb(211, 171, 198);
  --interactive-accent-hsl: 323, 30%, 65%;
  --interactive-hover: #f0e9e4;
  --interactive-normal: #f8f3f2;
  --line-height-normal: 1.7;
  --line-style: solid;
  --link-color: rgb(193, 139, 172);
  --link-color-hover: rgb(211, 171, 198);
  --link-decoration: none;
  --link-external-color: rgb(193, 139, 172);
  --link-external-color-hover: rgb(211, 171, 198);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(193, 139, 172);
  --link-unresolved-decoration-color: rgba(193, 139, 172, 0.3);
  --list-marker-color: #a391a3;
  --list-marker-color-collapsed: rgb(193, 139, 172);
  --list-marker-color-hover: #685a68;
  --menu-background: #f4ebeb;
  --menu-border-color: #b5a7ac;
  --menu-radius: 10px;
  --metadata-border-color: #cec2c577;
  --metadata-divider-color: #cec2c577;
  --metadata-input-font: '??', '??', '??', "Arima", cursive;
  --metadata-input-text-color: #594f67;
  --metadata-label-font: '??', '??', '??', "Arima", cursive;
  --metadata-label-text-color: #685a68;
  --metadata-label-text-color-hover: #685a68;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b6a4b2;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b5a7ac;
  --modal-background: #f8f3f2;
  --modal-border-color: #b6a4b2;
  --modal-radius: 12px;
  --nav-collapse-icon-color: #a391a3;
  --nav-collapse-icon-color-collapsed: #a391a3;
  --nav-heading-color: #594f67;
  --nav-heading-color-collapsed: #a391a3;
  --nav-heading-color-collapsed-hover: #685a68;
  --nav-heading-color-hover: #594f67;
  --nav-item-background-selected: rgba(193, 139, 172, 0.15);
  --nav-item-color: #685a68;
  --nav-item-color-active: #594f67;
  --nav-item-color-highlighted: rgb(193, 139, 172);
  --nav-item-color-hover: #594f67;
  --nav-item-color-selected: #594f67;
  --nav-item-radius: 8px;
  --nav-tag-color: #a391a3;
  --nav-tag-color-active: #685a68;
  --nav-tag-color-hover: #685a68;
  --nav-tag-radius: 8px;
  --pdf-background: #f8f3f2;
  --pdf-page-background: #f8f3f2;
  --pdf-sidebar-background: #f8f3f2;
  --pill-border-color: #cec2c577;
  --pill-border-color-hover: #b5a7ac;
  --pill-color: #685a68;
  --pill-color-hover: #594f67;
  --pill-color-remove: #a391a3;
  --pill-color-remove-hover: rgb(193, 139, 172);
  --prompt-background: #f8f3f2;
  --prompt-border-color: #b6a4b2;
  --prompt-width: 450px;
  --radius-l: 12px;
  --radius-m: 10px;
  --radius-s: 8px;
  --radius-xl: 14px;
  --raised-background: color-mix(in srgb, #f8f3f2 65%, transparent) linear-gradient(#f8f3f2, color-mix(in srgb, #f8f3f2 65%, transparent));
  --ribbon-background: #f4ebeb;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 12px;
  --search-clear-button-color: #685a68;
  --search-icon-color: #685a68;
  --search-result-background: #f8f3f2;
  --setting-group-heading-color: #594f67;
  --setting-items-background: #f0e9e4;
  --setting-items-border-color: #cec2c577;
  --setting-items-radius: 12px;
  --slider-thumb-border-color: #b5a7ac;
  --slider-track-background: #cec2c577;
  --status-bar-background: #f4ebeb;
  --status-bar-border-color: #cec2c577;
  --status-bar-radius: 10px 0 0 0;
  --status-bar-text-color: #685a68;
  --suggestion-background: #f8f3f2;
  --sync-avatar-color-1: #e17884;
  --sync-avatar-color-2: #f19070;
  --sync-avatar-color-3: #dcb46f;
  --sync-avatar-color-4: #75c297;
  --sync-avatar-color-5: #6fd2c2;
  --sync-avatar-color-6: #88c6e3;
  --sync-avatar-color-7: #b584c7;
  --sync-avatar-color-8: #dc76a7;
  --tab-background-active: #f8f3f2;
  --tab-container-background: #f4ebeb;
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-font-size: 0.84em;
  --tab-outline-color: #cec2c577;
  --tab-radius: 8px;
  --tab-radius-active: 8px;
  --tab-switcher-background: #f4ebeb;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4ebeb, transparent);
  --tab-switcher-preview-radius: 14px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(193, 139, 172);
  --tab-text-color: #a391a3;
  --tab-text-color-active: #685a68;
  --tab-text-color-focused: #685a68;
  --tab-text-color-focused-active: #685a68;
  --tab-text-color-focused-active-current: rgb(211, 171, 198);
  --tab-text-color-focused-highlighted: rgb(193, 139, 172);
  --tab-width: 240px;
  --table-add-button-border-color: #cec2c577;
  --table-add-button-border-width: 0px;
  --table-border-color: #cec2c577;
  --table-border-width: 0px;
  --table-column-first-border-width: 0px;
  --table-column-last-border-width: 0px;
  --table-drag-handle-background-active: rgb(201, 156, 185);
  --table-drag-handle-color: #a391a3;
  --table-header-border-color: #cec2c577;
  --table-header-border-width: 0px;
  --table-header-color: #594f67;
  --table-row-alt-background: #faf3f1;
  --table-row-last-border-width: 0px;
  --table-selection: rgba(193, 139, 172, 0.1);
  --table-selection-border-color: rgb(201, 156, 185);
  --tag-background: rgba(193, 139, 172, 0.1);
  --tag-background-hover: rgba(193, 139, 172, 0.2);
  --tag-border-color: rgba(193, 139, 172, 0.15);
  --tag-border-color-hover: rgba(193, 139, 172, 0.15);
  --tag-color: rgb(193, 139, 172);
  --tag-color-hover: rgb(193, 139, 172);
  --text-accent: rgb(193, 139, 172);
  --text-accent-hover: rgb(211, 171, 198);
  --text-error: #e17884;
  --text-faint: #a391a3;
  --text-highlight-bg: hsl(
    323,
    30%,
    65%,
    0.2
  );
  --text-muted: #685a68;
  --text-normal: #594f67;
  --text-selection: rgba(193, 139, 172, 0.2);
  --text-success: #75c297;
  --text-warning: #f19070;
  --titlebar-background: #f4ebeb;
  --titlebar-background-focused: #faf3f1;
  --titlebar-border-color: #cec2c577;
  --titlebar-text-color: #685a68;
  --titlebar-text-color-focused: #594f67;
  --vault-profile-color: #594f67;
  --vault-profile-color-hover: #594f67;
  --workspace-background: #f4ebeb;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 235, 235);
  color: rgb(89, 79, 103);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(89, 79, 103);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(89, 79, 103);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 235, 235);
  border-left-color: rgba(206, 194, 197, 0.467);
  color: rgb(89, 79, 103);
}

body div#quartz-root {
  background-color: rgb(248, 243, 242);
  color: rgb(89, 79, 103);
}`,
    typography: `body .page article p > b, b {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body .page article p > em, em {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body .page article p > i, i {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body .page article p > strong, strong {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body .text-highlight {
  background-color: rgba(193, 139, 172, 0.2);
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body del {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration: line-through rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body p {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
  outline: rgb(104, 90, 104) none 0px;
  text-decoration: rgb(104, 90, 104);
  text-decoration-color: rgb(104, 90, 104);
}`,
    links: `body a.external, footer a {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration: rgb(193, 139, 172);
  text-decoration-color: rgb(193, 139, 172);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration: rgb(193, 139, 172);
  text-decoration-color: rgb(193, 139, 172);
}

body a.internal.broken {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration: rgba(193, 139, 172, 0.3);
  text-decoration-color: rgba(193, 139, 172, 0.3);
}`,
    lists: `body dd {
  color: rgb(89, 79, 103);
}

body dt {
  color: rgb(89, 79, 103);
}

body ol > li {
  color: rgb(89, 79, 103);
}

body ol.overflow {
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body ul > li {
  color: rgb(89, 79, 103);
}

body ul.overflow {
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(163, 145, 163);
  text-decoration: rgb(163, 145, 163);
}

body blockquote {
  background-color: rgb(250, 243, 241);
  font-family: "??", "??", Arima, cursive;
  font-style: italic;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body table {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  width: 662px;
}

body tbody tr:nth-child(odd) {
  background-color: rgb(250, 243, 241);
}

body td {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-width: 0px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-left-width: 0px;
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-width: 0px;
  color: rgb(89, 79, 103);
}

body th {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-width: 0px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-left-width: 0px;
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-width: 0px;
  color: rgb(89, 79, 103);
}

body thead {
  border-bottom-color: rgb(210, 171, 197);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

body tr {
  border-bottom-color: rgb(210, 171, 197);
}`,
    code: `body code {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 180, 111);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 180, 111);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 180, 111);
  border-left-color: rgb(220, 180, 111);
  border-right-color: rgb(220, 180, 111);
  border-top-color: rgb(220, 180, 111);
}

body pre > code, pre:has(> code) {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body figcaption {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body figure {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body img {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(89, 79, 103);
  border-radius: 10px;
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .footnotes {
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

body .transclude {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(201, 155, 184);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body .transclude-inner {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(201, 155, 184);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Arima, cursive;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arima, cursive;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(104, 90, 104);
  text-decoration: rgb(104, 90, 104);
  text-decoration-color: rgb(104, 90, 104);
}

body input[type=checkbox] {
  border-bottom-color: rgb(163, 145, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 145, 163);
  border-right-color: rgb(163, 145, 163);
  border-top-color: rgb(163, 145, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='*'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='-'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='/'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='>'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='?'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='I'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='S'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='b'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='c'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='d'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='f'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='i'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='k'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='l'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='p'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='u'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body li.task-list-item[data-task='w'] {
  color: rgb(89, 79, 103);
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 220, 118, 167;
  background-color: rgba(220, 118, 167, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background-color: rgba(181, 132, 199, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 225, 120, 132;
  background-color: rgba(225, 120, 132, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 117, 194, 151;
  background-color: rgba(117, 194, 151, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgb(182, 164, 178);
  border-left-color: rgb(182, 164, 178);
  border-right-color: rgb(182, 164, 178);
  border-top-color: rgb(182, 164, 178);
}

body .search > .search-container > .search-space > * {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 79, 103);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(89, 79, 103);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(89, 79, 103);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(182, 164, 178);
  border-left-color: rgb(182, 164, 178);
  border-right-color: rgb(182, 164, 178);
  border-top-color: rgb(182, 164, 178);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 235, 235);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(193, 139, 172, 0.1);
  border-bottom-color: rgba(193, 139, 172, 0.15);
  border-left-color: rgba(193, 139, 172, 0.15);
  border-right-color: rgba(193, 139, 172, 0.15);
  border-top-color: rgba(193, 139, 172, 0.15);
  font-family: "??", "??", "??", Arima, cursive;
}

body a.internal.tag-link::before {
  color: rgb(193, 139, 172);
}

body h1 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body h2 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body h2.page-title, h2.page-title a {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body h3 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body h4 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body h5 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body h6 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

body hr {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
  text-decoration: rgb(104, 90, 104);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
  text-decoration: rgb(104, 90, 104);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
  text-decoration: rgb(104, 90, 104);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(104, 90, 104);
}`,
    footer: `body footer {
  background-color: rgb(244, 235, 235);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 10px;
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

body footer ul li a {
  color: rgb(104, 90, 104);
  text-decoration: rgb(104, 90, 104);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(104, 90, 104);
  text-decoration: rgb(104, 90, 104);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body li.section-li > .section .meta {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(104, 90, 104);
  text-decoration: rgb(104, 90, 104);
}

body ul.section-ul {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(104, 90, 104);
}

body .darkmode svg {
  color: rgb(104, 90, 104);
  stroke: rgb(104, 90, 104);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(163, 145, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 145, 163);
  border-right-color: rgb(163, 145, 163);
  border-top-color: rgb(163, 145, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(163, 145, 163);
}

body .breadcrumb-element p {
  color: rgb(163, 145, 163);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

body .metadata {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  color: rgb(104, 90, 104);
  font-family: "??", "??", Arima, cursive;
}

body .metadata-properties {
  border-bottom-color: rgb(104, 90, 104);
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  color: rgb(104, 90, 104);
  font-family: "??", "??", Arima, cursive;
}

body .navigation-progress {
  background-color: rgb(244, 235, 235);
}

body .page-header h2.page-title {
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

body abbr {
  color: rgb(89, 79, 103);
  text-decoration: underline dotted rgb(89, 79, 103);
}

body details {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body input[type=text] {
  border-bottom-color: rgb(104, 90, 104);
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

body kbd {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

body progress {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

body sub {
  color: rgb(89, 79, 103);
}

body summary {
  color: rgb(89, 79, 103);
}

body sup {
  color: rgb(89, 79, 103);
}`,
  },
};
