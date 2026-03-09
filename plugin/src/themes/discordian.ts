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
  --background-accent: rgb(80, 85, 94);
  --background-code: rgb(41, 44, 46);
  --background-code-border: rgb(41, 41, 41);
  --background-code-preview: rgb(41, 44, 46);
  --background-modifier-accent: rgba(255, 255, 255, 0.06);
  --background-modifier-active: rgba(80, 85, 94, 0.24);
  --background-modifier-border: rgb(33, 35, 38);
  --background-modifier-cover: rgb(54, 57, 63);
  --background-modifier-error: rgb(240, 71, 71);
  --background-modifier-error-hover: rgb(216, 65, 65);
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-hover: rgba(80, 85, 94, 0.16);
  --background-modifier-selected: rgba(80, 85, 94, 0.32);
  --background-primary: #2E3035;
  --background-primary-alt: rgb(68, 71, 90);
  --background-secondary: #2B2D31;
  --background-secondary-alt: rgb(33, 35, 38);
  --background-tertiary: #1E1F22;
  --bases-cards-background: #2E3035;
  --bases-cards-cover-background: rgb(68, 71, 90);
  --bases-cards-shadow: 0 0 0 1px rgb(33, 35, 38);
  --bases-embed-border-color: rgb(33, 35, 38);
  --bases-group-heading-property-color: rgb(141, 145, 150);
  --bases-table-border-color: rgb(33, 35, 38);
  --bases-table-cell-background-active: #2E3035;
  --bases-table-cell-background-disabled: rgb(68, 71, 90);
  --bases-table-group-background: rgb(68, 71, 90);
  --bases-table-header-background: #2E3035;
  --bases-table-header-background-hover: rgba(80, 85, 94, 0.16);
  --bases-table-header-color: rgb(141, 145, 150);
  --bases-table-summary-background: #2E3035;
  --bases-table-summary-background-hover: rgba(80, 85, 94, 0.16);
  --blockquote-bg: rgba(5, 5, 6, 0.07);
  --blockquote-border: rgb(178, 149, 187);
  --canvas-background: #2E3035;
  --canvas-card-label-color: rgb(156, 156, 156);
  --caret-color: rgb(208, 209, 210);
  --checkbox-border-color: rgb(156, 156, 156);
  --checkbox-border-color-hover: rgb(141, 145, 150);
  --checkbox-marker-color: #2E3035;
  --checklist-done-color: rgb(141, 145, 150);
  --code-background: rgb(68, 71, 90);
  --code-border-color: rgb(33, 35, 38);
  --code-bracket-background: rgba(80, 85, 94, 0.16);
  --code-comment: rgb(156, 156, 156);
  --code-normal: rgb(208, 209, 210);
  --code-punctuation: rgb(141, 145, 150);
  --collapse-icon-color: rgb(156, 156, 156);
  --collapse-icon-color-collapsed: rgb(176, 136, 231);
  --default-font: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif;
  --discord-blue: rgb(114, 136, 218);
  --discord-blue-hover: rgb(104, 124, 196);
  --discord-dark: rgb(33, 35, 38);
  --discord-dark-hover: rgba(33, 35, 38, 0.7);
  --discord-green: rgb(67, 182, 131);
  --discord-grey: rgb(115, 126, 140);
  --discord-grey-hover: rgb(103, 113, 126);
  --discord-grey-toggle: rgb(114, 118, 126);
  --discord-orange: rgb(235, 98, 30);
  --discord-orange-light: rgb(245, 138, 66);
  --discord-red: rgb(240, 71, 71);
  --discord-red-hover: rgb(216, 65, 65);
  --discord-yellow: rgb(250, 168, 25);
  --discord-yellow-alt: rgb(222, 175, 99);
  --discord-yellow-bg: rgba(250, 168, 25, 0.1);
  --discord-yellow-light: rgb(174, 157, 71);
  --divider-color: rgb(33, 35, 38);
  --elevation-high: 0 8px 16px rgba(0, 0, 0, 0.24);
  --elevation-low: 0 1px 0 rgba(5, 5, 6, 0.2), 0 1.5px 0 rgba(7, 7, 8, 0.05), 0 2px 0 rgba(5, 5, 6, 0.05);
  --elevation-medium: 0 4px 4px rgba(0, 0, 0, 0.16);
  --elevation-stroke: 0 1px 0 1px rgba(5, 5, 6, 0.1);
  --embed-block-shadow-hover: 0 0 0 1px rgb(33, 35, 38), inset 0 0 0 1px rgb(33, 35, 38);
  --file-header-background: #2E3035;
  --file-header-background-focused: #2E3035;
  --file-header-font: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgb(208, 209, 210);
  --font-editor: Catamaran SSm, Helvetica Neue, Helvetica, Arial, sans-serif;
  --font-interface: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-size-file-explorer: 0.875rem;
  --font-size-notes: 1rem;
  --footnote-divider-color: rgb(33, 35, 38);
  --footnote-id-color: rgb(141, 145, 150);
  --footnote-id-color-no-occurrences: rgb(156, 156, 156);
  --footnote-input-background-active: rgba(80, 85, 94, 0.16);
  --graph-arrow: rgb(214, 107, 189);
  --graph-circle-fill: rgb(254, 250, 1);
  --graph-circle-fill-highlight: rgb(254, 250, 1);
  --graph-circle-fill-unresolved: rgb(115, 190, 247);
  --graph-circle-outline: transparent;
  --graph-fill-attachment: rgb(214, 107, 189);
  --graph-fill-tag: rgb(157, 138, 255);
  --graph-line: rgb(38, 121, 140);
  --graph-line-highlight: rgb(91, 188, 210);
  --graph-node: rgb(141, 145, 150);
  --graph-node-focused: rgb(176, 136, 231);
  --graph-node-unresolved: rgb(156, 156, 156);
  --graph-text: rgb(208, 209, 210);
  --heading-formatting: rgb(156, 156, 156);
  --hr-color: rgb(33, 35, 38);
  --icon-color: rgb(141, 145, 150);
  --icon-color-active: rgb(176, 136, 231);
  --icon-color-focused: rgb(208, 209, 210);
  --icon-color-hover: rgb(141, 145, 150);
  --input-date-separator: rgb(156, 156, 156);
  --input-placeholder-color: rgb(156, 156, 156);
  --letter-spacing-notes: -0.2px;
  --link-color: rgb(176, 136, 231);
  --link-decoration: none;
  --link-external-color: rgb(176, 136, 231);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(176, 136, 231);
  --list-marker-color: rgb(156, 156, 156);
  --list-marker-color-collapsed: rgb(176, 136, 231);
  --list-marker-color-hover: rgb(141, 145, 150);
  --markup-code: rgb(244, 167, 67);
  --menu-background: #2B2D31;
  --metadata-border-color: rgb(33, 35, 38);
  --metadata-divider-color: rgb(33, 35, 38);
  --metadata-input-background-active: rgba(80, 85, 94, 0.16);
  --metadata-input-font: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(208, 209, 210);
  --metadata-label-background-active: rgba(80, 85, 94, 0.16);
  --metadata-label-font: '??', '??', Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(141, 145, 150);
  --metadata-label-text-color-hover: rgb(141, 145, 150);
  --metadata-property-background-active: rgba(80, 85, 94, 0.16);
  --modal-background: #2E3035;
  --nav-collapse-icon-color: rgb(156, 156, 156);
  --nav-collapse-icon-color-collapsed: rgb(156, 156, 156);
  --nav-heading-color: rgb(208, 209, 210);
  --nav-heading-color-collapsed: rgb(156, 156, 156);
  --nav-heading-color-collapsed-hover: rgb(141, 145, 150);
  --nav-heading-color-hover: rgb(208, 209, 210);
  --nav-item-background-active: rgba(80, 85, 94, 0.16);
  --nav-item-background-hover: rgba(80, 85, 94, 0.16);
  --nav-item-color: rgb(141, 145, 150);
  --nav-item-color-active: rgb(208, 209, 210);
  --nav-item-color-highlighted: rgb(176, 136, 231);
  --nav-item-color-hover: rgb(208, 209, 210);
  --nav-item-color-selected: rgb(208, 209, 210);
  --nav-tag-color: rgb(156, 156, 156);
  --nav-tag-color-active: rgb(141, 145, 150);
  --nav-tag-color-hover: rgb(141, 145, 150);
  --opacity-translucency: 1;
  --pdf-background: #2E3035;
  --pdf-page-background: #2E3035;
  --pdf-shadow: 0 0 0 1px rgb(33, 35, 38);
  --pdf-sidebar-background: #2E3035;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(33, 35, 38);
  --pill-border-color: rgb(33, 35, 38);
  --pill-color: rgb(141, 145, 150);
  --pill-color-hover: rgb(208, 209, 210);
  --pill-color-remove: rgb(156, 156, 156);
  --pill-color-remove-hover: rgb(176, 136, 231);
  --prompt-background: #2E3035;
  --readable-line-length: 45rem;
  --ribbon-background: #2B2D31;
  --ribbon-background-collapsed: #2E3035;
  --scrollbar-auto-scrollbar-color-thumb: rgb(33, 35, 38);
  --scrollbar-auto-scrollbar-color-track: rgb(47, 49, 55);
  --scrollbar-auto-thumb: rgb(33, 35, 38);
  --scrollbar-auto-track: rgb(46, 51, 56);
  --scrollbar-bg: transparent;
  --scrollbar-thin-thumb: rgb(33, 35, 38);
  --scrollbar-thin-track: transparent;
  --search-clear-button-color: rgb(141, 145, 150);
  --search-icon-color: rgb(141, 145, 150);
  --search-result-background: #2E3035;
  --setting-group-heading-color: rgb(208, 209, 210);
  --setting-items-background: rgb(68, 71, 90);
  --setting-items-border-color: rgb(33, 35, 38);
  --slider-track-background: rgb(33, 35, 38);
  --status-bar-background: #2B2D31;
  --status-bar-border-color: rgb(33, 35, 38);
  --status-bar-text-color: rgb(141, 145, 150);
  --suggestion-background: #2E3035;
  --tab-background-active: #2E3035;
  --tab-container-background: #2B2D31;
  --tab-outline-color: rgb(33, 35, 38);
  --tab-switcher-background: #2B2D31;
  --tab-switcher-menubar-background: linear-gradient(to top, #2B2D31, transparent);
  --tab-text-color: rgb(156, 156, 156);
  --tab-text-color-active: rgb(141, 145, 150);
  --tab-text-color-focused: rgb(141, 145, 150);
  --tab-text-color-focused-active: rgb(141, 145, 150);
  --tab-text-color-focused-active-current: rgb(208, 209, 210);
  --tab-text-color-focused-highlighted: rgb(176, 136, 231);
  --table-add-button-border-color: rgb(33, 35, 38);
  --table-border-color: rgb(33, 35, 38);
  --table-drag-handle-color: rgb(156, 156, 156);
  --table-drag-handle-color-active: rgb(221, 222, 223);
  --table-header-border-color: rgb(33, 35, 38);
  --table-header-color: rgb(208, 209, 210);
  --tag-color: rgb(176, 136, 231);
  --tag-color-hover: rgb(176, 136, 231);
  --text-a: rgb(228, 129, 192);
  --text-a-hover: rgb(255, 138, 202);
  --text-accent: rgb(176, 136, 231);
  --text-em: rgb(184, 186, 125);
  --text-faint: rgb(156, 156, 156);
  --text-header: rgb(140, 149, 212);
  --text-highlight-bg: rgb(98, 135, 178);
  --text-linenumber: rgba(79, 81, 84, 0.85);
  --text-linenumber-active: rgba(156, 156, 156, 0.85);
  --text-link: rgb(0, 175, 245);
  --text-mark: rgb(243, 201, 134);
  --text-muted: rgb(141, 145, 150);
  --text-normal: rgb(208, 209, 210);
  --text-on-accent: rgb(221, 222, 223);
  --text-selection: rgba(98, 135, 178, 0.5);
  --text-strong: rgb(222, 175, 99);
  --text-tag: rgba(255, 151, 66, 0.73);
  --text-title-h1: rgb(138, 135, 197);
  --text-title-h2: rgb(140, 149, 212);
  --text-title-h3: rgb(140, 149, 212);
  --text-title-h4: rgb(140, 149, 212);
  --text-title-h5: rgb(140, 149, 212);
  --text-title-h6: rgb(120, 144, 151);
  --titlebar-background: #2B2D31;
  --titlebar-background-focused: rgb(33, 35, 38);
  --titlebar-border-color: rgb(33, 35, 38);
  --titlebar-text-color: rgb(141, 145, 150);
  --titlebar-text-color-focused: rgb(208, 209, 210);
  --vault-profile-color: rgb(208, 209, 210);
  --vault-profile-color-hover: rgb(208, 209, 210);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(43, 45, 49);
  color: rgb(208, 209, 210);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 48, 53);
  color: rgb(208, 209, 210);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(43, 45, 49);
  color: rgb(208, 209, 210);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(33, 35, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(43, 45, 49);
  border-left-color: rgb(33, 35, 38);
  color: rgb(208, 209, 210);
}

