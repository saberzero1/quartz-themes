import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "fancy-a-story",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "chakra-petch",
      "limelight",
      "noto-serif",
      "orbitron",
      "playfair-display",
      "walter-turncoat",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 31, 31);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 31, 31);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(55, 55, 55);
  color: rgb(217, 217, 217);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: line-through rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body p {
  color: rgb(156, 156, 156);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 156, 156) none 0px;
  text-decoration: rgb(156, 156, 156);
  text-decoration-color: rgb(156, 156, 156);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: underline 2px rgb(166, 138, 249);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: 2px rgb(166, 138, 249);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: 2px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 2px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(217, 217, 217);
  font-weight: 300;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 232.312px;
  margin-right: 232.328px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-left-width: 0px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 0px;
  border-top-color: rgb(47, 47, 47);
  color: rgb(217, 217, 217);
  font-weight: 300;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-width: 3px;
  border-left-color: rgb(47, 47, 47);
  border-left-width: 0px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 0px;
  border-top-color: rgb(47, 47, 47);
  color: rgb(217, 217, 217);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 80, 80);
  border-right-color: rgb(80, 80, 80);
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 80, 80);
  border-right-color: rgb(80, 80, 80);
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(238, 238, 16);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(238, 238, 16);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(238, 238, 16);
  border-left-color: rgb(238, 238, 16);
  border-right-color: rgb(238, 238, 16);
  border-top-color: rgb(238, 238, 16);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 80, 80);
  border-right-color: rgb(80, 80, 80);
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 80, 80);
  border-right-color: rgb(80, 80, 80);
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(156, 156, 156);
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(156, 156, 156);
  text-decoration: line-through rgb(156, 156, 156);
  text-decoration-color: rgb(156, 156, 156);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(106, 146, 219);
  border-left-color: rgb(106, 146, 219);
  border-right-color: rgb(106, 146, 219);
  border-top-color: rgb(106, 146, 219);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(123, 213, 213, 0.1);
  border-bottom-color: rgba(123, 213, 213, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 213, 213, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(123, 213, 213, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(123, 213, 213, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(225, 104, 104, 0.1);
  border-bottom-color: rgba(225, 104, 104, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(225, 104, 104, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(225, 104, 104, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(225, 104, 104, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(225, 104, 104, 0.1);
  border-bottom-color: rgba(225, 104, 104, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(225, 104, 104, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(225, 104, 104, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(225, 104, 104, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(187, 137, 228, 0.1);
  border-bottom-color: rgba(187, 137, 228, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(187, 137, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(187, 137, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(187, 137, 228, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(225, 104, 104, 0.1);
  border-bottom-color: rgba(225, 104, 104, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(225, 104, 104, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(225, 104, 104, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(225, 104, 104, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(106, 146, 219, 0.1);
  border-bottom-color: rgba(106, 146, 219, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 146, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 146, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 146, 219, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(106, 146, 219, 0.1);
  border-bottom-color: rgba(106, 146, 219, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 146, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 146, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 146, 219, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(223, 159, 75, 0.1);
  border-bottom-color: rgba(223, 159, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(223, 159, 75, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(223, 159, 75, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(223, 159, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(181, 181, 181, 0.1);
  border-bottom-color: rgba(181, 181, 181, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(181, 181, 181, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(181, 181, 181, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(181, 181, 181, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(100, 207, 100, 0.1);
  border-bottom-color: rgba(100, 207, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(100, 207, 100, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(100, 207, 100, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(100, 207, 100, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(123, 213, 213, 0.1);
  border-bottom-color: rgba(123, 213, 213, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(123, 213, 213, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(123, 213, 213, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(123, 213, 213, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(106, 146, 219, 0.1);
  border-bottom-color: rgba(106, 146, 219, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 146, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 146, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 146, 219, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(223, 159, 75, 0.1);
  border-bottom-color: rgba(223, 159, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(223, 159, 75, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(223, 159, 75, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(223, 159, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(72, 72, 72);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 80, 80);
  border-right-color: rgb(80, 80, 80);
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(217, 217, 217);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(98, 98, 98);
  border-left-color: rgb(98, 98, 98);
  border-right-color: rgb(98, 98, 98);
  border-top-color: rgb(98, 98, 98);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(217, 217, 217);
  font-weight: 300;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(98, 98, 98);
  border-left-color: rgb(98, 98, 98);
  border-right-color: rgb(98, 98, 98);
  border-top-color: rgb(98, 98, 98);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(55, 55, 55);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html[saved-theme="dark"] body h1 {
  color: rgb(31, 31, 31);
  font-family: TT2020StyleE, Courier, monospace, "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(217, 217, 217);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgba(106, 146, 219, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 146, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 146, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 146, 219, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(55, 55, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 55, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(55, 55, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 55, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(55, 55, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 55, 55);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(55, 55, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 55, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(55, 55, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 55, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(55, 55, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 55, 55);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(238, 167, 167);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(238, 167, 167);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(238, 167, 167);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(238, 167, 167);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(156, 156, 156);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(156, 156, 156);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(217, 217, 217);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(156, 156, 156);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(55, 55, 55);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(156, 156, 156);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(217, 217, 217);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(156, 156, 156);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(156, 156, 156);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(156, 156, 156);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(156, 156, 156);
  stroke: rgb(156, 156, 156);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(156, 156, 156);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(117, 117, 117);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-width: 1px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 1px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 1px;
  border-top-color: rgb(80, 80, 80);
  border-top-width: 1px;
  color: rgb(156, 156, 156);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(156, 156, 156);
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  color: rgb(156, 156, 156);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(55, 55, 55);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(217, 217, 217);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(217, 217, 217);
  text-decoration: underline dotted rgb(217, 217, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(156, 156, 156);
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  color: rgb(156, 156, 156);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(217, 217, 217);
  font-weight: 300;
}

html[saved-theme="dark"] body sup {
  color: rgb(217, 217, 217);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(215, 215, 215);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(134, 134, 134);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(134, 134, 134) none 0px;
  text-decoration: rgb(134, 134, 134);
  text-decoration-color: rgb(134, 134, 134);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: 2px rgb(138, 92, 245);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: 2px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 2px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
  font-weight: 300;
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 232.312px;
  margin-right: 232.328px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  color: rgb(0, 0, 0);
  font-weight: 300;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 3px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(197, 197, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(197, 197, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(199, 175, 33);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(199, 175, 33);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(199, 175, 33);
  border-left-color: rgb(199, 175, 33);
  border-right-color: rgb(199, 175, 33);
  border-top-color: rgb(199, 175, 33);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(197, 197, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(197, 197, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(134, 134, 134);
  text-decoration: line-through rgb(134, 134, 134);
  text-decoration-color: rgb(134, 134, 134);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(59, 59, 146);
  border-left-color: rgb(59, 59, 146);
  border-right-color: rgb(59, 59, 146);
  border-top-color: rgb(59, 59, 146);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(58, 141, 141, 0.1);
  border-bottom-color: rgba(58, 141, 141, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 141, 141, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(58, 141, 141, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(58, 141, 141, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(169, 57, 57, 0.1);
  border-bottom-color: rgba(169, 57, 57, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(169, 57, 57, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(169, 57, 57, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(169, 57, 57, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(169, 57, 57, 0.1);
  border-bottom-color: rgba(169, 57, 57, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(169, 57, 57, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(169, 57, 57, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(169, 57, 57, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(102, 39, 121, 0.1);
  border-bottom-color: rgba(102, 39, 121, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(102, 39, 121, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(102, 39, 121, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(102, 39, 121, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(169, 57, 57, 0.1);
  border-bottom-color: rgba(169, 57, 57, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(169, 57, 57, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(169, 57, 57, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(169, 57, 57, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(59, 59, 146, 0.1);
  border-bottom-color: rgba(59, 59, 146, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(59, 59, 146, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(59, 59, 146, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(59, 59, 146, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(59, 59, 146, 0.1);
  border-bottom-color: rgba(59, 59, 146, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(59, 59, 146, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(59, 59, 146, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(59, 59, 146, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(180, 106, 15, 0.1);
  border-bottom-color: rgba(180, 106, 15, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(180, 106, 15, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(180, 106, 15, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(180, 106, 15, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(82, 82, 82, 0.1);
  border-bottom-color: rgba(82, 82, 82, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(82, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(82, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(82, 82, 82, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(26, 99, 26, 0.1);
  border-bottom-color: rgba(26, 99, 26, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(26, 99, 26, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(26, 99, 26, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(26, 99, 26, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(58, 141, 141, 0.1);
  border-bottom-color: rgba(58, 141, 141, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 141, 141, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(58, 141, 141, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(58, 141, 141, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(59, 59, 146, 0.1);
  border-bottom-color: rgba(59, 59, 146, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(59, 59, 146, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(59, 59, 146, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(59, 59, 146, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(180, 106, 15, 0.1);
  border-bottom-color: rgba(180, 106, 15, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(180, 106, 15, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(180, 106, 15, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(180, 106, 15, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(197, 197, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
  font-weight: 300;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(215, 215, 215);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html[saved-theme="light"] body h1 {
  color: rgb(231, 231, 231);
  font-family: TT2020StyleE, Courier, monospace, "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgba(59, 59, 146, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(59, 59, 146, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(59, 59, 146, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(59, 59, 146, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(215, 215, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 215, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(215, 215, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 215, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(215, 215, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 215, 215);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(215, 215, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 215, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(215, 215, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 215, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(215, 215, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 215, 215);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(157, 82, 51);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(157, 82, 51);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(157, 82, 51);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(157, 82, 51);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(111, 111, 111);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(111, 111, 111);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(134, 134, 134);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(134, 134, 134);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(215, 215, 215);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(134, 134, 134);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(134, 134, 134);
  text-decoration: rgb(134, 134, 134);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 111, 111);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(111, 111, 111);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
  text-decoration: rgb(111, 111, 111);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(134, 134, 134);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(134, 134, 134);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(134, 134, 134);
  stroke: rgb(134, 134, 134);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(134, 134, 134);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(134, 134, 134);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(170, 170, 170);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(197, 197, 197);
  border-bottom-width: 1px;
  border-left-color: rgb(197, 197, 197);
  border-left-width: 1px;
  border-right-color: rgb(197, 197, 197);
  border-right-width: 1px;
  border-top-color: rgb(197, 197, 197);
  border-top-width: 1px;
  color: rgb(134, 134, 134);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 24px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(134, 134, 134);
  font-family: "??", "Noto Serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(215, 215, 215);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(134, 134, 134);
  font-family: "??", Poppins, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
  font-weight: 300;
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
