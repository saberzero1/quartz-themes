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
  --background-embed: rgba(62, 75, 80, 0.7);
  --background-embed-transparent: rgba(62, 75, 80, 0.7);
  --background-modifier-border: #5d6b66;
  --background-modifier-border-hover: #4d5960;
  --background-primary: #333c43;
  --background-primary-alt: #333c43;
  --background-primary-rgb: 51, 60, 67;
  --background-secondary: #333c43;
  --background-secondary-alt: #333c43;
  --bases-cards-background: #333c43;
  --bases-cards-cover-background: #333c43;
  --bases-cards-shadow: 0 0 0 1px #5d6b66;
  --bases-cards-shadow-hover: 0 0 0 1px #4d5960;
  --bases-embed-border-color: #5d6b66;
  --bases-table-border-color: #5d6b66;
  --bases-table-cell-background-active: #333c43;
  --bases-table-cell-background-disabled: #333c43;
  --bases-table-cell-shadow-focus: 0 0 0 2px #569d79;
  --bases-table-group-background: #333c43;
  --bases-table-header-background: #333c43;
  --bases-table-row-background-hover: #555f66;
  --bases-table-summary-background: #333c43;
  --bg-blue: #3f5865;
  --bg-dim: #293136;
  --bg-dim-rgb: 41, 49, 54;
  --bg-green: #48584e;
  --bg-red: #59464c;
  --bg-visual: #5c3f4f;
  --bg-yellow: #55544a;
  --bg0: #333c43;
  --bg0-rgb: 51, 60, 67;
  --bg1: #3a464c;
  --bg2: #434f55;
  --bg3: #4d5960;
  --bg4: #555f66;
  --bg5: #5d6b66;
  --blockquote-background-color: rgba(62, 75, 80, 0.7);
  --blockquote-border-color: #569d79;
  --canvas-background: #333c43;
  --canvas-card-label-color: #859289;
  --canvas-dot-pattern: #666666;
  --caret-color: #d3c6aa;
  --checkbox-border-color: #859289;
  --checkbox-color: #7fbbb3;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #333c43;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --code-background: #293136;
  --code-border-color: #5d6b66;
  --code-comment: #859289;
  --code-function: #a7c080;
  --code-header: #0004;
  --code-important: #e67e80;
  --code-inline: #7fbbb3;
  --code-keyword: #7fbbb3;
  --code-normal: #d3c6aa;
  --code-operator: #e69875;
  --code-property: #83c092;
  --code-punctuation: #859289;
  --code-string: #dbbc7f;
  --code-tag: #e69875;
  --code-value: #d699b6;
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #5a93a2;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #5d6b66;
  --divider-color-hover: #569d79;
  --embed-block-shadow-hover: 0 4px 14px -2px rgba(0, 0, 0, 0.4);
  --embed-border-start: 2px solid #569d79;
  --fg: #d3c6aa;
  --fg-aqua: #83c092;
  --fg-blue: #7fbbb3;
  --fg-green: #a7c080;
  --fg-orange: #e69875;
  --fg-purple: #d699b6;
  --fg-red: #e67e80;
  --fg-yellow: #dbbc7f;
  --file-folding-offset: 22px;
  --file-header-background: #333c43;
  --file-header-background-focused: #333c43;
  --flair-color: #d3c6aa;
  --footnote-divider-color: #5d6b66;
  --footnote-id-color-no-occurrences: #859289;
  --graph-node-focused: #5a93a2;
  --graph-node-unresolved: #859289;
  --graph-text: #d3c6aa;
  --gray: var(--text-faint);
  --grey0: #7a8478;
  --grey1: #859289;
  --grey2: #9da9a0;
  --h1-color: #da6362;
  --h1-line-height: 1.5;
  --h1-size: 2.125em;
  --h1-weight: 500;
  --h2-color: #d77f48;
  --h2-line-height: 1.5;
  --h2-size: 1.625em;
  --h2-weight: 500;
  --h3-color: #bf983d;
  --h3-line-height: 1.5;
  --h3-size: 1.375em;
  --h3-weight: 500;
  --h4-color: #899c40;
  --h4-line-height: 1.5;
  --h4-size: 1.25em;
  --h4-weight: 500;
  --h5-color: #5a93a2;
  --h5-size: 1.125em;
  --h5-weight: 500;
  --h6-color: #b87b9d;
  --h6-weight: 500;
  --header-aqua: #569d79;
  --header-blue: #5a93a2;
  --header-green: #899c40;
  --header-orange: #d77f48;
  --header-purple: #b87b9d;
  --header-red: #da6362;
  --header-yellow: #bf983d;
  --highlight: var(--text-highlight-bg);
  --hr-color: #5d6b66;
  --icon-color-active: #5a93a2;
  --icon-color-focused: #d3c6aa;
  --inline-title-color: #da6362;
  --inline-title-line-height: 1.5;
  --inline-title-size: 2.125em;
  --inline-title-weight: 500;
  --input-date-separator: #859289;
  --input-placeholder-color: #859289;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-before: #555f66;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #569d79;
  --link-color-hover: #83c092;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #7fbbb3;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-color-hover: #b87b9d;
  --link-unresolved-decoration-color: #59464c;
  --link-unresolved-decoration-color-hover: #e67e80;
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 6px;
  --list-indent: 28px;
  --list-marker-color: #859289;
  --list-marker-color-collapsed: #5a93a2;
  --list-spacing: 0;
  --menu-background: #333c43;
  --menu-border-color: #4d5960;
  --metadata-border-color: #5d6b66;
  --metadata-divider-color: #5d6b66;
  --metadata-input-text-color: #d3c6aa;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4d5960;
  --modal-background: #333c43;
  --nav-collapse-icon-color: #859289;
  --nav-collapse-icon-color-collapsed: #859289;
  --nav-heading-color: #d3c6aa;
  --nav-heading-color-collapsed: #859289;
  --nav-heading-color-hover: #d3c6aa;
  --nav-item-color-active: #d3c6aa;
  --nav-item-color-highlighted: #5a93a2;
  --nav-item-color-hover: #d3c6aa;
  --nav-item-color-selected: #d3c6aa;
  --nav-tag-color: #859289;
  --pdf-background: #333c43;
  --pdf-page-background: #333c43;
  --pdf-shadow: 0 0 0 1px #5d6b66;
  --pdf-sidebar-background: #333c43;
  --pdf-thumbnail-shadow: 0 0 0 1px #5d6b66;
  --pill-border-color: #5d6b66;
  --pill-border-color-hover: #4d5960;
  --pill-color-hover: #d3c6aa;
  --pill-color-remove: #859289;
  --pill-color-remove-hover: #5a93a2;
  --prompt-background: #333c43;
  --ribbon-background: #333c43;
  --ribbon-background-collapsed: #333c43;
  --search-result-background: #333c43;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d3c6aa;
  --setting-items-background: #333c43;
  --setting-items-border-color: #5d6b66;
  --shadow-l: 0 4px 14px -2px rgba(0, 0, 0, 0.4);
  --slider-thumb-border-color: #4d5960;
  --slider-track-background: #5d6b66;
  --status-bar-background: #333c43;
  --status-bar-border-color: #5d6b66;
  --statusline0: #a7c080;
  --statusline1: #d3c6aa;
  --statusline2: #e67e80;
  --suggestion-background: #333c43;
  --tab-background-active: #333c43;
  --tab-container-background: #333c43;
  --tab-divider-color: #4d5960;
  --tab-outline-color: #5d6b66;
  --tab-switcher-background: #333c43;
  --tab-switcher-menubar-background: linear-gradient(to top, #333c43, transparent);
  --tab-text-color: #859289;
  --tab-text-color-focused-active-current: #d3c6aa;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #5d6b66;
  --table-background: #434f55;
  --table-border-color: #5d6b66;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #859289;
  --table-header-background: #48584e;
  --table-header-background-hover: #48584e;
  --table-header-border-color: #5d6b66;
  --table-header-color: #d3c6aa;
  --table-row-alt-background: #3a464c;
  --table-row-alt-background-hover: #434f55;
  --table-row-background-hover: #555f66;
  --table-selection-border-color: #569d79;
  --tag-background: rgba(139, 108, 239, 0.1);
  --tag-background-hover: rgba(139, 108, 239, 0.2);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-color-hsl: 254, 80%, 68%;
  --tertiary: var(--text-accent-hover);
  --text-accent: #5a93a2;
  --text-accent-hover: #b87b9d;
  --text-faint: #859289;
  --text-highlight-bg: #55544a;
  --text-normal: #d3c6aa;
  --text-selection: #5c3f4f;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #333c43;
  --titlebar-background-focused: #333c43;
  --titlebar-border-color: #5d6b66;
  --titlebar-text-color-focused: #d3c6aa;
  --vault-profile-color: #d3c6aa;
  --vault-profile-color-hover: #d3c6aa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(93, 107, 102);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(51, 60, 67);
  border-left-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

body div#quartz-root {
  background-color: rgb(51, 60, 67);
  color: rgb(211, 198, 170);
}`,
    typography: `body .page article p > b, b {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration: rgb(214, 153, 182);
  text-decoration-color: rgb(214, 153, 182);
}

