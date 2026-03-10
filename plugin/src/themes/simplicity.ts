import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "simplicity",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 180 !important;
  --accent-l: 46% !important;
  --accent-s: 45% !important;
  --background-modifier-active-hover: rgba(65, 170, 170, 0.1) !important;
  --background-primary: rgb(17, 44, 44) !important;
  --background-secondary: rgba(65, 170, 170, 0.06) !important;
  --bases-cards-background: rgb(17, 44, 44) !important;
  --bases-table-cell-background-active: rgb(17, 44, 44) !important;
  --bases-table-cell-background-selected: rgba(65, 170, 170, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(65, 170, 170) !important;
  --bases-table-header-background: rgb(17, 44, 44) !important;
  --bases-table-summary-background: rgb(17, 44, 44) !important;
  --blockquote-border-color: rgb(65, 170, 170) !important;
  --canvas-background: rgb(17, 44, 44) !important;
  --checkbox-color: rgb(65, 170, 170) !important;
  --checkbox-color-hover: rgb(80, 190, 185) !important;
  --checkbox-marker-color: rgb(17, 44, 44) !important;
  --collapse-icon-color-collapsed: rgb(80, 190, 185) !important;
  --color-accent: rgb(65, 170, 170) !important;
  --color-accent-1: rgb(80, 190, 185) !important;
  --color-accent-2: rgb(101, 200, 191) !important;
  --color-accent-hsl: 180, 45%, 46% !important;
  --divider-color-hover: rgb(65, 170, 170) !important;
  --embed-border-start: 2px solid rgb(65, 170, 170) !important;
  --file-header-background: rgb(17, 44, 44) !important;
  --file-header-background-focused: rgb(17, 44, 44) !important;
  --graph-node-focused: rgb(80, 190, 185) !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-size: 1.5em !important;
  --h2-weight: 400 !important;
  --h3-size: 1.2em !important;
  --h3-weight: 400 !important;
  --h4-size: 1.1em !important;
  --h4-weight: 400 !important;
  --highlight: rgba(65, 170, 170, 0.4) !important;
  --icon-color-active: rgb(80, 190, 185) !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: rgb(65, 170, 170) !important;
  --interactive-accent-hover: rgb(80, 190, 185) !important;
  --interactive-accent-hsl: 180, 45%, 46% !important;
  --light: rgb(17, 44, 44) !important;
  --lightgray: rgba(65, 170, 170, 0.06) !important;
  --link-color: rgb(80, 190, 185) !important;
  --link-color-hover: rgb(101, 200, 191) !important;
  --link-external-color: rgb(80, 190, 185) !important;
  --link-external-color-hover: rgb(101, 200, 191) !important;
  --link-unresolved-color: rgb(80, 190, 185) !important;
  --link-unresolved-decoration-color: rgba(65, 170, 170, 0.3) !important;
  --list-marker-color-collapsed: rgb(80, 190, 185) !important;
  --menu-background: rgba(65, 170, 170, 0.06) !important;
  --modal-background: rgb(17, 44, 44) !important;
  --nav-item-background-selected: rgba(65, 170, 170, 0.15) !important;
  --nav-item-color: #FFF !important;
  --nav-item-color-highlighted: rgb(80, 190, 185) !important;
  --pdf-background: rgb(17, 44, 44) !important;
  --pdf-page-background: rgb(17, 44, 44) !important;
  --pdf-sidebar-background: rgb(17, 44, 44) !important;
  --pill-color-remove-hover: rgb(80, 190, 185) !important;
  --prompt-background: rgb(17, 44, 44) !important;
  --ribbon-background: rgba(65, 170, 170, 0.06) !important;
  --ribbon-background-collapsed: rgb(17, 44, 44) !important;
  --search-result-background: rgb(17, 44, 44) !important;
  --secondary: rgb(80, 190, 185) !important;
  --status-bar-background: rgba(65, 170, 170, 0.06) !important;
  --suggestion-background: rgb(17, 44, 44) !important;
  --tab-background-active: rgb(17, 44, 44) !important;
  --tab-container-background: rgba(65, 170, 170, 0.06) !important;
  --tab-outline-color: rgba(65, 170, 170, 0.08) !important;
  --tab-switcher-background: rgba(65, 170, 170, 0.06) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgba(65, 170, 170, 0.06), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(65, 170, 170) !important;
  --tab-text-color-focused-highlighted: rgb(80, 190, 185) !important;
  --table-drag-handle-background-active: rgb(65, 170, 170) !important;
  --table-selection: rgba(65, 170, 170, 0.1) !important;
  --table-selection-border-color: rgb(65, 170, 170) !important;
  --tag-background: rgba(65, 170, 170, 0.1) !important;
  --tag-background-hover: rgba(65, 170, 170, 0.2) !important;
  --tag-border-color: rgba(65, 170, 170, 0.15) !important;
  --tag-border-color-hover: rgba(65, 170, 170, 0.15) !important;
  --tag-color: rgb(80, 190, 185) !important;
  --tag-color-hover: rgb(80, 190, 185) !important;
  --tertiary: rgb(101, 200, 191) !important;
  --text-accent: rgb(80, 190, 185) !important;
  --text-accent-hover: rgb(101, 200, 191) !important;
  --text-highlight-bg: rgba(65, 170, 170, 0.4) !important;
  --text-selection: rgba(65, 170, 170, 0.33) !important;
  --textHighlight: rgba(65, 170, 170, 0.4) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(65, 170, 170, 0.06);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(16, 43, 43);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(65, 170, 170, 0.06);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(65, 170, 170, 0.08);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(65, 170, 170, 0.06);
  border-left-color: rgba(65, 170, 170, 0.08);
}

