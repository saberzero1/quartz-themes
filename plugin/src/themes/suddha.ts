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
  --background-match-highlight: hsla(258, 40%, 62%, 0.2) !important;
  --background-modifier-accent: hsl(258,88%,75%) !important;
  --background-modifier-border: hsl(0,0%,15%) !important;
  --background-modifier-border-focus: hsl(0,0%,30%) !important;
  --background-modifier-border-hover: hsl(0,0%,20%) !important;
  --background-primary: hsl(0,0%,6%) !important;
  --background-primary-alt: hsl(0,0%,7%) !important;
  --background-secondary: hsl(0,0%,10%) !important;
  --background-secondary-alt: hsl(0,0%,10%) !important;
  --background-secondary-table: hsl(0,0%,8%) !important;
  --background-tertiary: hsl(0,0%,14%) !important;
  --background-translucent: hsla(0,0%,10%,0.85) !important;
  --background-transparent: hsla(0,0%,10%,0) !important;
  --base-d: 10% !important;
  --base-h: 0 !important;
  --base-l: 95% !important;
  --base-s: 0% !important;
  --bases-cards-background: hsl(0,0%,6%) !important;
  --bases-cards-cover-background: hsl(0,0%,7%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0,0%,15%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0,0%,20%) !important;
  --bases-embed-border-color: hsl(0,0%,15%) !important;
  --bases-group-heading-property-color: hsl(0,0%,55%) !important;
  --bases-table-border-color: hsl(0,0%,15%) !important;
  --bases-table-cell-background-active: hsl(0,0%,6%) !important;
  --bases-table-cell-background-disabled: hsl(0,0%,7%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0,0%,30%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258,88%,85%) !important;
  --bases-table-group-background: hsl(0,0%,7%) !important;
  --bases-table-header-background: hsl(0,0%,6%) !important;
  --bases-table-header-color: hsl(0,0%,55%) !important;
  --bases-table-summary-background: hsl(0,0%,6%) !important;
  --blockquote-border-color: hsl(258,88%,85%) !important;
  --button-background: hsl(0,0%,15%) !important;
  --button-background-active: hsl(0,0%,40%) !important;
  --buttons-fade-in-speed: filter 100ms ease-in-out !important;
  --buttons-fade-out-speed: filter 2000ms ease-in-out !important;
  --canvas-background: hsl(0,0%,6%) !important;
  --canvas-card-label-color: hsl(0,0%,30%) !important;
  --caret-color: hsl(0,0%,80%) !important;
  --checkbox-border-color: hsl(0,0%,30%) !important;
  --checkbox-border-color-hover: hsl(0,0%,55%) !important;
  --checkbox-color: hsl(258,88%,85%) !important;
  --checkbox-color-hover: hsl(258,88%,95%) !important;
  --checkbox-marker-color: hsl(0,0%,6%) !important;
  --checklist-done-color: hsl(0,0%,55%) !important;
  --code-background: hsl(0,0%,7%) !important;
  --code-border-color: hsl(0,0%,15%) !important;
  --code-comment: hsl(0,0%,30%) !important;
  --code-normal: hsl(0,0%,80%) !important;
  --code-punctuation: hsl(0,0%,55%) !important;
  --collapse-icon-color: hsl(0,0%,30%) !important;
  --collapse-icon-color-collapsed: hsl(258,88%,85%) !important;
  --color-accent: hsl(360,70%,60%) !important;
  --color-accent-bright: hsla(360,70%,80%,0.9) !important;
  --color-accent-hover: hsl(360,70%,70%) !important;
  --color-accent-hover-invert: hsl(0,0%,55%) !important;
  --color-accent-shadow: hsla(360,70%,70%,0.2) !important;
  --color-accent-shadow-more: hsla(360,70%,70%,0.1) !important;
  --color-external: #4ed5ff !important;
  --dark: hsl(0,0%,80%) !important;
  --darkgray: hsl(0,0%,80%) !important;
  --divider-color: hsl(0,0%,15%) !important;
  --divider-color-hover: hsl(258,88%,85%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0,0%,15%), inset 0 0 0 1px hsl(0,0%,15%) !important;
  --embed-border-start: 2px solid hsl(258,88%,85%) !important;
  --file-header-background: hsl(0,0%,6%) !important;
  --file-header-background-focused: hsl(0,0%,6%) !important;
  --flair-color: hsl(0,0%,80%) !important;
  --footnote-divider-color: hsl(0,0%,15%) !important;
  --footnote-id-color: hsl(0,0%,55%) !important;
  --footnote-id-color-no-occurrences: hsl(0,0%,30%) !important;
  --graph-node: hsl(0,0%,55%) !important;
  --graph-node-focused: hsl(258,88%,85%) !important;
  --graph-node-unresolved: hsl(0,0%,30%) !important;
  --graph-text: hsl(0,0%,80%) !important;
  --gray: hsl(0,0%,55%) !important;
  --heading-formatting: hsl(0,0%,30%) !important;
  --highlight: rgba(168, 220, 250, 0.33) !important;
  --hr-color: hsl(0,0%,15%) !important;
  --icon-bright: brightness(140%) !important;
  --icon-color: hsl(0,0%,55%) !important;
  --icon-color-active: hsl(258,88%,85%) !important;
  --icon-color-focused: hsl(0,0%,80%) !important;
  --icon-color-hover: hsl(0,0%,55%) !important;
  --icon-dark: brightness(90%) !important;
  --icon-normal: brightness(100%) !important;
  --input-date-separator: hsl(0,0%,30%) !important;
  --input-placeholder-color: hsl(0,0%,30%) !important;
  --interactive-accent: hsl(258,88%,85%) !important;
  --interactive-accent-hover: hsl(258,88%,95%) !important;
  --interactive-accent-rgb: 66, 66, 66 !important;
  --light: hsl(0,0%,6%) !important;
  --lightgray: hsl(0,0%,10%) !important;
  --line-shadow: hsl(0,0%,12%) !important;
  --line-width: 800px !important;
  --link-color: hsl(258,88%,85%) !important;
  --link-color-hover: hsl(258,88%,95%) !important;
  --link-external-color: hsl(258,88%,85%) !important;
  --link-external-color-hover: hsl(258,88%,95%) !important;
  --link-unresolved-color: hsl(258,88%,85%) !important;
  --list-marker-color: hsl(0,0%,30%) !important;
  --list-marker-color-collapsed: hsl(258,88%,85%) !important;
  --list-marker-color-hover: hsl(0,0%,55%) !important;
  --main-accent-d: 60% !important;
  --main-accent-h: 360 !important;
  --main-accent-l: 10% !important;
  --main-accent-s: 70% !important;
  --max-width: 100% !important;
  --menu-background: hsl(0,0%,10%) !important;
  --menu-border-color: hsl(0,0%,20%) !important;
  --metadata-border-color: hsl(0,0%,15%) !important;
  --metadata-divider-color: hsl(0,0%,15%) !important;
  --metadata-input-text-color: hsl(0,0%,80%) !important;
  --metadata-label-text-color: hsl(0,0%,55%) !important;
  --metadata-label-text-color-hover: hsl(0,0%,55%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0,0%,30%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0,0%,20%) !important;
  --modal-background: hsl(0,0%,6%) !important;
  --nav-collapse-icon-color: hsl(0,0%,30%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0,0%,30%) !important;
  --nav-heading-color: hsl(0,0%,80%) !important;
  --nav-heading-color-collapsed: hsl(0,0%,30%) !important;
  --nav-heading-color-collapsed-hover: hsl(0,0%,55%) !important;
  --nav-heading-color-hover: hsl(0,0%,80%) !important;
  --nav-item-color: hsl(0,0%,55%) !important;
  --nav-item-color-active: hsl(0,0%,80%) !important;
  --nav-item-color-highlighted: hsl(258,88%,85%) !important;
  --nav-item-color-hover: hsl(0,0%,80%) !important;
  --nav-item-color-selected: hsl(0,0%,80%) !important;
  --nav-tag-color: hsl(0,0%,30%) !important;
  --nav-tag-color-active: hsl(0,0%,55%) !important;
  --nav-tag-color-hover: hsl(0,0%,55%) !important;
  --normal-weight: 300 !important;
  --pdf-background: hsl(0,0%,6%) !important;
  --pdf-page-background: hsl(0,0%,6%) !important;
  --pdf-shadow: 0 0 0 1px hsl(0,0%,15%) !important;
  --pdf-sidebar-background: hsl(0,0%,6%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(0,0%,15%) !important;
  --pill-border-color: hsl(0,0%,15%) !important;
  --pill-border-color-hover: hsl(0,0%,20%) !important;
  --pill-color: hsl(0,0%,55%) !important;
  --pill-color-hover: hsl(0,0%,80%) !important;
  --pill-color-remove: hsl(0,0%,30%) !important;
  --pill-color-remove-hover: hsl(258,88%,85%) !important;
  --prompt-background: hsl(0,0%,6%) !important;
  --quote-opening-modifier: hsl(0,0%,25%) !important;
  --ribbon-background: hsl(0,0%,10%) !important;
  --ribbon-background-collapsed: hsl(0,0%,6%) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1) !important;
  --search-clear-button-color: hsl(0,0%,55%) !important;
  --search-icon-color: hsl(0,0%,55%) !important;
  --search-result-background: hsl(0,0%,6%) !important;
  --secondary: hsl(258,88%,85%) !important;
  --setting-group-heading-color: hsl(0,0%,80%) !important;
  --setting-items-background: hsl(0,0%,7%) !important;
  --setting-items-border-color: hsl(0,0%,15%) !important;
  --slider-thumb-border-color: hsl(0,0%,20%) !important;
  --slider-track-background: hsl(0,0%,15%) !important;
  --status-bar-background: hsl(0,0%,10%) !important;
  --status-bar-border-color: hsl(0,0%,15%) !important;
  --status-bar-text-color: hsl(0,0%,55%) !important;
  --suggestion-background: hsl(0,0%,6%) !important;
  --tab-background-active: hsl(0,0%,6%) !important;
  --tab-container-background: hsl(0,0%,10%) !important;
  --tab-divider-color: hsl(0,0%,20%) !important;
  --tab-outline-color: hsl(0,0%,15%) !important;
  --tab-switcher-background: hsl(0,0%,10%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0,0%,10%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(360,70%,60%) !important;
  --tab-text-color: hsl(0,0%,30%) !important;
  --tab-text-color-active: hsl(0,0%,55%) !important;
  --tab-text-color-focused: hsl(0,0%,55%) !important;
  --tab-text-color-focused-active: hsl(0,0%,55%) !important;
  --tab-text-color-focused-active-current: hsl(0,0%,80%) !important;
  --tab-text-color-focused-highlighted: hsl(258,88%,85%) !important;
  --table-add-button-border-color: hsl(0,0%,15%) !important;
  --table-border-color: hsl(0,0%,15%) !important;
  --table-drag-handle-background-active: hsl(258,88%,85%) !important;
  --table-drag-handle-color: hsl(0,0%,30%) !important;
  --table-header-border-color: hsl(0,0%,15%) !important;
  --table-header-color: hsl(0,0%,80%) !important;
  --table-selection-border-color: hsl(258,88%,85%) !important;
  --tag-color: hsl(258,88%,85%) !important;
  --tag-color-hover: hsl(258,88%,85%) !important;
  --tags-fade-in-speed: 100ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tags-fade-out-speed: 2000ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tertiary: hsl(258,88%,95%) !important;
  --text: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,'m1+ 1p' !important;
  --text-accent: hsl(258,88%,85%) !important;
  --text-accent-hover: hsl(258,88%,95%) !important;
  --text-editor: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", 'm1+ 1p' !important;
  --text-faint: hsl(0,0%,30%) !important;
  --text-highlight-bg: rgba(168, 220, 250, 0.33) !important;
  --text-muted: hsl(0,0%,55%) !important;
  --text-normal: hsl(0,0%,80%) !important;
  --text-selection: rgb(50, 50, 50) !important;
  --text-shadow: hsl(0,0%,13%) !important;
  --textHighlight: rgba(168, 220, 250, 0.33) !important;
  --titlebar-background: hsl(0,0%,10%) !important;
  --titlebar-background-focused: hsl(0,0%,10%) !important;
  --titlebar-border-color: hsl(0,0%,15%) !important;
  --titlebar-text-color: hsl(0,0%,55%) !important;
  --titlebar-text-color-focused: hsl(0,0%,80%) !important;
  --translucency: 0.95 !important;
  --vault-profile-color: hsl(0,0%,80%) !important;
  --vault-profile-color-hover: hsl(0,0%,80%) !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(26, 26, 26);
  border-color: rgb(38, 38, 38);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(26, 26, 26);
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(140, 140, 140);
  font-weight: 150;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 24.64px;
  color: rgb(203, 183, 250);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(140, 140, 140);
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
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(204, 204, 204);
  font-weight: 150;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(204, 204, 204);
  font-weight: 150;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 251, 104, 0.06);
  color: rgb(255, 252, 125);
  font-weight: 150;
  outline: rgb(255, 252, 125) none 0px;
  text-decoration-color: rgb(255, 252, 125);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 204, 204);
  font-weight: 150;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 204, 204);
  font-size: 12px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(224, 82, 82);
  border-radius: 20%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  outline: rgb(140, 140, 140) none 0px;
  text-decoration-color: rgb(140, 140, 140);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(240, 168, 168, 0.9);
  outline: rgba(240, 168, 168, 0.9) none 0px;
  text-decoration-color: rgba(240, 168, 168, 0.9);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(169, 135, 247);
  font-weight: 300;
  outline: rgb(169, 135, 247) none 0px;
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
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(77, 77, 77);
  text-decoration: line-through;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body ul > li.task-list-item {
  text-align: left;
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
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(140, 140, 140);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.depth-0 {
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
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 21.56px;
  border-bottom-right-radius: 21.56px;
  border-top-left-radius: 21.56px;
  border-top-right-radius: 21.56px;
  color: rgb(203, 183, 250);
}`,
  },
  light: {
    base: `:root:root {
  --accent-d: 85% !important;
  --accent-h-o: 50 !important;
  --background-match-highlight: hsla(258, 40%, 62%, 0.2) !important;
  --background-modifier-accent: hsl(258,88%,68%) !important;
  --background-modifier-border: hsl(0,0%,87%) !important;
  --background-modifier-border-focus: hsl(0,0%,75%) !important;
  --background-modifier-border-hover: hsl(0,0%,83%) !important;
  --background-primary: hsl(0,0%,90%) !important;
  --background-primary-alt: hsl(0,0%,93%) !important;
  --background-secondary: hsl(0,0%,95%) !important;
  --background-secondary-alt: hsl(0,0%,95%) !important;
  --background-secondary-table: hsl(0,0%,93%) !important;
  --background-tertiary: hsl(0,0%,83%) !important;
  --background-translucent: hsla(0,0%,95%,0.85) !important;
  --background-transparent: hsla(0,0%,95%,0) !important;
  --base-d: 10% !important;
  --base-h: 0 !important;
  --base-l: 95% !important;
  --base-s: 0% !important;
  --bases-cards-background: hsl(0,0%,90%) !important;
  --bases-cards-cover-background: hsl(0,0%,93%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0,0%,87%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0,0%,83%) !important;
  --bases-embed-border-color: hsl(0,0%,87%) !important;
  --bases-group-heading-property-color: hsl(0,0%,40%) !important;
  --bases-table-border-color: hsl(0,0%,87%) !important;
  --bases-table-cell-background-active: hsl(0,0%,90%) !important;
  --bases-table-cell-background-disabled: hsl(0,0%,93%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0,0%,75%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258,88%,66%) !important;
  --bases-table-group-background: hsl(0,0%,93%) !important;
  --bases-table-header-background: hsl(0,0%,90%) !important;
  --bases-table-header-color: hsl(0,0%,40%) !important;
  --bases-table-summary-background: hsl(0,0%,90%) !important;
  --blockquote-border-color: hsl(258,88%,66%) !important;
  --blur-background: color-mix(in srgb, hsl(0,0%,90%) 65%, transparent) linear-gradient(hsl(0,0%,90%), color-mix(in srgb, hsl(0,0%,90%) 65%, transparent)) !important;
  --button-background: hsl(0,0%,85%) !important;
  --button-background-active: hsl(0,0%,70%) !important;
  --buttons-fade-in-speed: filter 100ms ease-in-out !important;
  --buttons-fade-out-speed: filter 2000ms ease-in-out !important;
  --canvas-background: hsl(0,0%,90%) !important;
  --canvas-card-label-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --caret-color: hsl(0,0%,-5%) !important;
  --checkbox-border-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --checkbox-border-color-hover: hsl(0,0%,40%) !important;
  --checkbox-color: hsl(258,88%,66%) !important;
  --checkbox-color-hover: hsl(258,88%,56%) !important;
  --checkbox-marker-color: hsl(0,0%,90%) !important;
  --checklist-done-color: hsl(0,0%,40%) !important;
  --code-background: hsl(0,0%,93%) !important;
  --code-border-color: hsl(0,0%,87%) !important;
  --code-comment: hsl(0,0%,calc(95% - 3s5%)) !important;
  --code-normal: hsl(0,0%,-5%) !important;
  --code-punctuation: hsl(0,0%,40%) !important;
  --collapse-icon-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --collapse-icon-color-collapsed: hsl(258,88%,66%) !important;
  --color-accent: hsl(360,70%,60%) !important;
  --color-accent-bright: hsla(360,70%,65%,1.9) !important;
  --color-accent-hover: hsl(360,70%,64%) !important;
  --color-accent-hover-invert: hsl(0,0%,40%) !important;
  --color-accent-shadow: hsla(360,70%,70%,0.4) !important;
  --color-external: #389ebd !important;
  --dark: hsl(0,0%,-5%) !important;
  --darkgray: hsl(0,0%,-5%) !important;
  --divider-color: hsl(0,0%,87%) !important;
  --divider-color-hover: hsl(258,88%,66%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0,0%,87%), inset 0 0 0 1px hsl(0,0%,87%) !important;
  --embed-border-start: 2px solid hsl(258,88%,66%) !important;
  --file-header-background: hsl(0,0%,90%) !important;
  --file-header-background-focused: hsl(0,0%,90%) !important;
  --flair-color: hsl(0,0%,-5%) !important;
  --footnote-divider-color: hsl(0,0%,87%) !important;
  --footnote-id-color: hsl(0,0%,40%) !important;
  --footnote-id-color-no-occurrences: hsl(0,0%,calc(95% - 3s5%)) !important;
  --graph-node: hsl(0,0%,40%) !important;
  --graph-node-focused: hsl(258,88%,66%) !important;
  --graph-node-unresolved: hsl(0,0%,calc(95% - 3s5%)) !important;
  --graph-text: hsl(0,0%,-5%) !important;
  --gray: hsl(0,0%,40%) !important;
  --heading-formatting: hsl(0,0%,calc(95% - 3s5%)) !important;
  --hr-color: hsl(0,0%,87%) !important;
  --icon-bright: brightness(20%) !important;
  --icon-color: hsl(0,0%,40%) !important;
  --icon-color-active: hsl(258,88%,66%) !important;
  --icon-color-focused: hsl(0,0%,-5%) !important;
  --icon-color-hover: hsl(0,0%,40%) !important;
  --icon-dark: brightness(120%) !important;
  --icon-normal: brightness(100%) !important;
  --input-date-separator: hsl(0,0%,calc(95% - 3s5%)) !important;
  --input-placeholder-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --interactive-accent: hsl(258,88%,66%) !important;
  --interactive-accent-hover: hsl(258,88%,56%) !important;
  --interactive-accent-rgb: 220, 220, 220 !important;
  --light: hsl(0,0%,90%) !important;
  --lightgray: hsl(0,0%,95%) !important;
  --line-shadow: hsl(0,0%,80%) !important;
  --line-width: 800px !important;
  --link-color: hsl(258,88%,66%) !important;
  --link-color-hover: hsl(258,88%,56%) !important;
  --link-external-color: hsl(258,88%,66%) !important;
  --link-external-color-hover: hsl(258,88%,56%) !important;
  --link-unresolved-color: hsl(258,88%,66%) !important;
  --list-marker-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --list-marker-color-collapsed: hsl(258,88%,66%) !important;
  --list-marker-color-hover: hsl(0,0%,40%) !important;
  --main-accent-d: 60% !important;
  --main-accent-h: 360 !important;
  --main-accent-l: 10% !important;
  --main-accent-s: 70% !important;
  --max-width: 100% !important;
  --menu-background: hsl(0,0%,95%) !important;
  --menu-border-color: hsl(0,0%,83%) !important;
  --metadata-border-color: hsl(0,0%,87%) !important;
  --metadata-divider-color: hsl(0,0%,87%) !important;
  --metadata-input-text-color: hsl(0,0%,-5%) !important;
  --metadata-label-text-color: hsl(0,0%,40%) !important;
  --metadata-label-text-color-hover: hsl(0,0%,40%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0,0%,75%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0,0%,83%) !important;
  --modal-background: hsl(0,0%,90%) !important;
  --nav-collapse-icon-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-collapse-icon-color-collapsed: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-heading-color: hsl(0,0%,-5%) !important;
  --nav-heading-color-collapsed: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-heading-color-collapsed-hover: hsl(0,0%,40%) !important;
  --nav-heading-color-hover: hsl(0,0%,-5%) !important;
  --nav-item-color: hsl(0,0%,40%) !important;
  --nav-item-color-active: hsl(0,0%,-5%) !important;
  --nav-item-color-highlighted: hsl(258,88%,66%) !important;
  --nav-item-color-hover: hsl(0,0%,-5%) !important;
  --nav-item-color-selected: hsl(0,0%,-5%) !important;
  --nav-tag-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --nav-tag-color-active: hsl(0,0%,40%) !important;
  --nav-tag-color-hover: hsl(0,0%,40%) !important;
  --normal-weight: 300 !important;
  --pdf-background: hsl(0,0%,90%) !important;
  --pdf-page-background: hsl(0,0%,90%) !important;
  --pdf-sidebar-background: hsl(0,0%,90%) !important;
  --pill-border-color: hsl(0,0%,87%) !important;
  --pill-border-color-hover: hsl(0,0%,83%) !important;
  --pill-color: hsl(0,0%,40%) !important;
  --pill-color-hover: hsl(0,0%,-5%) !important;
  --pill-color-remove: hsl(0,0%,calc(95% - 3s5%)) !important;
  --pill-color-remove-hover: hsl(258,88%,66%) !important;
  --prompt-background: hsl(0,0%,90%) !important;
  --quote-opening-modifier: hsl(0,0%,80%) !important;
  --raised-background: color-mix(in srgb, hsl(0,0%,90%) 65%, transparent) linear-gradient(hsl(0,0%,90%), color-mix(in srgb, hsl(0,0%,90%) 65%, transparent)) !important;
  --ribbon-background: hsl(0,0%,95%) !important;
  --ribbon-background-collapsed: hsl(0,0%,90%) !important;
  --search-clear-button-color: hsl(0,0%,40%) !important;
  --search-icon-color: hsl(0,0%,40%) !important;
  --search-result-background: hsl(0,0%,90%) !important;
  --secondary: hsl(258,88%,66%) !important;
  --setting-group-heading-color: hsl(0,0%,-5%) !important;
  --setting-items-background: hsl(0,0%,93%) !important;
  --setting-items-border-color: hsl(0,0%,87%) !important;
  --slider-thumb-border-color: hsl(0,0%,83%) !important;
  --slider-track-background: hsl(0,0%,87%) !important;
  --status-bar-background: hsl(0,0%,95%) !important;
  --status-bar-border-color: hsl(0,0%,87%) !important;
  --status-bar-text-color: hsl(0,0%,40%) !important;
  --suggestion-background: hsl(0,0%,90%) !important;
  --tab-background-active: hsl(0,0%,90%) !important;
  --tab-container-background: hsl(0,0%,95%) !important;
  --tab-divider-color: hsl(0,0%,83%) !important;
  --tab-outline-color: hsl(0,0%,87%) !important;
  --tab-switcher-background: hsl(0,0%,95%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0,0%,95%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(360,70%,60%) !important;
  --tab-text-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --tab-text-color-active: hsl(0,0%,40%) !important;
  --tab-text-color-focused: hsl(0,0%,40%) !important;
  --tab-text-color-focused-active: hsl(0,0%,40%) !important;
  --tab-text-color-focused-active-current: hsl(0,0%,-5%) !important;
  --tab-text-color-focused-highlighted: hsl(258,88%,66%) !important;
  --table-add-button-border-color: hsl(0,0%,87%) !important;
  --table-border-color: hsl(0,0%,87%) !important;
  --table-drag-handle-background-active: hsl(258,88%,66%) !important;
  --table-drag-handle-color: hsl(0,0%,calc(95% - 3s5%)) !important;
  --table-header-border-color: hsl(0,0%,87%) !important;
  --table-header-color: hsl(0,0%,-5%) !important;
  --table-selection-border-color: hsl(258,88%,66%) !important;
  --tag-color: hsl(258,88%,66%) !important;
  --tag-color-hover: hsl(258,88%,66%) !important;
  --tags-fade-in-speed: 100ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tags-fade-out-speed: 2000ms cubic-bezier(0.4, 0, 1, 1) !important;
  --tertiary: hsl(258,88%,56%) !important;
  --text: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,'m1+ 1p' !important;
  --text-accent: hsl(258,88%,66%) !important;
  --text-accent-hover: hsl(258,88%,56%) !important;
  --text-editor: system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", 'm1+ 1p' !important;
  --text-faint: hsl(0,0%,calc(95% - 3s5%)) !important;
  --text-muted: hsl(0,0%,40%) !important;
  --text-normal: hsl(0,0%,-5%) !important;
  --text-selection: hsl(0,0%,89%) !important;
  --text-shadow: hsl(0,0%,90%) !important;
  --titlebar-background: hsl(0,0%,95%) !important;
  --titlebar-background-focused: hsl(0,0%,95%) !important;
  --titlebar-border-color: hsl(0,0%,87%) !important;
  --titlebar-text-color: hsl(0,0%,40%) !important;
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

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(242, 242, 242);
  border-color: rgb(222, 222, 222);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(230, 230, 230);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(102, 102, 102);
  font-weight: 150;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 24.64px;
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(102, 102, 102);
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
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-weight: 150;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-weight: 150;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 251, 104, 0.32);
  color: rgb(0, 0, 0);
  font-weight: 150;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-weight: 150;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
  font-size: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(224, 82, 82);
  border-radius: 20%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(228, 103, 103);
  outline: rgb(228, 103, 103) none 0px;
  text-decoration-color: rgb(228, 103, 103);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 102, 245);
  font-weight: 300;
  outline: rgb(145, 102, 245) none 0px;
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
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li.task-list-item {
  text-align: left;
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(102, 102, 102);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "m1+ 1p";
  font-weight: 300;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.depth-0 {
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
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 21.56px;
  border-bottom-right-radius: 21.56px;
  border-top-left-radius: 21.56px;
  border-top-right-radius: 21.56px;
}`,
  },
};
