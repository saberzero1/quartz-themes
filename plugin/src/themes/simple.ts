import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "simple",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-quattro", "fira-code", "ibm-plex-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --bases-group-heading-property-size: 11px;
  --blockquote-background-color: #242424;
  --color-base-23: #323232;
  --default-border-radius: 3px;
  --divider-color: #323232;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --file-header-font-size: 12px;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-serif: Times, Georgia, "Times New Roman", serif;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-paragraph: .87rem;
  --font-smallest: 0.7rem;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-ui-large: 17px;
  --font-ui-medium: 13px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --frontmatter-font-size: .65rem;
  --h2-margin-bottom: .6rem;
  --h2-margin-top: 3rem;
  --h3-margin-bottom: .6rem;
  --h3-margin-top: 3rem;
  --h4-margin-bottom: .6rem;
  --h4-margin-top: 3rem;
  --h5-margin-bottom: .6rem;
  --h5-margin-top: 3rem;
  --h6-margin-bottom: .6rem;
  --h6-margin-top: 3rem;
  --hr-thickness: 1px;
  --list-spacing: 5px;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --metadata-input-font-size: .75rem;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --metadata-label-font-size: .75rem;
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 12px;
  --modal-max-width: 900px;
  --modal-radius: 5px;
  --nav-item-size: 12px;
  --order-content: 3;
  --order-embedded-backlinks: 4;
  --order-inline-title: 2;
  --order-properties-metadata: 1;
  --setting-group-heading-size: 13px;
  --size-h1: 1.65rem;
  --size-h2: 1.45rem;
  --size-h3: 1.3rem;
  --size-h4: 1.15rem;
  --size-h5: 1rem;
  --size-h6: .87rem;
  --status-bar-border-color: #323232;
  --status-bar-font-size: 11px;
  --tab-font-size: .7rem;
  --tab-outline-color: #323232;
  --tab-radius-active: 3px;
  --tab-stacked-font-size: 12px;
  --tag-size: .75rem;
  --vault-profile-font-size: 12px;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 50, 50);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(50, 50, 50);
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
  font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.broken {
  font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    blockquotes: `body blockquote {
  background-color: rgb(36, 36, 36);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 24px;
  padding-top: 24px;
}`,
    tables: `body table {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 194.844px;
}`,
    images: `body figcaption {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body img {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body video {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
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
    search: `body .search > .search-button {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h1 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h3 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h4 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h5 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h6 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
}

body .explorer .explorer-content ul.explorer-ul li a {
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  cursor: pointer;
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    footer: `body footer {
  border-bottom-color: rgb(50, 50, 50);
  border-left-color: rgb(50, 50, 50);
  border-right-color: rgb(50, 50, 50);
  border-top-color: rgb(50, 50, 50);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .metadata-properties {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .page-header h2.page-title {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body input[type=text] {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body kbd {
  font-size: 12.18px;
  padding-bottom: 1.218px;
  padding-left: 3.045px;
  padding-right: 3.045px;
  padding-top: 1.218px;
}

body progress {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body sub {
  font-size: 11.6px;
}

body sup {
  font-size: 11.6px;
}`,
  },
  light: {
    base: `:root:root {
  --bases-group-heading-property-size: 11px;
  --blockquote-background-color: #fafafa;
  --color-base-23: #eee;
  --default-border-radius: 3px;
  --divider-color: #eee;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --file-header-font-size: 12px;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-family-serif: Times, Georgia, "Times New Roman", serif;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-paragraph: .87rem;
  --font-smallest: 0.7rem;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-ui-large: 17px;
  --font-ui-medium: 13px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --frontmatter-font-size: .65rem;
  --h2-margin-bottom: .6rem;
  --h2-margin-top: 3rem;
  --h3-margin-bottom: .6rem;
  --h3-margin-top: 3rem;
  --h4-margin-bottom: .6rem;
  --h4-margin-top: 3rem;
  --h5-margin-bottom: .6rem;
  --h5-margin-top: 3rem;
  --h6-margin-bottom: .6rem;
  --h6-margin-top: 3rem;
  --hr-thickness: 1px;
  --list-spacing: 5px;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --metadata-input-font-size: .75rem;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --metadata-label-font-size: .75rem;
  --metadata-sidebar-input-font-size: 12px;
  --metadata-sidebar-label-font-size: 12px;
  --modal-max-width: 900px;
  --modal-radius: 5px;
  --nav-item-size: 12px;
  --order-content: 3;
  --order-embedded-backlinks: 4;
  --order-inline-title: 2;
  --order-properties-metadata: 1;
  --setting-group-heading-size: 13px;
  --size-h1: 1.65rem;
  --size-h2: 1.45rem;
  --size-h3: 1.3rem;
  --size-h4: 1.15rem;
  --size-h5: 1rem;
  --size-h6: .87rem;
  --status-bar-border-color: #eee;
  --status-bar-font-size: 11px;
  --tab-font-size: .7rem;
  --tab-outline-color: #eee;
  --tab-radius-active: 3px;
  --tab-stacked-font-size: 12px;
  --tag-size: .75rem;
  --vault-profile-font-size: 12px;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(238, 238, 238);
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
  font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.broken {
  font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    blockquotes: `body blockquote {
  background-color: rgb(250, 250, 250);
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 24px;
  padding-top: 24px;
}`,
    tables: `body table {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 194.844px;
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
    search: `body .search > .search-button {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h1 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h3 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h4 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h5 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h6 {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
}

body .explorer .explorer-content ul.explorer-ul li a {
  cursor: pointer;
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  cursor: pointer;
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    footer: `body footer {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .metadata-properties {
  font-family: "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body .page-header h2.page-title {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body input[type=text] {
  font-family: "??", "??", "??", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body kbd {
  font-size: 12.18px;
  padding-bottom: 1.218px;
  padding-left: 3.045px;
  padding-right: 3.045px;
  padding-top: 1.218px;
}

body sub {
  font-size: 11.6px;
}

body sup {
  font-size: 11.6px;
}`,
  },
};
