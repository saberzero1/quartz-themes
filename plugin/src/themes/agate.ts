import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "agate",
    modes: ["light"],
    variations: [],
    fonts: ["noto-serif","pretendard","noto-sans-kr","itc-slimbach"],
  },
  dark: {
  },
  light: {
    base: `:root:root {
  --accent-color: 55, 0, 255;
  --background-modifier-border: rgba(20, 19, 19, 0.172);
  --background-modifier-border-focus: #d5d0d034;
  --background-modifier-border-hover: #d5d0d034;
  --background-modifier-form-field: #f7f7f730;
  --background-modifier-form-field-hover: #f7f7f730;
  --background-primary: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --background-primary-alt: #f7f7f7c1;
  --background-secondary: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --background-secondary-alt: #d5d0d034;
  --bases-cards-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --bases-cards-cover-background: #f7f7f7c1;
  --bases-cards-shadow: 0 0 0 1px rgba(20, 19, 19, 0.172);
  --bases-cards-shadow-hover: 0 0 0 1px #d5d0d034;
  --bases-embed-border-color: rgba(20, 19, 19, 0.172);
  --bases-embed-border-radius: 2px;
  --bases-table-border-color: rgba(20, 19, 19, 0.172);
  --bases-table-cell-background-active: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --bases-table-cell-background-disabled: #f7f7f7c1;
  --bases-table-cell-shadow-active: 0 0 0 2px #d5d0d034;
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: #f7f7f7c1;
  --bases-table-header-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --bases-table-summary-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --bg-color: rgba(170, 170, 170, 0);
  --blockquote-border-color: rgba(55, 0, 255, 0.6);
  --blockquote-border-thickness: 3px;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent) linear-gradient(linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)), color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --button-radius: 2px;
  --callout-blend-mode: multiply;
  --callout-border-opacity: 100%;
  --callout-border-width: 1px;
  --callout-padding: 15px 20px;
  --callout-radius: 20px;
  --callout-title-weight: 900;
  --canvas-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --canvas-card-label-color: rgb(20, 20, 20);
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: rgba(20, 19, 19, 0.172);
  --caret-color: rgb(20, 20, 20);
  --checkbox-border-color: rgb(20, 20, 20);
  --checkbox-color: rgba(152, 151, 151, 0.766);
  --checkbox-marker-color: rgb(101, 101, 101);
  --checkbox-radius: 0px;
  --clickable-icon-radius: 2px;
  --code-background: #f7f7f7c1;
  --code-border-color: rgba(20, 19, 19, 0.172);
  --code-comment: #5b6a6a;
  --code-function: #b500e7;
  --code-important: #d64609;
  --code-keyword: #098800;
  --code-normal: #333d40;
  --code-operator: #c45b00;
  --code-property: #333d40;
  --code-punctuation: #00b4f0;
  --code-radius: 2px;
  --code-string: #b58900;
  --code-tag: #dc322f;
  --code-value: rgb(55, 0, 255);
  --collapse-icon-color: rgb(20, 20, 20);
  --color-base-00: #f7f7f730;
  --color-base-05: #d5d0d034;
  --color-base-10: #f7f7f7c1;
  --color-base-100: rgb(20, 20, 20);
  --color-base-20: #d5d0d034;
  --color-base-25: #d5d0d034;
  --color-base-30: rgba(20, 19, 19, 0.172);
  --color-base-35: #d5d0d034;
  --color-base-40: #d5d0d034;
  --color-base-50: rgb(20, 20, 20);
  --color-base-60: #d5d0d034;
  --divider-color: rgba(20, 19, 19, 0.172);
  --dropdown-background: #f7f7f730;
  --dropdown-background-hover: #f7f7f7c1;
  --embed-block-shadow-hover: 0 0 0 1px rgba(20, 19, 19, 0.172), inset 0 0 0 1px rgba(20, 19, 19, 0.172);
  --file-folding-offset: 300px;
  --file-header-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --file-header-background-focused: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --file-header-border: 1px solid rgba(20, 20, 20, 0.2);
  --file-header-font: '??', 'Pretendard-Regular', serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 630px;
  --file-margins: 30px 10px;
  --flair-background: #f7f7f730;
  --flair-color: rgb(20, 20, 20);
  --font-interface: '??', 'Pretendard-Regular', serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'Pretendard-Regular', serif;
  --font-mermaid: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Noto Serif KR', serif, 'Arial';
  --font-text: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Noto Serif KR', serif;
  --footnote-divider-color: rgba(20, 19, 19, 0.172);
  --footnote-id-color-no-occurrences: rgb(20, 20, 20);
  --footnote-line-height: 2em;
  --footnote-radius: 2px;
  --graph-line: rgba(20, 20, 20, 0.2);
  --graph-node-unresolved: rgb(20, 20, 20);
  --graph-text: rgb(20, 20, 20);
  --h1-font: 'Pretendard-Bold';
  --h1-size: 2em;
  --h2-font: 'Pretendard-Bold';
  --h2-size: 1.8em;
  --h2-weight: 700;
  --h3-font: 'Pretendard-Bold';
  --h3-size: 1.4em;
  --h3-weight: 700;
  --h4-font: 'Pretendard-Bold';
  --h4-size: 1.2em;
  --h4-weight: 700;
  --h5-font: 'Pretendard-Bold';
  --h5-line-height: 2em;
  --h5-size: 1.1em;
  --h5-weight: 700;
  --h6-font: 'Pretendard-Bold';
  --h6-line-height: 2em;
  --h6-weight: 700;
  --heading-formatting: rgb(20, 20, 20);
  --hr-color: rgba(20, 20, 20, 0.2);
  --hr-thickness: 1px;
  --icon-color-focused: rgb(20, 20, 20);
  --inline-title-color: rgb(20, 20, 20);
  --inline-title-font: "ITC Slimbach Std", 'Noto Serif KR';
  --inline-title-line-height: 1.2em;
  --inline-title-size: 3.5em;
  --input-date-separator: rgb(20, 20, 20);
  --input-placeholder-color: rgb(20, 20, 20);
  --input-radius: 0px;
  --interactive-hover: #f7f7f7c1;
  --interactive-normal: #f7f7f730;
  --light-alpha-color: 0;
  --light-color: 170, 170, 170;
  --line-color: rgba(20, 20, 20, 0.2);
  --line-height-normal: 2em;
  --link-color: rgb(55, 0, 255);
  --link-external-color: rgb(55, 0, 255);
  --link-unresolved-color: rgb(55, 0, 255);
  --link-unresolved-decoration-color: rgb(55, 0, 255);
  --list-indent: 2em;
  --list-indent-editing: 2em;
  --list-indent-source: 2em;
  --list-marker-color: rgb(20, 20, 20);
  --list-marker-color-collapsed: rgb(20, 20, 20);
  --list-marker-color-hover: rgb(20, 20, 20);
  --list-spacing: 0px;
  --menu-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --menu-border-color: #d5d0d034;
  --metadata-background: rgba(20, 20, 20, 0.05);
  --metadata-border-color: rgba(20, 19, 19, 0.172);
  --metadata-border-radius: 10px;
  --metadata-divider-color: rgba(20, 19, 19, 0.172);
  --metadata-gap: 0px;
  --metadata-input-font: '??', 'Pretendard-Regular', serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(20, 20, 20);
  --metadata-label-font: '??', 'Pretendard-Regular', serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-max-width: 100%;
  --metadata-padding: 5px 20px;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d5d0d034;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d5d0d034;
  --modal-background: rgb(170, 170, 170);
  --modal-border-color: #d5d0d034;
  --modal-color: rgb(170, 170, 170);
  --nav-collapse-icon-color: rgb(20, 20, 20);
  --nav-collapse-icon-color-collapsed: rgb(20, 20, 20);
  --nav-heading-color: rgb(20, 20, 20);
  --nav-heading-color-collapsed: rgb(20, 20, 20);
  --nav-heading-color-hover: rgb(20, 20, 20);
  --nav-item-color-active: rgb(20, 20, 20);
  --nav-item-color-hover: rgb(20, 20, 20);
  --nav-item-color-selected: rgb(20, 20, 20);
  --nav-item-radius: 2px;
  --nav-tag-color: rgb(20, 20, 20);
  --nav-tag-radius: 2px;
  --pdf-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --pdf-page-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --pdf-sidebar-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --pill-border-color: rgba(20, 19, 19, 0.172);
  --pill-border-color-hover: #d5d0d034;
  --pill-color-hover: rgb(20, 20, 20);
  --pill-color-remove: rgb(20, 20, 20);
  --popover-font-size: 0.9em;
  --popover-height: 300px;
  --prompt-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --prompt-border-color: #d5d0d034;
  --radius-s: 2px;
  --raised-background: color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent) linear-gradient(linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)), color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent));
  --ribbon-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --ribbon-background-collapsed: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --search-result-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --setting-group-heading-color: rgb(20, 20, 20);
  --setting-items-background: #f7f7f7c1;
  --setting-items-border-color: rgba(20, 19, 19, 0.172);
  --slider-thumb-border-color: #d5d0d034;
  --slider-thumb-radius: 0px;
  --slider-track-background: rgba(20, 19, 19, 0.172);
  --status-bar-background: rgb(170, 170, 170);
  --status-bar-border-color: rgba(20, 20, 20, 0.2);
  --status-bar-border-width: 1px;
  --status-bar-radius: 2px;
  --suggestion-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --tab-background-active: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --tab-container-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --tab-divider-color: #d5d0d034;
  --tab-outline-color: rgba(20, 19, 19, 0.172);
  --tab-radius: 2px;
  --tab-radius-active: 0px;
  --tab-switcher-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --tab-switcher-menubar-background: linear-gradient(to top, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)), transparent);
  --tab-text-color: rgb(20, 20, 20);
  --tab-text-color-focused-active-current: rgb(20, 20, 20);
  --table-add-button-border-color: rgba(20, 19, 19, 0.172);
  --table-border-color: rgba(20, 19, 19, 0.172);
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-color: rgb(20, 20, 20);
  --table-header-border-color: rgba(20, 19, 19, 0.172);
  --table-header-border-width: 0;
  --table-header-color: rgb(20, 20, 20);
  --table-header-weight: 900;
  --table-last-border-width: 0;
  --table-row-last-border-width: 0;
  --tag-background: rgba(55, 0, 255, 0.2);
  --tag-color: rgb(55, 0, 255);
  --text-faint: rgb(20, 20, 20);
  --text-highlight-bg: rgba(55, 0, 255, 0.2);
  --text-normal: rgb(20, 20, 20);
  --text-selection: rgba(55, 0, 255, 0.2);
  --titlebar-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --titlebar-background-focused: #d5d0d034;
  --titlebar-border-color: rgba(20, 19, 19, 0.172);
  --titlebar-text-color-focused: rgb(20, 20, 20);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: rgb(20, 20, 20);
  --vault-profile-color-hover: rgb(20, 20, 20);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(20, 19, 19, 0.173);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(20, 19, 19, 0.173);
  color: rgb(20, 20, 20);
}

body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}`,
    typography: `body .page article p > b, b {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body .page article p > em, em {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body .page article p > i, i {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body .page article p > strong, strong {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body .text-highlight {
  background-color: rgba(55, 0, 255, 0.2);
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body del {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: line-through 1px rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
  text-decoration-thickness: 1px;
}

body p {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(55, 0, 255);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px rgb(55, 0, 255);
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(55, 0, 255);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px rgb(55, 0, 255);
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(55, 0, 255);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px rgb(55, 0, 255);
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgb(20, 20, 20);
}

body dt {
  color: rgb(20, 20, 20);
}

body ol > li {
  color: rgb(20, 20, 20);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body ul > li {
  color: rgb(20, 20, 20);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
}

body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body table {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 178.766px;
}

body td {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-left-width: 0px;
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  color: rgb(20, 20, 20);
}

body th {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-left-width: 0px;
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-width: 0px;
  color: rgb(20, 20, 20);
  font-weight: 900;
}`,
    code: `body code {
  border-bottom-color: rgb(51, 61, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 61, 64);
  border-right-color: rgb(51, 61, 64);
  border-top-color: rgb(51, 61, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(51, 61, 64);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(247, 247, 247, 0.757);
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(247, 247, 247, 0.757);
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(20, 20, 20);
}

body pre > code > [data-line] {
  border-left-color: rgb(181, 0, 231);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(181, 0, 231);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(181, 0, 231);
  border-left-color: rgb(181, 0, 231);
  border-right-color: rgb(181, 0, 231);
  border-top-color: rgb(181, 0, 231);
}

body pre > code, pre:has(> code) {
  background-color: rgba(247, 247, 247, 0.757);
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgba(247, 247, 247, 0.757);
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body figcaption {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body img {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body video {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    embeds: `body .file-embed {
  background-color: rgba(247, 247, 247, 0.757);
}

body .footnotes {
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

body .transclude {
  border-bottom-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body .transclude-inner {
  border-bottom-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='*'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='-'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='/'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='>'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='?'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='I'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='S'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='b'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='c'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='d'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='f'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='i'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='k'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='l'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='p'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='u'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='w'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 142, 123;
  background-color: rgba(0, 142, 123, 0.1);
  border-bottom-color: rgb(0, 142, 123);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 142, 123);
  border-left-width: 1px;
  border-right-color: rgb(0, 142, 123);
  border-right-width: 1px;
  border-top-color: rgb(0, 142, 123);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 149, 0, 0;
  background-color: rgba(149, 0, 0, 0.1);
  border-bottom-color: rgb(149, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 0, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 149, 0, 0;
  background-color: rgba(149, 0, 0, 0.1);
  border-bottom-color: rgb(149, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 0, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(120, 82, 238);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(120, 82, 238);
  border-left-width: 1px;
  border-right-color: rgb(120, 82, 238);
  border-right-width: 1px;
  border-top-color: rgb(120, 82, 238);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 149, 0, 0;
  background-color: rgba(149, 0, 0, 0.1);
  border-bottom-color: rgb(149, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 0, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 55, 0, 255;
  background-color: rgba(55, 0, 255, 0.1);
  border-bottom-color: rgb(55, 0, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(55, 0, 255);
  border-left-width: 1px;
  border-right-color: rgb(55, 0, 255);
  border-right-width: 1px;
  border-top-color: rgb(55, 0, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 149, 92, 0;
  background-color: rgba(149, 92, 0, 0.1);
  border-bottom-color: rgb(149, 92, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 92, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 92, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 92, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 0, 124, 37;
  background-color: rgba(0, 124, 37, 0.1);
  border-bottom-color: rgb(0, 124, 37);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 124, 37);
  border-left-width: 1px;
  border-right-color: rgb(0, 124, 37);
  border-right-width: 1px;
  border-top-color: rgb(0, 124, 37);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 142, 123;
  background-color: rgba(0, 142, 123, 0.1);
  border-bottom-color: rgb(0, 142, 123);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 142, 123);
  border-left-width: 1px;
  border-right-color: rgb(0, 142, 123);
  border-right-width: 1px;
  border-top-color: rgb(0, 142, 123);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 149, 92, 0;
  background-color: rgba(149, 92, 0, 0.1);
  border-bottom-color: rgb(149, 92, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 92, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 92, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 92, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(247, 247, 247, 0.19);
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(170, 170, 170);
  border-bottom-color: rgba(213, 208, 208, 0.204);
  border-left-color: rgba(213, 208, 208, 0.204);
  border-right-color: rgba(213, 208, 208, 0.204);
  border-top-color: rgba(213, 208, 208, 0.204);
}

body .search > .search-container > .search-space > * {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(213, 208, 208, 0.204);
  border-left-color: rgba(213, 208, 208, 0.204);
  border-right-color: rgba(213, 208, 208, 0.204);
  border-top-color: rgba(213, 208, 208, 0.204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(20, 20, 20);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(20, 20, 20);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(55, 0, 255, 0.2);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(55, 0, 255);
}

body h1 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

body h2 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

body h2.page-title, h2.page-title a {
  color: rgb(20, 20, 20);
  font-family: "ITC Slimbach Std", "Noto Serif KR";
}

body h3 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

body h4 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

body h5 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

body h6 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

body hr {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
}`,
    scrollbars: `body .callout {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(55, 0, 255);
  border-left-width: 1px;
  border-right-color: rgb(55, 0, 255);
  border-right-width: 1px;
  border-top-color: rgb(55, 0, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
}

body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(20, 20, 20);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    footer: `body footer {
  background-color: rgb(170, 170, 170);
  border-bottom-color: rgba(20, 20, 20, 0.2);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(20, 20, 20, 0.2);
  border-right-color: rgba(20, 20, 20, 0.2);
  border-right-width: 1px;
  border-top-color: rgba(20, 20, 20, 0.2);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body li.section-li > .section .meta {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .breadcrumb-element p {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

body .metadata {
  background-color: rgba(20, 20, 20, 0.05);
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

body .metadata-properties {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(170, 170, 170);
}

body .page-header h2.page-title {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(20, 20, 20);
  text-decoration: underline dotted rgb(20, 20, 20);
}

body details {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body input[type=text] {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(247, 247, 247, 0.757);
  border-bottom-color: rgb(51, 61, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 61, 64);
  border-right-color: rgb(51, 61, 64);
  border-top-color: rgb(51, 61, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(51, 61, 64);
}

body progress {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body sub {
  color: rgb(20, 20, 20);
}

body summary {
  color: rgb(20, 20, 20);
}

body sup {
  color: rgb(20, 20, 20);
}`,
  },
};
