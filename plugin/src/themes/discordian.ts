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
  --background-accent: rgb(80, 85, 94) !important;
  --background-code: rgb(41, 44, 46) !important;
  --background-code-border: rgb(41, 41, 41) !important;
  --background-code-preview: rgb(41, 44, 46) !important;
  --background-modifier-accent: rgba(255, 255, 255, 0.06) !important;
  --background-modifier-active: rgba(80, 85, 94, 0.24) !important;
  --background-modifier-border: rgb(33, 35, 38) !important;
  --background-modifier-cover: rgb(54, 57, 63) !important;
  --background-modifier-error: rgb(240, 71, 71) !important;
  --background-modifier-error-hover: rgb(216, 65, 65) !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-hover: rgba(80, 85, 94, 0.16) !important;
  --background-modifier-selected: rgba(80, 85, 94, 0.32) !important;
  --background-primary: #2E3035 !important;
  --background-primary-alt: rgb(68, 71, 90) !important;
  --background-secondary: #2B2D31 !important;
  --background-secondary-alt: rgb(33, 35, 38) !important;
  --background-tertiary: #1E1F22 !important;
  --bases-cards-background: #2E3035 !important;
  --bases-cards-cover-background: rgb(68, 71, 90) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(33, 35, 38) !important;
  --bases-embed-border-color: rgb(33, 35, 38) !important;
  --bases-group-heading-property-color: rgb(141, 145, 150) !important;
  --bases-table-border-color: rgb(33, 35, 38) !important;
  --bases-table-cell-background-active: #2E3035 !important;
  --bases-table-cell-background-disabled: rgb(68, 71, 90) !important;
  --bases-table-group-background: rgb(68, 71, 90) !important;
  --bases-table-header-background: #2E3035 !important;
  --bases-table-header-background-hover: rgba(80, 85, 94, 0.16) !important;
  --bases-table-header-color: rgb(141, 145, 150) !important;
  --bases-table-summary-background: #2E3035 !important;
  --bases-table-summary-background-hover: rgba(80, 85, 94, 0.16) !important;
  --blockquote-bg: rgba(5, 5, 6, 0.07) !important;
  --blockquote-border: rgb(178, 149, 187) !important;
  --bodyFont: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #2E3035 !important;
  --canvas-card-label-color: rgb(156, 156, 156) !important;
  --caret-color: rgb(208, 209, 210) !important;
  --checkbox-border-color: rgb(156, 156, 156) !important;
  --checkbox-border-color-hover: rgb(141, 145, 150) !important;
  --checkbox-marker-color: #2E3035 !important;
  --checklist-done-color: rgb(141, 145, 150) !important;
  --code-background: rgb(68, 71, 90) !important;
  --code-border-color: rgb(33, 35, 38) !important;
  --code-bracket-background: rgba(80, 85, 94, 0.16) !important;
  --code-comment: rgb(156, 156, 156) !important;
  --code-normal: rgb(208, 209, 210) !important;
  --code-punctuation: rgb(141, 145, 150) !important;
  --codeFont: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(156, 156, 156) !important;
  --collapse-icon-color-collapsed: rgb(176, 136, 231) !important;
  --dark: rgb(208, 209, 210) !important;
  --darkgray: rgb(208, 209, 210) !important;
  --default-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  --discord-blue: rgb(114, 136, 218) !important;
  --discord-blue-hover: rgb(104, 124, 196) !important;
  --discord-dark: rgb(33, 35, 38) !important;
  --discord-dark-hover: rgba(33, 35, 38, 0.7) !important;
  --discord-green: rgb(67, 182, 131) !important;
  --discord-grey: rgb(115, 126, 140) !important;
  --discord-grey-hover: rgb(103, 113, 126) !important;
  --discord-grey-toggle: rgb(114, 118, 126) !important;
  --discord-orange: rgb(235, 98, 30) !important;
  --discord-orange-light: rgb(245, 138, 66) !important;
  --discord-red: rgb(240, 71, 71) !important;
  --discord-red-hover: rgb(216, 65, 65) !important;
  --discord-yellow: rgb(250, 168, 25) !important;
  --discord-yellow-alt: rgb(222, 175, 99) !important;
  --discord-yellow-bg: rgba(250, 168, 25, 0.1) !important;
  --discord-yellow-light: rgb(174, 157, 71) !important;
  --divider-color: rgb(33, 35, 38) !important;
  --elevation-high: 0 8px 16px rgba(0, 0, 0, 0.24) !important;
  --elevation-low: 0 1px 0 rgba(5, 5, 6, 0.2), 0 1.5px 0 rgba(7, 7, 8, 0.05), 0 2px 0 rgba(5, 5, 6, 0.05) !important;
  --elevation-medium: 0 4px 4px rgba(0, 0, 0, 0.16) !important;
  --elevation-stroke: 0 1px 0 1px rgba(5, 5, 6, 0.1) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(33, 35, 38), inset 0 0 0 1px rgb(33, 35, 38) !important;
  --file-header-background: #2E3035 !important;
  --file-header-background-focused: #2E3035 !important;
  --file-header-font: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: rgb(208, 209, 210) !important;
  --font-editor: Catamaran SSm, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  --font-interface: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-size-file-explorer: 0.875rem !important;
  --font-size-notes: 1rem !important;
  --footnote-divider-color: rgb(33, 35, 38) !important;
  --footnote-id-color: rgb(141, 145, 150) !important;
  --footnote-id-color-no-occurrences: rgb(156, 156, 156) !important;
  --footnote-input-background-active: rgba(80, 85, 94, 0.16) !important;
  --graph-arrow: rgb(214, 107, 189) !important;
  --graph-circle-fill: rgb(254, 250, 1) !important;
  --graph-circle-fill-highlight: rgb(254, 250, 1) !important;
  --graph-circle-fill-unresolved: rgb(115, 190, 247) !important;
  --graph-circle-outline: transparent !important;
  --graph-fill-attachment: rgb(214, 107, 189) !important;
  --graph-fill-tag: rgb(157, 138, 255) !important;
  --graph-line: rgb(38, 121, 140) !important;
  --graph-line-highlight: rgb(91, 188, 210) !important;
  --graph-node: rgb(141, 145, 150) !important;
  --graph-node-focused: rgb(176, 136, 231) !important;
  --graph-node-unresolved: rgb(156, 156, 156) !important;
  --graph-text: rgb(208, 209, 210) !important;
  --gray: rgb(141, 145, 150) !important;
  --headerFont: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(156, 156, 156) !important;
  --highlight: rgb(98, 135, 178) !important;
  --hr-color: rgb(33, 35, 38) !important;
  --icon-color: rgb(141, 145, 150) !important;
  --icon-color-active: rgb(176, 136, 231) !important;
  --icon-color-focused: rgb(208, 209, 210) !important;
  --icon-color-hover: rgb(141, 145, 150) !important;
  --input-date-separator: rgb(156, 156, 156) !important;
  --input-placeholder-color: rgb(156, 156, 156) !important;
  --letter-spacing-notes: -0.2px !important;
  --light: #2E3035 !important;
  --lightgray: #2B2D31 !important;
  --link-color: rgb(176, 136, 231) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(176, 136, 231) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(176, 136, 231) !important;
  --list-marker-color: rgb(156, 156, 156) !important;
  --list-marker-color-collapsed: rgb(176, 136, 231) !important;
  --list-marker-color-hover: rgb(141, 145, 150) !important;
  --markup-code: rgb(244, 167, 67) !important;
  --menu-background: #2B2D31 !important;
  --metadata-border-color: rgb(33, 35, 38) !important;
  --metadata-divider-color: rgb(33, 35, 38) !important;
  --metadata-input-background-active: rgba(80, 85, 94, 0.16) !important;
  --metadata-input-font: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(208, 209, 210) !important;
  --metadata-label-background-active: rgba(80, 85, 94, 0.16) !important;
  --metadata-label-font: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(141, 145, 150) !important;
  --metadata-label-text-color-hover: rgb(141, 145, 150) !important;
  --metadata-property-background-active: rgba(80, 85, 94, 0.16) !important;
  --modal-background: #2E3035 !important;
  --nav-collapse-icon-color: rgb(156, 156, 156) !important;
  --nav-collapse-icon-color-collapsed: rgb(156, 156, 156) !important;
  --nav-heading-color: rgb(208, 209, 210) !important;
  --nav-heading-color-collapsed: rgb(156, 156, 156) !important;
  --nav-heading-color-collapsed-hover: rgb(141, 145, 150) !important;
  --nav-heading-color-hover: rgb(208, 209, 210) !important;
  --nav-item-background-active: rgba(80, 85, 94, 0.16) !important;
  --nav-item-background-hover: rgba(80, 85, 94, 0.16) !important;
  --nav-item-color: rgb(141, 145, 150) !important;
  --nav-item-color-active: rgb(208, 209, 210) !important;
  --nav-item-color-highlighted: rgb(176, 136, 231) !important;
  --nav-item-color-hover: rgb(208, 209, 210) !important;
  --nav-item-color-selected: rgb(208, 209, 210) !important;
  --nav-tag-color: rgb(156, 156, 156) !important;
  --nav-tag-color-active: rgb(141, 145, 150) !important;
  --nav-tag-color-hover: rgb(141, 145, 150) !important;
  --opacity-translucency: 1 !important;
  --pdf-background: #2E3035 !important;
  --pdf-page-background: #2E3035 !important;
  --pdf-shadow: 0 0 0 1px rgb(33, 35, 38) !important;
  --pdf-sidebar-background: #2E3035 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(33, 35, 38) !important;
  --pill-border-color: rgb(33, 35, 38) !important;
  --pill-color: rgb(141, 145, 150) !important;
  --pill-color-hover: rgb(208, 209, 210) !important;
  --pill-color-remove: rgb(156, 156, 156) !important;
  --pill-color-remove-hover: rgb(176, 136, 231) !important;
  --prompt-background: #2E3035 !important;
  --readable-line-length: 45rem !important;
  --ribbon-background: #2B2D31 !important;
  --ribbon-background-collapsed: #2E3035 !important;
  --scrollbar-auto-scrollbar-color-thumb: rgb(33, 35, 38) !important;
  --scrollbar-auto-scrollbar-color-track: rgb(47, 49, 55) !important;
  --scrollbar-auto-thumb: rgb(33, 35, 38) !important;
  --scrollbar-auto-track: rgb(46, 51, 56) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thin-thumb: rgb(33, 35, 38) !important;
  --scrollbar-thin-track: transparent !important;
  --search-clear-button-color: rgb(141, 145, 150) !important;
  --search-icon-color: rgb(141, 145, 150) !important;
  --search-result-background: #2E3035 !important;
  --secondary: rgb(176, 136, 231) !important;
  --setting-group-heading-color: rgb(208, 209, 210) !important;
  --setting-items-background: rgb(68, 71, 90) !important;
  --setting-items-border-color: rgb(33, 35, 38) !important;
  --slider-track-background: rgb(33, 35, 38) !important;
  --status-bar-background: #2B2D31 !important;
  --status-bar-border-color: rgb(33, 35, 38) !important;
  --status-bar-text-color: rgb(141, 145, 150) !important;
  --suggestion-background: #2E3035 !important;
  --tab-background-active: #2E3035 !important;
  --tab-container-background: #2B2D31 !important;
  --tab-outline-color: rgb(33, 35, 38) !important;
  --tab-switcher-background: #2B2D31 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2B2D31, transparent) !important;
  --tab-text-color: rgb(156, 156, 156) !important;
  --tab-text-color-active: rgb(141, 145, 150) !important;
  --tab-text-color-focused: rgb(141, 145, 150) !important;
  --tab-text-color-focused-active: rgb(141, 145, 150) !important;
  --tab-text-color-focused-active-current: rgb(208, 209, 210) !important;
  --tab-text-color-focused-highlighted: rgb(176, 136, 231) !important;
  --table-add-button-border-color: rgb(33, 35, 38) !important;
  --table-border-color: rgb(33, 35, 38) !important;
  --table-drag-handle-color: rgb(156, 156, 156) !important;
  --table-drag-handle-color-active: rgb(221, 222, 223) !important;
  --table-header-border-color: rgb(33, 35, 38) !important;
  --table-header-color: rgb(208, 209, 210) !important;
  --tag-color: rgb(176, 136, 231) !important;
  --tag-color-hover: rgb(176, 136, 231) !important;
  --tertiary: rgb(176, 136, 231) !important;
  --text-a: rgb(228, 129, 192) !important;
  --text-a-hover: rgb(255, 138, 202) !important;
  --text-accent: rgb(176, 136, 231) !important;
  --text-em: rgb(184, 186, 125) !important;
  --text-faint: rgb(156, 156, 156) !important;
  --text-header: rgb(140, 149, 212) !important;
  --text-highlight-bg: rgb(98, 135, 178) !important;
  --text-linenumber: rgba(79, 81, 84, 0.85) !important;
  --text-linenumber-active: rgba(156, 156, 156, 0.85) !important;
  --text-link: rgb(0, 175, 245) !important;
  --text-mark: rgb(243, 201, 134) !important;
  --text-muted: rgb(141, 145, 150) !important;
  --text-normal: rgb(208, 209, 210) !important;
  --text-on-accent: rgb(221, 222, 223) !important;
  --text-selection: rgba(98, 135, 178, 0.5) !important;
  --text-strong: rgb(222, 175, 99) !important;
  --text-tag: rgba(255, 151, 66, 0.73) !important;
  --text-title-h1: rgb(138, 135, 197) !important;
  --text-title-h2: rgb(140, 149, 212) !important;
  --text-title-h3: rgb(140, 149, 212) !important;
  --text-title-h4: rgb(140, 149, 212) !important;
  --text-title-h5: rgb(140, 149, 212) !important;
  --text-title-h6: rgb(120, 144, 151) !important;
  --textHighlight: rgb(98, 135, 178) !important;
  --titleFont: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #2B2D31 !important;
  --titlebar-background-focused: rgb(33, 35, 38) !important;
  --titlebar-border-color: rgb(33, 35, 38) !important;
  --titlebar-text-color: rgb(141, 145, 150) !important;
  --titlebar-text-color-focused: rgb(208, 209, 210) !important;
  --vault-profile-color: rgb(208, 209, 210) !important;
  --vault-profile-color-hover: rgb(208, 209, 210) !important;
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
  outline: rgb(222, 175, 99) none 0px;
  text-decoration: rgb(222, 175, 99);
  text-decoration-color: rgb(222, 175, 99);
}

