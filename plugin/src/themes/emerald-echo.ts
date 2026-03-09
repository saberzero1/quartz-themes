import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "emerald-echo",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #000000;
  --background-primary-alt: #000000;
  --background-secondary: #000000;
  --background-secondary-alt: #000000;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #000000;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #000000;
  --bases-table-cell-shadow-focus: 0 0 0 2px #529d5273;
  --bases-table-group-background: #000000;
  --bases-table-header-background: #000000;
  --bases-table-summary-background: #000000;
  --blockquote-background-color: #1121019c;
  --blockquote-border-color: #529d5273;
  --bold-color: #41b4b4;
  --canvas-background: #000000;
  --checkbox-color: #529d5273;
  --checkbox-color-hover: #37ff148c;
  --checkbox-marker-color: #000000;
  --code-background: #3f542946;
  --code-keyword: #c678dd;
  --code-normal: #a8c090;
  --code-property: #9D527C;
  --collapse-icon-color-collapsed: #63be63;
  --divider-color-hover: #529d5273;
  --embed-border-start: 2px solid #529d5273;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --graph-node-focused: #63be63;
  --h1-color: #2cce10;
  --h2-color: #BE7070;
  --h3-color: #3D7676;
  --h4-color: #a9ba9d;
  --h5-color: #9dc183;
  --h6-color: #486e02;
  --icon-color: #529d52;
  --icon-color-active: #63be63;
  --icon-color-focused: #39ff14;
  --icon-color-hover: #39ff14;
  --indentation-guide-color: #39ff14;
  --indentation-guide-color-active: #39ff14;
  --inline-title-color: #2cce10;
  --interactive-accent: #529d5273;
  --interactive-accent-hover: #37ff148c;
  --italic-color: #d8e43a;
  --link-color: #63be63;
  --link-color-hover: #39ff14;
  --link-decoration-thickness: 1px;
  --link-external-color: #529D52;
  --link-unresolved-color: #63be63;
  --list-marker-color-collapsed: #63be63;
  --menu-background: #000000;
  --modal-background: #000000;
  --nav-collapse-icon-color: #529d52;
  --nav-file-tag: #f4ec9e;
  --nav-indentation-guide-color: #529d52;
  --nav-item-color-active: #39ff14;
  --nav-item-color-highlighted: #63be63;
  --nav-item-color-hover: #39ff14;
  --nav-item-size: 15px;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color-remove-hover: #63be63;
  --prompt-background: #000000;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --scrollbar-active-thumb-bg: #39ff14;
  --scrollbar-thumb-bg: #529D52;
  --search-result-background: #000000;
  --setting-items-background: #000000;
  --status-bar-background: #000000;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #000000;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color-focused-highlighted: #63be63;
  --table-drag-handle-background-active: #529d5273;
  --table-header-background: #2a2a2a4c;
  --table-selection-border-color: #529d5273;
  --tag-color: #63be63;
  --tag-color-hover: #63be63;
  --text-accent: #63be63;
  --text-highlight-bg: #67c26769;
  --text-selection: #55a05550;
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration: rgb(65, 180, 180);
  text-decoration-color: rgb(65, 180, 180);
}

body .page article p > em, em {
  color: rgb(216, 228, 58);
  outline: rgb(216, 228, 58) none 0px;
  text-decoration: rgb(216, 228, 58);
  text-decoration-color: rgb(216, 228, 58);
}

body .page article p > i, i {
  color: rgb(216, 228, 58);
  outline: rgb(216, 228, 58) none 0px;
  text-decoration: rgb(216, 228, 58);
  text-decoration-color: rgb(216, 228, 58);
}

body .page article p > strong, strong {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration: rgb(65, 180, 180);
  text-decoration-color: rgb(65, 180, 180);
}

