import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "everforest-enchanted",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-embed: rgba(62, 75, 80, 0.7) !important;
  --background-embed-transparent: rgba(62, 75, 80, 0.7) !important;
  --background-modifier-border: #5d6b66 !important;
  --background-modifier-border-hover: #4d5960 !important;
  --background-primary: #333c43 !important;
  --background-primary-alt: #333c43 !important;
  --background-primary-rgb: 51, 60, 67 !important;
  --background-secondary: #333c43 !important;
  --background-secondary-alt: #333c43 !important;
  --bases-cards-background: #333c43 !important;
  --bases-cards-cover-background: #333c43 !important;
  --bases-cards-shadow: 0 0 0 1px #5d6b66 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4d5960 !important;
  --bases-embed-border-color: #5d6b66 !important;
  --bases-table-border-color: #5d6b66 !important;
  --bases-table-cell-background-active: #333c43 !important;
  --bases-table-cell-background-disabled: #333c43 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #569d79 !important;
  --bases-table-group-background: #333c43 !important;
  --bases-table-header-background: #333c43 !important;
  --bases-table-row-background-hover: #555f66 !important;
  --bases-table-summary-background: #333c43 !important;
  --bg-blue: #3f5865 !important;
  --bg-dim: #293136 !important;
  --bg-dim-rgb: 41, 49, 54 !important;
  --bg-green: #48584e !important;
  --bg-red: #59464c !important;
  --bg-visual: #5c3f4f !important;
  --bg-yellow: #55544a !important;
  --bg0: #333c43 !important;
  --bg0-rgb: 51, 60, 67 !important;
  --bg1: #3a464c !important;
  --bg2: #434f55 !important;
  --bg3: #4d5960 !important;
  --bg4: #555f66 !important;
  --bg5: #5d6b66 !important;
  --blockquote-background-color: rgba(62, 75, 80, 0.7) !important;
  --blockquote-border-color: #569d79 !important;
  --canvas-background: #333c43 !important;
  --canvas-card-label-color: #859289 !important;
  --canvas-dot-pattern: #666666 !important;
  --caret-color: #d3c6aa !important;
  --checkbox-border-color: #859289 !important;
  --checkbox-color: #7fbbb3 !important;
  --checkbox-color-hover: #5a93a2 !important;
  --checkbox-marker-color: #333c43 !important;
  --checkbox-radius: 25% !important;
  --checkbox-size: 14px !important;
  --code-background: #293136 !important;
  --code-border-color: #5d6b66 !important;
  --code-comment: #859289 !important;
  --code-function: #a7c080 !important;
  --code-header: #0004 !important;
  --code-important: #e67e80 !important;
  --code-inline: #7fbbb3 !important;
  --code-keyword: #7fbbb3 !important;
  --code-normal: #d3c6aa !important;
  --code-operator: #e69875 !important;
  --code-property: #83c092 !important;
  --code-punctuation: #859289 !important;
  --code-string: #dbbc7f !important;
  --code-tag: #e69875 !important;
  --code-value: #d699b6 !important;
  --collapse-icon-color: #859289 !important;
  --collapse-icon-color-collapsed: #5a93a2 !important;
  --dark: #d3c6aa !important;
  --darkgray: #d3c6aa !important;
  --divider-color: #5d6b66 !important;
  --divider-color-hover: #569d79 !important;
  --embed-block-shadow-hover: 0 4px 14px -2px hsla(0, 0%, 0%, 40%) !important;
  --embed-border-start: 2px solid #569d79 !important;
  --fg: #d3c6aa !important;
  --fg-aqua: #83c092 !important;
  --fg-blue: #7fbbb3 !important;
  --fg-green: #a7c080 !important;
  --fg-orange: #e69875 !important;
  --fg-purple: #d699b6 !important;
  --fg-red: #e67e80 !important;
  --fg-yellow: #dbbc7f !important;
  --file-folding-offset: 22px !important;
  --file-header-background: #333c43 !important;
  --file-header-background-focused: #333c43 !important;
  --flair-color: #d3c6aa !important;
  --footnote-divider-color: #5d6b66 !important;
  --footnote-id-color-no-occurrences: #859289 !important;
  --graph-node-focused: #5a93a2 !important;
  --graph-node-unresolved: #859289 !important;
  --graph-text: #d3c6aa !important;
  --gray: #859289 !important;
  --grey0: #7a8478 !important;
  --grey1: #859289 !important;
  --grey2: #9da9a0 !important;
  --h1-color: #da6362 !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2.125em !important;
  --h1-weight: 500 !important;
  --h2-color: #d77f48 !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.625em !important;
  --h2-weight: 500 !important;
  --h3-color: #bf983d !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.375em !important;
  --h3-weight: 500 !important;
  --h4-color: #899c40 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 500 !important;
  --h5-color: #5a93a2 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 500 !important;
  --h6-color: #b87b9d !important;
  --h6-weight: 500 !important;
  --header-aqua: #569d79 !important;
  --header-blue: #5a93a2 !important;
  --header-green: #899c40 !important;
  --header-orange: #d77f48 !important;
  --header-purple: #b87b9d !important;
  --header-red: #da6362 !important;
  --header-yellow: #bf983d !important;
  --highlight: #55544a !important;
  --hr-color: #5d6b66 !important;
  --icon-color-active: #5a93a2 !important;
  --icon-color-focused: #d3c6aa !important;
  --inline-title-color: #da6362 !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 2.125em !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #859289 !important;
  --input-placeholder-color: #859289 !important;
  --interactive-accent: #569d79 !important;
  --interactive-accent-hover: #5a93a2 !important;
  --interactive-before: #555f66 !important;
  --light: #333c43 !important;
  --lightgray: #333c43 !important;
  --link-color: #569d79 !important;
  --link-color-hover: #83c092 !important;
  --link-external-color: #5a93a2 !important;
  --link-external-color-hover: #7fbbb3 !important;
  --link-unresolved-color: #5a93a2 !important;
  --link-unresolved-color-hover: #b87b9d !important;
  --link-unresolved-decoration-color: #59464c !important;
  --link-unresolved-decoration-color-hover: #e67e80 !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-bullet-size: 6px !important;
  --list-indent: 28px !important;
  --list-marker-color: #859289 !important;
  --list-marker-color-collapsed: #5a93a2 !important;
  --list-spacing: 0 !important;
  --menu-background: #333c43 !important;
  --menu-border-color: #4d5960 !important;
  --metadata-border-color: #5d6b66 !important;
  --metadata-divider-color: #5d6b66 !important;
  --metadata-input-text-color: #d3c6aa !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4d5960 !important;
  --modal-background: #333c43 !important;
  --nav-collapse-icon-color: #859289 !important;
  --nav-collapse-icon-color-collapsed: #859289 !important;
  --nav-heading-color: #d3c6aa !important;
  --nav-heading-color-collapsed: #859289 !important;
  --nav-heading-color-hover: #d3c6aa !important;
  --nav-item-color-active: #d3c6aa !important;
  --nav-item-color-highlighted: #5a93a2 !important;
  --nav-item-color-hover: #d3c6aa !important;
  --nav-item-color-selected: #d3c6aa !important;
  --nav-tag-color: #859289 !important;
  --pdf-background: #333c43 !important;
  --pdf-page-background: #333c43 !important;
  --pdf-shadow: 0 0 0 1px #5d6b66 !important;
  --pdf-sidebar-background: #333c43 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #5d6b66 !important;
  --pill-border-color: #5d6b66 !important;
  --pill-border-color-hover: #4d5960 !important;
  --pill-color-hover: #d3c6aa !important;
  --pill-color-remove: #859289 !important;
  --pill-color-remove-hover: #5a93a2 !important;
  --prompt-background: #333c43 !important;
  --ribbon-background: #333c43 !important;
  --ribbon-background-collapsed: #333c43 !important;
  --search-result-background: #333c43 !important;
  --secondary: #5a93a2 !important;
  --setting-group-heading-color: #d3c6aa !important;
  --setting-items-background: #333c43 !important;
  --setting-items-border-color: #5d6b66 !important;
  --shadow-l: 0 4px 14px -2px hsla(0, 0%, 0%, 40%) !important;
  --slider-thumb-border-color: #4d5960 !important;
  --slider-track-background: #5d6b66 !important;
  --status-bar-background: #333c43 !important;
  --status-bar-border-color: #5d6b66 !important;
  --statusline0: #a7c080 !important;
  --statusline1: #d3c6aa !important;
  --statusline2: #e67e80 !important;
  --suggestion-background: #333c43 !important;
  --tab-background-active: #333c43 !important;
  --tab-container-background: #333c43 !important;
  --tab-divider-color: #4d5960 !important;
  --tab-outline-color: #5d6b66 !important;
  --tab-switcher-background: #333c43 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #333c43, transparent) !important;
  --tab-text-color: #859289 !important;
  --tab-text-color-focused-active-current: #d3c6aa !important;
  --tab-text-color-focused-highlighted: #5a93a2 !important;
  --table-add-button-border-color: #5d6b66 !important;
  --table-background: #434f55 !important;
  --table-border-color: #5d6b66 !important;
  --table-drag-handle-background-active: #569d79 !important;
  --table-drag-handle-color: #859289 !important;
  --table-header-background: #48584e !important;
  --table-header-background-hover: #48584e !important;
  --table-header-border-color: #5d6b66 !important;
  --table-header-color: #d3c6aa !important;
  --table-row-alt-background: #3a464c !important;
  --table-row-alt-background-hover: #434f55 !important;
  --table-row-background-hover: #555f66 !important;
  --table-selection-border-color: #569d79 !important;
  --tag-background: hsla(254, 80%, 68%, 0.1) !important;
  --tag-background-hover: hsla(254, 80%, 68%, 0.2) !important;
  --tag-color: #5a93a2 !important;
  --tag-color-hover: #5a93a2 !important;
  --tag-color-hsl: 254, 80%, 68% !important;
  --tertiary: #b87b9d !important;
  --text-accent: #5a93a2 !important;
  --text-accent-hover: #b87b9d !important;
  --text-faint: #859289 !important;
  --text-highlight-bg: #55544a !important;
  --text-normal: #d3c6aa !important;
  --text-selection: #5c3f4f !important;
  --textHighlight: #55544a !important;
  --titlebar-background: #333c43 !important;
  --titlebar-background-focused: #333c43 !important;
  --titlebar-border-color: #5d6b66 !important;
  --titlebar-text-color-focused: #d3c6aa !important;
  --vault-profile-color: #d3c6aa !important;
  --vault-profile-color-hover: #d3c6aa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(58, 70, 76);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(51, 60, 67);
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(93, 107, 102);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(93, 107, 102);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(51, 60, 67);
  border-left-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(85, 84, 74);
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body del {
  color: rgb(133, 146, 137);
  outline: rgb(133, 146, 137) none 0px;
  text-decoration-color: rgb(133, 146, 137);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(211, 198, 170);
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(133, 146, 137);
  border-radius: 25%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(127, 187, 179);
  border-color: rgb(127, 187, 179);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration-color: rgb(90, 147, 162);
  transition: opacity;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 157, 121);
  outline: rgb(86, 157, 121) none 0px;
  text-decoration-color: rgb(86, 157, 121);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline dashed rgb(89, 70, 76);
  text-decoration-color: rgb(89, 70, 76);
  text-decoration-style: dashed;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body dt {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(133, 146, 137);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(62, 75, 80, 0.7);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(67, 79, 85);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(58, 70, 76);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(72, 88, 78);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(167, 192, 128);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(167, 192, 128);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(167, 192, 128);
  border-left-color: rgb(167, 192, 128);
  border-right-color: rgb(167, 192, 128);
  border-top-color: rgb(167, 192, 128);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  padding-top: 30px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(218, 99, 98);
  border-left-color: rgb(218, 99, 98);
  border-right-color: rgb(218, 99, 98);
  border-top-color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgba(62, 75, 80, 0.7);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(62, 75, 80, 0.7);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(133, 146, 137);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(133, 146, 137);
  border-right-color: rgb(133, 146, 137);
  border-top-color: rgb(133, 146, 137);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(76, 175, 80);
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: color(srgb 0.465098 0.736863 0.476078);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgba(41, 49, 54, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
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

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1'/%3E%3Cpath d='M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="graph"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3v16a2 2 0 0 0 2 2h16'/%3E%3Cpath d='m19 9-5 5-4-4-3 3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2'/%3E%3C/svg%3E");
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
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(51, 60, 67);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 14px -2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(51, 60, 67);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body h1 {
  color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body h2 {
  color: rgb(215, 127, 72);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body h3 {
  color: rgb(191, 152, 61);
}

html[saved-theme="dark"] body h4 {
  color: rgb(137, 156, 64);
}

html[saved-theme="dark"] body h5 {
  color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body h6 {
  color: rgb(184, 123, 157);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 198, 170);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(51, 60, 67);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(93, 107, 102);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(93, 107, 102);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(93, 107, 102);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(93, 107, 102);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(51, 60, 67);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body abbr {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body summary {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(139, 108, 239, 0.1);
  color: rgb(90, 147, 162);
}`,
  },
  light: {
    base: `:root:root {
  --background-embed: rgb(238 236 213 / 70%) !important;
  --background-embed-transparent: rgb(238 236 213 / 70%) !important;
  --background-modifier-border: #bec5b2 !important;
  --background-modifier-border-hover: #edeada !important;
  --background-primary: #fffbef !important;
  --background-primary-alt: #fffbef !important;
  --background-primary-rgb: 255, 251, 239 !important;
  --background-secondary: #fffbef !important;
  --background-secondary-alt: #fffbef !important;
  --bases-cards-background: #fffbef !important;
  --bases-cards-cover-background: #fffbef !important;
  --bases-cards-shadow: 0 0 0 1px #bec5b2 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #edeada !important;
  --bases-embed-border-color: #bec5b2 !important;
  --bases-table-border-color: #bec5b2 !important;
  --bases-table-cell-background-active: #fffbef !important;
  --bases-table-cell-background-disabled: #fffbef !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #569d79 !important;
  --bases-table-group-background: #fffbef !important;
  --bases-table-header-background: #fffbef !important;
  --bases-table-row-background-hover: #e8e5d5 !important;
  --bases-table-summary-background: #fffbef !important;
  --bg-blue: #ecf5ed !important;
  --bg-dim: #f2efdf !important;
  --bg-dim-rgb: 242, 239, 223 !important;
  --bg-green: #f3f5d9 !important;
  --bg-red: #ffe7de !important;
  --bg-visual: #ded8db !important;
  --bg-yellow: #fef2d5 !important;
  --bg0: #fffbef !important;
  --bg0-rgb: 255, 251, 239 !important;
  --bg1: #f8f5e4 !important;
  --bg2: #f2efdf !important;
  --bg3: #edeada !important;
  --bg4: #e8e5d5 !important;
  --bg5: #bec5b2 !important;
  --blockquote-background-color: rgb(238 236 213 / 70%) !important;
  --blockquote-border-color: #569d79 !important;
  --blur-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent)) !important;
  --canvas-background: #fffbef !important;
  --canvas-card-label-color: #939f91 !important;
  --canvas-dot-pattern: #ababab !important;
  --caret-color: #5c6a72 !important;
  --checkbox-border-color: #939f91 !important;
  --checkbox-color: #3a94c5 !important;
  --checkbox-color-hover: #5a93a2 !important;
  --checkbox-marker-color: #fffbef !important;
  --checkbox-radius: 25% !important;
  --checkbox-size: 14px !important;
  --code-background: #f2efdf !important;
  --code-border-color: #bec5b2 !important;
  --code-comment: #939f91 !important;
  --code-function: #8da101 !important;
  --code-header: #0004 !important;
  --code-important: #f85552 !important;
  --code-inline: #3a94c5 !important;
  --code-keyword: #3a94c5 !important;
  --code-normal: #5c6a72 !important;
  --code-operator: #f57d26 !important;
  --code-property: #35a77c !important;
  --code-punctuation: #939f91 !important;
  --code-string: #dfa000 !important;
  --code-tag: #f57d26 !important;
  --code-value: #df69ba !important;
  --collapse-icon-color: #939f91 !important;
  --collapse-icon-color-collapsed: #5a93a2 !important;
  --dark: #5c6a72 !important;
  --darkgray: #5c6a72 !important;
  --divider-color: #bec5b2 !important;
  --divider-color-hover: #569d79 !important;
  --embed-block-shadow-hover: 0 4px 14px -2px hsla(0, 0%, 0%, 40%) !important;
  --embed-border-start: 2px solid #569d79 !important;
  --fg: #5c6a72 !important;
  --fg-aqua: #35a77c !important;
  --fg-blue: #3a94c5 !important;
  --fg-green: #8da101 !important;
  --fg-orange: #f57d26 !important;
  --fg-purple: #df69ba !important;
  --fg-red: #f85552 !important;
  --fg-yellow: #dfa000 !important;
  --file-folding-offset: 22px !important;
  --file-header-background: #fffbef !important;
  --file-header-background-focused: #fffbef !important;
  --flair-color: #5c6a72 !important;
  --footnote-divider-color: #bec5b2 !important;
  --footnote-id-color-no-occurrences: #939f91 !important;
  --graph-node-focused: #5a93a2 !important;
  --graph-node-unresolved: #939f91 !important;
  --graph-text: #5c6a72 !important;
  --gray: #939f91 !important;
  --grey0: #a6b0a0 !important;
  --grey1: #939f91 !important;
  --grey2: #829181 !important;
  --h1-color: #f85552 !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2.125em !important;
  --h1-weight: 500 !important;
  --h2-color: #f88f44 !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.625em !important;
  --h2-weight: 500 !important;
  --h3-color: #f3b931 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.375em !important;
  --h3-weight: 500 !important;
  --h4-color: #abd113 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 500 !important;
  --h5-color: #5a93a2 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 500 !important;
  --h6-color: #dd2b8d !important;
  --h6-weight: 500 !important;
  --header-aqua: #569d79 !important;
  --header-blue: #5a93a2 !important;
  --header-green: #abd113 !important;
  --header-orange: #f88f44 !important;
  --header-purple: #dd2b8d !important;
  --header-red: #f85552 !important;
  --header-yellow: #f3b931 !important;
  --highlight: #fef2d5 !important;
  --hr-color: #bec5b2 !important;
  --icon-color-active: #5a93a2 !important;
  --icon-color-focused: #5c6a72 !important;
  --inline-title-color: #f85552 !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 2.125em !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #939f91 !important;
  --input-placeholder-color: #939f91 !important;
  --interactive-accent: #569d79 !important;
  --interactive-accent-hover: #5a93a2 !important;
  --interactive-before: #e8e5d5 !important;
  --light: #fffbef !important;
  --lightgray: #fffbef !important;
  --link-color: #569d79 !important;
  --link-color-hover: #35a77c !important;
  --link-external-color: #5a93a2 !important;
  --link-external-color-hover: #3a94c5 !important;
  --link-unresolved-color: #5a93a2 !important;
  --link-unresolved-color-hover: #dd2b8d !important;
  --link-unresolved-decoration-color: #ffe7de !important;
  --link-unresolved-decoration-color-hover: #f85552 !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-bullet-size: 6px !important;
  --list-indent: 28px !important;
  --list-marker-color: #939f91 !important;
  --list-marker-color-collapsed: #5a93a2 !important;
  --list-spacing: 0 !important;
  --menu-background: #fffbef !important;
  --menu-border-color: #edeada !important;
  --metadata-border-color: #bec5b2 !important;
  --metadata-divider-color: #bec5b2 !important;
  --metadata-input-text-color: #5c6a72 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #edeada !important;
  --modal-background: #fffbef !important;
  --nav-collapse-icon-color: #939f91 !important;
  --nav-collapse-icon-color-collapsed: #939f91 !important;
  --nav-heading-color: #5c6a72 !important;
  --nav-heading-color-collapsed: #939f91 !important;
  --nav-heading-color-hover: #5c6a72 !important;
  --nav-item-color-active: #5c6a72 !important;
  --nav-item-color-highlighted: #5a93a2 !important;
  --nav-item-color-hover: #5c6a72 !important;
  --nav-item-color-selected: #5c6a72 !important;
  --nav-tag-color: #939f91 !important;
  --pdf-background: #fffbef !important;
  --pdf-page-background: #fffbef !important;
  --pdf-sidebar-background: #fffbef !important;
  --pill-border-color: #bec5b2 !important;
  --pill-border-color-hover: #edeada !important;
  --pill-color-hover: #5c6a72 !important;
  --pill-color-remove: #939f91 !important;
  --pill-color-remove-hover: #5a93a2 !important;
  --prompt-background: #fffbef !important;
  --raised-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent)) !important;
  --ribbon-background: #fffbef !important;
  --ribbon-background-collapsed: #fffbef !important;
  --search-result-background: #fffbef !important;
  --secondary: #5a93a2 !important;
  --setting-group-heading-color: #5c6a72 !important;
  --setting-items-background: #fffbef !important;
  --setting-items-border-color: #bec5b2 !important;
  --shadow-l: 0 4px 14px -2px hsla(0, 0%, 0%, 40%) !important;
  --slider-thumb-border-color: #edeada !important;
  --slider-track-background: #bec5b2 !important;
  --status-bar-background: #fffbef !important;
  --status-bar-border-color: #bec5b2 !important;
  --statusline0: #93b259 !important;
  --statusline1: #708089 !important;
  --statusline2: #e66868 !important;
  --suggestion-background: #fffbef !important;
  --tab-background-active: #fffbef !important;
  --tab-container-background: #fffbef !important;
  --tab-divider-color: #edeada !important;
  --tab-outline-color: #bec5b2 !important;
  --tab-switcher-background: #fffbef !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffbef, transparent) !important;
  --tab-text-color: #939f91 !important;
  --tab-text-color-focused-active-current: #5c6a72 !important;
  --tab-text-color-focused-highlighted: #5a93a2 !important;
  --table-add-button-border-color: #bec5b2 !important;
  --table-background: #f2efdf !important;
  --table-border-color: #bec5b2 !important;
  --table-drag-handle-background-active: #569d79 !important;
  --table-drag-handle-color: #939f91 !important;
  --table-header-background: #f3f5d9 !important;
  --table-header-background-hover: #f3f5d9 !important;
  --table-header-border-color: #bec5b2 !important;
  --table-header-color: #5c6a72 !important;
  --table-row-alt-background: #f8f5e4 !important;
  --table-row-alt-background-hover: #f2efdf !important;
  --table-row-background-hover: #e8e5d5 !important;
  --table-selection-border-color: #569d79 !important;
  --tag-background: hsla(254, 80%, 68%, 0.1) !important;
  --tag-background-hover: hsla(254, 80%, 68%, 0.2) !important;
  --tag-color: #5a93a2 !important;
  --tag-color-hover: #5a93a2 !important;
  --tag-color-hsl: 254, 80%, 68% !important;
  --tertiary: #dd2b8d !important;
  --text-accent: #5a93a2 !important;
  --text-accent-hover: #dd2b8d !important;
  --text-faint: #939f91 !important;
  --text-highlight-bg: #fef2d5 !important;
  --text-normal: #5c6a72 !important;
  --text-selection: #ded8db !important;
  --textHighlight: #fef2d5 !important;
  --titlebar-background: #fffbef !important;
  --titlebar-background-focused: #fffbef !important;
  --titlebar-border-color: #bec5b2 !important;
  --titlebar-text-color-focused: #5c6a72 !important;
  --vault-profile-color: #5c6a72 !important;
  --vault-profile-color-hover: #5c6a72 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(248, 245, 228);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 251, 239);
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(190, 197, 178);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  color: rgb(90, 147, 162);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(190, 197, 178);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 251, 239);
  border-left-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(254, 242, 213);
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body del {
  color: rgb(147, 159, 145);
  outline: rgb(147, 159, 145) none 0px;
  text-decoration-color: rgb(147, 159, 145);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(92, 106, 114);
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(147, 159, 145);
  border-radius: 25%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(58, 148, 197);
  border-color: rgb(58, 148, 197);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration-color: rgb(90, 147, 162);
  transition: opacity;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 157, 121);
  outline: rgb(86, 157, 121) none 0px;
  text-decoration-color: rgb(86, 157, 121);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline dashed rgb(255, 231, 222);
  text-decoration-color: rgb(255, 231, 222);
  text-decoration-style: dashed;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body dt {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol > li {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul > li {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(147, 159, 145);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(238, 236, 213, 0.7);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body table {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(242, 239, 223);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(248, 245, 228);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body tr {
  background-color: rgb(243, 245, 217);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(141, 161, 1);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(141, 161, 1);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(141, 161, 1);
  border-left-color: rgb(141, 161, 1);
  border-right-color: rgb(141, 161, 1);
  border-top-color: rgb(141, 161, 1);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  padding-top: 30px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body figcaption {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(248, 85, 82);
  border-left-color: rgb(248, 85, 82);
  border-right-color: rgb(248, 85, 82);
  border-top-color: rgb(248, 85, 82);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgba(238, 236, 213, 0.7);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(238, 236, 213, 0.7);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(147, 159, 145);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(147, 159, 145);
  border-right-color: rgb(147, 159, 145);
  border-top-color: rgb(147, 159, 145);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(76, 175, 80);
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: color(srgb 0.248627 0.520392 0.259608);
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgba(242, 239, 223, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
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

html[saved-theme="light"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1'/%3E%3Cpath d='M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="graph"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3v16a2 2 0 0 0 2 2h16'/%3E%3Cpath d='m19 9-5 5-4-4-3 3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2'/%3E%3C/svg%3E");
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
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 251, 239);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 14px -2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 251, 239);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(90, 147, 162);
}

html[saved-theme="light"] body h1 {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h2 {
  color: rgb(248, 143, 68);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h3 {
  color: rgb(243, 185, 49);
}

html[saved-theme="light"] body h4 {
  color: rgb(171, 209, 19);
}

html[saved-theme="light"] body h5 {
  color: rgb(90, 147, 162);
}

html[saved-theme="light"] body h6 {
  color: rgb(221, 43, 141);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(92, 106, 114);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 251, 239);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(147, 159, 145);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(190, 197, 178);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(190, 197, 178);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(190, 197, 178);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(190, 197, 178);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 251, 239);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body abbr {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body sub {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body summary {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body sup {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(139, 108, 239, 0.1);
  color: rgb(90, 147, 162);
}`,
  },
};