body div#quartz-root {
  background-color: rgb(46, 48, 53);
  color: rgb(208, 209, 210);
}`,
    typography: `body .page article p > b, b {
  color: rgb(222, 175, 99);
  outline: rgb(222, 175, 99) none 0px;
  text-decoration: rgb(222, 175, 99);
  text-decoration-color: rgb(222, 175, 99);
}

body .page article p > em, em {
  color: rgb(184, 186, 125);
  outline: rgb(184, 186, 125) none 0px;
  text-decoration: rgb(184, 186, 125);
  text-decoration-color: rgb(184, 186, 125);
}

body .page article p > i, i {
  color: rgb(184, 186, 125);
  outline: rgb(184, 186, 125) none 0px;
  text-decoration: rgb(184, 186, 125);
  text-decoration-color: rgb(184, 186, 125);
}

body .page article p > strong, strong {
  color: rgb(222, 175, 99);
  outline: rgb(222, 175, 99) none 0px;
  text-decoration: rgb(222, 175, 99);
  text-decoration-color: rgb(222, 175, 99);
}

body .text-highlight {
  background-color: rgb(98, 135, 178);
  color: rgb(208, 209, 210);
  outline: rgb(208, 209, 210) none 0px;
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body del {
  color: rgb(208, 209, 210);
  outline: rgb(208, 209, 210) none 0px;
  text-decoration: line-through rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body p {
  color: rgb(141, 145, 150);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(141, 145, 150) none 0px;
  text-decoration: rgb(141, 145, 150);
  text-decoration-color: rgb(141, 145, 150);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 175, 245);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  outline: rgb(0, 175, 245) none 0px;
  text-decoration: rgb(0, 175, 245);
  text-decoration-color: rgb(0, 175, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(228, 129, 192);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration: rgb(228, 129, 192);
  text-decoration-color: rgb(228, 129, 192);
}

body a.internal.broken {
  color: rgb(228, 129, 192);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(228, 129, 192) none 0px;
  text-decoration: rgb(228, 129, 192);
  text-decoration-color: rgb(228, 129, 192);
}`,
    lists: `body dd {
  color: rgb(208, 209, 210);
}

body dt {
  color: rgb(208, 209, 210);
}

body ol > li {
  color: rgb(208, 209, 210);
}

body ol.overflow {
  background-color: rgb(46, 48, 53);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body ul > li {
  color: rgb(208, 209, 210);
}

body ul.overflow {
  background-color: rgb(46, 48, 53);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(228, 129, 192);
  text-decoration: rgb(228, 129, 192);
}

body blockquote {
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body table {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 32px;
  width: 189.266px;
}

body td {
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

body th {
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

body thead {
  border-top-color: rgb(222, 175, 99);
  border-top-style: solid;
  border-top-width: 2px;
}

body tr {
  border-top-color: rgb(208, 209, 210);
}`,
    code: `body code {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  color: rgb(208, 209, 210);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body figcaption {
  color: rgb(208, 209, 210);
}

body figure {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body img {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body video {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}`,
    embeds: `body .file-embed {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
}

body .footnotes {
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

body .transclude {
  border-bottom-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  padding-left: 8px;
  padding-right: 4px;
}

body .transclude-inner {
  border-bottom-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  padding-left: 8px;
  padding-right: 4px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 145, 150);
  text-decoration: line-through rgb(141, 145, 150);
  text-decoration-color: rgb(141, 145, 150);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='*'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='-'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='/'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='>'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='?'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='I'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='S'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='b'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='c'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='d'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='f'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='i'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='k'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='l'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='p'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='u'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body li.task-list-item[data-task='w'] {
  color: rgb(208, 209, 210);
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(46, 48, 53);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > * {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(208, 209, 210) none 0px;
  text-decoration: rgb(208, 209, 210);
  text-decoration-color: rgb(208, 209, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(208, 209, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(208, 209, 210);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(208, 209, 210);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.8);
  color: rgb(208, 209, 210);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(138, 92, 245, 0.8);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(208, 209, 210);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(176, 136, 231);
}

body h1 {
  color: rgb(138, 135, 197);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h3 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(140, 149, 212);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(120, 144, 151);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 48, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 48, 53);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(208, 209, 210);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(208, 209, 210);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(141, 145, 150);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}`,
    footer: `body footer {
  background-color: rgb(43, 45, 49);
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  color: rgb(141, 145, 150);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body footer ul li a {
  color: rgb(141, 145, 150);
  text-decoration: rgb(141, 145, 150);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(208, 209, 210);
  font-family: Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(141, 145, 150);
  text-decoration: rgb(141, 145, 150);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body li.section-li > .section .meta {
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(141, 145, 150);
  text-decoration: rgb(141, 145, 150);
}

body ul.section-ul {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}

body .darkmode svg {
  color: rgb(141, 145, 150);
  stroke: rgb(141, 145, 150);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
}

body .breadcrumb-element p {
  color: rgb(156, 156, 156);
  font-family: "??", "??", Catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

body .metadata {
  border-bottom-color: rgb(33, 35, 38);
  border-left-color: rgb(33, 35, 38);
  border-right-color: rgb(33, 35, 38);
  border-top-color: rgb(33, 35, 38);
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(141, 145, 150);
  border-left-color: rgb(141, 145, 150);
  border-right-color: rgb(141, 145, 150);
  border-top-color: rgb(141, 145, 150);
  color: rgb(141, 145, 150);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(43, 45, 49);
}

body .page-header h2.page-title {
  color: rgb(208, 209, 210);
  font-family: "Catamaran SSm", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body abbr {
  color: rgb(208, 209, 210);
  text-decoration: underline dotted rgb(208, 209, 210);
}

body details {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body input[type=text] {
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

body kbd {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
  color: rgb(208, 209, 210);
}

body progress {
  border-bottom-color: rgb(208, 209, 210);
  border-left-color: rgb(208, 209, 210);
  border-right-color: rgb(208, 209, 210);
  border-top-color: rgb(208, 209, 210);
}

body sub {
  color: rgb(208, 209, 210);
}

body summary {
  color: rgb(208, 209, 210);
}

body sup {
  color: rgb(208, 209, 210);
}`,
  },
  light: {},
};