body .text-highlight {
  background-color: rgba(103, 194, 103, 0.41);
}`,
    links: `body a.external, footer a {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px rgb(82, 157, 82);
  text-decoration-color: rgb(82, 157, 82);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(99, 190, 99);
  outline: rgb(99, 190, 99) none 0px;
  text-decoration: underline 1px rgb(99, 190, 99);
  text-decoration-color: rgb(99, 190, 99);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(99, 190, 99);
  outline: rgb(99, 190, 99) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(17, 33, 1, 0.61);
}`,
    tables: `body tr {
  background-color: rgba(42, 42, 42, 0.298);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(63, 84, 41, 0.275);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(63, 84, 41, 0.275);
}

body pre > code, pre:has(> code) {
  background-color: rgba(63, 84, 41, 0.275);
}

body pre:has(> code) {
  background-color: rgba(63, 84, 41, 0.275);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
}

body .transclude {
  border-left-color: rgba(82, 157, 82, 0.45);
}

body .transclude-inner {
  border-left-color: rgba(82, 157, 82, 0.45);
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}

body a.internal.tag-link::before {
  color: rgb(99, 190, 99);
}

body h1 {
  color: rgb(44, 206, 16);
}

body h2 {
  color: rgb(190, 112, 112);
}

body h2.page-title, h2.page-title a {
  color: rgb(44, 206, 16);
}

body h3 {
  color: rgb(61, 118, 118);
}

body h4 {
  color: rgb(169, 186, 157);
}

body h5 {
  color: rgb(157, 193, 131);
}

body h6 {
  color: rgb(72, 110, 2);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(57, 255, 20);
  border-left-color: rgb(57, 255, 20);
  border-right-color: rgb(57, 255, 20);
  border-top-color: rgb(57, 255, 20);
  color: rgb(57, 255, 20);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(82, 157, 82);
  border-left-color: rgb(82, 157, 82);
  border-right-color: rgb(82, 157, 82);
  border-top-color: rgb(82, 157, 82);
  color: rgb(82, 157, 82);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(82, 157, 82);
  border-left-color: rgb(82, 157, 82);
  border-right-color: rgb(82, 157, 82);
  border-top-color: rgb(82, 157, 82);
  color: rgb(82, 157, 82);
}

