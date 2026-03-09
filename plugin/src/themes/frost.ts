import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "frost",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --color-bg-primary: #1a202c;
  --color-bg-secondary: #2d3748;
  --color-border: #4a5568;
  --color-code-bg: #1e2937
	--color-link: #edf2f7;
  --color-text-primary: #edf2f7;
  --color-text-secondary: #a0aec0;
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --radius-lg: 12px;
  --radius-md: 8px;
  --radius-sm: 4px;
  --spacing-lg: 1.5rem;
  --spacing-md: 1rem;
  --spacing-sm: 0.5rem;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(237, 242, 247);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(237, 242, 247);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(237, 242, 247);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(237, 242, 247);
}

body div#quartz-root {
  background-color: rgb(26, 32, 44);
  color: rgb(237, 242, 247);
}`,
    typography: `body .page article p > b, b {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration: rgb(237, 242, 247);
  text-decoration-color: rgb(237, 242, 247);
}

body .page article p > em, em {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration: rgb(237, 242, 247);
  text-decoration-color: rgb(237, 242, 247);
}

body .page article p > i, i {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration: rgb(237, 242, 247);
  text-decoration-color: rgb(237, 242, 247);
}

body .page article p > strong, strong {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration: rgb(237, 242, 247);
  text-decoration-color: rgb(237, 242, 247);
}

body del {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration: line-through rgb(237, 242, 247);
  text-decoration-color: rgb(237, 242, 247);
}

body p {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline 1px rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-thickness: 1px;
  transition: 0.2s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline 1px rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    lists: `body ol.overflow {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

body ul.overflow {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(218, 218, 218);
  text-decoration: underline 1px rgb(218, 218, 218);
}`,
    tables: `body .spacer {
  background-color: rgb(45, 55, 72);
}

body .table-container {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 662px;
}

body th {
  background-color: rgb(45, 55, 72);
}`,
    code: `body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  font-family: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}`,
    images: `body audio {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

body figcaption {
  color: rgb(237, 242, 247);
}

body figure {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

body img {
  border-bottom-color: rgb(237, 242, 247);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(237, 242, 247);
  border-radius: 8px;
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    embeds: `body .transclude {
  border-bottom-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

body .transclude-inner {
  border-bottom-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    search: `body .search > .search-button {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  text-decoration: rgb(237, 242, 247);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  text-decoration: rgb(237, 242, 247);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  text-decoration: rgb(237, 242, 247);
}`,
    footer: `body footer {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
  color: rgb(237, 242, 247);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(237, 242, 247);
  text-decoration: rgb(237, 242, 247);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

body li.section-li > .section .meta {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(237, 242, 247);
  text-decoration: rgb(237, 242, 247);
}

body ul.section-ul {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
  color: rgb(237, 242, 247);
}

body progress {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
  },
  light: {
    base: `:root:root {
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8f9fa;
  --color-border: #e2e8f0;
  --color-code-bg: #f1f5f9;
  --color-link: #1a202c;
  --color-text-primary: #1a202c;
  --color-text-secondary: #718096;
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --radius-lg: 12px;
  --radius-md: 8px;
  --radius-sm: 4px;
  --spacing-lg: 1.5rem;
  --spacing-md: 1rem;
  --spacing-sm: 0.5rem;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(26, 32, 44);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(26, 32, 44);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(26, 32, 44);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(26, 32, 44);
}

body div#quartz-root {
  color: rgb(26, 32, 44);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: rgb(26, 32, 44);
  text-decoration-color: rgb(26, 32, 44);
}

body .page article p > em, em {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: rgb(26, 32, 44);
  text-decoration-color: rgb(26, 32, 44);
}

body .page article p > i, i {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: rgb(26, 32, 44);
  text-decoration-color: rgb(26, 32, 44);
}

body .page article p > strong, strong {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: rgb(26, 32, 44);
  text-decoration-color: rgb(26, 32, 44);
}

body del {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: line-through rgb(26, 32, 44);
  text-decoration-color: rgb(26, 32, 44);
}

body p {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: underline 1px rgb(26, 32, 44);
  text-decoration-color: rgb(26, 32, 44);
  text-decoration-thickness: 1px;
  transition: 0.2s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: underline 1px rgb(26, 32, 44);
  text-decoration-color: rgb(26, 32, 44);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    lists: `body ol.overflow {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

body ul.overflow {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(26, 32, 44);
  text-decoration: underline 1px rgb(26, 32, 44);
}`,
    tables: `body .spacer {
  background-color: rgb(248, 249, 250);
}

body .table-container {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 660px;
}

body th {
  background-color: rgb(248, 249, 250);
}`,
    code: `body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  font-family: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

body figcaption {
  color: rgb(26, 32, 44);
}

body figure {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

body img {
  border-bottom-color: rgb(26, 32, 44);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(26, 32, 44);
  border-radius: 8px;
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    embeds: `body .transclude {
  border-bottom-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    search: `body .search > .search-button {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  text-decoration: rgb(26, 32, 44);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  text-decoration: rgb(26, 32, 44);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  text-decoration: rgb(26, 32, 44);
}`,
    footer: `body footer {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
  color: rgb(26, 32, 44);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 32, 44);
  text-decoration: rgb(26, 32, 44);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

body li.section-li > .section .meta {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 32, 44);
  text-decoration: rgb(26, 32, 44);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
  color: rgb(26, 32, 44);
}

body progress {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
  },
};
