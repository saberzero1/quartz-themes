import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "w95", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-1: #FFFFFF;
  --accent-1-muted: #ff79c6;
  --accent-2: #00FFFF;
  --accent-2-muted: #8be9fd;
  --accent-3: #00FF00;
  --accent-3-muted: #50fa7b;
  --accent-4: #FFFF00;
  --accent-4-muted: #ffb86c;
  --accent-5: #FF0000;
  --accent-5-muted: #ff5555;
  --accent-6: #00007b;
  --accent-6-muted: #bd93f9;
  --accent-h: 240;
  --accent-l: 24%;
  --accent-s: 100%;
  --background-editor-primary: #ffffff;
  --background-modifier-active-hover: rgba(0, 0, 122, 0.1);
  --background-modifier-border: #707070;
  --background-modifier-border-focus: #bdbebd;
  --background-modifier-border-hover: #bdbebd;
  --background-primary: #bdbebd;
  --background-secondary: #bdbebd;
  --bases-cards-background: #bdbebd;
  --bases-cards-shadow: 0 0 0 1px #707070;
  --bases-cards-shadow-hover: 0 0 0 1px #bdbebd;
  --bases-embed-border-color: #707070;
  --bases-group-heading-property-size: 11px;
  --bases-table-border-color: #707070;
  --bases-table-cell-background-active: #bdbebd;
  --bases-table-cell-background-selected: rgba(0, 0, 122, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #bdbebd;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00007b;
  --bases-table-header-background: #bdbebd;
  --bases-table-summary-background: #bdbebd;
  --blockquote-border-color: #00007b;
  --blur-background: color-mix(in srgb, #bdbebd 65%, transparent) linear-gradient(#bdbebd, color-mix(in srgb, #bdbebd 65%, transparent));
  --bold-color: #000000;
  --border-highlight: #FFFFFF;
  --border-shadow: #808080;
  --canvas-background: #bdbebd;
  --canvas-card-label-color: #4f5057;
  --checkbox-border-color: #4f5057;
  --checkbox-color: #00007b;
  --checkbox-color-hover: #bdbebd;
  --checkbox-marker-color: #bdbebd;
  --clickable-icon-radius: 0;
  --code-background: #FFFFFF;
  --code-border-color: #707070;
  --code-comment: #4f5057;
  --collapse-icon-color: #4f5057;
  --collapse-icon-color-collapsed: rgb(0, 0, 122);
  --color-accent: rgb(0, 0, 122);
  --color-accent-1: hsl(239, 101%, 25.8%);
  --color-accent-2: hsl(237, 102%, 27.6%);
  --color-accent-hsl: 240, 100%, 24%;
  --color-base-55: #808080;
  --divider-color: #707070;
  --divider-color-hover: #00007b;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FFFFFF;
  --embed-block-shadow-hover: 0 0 0 1px #707070, inset 0 0 0 1px #707070;
  --embed-border-start: 2px solid #00007b;
  --file-header-background: #bdbebd;
  --file-header-background-focused: #bdbebd;
  --file-header-font-size: 12px;
  --flair-background: #FFFFFF;
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: #707070;
  --footnote-id-color-no-occurrences: #4f5057;
  --graph-line: #bdbebd;
  --graph-node-focused: rgb(0, 0, 122);
  --graph-node-unresolved: #4f5057;
  --gray: var(--text-faint);
  --h1-color: #34548a;
  --h1-size: 1.4rem;
  --h2-color: #34548a;
  --h2-size: 1.3rem;
  --h3-color: #34548a;
  --h3-size: 1.2rem;
  --h4-color: #34548a;
  --h4-size: 1.1rem;
  --h5-color: #34548a;
  --h5-size: 1rem;
  --h6-color: #34548a;
  --h6-size: 0.9rem;
  --header-color: #34548a;
  --header-size: 1.4rem;
  --heading-formatting: #4f5057;
  --highlight: var(--text-highlight-bg);
  --hr-color: #707070;
  --icon-color-active: rgb(0, 0, 122);
  --indentation-guide-color: rgba(0, 0, 0, 0.4);
  --inline-title-color: #34548a;
  --inline-title-size: 1.4rem;
  --input-date-separator: #4f5057;
  --input-placeholder-color: #4f5057;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
  0 2px 3px 0 rgba(0, 0, 0, 0.05),
  0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
  0 1px 2px 0 rgba(0, 0, 0, 0.04),
  0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
  0 2px 3px 0 rgba(0, 0, 0, 0.1),
  0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
  0 1px 2px 0 rgba(0, 0, 0, 0.04),
  0 0 0 0 transparent;
  --interactive-accent: #00007b;
  --interactive-accent-hover: #bdbebd;
  --interactive-accent-hsl: 240, 100%, 24%;
  --interactive-hover: #FFFFFF;
  --interactive-normal: #FFFFFF;
  --italic-color: #343b58;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(0, 0, 122);
  --link-color-hover: hsl(237, 102%, 27.6%);
  --link-external-color: rgb(0, 0, 122);
  --link-external-color-hover: hsl(237, 102%, 27.6%);
  --link-unresolved-color: rgb(0, 0, 122);
  --link-unresolved-decoration-color: rgba(0, 0, 122, 0.3);
  --list-marker-color: #4f5057;
  --list-marker-color-collapsed: rgb(0, 0, 122);
  --menu-background: #bdbebd;
  --menu-border-color: #bdbebd;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
  0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
  0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-border-color: #707070;
  --metadata-divider-color: #707070;
  --metadata-property-box-shadow-focus: 0 0 0 2px #bdbebd;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bdbebd;
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 12px;
  --modal-background: #bdbebd;
  --nav-collapse-icon-color: #4f5057;
  --nav-collapse-icon-color-collapsed: #4f5057;
  --nav-files-background: #ffffff;
  --nav-heading-color-collapsed: #4f5057;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.4);
  --nav-item-background-active: #00007b;
  --nav-item-background-selected: rgba(0, 0, 122, 0.15);
  --nav-item-color-active: #FFFFFF;
  --nav-item-color-highlighted: rgb(0, 0, 122);
  --nav-item-size: 12px;
  --nav-tag-color: #4f5057;
  --pdf-background: #bdbebd;
  --pdf-page-background: #bdbebd;
  --pdf-sidebar-background: #bdbebd;
  --pill-border-color: #707070;
  --pill-border-color-hover: #bdbebd;
  --pill-color-remove: #4f5057;
  --pill-color-remove-hover: rgb(0, 0, 122);
  --prompt-background: #bdbebd;
  --raised-background: color-mix(in srgb, #bdbebd 65%, transparent) linear-gradient(#bdbebd, color-mix(in srgb, #bdbebd 65%, transparent));
  --ribbon-background: #bdbebd;
  --ribbon-background-collapsed: #bdbebd;
  --scrollbar-thumb: #f6f6f6;
  --scrollbar-track: #e3e3e3;
  --search-result-background: #bdbebd;
  --secondary: var(--text-accent);
  --setting-group-heading-size: 14px;
  --setting-items-border-color: #707070;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
  0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
  0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
  0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
  0px 15px 30px rgba(0, 0, 0, 0.07);
  --slider-thumb-border-color: #bdbebd;
  --slider-track-background: #707070;
  --status-bar-background: #bdbebd;
  --status-bar-border-color: #707070;
  --status-bar-font-size: 11px;
  --suggestion-background: #bdbebd;
  --tab-background-active: #bdbebd;
  --tab-container-background: #bdbebd;
  --tab-curve: 1px;
  --tab-divider-color: #bdbebd;
  --tab-font-size: 12px;
  --tab-outline-color: #707070;
  --tab-radius-active: 1px;
  --tab-stacked-font-size: 12px;
  --tab-switcher-background: #bdbebd;
  --tab-switcher-menubar-background: linear-gradient(to top, #bdbebd, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 0, 122);
  --tab-text-color: #4f5057;
  --tab-text-color-focused-highlighted: rgb(0, 0, 122);
  --table-add-button-border-color: #707070;
  --table-border-color: #707070;
  --table-drag-handle-background-active: #00007b;
  --table-drag-handle-color: #4f5057;
  --table-header-border-color: #707070;
  --table-selection: rgba(0, 0, 122, 0.1);
  --table-selection-border-color: #00007b;
  --tag-background: rgba(0, 0, 122, 0.1);
  --tag-background-hover: rgba(0, 0, 122, 0.2);
  --tag-border-color: rgba(0, 0, 122, 0.15);
  --tag-border-color-hover: rgba(0, 0, 122, 0.15);
  --tag-color: rgb(0, 0, 122);
  --tag-color-hover: rgb(0, 0, 122);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(0, 0, 122);
  --text-accent-hover: hsl(237, 102%, 27.6%);
  --text-faint: #4f5057;
  --text-highlight-bg: #485e3066;
  --text-selection: rgba(0, 0, 122, 0.2);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #bdbebd;
  --titlebar-background-focused: #bdbebd;
  --titlebar-border-color: #707070;
  --vault-profile-font-size: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(189, 190, 189);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(189, 190, 189);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(189, 190, 189);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(112, 112, 112);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(189, 190, 189);
  border-left-color: rgb(112, 112, 112);
}

body div#quartz-root {
  background-color: rgb(189, 190, 189);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body .page article p > i, i {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(72, 94, 48, 0.4);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 0, 122);
  outline: rgb(0, 0, 122) none 0px;
  text-decoration: underline rgb(0, 0, 122);
  text-decoration-color: rgb(0, 0, 122);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 122);
  outline: rgb(0, 0, 122) none 0px;
  text-decoration: underline rgb(0, 0, 122);
  text-decoration-color: rgb(0, 0, 122);
}

body a.internal.broken {
  color: rgb(0, 0, 122);
  outline: rgb(0, 0, 122) none 0px;
  text-decoration: underline rgba(0, 0, 122, 0.3);
  text-decoration-color: rgba(0, 0, 122, 0.3);
}`,
    lists: `body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}

