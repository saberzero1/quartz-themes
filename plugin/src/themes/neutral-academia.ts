import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neutral-academia",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cormorant", "manrope"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #262020 !important;
  --background-modifier-border-focus: #C8BCAC !important;
  --background-modifier-border-hover: #666C68 !important;
  --background-modifier-form-field: #262020 !important;
  --background-modifier-form-field-hover: #262020 !important;
  --background-primary: #0f0a0b !important;
  --background-primary-alt: #110b0c !important;
  --background-secondary: #110b0c !important;
  --background-secondary-alt: #262020 !important;
  --bases-cards-background: #0f0a0b !important;
  --bases-cards-cover-background: #110b0c !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #262020 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #666C68 !important;
  --bases-embed-border-color: #262020 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #C8BCAC !important;
  --bases-table-border-color: #262020 !important;
  --bases-table-cell-background-active: #0f0a0b !important;
  --bases-table-cell-background-disabled: #110b0c !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #C8BCAC !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #110b0c !important;
  --bases-table-header-background: #0f0a0b !important;
  --bases-table-header-color: #C8BCAC !important;
  --bases-table-summary-background: #0f0a0b !important;
  --blur-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent)) !important;
  --bodyFont: 'manrope', sans-serif !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #0f0a0b !important;
  --canvas-card-label-color: #C8BCAC !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #262020 !important;
  --caret-color: #C8BCAC !important;
  --checkbox-border-color: #7F6C5E !important;
  --checkbox-border-color-hover: #C8BCAC !important;
  --checkbox-color: #7F6C5E !important;
  --checkbox-marker-color: #0f0a0b !important;
  --checkbox-radius: 0px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #C8BCAC !important;
  --clickable-icon-radius: 0px !important;
  --code-background: none !important;
  --code-border-color: #262020 !important;
  --code-comment: #C8BCAC !important;
  --code-normal: #C8BCAC !important;
  --code-punctuation: #C8BCAC !important;
  --code-radius: 0px !important;
  --codeFont: 'manrope', sans-serif !important;
  --collapse-icon-color: #C8BCAC !important;
  --collapse-icon-color-collapsed: #C8BCAC !important;
  --color-base-00: #0f0a0b !important;
  --color-base-05: #262020 !important;
  --color-base-10: #110b0c !important;
  --color-base-100: #C8BCAC !important;
  --color-base-20: #110b0c !important;
  --color-base-25: #262020 !important;
  --color-base-30: #262020 !important;
  --color-base-35: #666C68 !important;
  --color-base-40: #C8BCAC !important;
  --color-base-50: #C8BCAC !important;
  --color-base-60: #C8BCAC !important;
  --color-base-70: #C8BCAC !important;
  --dark: #C8BCAC !important;
  --darkgray: #C8BCAC !important;
  --divider-color: transparent !important;
  --dropdown-background: #393e50 !important;
  --dropdown-background-hover: #666C68 !important;
  --embed-block-shadow-hover: 0 0 0 1px #262020, inset 0 0 0 1px #262020 !important;
  --file-header-background: #0f0a0b !important;
  --file-header-background-focused: #0f0a0b !important;
  --flair-background: #393e50 !important;
  --flair-color: #C8BCAC !important;
  --font-mermaid: 'manrope', sans-serif !important;
  --font-text: 'manrope', sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #262020 !important;
  --footnote-id-color: #C8BCAC !important;
  --footnote-id-color-no-occurrences: #C8BCAC !important;
  --footnote-radius: 0px !important;
  --graph-line: #666C68 !important;
  --graph-node: #C8BCAC !important;
  --graph-node-focused: #C8BCAC !important;
  --graph-node-unresolved: #C8BCAC !important;
  --graph-text: #C8BCAC !important;
  --gray: #C8BCAC !important;
  --h1-size: 2.5em !important;
  --h1-weight: 600 !important;
  --h2-size: 2.2em !important;
  --h2-weight: 600 !important;
  --h3-size: 2em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.8em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.6em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.4em !important;
  --headerFont: 'manrope', sans-serif !important;
  --heading-formatting: #C8BCAC !important;
  --hr-color: #262020 !important;
  --hr-thickness: 1px !important;
  --icon-color: #E5DFD3 !important;
  --icon-color-active: #C8BCAC !important;
  --icon-color-focused: #4f4d4a !important;
  --icon-color-hover: #4f4d4a !important;
  --inline-title-color: #4f4d4a !important;
  --inline-title-font: 'Cormorant', serif !important;
  --inline-title-size: 4em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #C8BCAC !important;
  --input-placeholder-color: #C8BCAC !important;
  --input-radius: 0px !important;
  --interactive-hover: #666C68 !important;
  --interactive-normal: #393e50 !important;
  --light: #0f0a0b !important;
  --lightgray: #110b0c !important;
  --link-color: #C8BCAC !important;
  --link-color-hover: #7F6C5E !important;
  --link-external-color: #C8BCAC !important;
  --link-external-color-hover: #7F6C5E !important;
  --link-unresolved-color: #C8BCAC !important;
  --list-marker-color: #C8BCAC !important;
  --list-marker-color-collapsed: #C8BCAC !important;
  --list-marker-color-hover: #C8BCAC !important;
  --menu-background: #110b0c !important;
  --menu-border-color: #666C68 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #262020 !important;
  --metadata-divider-color: #262020 !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #C8BCAC !important;
  --metadata-label-text-color: #C8BCAC !important;
  --metadata-label-text-color-hover: #C8BCAC !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #C8BCAC !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #666C68 !important;
  --modal-background: #0f0a0b !important;
  --modal-border-color: #C8BCAC !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #C8BCAC !important;
  --nav-collapse-icon-color-collapsed: #C8BCAC !important;
  --nav-heading-color: #C8BCAC !important;
  --nav-heading-color-collapsed: #C8BCAC !important;
  --nav-heading-color-collapsed-hover: #C8BCAC !important;
  --nav-heading-color-hover: #C8BCAC !important;
  --nav-item-background-active: none !important;
  --nav-item-background-hover: none !important;
  --nav-item-color: #4f4d4a !important;
  --nav-item-color-active: #666C68 !important;
  --nav-item-color-highlighted: #C8BCAC !important;
  --nav-item-color-hover: #666C68 !important;
  --nav-item-color-selected: #C8BCAC !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: #C8BCAC !important;
  --nav-tag-color-active: #C8BCAC !important;
  --nav-tag-color-hover: #C8BCAC !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #0f0a0b !important;
  --pdf-page-background: #0f0a0b !important;
  --pdf-shadow: 0 0 0 1px #262020 !important;
  --pdf-sidebar-background: #0f0a0b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #262020 !important;
  --pill-border-color: #262020 !important;
  --pill-border-color-hover: #666C68 !important;
  --pill-color: #C8BCAC !important;
  --pill-color-hover: #C8BCAC !important;
  --pill-color-remove: #C8BCAC !important;
  --pill-color-remove-hover: #C8BCAC !important;
  --popover-font-size: 14px !important;
  --prompt-background: #0f0a0b !important;
  --prompt-border-color: #C8BCAC !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent)) !important;
  --ribbon-background: #110b0c !important;
  --ribbon-background-collapsed: #0f0a0b !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #C8BCAC !important;
  --search-icon-color: #C8BCAC !important;
  --search-result-background: #0f0a0b !important;
  --secondary: #C8BCAC !important;
  --setting-group-heading-color: #C8BCAC !important;
  --setting-items-background: #110b0c !important;
  --setting-items-border-color: #262020 !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #666C68 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #393e50 !important;
  --status-bar-background: #110b0c !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #C8BCAC !important;
  --suggestion-background: #0f0a0b !important;
  --tab-background-active: #0f0a0b !important;
  --tab-container-background: #110b0c !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #110b0c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #110b0c, transparent) !important;
  --tab-text-color: #C8BCAC !important;
  --tab-text-color-active: #C8BCAC !important;
  --tab-text-color-focused: #C8BCAC !important;
  --tab-text-color-focused-active: #C8BCAC !important;
  --tab-text-color-focused-active-current: #C8BCAC !important;
  --tab-text-color-focused-highlighted: #C8BCAC !important;
  --table-add-button-border-color: #262020 !important;
  --table-border-color: #262020 !important;
  --table-drag-handle-color: #C8BCAC !important;
  --table-header-border-color: #262020 !important;
  --table-header-color: #C8BCAC !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: transparent !important;
  --tag-background-hover: #393e50 !important;
  --tag-color: #C8BCAC !important;
  --tag-color-hover: #C8BCAC !important;
  --tertiary: #7F6C5E !important;
  --text-accent: #C8BCAC !important;
  --text-accent-hover: #7F6C5E !important;
  --text-faint: #C8BCAC !important;
  --text-muted: #C8BCAC !important;
  --text-normal: #C8BCAC !important;
  --titleFont: 'manrope', sans-serif !important;
  --titlebar-background: #110b0c !important;
  --titlebar-background-focused: #262020 !important;
  --titlebar-border-color: #262020 !important;
  --titlebar-text-color: #C8BCAC !important;
  --titlebar-text-color-focused: #C8BCAC !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #C8BCAC !important;
  --vault-profile-color-hover: #C8BCAC !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 11, 12);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(15, 10, 11);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 11, 12);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 11, 12);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(15, 10, 11);
  color: rgb(200, 188, 172);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body del {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: line-through rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body p {
  color: rgb(200, 188, 172);
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: underline rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: underline rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="dark"] body dt {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
}

html[saved-theme="dark"] body blockquote {
  font-family: manrope, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body table {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  width: 173.234px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(38, 32, 32);
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(38, 32, 32);
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  color: rgb(200, 188, 172);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  font-size: 14px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: manrope, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: manrope, sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(200, 188, 172);
  text-decoration: line-through rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(127, 108, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(127, 108, 94);
  border-right-color: rgb(127, 108, 94);
  border-top-color: rgb(127, 108, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(38, 32, 32);
  border-bottom-color: rgb(38, 32, 32);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
  outline: rgb(200, 188, 172) none 0px;
  text-decoration: rgb(200, 188, 172);
  text-decoration-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 11, 12);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body h1 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(15, 10, 11) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 11);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
  text-decoration: rgb(79, 77, 74);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
  text-decoration: rgb(79, 77, 74);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
  text-decoration: rgb(79, 77, 74);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(102, 108, 104);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 108, 104);
  border-right-color: rgb(102, 108, 104);
  border-top-color: rgb(102, 108, 104);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 108, 104);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(229, 223, 211);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 223, 211);
  border-right-color: rgb(229, 223, 211);
  border-top-color: rgb(229, 223, 211);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 223, 211);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 11, 12);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(200, 188, 172);
  text-decoration: rgb(200, 188, 172);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(79, 77, 74);
  text-decoration: rgb(79, 77, 74);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(79, 77, 74);
  font-family: inter, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(79, 77, 74);
  text-decoration: rgb(79, 77, 74);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(229, 223, 211);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 223, 211);
  border-right-color: rgb(229, 223, 211);
  border-top-color: rgb(229, 223, 211);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 223, 211);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(229, 223, 211);
  stroke: rgb(229, 223, 211);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(200, 188, 172);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(38, 32, 32);
  border-left-color: rgb(38, 32, 32);
  border-right-color: rgb(38, 32, 32);
  border-top-color: rgb(38, 32, 32);
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
  font-family: manrope, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 11, 12);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(200, 188, 172);
  font-family: Cormorant, serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(200, 188, 172);
  text-decoration: underline dotted rgb(200, 188, 172);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(200, 188, 172);
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body sub {
  color: rgb(200, 188, 172);
  font-size: 11.6667px;
}

