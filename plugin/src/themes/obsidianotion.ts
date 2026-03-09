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
  --color-base-15: #1f1f1f;
  --color-base-23: #323232;
  --color-ghostwhite-rgb: 248, 248, 255;
  --color-whitesmoke-rgb: 245, 245, 245;
  --content-bgcolor: rgb(25, 25, 25);
  --default-border-color: rgba(255, 255, 255, 0.06);
  --divider-color: #1f1f1f;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-paragraph: .9rem;
  --font-smallest: 0.6rem;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --frontmatter-active-bg: rgba(255, 255, 255, 0.15);
  --frontmatter-active-color: rgba(0, 0, 0, 0.8);
  --frontmatter-atom-background: rgba(255, 255, 255, 0.04);
  --frontmatter-atom-color: rgba(255, 255, 255, 0.4);
  --frontmatter-font-size: .5rem;
  --heading-text-color: #fff;
  --link-hover-color: #fff;
  --link-unresolved-opacity: 0.85;
  --list-indent: .8rem;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --nav-item-active: #FFF;
  --nav-item-background-active: #252525;
  --nav-item-background-hover: #2C2C2C;
  --nav-item-color: #9B9B9B;
  --nav-item-color-hover: #D7D7D7;
  --pill-background: rgba(255, 255, 255, 0.1);
  --scrollbar-background: #272727;
  --scrollbar-color: #484C50;
  --setting-item-description-color: #838383;
  --setting-item-name-color: #D4D4D4;
  --size-h1: 1.5rem;
  --size-h2: 1.275rem;
  --size-h3: 1.25rem;
  --size-h4: .975rem;
  --size-h5: .862rem;
  --size-h6: .75rem;
  --status-bar-border-color: #1f1f1f;
  --tab-container-background2: rgba(0, 0, 0, 0.07);
  --tab-header-active-background: rgb(25, 25, 25);
  --tab-outline-color: #1f1f1f;
  --tab-radius-active: 0;
  --table-cell-fontsize: .85rem;
  --table-head-fontsize: .95rem;
  --tag-1-bgcolor: rgba(255, 214, 170, 0.75);
  --tag-10-bgcolor: rgba(255, 228, 111, 0.75);
  --tag-2-bgcolor: rgba(202, 255, 196, 0.75);
  --tag-3-bgcolor: rgba(255, 173, 174, 0.75);
  --tag-4-bgcolor: rgba(155, 246, 254, 0.75);
  --tag-5-bgcolor: rgba(255, 198, 253, 0.75);
  --tag-6-bgcolor: rgba(160, 197, 252, 0.75);
  --tag-7-bgcolor: rgba(189, 179, 251, 0.75);
  --tag-8-bgcolor: rgba(253, 255, 188, 0.75);
  --tag-9-bgcolor: rgba(228, 228, 228, 0.75);
  --tag-background: rgba(255, 255, 255, 0.1);
  --tag-color: #000;
  --tag-padding: 3px;
  --tag-padding-x: 6px;
  --tag-padding-y: 2px;
  --tag-radius: 5px;
  --tag-size: .75rem;
  --width-body-content: 700px;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(31, 31, 31);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(31, 31, 31);
}`,
    typography: `body .page article p > b, b {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

body .page article p > em, em {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

body .page article p > i, i {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

body .page article p > strong, strong {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

body .text-highlight {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body del {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: rgb(200, 200, 200) none 0px;
  text-decoration: line-through rgb(200, 200, 200);
  text-decoration-color: rgb(200, 200, 200);
}

body p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.broken {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    lists: `body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

body table {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 0px;
  width: 191px;
}`,
    images: `body audio {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

body figcaption {
  color: rgb(200, 200, 200);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

body img {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

body video {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}`,
    embeds: `body .transclude {
  border-bottom-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

body .transclude-inner {
  border-bottom-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `body .callout[data-callout="info"] {
  background-color: rgb(255, 0, 0);
}`,
    search: `body .search > .search-button {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(155, 155, 155);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(155, 155, 155);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(155, 155, 155);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(37, 37, 37);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  cursor: pointer;
}`,
    footer: `body footer {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(155, 155, 155);
  text-decoration: rgb(155, 155, 155);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(155, 155, 155);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(155, 155, 155);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(155, 155, 155);
  text-decoration: rgb(155, 155, 155);
}

body ul.section-ul {
  background-color: rgb(42, 42, 42);
}`,
    darkmode: `body .darkmode {
  cursor: pointer;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}

body .metadata {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 40px;
}

body .metadata-properties {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body abbr {
  color: rgb(200, 200, 200);
  text-decoration: underline dotted rgb(200, 200, 200);
}

body input[type=text] {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body kbd {
  font-size: 12.6px;
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

body progress {
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-top-color: rgb(200, 200, 200);
}

body sub {
  color: rgb(200, 200, 200);
  font-size: 12px;
}

body sup {
  color: rgb(200, 200, 200);
  font-size: 12px;
}`,
  },
  light: {
    base: `:root:root {
  --color-base-15: #f0f0f0;
  --color-base-23: #eee;
  --content-bgcolor: rgb(255, 255, 255);
  --default-border-color: rgba(0, 0, 0, 0.06);
  --divider-color: #f0f0f0;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-color-paragraph: #37352f;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-paragraph: .9rem;
  --font-smallest: 0.6rem;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --frontmatter-active-bg: rgba(0, 0, 0, 0.15);
  --frontmatter-active-color: rgba(0, 0, 0, 0.8);
  --frontmatter-atom-background: rgba(0, 0, 0, 0.05);
  --frontmatter-atom-color: rgba(0, 0, 0, 0.5);
  --frontmatter-font-size: .5rem;
  --heading-text-color: #37352f;
  --link-hover-color: #000;
  --link-unresolved-opacity: 0.85;
  --list-indent: .8rem;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --nav-item-active: #373530;
  --nav-item-background-active: #EDEDEB;
  --nav-item-background-hover: #E8E8E6;
  --nav-item-color: #72716D;
  --nav-item-color-hover: #6C6B67;
  --scrollbar-background: #EDECE9;
  --scrollbar-color: #D3D1CC;
  --setting-item-description-color: #7D7C78;
  --setting-item-name-color: #373530;
  --size-h1: 1.5rem;
  --size-h2: 1.275rem;
  --size-h3: 1.25rem;
  --size-h4: .975rem;
  --size-h5: .862rem;
  --size-h6: .75rem;
  --status-bar-border-color: #f0f0f0;
  --tab-container-background2: rgba(0, 0, 0, 0.07);
  --tab-header-active-background: #fff;
  --tab-outline-color: #f0f0f0;
  --tab-radius-active: 0;
  --table-cell-fontsize: .85rem;
  --table-head-fontsize: .95rem;
  --tag-1-bgcolor: rgb(255, 214, 170);
  --tag-10-bgcolor: rgb(255, 228, 111);
  --tag-2-bgcolor: rgb(202, 255, 196);
  --tag-3-bgcolor: rgb(255, 173, 174);
  --tag-4-bgcolor: rgb(155, 246, 254);
  --tag-5-bgcolor: rgb(255, 198, 253);
  --tag-6-bgcolor: rgb(160, 197, 252);
  --tag-7-bgcolor: rgb(189, 179, 251);
  --tag-8-bgcolor: rgb(253, 255, 188);
  --tag-9-bgcolor: rgb(228, 228, 228);
  --tag-color: #000;
  --tag-padding: 3px;
  --tag-padding-x: 6px;
  --tag-padding-y: 2px;
  --tag-radius: 5px;
  --tag-size: .75rem;
  --width-body-content: 700px;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(240, 240, 240);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(240, 240, 240);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .page article p > em, em {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .page article p > i, i {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .text-highlight {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body del {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.broken {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    lists: `body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    tables: `body table {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 0px;
  width: 191px;
}`,
    images: `body figcaption {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    callouts: `body .callout[data-callout="info"] {
  background-color: rgb(255, 0, 0);
}`,
    search: `body .search > .search-button {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 0, 0);
}

body h1 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h3 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(55, 53, 47);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(114, 113, 109);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(114, 113, 109);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(114, 113, 109);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(114, 113, 109);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(114, 113, 109);
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: rgb(114, 113, 109);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(237, 237, 235);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  cursor: pointer;
}`,
    footer: `body footer {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-top-color: rgb(240, 240, 240);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(114, 113, 109);
  text-decoration: rgb(114, 113, 109);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(114, 113, 109);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(114, 113, 109);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(114, 113, 109);
  text-decoration: rgb(114, 113, 109);
}

body ul.section-ul {
  background-color: rgb(250, 250, 250);
}`,
    darkmode: `body .darkmode {
  cursor: pointer;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 40px;
}

body .metadata-properties {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body input[type=text] {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body kbd {
  font-size: 12.6px;
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

body sub {
  font-size: 12px;
}

body sup {
  font-size: 12px;
}`,
  },
};
