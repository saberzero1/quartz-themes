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
  --accent-color: 55, 0, 255 !important;
  --background-modifier-border: rgba(20, 19, 19, 0.172) !important;
  --background-modifier-border-focus: #d5d0d034 !important;
  --background-modifier-border-hover: #d5d0d034 !important;
  --background-modifier-form-field: #f7f7f730 !important;
  --background-modifier-form-field-hover: #f7f7f730 !important;
  --background-primary: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --background-primary-alt: #f7f7f7c1 !important;
  --background-secondary: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)) !important;
  --background-secondary-alt: #d5d0d034 !important;
  --bases-cards-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --bases-cards-cover-background: #f7f7f7c1 !important;
  --bases-cards-shadow: 0 0 0 1px rgba(20, 19, 19, 0.172) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #d5d0d034 !important;
  --bases-embed-border-color: rgba(20, 19, 19, 0.172) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-table-border-color: rgba(20, 19, 19, 0.172) !important;
  --bases-table-cell-background-active: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --bases-table-cell-background-disabled: #f7f7f7c1 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #d5d0d034 !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: #f7f7f7c1 !important;
  --bases-table-header-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --bases-table-summary-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --bg-color: rgba(170, 170, 170, 0) !important;
  --blockquote-border-color: rgba(55, 0, 255, 0.6) !important;
  --blockquote-border-thickness: 3px !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent) linear-gradient(linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)), color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent)) !important;
  --bodyFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --button-radius: 2px !important;
  --callout-blend-mode: multiply;
  --callout-border-opacity: 100%;
  --callout-border-width: 1px;
  --callout-padding: 15px 20px;
  --callout-radius: 20px;
  --callout-title-weight: 900;
  --canvas-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --canvas-card-label-color: rgb(20, 20, 20) !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: rgba(20, 19, 19, 0.172) !important;
  --caret-color: rgb(20, 20, 20) !important;
  --checkbox-border-color: rgb(20, 20, 20) !important;
  --checkbox-color: rgba(152, 151, 151, 0.766) !important;
  --checkbox-marker-color: rgb(101, 101, 101) !important;
  --checkbox-radius: 0px !important;
  --clickable-icon-radius: 2px !important;
  --code-background: #f7f7f7c1 !important;
  --code-border-color: rgba(20, 19, 19, 0.172) !important;
  --code-comment: #5b6a6a !important;
  --code-function: #b500e7 !important;
  --code-important: #d64609 !important;
  --code-keyword: #098800 !important;
  --code-normal: #333d40 !important;
  --code-operator: #c45b00 !important;
  --code-property: #333d40 !important;
  --code-punctuation: #00b4f0 !important;
  --code-radius: 2px !important;
  --code-string: #b58900 !important;
  --code-tag: #dc322f !important;
  --code-value: rgb(55, 0, 255) !important;
  --codeFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(20, 20, 20) !important;
  --color-base-00: #f7f7f730 !important;
  --color-base-05: #d5d0d034 !important;
  --color-base-10: #f7f7f7c1 !important;
  --color-base-100: rgb(20, 20, 20) !important;
  --color-base-20: #d5d0d034 !important;
  --color-base-25: #d5d0d034 !important;
  --color-base-30: rgba(20, 19, 19, 0.172) !important;
  --color-base-35: #d5d0d034 !important;
  --color-base-40: #d5d0d034 !important;
  --color-base-50: rgb(20, 20, 20) !important;
  --color-base-60: #d5d0d034 !important;
  --dark: rgb(20, 20, 20) !important;
  --darkgray: rgb(20, 20, 20) !important;
  --divider-color: rgba(20, 19, 19, 0.172) !important;
  --dropdown-background: #f7f7f730 !important;
  --dropdown-background-hover: #f7f7f7c1 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(20, 19, 19, 0.172), inset 0 0 0 1px rgba(20, 19, 19, 0.172) !important;
  --file-folding-offset: 300px !important;
  --file-header-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --file-header-background-focused: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --file-header-border: 1px solid rgba(20, 20, 20, 0.2) !important;
  --file-header-font: Pretendard-Regular, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 630px !important;
  --file-margins: 30px 10px !important;
  --flair-background: #f7f7f730 !important;
  --flair-color: rgb(20, 20, 20) !important;
  --font-interface: Pretendard-Regular, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'Pretendard-Regular', serif !important;
  --font-mermaid: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Noto Serif KR, serif, Arial' !important;
  --font-text: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Noto Serif KR', serif !important;
  --footnote-divider-color: rgba(20, 19, 19, 0.172) !important;
  --footnote-id-color-no-occurrences: rgb(20, 20, 20) !important;
  --footnote-line-height: 2em !important;
  --footnote-radius: 2px !important;
  --graph-line: rgba(20, 20, 20, 0.2) !important;
  --graph-node-unresolved: rgb(20, 20, 20) !important;
  --graph-text: rgb(20, 20, 20) !important;
  --gray: rgb(20, 20, 20) !important;
  --h1-font: 'Pretendard-Bold' !important;
  --h1-size: 2em !important;
  --h2-font: 'Pretendard-Bold' !important;
  --h2-size: 1.8em !important;
  --h2-weight: 700 !important;
  --h3-font: 'Pretendard-Bold' !important;
  --h3-size: 1.4em !important;
  --h3-weight: 700 !important;
  --h4-font: 'Pretendard-Bold' !important;
  --h4-size: 1.2em !important;
  --h4-weight: 700 !important;
  --h5-font: 'Pretendard-Bold' !important;
  --h5-line-height: 2em !important;
  --h5-size: 1.1em !important;
  --h5-weight: 700 !important;
  --h6-font: 'Pretendard-Bold' !important;
  --h6-line-height: 2em !important;
  --h6-weight: 700 !important;
  --headerFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(20, 20, 20) !important;
  --highlight: rgba(55, 0, 255, 0.2) !important;
  --hr-color: rgba(20, 20, 20, 0.2) !important;
  --hr-thickness: 1px !important;
  --icon-color-focused: rgb(20, 20, 20) !important;
  --inline-title-color: rgb(20, 20, 20) !important;
  --inline-title-font: "ITC Slimbach Std", 'Noto Serif KR' !important;
  --inline-title-line-height: 1.2em !important;
  --inline-title-size: 3.5em !important;
  --input-date-separator: rgb(20, 20, 20) !important;
  --input-placeholder-color: rgb(20, 20, 20) !important;
  --input-radius: 0px !important;
  --interactive-hover: #f7f7f7c1 !important;
  --interactive-normal: #f7f7f730 !important;
  --light: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --light-alpha-color: 0 !important;
  --light-color: 170, 170, 170 !important;
  --lightgray: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)) !important;
  --line-color: rgba(20, 20, 20, 0.2) !important;
  --line-height-normal: 2em !important;
  --link-color: rgb(55, 0, 255) !important;
  --link-external-color: rgb(55, 0, 255) !important;
  --link-unresolved-color: rgb(55, 0, 255) !important;
  --link-unresolved-decoration-color: rgb(55, 0, 255) !important;
  --list-indent: 2em !important;
  --list-indent-editing: 2em !important;
  --list-indent-source: 2em !important;
  --list-marker-color: rgb(20, 20, 20) !important;
  --list-marker-color-collapsed: rgb(20, 20, 20) !important;
  --list-marker-color-hover: rgb(20, 20, 20) !important;
  --list-spacing: 0px !important;
  --menu-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)) !important;
  --menu-border-color: #d5d0d034 !important;
  --metadata-background: rgba(20, 20, 20, 0.05) !important;
  --metadata-border-color: rgba(20, 19, 19, 0.172) !important;
  --metadata-border-radius: 10px !important;
  --metadata-divider-color: rgba(20, 19, 19, 0.172) !important;
  --metadata-gap: 0px !important;
  --metadata-input-font: Pretendard-Regular, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(20, 20, 20) !important;
  --metadata-label-font: Pretendard-Regular, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-max-width: 100% !important;
  --metadata-padding: 5px 20px !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d5d0d034 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d5d0d034 !important;
  --modal-background: rgb(170, 170, 170) !important;
  --modal-border-color: #d5d0d034 !important;
  --modal-color: rgb(170, 170, 170) !important;
  --nav-collapse-icon-color: rgb(20, 20, 20) !important;
  --nav-collapse-icon-color-collapsed: rgb(20, 20, 20) !important;
  --nav-heading-color: rgb(20, 20, 20) !important;
  --nav-heading-color-collapsed: rgb(20, 20, 20) !important;
  --nav-heading-color-hover: rgb(20, 20, 20) !important;
  --nav-item-color-active: rgb(20, 20, 20) !important;
  --nav-item-color-hover: rgb(20, 20, 20) !important;
  --nav-item-color-selected: rgb(20, 20, 20) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: rgb(20, 20, 20) !important;
  --nav-tag-radius: 2px !important;
  --pdf-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --pdf-page-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --pdf-sidebar-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --pill-border-color: rgba(20, 19, 19, 0.172) !important;
  --pill-border-color-hover: #d5d0d034 !important;
  --pill-color-hover: rgb(20, 20, 20) !important;
  --pill-color-remove: rgb(20, 20, 20) !important;
  --popover-font-size: 0.9em !important;
  --popover-height: 300px !important;
  --prompt-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --prompt-border-color: #d5d0d034 !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent) linear-gradient(linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)), color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent)) !important;
  --ribbon-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)) !important;
  --ribbon-background-collapsed: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --search-result-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --setting-group-heading-color: rgb(20, 20, 20) !important;
  --setting-items-background: #f7f7f7c1 !important;
  --setting-items-border-color: rgba(20, 19, 19, 0.172) !important;
  --slider-thumb-border-color: #d5d0d034 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: rgba(20, 19, 19, 0.172) !important;
  --status-bar-background: rgb(170, 170, 170) !important;
  --status-bar-border-color: rgba(20, 20, 20, 0.2) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-radius: 2px !important;
  --suggestion-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --tab-background-active: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) !important;
  --tab-container-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)) !important;
  --tab-divider-color: #d5d0d034 !important;
  --tab-outline-color: rgba(20, 19, 19, 0.172) !important;
  --tab-radius: 2px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)), transparent) !important;
  --tab-text-color: rgb(20, 20, 20) !important;
  --tab-text-color-focused-active-current: rgb(20, 20, 20) !important;
  --table-add-button-border-color: rgba(20, 19, 19, 0.172) !important;
  --table-border-color: rgba(20, 19, 19, 0.172) !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-color: rgb(20, 20, 20) !important;
  --table-header-border-color: rgba(20, 19, 19, 0.172) !important;
  --table-header-border-width: 0 !important;
  --table-header-color: rgb(20, 20, 20) !important;
  --table-header-weight: 900 !important;
  --table-last-border-width: 0 !important;
  --table-row-last-border-width: 0 !important;
  --tag-background: rgba(55, 0, 255, 0.2) !important;
  --tag-color: rgb(55, 0, 255) !important;
  --text-faint: rgb(20, 20, 20) !important;
  --text-highlight-bg: rgba(55, 0, 255, 0.2) !important;
  --text-normal: rgb(20, 20, 20) !important;
  --text-selection: rgba(55, 0, 255, 0.2) !important;
  --textHighlight: rgba(55, 0, 255, 0.2) !important;
  --titleFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)) !important;
  --titlebar-background-focused: #d5d0d034 !important;
  --titlebar-border-color: rgba(20, 19, 19, 0.172) !important;
  --titlebar-text-color-focused: rgb(20, 20, 20) !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: rgb(20, 20, 20) !important;
  --vault-profile-color-hover: rgb(20, 20, 20) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}

