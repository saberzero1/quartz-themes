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
  --bases-group-heading-property-size: 11px !important;
  --blockquote-background-color: #242424 !important;
  --bodyFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --codeFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --color-base-23: #323232 !important;
  --default-border-radius: 3px !important;
  --divider-color: #323232 !important;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --file-header-font-size: 12px !important;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono !important;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-serif: Times, Georgia, "Times New Roman", serif !important;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-paragraph: .87rem !important;
  --font-smallest: 0.7rem !important;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-ui-large: 17px !important;
  --font-ui-medium: 13px !important;
  --font-ui-small: 12px !important;
  --font-ui-smaller: 11px !important;
  --frontmatter-font-size: .65rem !important;
  --h2-margin-bottom: .6rem !important;
  --h2-margin-top: 3rem !important;
  --h3-margin-bottom: .6rem !important;
  --h3-margin-top: 3rem !important;
  --h4-margin-bottom: .6rem !important;
  --h4-margin-top: 3rem !important;
  --h5-margin-bottom: .6rem !important;
  --h5-margin-top: 3rem !important;
  --h6-margin-bottom: .6rem !important;
  --h6-margin-top: 3rem !important;
  --headerFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --hr-thickness: 1px !important;
  --list-spacing: 5px !important;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --metadata-input-font-size: .75rem !important;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --metadata-label-font-size: .75rem !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-max-width: 900px !important;
  --modal-radius: 5px !important;
  --nav-item-size: 12px !important;
  --order-content: 3 !important;
  --order-embedded-backlinks: 4 !important;
  --order-inline-title: 2 !important;
  --order-properties-metadata: 1 !important;
  --setting-group-heading-size: 13px !important;
  --size-h1: 1.65rem !important;
  --size-h2: 1.45rem !important;
  --size-h3: 1.3rem !important;
  --size-h4: 1.15rem !important;
  --size-h5: 1rem !important;
  --size-h6: .87rem !important;
  --status-bar-border-color: #323232 !important;
  --status-bar-font-size: 11px !important;
  --tab-font-size: .7rem !important;
  --tab-outline-color: #323232 !important;
  --tab-radius-active: 3px !important;
  --tab-stacked-font-size: 12px !important;
  --tag-size: .75rem !important;
  --titleFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --vault-profile-font-size: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  --bases-group-heading-property-size: 11px !important;
  --blockquote-background-color: #fafafa !important;
  --bodyFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --codeFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --color-base-23: #eee !important;
  --default-border-radius: 3px !important;
  --divider-color: #eee !important;
  --file-header-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --file-header-font-size: 12px !important;
  --font-default: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-iawriter-quattro: "iaWriterQuattro", mono !important;
  --font-family-ibm: "IBMRegular", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-inter: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-family-serif: Times, Georgia, "Times New Roman", serif !important;
  --font-interface: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-mermaid: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-paragraph: .87rem !important;
  --font-smallest: 0.7rem !important;
  --font-text: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --font-ui-large: 17px !important;
  --font-ui-medium: 13px !important;
  --font-ui-small: 12px !important;
  --font-ui-smaller: 11px !important;
  --frontmatter-font-size: .65rem !important;
  --h2-margin-bottom: .6rem !important;
  --h2-margin-top: 3rem !important;
  --h3-margin-bottom: .6rem !important;
  --h3-margin-top: 3rem !important;
  --h4-margin-bottom: .6rem !important;
  --h4-margin-top: 3rem !important;
  --h5-margin-bottom: .6rem !important;
  --h5-margin-top: 3rem !important;
  --h6-margin-bottom: .6rem !important;
  --h6-margin-top: 3rem !important;
  --headerFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --hr-thickness: 1px !important;
  --list-spacing: 5px !important;
  --metadata-input-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --metadata-input-font-size: .75rem !important;
  --metadata-label-font: '??', '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --metadata-label-font-size: .75rem !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-max-width: 900px !important;
  --modal-radius: 5px !important;
  --nav-item-size: 12px !important;
  --order-content: 3 !important;
  --order-embedded-backlinks: 4 !important;
  --order-inline-title: 2 !important;
  --order-properties-metadata: 1 !important;
  --setting-group-heading-size: 13px !important;
  --size-h1: 1.65rem !important;
  --size-h2: 1.45rem !important;
  --size-h3: 1.3rem !important;
  --size-h4: 1.15rem !important;
  --size-h5: 1rem !important;
  --size-h6: .87rem !important;
  --status-bar-border-color: #eee !important;
  --status-bar-font-size: 11px !important;
  --tab-font-size: .7rem !important;
  --tab-outline-color: #eee !important;
  --tab-radius-active: 3px !important;
  --tab-stacked-font-size: 12px !important;
  --tag-size: .75rem !important;
  --titleFont: '??', '??', "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --vault-profile-font-size: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