html body .page article p > em, html em {
  color: rgb(184, 186, 125);
  outline: rgb(184, 186, 125) none 0px;
  text-decoration: rgb(184, 186, 125);
  text-decoration-color: rgb(184, 186, 125);
}

html body .page article p > i, html i {
  color: rgb(184, 186, 125);
  outline: rgb(184, 186, 125) none 0px;
  text-decoration: rgb(184, 186, 125);
  text-decoration-color: rgb(184, 186, 125);
}

html body .page article p > strong, html strong {
  color: rgb(222, 175, 99);
  outline: rgb(222, 175, 99) none 0px;
  text-decoration: rgb(222, 175, 99);
  text-decoration-color: rgb(222, 175, 99);
}

html body .text-highlight {
  background-color: rgb(98, 135, 178);
  color: rgb(208, 209, 210);
  outline: rgb(208, 209, 210) none 0px;
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body del {
  color: rgb(208, 209, 210);
  outline: rgb(208, 209, 210) none 0px;
  text-decoration: line-through rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body p {
  color: rgb(141, 145, 150);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(141, 145, 150) none 0px;
  text-decoration: rgb(141, 145, 150);
  text-decoration-color: rgb(141, 145, 150);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 175, 245);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  outline: rgb(0, 175, 245) none 0px;
  text-decoration: rgb(0, 175, 245);
  text-decoration-color: rgb(0, 175, 245);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(228, 129, 192);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration: rgb(228, 129, 192);
  text-decoration-color: rgb(228, 129, 192);
}

html body a.internal.broken {
  color: rgb(228, 129, 192);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration: rgb(228, 129, 192);
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
  background-color: rgb(46, 48, 53);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

html body ul > li {
  color: rgb(208, 209, 210);
}

html body ul.overflow {
  background-color: rgb(46, 48, 53);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(228, 129, 192);
  text-decoration: rgb(228, 129, 192);
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
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  padding-left: 8px;
  padding-right: 4px;
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 145, 150);
  text-decoration: line-through rgb(141, 145, 150);
  text-decoration-color: rgb(141, 145, 150);
}

html body input[type=checkbox] {
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
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
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
  text-decoration: rgb(208, 209, 210);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
  text-decoration: rgb(208, 209, 210);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(208, 209, 210);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(141, 145, 150);
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
  text-decoration: rgb(141, 145, 150);
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
  text-decoration: rgb(141, 145, 150);
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
  text-decoration: rgb(141, 145, 150);
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
  text-decoration: underline dotted rgb(208, 209, 210);
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
}`,
  },
  light: {},
};
