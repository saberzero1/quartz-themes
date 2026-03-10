import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "obsidianotion",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["fira-code", "ia-writer-quattro", "ibm-plex-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --bodyFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --codeFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --color-base-15: #1f1f1f !important;
  --color-base-23: #323232 !important;
  --color-ghostwhite-rgb: 248, 248, 255 !important;
  --color-whitesmoke-rgb: 245, 245, 245 !important;
  --content-bgcolor: rgb(25, 25, 25) !important;
  --default-border-color: rgba(255, 255, 255, 0.06) !important;
  --divider-color: #1f1f1f !important;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono !important;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-paragraph: .9rem !important;
  --font-smallest: 0.6rem !important;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --frontmatter-active-bg: rgba(255, 255, 255, 0.15) !important;
  --frontmatter-active-color: rgba(0, 0, 0, 0.8) !important;
  --frontmatter-atom-background: rgba(255, 255, 255, 0.04) !important;
  --frontmatter-atom-color: rgba(255, 255, 255, 0.4) !important;
  --frontmatter-font-size: .5rem !important;
  --headerFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --heading-text-color: #fff !important;
  --link-hover-color: #fff !important;
  --link-unresolved-opacity: 0.85 !important;
  --list-indent: .8rem !important;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --nav-item-active: #FFF !important;
  --nav-item-background-active: #252525 !important;
  --nav-item-background-hover: #2C2C2C !important;
  --nav-item-color: #9B9B9B !important;
  --nav-item-color-hover: #D7D7D7 !important;
  --pill-background: rgba(255, 255, 255, 0.1) !important;
  --scrollbar-background: #272727 !important;
  --scrollbar-color: #484C50 !important;
  --setting-item-description-color: #838383 !important;
  --setting-item-name-color: #D4D4D4 !important;
  --size-h1: 1.5rem !important;
  --size-h2: 1.275rem !important;
  --size-h3: 1.25rem !important;
  --size-h4: .975rem !important;
  --size-h5: .862rem !important;
  --size-h6: .75rem !important;
  --status-bar-border-color: #1f1f1f !important;
  --tab-container-background2: rgba(0, 0, 0, 0.07) !important;
  --tab-header-active-background: rgb(25, 25, 25) !important;
  --tab-outline-color: #1f1f1f !important;
  --tab-radius-active: 0 !important;
  --table-cell-fontsize: .85rem !important;
  --table-head-fontsize: .95rem !important;
  --tag-1-bgcolor: rgba(255, 214, 170, 0.75) !important;
  --tag-10-bgcolor: rgba(255, 228, 111, 0.75) !important;
  --tag-2-bgcolor: rgba(202, 255, 196, 0.75) !important;
  --tag-3-bgcolor: rgba(255, 173, 174, 0.75) !important;
  --tag-4-bgcolor: rgba(155, 246, 254, 0.75) !important;
  --tag-5-bgcolor: rgba(255, 198, 253, 0.75) !important;
  --tag-6-bgcolor: rgba(160, 197, 252, 0.75) !important;
  --tag-7-bgcolor: rgba(189, 179, 251, 0.75) !important;
  --tag-8-bgcolor: rgba(253, 255, 188, 0.75) !important;
  --tag-9-bgcolor: rgba(228, 228, 228, 0.75) !important;
  --tag-background: rgba(255, 255, 255, 0.1) !important;
  --tag-color: #000 !important;
  --tag-padding: 3px !important;
  --tag-padding-x: 6px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 5px !important;
  --tag-size: .75rem !important;
  --titleFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --width-body-content: 700px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(31, 31, 31);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(31, 31, 31);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body del {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: line-through rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    lists: `html[saved-theme="dark"] body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body table {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 0px;
  width: 191px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgb(255, 0, 0);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(155, 155, 155);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(155, 155, 155);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(155, 155, 155);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(37, 37, 37);
  cursor: pointer;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(155, 155, 155);
  text-decoration: rgb(155, 155, 155);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(155, 155, 155);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(155, 155, 155);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(155, 155, 155);
  text-decoration: rgb(155, 155, 155);
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(42, 42, 42);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  cursor: pointer;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body .metadata {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 40px;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(200, 200, 200);
  text-decoration: underline dotted rgb(200, 200, 200);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body kbd {
  font-size: 12.6px;
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

html[saved-theme="dark"] body sub {
  color: rgb(200, 200, 200);
  font-size: 12px;
}

html[saved-theme="dark"] body sup {
  color: rgb(200, 200, 200);
  font-size: 12px;
}`,
  },
  light: {
    base: `:root:root {
  --bodyFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --codeFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --color-base-15: #f0f0f0 !important;
  --color-base-23: #eee !important;
  --content-bgcolor: rgb(255, 255, 255) !important;
  --default-border-color: rgba(0, 0, 0, 0.06) !important;
  --divider-color: #f0f0f0 !important;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-color-paragraph: #37352f !important;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono !important;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-paragraph: .9rem !important;
  --font-smallest: 0.6rem !important;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --frontmatter-active-bg: rgba(0, 0, 0, 0.15) !important;
  --frontmatter-active-color: rgba(0, 0, 0, 0.8) !important;
  --frontmatter-atom-background: rgba(0, 0, 0, 0.05) !important;
  --frontmatter-atom-color: rgba(0, 0, 0, 0.5) !important;
  --frontmatter-font-size: .5rem !important;
  --headerFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --heading-text-color: #37352f !important;
  --link-hover-color: #000 !important;
  --link-unresolved-opacity: 0.85 !important;
  --list-indent: .8rem !important;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --nav-item-active: #373530 !important;
  --nav-item-background-active: #EDEDEB !important;
  --nav-item-background-hover: #E8E8E6 !important;
  --nav-item-color: #72716D !important;
  --nav-item-color-hover: #6C6B67 !important;
  --scrollbar-background: #EDECE9 !important;
  --scrollbar-color: #D3D1CC !important;
  --setting-item-description-color: #7D7C78 !important;
  --setting-item-name-color: #373530 !important;
  --size-h1: 1.5rem !important;
  --size-h2: 1.275rem !important;
  --size-h3: 1.25rem !important;
  --size-h4: .975rem !important;
  --size-h5: .862rem !important;
  --size-h6: .75rem !important;
  --status-bar-border-color: #f0f0f0 !important;
  --tab-container-background2: rgba(0, 0, 0, 0.07) !important;
  --tab-header-active-background: #fff !important;
  --tab-outline-color: #f0f0f0 !important;
  --tab-radius-active: 0 !important;
  --table-cell-fontsize: .85rem !important;
  --table-head-fontsize: .95rem !important;
  --tag-1-bgcolor: rgb(255, 214, 170) !important;
  --tag-10-bgcolor: rgb(255, 228, 111) !important;
  --tag-2-bgcolor: rgb(202, 255, 196) !important;
  --tag-3-bgcolor: rgb(255, 173, 174) !important;
  --tag-4-bgcolor: rgb(155, 246, 254) !important;
  --tag-5-bgcolor: rgb(255, 198, 253) !important;
  --tag-6-bgcolor: rgb(160, 197, 252) !important;
  --tag-7-bgcolor: rgb(189, 179, 251) !important;
  --tag-8-bgcolor: rgb(253, 255, 188) !important;
  --tag-9-bgcolor: rgb(228, 228, 228) !important;
  --tag-color: #000 !important;
  --tag-padding: 3px !important;
  --tag-padding-x: 6px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 5px !important;
  --tag-size: .75rem !important;
  --titleFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --width-body-content: 700px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(240, 240, 240);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    lists: `html[saved-theme="light"] body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 0px;
  width: 191px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgb(255, 0, 0);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(114, 113, 109);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(114, 113, 109);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(114, 113, 109);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(114, 113, 109);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(114, 113, 109);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(114, 113, 109);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(237, 237, 235);
  cursor: pointer;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(114, 113, 109);
  text-decoration: rgb(114, 113, 109);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(114, 113, 109);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(114, 113, 109);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(114, 113, 109);
  text-decoration: rgb(114, 113, 109);
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(250, 250, 250);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  cursor: pointer;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 40px;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body kbd {
  font-size: 12.6px;
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

html[saved-theme="light"] body sub {
  font-size: 12px;
}

html[saved-theme="light"] body sup {
  font-size: 12px;
}`,
  },
};