body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(79, 80, 87);
  text-decoration: rgb(79, 80, 87);
}`,
    tables: `body td {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body th {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}`,
    embeds: `body .transclude {
  border-left-color: rgb(0, 0, 123);
}

body .transclude-inner {
  border-left-color: rgb(0, 0, 123);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(79, 80, 87);
  border-left-color: rgb(79, 80, 87);
  border-right-color: rgb(79, 80, 87);
  border-top-color: rgb(79, 80, 87);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body .search > .search-container > .search-space {
  background-color: rgb(189, 190, 189);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(189, 190, 189);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 122, 0.1);
  border-bottom-color: rgba(0, 0, 122, 0.15);
  border-left-color: rgba(0, 0, 122, 0.15);
  border-right-color: rgba(0, 0, 122, 0.15);
  border-top-color: rgba(0, 0, 122, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(0, 0, 122);
}

body h1 {
  color: rgb(52, 84, 138);
}

body h2 {
  color: rgb(52, 84, 138);
}

body h2.page-title, h2.page-title a {
  color: rgb(52, 84, 138);
}

body h3 {
  color: rgb(52, 84, 138);
}

body h4 {
  color: rgb(52, 84, 138);
}

body h5 {
  color: rgb(52, 84, 138);
}

body h6 {
  color: rgb(52, 84, 138);
}

body hr {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

body ::-webkit-scrollbar-corner {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}

body ::-webkit-scrollbar-track {
  background: rgb(189, 190, 189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(189, 190, 189);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(0, 0, 123);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(128, 128, 128);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-width: 0px;
}`,
    listPage: `body ul.section-ul {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: ridge;
  border-left-width: 4px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(128, 128, 128);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(79, 80, 87);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body kbd {
  background-color: rgb(255, 255, 255);
}`,
  },
};