html body .bases-table thead th {
  border-color: rgba(20, 19, 19, 0.173);
  color: rgb(20, 20, 20);
  font-weight: 900;
}

html body .canvas-node {
  border-color: rgb(20, 20, 20);
}

html body .canvas-node-content {
  color: rgb(20, 20, 20);
}

html body .canvas-node-file {
  color: rgb(20, 20, 20);
}

html body .canvas-node-group {
  border-color: rgb(20, 20, 20);
}

html body .canvas-sidebar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(20, 20, 20);
}

html body .note-properties {
  background-color: rgba(20, 20, 20, 0.05);
  border-color: rgba(20, 19, 19, 0.173);
  border-radius: 10px;
}

html body .note-properties-tags {
  background-color: rgba(55, 0, 255, 0.2);
  color: rgb(55, 0, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(20, 19, 19, 0.173);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(20, 19, 19, 0.173);
  color: rgb(20, 20, 20);
}

html body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 20, 20);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .page article p > em, html em {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .page article p > i, html i {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .page article p > strong, html strong {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .text-highlight {
  background-color: rgba(55, 0, 255, 0.2);
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body del {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: line-through 1px;
  text-decoration-color: rgb(20, 20, 20);
  text-decoration-thickness: 1px;
}

html body h1.article-title {
  color: rgb(20, 20, 20);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(20, 20, 20);
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(152, 151, 151, 0.765);
  border-color: rgba(152, 151, 151, 0.765);
}

html body p {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgb(55, 0, 255);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: 1px;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(55, 0, 255);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: 1px;
}

html body a.internal.broken {
  color: rgb(55, 0, 255);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px rgb(55, 0, 255);
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: 1px;
}`,
    lists: `html body dd {
  color: rgb(20, 20, 20);
}

html body dt {
  color: rgb(20, 20, 20);
}

html body ol > li {
  color: rgb(20, 20, 20);
}

html body ol.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body ul > li {
  color: rgb(20, 20, 20);
}

html body ul.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(20, 20, 20);
}

html body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body table {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 178.766px;
}

html body td {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-left-width: 0px;
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  color: rgb(20, 20, 20);
}

html body th {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-left-width: 0px;
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-width: 0px;
  color: rgb(20, 20, 20);
  font-weight: 900;
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code > [data-line] {
  border-left-color: rgb(181, 0, 231);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(181, 0, 231);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(181, 0, 231);
  border-left-color: rgb(181, 0, 231);
  border-right-color: rgb(181, 0, 231);
  border-top-color: rgb(181, 0, 231);
}

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body figcaption {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body img {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body video {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    embeds: `html body .file-embed {
  background-color: rgba(247, 247, 247, 0.757);
}

html body .footnotes {
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html body .transclude {
  border-bottom-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body .transclude-inner {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
  color: rgb(55, 0, 255);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(55, 0, 255);
  font-weight: 900;
}

html body .callout[data-callout="abstract"] {
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

html body .callout[data-callout="bug"] {
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

html body .callout[data-callout="danger"] {
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

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
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

html body .callout[data-callout="failure"] {
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

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
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

html body .callout[data-callout="note"] {
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

html body .callout[data-callout="question"] {
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

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html body .callout[data-callout="success"] {
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

html body .callout[data-callout="tip"] {
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

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
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

html body .callout[data-callout="warning"] {
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

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="callout"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
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

html body .search > .search-container > .search-space {
  background-color: rgb(170, 170, 170);
  border-bottom-color: rgba(213, 208, 208, 0.204);
  border-left-color: rgba(213, 208, 208, 0.204);
  border-right-color: rgba(213, 208, 208, 0.204);
  border-top-color: rgba(213, 208, 208, 0.204);
}

html body .search > .search-container > .search-space > * {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(213, 208, 208, 0.204);
  border-left-color: rgba(213, 208, 208, 0.204);
  border-right-color: rgba(213, 208, 208, 0.204);
  border-top-color: rgba(213, 208, 208, 0.204);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(20, 20, 20);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(55, 0, 255, 0.2);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(55, 0, 255);
}

html body h1 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

html body h2 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(20, 20, 20);
  font-family: "ITC Slimbach Std", "Noto Serif KR";
}

html body h3 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

html body h4 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

html body h5 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

html body h6 {
  color: rgb(20, 20, 20);
  font-family: Pretendard-Bold;
}

html body hr {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
}`,
    scrollbars: `html body .callout {
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

html body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(20, 20, 20);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    footer: `html body footer {
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
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body li.section-li > .section .meta {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .breadcrumb-element p {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html body .metadata {
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

html body .metadata-properties {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(170, 170, 170);
}

html body .page-header h2.page-title {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(20, 20, 20);
}

html body details {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body input[type=text] {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
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

html body progress {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body sub {
  color: rgb(20, 20, 20);
}

html body summary {
  color: rgb(20, 20, 20);
}

html body sup {
  color: rgb(20, 20, 20);
}

html body ul.tags > li {
  background-color: rgba(55, 0, 255, 0.2);
  color: rgb(55, 0, 255);
}`,
  },
};
