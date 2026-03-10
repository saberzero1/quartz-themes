import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "suddha",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["monaco", "roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-d: 85% !important;
  --accent-h-o: 50 !important;
  --background-match-highlight: rgba(143, 119, 197, 0.2) !important;
  --background-modifier-accent: rgb(169, 135, 247) !important;
  --background-modifier-border: rgb(38, 38, 38) !important;
  --background-modifier-border-focus: rgb(77, 77, 77) !important;
  --background-modifier-border-hover: rgb(51, 51, 51) !important;
  --background-primary: rgb(15, 15, 15) !important;
  --background-primary-alt: rgb(18, 18, 18) !important;
  --background-secondary: rgb(26, 26, 26) !important;
  --background-secondary-alt: rgb(26, 26, 26) !important;
  --background-secondary-table: rgb(20, 20, 20) !important;
  --background-tertiary: rgb(36, 36, 36) !important;
  --background-translucent: rgba(26, 26, 26, 0.85) !important;
  --background-transparent: rgba(26, 26, 26, 0) !important;
  --base-d: 10% !important;
  --base-h: 0 !important;
  --base-l: 95% !important;
  --base-s: 0% !important;
  --bases-cards-background: rgb(15, 15, 15) !important;
  --bases-cards-cover-background: rgb(18, 18, 18) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(38, 38, 38) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(51, 51, 51) !important;
  --bases-embed-border-color: rgb(38, 38, 38) !important;
  --bases-group-heading-property-color: rgb(140, 140, 140) !important;
  --bases-table-border-color: rgb(38, 38, 38) !important;
  --bases-table-cell-background-active: rgb(15, 15, 15) !important;
  --bases-table-cell-background-disabled: rgb(18, 18, 18) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(77, 77, 77) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(203, 183, 250) !important;
  --bases-table-group-background: rgb(18, 18, 18) !important;
  --bases-table-header-background: rgb(15, 15, 15) !important;
  --bases-table-header-color: rgb(140, 140, 140) !important;
  --bases-table-summary-background: rgb(15, 15, 15) !important;
  --blockquote-border-color: rgb(203, 183, 250) !important;
  --button-background: rgb(38, 38, 38) !important;
  --button-background-active: rgb(102, 102, 102) !important;
  --buttons-fade-in-speed: filter 100ms ease-in-out !important;
  --buttons-fade-out-speed: filter 2000ms ease-in-out !important;
  --canvas-background: rgb(15, 15, 15) !important;
  --canvas-card-label-color: rgb(77, 77, 77) !important;
  --caret-color: rgb(204, 204, 204) !important;
  --checkbox-border-color: rgb(77, 77, 77) !important;
  --checkbox-border-color-hover: rgb(140, 140, 140) !important;
  --checkbox-color: rgb(203, 183, 250) !important;
  --checkbox-color-hover: rgb(238, 231, 253) !important;
  --checkbox-marker-color: rgb(15, 15, 15) !important;
  --checklist-done-color: rgb(140, 140, 140) !important;
  --code-background: rgb(18, 18, 18) !important;
  --code-border-color: rgb(38, 38, 38) !important;
  --code-comment: rgb(77, 77, 77) !important;
  --code-normal: rgb(204, 204, 204) !important;
  --code-punctuation: rgb(140, 140, 140) !important;
  --collapse-icon-color: rgb(77, 77, 77) !important;
  --collapse-icon-color-collapsed: rgb(203, 183, 250) !important;
  --color-accent: rgb(224, 82, 82) !important;
  --color-accent-bright: rgba(240, 168, 168, 0.9) !important;
  --color-accent-hover: rgb(232, 125, 125) !important;
  --color-accent-hover-invert: rgb(140, 140, 140) !important;
  --color-accent-shadow: rgba(232, 125, 125, 0.2) !important;
  --color-accent-shadow-more: rgba(232, 125, 125, 0.1) !important;
  --color-external: #4ed5ff !important;
  --dark: rgb(204, 204, 204) !important;
  --darkgray: rgb(204, 204, 204) !important;
  --divider-color: rgb(38, 38, 38) !important;
  --divider-color-hover: rgb(203, 183, 250) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(38, 38, 38), inset 0 0 0 1px rgb(38, 38, 38) !important;
  --embed-border-start: 2px solid rgb(203, 183, 250) !important;
  --file-header-background: rgb(15, 15, 15) !important;
  --file-header-background-focused: rgb(15, 15, 15) !important;
  --flair-color: rgb(204, 204, 204) !important;
  --footnote-divider-color: rgb(38, 38, 38) !important;
  --footnote-id-color: rgb(140, 140, 140) !important;
  --footnote-id-color-no-occurrences: rgb(77, 77, 77) !important;
  --graph-node: rgb(140, 140, 140) !important;
  --graph-node-focused: rgb(203, 183, 250) !important;
  --graph-node-unresolved: rgb(77, 77, 77) !important;
  --graph-text: rgb(204, 204, 204) !important;
  --gray: rgb(140, 140, 140) !important;
  --heading-formatting: rgb(77, 77, 77) !important;
  --highlight: rgba(168, 220, 250, 0.33) !important;
  --hr-color: rgb(38, 38, 38) !important;
  --icon-bright: brightness(140%) !important;
  --icon-color: rgb(140, 140, 140) !important;
  --icon-color-active: rgb(203, 183, 250) !important;
  --icon-color-focused: rgb(204, 204, 204) !important;
  --icon-color-hover: rgb(140, 140, 140) !important;
  --icon-dark: brightness(90%) !important;
  --icon-normal: brightness(100%) !important;
  --input-date-separator: rgb(77, 77, 77) !important;
  --input-placeholder-color: rgb(77, 77, 77) !important;
  --interactive-accent: rgb(203, 183, 250) !important;
  --interactive-accent-hover: rgb(238, 231, 253) !important;
  --interactive-accent-rgb: 66, 66, 66 !important;
  --light: rgb(15, 15, 15) !important;
  --lightgray: rgb(26, 26, 26) !important;
  --line-shadow: rgb(31, 31, 31) !important;
  --line-width: 800px !important;
  --link-color: rgb(203, 183, 250) !important;
  --link-color-hover: rgb(238, 231, 253) !important;
  --link-external-color: rgb(203, 183, 250) !important;
  --link-external-color-hover: rgb(238, 231, 253) !important;
  --link-unresolved-color: rgb(203, 183, 250) !important;
  --list-marker-color: rgb(77, 77, 77) !important;
  --list-marker-color-collapsed: rgb(203, 183, 250) !important;
  --list-marker-color-hover: rgb(140, 140, 140) !important;
  --main-accent-d: 60% !important;
  --main-accent-h: 360 !important;
  --main-accent-l: 10% !important;
  --main-accent-s: 70% !important;
  --max-width: 100% !important;
  --menu-background: rgb(26, 26, 26) !important;
  --menu-border-color: rgb(51, 51, 51) !important;
  --metadata-border-color: rgb(38, 38, 38) !important;
  --metadata-divider-color: rgb(38, 38, 38) !important;
  --metadata-input-text-color: rgb(204, 204, 204) !important;
  --metadata-label-text-color: rgb(140, 140, 140) !important;
  --metadata-label-text-color-hover: rgb(140, 140, 140) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(77, 77, 77) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(51, 51, 51) !important;
  --modal-background: rgb(15, 15, 15) !important;
  --nav-collapse-icon-color: rgb(77, 77, 77) !important;
  --nav-collapse-icon-color-collapsed: rgb(77, 77, 77) !important;
  --nav-heading-color: rgb(204, 204, 204) !important;
  --nav-heading-color-collapsed: rgb(77, 77, 77) !important;
  --nav-heading-color-collapsed-hover: rgb(140, 140, 140) !important;
  --nav-heading-color-hover: rgb(204, 204, 204) !important;
  --nav-item-color: rgb(140, 140, 140) !important;
  --nav-item-color-active: rgb(204, 204, 204) !important;
  --nav-item-color-highlighted: rgb(203, 183, 250) !important;
  --nav-item-color-hover: rgb(204, 204, 204) !important;
  --nav-item-color-selected: rgb(204, 204, 204) !important;
  --nav-tag-color: rgb(77, 77, 77) !important;
  --nav-tag-color-active: rgb(140, 140, 140) !important;
  --nav-tag-color-hover: rgb(140, 140, 140) !important;
  --normal-weight: 300 !important;
  --pdf-background: rgb(15, 15, 15) !important;
  --pdf-page-background: rgb(15, 15, 15) !important;
  --pdf-shadow: 0 0 0 1px rgb(38, 38, 38) !important;
  --pdf-sidebar-background: rgb(15, 15, 15) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(38, 38, 38) !important;
  --pill-border-color: rgb(38, 38, 38) !important;
  --pill-border-color-hover: rgb(51, 51, 51) !important;
  --pill-color: rgb(140, 140, 140) !important;
  --pill-color-hover: rgb(204, 204, 204) !important;
  --pill-color-remove: rgb(77, 77, 77) !important;
  --pill-color-remove-hover: rgb(203, 183, 250) !important;
  --prompt-background: rgb(15, 15, 15) !important;
  --quote-opening-modifier: rgb(64, 64, 64) !important;
  --ribbon-background: rgb(26, 26, 26) !important;
  --ribbon-background-collapsed: rgb(15, 15, 15) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1) !important;
  --search-clear-button-color: rgb(140, 140, 140) !important;
  --search-icon-color: rgb(140, 140, 140) !important;
  --search-result-background: rgb(15, 15, 15) !important;
  --secondary: rgb(203, 183, 250) !important;
  --setting-group-heading-color: rgb(204, 204, 204) !important;
  --setting-items-background: rgb(18, 18, 18) !important;
  --setting-items-border-color: rgb(38, 38, 38) !important;
  --slider-thumb-border-color: rgb(51, 51, 51) !important;
  --slider-track-background: rgb(38, 38, 38) !important;
  --status-bar-background: rgb(26, 26, 26) !important;
  --status-bar-border-color: rgb(38, 38, 38) !important;
  --status-bar-text-color: rgb(140, 140, 140) !important;
  --suggestion-background: rgb(15, 15, 15) !important;
  --tab-background-active: rgb(15, 15, 15) !important;
  --tab-container-background: rgb(26, 26, 26) !important;
  --tab-divider-color: rgb(51, 51, 51) !important;
  --tab-outline-color: rgb(38, 38, 38) !important;
  --tab-switcher-background: rgb(26, 26, 26) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(26, 26, 26), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(224, 82, 82) !important;
  --tab-text-color: rgb(77, 77, 77) !important;
  --tab-text-color-active: rgb(140, 140, 140) !important;
  --tab-text-color-focused: rgb(140, 140, 140) !important;
  --tab-text-color-focused-active: rgb(140, 140, 140) !important;
  --tab-text-color-focused-active-current: rgb(204, 204, 204) !important;
  --tab-text-color-focused-highlighted: rgb(203, 183, 250) !important;
  --table-add-button-border-color: rgb(38, 38, 38) !important;
  --table-border-color: rgb(38, 38, 38) !important;
  --table-drag-handle-background-active: rgb(203, 183, 250) !important;
  --table-drag-handle-color: rgb(77, 77, 77) !important;
  --table-header-border-color: rgb(38, 38, 38) !important;
  --table-header-color: rgb(204, 204, 204) !important;
  --table-selection-border-color: rgb(203, 183, 250) !important;
  --tag-color: rgb(203, 183, 250) !important;
  --tag-color-hover: rgb(203, 183, 250) !important;
  --tags-fade-in-speed: 100ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tags-fade-out-speed: 2000ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tertiary: rgb(238, 231, 253) !important;
  --text: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,'m1+ 1p' !important;
  --text-accent: rgb(203, 183, 250) !important;
  --text-accent-hover: rgb(238, 231, 253) !important;
  --text-editor: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", 'm1+ 1p' !important;
  --text-faint: rgb(77, 77, 77) !important;
  --text-highlight-bg: rgba(168, 220, 250, 0.33) !important;
  --text-muted: rgb(140, 140, 140) !important;
  --text-normal: rgb(204, 204, 204) !important;
  --text-selection: rgb(50, 50, 50) !important;
  --text-shadow: rgb(33, 33, 33) !important;
  --textHighlight: rgba(168, 220, 250, 0.33) !important;
  --titlebar-background: rgb(26, 26, 26) !important;
  --titlebar-background-focused: rgb(26, 26, 26) !important;
  --titlebar-border-color: rgb(38, 38, 38) !important;
  --titlebar-text-color: rgb(140, 140, 140) !important;
  --titlebar-text-color-focused: rgb(204, 204, 204) !important;
  --translucency: 0.95 !important;
  --vault-profile-color: rgb(204, 204, 204) !important;
  --vault-profile-color-hover: rgb(204, 204, 204) !important;
  --view-width: 95% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: rgb(38, 38, 38);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(15, 15, 15);
  color: rgb(204, 204, 204);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(204, 204, 204);
  font-weight: 300;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(204, 204, 204);
  font-weight: 300;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 251, 104, 0.06);
  color: rgb(255, 252, 125);
  font-weight: 300;
  outline: rgb(255, 252, 125) none 0px;
  text-decoration: rgb(255, 252, 125);
  text-decoration-color: rgb(255, 252, 125);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 204, 204);
  font-weight: 300;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body p {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  outline: rgb(140, 140, 140) none 0px;
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(240, 168, 168, 0.9);
  outline: rgba(240, 168, 168, 0.9) none 0px;
  text-decoration: rgba(240, 168, 168, 0.9);
  text-decoration-color: rgba(240, 168, 168, 0.9);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(169, 135, 247);
  font-weight: 300;
  outline: rgb(169, 135, 247) none 0px;
  text-decoration: rgb(169, 135, 247);
  text-decoration-color: rgb(169, 135, 247);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(77, 77, 77);
  filter: brightness(1.2);
  font-weight: 300;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 14.08px;
  margin-top: 14.08px;
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 204, 204);
  font-weight: 150;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 204, 204);
  text-align: left;
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 204, 204);
  text-align: left;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

