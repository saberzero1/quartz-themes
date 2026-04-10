import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "discordian",
    modes: ["dark"],
    variations: [],
    fonts: ["catamaran"],
  },
  dark: {
    base: `:root:root {
  --background-accent: hsla(217, 8%, 34%, 1) !important;
  --background-code: hsla(204, 6%, 17%, 1) !important;
  --background-code-border: hsla(0, 0%, 16%, 1) !important;
  --background-code-preview: hsla(204, 6%, 17%, 1) !important;
  --background-modifier-accent: hsla(0, 0%, 100%, 0.06) !important;
  --background-modifier-active: hsla(217, 8%, 34%, 0.24) !important;
  --background-modifier-border: hsla(216, 7%, 14%, 1) !important;
  --background-modifier-cover: hsla(220, 8%, 23%, 1) !important;
  --background-modifier-error: hsla(0, 85%, 61%, 1) !important;
  --background-modifier-error-hover: hsla(0, 66%, 55%, 1) !important;
  --background-modifier-form-field: hsla(0, 0%, 0%, 0.2) !important;
  --background-modifier-form-field-highlighted: hsla(0, 0%, 0%, 0.2) !important;
  --background-modifier-form-field-hover: hsla(0, 0%, 0%, 0.2) !important;
  --background-modifier-hover: hsla(217, 8%, 34%, 0.16) !important;
  --background-modifier-selected: hsla(217, 8%, 34%, 0.32) !important;
  --background-primary: #2E3035 !important;
  --background-primary-alt: hsla(232, 14%, 31%, 1) !important;
  --background-secondary: #2B2D31 !important;
  --background-secondary-alt: hsla(216, 7%, 14%, 1) !important;
  --background-tertiary: #1E1F22 !important;
  --bases-cards-background: #2E3035 !important;
  --bases-cards-cover-background: hsla(232, 14%, 31%, 1) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(216, 7%, 14%, 1) !important;
  --bases-embed-border-color: hsla(216, 7%, 14%, 1) !important;
  --bases-group-heading-property-color: hsla(213, 4%, 57%, 1) !important;
  --bases-table-border-color: hsla(216, 7%, 14%, 1) !important;
  --bases-table-cell-background-active: #2E3035 !important;
  --bases-table-cell-background-disabled: hsla(232, 14%, 31%, 1) !important;
  --bases-table-group-background: hsla(232, 14%, 31%, 1) !important;
  --bases-table-header-background: #2E3035 !important;
  --bases-table-header-background-hover: hsla(217, 8%, 34%, 0.16) !important;
  --bases-table-header-color: hsla(213, 4%, 57%, 1) !important;
  --bases-table-summary-background: #2E3035 !important;
  --bases-table-summary-background-hover: hsla(217, 8%, 34%, 0.16) !important;
  --blockquote-bg: hsla(240, 11%, 2%, 0.07) !important;
  --blockquote-border: hsla(286, 22%, 66%, 1) !important;
  --bodyFont: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #2E3035 !important;
  --canvas-card-label-color: hsla(0, 0%, 61%, 1) !important;
  --caret-color: hsla(213, 3%, 82%, 1) !important;
  --checkbox-border-color: hsla(0, 0%, 61%, 1) !important;
  --checkbox-border-color-hover: hsla(213, 4%, 57%, 1) !important;
  --checkbox-marker-color: #2E3035 !important;
  --checklist-done-color: hsla(213, 4%, 57%, 1) !important;
  --code-background: hsla(232, 14%, 31%, 1) !important;
  --code-border-color: hsla(216, 7%, 14%, 1) !important;
  --code-bracket-background: hsla(217, 8%, 34%, 0.16) !important;
  --code-comment: hsla(0, 0%, 61%, 1) !important;
  --code-normal: hsla(213, 3%, 82%, 1) !important;
  --code-punctuation: hsla(213, 4%, 57%, 1) !important;
  --codeFont: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsla(0, 0%, 61%, 1) !important;
  --collapse-icon-color-collapsed: hsla(265, 66%, 72%, 1) !important;
  --dark: hsla(213, 3%, 82%, 1) !important;
  --darkgray: hsla(213, 3%, 82%, 1) !important;
  --default-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  --discord-blue: hsla(227, 58%, 65%, 1) !important;
  --discord-blue-hover: hsla(227, 44%, 59%, 1) !important;
  --discord-dark: hsla(216, 7%, 14%, 1) !important;
  --discord-dark-hover: hsla(216, 7%, 14%, 0.7) !important;
  --discord-green: hsla(153, 46%, 49%, 1) !important;
  --discord-grey: hsla(214, 10%, 50%, 1) !important;
  --discord-grey-hover: hsla(214, 10%, 45%, 1) !important;
  --discord-grey-toggle: hsla(218, 5%, 47%, 1) !important;
  --discord-orange: hsla(20, 84%, 52%, 1) !important;
  --discord-orange-light: hsla(24, 90%, 61%, 1) !important;
  --discord-red: hsla(0, 85%, 61%, 1) !important;
  --discord-red-hover: hsla(0, 66%, 55%, 1) !important;
  --discord-yellow: hsla(38, 96%, 54%, 1) !important;
  --discord-yellow-alt: hsla(37, 65%, 63%, 1) !important;
  --discord-yellow-bg: hsla(38, 96%, 54%, 0.1) !important;
  --discord-yellow-light: hsla(50, 42%, 48%, 1) !important;
  --divider-color: hsla(216, 7%, 14%, 1) !important;
  --elevation-high: 0 8px 16px hsla(0, 0%, 0%, 0.24) !important;
  --elevation-low: 0 1px 0 hsla(240, 11%, 2%, 0.2), 0 1.5px 0 hsla(240, 8%, 3%, 0.05), 0 2px 0 hsla(240, 11%, 2%, 0.05) !important;
  --elevation-medium: 0 4px 4px hsla(0, 0%, 0%, 0.16) !important;
  --elevation-stroke: 0 1px 0 1px hsla(240, 11%, 2%, 0.1) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsla(216, 7%, 14%, 1), inset 0 0 0 1px hsla(216, 7%, 14%, 1) !important;
  --file-header-background: #2E3035 !important;
  --file-header-background-focused: #2E3035 !important;
  --file-header-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: hsla(213, 3%, 82%, 1) !important;
  --font-editor: Catamaran SSm, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  --font-interface: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-size-file-explorer: 0.875rem !important;
  --font-size-notes: 1rem !important;
  --footnote-divider-color: hsla(216, 7%, 14%, 1) !important;
  --footnote-id-color: hsla(213, 4%, 57%, 1) !important;
  --footnote-id-color-no-occurrences: hsla(0, 0%, 61%, 1) !important;
  --footnote-input-background-active: hsla(217, 8%, 34%, 0.16) !important;
  --graph-arrow: hsla(314, 57%, 63%, 1) !important;
  --graph-circle-fill: hsla(59, 99%, 50%, 1) !important;
  --graph-circle-fill-highlight: hsla(59, 99%, 50%, 1) !important;
  --graph-circle-fill-unresolved: hsla(206, 89%, 71%, 1) !important;
  --graph-circle-outline: transparent !important;
  --graph-fill-attachment: hsla(314, 57%, 63%, 1) !important;
  --graph-fill-tag: hsla(250, 100%, 77%, 1) !important;
  --graph-line: hsla(191, 57%, 35%, 1) !important;
  --graph-line-highlight: hsla(191, 57%, 59%, 1) !important;
  --graph-node: hsla(213, 4%, 57%, 1) !important;
  --graph-node-focused: hsla(265, 66%, 72%, 1) !important;
  --graph-node-unresolved: hsla(0, 0%, 61%, 1) !important;
  --graph-text: hsla(213, 3%, 82%, 1) !important;
  --gray: hsla(213, 4%, 57%, 1) !important;
  --headerFont: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(0, 0%, 61%, 1) !important;
  --highlight: hsla(212, 34%, 54%, 1) !important;
  --hr-color: hsla(216, 7%, 14%, 1) !important;
  --icon-color: hsla(213, 4%, 57%, 1) !important;
  --icon-color-active: hsla(265, 66%, 72%, 1) !important;
  --icon-color-focused: hsla(213, 3%, 82%, 1) !important;
  --icon-color-hover: hsla(213, 4%, 57%, 1) !important;
  --input-date-separator: hsla(0, 0%, 61%, 1) !important;
  --input-placeholder-color: hsla(0, 0%, 61%, 1) !important;
  --letter-spacing-notes: -0.2px !important;
  --light: #2E3035 !important;
  --lightgray: #2B2D31 !important;
  --link-color: hsla(265, 66%, 72%, 1) !important;
  --link-decoration: none !important;
  --link-external-color: hsla(265, 66%, 72%, 1) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsla(265, 66%, 72%, 1) !important;
  --list-marker-color: hsla(0, 0%, 61%, 1) !important;
  --list-marker-color-collapsed: hsla(265, 66%, 72%, 1) !important;
  --list-marker-color-hover: hsla(213, 4%, 57%, 1) !important;
  --markup-code: hsla(34, 89%, 61%, 1) !important;
  --menu-background: #2B2D31 !important;
  --metadata-border-color: hsla(216, 7%, 14%, 1) !important;
  --metadata-divider-color: hsla(216, 7%, 14%, 1) !important;
  --metadata-input-background-active: hsla(217, 8%, 34%, 0.16) !important;
  --metadata-input-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsla(213, 3%, 82%, 1) !important;
  --metadata-label-background-active: hsla(217, 8%, 34%, 0.16) !important;
  --metadata-label-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(213, 4%, 57%, 1) !important;
  --metadata-label-text-color-hover: hsla(213, 4%, 57%, 1) !important;
  --metadata-property-background-active: hsla(217, 8%, 34%, 0.16) !important;
  --modal-background: #2E3035 !important;
  --nav-collapse-icon-color: hsla(0, 0%, 61%, 1) !important;
  --nav-collapse-icon-color-collapsed: hsla(0, 0%, 61%, 1) !important;
  --nav-heading-color: hsla(213, 3%, 82%, 1) !important;
  --nav-heading-color-collapsed: hsla(0, 0%, 61%, 1) !important;
  --nav-heading-color-collapsed-hover: hsla(213, 4%, 57%, 1) !important;
  --nav-heading-color-hover: hsla(213, 3%, 82%, 1) !important;
  --nav-item-background-active: hsla(217, 8%, 34%, 0.16) !important;
  --nav-item-background-hover: hsla(217, 8%, 34%, 0.16) !important;
  --nav-item-color: hsla(213, 4%, 57%, 1) !important;
  --nav-item-color-active: hsla(213, 3%, 82%, 1) !important;
  --nav-item-color-highlighted: hsla(265, 66%, 72%, 1) !important;
  --nav-item-color-hover: hsla(213, 3%, 82%, 1) !important;
  --nav-item-color-selected: hsla(213, 3%, 82%, 1) !important;
  --nav-tag-color: hsla(0, 0%, 61%, 1) !important;
  --nav-tag-color-active: hsla(213, 4%, 57%, 1) !important;
  --nav-tag-color-hover: hsla(213, 4%, 57%, 1) !important;
  --opacity-translucency: 1 !important;
  --pdf-background: #2E3035 !important;
  --pdf-page-background: #2E3035 !important;
  --pdf-shadow: 0 0 0 1px hsla(216, 7%, 14%, 1) !important;
  --pdf-sidebar-background: #2E3035 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(216, 7%, 14%, 1) !important;
  --pill-border-color: hsla(216, 7%, 14%, 1) !important;
  --pill-color: hsla(213, 4%, 57%, 1) !important;
  --pill-color-hover: hsla(213, 3%, 82%, 1) !important;
  --pill-color-remove: hsla(0, 0%, 61%, 1) !important;
  --pill-color-remove-hover: hsla(265, 66%, 72%, 1) !important;
  --prompt-background: #2E3035 !important;
  --readable-line-length: 45rem !important;
  --ribbon-background: #2B2D31 !important;
  --ribbon-background-collapsed: #2E3035 !important;
  --scrollbar-auto-scrollbar-color-thumb: hsla(216, 7%, 14%, 1) !important;
  --scrollbar-auto-scrollbar-color-track: hsla(223, 7%, 20%, 1) !important;
  --scrollbar-auto-thumb: hsla(216, 7%, 14%, 1) !important;
  --scrollbar-auto-track: hsla(210, 10%, 20%, 1) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thin-thumb: hsla(216, 7%, 14%, 1) !important;
  --scrollbar-thin-track: transparent !important;
  --search-clear-button-color: hsla(213, 4%, 57%, 1) !important;
  --search-icon-color: hsla(213, 4%, 57%, 1) !important;
  --search-result-background: #2E3035 !important;
  --secondary: hsla(265, 66%, 72%, 1) !important;
  --setting-group-heading-color: hsla(213, 3%, 82%, 1) !important;
  --setting-items-background: hsla(232, 14%, 31%, 1) !important;
  --setting-items-border-color: hsla(216, 7%, 14%, 1) !important;
  --slider-track-background: hsla(216, 7%, 14%, 1) !important;
  --status-bar-background: #2B2D31 !important;
  --status-bar-border-color: hsla(216, 7%, 14%, 1) !important;
  --status-bar-text-color: hsla(213, 4%, 57%, 1) !important;
  --suggestion-background: #2E3035 !important;
  --tab-background-active: #2E3035 !important;
  --tab-container-background: #2B2D31 !important;
  --tab-outline-color: hsla(216, 7%, 14%, 1) !important;
  --tab-switcher-background: #2B2D31 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2B2D31, transparent) !important;
  --tab-text-color: hsla(0, 0%, 61%, 1) !important;
  --tab-text-color-active: hsla(213, 4%, 57%, 1) !important;
  --tab-text-color-focused: hsla(213, 4%, 57%, 1) !important;
  --tab-text-color-focused-active: hsla(213, 4%, 57%, 1) !important;
  --tab-text-color-focused-active-current: hsla(213, 3%, 82%, 1) !important;
  --tab-text-color-focused-highlighted: hsla(265, 66%, 72%, 1) !important;
  --table-add-button-border-color: hsla(216, 7%, 14%, 1) !important;
  --table-border-color: hsla(216, 7%, 14%, 1) !important;
  --table-drag-handle-color: hsla(0, 0%, 61%, 1) !important;
  --table-drag-handle-color-active: hsla(210, 3%, 87%, 1) !important;
  --table-header-border-color: hsla(216, 7%, 14%, 1) !important;
  --table-header-color: hsla(213, 3%, 82%, 1) !important;
  --tag-color: hsla(265, 66%, 72%, 1) !important;
  --tag-color-hover: hsla(265, 66%, 72%, 1) !important;
  --tertiary: hsla(265, 66%, 72%, 1) !important;
  --text-a: hsla(322, 65%, 70%, 1) !important;
  --text-a-hover: hsla(327, 100%, 77%, 1) !important;
  --text-accent: hsla(265, 66%, 72%, 1) !important;
  --text-em: hsla(62, 31%, 61%, 1) !important;
  --text-faint: hsla(0, 0%, 61%, 1) !important;
  --text-header: hsla(233, 45%, 69%, 1) !important;
  --text-highlight-bg: hsla(212, 34%, 54%, 1) !important;
  --text-linenumber: hsla(216, 3%, 32%, 0.85) !important;
  --text-linenumber-active: hsla(0, 0%, 61%, 0.85) !important;
  --text-link: hsla(197, 100%, 48%, 1) !important;
  --text-mark: hsla(37, 82%, 74%, 1) !important;
  --text-muted: hsla(213, 4%, 57%, 1) !important;
  --text-normal: hsla(213, 3%, 82%, 1) !important;
  --text-on-accent: hsla(210, 3%, 87%, 1) !important;
  --text-selection: hsla(212, 34%, 54%, 0.5) !important;
  --text-strong: hsla(37, 65%, 63%, 1) !important;
  --text-tag: hsla(27, 100%, 63%, 0.73) !important;
  --text-title-h1: hsla(243, 35%, 65%, 1) !important;
  --text-title-h2: hsla(233, 45%, 69%, 1) !important;
  --text-title-h3: hsla(233, 45%, 69%, 1) !important;
  --text-title-h4: hsla(233, 45%, 69%, 1) !important;
  --text-title-h5: hsla(233, 45%, 69%, 1) !important;
  --text-title-h6: hsla(192, 13%, 53%, 1) !important;
  --textHighlight: hsla(212, 34%, 54%, 1) !important;
  --titleFont: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #2B2D31 !important;
  --titlebar-background-focused: hsla(216, 7%, 14%, 1) !important;
  --titlebar-border-color: hsla(216, 7%, 14%, 1) !important;
  --titlebar-text-color: hsla(213, 4%, 57%, 1) !important;
  --titlebar-text-color-focused: hsla(213, 3%, 82%, 1) !important;
  --vault-profile-color: hsla(213, 3%, 82%, 1) !important;
  --vault-profile-color-hover: hsla(213, 3%, 82%, 1) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(43, 45, 49);
  color: rgb(208, 209, 210);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(46, 48, 53);
  color: rgb(208, 209, 210);
}

html body .bases-table thead th {
  border-color: rgb(33, 35, 38);
  color: rgb(208, 209, 210);
  font-weight: 700;
}

html body .canvas-node {
  border-color: rgb(208, 209, 210);
}

html body .canvas-node-content {
  color: rgb(208, 209, 210);
}

html body .canvas-node-file {
  color: rgb(208, 209, 210);
}

html body .canvas-node-group {
  border-color: rgb(208, 209, 210);
}

html body .canvas-sidebar {
  background-color: rgb(43, 45, 49);
  border-color: rgb(208, 209, 210);
}

html body .note-properties {
  border-color: rgb(33, 35, 38);
}

html body .note-properties-key {
  color: rgb(141, 145, 150);
}

html body .note-properties-row {
  border-color: rgb(141, 145, 150);
}

html body .note-properties-tags {
  color: rgb(176, 136, 231);
}

html body .note-properties-value {
  color: rgb(141, 145, 150);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(43, 45, 49);
  color: rgb(208, 209, 210);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(33, 35, 38);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(43, 45, 49);
  border-left-color: rgb(33, 35, 38);
  color: rgb(208, 209, 210);
}

html body div#quartz-root {
  background-color: rgb(46, 48, 53);
  color: rgb(208, 209, 210);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(222, 175, 99);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(222, 175, 99) none 0px;
  text-decoration-color: rgb(222, 175, 99);
}

html body .page article p > em, html em {
  color: rgb(184, 186, 125);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(184, 186, 125) none 0px;
  text-decoration-color: rgb(184, 186, 125);
}

html body .page article p > i, html i {
  color: rgb(184, 186, 125);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(184, 186, 125) none 0px;
  text-decoration-color: rgb(184, 186, 125);
}

html body .page article p > strong, html strong {
  color: rgb(222, 175, 99);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(222, 175, 99) none 0px;
  text-decoration-color: rgb(222, 175, 99);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: rgb(222, 175, 99) 0px -2px 0px 0px inset;
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(208, 209, 210) none 0px;
  text-decoration-color: rgb(208, 209, 210);
}

html body del {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(208, 209, 210) none 0px;
  text-decoration-color: rgb(208, 209, 210);
}

html body h1.article-title {
  color: rgb(208, 209, 210);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(46, 48, 53);
  border-color: rgb(156, 156, 156);
  border-radius: 3px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(114, 136, 218);
  border-color: rgb(114, 136, 218);
}

html body p {
  color: rgb(141, 145, 150);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(141, 145, 150) none 0px;
  text-decoration-color: rgb(141, 145, 150);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 175, 245);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  outline: rgb(0, 175, 245) none 0px;
  text-decoration-color: rgb(0, 175, 245);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(228, 129, 192);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration-color: rgb(228, 129, 192);
}

html body a.internal.broken {
  color: rgb(228, 129, 192);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration-color: rgb(228, 129, 192);
}`,
    lists: `html body dd {
  color: rgb(208, 209, 210);
}

html body dt {
  color: rgb(208, 209, 210);
}

html body ol > li {
  color: rgb(208, 209, 210);
}

html body ol.overflow {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body ul > li {
  color: rgb(208, 209, 210);
}

html body ul.overflow {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(228, 129, 192);
}

html body blockquote {
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body table {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 32px;
  width: 189.266px;
}

html body td {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(208, 209, 210);
  border-left-width: 0px;
  border-right-color: rgb(208, 209, 210);
  border-right-width: 0px;
  border-top-color: rgb(208, 209, 210);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
}

html body th {
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 35, 38);
  border-left-width: 0px;
  border-right-color: rgb(33, 35, 38);
  border-right-width: 0px;
  border-top-color: rgb(33, 35, 38);
  border-top-width: 0px;
  color: rgb(208, 209, 210);
  font-weight: 700;
}

html body thead {
  border-top-color: rgb(222, 175, 99);
  border-top-style: solid;
  border-top-width: 2px;
}

html body tr {
  border-top-color: rgb(208, 209, 210);
}`,
    code: `html body code {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  color: rgb(208, 209, 210);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body figcaption {
  color: rgb(208, 209, 210);
}

html body figure {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body img {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body video {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
}

html body .footnotes {
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

html body .transclude {
  border-bottom-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  padding-left: 8px;
  padding-right: 4px;
}

html body .transclude-inner {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  margin-left: 8px;
  margin-right: 4px;
  padding-left: 8px;
  padding-right: 4px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 22px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  background-color: rgb(33, 35, 38);
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(141, 145, 150);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(46, 48, 53);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(208, 209, 210) none 0px;
  text-decoration-color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.8);
  color: rgb(208, 209, 210);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(33, 35, 38);
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(138, 92, 245, 0.8);
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(208, 209, 210);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.8);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(208, 209, 210);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(176, 136, 231);
}

html body h1 {
  color: rgb(138, 135, 197);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body h2 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body h3 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body h4 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body h5 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body h6 {
  color: rgb(120, 144, 151);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body hr {
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

html body ::-webkit-scrollbar-track {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(208, 209, 210);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}`,
    footer: `html body footer {
  background-color: rgb(43, 45, 49);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  color: rgb(141, 145, 150);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body footer ul li a {
  color: rgb(141, 145, 150);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(141, 145, 150);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body li.section-li > .section .meta {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(141, 145, 150);
}

html body ul.section-ul {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}

html body .darkmode svg {
  color: rgb(141, 145, 150);
  stroke: rgb(141, 145, 150);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}

html body .breadcrumb-element p {
  color: rgb(156, 156, 156);
  font-family: "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

html body .metadata {
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body .navigation-progress {
  background-color: rgb(43, 45, 49);
}

html body .page-header h2.page-title {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body abbr {
  color: rgb(208, 209, 210);
}

html body details {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body input[type=text] {
  background-color: rgb(33, 35, 38);
  border-bottom-color: rgb(33, 35, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(141, 145, 150);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html body kbd {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

html body progress {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body sub {
  color: rgb(208, 209, 210);
}

html body summary {
  color: rgb(208, 209, 210);
}

html body sup {
  color: rgb(208, 209, 210);
}

html body ul.tags > li {
  color: rgb(176, 136, 231);
}`,
  },
  light: {},
};
