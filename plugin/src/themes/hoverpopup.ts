import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hoverpopup",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --BBB: true !important;
  --background-modifier-border: rgb(from #5e6280 r g b / 0.1) !important;
  --background-modifier-border-focus: #a464fc !important;
  --background-modifier-error: #ff3d63 !important;
  --background-modifier-form-field: #101119 !important;
  --background-modifier-form-field-hover: #101119 !important;
  --background-modifier-hover: #a464fc !important;
  --background-primary: #101119 !important;
  --background-primary-alt: #232433 !important;
  --background-secondary: #232433 !important;
  --background-secondary-alt: #404359 !important;
  --bases-cards-background: #101119 !important;
  --bases-cards-cover-background: #232433 !important;
  --bases-cards-shadow: 0 0 0 1px rgb(from #5e6280 r g b / 0.1) !important;
  --bases-embed-border-color: rgb(from #5e6280 r g b / 0.1) !important;
  --bases-group-heading-property-color: #afb2c7 !important;
  --bases-table-border-color: rgb(from #a464fc r g b / 0.2) !important;
  --bases-table-cell-background-active: #101119 !important;
  --bases-table-cell-background-disabled: #232433 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #a464fc !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a464fc !important;
  --bases-table-group-background: #232433 !important;
  --bases-table-header-background: #101119 !important;
  --bases-table-header-background-hover: #a464fc !important;
  --bases-table-header-color: #afb2c7 !important;
  --bases-table-summary-background: #101119 !important;
  --bases-table-summary-background-hover: #a464fc !important;
  --blockquote-border-color: #6f74a1 !important;
  --blockquote-border-color-deep: #191b33 !important;
  --blockquote-border-width: 3px !important;
  --blockquote-color: #9198c7 !important;
  --blur-background: color-mix(in srgb, #232433 65%, transparent) linear-gradient(#232433, color-mix(in srgb, #232433 65%, transparent)) !important;
  --brightness-heading-1: 1.2 !important;
  --brightness-heading-2: 1.2 !important;
  --brightness-heading-3: 1.2 !important;
  --brightness-heading-4: 1.2 !important;
  --brightness-heading-5: 1.2 !important;
  --brightness-heading-6: 1.2 !important;
  --canvas-background: #101119 !important;
  --canvas-card-label-color: #ffc83d !important;
  --caret-color: #e0e0ff !important;
  --checkbox-border-color: #ff3d63 !important;
  --checkbox-border-color-hover: #ffc83d !important;
  --checkbox-color: #ffc83d !important;
  --checkbox-color-hover: #ff3d63 !important;
  --checkbox-marker-color: #101119 !important;
  --checklist-done-color: #ffc83d !important;
  --code-background: #181926 !important;
  --code-border-color: #181926 !important;
  --code-bracket-background: #a464fc !important;
  --code-comment: #ffc83d !important;
  --code-normal: #e0e0ff !important;
  --code-punctuation: #afb2c7 !important;
  --collapse-icon-color: #a464fc !important;
  --collapse-icon-color-collapsed: #ffc83d !important;
  --color-code: #96ff00 !important;
  --color-code-cyberpunk: #00ff7f !important;
  --color-code-dark: #43ad39 !important;
  --color-code-p1-green: #40ff33 !important;
  --color-code-p3-ember: #ffb000 !important;
  --color-code-p3-ember-rgb: 255, 176, 0 !important;
  --color-code-p4-white: #e0e0ff !important;
  --color-code-p7-dark: #33FF66 !important;
  --color-code-p7-gbmix: #a0ffd0 !important;
  --color-code-preview-code: #e0e0ff !important;
  --color-code-preview-knownl: #00b3ff !important;
  --color-code-preview-primary: #00ddff !important;
  --color-code-preview-scan-a: rgb(0, 221, 255) !important;
  --color-code-preview-scan-b: rgba(0, 221, 255, 0.4) !important;
  --color-code-preview-scan-c: rgba(0, 221, 255, 0.18) !important;
  --color-code-preview-scan-d: rgba(0, 221, 255, 0.06) !important;
  --color-code-preview-scrollbar: rgb(0, 221, 255, 0.1) !important;
  --color-code-preview-scrollbar-active: rgb(0, 221, 255, 1) !important;
  --color-code-preview-scrollbar-hover: rgb(0, 221, 255, 0.4) !important;
  --color-code-preview-secondary: #00ddff !important;
  --color-ember-background: #1A0E00 !important;
  --color-ember-background-rgb: 26, 14, 0 !important;
  --color-ember-dark: #b36b00 !important;
  --color-ember-dark-rgb: 179, 107, 0 !important;
  --color-ember-deep: #754400 !important;
  --color-ember-leaf: #8fff05 !important;
  --color-ember-normal: #ff9900 !important;
  --color-ember-normal-rgb: 255, 153, 0 !important;
  --color-ember-orange: #ff7a00 !important;
  --color-ember-orange-rgb: 255, 122, 0 !important;
  --color-ember-red: #ff530f !important;
  --color-ember-red-rgb: 255, 83, 15 !important;
  --color-ember-rose: #ff241c !important;
  --color-heading-1: #00ddff !important;
  --color-heading-2: #ff3d63 !important;
  --color-heading-3: #ffc83d !important;
  --color-heading-4: #a464fc !important;
  --color-heading-5: #00ff6a !important;
  --color-heading-6: #afb2c7 !important;
  --color-holo-background: #00031a !important;
  --color-holo-background-rgb: 0, 3, 26 !important;
  --color-holo-blue: #5485ff !important;
  --color-holo-dark: #3252d1 !important;
  --color-holo-dark-rgb: 11, 117, 184 !important;
  --color-holo-mint: #40ffaf !important;
  --color-holo-mint-rgb: 64, 255, 175 !important;
  --color-holo-normal: #00b3ff !important;
  --color-holo-normal-rgb: 69, 208, 255 !important;
  --color-holo-purple: #776eff !important;
  --color-holo-purple-rgb: 119, 110, 255 !important;
  --color-horizontal-rule: #a464fc !important;
  --color-horizontal-rule-opacity: rgb(#a464fc r g b / 0) !important;
  --color-interactive-hover: #7845bf !important;
  --color-main-alart: #ff4c30 !important;
  --color-main-black: #0b0c14 !important;
  --color-main-blue: #64bcfc !important;
  --color-main-blue-rgb: 100, 188, 252 !important;
  --color-main-dark: #101119 !important;
  --color-main-debug: #ff00ff !important;
  --color-main-deepgrey: #232433 !important;
  --color-main-gold: #ffc83d !important;
  --color-main-green: #00ff6a !important;
  --color-main-grey: #404359 !important;
  --color-main-holo: #00ddff !important;
  --color-main-holo-rgb: 0, 221, 255 !important;
  --color-main-icon: #afb2c7 !important;
  --color-main-lemon: #fff700 !important;
  --color-main-lightdark: #181926 !important;
  --color-main-lightgrey: #5e6280 !important;
  --color-main-lowicon: #8487a1 !important;
  --color-main-orange: #ff8f1f !important;
  --color-main-pale: #e0e0e0 !important;
  --color-main-paleyellow: #fff4b8 !important;
  --color-main-purple: #a464fc !important;
  --color-main-purple-rgb: 164, 100, 252 !important;
  --color-main-red: #ff3d63 !important;
  --color-satu-deepgrey: #191b33 !important;
  --color-satu-grey: #303559 !important;
  --color-satu-icon: #9198c7 !important;
  --color-satu-lowicon: #6f74a1 !important;
  --color-scrollbar-track: #282b3b !important;
  --color-spliter: rgb(from #5e6280 r g b / 0.1) !important;
  --dark: #e0e0ff !important;
  --darkgray: #e0e0ff !important;
  --divider-color: rgb(from #5e6280 r g b / 0.1) !important;
  --divider-color-hover: #a464fc !important;
  --dropdown-background: #232433 !important;
  --dropdown-background-hover: #404359 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(from #5e6280 r g b / 0.1), inset 0 0 0 1px rgb(from #5e6280 r g b / 0.1) !important;
  --embed-border-start: 2px solid #a464fc !important;
  --file-header-background: #101119 !important;
  --file-header-background-focused: #101119 !important;
  --flair-background: #232433 !important;
  --flair-color: #e0e0ff !important;
  --font-size-heading-1: 36px !important;
  --font-size-heading-2: 32px !important;
  --font-size-heading-3: 28px !important;
  --font-size-heading-4: 26px !important;
  --font-size-heading-5: 24px !important;
  --font-size-heading-6: 22px !important;
  --footnote-divider-color: rgb(from #5e6280 r g b / 0.1) !important;
  --footnote-id-color: #afb2c7 !important;
  --footnote-id-color-no-occurrences: #ffc83d !important;
  --footnote-input-background-active: #a464fc !important;
  --graph-node: #afb2c7 !important;
  --graph-node-focused: #a464fc !important;
  --graph-node-unresolved: #ffc83d !important;
  --graph-text: #e0e0ff !important;
  --gray: #afb2c7 !important;
  --heading-formatting: #ffc83d !important;
  --highlight: #ffc83d !important;
  --hr-color: rgb(from #5e6280 r g b / 0.1) !important;
  --icon-color: #afb2c7 !important;
  --icon-color-active: #a464fc !important;
  --icon-color-focused: #101119 !important;
  --icon-color-hover: #101119 !important;
  --input-date-separator: #ffc83d !important;
  --input-placeholder-color: #5e6280 !important;
  --interactive-accent: #a464fc !important;
  --interactive-accent-hover: #7845bf !important;
  --interactive-hover: #404359 !important;
  --interactive-normal: #232433 !important;
  --light: #101119 !important;
  --lightgray: #232433 !important;
  --link-color: #64bcfc !important;
  --link-color-hover: #00ddff !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #64bcfc !important;
  --link-external-color-hover: #00ddff !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #ff4c30 !important;
  --link-unresolved-color-hover: #ff4c30 !important;
  --link-unresolved-opacity: 0.8 !important;
  --list-marker-color: #a464fc !important;
  --list-marker-color-collapsed: #ffc83d !important;
  --list-marker-color-hover: #afb2c7 !important;
  --menu-background: #232433 !important;
  --metadata-border-color: rgb(from #5e6280 r g b / 0.1) !important;
  --metadata-divider-color: rgb(from #5e6280 r g b / 0.1) !important;
  --metadata-input-background-active: #a464fc !important;
  --metadata-input-text-color: #e0e0ff !important;
  --metadata-label-background-active: #a464fc !important;
  --metadata-label-text-color: #afb2c7 !important;
  --metadata-label-text-color-hover: #afb2c7 !important;
  --metadata-property-background-active: #a464fc !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a464fc !important;
  --modal-background: #101119 !important;
  --nav-collapse-icon-color: #a464fc !important;
  --nav-collapse-icon-color-collapsed: #ffc83d !important;
  --nav-heading-color: #a464fc !important;
  --nav-heading-color-collapsed: #afb2c7 !important;
  --nav-heading-color-collapsed-hover: #a464fc !important;
  --nav-heading-color-hover: #e0e0ff !important;
  --nav-item-background-active: #a464fc !important;
  --nav-item-background-hover: #181926 !important;
  --nav-item-color: #afb2c7 !important;
  --nav-item-color-active: #e0e0ff !important;
  --nav-item-color-highlighted: #a464fc !important;
  --nav-item-color-hover: #a464fc !important;
  --nav-item-color-selected: #e0e0ff !important;
  --nav-tag-color: #ffc83d !important;
  --nav-tag-color-active: #afb2c7 !important;
  --nav-tag-color-hover: #afb2c7 !important;
  --pdf-background: #101119 !important;
  --pdf-page-background: #101119 !important;
  --pdf-shadow: 0 0 0 1px rgb(from #5e6280 r g b / 0.1) !important;
  --pdf-sidebar-background: #101119 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(from #5e6280 r g b / 0.1) !important;
  --pill-border-color: rgb(from #5e6280 r g b / 0.1) !important;
  --pill-color: #afb2c7 !important;
  --pill-color-hover: #e0e0ff !important;
  --pill-color-remove: #ffc83d !important;
  --pill-color-remove-hover: #a464fc !important;
  --prompt-background: #101119 !important;
  --raised-background: color-mix(in srgb, #232433 65%, transparent) linear-gradient(#232433, color-mix(in srgb, #232433 65%, transparent)) !important;
  --ribbon-background: #232433 !important;
  --ribbon-background-collapsed: #101119 !important;
  --scrollbar-thumb-bg: #232433 !important;
  --scrollbar-width: 16px !important;
  --search-clear-button-color: #afb2c7 !important;
  --search-icon-color: #afb2c7 !important;
  --search-result-background: #181926 !important;
  --secondary: #a464fc !important;
  --setting-group-heading-color: #e0e0ff !important;
  --setting-items-background: #232433 !important;
  --setting-items-border-color: rgb(from #5e6280 r g b / 0.1) !important;
  --side-dock-ribbon-anime-time: 0.3s !important;
  --slider-track-background: rgb(from #5e6280 r g b / 0.1) !important;
  --status-bar-background: #232433 !important;
  --status-bar-border-color: rgb(from #5e6280 r g b / 0.1) !important;
  --status-bar-text-color: #afb2c7 !important;
  --suggestion-background: #101119 !important;
  --tab-background-active: #101119 !important;
  --tab-container-background: #232433 !important;
  --tab-divider-color: #a464fc !important;
  --tab-outline-color: rgb(from #5e6280 r g b / 0.1) !important;
  --tab-switcher-background: #232433 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #232433, transparent) !important;
  --tab-text-color: #afb2c7 !important;
  --tab-text-color-active: #afb2c7 !important;
  --tab-text-color-focused: #afb2c7 !important;
  --tab-text-color-focused-active: #afb2c7 !important;
  --tab-text-color-focused-active-current: #e0e0ff !important;
  --tab-text-color-focused-highlighted: #a464fc !important;
  --table-add-button-border-color: rgb(from #5e6280 r g b / 0.1) !important;
  --table-border-color: rgb(from #a464fc r g b / 0.2) !important;
  --table-drag-handle-background-active: #a464fc !important;
  --table-drag-handle-color: #ffc83d !important;
  --table-drag-handle-color-active: #e0e0ff !important;
  --table-header-border-color: rgb(from #a464fc r g b / 0.2) !important;
  --table-header-color: #e0e0ff !important;
  --table-selection-border-color: #a464fc !important;
  --tag-background: #232433 !important;
  --tag-color: #afb2c7 !important;
  --tag-color-hover: #e0e0ff !important;
  --tertiary: #7845bf !important;
  --text-accent: #a464fc !important;
  --text-error: #ff3d63 !important;
  --text-faint: #ffc83d !important;
  --text-highlight-bg: #ffc83d !important;
  --text-muted: #afb2c7 !important;
  --text-normal: #e0e0ff !important;
  --text-on-accent: #e0e0ff !important;
  --textHighlight: #ffc83d !important;
  --titlebar-background: #232433 !important;
  --titlebar-background-focused: #404359 !important;
  --titlebar-border-color: rgb(from #5e6280 r g b / 0.1) !important;
  --titlebar-text-color: #afb2c7 !important;
  --titlebar-text-color-focused: #e0e0ff !important;
  --vault-profile-color: #e0e0ff !important;
  --vault-profile-color-hover: #e0e0ff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 36, 51);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(16, 17, 25);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(35, 36, 51);
  border-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(35, 36, 51);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 36, 51);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 36, 51);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 17, 25);
  color: rgb(224, 224, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(164, 100, 252);
  outline: rgb(164, 100, 252) none 0px;
  text-decoration-color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body .text-highlight {
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-name: search-horizontal-scan;
  animation-timing-function: linear;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(224, 224, 255);
  font-weight: 200;
  outline: rgb(224, 224, 255) none 0px;
  text-decoration-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 224, 255);
  outline: rgb(224, 224, 255) none 0px;
  text-decoration-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body footer {
  opacity: 0.4;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 61, 99);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 200, 61);
  border-color: rgb(255, 200, 61);
}

html[saved-theme="dark"] body p {
  color: rgb(175, 178, 199);
  outline: rgb(175, 178, 199) none 0px;
  text-decoration-color: rgb(175, 178, 199);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(100, 188, 252);
  outline: rgb(100, 188, 252) none 0px;
  text-decoration-color: rgb(100, 188, 252);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(100, 188, 252);
  outline: rgb(100, 188, 252) none 0px;
  text-decoration-color: rgb(100, 188, 252);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 76, 48);
  outline: rgb(255, 76, 48) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(255, 200, 61);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-left-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-right-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-top-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-left-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-right-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  border-top-color: color(srgb 0.643137 0.392157 0.988235 / 0.2);
  color: rgb(224, 224, 255);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0 0.866667 1 / 0.06);
  border-bottom-color: color(srgb 0 0.866667 1 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0 0.866667 1 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0 0.866667 1 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0 0.866667 1 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0 0.866667 1 / 0.06);
  border-bottom-color: color(srgb 0 0.866667 1 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0 0.866667 1 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0 0.866667 1 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0 0.866667 1 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
  color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(64, 255, 175);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(64, 255, 175);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(64, 255, 175);
  border-left-color: rgb(64, 255, 175);
  border-right-color: rgb(64, 255, 175);
  border-top-color: rgb(64, 255, 175);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: color(srgb 0 0.866667 1 / 0.06);
  border-bottom-color: color(srgb 0 0.866667 1 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0 0.866667 1 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0 0.866667 1 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0 0.866667 1 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
  overflow-x: visible;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0 0.866667 1 / 0.06);
  border-bottom-color: color(srgb 0 0.866667 1 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0 0.866667 1 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0 0.866667 1 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0 0.866667 1 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
  overflow-x: visible;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(35, 36, 51);
  border-bottom-color: rgb(16, 17, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-left-color: rgb(16, 17, 25);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(16, 17, 25);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(16, 17, 25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 224, 255);
  border-bottom-style: solid;
  border-left-color: rgb(164, 100, 252);
  border-right-color: rgb(224, 224, 255);
  border-right-style: solid;
  border-top-color: rgb(224, 224, 255);
  border-top-style: solid;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 61, 99);
  border-left-color: rgb(255, 61, 99);
  border-right-color: rgb(255, 61, 99);
  border-top-color: rgb(255, 61, 99);
  width: 20px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 221, 255);
  text-decoration: line-through;
  text-decoration-color: rgb(0, 221, 255);
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
  background-color: rgb(16, 17, 25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 255);
  outline: rgb(224, 224, 255) none 0px;
  text-decoration-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(164, 100, 252);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(164, 100, 252);
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(164, 100, 252);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(35, 36, 51);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body h1 {
  color: rgb(0, 221, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 61, 99);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 200, 61);
}

html[saved-theme="dark"] body h4 {
  color: rgb(164, 100, 252);
}

html[saved-theme="dark"] body h5 {
  color: rgb(0, 255, 106);
}

html[saved-theme="dark"] body h6 {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(16, 17, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 17, 25);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(175, 178, 199);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 224, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(35, 36, 51);
  border-bottom-color: rgb(16, 17, 25);
  border-bottom-width: 2px;
  border-left-color: rgb(16, 17, 25);
  border-left-width: 2px;
  border-right-color: rgb(16, 17, 25);
  border-right-width: 2px;
  border-top-color: rgb(16, 17, 25);
  border-top-width: 2px;
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(175, 178, 199);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(175, 178, 199);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(175, 178, 199);
  stroke: rgb(175, 178, 199);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(255, 200, 61);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-left-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-right-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  border-top-color: color(srgb 0.368627 0.384314 0.501961 / 0.1);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(35, 36, 51);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(175, 178, 199);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(175, 178, 199);
  border-bottom-color: rgb(16, 17, 25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(16, 17, 25);
  border-right-color: rgb(16, 17, 25);
  border-top-color: rgb(16, 17, 25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(16, 17, 25);
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 224, 255);
  border-left-color: rgb(224, 224, 255);
  border-right-color: rgb(224, 224, 255);
  border-top-color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 224, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(35, 36, 51);
  border-bottom-color: rgb(175, 178, 199);
  border-left-color: rgb(175, 178, 199);
  border-right-color: rgb(175, 178, 199);
  border-top-color: rgb(175, 178, 199);
  color: rgb(175, 178, 199);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-name: search-horizontal-scan;
  animation-timing-function: linear;
  background-color: rgba(0, 0, 0, 0);
  font-weight: 200;
}

html[saved-theme="light"] body footer {
  opacity: 0.4;
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
  border-bottom-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
  border-bottom-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
  border-bottom-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
  overflow-x: visible;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: color(srgb 0.133333 0.133333 0.133333 / 0.02);
  border-bottom-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 2px;
  border-left-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-left-width: 2px;
  border-right-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-right-width: 2px;
  border-top-color: color(srgb 0.133333 0.133333 0.133333 / 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 2px;
  overflow-x: visible;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  width: 20px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  text-decoration: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  text-decoration: line-through;
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 2px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 2px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 2px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(34, 34, 34);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
  },
  extras: `@keyframes cute-bounce {
  0% {
    transform: translateY(2px) scaleX(120%) scaleY(90%);
  }
  60% {
    transform: translateY(-2px) scaleX(90%) scaleY(110%);
  }
  100% {
    transform: translateY(2px) scaleX(120%) scaleY(90%);
  }
}

/* Breathing glow uses brightness filter + box-shadow cycling — not obvious from property names */
@keyframes heading-breath-h1 {
  50% {
    opacity: 0;
    filter: brightness(0);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

@keyframes heading-breath-h2 {
  50% {
    opacity: 0;
    filter: brightness(0);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

@keyframes heading-breath-h3 {
  50% {
    opacity: 0;
    filter: brightness(0);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

/* Horizontal rule radial-gradient expansion animation */
@keyframes hr-spread {
  0% {
    background-size:
      100% 100%,
      100% 100%,
      100% 100%;
    background-position: center, center, center;
  }
  100% {
    background-size:
      196% 100%,
      196% 100%,
      100% 100%;
    background-position: left, right, center;
  }
}

@keyframes hr-spread-opacity {
  0% {
    opacity: 0;
  }
  20%,
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes checkbox-holo {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

/* Scan line moves horizontally across search input — repeating-linear-gradient creates the line */
@keyframes search-horizontal-scan {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`,
};
