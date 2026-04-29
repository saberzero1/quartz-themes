import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "everforest-enchanted",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "everforest-enchanted-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-embed: var(--background-embed-transparent, rgba(62, 75, 80, 0.7));
  --background-embed-transparent: rgba(62, 75, 80, 0.7);
  --background-modifier-border: var(--bg5, #5d6b66);
  --background-modifier-border-hover: var(--bg3, #4d5960);
  --background-primary: var(--bg0, #333c43);
  --background-primary-alt: var(--bg0, #333c43);
  --background-primary-rgb: var(--bg0-rgb, 51, 60, 67);
  --background-secondary: var(--bg0, #333c43);
  --background-secondary-alt: var(--bg0, #333c43);
  --bases-cards-background: var(--background-primary, #333c43);
  --bases-cards-cover-background: var(--background-primary-alt, #333c43);
  --bases-embed-border-color: var(--background-modifier-border, #5d6b66);
  --bases-table-border-color: var(--table-border-color, #5d6b66);
  --bases-table-cell-background-active: var(--background-primary, #333c43);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #333c43);
  --bases-table-group-background: var(--background-primary-alt, #333c43);
  --bases-table-header-background: var(--background-primary, #333c43);
  --bases-table-row-background-hover: var(--table-row-background-hover, #555f66);
  --bases-table-summary-background: var(--background-primary, #333c43);
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
  --blockquote-background-color: var(--background-embed, rgba(62, 75, 80, 0.7));
  --blockquote-border-color: var(--interactive-accent, #569d79);
  --canvas-background: var(--background-primary, #333c43);
  --canvas-card-label-color: var(--text-faint, #859289);
  --canvas-dot-pattern: var(--color-base-50, #666666);
  --caret-color: var(--text-normal, #d3c6aa);
  --checkbox-border-color: var(--text-faint, #859289);
  --checkbox-color: var(--fg-blue, #7fbbb3);
  --checkbox-color-hover: var(--interactive-accent-hover, #5a93a2);
  --checkbox-marker-color: var(--background-primary, #333c43);
  --checkbox-radius: var(--radius-s, 25%);
  --checkbox-size: calc(var(--font-text-size) - 2px);
  --code-background: var(--bg-dim, #293136);
  --code-border-color: var(--background-modifier-border, #5d6b66);
  --code-comment: var(--grey1, #859289);
  --code-function: var(--fg-green, #a7c080);
  --code-header: #0004;
  --code-important: var(--fg-red, #e67e80);
  --code-inline: var(--fg-blue, #7fbbb3);
  --code-keyword: var(--fg-blue, #7fbbb3);
  --code-normal: var(--fg, #d3c6aa);
  --code-operator: var(--fg-orange, #e69875);
  --code-property: var(--fg-aqua, #83c092);
  --code-punctuation: var(--grey1, #859289);
  --code-string: var(--fg-yellow, #dbbc7f);
  --code-tag: var(--fg-orange, #e69875);
  --code-value: var(--fg-purple, #d699b6);
  --collapse-icon-color: var(--text-faint, #859289);
  --collapse-icon-color-collapsed: var(--text-accent, #5a93a2);
  --dark: var(--text-normal, var(--fg, #d3c6aa));
  --darkgray: var(--text-normal, var(--fg, #d3c6aa));
  --divider-color: var(--background-modifier-border, #5d6b66);
  --divider-color-hover: var(--interactive-accent, #569d79);
  --embed-block-shadow-hover: var(--shadow-l, 0 4px 14px -2px hsla(0, 0%, 0%, 40%));
  --fg: #d3c6aa;
  --fg-aqua: #83c092;
  --fg-blue: #7fbbb3;
  --fg-green: #a7c080;
  --fg-orange: #e69875;
  --fg-purple: #d699b6;
  --fg-red: #e67e80;
  --fg-yellow: #dbbc7f;
  --file-folding-offset: 22px;
  --file-header-background: var(--background-primary, #333c43);
  --file-header-background-focused: var(--background-primary, #333c43);
  --file-line-width: var(--readable-line-length-custom, 700px);
  --flair-color: var(--text-normal, #d3c6aa);
  --footnote-divider-color: var(--metadata-divider-color, #5d6b66);
  --footnote-id-color-no-occurrences: var(--text-faint, #859289);
  --graph-node-focused: var(--text-accent, #5a93a2);
  --graph-node-unresolved: var(--text-faint, #859289);
  --graph-text: var(--text-normal, #d3c6aa);
  --gray: var(--text-faint, var(--grey1, #859289));
  --grey0: #7a8478;
  --grey1: #859289;
  --grey2: #9da9a0;
  --h1-color: var(--header-red, #da6362);
  --h1-line-height: 1.5;
  --h1-size: 2.125em;
  --h1-weight: 500;
  --h2-color: var(--header-orange, #d77f48);
  --h2-line-height: 1.5;
  --h2-size: 1.625em;
  --h2-weight: 500;
  --h3-color: var(--header-yellow, #bf983d);
  --h3-line-height: 1.5;
  --h3-size: 1.375em;
  --h3-weight: 500;
  --h4-color: var(--header-green, #899c40);
  --h4-line-height: 1.5;
  --h4-size: 1.25em;
  --h4-weight: 500;
  --h5-color: var(--header-blue, #5a93a2);
  --h5-size: 1.125em;
  --h5-weight: 500;
  --h6-color: var(--header-purple, #b87b9d);
  --h6-weight: 500;
  --header-aqua: #569d79;
  --header-blue: #5a93a2;
  --header-green: #899c40;
  --header-orange: #d77f48;
  --header-purple: #b87b9d;
  --header-red: #da6362;
  --header-yellow: #bf983d;
  --highlight: var(--text-highlight-bg, var(--bg-yellow, #55544a));
  --hr-color: var(--background-modifier-border, #5d6b66);
  --icon-color-active: var(--text-accent, #5a93a2);
  --icon-color-focused: var(--text-normal, #d3c6aa);
  --inline-title-color: var(--h1-color, #da6362);
  --inline-title-line-height: var(--h1-line-height, 1.5);
  --inline-title-size: var(--h1-size, 2.125em);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #859289);
  --input-placeholder-color: var(--text-faint, #859289);
  --interactive-accent: var(--header-aqua, #569d79);
  --interactive-accent-hover: var(--header-blue, #5a93a2);
  --interactive-before: var(--bg4, #555f66);
  --light: var(--background-primary, var(--bg0, #333c43));
  --lightgray: var(--background-secondary, var(--bg0, #333c43));
  --link-color: var(--header-aqua, #569d79);
  --link-color-hover: var(--fg-aqua, #83c092);
  --link-external-color: var(--header-blue, #5a93a2);
  --link-external-color-hover: var(--fg-blue, #7fbbb3);
  --link-unresolved-color: var(--header-blue, #5a93a2);
  --link-unresolved-color-hover: var(--header-purple, #b87b9d);
  --link-unresolved-decoration-color: var(--bg-red, #59464c);
  --link-unresolved-decoration-color-hover: var(--fg-red, #e67e80);
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 6px;
  --list-indent: var(--list-indent-custom, 28px);
  --list-marker-color: var(--text-faint, #859289);
  --list-marker-color-collapsed: var(--text-accent, #5a93a2);
  --list-spacing: 0;
  --menu-background: var(--background-secondary, #333c43);
  --menu-border-color: var(--background-modifier-border-hover, #4d5960);
  --metadata-border-color: var(--background-modifier-border, #5d6b66);
  --metadata-divider-color: var(--background-modifier-border, #5d6b66);
  --metadata-input-text-color: var(--text-normal, #d3c6aa);
  --modal-background: var(--background-primary, #333c43);
  --nav-collapse-icon-color: var(--collapse-icon-color, #859289);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #859289);
  --nav-heading-color: var(--text-normal, #d3c6aa);
  --nav-heading-color-collapsed: var(--text-faint, #859289);
  --nav-heading-color-hover: var(--text-normal, #d3c6aa);
  --nav-item-color-active: var(--text-normal, #d3c6aa);
  --nav-item-color-highlighted: var(--text-accent, #5a93a2);
  --nav-item-color-hover: var(--text-normal, #d3c6aa);
  --nav-item-color-selected: var(--text-normal, #d3c6aa);
  --nav-tag-color: var(--text-faint, #859289);
  --pdf-background: var(--background-primary, #333c43);
  --pdf-page-background: var(--background-primary, #333c43);
  --pdf-sidebar-background: var(--background-primary, #333c43);
  --pill-border-color: var(--background-modifier-border, #5d6b66);
  --pill-border-color-hover: var(--background-modifier-border-hover, #4d5960);
  --pill-color-hover: var(--text-normal, #d3c6aa);
  --pill-color-remove: var(--text-faint, #859289);
  --pill-color-remove-hover: var(--text-accent, #5a93a2);
  --prompt-background: var(--background-primary, #333c43);
  --ribbon-background: var(--background-secondary, #333c43);
  --ribbon-background-collapsed: var(--background-primary, #333c43);
  --search-result-background: var(--background-primary, #333c43);
  --secondary: var(--text-accent, var(--header-blue, #5a93a2));
  --setting-group-heading-color: var(--text-normal, #d3c6aa);
  --setting-items-background: var(--background-primary-alt, #333c43);
  --setting-items-border-color: var(--background-modifier-border, #5d6b66);
  --shadow-l: 0 4px 14px -2px hsla(0, 0%, 0%, 40%);
  --shiki-code-background: var(--code-background, #293136);
  --shiki-code-comment: var(--text-faint, #859289);
  --shiki-gutter-border-color: var(--background-modifier-border, #5d6b66);
  --shiki-gutter-text-color: var(--text-faint, #859289);
  --shiki-terminal-dots-color: var(--text-faint, #859289);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #4d5960);
  --slider-track-background: var(--background-modifier-border, #5d6b66);
  --status-bar-background: var(--background-secondary, #333c43);
  --status-bar-border-color: var(--divider-color, #5d6b66);
  --statusline0: #a7c080;
  --statusline1: #d3c6aa;
  --statusline2: #e67e80;
  --suggestion-background: var(--background-primary, #333c43);
  --tab-background-active: var(--background-primary, #333c43);
  --tab-container-background: var(--background-secondary, #333c43);
  --tab-divider-color: var(--background-modifier-border-hover, #4d5960);
  --tab-outline-color: var(--divider-color, #5d6b66);
  --tab-switcher-background: var(--background-secondary, #333c43);
  --tab-text-color: var(--text-faint, #859289);
  --tab-text-color-focused-active-current: var(--text-normal, #d3c6aa);
  --tab-text-color-focused-highlighted: var(--text-accent, #5a93a2);
  --table-add-button-border-color: var(--background-modifier-border, #5d6b66);
  --table-background: var(--bg2, #434f55);
  --table-border-color: var(--background-modifier-border, #5d6b66);
  --table-drag-handle-background-active: var(--table-selection-border-color, #569d79);
  --table-drag-handle-color: var(--text-faint, #859289);
  --table-header-background: var(--bg-green, #48584e);
  --table-header-background-hover: var(--bg-green, #48584e);
  --table-header-border-color: var(--table-border-color, #5d6b66);
  --table-header-color: var(--text-normal, #d3c6aa);
  --table-row-alt-background: var(--bg1, #3a464c);
  --table-row-alt-background-hover: var(--table-background, #434f55);
  --table-row-background-hover: var(--bg4, #555f66);
  --table-selection-border-color: var(--interactive-accent, #569d79);
  --tag-background: hsla(var(--tag-color-hsl), 0.1);
  --tag-background-hover: hsla(var(--tag-color-hsl), 0.2);
  --tag-color: var(--header-blue, #5a93a2);
  --tag-color-hover: var(--text-accent, #5a93a2);
  --tag-color-hsl: 254, 80%, 68%;
  --tertiary: var(--text-accent-hover, var(--header-purple, #b87b9d));
  --text-accent: var(--header-blue, #5a93a2);
  --text-accent-hover: var(--header-purple, #b87b9d);
  --text-faint: var(--grey1, #859289);
  --text-highlight-bg: var(--bg-yellow, #55544a);
  --text-normal: var(--fg, #d3c6aa);
  --text-selection: var(--bg-visual, #5c3f4f);
  --textHighlight: var(--text-highlight-bg, var(--bg-yellow, #55544a));
  --titlebar-background: var(--background-secondary, #333c43);
  --titlebar-background-focused: var(--background-secondary-alt, #333c43);
  --titlebar-border-color: var(--background-modifier-border, #5d6b66);
  --titlebar-text-color-focused: var(--text-normal, #d3c6aa);
  --vault-profile-color: var(--text-normal, #d3c6aa);
  --vault-profile-color-hover: var(--vault-profile-color, #d3c6aa);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--background-partially-transparent, rgb(51, 60, 67));
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(51, 60, 67));
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(51, 60, 67));
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(93, 107, 102);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--background-partially-transparent, rgb(51, 60, 67));
  border-left-color: rgb(93, 107, 102);
  color: rgb(211, 198, 170);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--fg-purple, rgb(214, 153, 182));
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--fg-purple, rgb(214, 153, 182));
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--fg-purple, rgb(214, 153, 182));
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--fg-purple, rgb(214, 153, 182));
  outline: rgb(214, 153, 182) none 0px;
  text-decoration-color: rgb(214, 153, 182);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(85, 84, 74));
  color: var(--text-normal, rgb(211, 198, 170));
  outline: rgb(211, 198, 170) none 0px;
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body del {
  color: var(--text-faint, rgb(133, 146, 137));
  outline: rgb(133, 146, 137) none 0px;
  text-decoration-color: rgb(133, 146, 137);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(211, 198, 170));
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(133, 146, 137);
  border-radius: 25%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(127, 187, 179));
  border-color: rgb(127, 187, 179);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(90, 147, 162));
  outline: rgb(90, 147, 162) none 0px;
  text-decoration-color: rgb(90, 147, 162);
  transition: opacity;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(86, 157, 121));
  outline: rgb(86, 157, 121) none 0px;
  text-decoration-color: rgb(86, 157, 121);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(90, 147, 162));
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline dashed rgb(89, 70, 76);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(89, 70, 76));
  text-decoration-style: var(--link-unresolved-decoration-style, dashed);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body dt {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol > li {
  color: var(--code-inline, rgb(211, 198, 170));
}

html[saved-theme="dark"] body ul > li {
  color: var(--code-inline, rgb(211, 198, 170));
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(133, 146, 137));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(62, 75, 80, 0.7));
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
  color: var(--code-inline, rgb(211, 198, 170));
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgb(67, 79, 85));
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(58, 70, 76));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: var(--table-text-color, rgb(211, 198, 170));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: var(--table-header-color, rgb(211, 198, 170));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(72, 88, 78));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(41, 49, 54));
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
  color: var(--code-normal, rgb(127, 187, 179));
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(41, 49, 54));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  background-color: var(--blockquote-background-color, rgba(62, 75, 80, 0.7));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--blockquote-background-color, rgba(62, 75, 80, 0.7));
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
  width: var(--checkbox-size, 14px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(211, 198, 170);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 60, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 60, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --background-embed: rgba(62, 75, 80, 0.7);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #5d6b66;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #4d5960;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #333c43;
  --background-primary-alt: #333c43;
  --background-primary-rgb: 51, 60, 67;
  --background-secondary: #333c43;
  --background-secondary-alt: #333c43;
  --blockquote-background-color: rgba(62, 75, 80, 0.7);
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 76, 175, 80);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #333c43;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #666666;
  --caret-color: #d3c6aa;
  --checkbox-border-color: #859289;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: #7fbbb3;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #333c43;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #293136;
  --code-border-color: #5d6b66;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #859289;
  --code-function: #a7c080;
  --code-important: #e67e80;
  --code-inline: #7fbbb3;
  --code-keyword: #7fbbb3;
  --code-normal: #d3c6aa;
  --code-operator: #e69875;
  --code-property: #83c092;
  --code-punctuation: #859289;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dbbc7f;
  --code-tag: #e69875;
  --code-value: #d699b6;
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #5d6b66;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #d3c6aa;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #859289;
  --graph-text: #d3c6aa;
  --h1-color: #da6362;
  --h2-color: #d77f48;
  --h3-color: #bf983d;
  --h4-color: #899c40;
  --h5-color: #5a93a2;
  --h5-line-height: 1.5;
  --h6-color: #b87b9d;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #5d6b66;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-before: #555f66;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #569d79;
  --link-color-hover: #83c092;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #7fbbb3;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-color-hover: #b87b9d;
  --link-unresolved-decoration-color: #59464c;
  --link-unresolved-decoration-color-hover: #e67e80;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #333c43;
  --menu-border-color: #4d5960;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #333c43;
  --pdf-page-background: #333c43;
  --pdf-shadow: 0 0 0 1px #5d6b66;
  --pdf-sidebar-background: #333c43;
  --pdf-thumbnail-shadow: 0 0 0 1px #5d6b66;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #333c43;
  --setting-group-heading-color: #d3c6aa;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #333c43;
  --setting-items-border-color: #5d6b66;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #293136;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #859289;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #5d6b66;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #859289;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #859289;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #333c43;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #333c43;
  --tab-divider-color: #4d5960;
  --tab-font-size: 13px;
  --tab-outline-color: #5d6b66;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #333c43;
  --tab-switcher-menubar-background: linear-gradient(to top, #333c43, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #859289;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #d3c6aa;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #5d6b66;
  --table-add-button-border-width: 1px;
  --table-background: #434f55;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #859289;
  --table-drag-handle-color-active: white;
  --table-header-background: #48584e;
  --table-header-background-hover: #48584e;
  --table-header-border-color: #5d6b66;
  --table-header-border-width: 1px;
  --table-header-color: #d3c6aa;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #3a464c;
  --table-row-alt-background-hover: #434f55;
  --table-row-background-hover: #555f66;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #b87b9d;
  --text-error: #fb464c;
  --text-faint: #859289;
  --text-highlight-bg: #55544a;
  --text-muted: #b3b3b3;
  --text-normal: #d3c6aa;
  --text-selection: #5c3f4f;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(76, 175, 80, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 175, 80, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(76, 175, 80, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(76, 175, 80, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(211, 198, 170);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="graph"] {
  --background-embed: rgba(62, 75, 80, 0.7);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #5d6b66;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #4d5960;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #333c43;
  --background-primary-alt: #333c43;
  --background-primary-rgb: 51, 60, 67;
  --background-secondary: #333c43;
  --background-secondary-alt: #333c43;
  --blockquote-background-color: rgba(62, 75, 80, 0.7);
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 255, 152, 0);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #333c43;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #666666;
  --caret-color: #d3c6aa;
  --checkbox-border-color: #859289;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: #7fbbb3;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #333c43;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #293136;
  --code-border-color: #5d6b66;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #859289;
  --code-function: #a7c080;
  --code-important: #e67e80;
  --code-inline: #7fbbb3;
  --code-keyword: #7fbbb3;
  --code-normal: #d3c6aa;
  --code-operator: #e69875;
  --code-property: #83c092;
  --code-punctuation: #859289;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dbbc7f;
  --code-tag: #e69875;
  --code-value: #d699b6;
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #5d6b66;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #d3c6aa;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #859289;
  --graph-text: #d3c6aa;
  --h1-color: #da6362;
  --h2-color: #d77f48;
  --h3-color: #bf983d;
  --h4-color: #899c40;
  --h5-color: #5a93a2;
  --h5-line-height: 1.5;
  --h6-color: #b87b9d;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #5d6b66;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-before: #555f66;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #569d79;
  --link-color-hover: #83c092;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #7fbbb3;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-color-hover: #b87b9d;
  --link-unresolved-decoration-color: #59464c;
  --link-unresolved-decoration-color-hover: #e67e80;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #333c43;
  --menu-border-color: #4d5960;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #333c43;
  --pdf-page-background: #333c43;
  --pdf-shadow: 0 0 0 1px #5d6b66;
  --pdf-sidebar-background: #333c43;
  --pdf-thumbnail-shadow: 0 0 0 1px #5d6b66;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #333c43;
  --setting-group-heading-color: #d3c6aa;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #333c43;
  --setting-items-border-color: #5d6b66;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #293136;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #859289;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #5d6b66;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #859289;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #859289;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #333c43;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #333c43;
  --tab-divider-color: #4d5960;
  --tab-font-size: 13px;
  --tab-outline-color: #5d6b66;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #333c43;
  --tab-switcher-menubar-background: linear-gradient(to top, #333c43, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #859289;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #d3c6aa;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #5d6b66;
  --table-add-button-border-width: 1px;
  --table-background: #434f55;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #859289;
  --table-drag-handle-color-active: white;
  --table-header-background: #48584e;
  --table-header-background-hover: #48584e;
  --table-header-border-color: #5d6b66;
  --table-header-border-width: 1px;
  --table-header-color: #d3c6aa;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #3a464c;
  --table-row-alt-background-hover: #434f55;
  --table-row-background-hover: #555f66;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #b87b9d;
  --text-error: #fb464c;
  --text-faint: #859289;
  --text-highlight-bg: #55544a;
  --text-muted: #b3b3b3;
  --text-normal: #d3c6aa;
  --text-selection: #5c3f4f;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 152, 0, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 152, 0, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(255, 152, 0, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 152, 0, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(211, 198, 170);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="image"] {
  --background-embed: rgba(62, 75, 80, 0.7);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #5d6b66;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #4d5960;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #333c43;
  --background-primary-alt: #333c43;
  --background-primary-rgb: 51, 60, 67;
  --background-secondary: #333c43;
  --background-secondary-alt: #333c43;
  --blockquote-background-color: rgba(62, 75, 80, 0.7);
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 234, 128, 252);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #333c43;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #666666;
  --caret-color: #d3c6aa;
  --checkbox-border-color: #859289;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: #7fbbb3;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #333c43;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #293136;
  --code-border-color: #5d6b66;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #859289;
  --code-function: #a7c080;
  --code-important: #e67e80;
  --code-inline: #7fbbb3;
  --code-keyword: #7fbbb3;
  --code-normal: #d3c6aa;
  --code-operator: #e69875;
  --code-property: #83c092;
  --code-punctuation: #859289;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dbbc7f;
  --code-tag: #e69875;
  --code-value: #d699b6;
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #5d6b66;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #d3c6aa;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #859289;
  --graph-text: #d3c6aa;
  --h1-color: #da6362;
  --h2-color: #d77f48;
  --h3-color: #bf983d;
  --h4-color: #899c40;
  --h5-color: #5a93a2;
  --h5-line-height: 1.5;
  --h6-color: #b87b9d;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #5d6b66;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-before: #555f66;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #569d79;
  --link-color-hover: #83c092;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #7fbbb3;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-color-hover: #b87b9d;
  --link-unresolved-decoration-color: #59464c;
  --link-unresolved-decoration-color-hover: #e67e80;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #333c43;
  --menu-border-color: #4d5960;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #333c43;
  --pdf-page-background: #333c43;
  --pdf-shadow: 0 0 0 1px #5d6b66;
  --pdf-sidebar-background: #333c43;
  --pdf-thumbnail-shadow: 0 0 0 1px #5d6b66;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #333c43;
  --setting-group-heading-color: #d3c6aa;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #333c43;
  --setting-items-border-color: #5d6b66;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #293136;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #859289;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #5d6b66;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #859289;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #859289;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #333c43;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #333c43;
  --tab-divider-color: #4d5960;
  --tab-font-size: 13px;
  --tab-outline-color: #5d6b66;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #333c43;
  --tab-switcher-menubar-background: linear-gradient(to top, #333c43, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #859289;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #d3c6aa;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #5d6b66;
  --table-add-button-border-width: 1px;
  --table-background: #434f55;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #859289;
  --table-drag-handle-color-active: white;
  --table-header-background: #48584e;
  --table-header-background-hover: #48584e;
  --table-header-border-color: #5d6b66;
  --table-header-border-width: 1px;
  --table-header-color: #d3c6aa;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #3a464c;
  --table-row-alt-background-hover: #434f55;
  --table-row-background-hover: #555f66;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #b87b9d;
  --text-error: #fb464c;
  --text-faint: #859289;
  --text-highlight-bg: #55544a;
  --text-muted: #b3b3b3;
  --text-normal: #d3c6aa;
  --text-selection: #5c3f4f;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(234, 128, 252, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(234, 128, 252, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(234, 128, 252, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(234, 128, 252, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(211, 198, 170);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="math"] {
  --background-embed: rgba(62, 75, 80, 0.7);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #5d6b66;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #4d5960;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #333c43;
  --background-primary-alt: #333c43;
  --background-primary-rgb: 51, 60, 67;
  --background-secondary: #333c43;
  --background-secondary-alt: #333c43;
  --blockquote-background-color: rgba(62, 75, 80, 0.7);
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 132, 255, 255);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #333c43;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #666666;
  --caret-color: #d3c6aa;
  --checkbox-border-color: #859289;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: #7fbbb3;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #333c43;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #293136;
  --code-border-color: #5d6b66;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #859289;
  --code-function: #a7c080;
  --code-important: #e67e80;
  --code-inline: #7fbbb3;
  --code-keyword: #7fbbb3;
  --code-normal: #d3c6aa;
  --code-operator: #e69875;
  --code-property: #83c092;
  --code-punctuation: #859289;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dbbc7f;
  --code-tag: #e69875;
  --code-value: #d699b6;
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #5d6b66;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #d3c6aa;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #859289;
  --graph-text: #d3c6aa;
  --h1-color: #da6362;
  --h2-color: #d77f48;
  --h3-color: #bf983d;
  --h4-color: #899c40;
  --h5-color: #5a93a2;
  --h5-line-height: 1.5;
  --h6-color: #b87b9d;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #5d6b66;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-before: #555f66;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #569d79;
  --link-color-hover: #83c092;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #7fbbb3;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-color-hover: #b87b9d;
  --link-unresolved-decoration-color: #59464c;
  --link-unresolved-decoration-color-hover: #e67e80;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #333c43;
  --menu-border-color: #4d5960;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #333c43;
  --pdf-page-background: #333c43;
  --pdf-shadow: 0 0 0 1px #5d6b66;
  --pdf-sidebar-background: #333c43;
  --pdf-thumbnail-shadow: 0 0 0 1px #5d6b66;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #333c43;
  --setting-group-heading-color: #d3c6aa;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #333c43;
  --setting-items-border-color: #5d6b66;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #293136;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #859289;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #5d6b66;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #859289;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #859289;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #333c43;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #333c43;
  --tab-divider-color: #4d5960;
  --tab-font-size: 13px;
  --tab-outline-color: #5d6b66;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #333c43;
  --tab-switcher-menubar-background: linear-gradient(to top, #333c43, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #859289;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #d3c6aa;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #5d6b66;
  --table-add-button-border-width: 1px;
  --table-background: #434f55;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #859289;
  --table-drag-handle-color-active: white;
  --table-header-background: #48584e;
  --table-header-background-hover: #48584e;
  --table-header-border-color: #5d6b66;
  --table-header-border-width: 1px;
  --table-header-color: #d3c6aa;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #3a464c;
  --table-row-alt-background-hover: #434f55;
  --table-row-background-hover: #555f66;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #b87b9d;
  --text-error: #fb464c;
  --text-faint: #859289;
  --text-highlight-bg: #55544a;
  --text-muted: #b3b3b3;
  --text-normal: #d3c6aa;
  --text-selection: #5c3f4f;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(132, 255, 255, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(132, 255, 255, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(132, 255, 255, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(132, 255, 255, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(211, 198, 170);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgba(41, 49, 54, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(211, 198, 170);
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
  color: var(--text-normal, rgb(211, 198, 170));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(51, 60, 67));
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.4) 0px 4px 14px -2px);
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(218, 99, 98));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(218, 99, 98));
  font-size: var(--inline-title-size, 34px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(215, 127, 72));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(218, 99, 98));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(191, 152, 61));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(137, 156, 64));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(90, 147, 162));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(184, 123, 157));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
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
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 198, 170);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(51, 60, 67));
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
  color: var(--text-faint, rgb(133, 146, 137));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(211, 198, 170));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(51, 60, 67));
  border-color: rgb(211, 198, 170);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(58, 70, 76));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(93, 107, 102);
  color: var(--table-header-color, rgb(211, 198, 170));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(93, 107, 102);
  border-left-color: rgb(93, 107, 102);
  border-right-color: rgb(93, 107, 102);
  border-top-color: rgb(93, 107, 102);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(93, 107, 102);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
  color: var(--pill-color, rgb(90, 147, 162));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(51, 60, 67));
  color: var(--text-normal, rgb(211, 198, 170));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(51, 60, 67));
  border-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(51, 60, 67));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(211, 198, 170);
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

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(51, 60, 67));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(211, 198, 170));
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
  background-color: var(--code-background, rgb(41, 49, 54));
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: var(--code-normal, rgb(211, 198, 170));
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
  background-color: var(--tag-background, rgba(139, 108, 239, 0.1));
  color: var(--tag-color, rgb(90, 147, 162));
}`,
  },
  light: {
    base: `:root:root {
  --background-embed: rgb(238 236 213 / 70%);
  --background-embed-transparent: rgb(238 236 213 / 70%);
  --background-modifier-border: var(--color-base-30, #bec5b2);
  --background-modifier-border-hover: var(--color-base-35, #edeada);
  --background-primary: var(--color-base-00, #fffbef);
  --background-primary-alt: var(--color-base-10, #fffbef);
  --background-primary-rgb: 255, 251, 239;
  --background-secondary: var(--color-base-20, #fffbef);
  --background-secondary-alt: var(--color-base-05, #fffbef);
  --bases-cards-background: var(--background-primary, #fffbef);
  --bases-cards-cover-background: var(--background-primary-alt, #fffbef);
  --bases-embed-border-color: var(--background-modifier-border, #bec5b2);
  --bases-table-border-color: var(--table-border-color, #bec5b2);
  --bases-table-cell-background-active: var(--background-primary, #fffbef);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fffbef);
  --bases-table-group-background: var(--background-primary-alt, #fffbef);
  --bases-table-header-background: var(--background-primary, #fffbef);
  --bases-table-row-background-hover: var(--table-row-background-hover, #e8e5d5);
  --bases-table-summary-background: var(--background-primary, #fffbef);
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
  --blockquote-border-color: var(--interactive-accent, #569d79);
  --canvas-background: var(--background-primary, #fffbef);
  --canvas-card-label-color: var(--text-faint, #939f91);
  --canvas-dot-pattern: var(--color-base-30, #ababab);
  --caret-color: var(--text-normal, #5c6a72);
  --checkbox-border-color: var(--text-faint, #939f91);
  --checkbox-color: var(--interactive-accent, #3a94c5);
  --checkbox-color-hover: var(--interactive-accent-hover, #5a93a2);
  --checkbox-marker-color: var(--background-primary, #fffbef);
  --checkbox-radius: var(--radius-s, 25%);
  --checkbox-size: var(--font-text-size, 14px);
  --code-background: var(--background-primary-alt, #f2efdf);
  --code-border-color: var(--background-modifier-border, #bec5b2);
  --code-comment: var(--text-faint, #939f91);
  --code-function: var(--color-yellow, #8da101);
  --code-header: #0004;
  --code-important: var(--color-orange, #f85552);
  --code-inline: #3a94c5;
  --code-keyword: var(--color-pink, #3a94c5);
  --code-normal: var(--text-normal, #5c6a72);
  --code-operator: var(--color-red, #f57d26);
  --code-property: var(--color-cyan, #35a77c);
  --code-punctuation: var(--text-muted, #939f91);
  --code-string: var(--color-green, #dfa000);
  --code-tag: var(--color-red, #f57d26);
  --code-value: var(--color-purple, #df69ba);
  --collapse-icon-color: var(--text-faint, #939f91);
  --collapse-icon-color-collapsed: var(--text-accent, #5a93a2);
  --dark: var(--text-normal, var(--color-base-100, #5c6a72));
  --darkgray: var(--text-normal, var(--color-base-100, #5c6a72));
  --divider-color: var(--background-modifier-border, #bec5b2);
  --divider-color-hover: var(--interactive-accent, #569d79);
  --fg: #5c6a72;
  --fg-aqua: #35a77c;
  --fg-blue: #3a94c5;
  --fg-green: #8da101;
  --fg-orange: #f57d26;
  --fg-purple: #df69ba;
  --fg-red: #f85552;
  --fg-yellow: #dfa000;
  --file-folding-offset: 22px;
  --file-header-background: var(--background-primary, #fffbef);
  --file-header-background-focused: var(--background-primary, #fffbef);
  --flair-color: var(--text-normal, #5c6a72);
  --footnote-divider-color: var(--metadata-divider-color, #bec5b2);
  --footnote-id-color-no-occurrences: var(--text-faint, #939f91);
  --graph-node-focused: var(--text-accent, #5a93a2);
  --graph-node-unresolved: var(--text-faint, #939f91);
  --graph-text: var(--text-normal, #5c6a72);
  --gray: var(--text-faint, var(--color-base-50, #939f91));
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
  --hr-color: var(--background-modifier-border, #bec5b2);
  --icon-color-active: var(--text-accent, #5a93a2);
  --icon-color-focused: var(--text-normal, #5c6a72);
  --inline-title-color: var(--h1-color, #f85552);
  --inline-title-line-height: var(--h1-line-height, 1.5);
  --inline-title-size: var(--h1-size, 2.125em);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #939f91);
  --input-placeholder-color: var(--text-faint, #939f91);
  --interactive-accent: var(--color-accent-1, #569d79);
  --interactive-accent-hover: var(--color-accent-2, #5a93a2);
  --interactive-before: #e8e5d5;
  --light: var(--background-primary, var(--color-base-00, #fffbef));
  --lightgray: var(--background-secondary, var(--color-base-20, #fffbef));
  --link-color: var(--text-accent, #569d79);
  --link-color-hover: var(--text-accent-hover, #35a77c);
  --link-external-color: var(--text-accent, #5a93a2);
  --link-external-color-hover: var(--text-accent-hover, #3a94c5);
  --link-unresolved-color: var(--text-accent, #5a93a2);
  --link-unresolved-color-hover: #dd2b8d;
  --link-unresolved-decoration-color-hover: #f85552;
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 6px;
  --list-marker-color: var(--text-faint, #939f91);
  --list-marker-color-collapsed: var(--text-accent, #5a93a2);
  --list-spacing: 0;
  --menu-background: var(--background-secondary, #fffbef);
  --menu-border-color: var(--background-modifier-border-hover, #edeada);
  --metadata-border-color: var(--background-modifier-border, #bec5b2);
  --metadata-divider-color: var(--background-modifier-border, #bec5b2);
  --metadata-input-text-color: var(--text-normal, #5c6a72);
  --modal-background: var(--background-primary, #fffbef);
  --nav-collapse-icon-color: var(--collapse-icon-color, #939f91);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #939f91);
  --nav-heading-color: var(--text-normal, #5c6a72);
  --nav-heading-color-collapsed: var(--text-faint, #939f91);
  --nav-heading-color-hover: var(--text-normal, #5c6a72);
  --nav-item-color-active: var(--text-normal, #5c6a72);
  --nav-item-color-highlighted: var(--text-accent, #5a93a2);
  --nav-item-color-hover: var(--text-normal, #5c6a72);
  --nav-item-color-selected: var(--text-normal, #5c6a72);
  --nav-tag-color: var(--text-faint, #939f91);
  --pdf-background: var(--background-primary, #fffbef);
  --pdf-page-background: var(--background-primary, #fffbef);
  --pdf-sidebar-background: var(--background-primary, #fffbef);
  --pill-border-color: var(--background-modifier-border, #bec5b2);
  --pill-border-color-hover: var(--background-modifier-border-hover, #edeada);
  --pill-color-hover: var(--text-normal, #5c6a72);
  --pill-color-remove: var(--text-faint, #939f91);
  --pill-color-remove-hover: var(--text-accent, #5a93a2);
  --prompt-background: var(--background-primary, #fffbef);
  --raised-background: var(--blur-background, color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent)));
  --ribbon-background: var(--background-secondary, #fffbef);
  --ribbon-background-collapsed: var(--background-primary, #fffbef);
  --search-result-background: var(--background-primary, #fffbef);
  --secondary: var(--text-accent, var(--color-accent, #5a93a2));
  --setting-group-heading-color: var(--text-normal, #5c6a72);
  --setting-items-background: var(--background-primary-alt, #fffbef);
  --setting-items-border-color: var(--background-modifier-border, #bec5b2);
  --shadow-l: 0 4px 14px -2px hsla(0, 0%, 0%, 40%);
  --shiki-code-background: var(--code-background, #f2efdf);
  --shiki-code-comment: var(--text-faint, #939f91);
  --shiki-gutter-border-color: var(--background-modifier-border, #bec5b2);
  --shiki-gutter-text-color: var(--text-faint, #939f91);
  --shiki-terminal-dots-color: var(--text-faint, #939f91);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #edeada);
  --slider-track-background: var(--background-modifier-border, #bec5b2);
  --status-bar-background: var(--background-secondary, #fffbef);
  --status-bar-border-color: var(--divider-color, #bec5b2);
  --statusline0: #93b259;
  --statusline1: #708089;
  --statusline2: #e66868;
  --suggestion-background: var(--background-primary, #fffbef);
  --tab-background-active: var(--background-primary, #fffbef);
  --tab-container-background: var(--background-secondary, #fffbef);
  --tab-divider-color: var(--background-modifier-border-hover, #edeada);
  --tab-outline-color: var(--divider-color, #bec5b2);
  --tab-switcher-background: var(--background-secondary, #fffbef);
  --tab-text-color: var(--text-faint, #939f91);
  --tab-text-color-focused-active-current: var(--text-normal, #5c6a72);
  --tab-text-color-focused-highlighted: var(--text-accent, #5a93a2);
  --table-add-button-border-color: var(--background-modifier-border, #bec5b2);
  --table-background: #f2efdf;
  --table-border-color: var(--background-modifier-border, #bec5b2);
  --table-drag-handle-background-active: var(--table-selection-border-color, #569d79);
  --table-drag-handle-color: var(--text-faint, #939f91);
  --table-header-background: var(--table-background, #f3f5d9);
  --table-header-background-hover: #f3f5d9;
  --table-header-border-color: var(--table-border-color, #bec5b2);
  --table-header-color: var(--text-normal, #5c6a72);
  --table-row-alt-background: var(--table-background, #f8f5e4);
  --table-row-alt-background-hover: var(--table-background, #f2efdf);
  --table-row-background-hover: var(--table-background, #e8e5d5);
  --table-selection-border-color: var(--interactive-accent, #569d79);
  --tag-color: var(--text-accent, #5a93a2);
  --tag-color-hover: var(--text-accent, #5a93a2);
  --tag-color-hsl: 254, 80%, 68%;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #dd2b8d));
  --text-accent: var(--color-accent, #5a93a2);
  --text-accent-hover: var(--color-accent-2, #dd2b8d);
  --text-faint: var(--color-base-50, #939f91);
  --text-normal: var(--color-base-100, #5c6a72);
  --titlebar-background: var(--background-secondary, #fffbef);
  --titlebar-background-focused: var(--background-secondary-alt, #fffbef);
  --titlebar-border-color: var(--background-modifier-border, #bec5b2);
  --titlebar-text-color-focused: var(--text-normal, #5c6a72);
  --vault-profile-color: var(--text-normal, #5c6a72);
  --vault-profile-color-hover: var(--vault-profile-color, #5c6a72);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--background-partially-transparent, rgb(255, 251, 239));
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(255, 251, 239));
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(255, 251, 239));
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(190, 197, 178);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--background-partially-transparent, rgb(255, 251, 239));
  border-left-color: rgb(190, 197, 178);
  color: rgb(92, 106, 114);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--fg-purple, rgb(223, 105, 186));
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--fg-purple, rgb(223, 105, 186));
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--fg-purple, rgb(223, 105, 186));
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--fg-purple, rgb(223, 105, 186));
  outline: rgb(223, 105, 186) none 0px;
  text-decoration-color: rgb(223, 105, 186);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(254, 242, 213));
  color: var(--text-normal, rgb(92, 106, 114));
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body del {
  color: var(--text-faint, rgb(147, 159, 145));
  outline: rgb(147, 159, 145) none 0px;
  text-decoration-color: rgb(147, 159, 145);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(92, 106, 114));
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(147, 159, 145);
  border-radius: 25%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(58, 148, 197));
  border-color: rgb(58, 148, 197);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(90, 147, 162));
  outline: rgb(90, 147, 162) none 0px;
  text-decoration-color: rgb(90, 147, 162);
  transition: opacity;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(86, 157, 121));
  outline: rgb(86, 157, 121) none 0px;
  text-decoration-color: rgb(86, 157, 121);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(90, 147, 162));
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline dashed rgb(255, 231, 222);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(255, 231, 222));
  text-decoration-style: var(--link-unresolved-decoration-style, dashed);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body dt {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol > li {
  color: var(--code-inline, rgb(92, 106, 114));
}

html[saved-theme="light"] body ul > li {
  color: var(--code-inline, rgb(92, 106, 114));
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(147, 159, 145));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(238, 236, 213, 0.7));
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
  color: var(--code-inline, rgb(92, 106, 114));
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgb(242, 239, 223));
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(248, 245, 228));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: var(--table-text-color, rgb(92, 106, 114));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: var(--table-header-color, rgb(92, 106, 114));
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(243, 245, 217));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(242, 239, 223));
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
  color: var(--code-normal, rgb(58, 148, 197));
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(242, 239, 223));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  background-color: var(--blockquote-background-color, rgba(238, 236, 213, 0.7));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--blockquote-background-color, rgba(238, 236, 213, 0.7));
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
  width: var(--checkbox-size, 14px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(92, 106, 114);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 251, 239);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 251, 239);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #bec5b2;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #edeada;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #fffbef;
  --background-primary-alt: #fffbef;
  --background-secondary: #fffbef;
  --background-secondary-alt: #fffbef;
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 76, 175, 80);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #fffbef;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #ababab;
  --caret-color: #5c6a72;
  --checkbox-border-color: #939f91;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: #3a94c5;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #fffbef;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #f2efdf;
  --code-border-color: #bec5b2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #939f91;
  --code-function: #8da101;
  --code-important: #f85552;
  --code-keyword: #3a94c5;
  --code-normal: #5c6a72;
  --code-operator: #f57d26;
  --code-property: #35a77c;
  --code-punctuation: #939f91;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dfa000;
  --code-tag: #f57d26;
  --code-value: #df69ba;
  --collapse-icon-color: #939f91;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #bec5b2;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #5c6a72;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #939f91;
  --graph-text: #5c6a72;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #bec5b2;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: #569d79;
  --link-color-hover: #35a77c;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #3a94c5;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-decoration-color: #ffe7de;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #fffbef;
  --menu-border-color: #edeada;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #fffbef;
  --pdf-page-background: #fffbef;
  --pdf-sidebar-background: #fffbef;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #fffbef;
  --setting-group-heading-color: #5c6a72;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fffbef;
  --setting-items-border-color: #bec5b2;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #f2efdf;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #939f91;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #bec5b2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #939f91;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #939f91;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fffbef;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #fffbef;
  --tab-divider-color: #edeada;
  --tab-font-size: 13px;
  --tab-outline-color: #bec5b2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fffbef;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffbef, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #939f91;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #5c6a72;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #bec5b2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #939f91;
  --table-drag-handle-color-active: white;
  --table-header-background: #f3f5d9;
  --table-header-border-color: #bec5b2;
  --table-header-border-width: 1px;
  --table-header-color: #5c6a72;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #f8f5e4;
  --table-row-alt-background-hover: #f2efdf;
  --table-row-background-hover: #e8e5d5;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #dd2b8d;
  --text-error: #e93147;
  --text-faint: #939f91;
  --text-highlight-bg: #fef2d5;
  --text-muted: #5c5c5c;
  --text-normal: #5c6a72;
  --text-selection: #ded8db;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(76, 175, 80, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 175, 80, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(76, 175, 80, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(76, 175, 80, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(92, 106, 114);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="graph"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #bec5b2;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #edeada;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #fffbef;
  --background-primary-alt: #fffbef;
  --background-secondary: #fffbef;
  --background-secondary-alt: #fffbef;
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 255, 152, 0);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #fffbef;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #ababab;
  --caret-color: #5c6a72;
  --checkbox-border-color: #939f91;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: #3a94c5;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #fffbef;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #f2efdf;
  --code-border-color: #bec5b2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #939f91;
  --code-function: #8da101;
  --code-important: #f85552;
  --code-keyword: #3a94c5;
  --code-normal: #5c6a72;
  --code-operator: #f57d26;
  --code-property: #35a77c;
  --code-punctuation: #939f91;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dfa000;
  --code-tag: #f57d26;
  --code-value: #df69ba;
  --collapse-icon-color: #939f91;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #bec5b2;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #5c6a72;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #939f91;
  --graph-text: #5c6a72;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #bec5b2;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: #569d79;
  --link-color-hover: #35a77c;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #3a94c5;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-decoration-color: #ffe7de;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #fffbef;
  --menu-border-color: #edeada;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #fffbef;
  --pdf-page-background: #fffbef;
  --pdf-sidebar-background: #fffbef;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #fffbef;
  --setting-group-heading-color: #5c6a72;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fffbef;
  --setting-items-border-color: #bec5b2;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #f2efdf;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #939f91;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #bec5b2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #939f91;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #939f91;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fffbef;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #fffbef;
  --tab-divider-color: #edeada;
  --tab-font-size: 13px;
  --tab-outline-color: #bec5b2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fffbef;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffbef, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #939f91;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #5c6a72;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #bec5b2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #939f91;
  --table-drag-handle-color-active: white;
  --table-header-background: #f3f5d9;
  --table-header-border-color: #bec5b2;
  --table-header-border-width: 1px;
  --table-header-color: #5c6a72;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #f8f5e4;
  --table-row-alt-background-hover: #f2efdf;
  --table-row-background-hover: #e8e5d5;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #dd2b8d;
  --text-error: #e93147;
  --text-faint: #939f91;
  --text-highlight-bg: #fef2d5;
  --text-muted: #5c5c5c;
  --text-normal: #5c6a72;
  --text-selection: #ded8db;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 152, 0, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 152, 0, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(255, 152, 0, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 152, 0, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(92, 106, 114);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="image"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #bec5b2;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #edeada;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #fffbef;
  --background-primary-alt: #fffbef;
  --background-secondary: #fffbef;
  --background-secondary-alt: #fffbef;
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 234, 128, 252);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #fffbef;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #ababab;
  --caret-color: #5c6a72;
  --checkbox-border-color: #939f91;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: #3a94c5;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #fffbef;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #f2efdf;
  --code-border-color: #bec5b2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #939f91;
  --code-function: #8da101;
  --code-important: #f85552;
  --code-keyword: #3a94c5;
  --code-normal: #5c6a72;
  --code-operator: #f57d26;
  --code-property: #35a77c;
  --code-punctuation: #939f91;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dfa000;
  --code-tag: #f57d26;
  --code-value: #df69ba;
  --collapse-icon-color: #939f91;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #bec5b2;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #5c6a72;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #939f91;
  --graph-text: #5c6a72;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #bec5b2;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: #569d79;
  --link-color-hover: #35a77c;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #3a94c5;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-decoration-color: #ffe7de;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #fffbef;
  --menu-border-color: #edeada;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #fffbef;
  --pdf-page-background: #fffbef;
  --pdf-sidebar-background: #fffbef;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #fffbef;
  --setting-group-heading-color: #5c6a72;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fffbef;
  --setting-items-border-color: #bec5b2;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #f2efdf;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #939f91;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #bec5b2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #939f91;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #939f91;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fffbef;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #fffbef;
  --tab-divider-color: #edeada;
  --tab-font-size: 13px;
  --tab-outline-color: #bec5b2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fffbef;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffbef, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #939f91;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #5c6a72;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #bec5b2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #939f91;
  --table-drag-handle-color-active: white;
  --table-header-background: #f3f5d9;
  --table-header-border-color: #bec5b2;
  --table-header-border-width: 1px;
  --table-header-color: #5c6a72;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #f8f5e4;
  --table-row-alt-background-hover: #f2efdf;
  --table-row-background-hover: #e8e5d5;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #dd2b8d;
  --text-error: #e93147;
  --text-faint: #939f91;
  --text-highlight-bg: #fef2d5;
  --text-muted: #5c5c5c;
  --text-normal: #5c6a72;
  --text-selection: #ded8db;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(234, 128, 252, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(234, 128, 252, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(234, 128, 252, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(234, 128, 252, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(92, 106, 114);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="math"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #bec5b2;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #edeada;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #fffbef;
  --background-primary-alt: #fffbef;
  --background-secondary: #fffbef;
  --background-secondary-alt: #fffbef;
  --blockquote-border-color: #569d79;
  --blur-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-border-dashed: 1px dashed rgba(var(--callout-color), 0.4);
  --callout-border-solid: 1px solid rgba(var(--callout-color), 0.3);
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 132, 255, 255);
  --callout-content-color: rgba(var(--bg-dim-rgb), 0.3);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #fffbef;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #ababab;
  --caret-color: #5c6a72;
  --checkbox-border-color: #939f91;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: #3a94c5;
  --checkbox-color-hover: #5a93a2;
  --checkbox-marker-color: #fffbef;
  --checkbox-radius: 25%;
  --checkbox-size: 14px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 4px;
  --code-background: #f2efdf;
  --code-border-color: #bec5b2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #939f91;
  --code-function: #8da101;
  --code-important: #f85552;
  --code-keyword: #3a94c5;
  --code-normal: #5c6a72;
  --code-operator: #f57d26;
  --code-property: #35a77c;
  --code-punctuation: #939f91;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #dfa000;
  --code-tag: #f57d26;
  --code-value: #df69ba;
  --collapse-icon-color: #939f91;
  --collapse-icon-color-collapsed: #5a93a2;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: #bec5b2;
  --divider-color-hover: #569d79;
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #5c6a72;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: #5a93a2;
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #939f91;
  --graph-text: #5c6a72;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-spacing: 2.5rem;
  --hr-color: #bec5b2;
  --interactive-accent: #569d79;
  --interactive-accent-hover: #5a93a2;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: #569d79;
  --link-color-hover: #35a77c;
  --link-external-color: #5a93a2;
  --link-external-color-hover: #3a94c5;
  --link-unresolved-color: #5a93a2;
  --link-unresolved-decoration-color: #ffe7de;
  --link-weight: 400;
  --list-indent: 28px;
  --menu-background: #fffbef;
  --menu-border-color: #edeada;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #fffbef;
  --pdf-page-background: #fffbef;
  --pdf-sidebar-background: #fffbef;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #fffbef 65%, transparent) linear-gradient(#fffbef, color-mix(in srgb, #fffbef 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #fffbef;
  --setting-group-heading-color: #5c6a72;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fffbef;
  --setting-items-border-color: #bec5b2;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #f2efdf;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #939f91;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #bec5b2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #939f91;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #939f91;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fffbef;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #fffbef;
  --tab-divider-color: #edeada;
  --tab-font-size: 13px;
  --tab-outline-color: #bec5b2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fffbef;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffbef, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #939f91;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: #5c6a72;
  --tab-text-color-focused-highlighted: #5a93a2;
  --table-add-button-border-color: #bec5b2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #939f91;
  --table-drag-handle-color-active: white;
  --table-header-background: #f3f5d9;
  --table-header-border-color: #bec5b2;
  --table-header-border-width: 1px;
  --table-header-color: #5c6a72;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: #f8f5e4;
  --table-row-alt-background-hover: #f2efdf;
  --table-row-background-hover: #e8e5d5;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #569d79;
  --table-text-size: 16px;
  --tag-background: hsla(254, 80%, 68%, 0.1);
  --tag-background-hover: hsla(254, 80%, 68%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #5a93a2;
  --tag-color-hover: #5a93a2;
  --tag-size: 0.875em;
  --text-accent: #5a93a2;
  --text-accent-hover: #dd2b8d;
  --text-error: #e93147;
  --text-faint: #939f91;
  --text-highlight-bg: #fef2d5;
  --text-muted: #5c5c5c;
  --text-normal: #5c6a72;
  --text-selection: #ded8db;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(132, 255, 255, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(132, 255, 255, 0.7);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(132, 255, 255, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(132, 255, 255, 0.3);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.267) 2px 2px 3px 0px;
  color: rgb(92, 106, 114);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 76, 175, 80;
  background: rgba(76, 175, 80, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgb(76, 175, 80);
  border-left-color: rgb(76, 175, 80);
  border-right-color: rgb(76, 175, 80);
  border-top-color: rgb(76, 175, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  gap: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: color-mix(
        in srgb,
        rgb(var(--callout-color)) 70%,
        var(--color-base-100)
    );
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgba(242, 239, 223, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg-dim-rgb), 0.3);
  color: rgb(92, 106, 114);
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
  color: var(--text-normal, rgb(92, 106, 114));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(255, 251, 239));
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.4) 0px 4px 14px -2px);
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(90, 147, 162);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(248, 85, 82));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(248, 85, 82));
  font-size: var(--inline-title-size, 34px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(248, 143, 68));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(248, 85, 82));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(243, 185, 49));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(171, 209, 19));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(90, 147, 162));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(221, 43, 141));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
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
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(92, 106, 114);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(255, 251, 239));
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
  color: var(--text-faint, rgb(147, 159, 145));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(92, 106, 114));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(255, 251, 239));
  border-color: rgb(92, 106, 114);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(248, 245, 228));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(190, 197, 178);
  color: var(--table-header-color, rgb(92, 106, 114));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(190, 197, 178);
  border-left-color: rgb(190, 197, 178);
  border-right-color: rgb(190, 197, 178);
  border-top-color: rgb(190, 197, 178);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(190, 197, 178);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
  color: var(--pill-color, rgb(90, 147, 162));
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(255, 251, 239));
  color: var(--text-normal, rgb(92, 106, 114));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(255, 251, 239));
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(255, 251, 239));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(92, 106, 114);
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

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(255, 251, 239));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(92, 106, 114));
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
  background-color: var(--code-background, rgb(242, 239, 223));
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: var(--code-normal, rgb(92, 106, 114));
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
  background-color: var(--tag-background, rgba(139, 108, 239, 0.1));
  color: var(--tag-color, rgb(90, 147, 162));
}`,
  },
  classSettings: {
    "highlighted-folders": `body.highlighted-folders .nav-folder:not(.is-collapsed, .mod-root) {
border-radius: var(--radius-s);
background-color: rgba(var(--mono-rgb-100), 0.05);
}`,
    "enable-menu-blur": `body:not(.is-translucent).enable-menu-blur .modal-bg {
backdrop-filter: blur(var(--menu-blur-radius, 5px));
opacity: 1 !important;
}`,
    "vim-curor-animate": `body.vim-curor-animate .cm-fat-cursor {
transition:
        left var(--vim-cursor-speed, var(--anim-duration-superfast))
            cubic-bezier(0.39, 0.575, 0.565, 1),
        top var(--vim-cursor-speed, var(--anim-duration-superfast))
            cubic-bezier(0.39, 0.575, 0.565, 1);
}`,
    "h1-underline": `body.h1-underline h1, body.h1-underline .HyperMD-header-1.cm-line {
border-bottom: 2px var(--h1-underline-style, solid)
        var(--background-modifier-border);
padding-bottom: 2px;
}`,
    "h2-underline": `body.h2-underline h2, body.h2-underline .HyperMD-header-2.cm-line {
border-bottom: 2px var(--h2-underline-style, solid)
        var(--background-modifier-border);
padding-bottom: 2px;
}`,
    "h3-underline": `body.h3-underline h3, body.h3-underline .HyperMD-header-3.cm-line {
border-bottom: 2px var(--h3-underline-style, solid)
        var(--background-modifier-border);
padding-bottom: 2px;
}`,
    "h4-underline": `body.h4-underline h4, body.h4-underline .HyperMD-header-4.cm-line {
border-bottom: 2px var(--h4-underline-style, solid)
        var(--background-modifier-border);
padding-bottom: 2px;
}`,
    "h5-underline": `body.h5-underline h5, body.h5-underline .HyperMD-header-5.cm-line {
border-bottom: 2px var(--h5-underline-style, solid)
        var(--background-modifier-border);
padding-bottom: 2px;
}`,
    "h6-underline": `body.h6-underline h6, body.h6-underline .HyperMD-header-6.cm-line {
border-bottom: 2px var(--h6-underline-style, solid)
        var(--background-modifier-border);
padding-bottom: 2px;
}`,
    "image-embed-enable-zoom": `body.image-embed-enable-zoom {
& .image-embed {
        & img {
            cursor: zoom-out;
        }

        &:active {
            --zoom-embed-size: min(
                90%,
                calc(var(--readable-line-length-custom, 700px) + 120px)
            );
            display: flex !important;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: fixed;
            max-width: 100%;
            width: 100% !important;
            margin: auto 0 !important;
            inset: 0;
            object-fit: contain;
            z-index: 1;
        }
        &:active img {
            width: var(--zoom-embed-size) !important;
            max-height: 80%;
            margin: 0 !important;
            user-select: none;
            object-fit: contain;
        }
        &:active::after {
            margin-inline: 0 !important;
            padding: 1ch;
            font-size: large;
            box-sizing: border-box;
            width: var(--zoom-embed-size) !important;
            background-color: var(--background-primary);
        }
        &:active::before {
            content: "";
            position: absolute;
            background-color: var(--color-base-00);
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.75;
        }
    };
/* Option to disable dragging */
&.image-embed-no-drag .image-embed:active img {
        pointer-events: none;
    };
/* Hacky fix for callouts */
& .cm-embed-block.cm-callout:has(.image-embed:active) {
        contain: none !important;
    };
}`,
    "image-embed-no-drag": `&.image-embed-no-drag .image-embed:active img {
pointer-events: none;
}`,
    "image-embed-stretch": `.image-embed-stretch {
--img-width: 100;
}`,
    "external-link-remove-icon": `body.external-link-remove-icon {
& .cm-formatting.external-link {
        display: none;
    };
& a.external-link {
        background-image: none;
        padding-right: unset;
    };
}`,
    "centered-tables": `body.centered-tables table {
margin-inline: auto;
}`,
    "full-width-tables": `body.full-width-tables table {
width: 100%;
}`,
    "rounded-tables": `body.rounded-tables :where(table:not(:has([rowspan]))) {
border-collapse: separate;
border-spacing: 0;
& :is(td, th) {
        border-width: 0 var(--table-border-width) var(--table-border-width) 0;
    };
& th:first-of-type {
        border-top-left-radius: var(--rounded-tables-radius, 8px);
    };
& th:last-of-type {
        border-top-right-radius: var(--rounded-tables-radius, 8px);
    };
& tr:last-of-type td:first-of-type {
        border-bottom-left-radius: var(--rounded-tables-radius, 8px);
    };
& tr:last-of-type td:last-of-type {
        border-bottom-right-radius: var(--rounded-tables-radius, 8px);
    };
}`,
    "background-image-enabled": `body.background-image-enabled {
/* This breaks canvas screenshots! */
--canvas-background: transparent;
--background-transparent: rgba(
        var(--background-primary-rgb),
        var(--pane-opacity, 0.85)
    );
--background-partially-transparent: rgba(
        var(--background-primary-rgb),
        var(--ui-opacity, 0.85)
    );
--background-tabs-transparent: rgba(
        var(--background-primary-rgb),
        var(--tab-opacity, 0.85)
    );
}

.background-image-enabled .horizontal-main-container {
background-color: var(--background-primary);
background-image: var(--background-image-url);
background-position: var(--background-image-position, center);
background-size: cover;
}

.background-image-enabled :is(.mod-root .view-content, .view-header) {
background-color: var(--background-transparent) !important;
}

.background-image-enabled :is( .mod-root .workspace-tab-header-container, .workspace-ribbon, .workspace-split, .graph-controls ) {
background-color: var(--background-partially-transparent) !important;
}

.background-image-enabled .workspace-tab-container .workspace-tab-header:not(.mod-active), .background-image-enabled .workspace-tab-container .workspace-tab-header.mod-active {
background-color: var(--background-tabs-transparent) !important;
}

.background-image-enabled :is( .titlebar-button-container, .mod-vertical .workspace-tab-header, .document-search-container, .workspace-leaf, .horizontal-main-container > .workspace, .pdf-sidebar-container, .pdf-container, .pdf-toolbar ), .background-image-enabled .workspace-split:not(.mod-root, .mod-horizontal) .workspace-tab-header-container, .background-image-enabled .workspace-split:not(.mod-left-split, .mod-right-split), .background-image-enabled .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
background-color: transparent !important;
}

.background-image-enabled .workspace-tab-header-container {
background-color: unset;
}

.background-image-enabled .workspace-tab-header.is-active::before, .background-image-enabled .workspace-tab-header.is-active::after, .background-image-enabled .view-header-title-container:not(.mod-at-end):after {
display: none;
}

.background-image-enabled .empty-state {
position: static;
}`,
    "background-image-pane-view": `.background-image-pane-view .view-content:has(.markdown-reading-view) {
background-color: transparent !important;
}

.background-image-pane-view .view-content .cm-sizer, .background-image-pane-view .view-content > .markdown-reading-view > .markdown-rendered > .markdown-preview-sizer {
box-sizing: content-box;
padding-inline: 2rem;
padding-top: 2rem;
border-radius: 1rem;
background-color: var(--background-transparent) !important;
}

.background-image-pane-view .view-content .cm-sizer:has(.cm-gutters) {
padding-left: calc(2rem + 24px);
}

:root .background-image-pane-view .view-header {
background-color: var(--background-partially-transparent) !important;
}

:root .background-image-pane-view .view-content:has(> .empty-state) {
width: fit-content;
height: unset;
margin: auto;
padding: clamp(2rem, 5vw, 4rem);
border-radius: 1rem;
}`,
    "custom-stacked-panes-enabled": `.custom-stacked-panes-enabled .mod-vertical .mod-stacked .workspace-leaf {
max-width: calc(
        (100% / var(--custom-stacked-panes-count, 2)) - 2.5rem
    ) !important;
width: 100% !important;
}`,
    "visual-parity-enabled": `body.visual-parity-enabled {
--p-spacing: calc(1.5 * var(--font-text-size));
--heading-spacing: calc(var(--p-spacing) * 1);
/* Fix hr elements */
.markdown-rendered hr {
        margin-block: calc(
            (
                    var(--font-text-size, 1rem) * var(--line-height-normal) -
                        var(--hr-thickness)
                ) / 2 + var(--p-spacing)
        );
    };
/* Fix header top margins */
.is-live-preview .cm-content > .HyperMD-header {
        padding-top: unset;
    };
.markdown-source-view.mod-cm6 .cm-table-widget {
        padding-block: 0;
    };
/* Fix collapsed headers in live preview */
.HyperMD-header:has(> .is-collapsed) {
        padding-block: 0 var(--p-spacing);
    };
/* Fix blockquotes */
& :not(blockquote) + blockquote,
    & .cm-line:not(.HyperMD-quote-1) + .HyperMD-quote-1,
    & .HyperMD-quote-1:first-child {
        padding-top: 0.25em !important;
    };
& blockquote:has(+ :not(blockquote)),
    & .HyperMD-quote-1:has(+ .cm-line:not(.HyperMD-quote-1)),
    & .HyperMD-quote-1:last-child {
        padding-bottom: 0.25em !important;
    };
}`,
  },
};