body .page article p > em, em {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration: rgb(214, 153, 182);
  text-decoration-color: rgb(214, 153, 182);
}

body .page article p > i, i {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration: rgb(214, 153, 182);
  text-decoration-color: rgb(214, 153, 182);
}

body .page article p > strong, strong {
  color: rgb(214, 153, 182);
  outline: rgb(214, 153, 182) none 0px;
  text-decoration: rgb(214, 153, 182);
  text-decoration-color: rgb(214, 153, 182);
}

body .text-highlight {
  background-color: rgb(85, 84, 74);
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body del {
  color: rgb(133, 146, 137);
  outline: rgb(133, 146, 137) none 0px;
  text-decoration: line-through rgb(133, 146, 137);
  text-decoration-color: rgb(133, 146, 137);
}`,
    links: `body a.external, footer a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline rgb(90, 147, 162);
  text-decoration-color: rgb(90, 147, 162);
  transition: opacity;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 157, 121);
  outline: rgb(86, 157, 121) none 0px;
  text-decoration: underline rgb(86, 157, 121);
  text-decoration-color: rgb(86, 157, 121);
}

body a.internal.broken {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline dashed rgb(89, 70, 76);
  text-decoration-color: rgb(89, 70, 76);
  text-decoration-style: dashed;
}`,
    lists: `body dd {
  color: rgb(211, 198, 170);
}