body div#quartz-root {
  background-color: rgb(16, 43, 43);
}`,
    typography: `body .text-highlight {
  background-color: rgba(65, 170, 170, 0.4);
}`,
    links: `body a.external, footer a {
  color: rgb(80, 190, 185);
  outline: rgb(80, 190, 185) none 0px;
  text-decoration: underline rgb(80, 190, 185);
  text-decoration-color: rgb(80, 190, 185);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(80, 190, 185);
  outline: rgb(80, 190, 185) none 0px;
  text-decoration: rgb(80, 190, 185);
  text-decoration-color: rgb(80, 190, 185);
}

body a.internal.broken {
  color: rgb(80, 190, 185);
  outline: rgb(80, 190, 185) none 0px;
  text-decoration: rgb(80, 190, 185);
  text-decoration-color: rgb(80, 190, 185);
}`,
    lists: `body ol.overflow {
  background-color: rgb(16, 43, 43);
}

body ul.overflow {
  background-color: rgb(16, 43, 43);
}`,
    blockquotes: `body blockquote {
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `body table {
  width: 1780px;
}

body td {
  background-color: rgba(65, 170, 170, 0.08);
  border-bottom-color: rgb(16, 43, 43);
  border-bottom-width: 3px;
  border-left-color: rgb(16, 43, 43);
  border-left-width: 3px;
  border-right-color: rgb(16, 43, 43);
  border-right-width: 3px;
  border-top-color: rgb(16, 43, 43);
  border-top-width: 3px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}

body th {
  background-color: rgba(65, 170, 170, 0.15);
  border-bottom-color: rgb(16, 43, 43);
  border-bottom-width: 3px;
  border-left-color: rgb(16, 43, 43);
  border-left-width: 3px;
  border-right-color: rgb(16, 43, 43);
  border-right-width: 3px;
  border-top-color: rgb(16, 43, 43);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(65, 170, 170);
}

body .transclude-inner {
  border-left-color: rgb(65, 170, 170);
}`,
    search: `body .search > .search-button {
  background-color: rgb(16, 43, 43);
}

body .search > .search-container > .search-space {
  background-color: rgb(16, 43, 43);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(16, 43, 43);
  border-bottom-color: rgba(65, 170, 170, 0.06);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(65, 170, 170, 0.1);
  border-bottom-color: rgba(65, 170, 170, 0.15);
  border-left-color: rgba(65, 170, 170, 0.15);
  border-right-color: rgba(65, 170, 170, 0.15);
  border-top-color: rgba(65, 170, 170, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(80, 190, 185);
}

body hr {
  border-bottom-color: rgba(65, 170, 170, 0.08);
  border-left-color: rgba(65, 170, 170, 0.08);
  border-right-color: rgba(65, 170, 170, 0.08);
  border-top-color: rgba(65, 170, 170, 0.08);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

body ::-webkit-scrollbar-corner {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

body ::-webkit-scrollbar-track {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgba(65, 170, 170, 0.06);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(65, 170, 170);
  border-left-color: rgb(65, 170, 170);
  border-right-color: rgb(65, 170, 170);
  border-top-color: rgb(65, 170, 170);
  color: rgb(65, 170, 170);
}

body .darkmode svg {
  color: rgb(65, 170, 170);
  stroke: rgb(65, 170, 170);
}`,
    misc: `body .navigation-progress {
  background-color: rgba(65, 170, 170, 0.06);
}

body input[type=text] {
  background-color: rgb(16, 43, 43);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 180 !important;
  --accent-l: 46% !important;
  --accent-s: 45% !important;
  --background-modifier-active-hover: rgba(65, 170, 170, 0.1) !important;
  --background-secondary: rgba(65, 170, 170, 0.06) !important;
  --bases-table-cell-background-selected: rgba(65, 170, 170, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(69, 181, 179) !important;
  --blockquote-border-color: rgb(69, 181, 179) !important;
  --caret-color: rgb(25, 67, 67) !important;
  --checkbox-color: rgb(69, 181, 179) !important;
  --checkbox-color-hover: rgb(80, 190, 185) !important;
  --code-normal: rgb(25, 67, 67) !important;
  --collapse-icon-color-collapsed: rgb(65, 170, 170) !important;
  --color-accent: rgb(65, 170, 170) !important;
  --color-accent-1: rgb(69, 181, 179) !important;
  --color-accent-2: rgb(80, 190, 185) !important;
  --color-accent-hsl: 180, 45%, 46% !important;
  --dark: rgb(25, 67, 67) !important;
  --darkgray: rgb(25, 67, 67) !important;
  --divider-color-hover: rgb(69, 181, 179) !important;
  --embed-border-start: 2px solid rgb(69, 181, 179) !important;
  --flair-color: rgb(25, 67, 67) !important;
  --graph-node-focused: rgb(65, 170, 170) !important;
  --graph-text: rgb(25, 67, 67) !important;
  --gray: rgb(25, 67, 67) !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-size: 1.5em !important;
  --h2-weight: 400 !important;
  --h3-size: 1.2em !important;
  --h3-weight: 400 !important;
  --h4-size: 1.1em !important;
  --h4-weight: 400 !important;
  --highlight: rgba(65, 170, 170, 0.1) !important;
  --icon-color-active: rgb(65, 170, 170) !important;
  --icon-color-focused: rgb(25, 67, 67) !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: rgb(69, 181, 179) !important;
  --interactive-accent-hover: rgb(80, 190, 185) !important;
  --interactive-accent-hsl: 180, 45%, 46% !important;
  --lightgray: rgba(65, 170, 170, 0.06) !important;
  --link-color: rgb(65, 170, 170) !important;
  --link-color-hover: rgb(80, 190, 185) !important;
  --link-external-color: rgb(65, 170, 170) !important;
  --link-external-color-hover: rgb(80, 190, 185) !important;
  --link-unresolved-color: rgb(65, 170, 170) !important;
  --link-unresolved-decoration-color: rgba(65, 170, 170, 0.3) !important;
  --list-marker-color-collapsed: rgb(65, 170, 170) !important;
  --menu-background: rgba(65, 170, 170, 0.06) !important;
  --metadata-input-text-color: rgb(25, 67, 67) !important;
  --nav-heading-color: rgb(25, 67, 67) !important;
  --nav-heading-color-hover: rgb(25, 67, 67) !important;
  --nav-item-background-hover: rgba(65, 170, 170, 0.03) !important;
  --nav-item-background-selected: rgba(65, 170, 170, 0.15) !important;
  --nav-item-color-active: rgb(25, 67, 67) !important;
  --nav-item-color-highlighted: rgb(65, 170, 170) !important;
  --nav-item-color-hover: rgb(25, 67, 67) !important;
  --nav-item-color-selected: rgb(25, 67, 67) !important;
  --pill-color-hover: rgb(25, 67, 67) !important;
  --pill-color-remove-hover: rgb(65, 170, 170) !important;
  --ribbon-background: rgba(65, 170, 170, 0.06) !important;
  --secondary: rgb(65, 170, 170) !important;
  --setting-group-heading-color: rgb(25, 67, 67) !important;
  --status-bar-background: rgba(65, 170, 170, 0.06) !important;
  --tab-container-background: #ffffff !important;
  --tab-outline-color: rgba(65, 170, 170, 0.08) !important;
  --tab-switcher-background: rgba(65, 170, 170, 0.06) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgba(65, 170, 170, 0.06), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(65, 170, 170) !important;
  --tab-text-color-focused-active-current: rgb(25, 67, 67) !important;
  --tab-text-color-focused-highlighted: rgb(65, 170, 170) !important;
  --table-drag-handle-background-active: rgb(69, 181, 179) !important;
  --table-header-color: rgb(25, 67, 67) !important;
  --table-selection: rgba(65, 170, 170, 0.1) !important;
  --table-selection-border-color: rgb(69, 181, 179) !important;
  --tag-background: rgba(65, 170, 170, 0.1) !important;
  --tag-background-hover: rgba(65, 170, 170, 0.2) !important;
  --tag-border-color: rgba(65, 170, 170, 0.15) !important;
  --tag-border-color-hover: rgba(65, 170, 170, 0.15) !important;
  --tag-color: rgb(65, 170, 170) !important;
  --tag-color-hover: rgb(65, 170, 170) !important;
  --tertiary: rgb(80, 190, 185) !important;
  --text-accent: rgb(65, 170, 170) !important;
  --text-accent-hover: rgb(80, 190, 185) !important;
  --text-highlight-bg: rgba(65, 170, 170, 0.1) !important;
  --text-normal: rgb(25, 67, 67) !important;
  --text-selection: rgba(65, 170, 170, 0.2) !important;
  --textHighlight: rgba(65, 170, 170, 0.1) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-text-color-focused: rgb(25, 67, 67) !important;
  --vault-profile-color: rgb(25, 67, 67) !important;
  --vault-profile-color-hover: rgb(25, 67, 67) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(26, 68, 68);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(26, 68, 68);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(65, 170, 170, 0.06);
  color: rgb(26, 68, 68);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(65, 170, 170, 0.08);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgba(65, 170, 170, 0.08);
  color: rgb(26, 68, 68);
}

body div#quartz-root {
  color: rgb(26, 68, 68);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body .page article p > em, em {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body .page article p > i, i {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body .page article p > strong, strong {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body .text-highlight {
  background-color: rgba(65, 170, 170, 0.1);
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body del {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: line-through rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}`,
    links: `body a.external, footer a {
  color: rgb(65, 170, 170);
  outline: rgb(65, 170, 170) none 0px;
  text-decoration: underline rgb(65, 170, 170);
  text-decoration-color: rgb(65, 170, 170);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(65, 170, 170);
  outline: rgb(65, 170, 170) none 0px;
  text-decoration: rgb(65, 170, 170);
  text-decoration-color: rgb(65, 170, 170);
}

body a.internal.broken {
  color: rgb(65, 170, 170);
  outline: rgb(65, 170, 170) none 0px;
  text-decoration: rgb(65, 170, 170);
  text-decoration-color: rgb(65, 170, 170);
}`,
    lists: `body dd {
  color: rgb(26, 68, 68);
}

body dt {
  color: rgb(26, 68, 68);
}

body ol > li {
  color: rgb(26, 68, 68);
}

body ol.overflow {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body ul > li {
  color: rgb(26, 68, 68);
}

body ul.overflow {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    blockquotes: `body blockquote {
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body table {
  color: rgb(26, 68, 68);
  width: 1780px;
}

body td {
  background-color: rgba(65, 170, 170, 0.08);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 3px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 3px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 3px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 3px;
  color: rgb(26, 68, 68);
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}

body th {
  background-color: rgba(65, 170, 170, 0.15);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 3px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 3px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 3px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(26, 68, 68);
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}`,
    code: `body code {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(26, 68, 68);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body figcaption {
  color: rgb(26, 68, 68);
}

body figure {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body img {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body video {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

body .transclude {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(69, 183, 181);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(69, 183, 181);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}`,
    search: `body .search > .search-button {
  color: rgb(26, 68, 68);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 68, 68);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 68, 68);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(65, 170, 170, 0.06);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 68, 68);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(65, 170, 170, 0.1);
  border-bottom-color: rgba(65, 170, 170, 0.15);
  border-left-color: rgba(65, 170, 170, 0.15);
  border-right-color: rgba(65, 170, 170, 0.15);
  border-top-color: rgba(65, 170, 170, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(65, 170, 170);
}

body h1 {
  color: rgb(26, 68, 68);
}

body h2 {
  color: rgb(26, 68, 68);
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 68, 68);
}

body h3 {
  color: rgb(26, 68, 68);
}

body h4 {
  color: rgb(26, 68, 68);
}

body h5 {
  color: rgb(26, 68, 68);
}

body h6 {
  color: rgb(26, 68, 68);
}

body hr {
  border-bottom-color: rgba(65, 170, 170, 0.08);
  border-left-color: rgba(65, 170, 170, 0.08);
  border-right-color: rgba(65, 170, 170, 0.08);
  border-top-color: rgba(65, 170, 170, 0.08);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    footer: `body footer {
  background-color: rgba(65, 170, 170, 0.06);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 68, 68);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(65, 170, 170);
  border-left-color: rgb(65, 170, 170);
  border-right-color: rgb(65, 170, 170);
  border-top-color: rgb(65, 170, 170);
  color: rgb(65, 170, 170);
}

body .darkmode svg {
  color: rgb(65, 170, 170);
  stroke: rgb(65, 170, 170);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

body .navigation-progress {
  background-color: rgba(65, 170, 170, 0.06);
}

body .page-header h2.page-title {
  color: rgb(26, 68, 68);
}

body abbr {
  color: rgb(26, 68, 68);
  text-decoration: underline dotted rgb(26, 68, 68);
}

body details {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body input[type=text] {
  background-color: rgb(255, 255, 255);
}

body kbd {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

body progress {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

body sub {
  color: rgb(26, 68, 68);
}

body summary {
  color: rgb(26, 68, 68);
}

body sup {
  color: rgb(26, 68, 68);
}`,
  },
};