html[saved-theme="dark"] body summary {
  color: rgb(200, 188, 172);
}

html[saved-theme="dark"] body sup {
  color: rgb(200, 188, 172);
  font-size: 11.6667px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #d2c9bd !important;
  --background-modifier-border-focus: #202430 !important;
  --background-modifier-border-hover: #202430 !important;
  --background-modifier-form-field: #f5f4f4 !important;
  --background-modifier-form-field-hover: #f5f4f4 !important;
  --background-primary: #f5f4f4 !important;
  --background-primary-alt: #efeff1 !important;
  --background-secondary: #efeff1 !important;
  --background-secondary-alt: #d2c9bd !important;
  --bases-cards-background: #f5f4f4 !important;
  --bases-cards-cover-background: #efeff1 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #d2c9bd !important;
  --bases-cards-shadow-hover: 0 0 0 1px #202430 !important;
  --bases-embed-border-color: #d2c9bd !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #434B56 !important;
  --bases-table-border-color: #d2c9bd !important;
  --bases-table-cell-background-active: #f5f4f4 !important;
  --bases-table-cell-background-disabled: #efeff1 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #202430 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #efeff1 !important;
  --bases-table-header-background: #f5f4f4 !important;
  --bases-table-header-color: #434B56 !important;
  --bases-table-summary-background: #f5f4f4 !important;
  --blur-background: color-mix(in srgb, #f5f4f4 65%, transparent) linear-gradient(#f5f4f4, color-mix(in srgb, #f5f4f4 65%, transparent)) !important;
  --bodyFont: 'manrope', sans-serif !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #f5f4f4 !important;
  --canvas-card-label-color: #4E4D49 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #d2c9bd !important;
  --caret-color: #202430 !important;
  --checkbox-border-color: #666C68 !important;
  --checkbox-border-color-hover: #434B56 !important;
  --checkbox-color: #666C68 !important;
  --checkbox-marker-color: #f5f4f4 !important;
  --checkbox-radius: 0px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #434B56 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: none !important;
  --code-border-color: #d2c9bd !important;
  --code-comment: #4E4D49 !important;
  --code-normal: #202430 !important;
  --code-punctuation: #434B56 !important;
  --code-radius: 0px !important;
  --codeFont: 'manrope', sans-serif !important;
  --collapse-icon-color: #4E4D49 !important;
  --collapse-icon-color-collapsed: #4B1B29 !important;
  --color-base-00: #f5f4f4 !important;
  --color-base-05: #d2c9bd !important;
  --color-base-10: #efeff1 !important;
  --color-base-100: #202430 !important;
  --color-base-20: #efeff1 !important;
  --color-base-25: #d2c9bd !important;
  --color-base-30: #d2c9bd !important;
  --color-base-35: #202430 !important;
  --color-base-40: #202430 !important;
  --color-base-50: #4E4D49 !important;
  --color-base-60: #4B1B29 !important;
  --color-base-70: #434B56 !important;
  --dark: #202430 !important;
  --darkgray: #202430 !important;
  --divider-color: transparent !important;
  --dropdown-background: #a4a9ba !important;
  --dropdown-background-hover: #efeff1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #d2c9bd, inset 0 0 0 1px #d2c9bd !important;
  --file-header-background: #f5f4f4 !important;
  --file-header-background-focused: #f5f4f4 !important;
  --flair-background: #a4a9ba !important;
  --flair-color: #202430 !important;
  --font-mermaid: 'manrope', sans-serif !important;
  --font-text: 'manrope', sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #d2c9bd !important;
  --footnote-id-color: #434B56 !important;
  --footnote-id-color-no-occurrences: #4E4D49 !important;
  --footnote-radius: 0px !important;
  --graph-line: #202430 !important;
  --graph-node: #434B56 !important;
  --graph-node-focused: #4B1B29 !important;
  --graph-node-unresolved: #4E4D49 !important;
  --graph-text: #202430 !important;
  --gray: #434B56 !important;
  --h1-size: 2.5em !important;
  --h1-weight: 600 !important;
  --h2-size: 2.2em !important;
  --h2-weight: 600 !important;
  --h3-size: 2em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.8em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.6em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.4em !important;
  --headerFont: 'manrope', sans-serif !important;
  --heading-formatting: #4E4D49 !important;
  --hr-color: #d2c9bd !important;
  --hr-thickness: 1px !important;
  --icon-color: #322831 !important;
  --icon-color-active: #4B1B29 !important;
  --icon-color-focused: #6B9080 !important;
  --icon-color-hover: #41250C !important;
  --inline-title-color: #4f4d4a !important;
  --inline-title-font: 'Cormorant', serif !important;
  --inline-title-size: 4em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #4E4D49 !important;
  --input-placeholder-color: #4E4D49 !important;
  --input-radius: 0px !important;
  --interactive-hover: #efeff1 !important;
  --interactive-normal: #a4a9ba !important;
  --light: #f5f4f4 !important;
  --lightgray: #efeff1 !important;
  --link-color: #4B1B29 !important;
  --link-color-hover: #7F6C5E !important;
  --link-external-color: #4B1B29 !important;
  --link-external-color-hover: #7F6C5E !important;
  --link-unresolved-color: #4B1B29 !important;
  --list-marker-color: #4E4D49 !important;
  --list-marker-color-collapsed: #4B1B29 !important;
  --list-marker-color-hover: #434B56 !important;
  --menu-background: #efeff1 !important;
  --menu-border-color: #202430 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #d2c9bd !important;
  --metadata-divider-color: #d2c9bd !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #202430 !important;
  --metadata-label-text-color: #434B56 !important;
  --metadata-label-text-color-hover: #434B56 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #202430 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #202430 !important;
  --modal-background: #f5f4f4 !important;
  --modal-border-color: #202430 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #4E4D49 !important;
  --nav-collapse-icon-color-collapsed: #4E4D49 !important;
  --nav-heading-color: #202430 !important;
  --nav-heading-color-collapsed: #4E4D49 !important;
  --nav-heading-color-collapsed-hover: #434B56 !important;
  --nav-heading-color-hover: #202430 !important;
  --nav-item-background-active: none !important;
  --nav-item-background-hover: none !important;
  --nav-item-color: #202430 !important;
  --nav-item-color-active: #7F6C5E !important;
  --nav-item-color-highlighted: #4B1B29 !important;
  --nav-item-color-hover: #666C68 !important;
  --nav-item-color-selected: #202430 !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: #4E4D49 !important;
  --nav-tag-color-active: #434B56 !important;
  --nav-tag-color-hover: #434B56 !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #f5f4f4 !important;
  --pdf-page-background: #f5f4f4 !important;
  --pdf-sidebar-background: #f5f4f4 !important;
  --pill-border-color: #d2c9bd !important;
  --pill-border-color-hover: #202430 !important;
  --pill-color: #434B56 !important;
  --pill-color-hover: #202430 !important;
  --pill-color-remove: #4E4D49 !important;
  --pill-color-remove-hover: #4B1B29 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #f5f4f4 !important;
  --prompt-border-color: #202430 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #f5f4f4 65%, transparent) linear-gradient(#f5f4f4, color-mix(in srgb, #f5f4f4 65%, transparent)) !important;
  --ribbon-background: #efeff1 !important;
  --ribbon-background-collapsed: #f5f4f4 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #434B56 !important;
  --search-icon-color: #434B56 !important;
  --search-result-background: #f5f4f4 !important;
  --secondary: #4B1B29 !important;
  --setting-group-heading-color: #202430 !important;
  --setting-items-background: #efeff1 !important;
  --setting-items-border-color: #d2c9bd !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #202430 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #393e50 !important;
  --status-bar-background: #efeff1 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #434B56 !important;
  --suggestion-background: #f5f4f4 !important;
  --tab-background-active: #f5f4f4 !important;
  --tab-container-background: #efeff1 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #efeff1 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #efeff1, transparent) !important;
  --tab-text-color: #4E4D49 !important;
  --tab-text-color-active: #434B56 !important;
  --tab-text-color-focused: #434B56 !important;
  --tab-text-color-focused-active: #434B56 !important;
  --tab-text-color-focused-active-current: #202430 !important;
  --tab-text-color-focused-highlighted: #4B1B29 !important;
  --table-add-button-border-color: #d2c9bd !important;
  --table-border-color: #d2c9bd !important;
  --table-drag-handle-color: #4E4D49 !important;
  --table-header-border-color: #d2c9bd !important;
  --table-header-color: #202430 !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: transparent !important;
  --tag-background-hover: #d2c9bd !important;
  --tag-color: #4B1B29 !important;
  --tag-color-hover: #4B1B29 !important;
  --tertiary: #7F6C5E !important;
  --text-accent: #4B1B29 !important;
  --text-accent-hover: #7F6C5E !important;
  --text-faint: #4E4D49 !important;
  --text-muted: #434B56 !important;
  --text-normal: #202430 !important;
  --titleFont: 'manrope', sans-serif !important;
  --titlebar-background: #efeff1 !important;
  --titlebar-background-focused: #d2c9bd !important;
  --titlebar-border-color: #d2c9bd !important;
  --titlebar-text-color: #434B56 !important;
  --titlebar-text-color-focused: #202430 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #202430 !important;
  --vault-profile-color-hover: #202430 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 239, 241);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 244, 244);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 239, 241);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 239, 241);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 244, 244);
  color: rgb(32, 36, 48);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body del {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: line-through rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body p {
  color: rgb(67, 75, 86);
  outline: rgb(67, 75, 86) none 0px;
  text-decoration: rgb(67, 75, 86);
  text-decoration-color: rgb(67, 75, 86);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(75, 27, 41);
  font-family: manrope, sans-serif;
  outline: rgb(75, 27, 41) none 0px;
  text-decoration: underline rgb(75, 27, 41);
  text-decoration-color: rgb(75, 27, 41);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(75, 27, 41);
  font-family: manrope, sans-serif;
  outline: rgb(75, 27, 41) none 0px;
  text-decoration: underline rgb(75, 27, 41);
  text-decoration-color: rgb(75, 27, 41);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(75, 27, 41);
  font-family: manrope, sans-serif;
  outline: rgb(75, 27, 41) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="light"] body dt {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body ol > li {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body ul > li {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 77, 73);
  text-decoration: rgb(78, 77, 73);
}

html[saved-theme="light"] body blockquote {
  font-family: manrope, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body table {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  width: 173.234px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(210, 201, 189);
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(210, 201, 189);
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  color: rgb(32, 36, 48);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body figcaption {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  font-size: 14px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(239, 239, 241);
  border-bottom-color: rgb(67, 75, 86);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(32, 36, 48);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: manrope, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: manrope, sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(67, 75, 86);
  text-decoration: line-through rgb(67, 75, 86);
  text-decoration-color: rgb(67, 75, 86);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(102, 108, 104);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 108, 104);
  border-right-color: rgb(102, 108, 104);
  border-top-color: rgb(102, 108, 104);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgb(243, 242, 242);
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(210, 201, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(32, 36, 48);
  font-family: manrope, sans-serif;
  outline: rgb(32, 36, 48) none 0px;
  text-decoration: rgb(32, 36, 48);
  text-decoration-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 239, 241);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(75, 27, 41);
}

html[saved-theme="light"] body h1 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(79, 77, 74);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgba(102, 108, 104, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 108, 104, 0.314);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(102, 108, 104, 0.314);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(102, 108, 104, 0.314);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 244, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 244, 244);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
  text-decoration: rgb(32, 36, 48);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
  text-decoration: rgb(32, 36, 48);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
  text-decoration: rgb(32, 36, 48);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(127, 108, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(127, 108, 94);
  border-right-color: rgb(127, 108, 94);
  border-top-color: rgb(127, 108, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(127, 108, 94);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(50, 40, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 40, 49);
  border-right-color: rgb(50, 40, 49);
  border-top-color: rgb(50, 40, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 40, 49);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 239, 241);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(67, 75, 86);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(67, 75, 86);
  text-decoration: rgb(67, 75, 86);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(32, 36, 48);
  font-family: inter, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(32, 36, 48);
  text-decoration: rgb(32, 36, 48);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(50, 40, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 40, 49);
  border-right-color: rgb(50, 40, 49);
  border-top-color: rgb(50, 40, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 40, 49);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(50, 40, 49);
  stroke: rgb(50, 40, 49);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(67, 75, 86);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(67, 75, 86);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(78, 77, 73);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(210, 201, 189);
  border-left-color: rgb(210, 201, 189);
  border-right-color: rgb(210, 201, 189);
  border-top-color: rgb(210, 201, 189);
  color: rgb(67, 75, 86);
  font-family: manrope, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
  font-family: manrope, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 239, 241);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(32, 36, 48);
  font-family: Cormorant, serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(32, 36, 48);
  text-decoration: underline dotted rgb(32, 36, 48);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(67, 75, 86);
  border-left-color: rgb(67, 75, 86);
  border-right-color: rgb(67, 75, 86);
  border-top-color: rgb(67, 75, 86);
  color: rgb(67, 75, 86);
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(32, 36, 48);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(32, 36, 48);
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
}

html[saved-theme="light"] body sub {
  color: rgb(32, 36, 48);
  font-size: 11.6667px;
}

html[saved-theme="light"] body summary {
  color: rgb(32, 36, 48);
}

html[saved-theme="light"] body sup {
  color: rgb(32, 36, 48);
  font-size: 11.6667px;
}`,
  },
};