body dt {
  color: rgb(211, 198, 170);
}

body ol > li {
  color: rgb(211, 198, 170);
}

body ol.overflow {
  background-color: rgb(51, 60, 67);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body ul > li {
  color: rgb(211, 198, 170);
}

body ul.overflow {
  background-color: rgb(51, 60, 67);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(133, 146, 137);
  text-decoration: rgb(133, 146, 137);
}

body blockquote {
  background-color: rgba(62, 75, 80, 0.7);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body table {
  color: rgb(211, 198, 170);
}

body tbody tr:nth-child(even) {
  background-color: rgb(67, 79, 85);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(58, 70, 76);
}

body td {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

body th {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

body tr {
  background-color: rgb(72, 88, 78);
}`,
    code: `body code {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

body pre > code > [data-line] {
  border-left-color: rgb(167, 192, 128);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(167, 192, 128);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(167, 192, 128);
  border-left-color: rgb(167, 192, 128);
  border-right-color: rgb(167, 192, 128);
  border-top-color: rgb(167, 192, 128);
}

body pre > code, pre:has(> code) {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  padding-top: 30px;
}

body pre:has(> code) {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}`,
    images: `body audio {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body figcaption {
  color: rgb(211, 198, 170);
}

body figure {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body img {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body video {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    embeds: `body .file-embed {
  background-color: rgba(62, 75, 80, 0.7);
}

body .footnotes {
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body .transclude {
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

body .transclude-inner {
  background-color: rgba(62, 75, 80, 0.7);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}`,
    checkboxes: `body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='*'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='-'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='/'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='>'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='?'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='I'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='S'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='b'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='c'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='d'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='f'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='i'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='k'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='l'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='p'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='u'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body li.task-list-item[data-task='w'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}`,
    callouts: `body .callout .callout-title {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body .callout > .callout-content {
  background-color: rgba(41, 49, 54, 0.3);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space {
  background-color: rgb(51, 60, 67);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 14px -2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(51, 60, 67);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(211, 198, 170);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
}

body a.internal.tag-link::before {
  color: rgb(90, 147, 162);
}

body h1 {
  color: rgb(218, 99, 98);
}

body h2 {
  color: rgb(215, 127, 72);
}

body h2.page-title, h2.page-title a {
  color: rgb(218, 99, 98);
}

body h3 {
  color: rgb(191, 152, 61);
}

body h4 {
  color: rgb(137, 156, 64);
}

body h5 {
  color: rgb(90, 147, 162);
}

body h6 {
  color: rgb(184, 123, 157);
}

body hr {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

body ::-webkit-scrollbar-corner {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}

body ::-webkit-scrollbar-track {
  background: rgb(51, 60, 67) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 60, 67);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}`,
    footer: `body footer {
  background-color: rgb(51, 60, 67);
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(211, 198, 170);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    misc: `body .katex-display {
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

body .metadata {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}

body .navigation-progress {
  background-color: rgb(51, 60, 67);
}

body .page-header h2.page-title {
  color: rgb(211, 198, 170);
}

body abbr {
  color: rgb(211, 198, 170);
  text-decoration: underline dotted rgb(211, 198, 170);
}

body details {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body kbd {
  background-color: rgb(41, 49, 54);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

body progress {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

body sub {
  color: rgb(211, 198, 170);
}

body summary {
  color: rgb(211, 198, 170);
}

body sup {
  color: rgb(211, 198, 170);
}`,
  },
  light: {
    base: `:root:root {
  --background-embed: rgb(238 236 213 / 70%);
  --background-embed-transparent: rgb(238 236 213 / 70%);
  --background-modifier-border: #bec5b2;
  --background-modifier-border-hover: #edeada;
  --background-primary: #fffbef;
  --background-primary-alt: #fffbef;
  --background-primary-rgb: 255, 251, 239;
  --background-secondary: #fffbef;
  --background-secondary-alt: #fffbef;
  --bases-cards-background: #fffbef;
  --bases-cards-cover-background: #fffbef;
  --bases-cards-shadow: 0 0 0 1px #bec5b2;
  --bases-cards-shadow-hover: 0 0 0 1px #edeada;
  --bases-embed-border-color: #bec5b2;
  --bases-table-border-color: #bec5b2;
  --bases-table-cell-background-active: #fffbef;
  --bases-table-cell-background-disabled: #fffbef;
  --bases-table-cell-shadow-focus: 0 0 0 2px #569d79;
  --bases-table-group-background: #fffbef;
  --bases-table-header-background: #fffbef;
  --bases-table-row-background-hover: #e8e5d5;
  --bases-table-summary-background: #fffbef;
  --bg-blue: #ecf5ed;
  --bg-dim: #f2efdf;
  --bg-dim-rgb: 242, 239, 223;
  --bg-green: #f3f5d9;
  --bg-red: #ffe7de;
  --bg-visual: #ded8db;
  --bg-yellow: #fef2d5;
  --bg0: #fffbef;
  --bg0-rgb: 255, 251, 239;
  --bg1: #f8f5e4;
  --bg2: #f2efdf;
  --bg3: #edeada;
  --bg4: #e8e5d5;
  --bg5: #bec5b2;
  --blockquote-background-color: rgb(238 236 213 / 70%);
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --canvas-background: #fffbef;
  --canvas-card-label-color: #939f91;
  --canvas-dot-pattern: #ababab;
  --caret-color: #5c6a72;
  --checkbox-border-color: #939f91;
  --checkbox-color: #3a94c5;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #fffbef;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --code-background: #f2efdf;
  --code-border-color: #bec5b2;
  --code-comment: #939f91;
  --code-function: #8da101;
  --code-header: #0004;
  --code-important: #f85552;
  --code-inline: #3a94c5;
  --code-keyword: #3a94c5;
  --code-normal: #5c6a72;
  --code-operator: #f57d26;
  --code-property: #35a77c;
  --code-punctuation: #939f91;
  --code-string: #dfa000;
  --code-tag: #f57d26;
  --code-value: #df69ba;
  --collapse-icon-color: #939f91;
  --collapse-icon-color-collapsed: #5a93a2;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #bec5b2;
  --divider-color-hover: #569d79;
  --embed-block-shadow-hover: 0 4px 14px -2px rgba(0, 0, 0, 0.4);
  --embed-border-start: 2px solid #569d79;
  --fg: #5c6a72;
  --fg-aqua: #35a77c;
  --fg-blue: #3a94c5;
  --fg-green: #8da101;
  --fg-orange: #f57d26;
  --fg-purple: #df69ba;
  --fg-red: #f85552;
  --fg-yellow: #dfa000;
  --file-folding-offset: 22px;
  --file-header-background: #fffbef;
  --file-header-background-focused: #fffbef;
  --flair-color: #5c6a72;
  --footnote-divider-color: #bec5b2;
  --footnote-id-color-no-occurrences: #939f91;
  --graph-node-focused: #5a93a2;
  --graph-node-unresolved: #939f91;
  --graph-text: #5c6a72;
  --gray: var(--text-faint);
  --grey0: #a6b0a0;
  --grey1: #939f91;
  --grey2: #829181;
  --h1-color: #f85552;
  --h1-line-height: 1.5;
  --h1-size: 2.125em;
  --h1-weight: 500;
  --h2-color: #f88f44;
  --h2-line-height: 1.5;
  --h2-size: 1.625em;
  --h2-weight: 500;
  --h3-color: #f3b931;
  --h3-line-height: 1.5;
  --h3-size: 1.375em;
  --h3-weight: 500;
  --h4-color: #abd113;
  --h4-line-height: 1.5;
  --h4-size: 1.25em;
  --h4-weight: 500;
  --h5-color: #5a93a2;
  --h5-size: 1.125em;
  --h5-weight: 500;
  --h6-color: #dd2b8d;
  --h6-weight: 500;
  --header-aqua: #569d79;
  --header-blue: #5a93a2;
  --header-green: #abd113;
  --header-orange: #f88f44;
  --header-purple: #dd2b8d;
  --header-red: #f85552;
  --header-yellow: #f3b931;
  --highlight: var(--text-highlight-bg);
  --hr-color: #bec5b2;
  --icon-color-active: #5a93a2;
  --icon-color-focused: #5c6a72;
  --inline-title-color: #f85552;
  --inline-title-line-height: 1.5;
  --inline-title-size: 2.125em;
  --inline-title-weight: 500;
  --input-date-separator: #939f91;
  --input-placeholder-color: #939f91;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-before: #e8e5d5;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #569d79;
  --link-color-hover: #35a77c;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #3a94c5;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-color-hover: #dd2b8d;
  --link-unresolved-decoration-color: #ffe7de;
  --link-unresolved-decoration-color-hover: #f85552;
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 6px;
  --list-indent: 28px;
  --list-marker-color: #939f91;
  --list-marker-color-collapsed: #5a93a2;
  --list-spacing: 0;
  --menu-background: #fffbef;
  --menu-border-color: #edeada;
  --metadata-border-color: #bec5b2;
  --metadata-divider-color: #bec5b2;
  --metadata-input-text-color: #5c6a72;
  --metadata-property-box-shadow-hover: 0 0 0 1px #edeada;
  --modal-background: #fffbef;
  --nav-collapse-icon-color: #939f91;
  --nav-collapse-icon-color-collapsed: #939f91;
  --nav-heading-color: #5c6a72;
  --nav-heading-color-collapsed: #939f91;
  --nav-heading-color-hover: #5c6a72;
  --nav-item-color-active: #5c6a72;
  --nav-item-color-highlighted: #5a93a2;
  --nav-item-color-hover: #5c6a72;
  --nav-item-color-selected: #5c6a72;
  --nav-tag-color: #939f91;
  --pdf-background: #fffbef;
  --pdf-page-background: #fffbef;
  --pdf-sidebar-background: #fffbef;
  --pill-border-color: #bec5b2;
  --pill-border-color-hover: #edeada;
  --pill-color-hover: #5c6a72;
  --pill-color-remove: #939f91;
  --pill-color-remove-hover: #5a93a2;
  --prompt-background: #fffbef;
  --raised-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --ribbon-background: #fffbef;
  --ribbon-background-collapsed: #fffbef;
  --search-result-background: #fffbef;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #5c6a72;
  --setting-items-background: #fffbef;
  --setting-items-border-color: #bec5b2;
  --shadow-l: 0 4px 14px -2px rgba(0, 0, 0, 0.4);
  --slider-thumb-border-color: #edeada;
  --slider-track-background: #bec5b2;
  --status-bar-background: #fffbef;
  --status-bar-border-color: #bec5b2;
  --statusline0: #93b259;
  --statusline1: #708089;
  --statusline2: #e66868;
  --suggestion-background: #fffbef;
  --tab-background-active: #fffbef;
  --tab-container-background: #fffbef;
  --tab-divider-color: #edeada;
  --tab-outline-color: #bec5b2;
  --tab-switcher-background: #fffbef;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffbef, transparent);
  --tab-text-color: #939f91;
  --tab-text-color-focused-active-current: #5c6a72;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #bec5b2;
  --table-background: #f2efdf;
  --table-border-color: #bec5b2;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #939f91;
  --table-header-background: #f3f5d9;
  --table-header-background-hover: #f3f5d9;
  --table-header-border-color: #bec5b2;
  --table-header-color: #5c6a72;
  --table-row-alt-background: #f8f5e4;
  --table-row-alt-background-hover: #f2efdf;
  --table-row-background-hover: #e8e5d5;
  --table-selection-border-color: #569d79;
  --tag-background: rgba(139, 108, 239, 0.1);
  --tag-background-hover: rgba(139, 108, 239, 0.2);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-color-hsl: 254, 80%, 68%;
  --tertiary: var(--text-accent-hover);
  --text-accent: #5a93a2;
  --text-accent-hover: #dd2b8d;
  --text-faint: #939f91;
  --text-highlight-bg: #fef2d5;
  --text-normal: #5c6a72;
  --text-selection: #ded8db;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #fffbef;
  --titlebar-background-focused: #fffbef;
  --titlebar-border-color: #bec5b2;
  --titlebar-text-color-focused: #5c6a72;
  --vault-profile-color: #5c6a72;
  --vault-profile-color-hover: #5c6a72;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(190, 197, 178);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 251, 239);
  border-left-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

body div#quartz-root {
  background-color: rgb(255, 251, 239);
  color: rgb(92, 106, 114);
}`,
    typography: `body .page article p > b, b {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration: rgb(223, 105, 186);
  text-decoration-color: rgb(223, 105, 186);
}

body .page article p > em, em {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration: rgb(223, 105, 186);
  text-decoration-color: rgb(223, 105, 186);
}

body .page article p > i, i {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration: rgb(223, 105, 186);
  text-decoration-color: rgb(223, 105, 186);
}

body .page article p > strong, strong {
  color: rgb(223, 105, 186);
  outline: rgb(223, 105, 186) none 0px;
  text-decoration: rgb(223, 105, 186);
  text-decoration-color: rgb(223, 105, 186);
}

body .text-highlight {
  background-color: rgb(254, 242, 213);
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body del {
  color: rgb(147, 159, 145);
  outline: rgb(147, 159, 145) none 0px;
  text-decoration: line-through rgb(147, 159, 145);
  text-decoration-color: rgb(147, 159, 145);
}`,
    links: `body a.external, footer a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline rgb(90, 147, 162);
  text-decoration-color: rgb(90, 147, 162);
  transition: opacity;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 157, 121);
  outline: rgb(86, 157, 121) none 0px;
  text-decoration: underline rgb(86, 157, 121);
  text-decoration-color: rgb(86, 157, 121);
}

body a.internal.broken {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline dashed rgb(255, 231, 222);
  text-decoration-color: rgb(255, 231, 222);
  text-decoration-style: dashed;
}`,
    lists: `body dd {
  color: rgb(92, 106, 114);
}

body dt {
  color: rgb(92, 106, 114);
}

body ol > li {
  color: rgb(92, 106, 114);
}

body ol.overflow {
  background-color: rgb(255, 251, 239);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body ul > li {
  color: rgb(92, 106, 114);
}

body ul.overflow {
  background-color: rgb(255, 251, 239);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(147, 159, 145);
  text-decoration: rgb(147, 159, 145);
}

body blockquote {
  background-color: rgba(238, 236, 213, 0.7);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body table {
  color: rgb(92, 106, 114);
}

body tbody tr:nth-child(even) {
  background-color: rgb(242, 239, 223);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(248, 245, 228);
}

body td {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

body th {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

body tr {
  background-color: rgb(243, 245, 217);
}`,
    code: `body code {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

body pre > code > [data-line] {
  border-left-color: rgb(141, 161, 1);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(141, 161, 1);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(141, 161, 1);
  border-left-color: rgb(141, 161, 1);
  border-right-color: rgb(141, 161, 1);
  border-top-color: rgb(141, 161, 1);
}

body pre > code, pre:has(> code) {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  padding-top: 30px;
}

body pre:has(> code) {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}`,
    images: `body audio {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body figcaption {
  color: rgb(92, 106, 114);
}

body figure {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body img {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body video {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    embeds: `body .file-embed {
  background-color: rgba(238, 236, 213, 0.7);
}

body .footnotes {
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

body .transclude {
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

body .transclude-inner {
  background-color: rgba(238, 236, 213, 0.7);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}`,
    checkboxes: `body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='*'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='-'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='/'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='>'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='?'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='I'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='S'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='b'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='c'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='d'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='f'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='i'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='k'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='l'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='p'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='u'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='w'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}`,
    callouts: `body .callout .callout-title {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body .callout > .callout-content {
  background-color: rgba(242, 239, 223, 0.3);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 251, 239);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 14px -2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 251, 239);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(92, 106, 114);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
}

body a.internal.tag-link::before {
  color: rgb(90, 147, 162);
}

body h1 {
  color: rgb(248, 85, 82);
}

body h2 {
  color: rgb(248, 143, 68);
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 85, 82);
}

body h3 {
  color: rgb(243, 185, 49);
}

body h4 {
  color: rgb(171, 209, 19);
}

body h5 {
  color: rgb(90, 147, 162);
}

body h6 {
  color: rgb(221, 43, 141);
}

body hr {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

body ::-webkit-scrollbar-corner {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}

body ::-webkit-scrollbar-track {
  background: rgb(255, 251, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 251, 239);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}`,
    footer: `body footer {
  background-color: rgb(255, 251, 239);
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(92, 106, 114);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body ul.section-ul {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(147, 159, 145);
}`,
    misc: `body .katex-display {
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

body .metadata {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}

body .navigation-progress {
  background-color: rgb(255, 251, 239);
}

body .page-header h2.page-title {
  color: rgb(92, 106, 114);
}

body abbr {
  color: rgb(92, 106, 114);
  text-decoration: underline dotted rgb(92, 106, 114);
}

body details {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body kbd {
  background-color: rgb(242, 239, 223);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

body progress {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body sub {
  color: rgb(92, 106, 114);
}

body summary {
  color: rgb(92, 106, 114);
}

body sup {
  color: rgb(92, 106, 114);
}`,
  },
};
