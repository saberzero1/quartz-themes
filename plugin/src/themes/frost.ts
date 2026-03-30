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
  --color-bg-primary: #1a202c !important;
  --color-bg-secondary: #2d3748 !important;
  --color-border: #4a5568 !important;
  --color-code-bg: #1e2937
	--color-link: #edf2f7 !important;
  --color-text-primary: #edf2f7 !important;
  --color-text-secondary: #a0aec0 !important;
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  --radius-lg: 12px !important;
  --radius-md: 8px !important;
  --radius-sm: 4px !important;
  --spacing-lg: 1.5rem !important;
  --spacing-md: 1rem !important;
  --spacing-sm: 0.5rem !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 32, 44);
  color: rgb(237, 242, 247);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body del {
  color: rgb(237, 242, 247);
  outline: rgb(237, 242, 247) none 0px;
  text-decoration-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body p {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-thickness: 1px;
  transition: 0.2s;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(218, 218, 218);
  text-decoration: underline 1px;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(45, 55, 72);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 662px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(45, 55, 72);
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  font-family: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body img {
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

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 44);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    footer: `html[saved-theme="dark"] body footer {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(237, 242, 247);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
  color: rgb(237, 242, 247);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(237, 242, 247);
  border-left-color: rgb(237, 242, 247);
  border-right-color: rgb(237, 242, 247);
  border-top-color: rgb(237, 242, 247);
}`,
  },
  light: {
    base: `:root:root {
  --color-bg-primary: #ffffff !important;
  --color-bg-secondary: #f8f9fa !important;
  --color-border: #e2e8f0 !important;
  --color-code-bg: #f1f5f9 !important;
  --color-link: #1a202c !important;
  --color-text-primary: #1a202c !important;
  --color-text-secondary: #718096 !important;
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  --radius-lg: 12px !important;
  --radius-md: 8px !important;
  --radius-sm: 4px !important;
  --spacing-lg: 1.5rem !important;
  --spacing-md: 1rem !important;
  --spacing-sm: 0.5rem !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(26, 32, 44);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body del {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body p {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(26, 32, 44);
  text-decoration-thickness: 1px;
  transition: 0.2s;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(26, 32, 44);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(26, 32, 44);
  outline: rgb(26, 32, 44) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(26, 32, 44);
  text-decoration: underline 1px;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(248, 249, 250);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 660px;
}

html[saved-theme="light"] body th {
  background-color: rgb(248, 249, 250);
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  font-family: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body img {
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

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    footer: `html[saved-theme="light"] body footer {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(26, 32, 44);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
  color: rgb(26, 32, 44);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 32, 44);
  border-left-color: rgb(26, 32, 44);
  border-right-color: rgb(26, 32, 44);
  border-top-color: rgb(26, 32, 44);
}`,
  },
};