html[saved-theme="dark"] body blockquote {
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 204, 204);
  margin-top: 30px;
  width: 725.797px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
  font-weight: 150;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: left;
}

html[saved-theme="dark"] body th {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(204, 204, 204);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: center;
}

html[saved-theme="dark"] body thead {
  background-color: rgb(26, 26, 26);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 204, 204);
  text-align: justify;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  text-align: justify;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  filter: opacity(1);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(203, 183, 250);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(203, 183, 250);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(224, 82, 82);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(224, 82, 82);
  border-right-color: rgb(224, 82, 82);
  border-top-color: rgb(224, 82, 82);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  margin-right: 15px;
  width: 10px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body ul > li.task-list-item {
  text-align: left;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  font-weight: 150;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
  font-weight: 150;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(63, 63, 63);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(38, 38, 38);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 24.64px;
  border-bottom-right-radius: 24.64px;
  border-top-left-radius: 24.64px;
  border-top-right-radius: 24.64px;
  font-weight: 150;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(203, 183, 250);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h2 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h3 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h4 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h5 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h6 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 15, 15);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(204, 204, 204);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 300;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgba(219, 219, 220, 0);
  border-left-color: rgba(219, 219, 220, 0);
  border-right-color: rgba(219, 219, 220, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(140, 140, 140);
  stroke: rgb(140, 140, 140);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(77, 77, 77);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(140, 140, 140);
  border-left-color: rgb(140, 140, 140);
  border-right-color: rgb(140, 140, 140);
  border-top-color: rgb(140, 140, 140);
  color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 38, 38);
  border-left-width: 1px;
  border-right-color: rgb(38, 38, 38);
  border-right-width: 1px;
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(204, 204, 204);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  padding-bottom: 5px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  font-size: 12.32px;
  padding-bottom: 1.232px;
  padding-left: 3.08px;
  padding-right: 3.08px;
  padding-top: 1.232px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 204, 204);
  font-size: 11.7333px;
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 204, 204);
  font-weight: 150;
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 204, 204);
  font-size: 11.7333px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 85% !important;
  --accent-h-o: 50 !important;
  --background-match-highlight: rgba(143, 119, 197, 0.2) !important;
  --background-modifier-accent: rgb(145, 102, 245) !important;
  --background-modifier-border: rgb(222, 222, 222) !important;
  --background-modifier-border-focus: rgb(191, 191, 191) !important;
  --background-modifier-border-hover: rgb(212, 212, 212) !important;
  --background-primary: rgb(230, 230, 230) !important;
  --background-primary-alt: rgb(237, 237, 237) !important;
  --background-secondary: rgb(242, 242, 242) !important;
  --background-secondary-alt: rgb(242, 242, 242) !important;
  --background-secondary-table: rgb(237, 237, 237) !important;
  --background-tertiary: rgb(212, 212, 212) !important;
  --background-translucent: rgba(242, 242, 242, 0.85) !important;
  --background-transparent: rgba(242, 242, 242, 0) !important;
  --base-d: 10% !important;
  --base-h: 0 !important;
  --base-l: 95% !important;
  --base-s: 0% !important;
  --bases-cards-background: rgb(230, 230, 230) !important;
  --bases-cards-cover-background: rgb(237, 237, 237) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(222, 222, 222) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(212, 212, 212) !important;
  --bases-embed-border-color: rgb(222, 222, 222) !important;
  --bases-group-heading-property-color: rgb(102, 102, 102) !important;
  --bases-table-border-color: rgb(222, 222, 222) !important;
  --bases-table-cell-background-active: rgb(230, 230, 230) !important;
  --bases-table-cell-background-disabled: rgb(237, 237, 237) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(191, 191, 191) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-group-background: rgb(237, 237, 237) !important;
  --bases-table-header-background: rgb(230, 230, 230) !important;
  --bases-table-header-color: rgb(102, 102, 102) !important;
  --bases-table-summary-background: rgb(230, 230, 230) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --blur-background: color-mix(in srgb, rgb(230, 230, 230) 65%, transparent) linear-gradient(rgb(230, 230, 230), color-mix(in srgb, rgb(230, 230, 230) 65%, transparent)) !important;
  --button-background: rgb(217, 217, 217) !important;
  --button-background-active: rgb(179, 179, 179) !important;
  --buttons-fade-in-speed: filter 100ms ease-in-out !important;
  --buttons-fade-out-speed: filter 2000ms ease-in-out !important;
  --canvas-background: rgb(230, 230, 230) !important;
  --canvas-card-label-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --caret-color: hsl(0,0%,-5%) !important;
  --checkbox-border-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --checkbox-border-color-hover: rgb(102, 102, 102) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(103, 44, 242) !important;
  --checkbox-marker-color: rgb(230, 230, 230) !important;
  --checklist-done-color: rgb(102, 102, 102) !important;
  --code-background: rgb(237, 237, 237) !important;
  --code-border-color: rgb(222, 222, 222) !important;
  --code-comment: hsl(0,0%,calc(95% - 3s5%)) !important;
  --code-normal: hsl(0,0%,-5%) !important;
  --code-punctuation: rgb(102, 102, 102) !important;
  --collapse-icon-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(224, 82, 82) !important;
  --color-accent-bright: hsla(360,70%,65%,1.9) !important;
  --color-accent-hover: rgb(227, 99, 99) !important;
  --color-accent-hover-invert: rgb(102, 102, 102) !important;
  --color-accent-shadow: rgba(232, 125, 125, 0.4) !important;
  --color-external: #389ebd !important;
  --dark: hsl(0,0%,-5%) !important;
  --darkgray: hsl(0,0%,-5%) !important;
  --divider-color: rgb(222, 222, 222) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(222, 222, 222), inset 0 0 0 1px rgb(222, 222, 222) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --file-header-background: rgb(230, 230, 230) !important;
  --file-header-background-focused: rgb(230, 230, 230) !important;
  --flair-color: hsl(0,0%,-5%) !important;
  --footnote-divider-color: rgb(222, 222, 222) !important;
  --footnote-id-color: rgb(102, 102, 102) !important;
  --footnote-id-color-no-occurrences: hsl(0,0%,calc(95% - 3s5%)) !important;
  --graph-node: rgb(102, 102, 102) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-node-unresolved: hsl(0,0%,calc(95% - 3s5%)) !important;
  --graph-text: hsl(0,0%,-5%) !important;
  --gray: rgb(102, 102, 102) !important;
  --heading-formatting: hsl(0,0%,calc(95% - 3s5%)) !important;
  --hr-color: rgb(222, 222, 222) !important;
  --icon-bright: brightness(20%) !important;
  --icon-color: rgb(102, 102, 102) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --icon-color-focused: hsl(0,0%,-5%) !important;
  --icon-color-hover: rgb(102, 102, 102) !important;
  --icon-dark: brightness(120%) !important;
  --icon-normal: brightness(100%) !important;
  --input-date-separator: hsl(0,0%,calc(95% - 3s5%)) !important;
  --input-placeholder-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: rgb(103, 44, 242) !important;
  --interactive-accent-rgb: 220, 220, 220 !important;
  --light: rgb(230, 230, 230) !important;
  --lightgray: rgb(242, 242, 242) !important;
  --line-shadow: rgb(204, 204, 204) !important;
  --line-width: 800px !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(103, 44, 242) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(103, 44, 242) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --list-marker-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --list-marker-color-hover: rgb(102, 102, 102) !important;
  --main-accent-d: 60% !important;
  --main-accent-h: 360 !important;
  --main-accent-l: 10% !important;
  --main-accent-s: 70% !important;
  --max-width: 100% !important;
  --menu-background: rgb(242, 242, 242) !important;
  --menu-border-color: rgb(212, 212, 212) !important;
  --metadata-border-color: rgb(222, 222, 222) !important;
  --metadata-divider-color: rgb(222, 222, 222) !important;
  --metadata-input-text-color: hsl(0,0%,-5%) !important;
  --metadata-label-text-color: rgb(102, 102, 102) !important;
  --metadata-label-text-color-hover: rgb(102, 102, 102) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(191, 191, 191) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(212, 212, 212) !important;
  --modal-background: rgb(230, 230, 230) !important;
  --nav-collapse-icon-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-collapse-icon-color-collapsed: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-heading-color: hsl(0,0%,-5%) !important;
  --nav-heading-color-collapsed: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-heading-color-collapsed-hover: rgb(102, 102, 102) !important;
  --nav-heading-color-hover: hsl(0,0%,-5%) !important;
  --nav-item-color: rgb(102, 102, 102) !important;
  --nav-item-color-active: hsl(0,0%,-5%) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --nav-item-color-hover: hsl(0,0%,-5%) !important;
  --nav-item-color-selected: hsl(0,0%,-5%) !important;
  --nav-tag-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-tag-color-active: rgb(102, 102, 102) !important;
  --nav-tag-color-hover: rgb(102, 102, 102) !important;
  --normal-weight: 300 !important;
  --pdf-background: rgb(230, 230, 230) !important;
  --pdf-page-background: rgb(230, 230, 230) !important;
  --pdf-sidebar-background: rgb(230, 230, 230) !important;
  --pill-border-color: rgb(222, 222, 222) !important;
  --pill-border-color-hover: rgb(212, 212, 212) !important;
  --pill-color: rgb(102, 102, 102) !important;
  --pill-color-hover: hsl(0,0%,-5%) !important;
  --pill-color-remove: hsl(0,0%,calc(95% - 3s5%)) !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --prompt-background: rgb(230, 230, 230) !important;
  --quote-opening-modifier: rgb(204, 204, 204) !important;
  --raised-background: color-mix(in srgb, rgb(230, 230, 230) 65%, transparent) linear-gradient(rgb(230, 230, 230), color-mix(in srgb, rgb(230, 230, 230) 65%, transparent)) !important;
  --ribbon-background: rgb(242, 242, 242) !important;
  --ribbon-background-collapsed: rgb(230, 230, 230) !important;
  --search-clear-button-color: rgb(102, 102, 102) !important;
  --search-icon-color: rgb(102, 102, 102) !important;
  --search-result-background: rgb(230, 230, 230) !important;
  --secondary: rgb(138, 92, 245) !important;
  --setting-group-heading-color: hsl(0,0%,-5%) !important;
  --setting-items-background: rgb(237, 237, 237) !important;
  --setting-items-border-color: rgb(222, 222, 222) !important;
  --slider-thumb-border-color: rgb(212, 212, 212) !important;
  --slider-track-background: rgb(222, 222, 222) !important;
  --status-bar-background: rgb(242, 242, 242) !important;
  --status-bar-border-color: rgb(222, 222, 222) !important;
  --status-bar-text-color: rgb(102, 102, 102) !important;
  --suggestion-background: rgb(230, 230, 230) !important;
  --tab-background-active: rgb(230, 230, 230) !important;
  --tab-container-background: rgb(242, 242, 242) !important;
  --tab-divider-color: rgb(212, 212, 212) !important;
  --tab-outline-color: rgb(222, 222, 222) !important;
  --tab-switcher-background: rgb(242, 242, 242) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(242, 242, 242), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(224, 82, 82) !important;
  --tab-text-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --tab-text-color-active: rgb(102, 102, 102) !important;
  --tab-text-color-focused: rgb(102, 102, 102) !important;
  --tab-text-color-focused-active: rgb(102, 102, 102) !important;
  --tab-text-color-focused-active-current: hsl(0,0%,-5%) !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-add-button-border-color: rgb(222, 222, 222) !important;
  --table-border-color: rgb(222, 222, 222) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-drag-handle-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --table-header-border-color: rgb(222, 222, 222) !important;
  --table-header-color: hsl(0,0%,-5%) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tags-fade-in-speed: 100ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tags-fade-out-speed: 2000ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tertiary: rgb(103, 44, 242) !important;
  --text: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,'m1+ 1p' !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(103, 44, 242) !important;
  --text-editor: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", 'm1+ 1p' !important;
  --text-faint: hsl(0,0%,calc(95% - 3s5%)) !important;
  --text-muted: rgb(102, 102, 102) !important;
  --text-normal: hsl(0,0%,-5%) !important;
  --text-selection: rgb(227, 227, 227) !important;
  --text-shadow: rgb(230, 230, 230) !important;
  --titlebar-background: rgb(242, 242, 242) !important;
  --titlebar-background-focused: rgb(242, 242, 242) !important;
  --titlebar-border-color: rgb(222, 222, 222) !important;
  --titlebar-text-color: rgb(102, 102, 102) !important;
  --titlebar-text-color-focused: hsl(0,0%,-5%) !important;
  --translucency: 0.85 !important;
  --vault-profile-color: hsl(0,0%,-5%) !important;
  --vault-profile-color-hover: hsl(0,0%,-5%) !important;
  --view-width: 95% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(230, 230, 230);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(222, 222, 222);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgb(222, 222, 222);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(230, 230, 230);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 251, 104, 0.32);
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(228, 103, 103);
  outline: rgb(228, 103, 103) none 0px;
  text-decoration: rgb(228, 103, 103);
  text-decoration-color: rgb(228, 103, 103);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 102, 245);
  font-weight: 300;
  outline: rgb(145, 102, 245) none 0px;
  text-decoration: rgb(145, 102, 245);
  text-decoration-color: rgb(145, 102, 245);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 0, 0);
  filter: opacity(0.3);
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dl {
  margin-bottom: 14.08px;
  margin-top: 14.08px;
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
  font-weight: 150;
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
  text-align: left;
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
  text-align: left;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body blockquote {
  padding-bottom: 1px;
  padding-top: 1px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  margin-top: 30px;
  width: 725.797px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  font-weight: 150;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: left;
}

html[saved-theme="light"] body th {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 2px;
  text-align: center;
}

html[saved-theme="light"] body thead {
  background-color: rgb(242, 242, 242);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  text-align: justify;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  text-align: justify;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  filter: opacity(0.95);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(224, 82, 82);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(224, 82, 82);
  border-right-color: rgb(224, 82, 82);
  border-top-color: rgb(224, 82, 82);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  margin-right: 15px;
  width: 10px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li.task-list-item {
  text-align: left;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 242, 242);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-weight: 150;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
  font-weight: 150;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(222, 222, 222);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 24.64px;
  border-bottom-right-radius: 24.64px;
  border-top-left-radius: 24.64px;
  border-top-right-radius: 24.64px;
  font-weight: 150;
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(0, 0, 0);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 300;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgba(219, 219, 220, 0);
  border-left-color: rgba(219, 219, 220, 0);
  border-right-color: rgba(219, 219, 220, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(102, 102, 102);
  text-decoration: rgb(102, 102, 102);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(102, 102, 102);
  stroke: rgb(102, 102, 102);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(102, 102, 102);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(222, 222, 222);
  border-left-width: 1px;
  border-right-color: rgb(222, 222, 222);
  border-right-width: 1px;
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  padding-bottom: 5px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-size: 12.32px;
  padding-bottom: 1.232px;
  padding-left: 3.08px;
  padding-right: 3.08px;
  padding-top: 1.232px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
  font-size: 11.7333px;
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
  font-weight: 150;
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
  font-size: 11.7333px;
}`,
  },
};