body .darkmode svg {
  color: rgb(82, 157, 82);
  stroke: rgb(82, 157, 82);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body kbd {
  background-color: rgba(63, 84, 41, 0.275);
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}`,
  },
  light: {
    base: `:root:root {
  --bases-table-cell-shadow-focus: 0 0 0 2px #529D52;
  --blockquote-background-color: #71974b42;
  --blockquote-border-color: #529D52;
  --bold-color: #41b4b4;
  --checkbox-color: #529D52;
  --checkbox-color-hover: #2e7e2e;
  --code-background: #070e00;
  --code-keyword: #c678dd;
  --code-normal: #a8c090;
  --code-property: #9D527C;
  --collapse-icon-color-collapsed: #529D52;
  --divider-color-hover: #529D52;
  --embed-border-start: 2px solid #529D52;
  --graph-node-focused: #529D52;
  --h1-color: #128a12;
  --h2-color: #BE7070;
  --h3-color: #3D7676;
  --h4-color: #a9ba9d;
  --h5-color: #9dc183;
  --h6-color: #486e02;
  --icon-color: #274b27;
  --icon-color-active: #529D52;
  --icon-color-focused: #128a12;
  --icon-color-hover: #128a12;
  --indentation-guide-color: #529D52;
  --indentation-guide-color-active: #529D52;
  --inline-title-color: #529D52;
  --interactive-accent: #529D52;
  --interactive-accent-hover: #2e7e2e;
  --italic-color: #7c8508;
  --link-color: #529D52;
  --link-color-hover: #274b27;
  --link-decoration-thickness: 1px;
  --link-external-color: #529D52;
  --link-unresolved-color: #529D52;
  --list-marker-color-collapsed: #529D52;
  --nav-collapse-icon-color: #529d52;
  --nav-file-tag: #f4ec9e;
  --nav-indentation-guide-color: #529d52;
  --nav-item-color-active: #128a12;
  --nav-item-color-highlighted: #529D52;
  --nav-item-color-hover: #128a12;
  --nav-item-size: 15px;
  --pill-color-remove-hover: #529D52;
  --scrollbar-active-thumb-bg: #529D52;
  --scrollbar-thumb-bg: #529D52;
  --tab-text-color-focused-highlighted: #529D52;
  --table-drag-handle-background-active: #529D52;
  --table-header-background: #2a2a2a4c;
  --table-selection-border-color: #529D52;
  --tag-color: #529D52;
  --tag-color-hover: #529D52;
  --text-accent: #529D52;
  --text-highlight-bg: #529d52b1;
  --text-selection: #55a05550;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .page article p > b, b {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration: rgb(65, 180, 180);
  text-decoration-color: rgb(65, 180, 180);
}

body .page article p > em, em {
  color: rgb(124, 133, 8);
  outline: rgb(124, 133, 8) none 0px;
  text-decoration: rgb(124, 133, 8);
  text-decoration-color: rgb(124, 133, 8);
}

body .page article p > i, i {
  color: rgb(124, 133, 8);
  outline: rgb(124, 133, 8) none 0px;
  text-decoration: rgb(124, 133, 8);
  text-decoration-color: rgb(124, 133, 8);
}

body .page article p > strong, strong {
  color: rgb(65, 180, 180);
  outline: rgb(65, 180, 180) none 0px;
  text-decoration: rgb(65, 180, 180);
  text-decoration-color: rgb(65, 180, 180);
}

body .text-highlight {
  background-color: rgba(82, 157, 82, 0.694);
}`,
    links: `body a.external, footer a {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px rgb(82, 157, 82);
  text-decoration-color: rgb(82, 157, 82);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px rgb(82, 157, 82);
  text-decoration-color: rgb(82, 157, 82);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(82, 157, 82);
  outline: rgb(82, 157, 82) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    blockquotes: `body blockquote {
  background-color: rgba(113, 151, 75, 0.26);
}`,
    tables: `body tr {
  background-color: rgba(42, 42, 42, 0.298);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 14, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 14, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(7, 14, 0);
}

body pre:has(> code) {
  background-color: rgb(7, 14, 0);
}`,
    embeds: `body .transclude {
  border-left-color: rgb(82, 157, 82);
}

body .transclude-inner {
  border-left-color: rgb(82, 157, 82);
}`,
    search: `body a.internal.tag-link::before {
  color: rgb(82, 157, 82);
}

body h1 {
  color: rgb(18, 138, 18);
}

body h2 {
  color: rgb(190, 112, 112);
}

body h2.page-title, h2.page-title a {
  color: rgb(82, 157, 82);
}

body h3 {
  color: rgb(61, 118, 118);
}

body h4 {
  color: rgb(169, 186, 157);
}

body h5 {
  color: rgb(157, 193, 131);
}

body h6 {
  color: rgb(72, 110, 2);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(18, 138, 18);
  border-left-color: rgb(18, 138, 18);
  border-right-color: rgb(18, 138, 18);
  border-top-color: rgb(18, 138, 18);
  color: rgb(18, 138, 18);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(39, 75, 39);
  border-left-color: rgb(39, 75, 39);
  border-right-color: rgb(39, 75, 39);
  border-top-color: rgb(39, 75, 39);
  color: rgb(39, 75, 39);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(39, 75, 39);
  border-left-color: rgb(39, 75, 39);
  border-right-color: rgb(39, 75, 39);
  border-top-color: rgb(39, 75, 39);
  color: rgb(39, 75, 39);
}

body .darkmode svg {
  color: rgb(39, 75, 39);
  stroke: rgb(39, 75, 39);
}`,
    misc: `body kbd {
  background-color: rgb(7, 14, 0);
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}`,
  },
};
