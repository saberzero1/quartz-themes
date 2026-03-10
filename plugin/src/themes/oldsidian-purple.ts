import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "oldsidian-purple",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-error: #5C0000 !important;
  --background-modifier-error-hover: #990000 !important;
  --background-primary: #262626ff !important;
  --background-primary-alt: #161616 !important;
  --bases-cards-background: #161616 !important;
  --bases-cards-cover-background: #161616 !important;
  --bases-table-cell-background-active: #262626ff !important;
  --bases-table-cell-background-disabled: #161616 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6C41D8 !important;
  --bases-table-group-background: #161616 !important;
  --bases-table-header-background: #262626ff !important;
  --bases-table-summary-background: #262626ff !important;
  --blockquote-border-color: #6C41D8 !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 1;
  --callout-content-padding: 8px 8px 8px 12px;
  --callout-padding: 0;
  --callout-radius: 5px;
  --callout-title-padding: 8px 8px 8px 12px;
  --canvas-background: #262626ff !important;
  --checkbox-color: #6C41D8 !important;
  --checkbox-marker-color: #262626ff !important;
  --code-background: #161616 !important;
  --code-normal: #FB463B !important;
  --collapse-icon-color-collapsed: #814CFF !important;
  --divider-color-hover: #6C41D8 !important;
  --embed-border-start: 2px solid #6C41D8 !important;
  --file-header-background: #262626ff !important;
  --file-header-background-focused: #262626ff !important;
  --graph-node-focused: #814CFF !important;
  --highlight: #6C41D8 !important;
  --icon-color-active: #814CFF !important;
  --interactive-accent: #6C41D8 !important;
  --light: #262626ff !important;
  --link-color: #814CFF !important;
  --link-external-color: #814CFF !important;
  --link-unresolved-color: #814CFF !important;
  --link-unresolved-decoration-style: #814CFF !important;
  --list-marker-color-collapsed: #814CFF !important;
  --modal-background: #262626ff !important;
  --nav-item-background-active: #6C41D8 !important;
  --nav-item-color-highlighted: #814CFF !important;
  --pdf-background: #262626ff !important;
  --pdf-page-background: #262626ff !important;
  --pdf-sidebar-background: #262626ff !important;
  --pill-color-remove-hover: #814CFF !important;
  --prompt-background: #262626ff !important;
  --ribbon-background-collapsed: #262626ff !important;
  --search-result-background: #262626ff !important;
  --secondary: #814CFF !important;
  --setting-items-background: #161616 !important;
  --suggestion-background: #262626ff !important;
  --tab-background-active: #262626ff !important;
  --tab-min-width: 100px !important;
  --tab-text-color-focused-highlighted: #814CFF !important;
  --table-drag-handle-background-active: #6C41D8 !important;
  --table-selection-border-color: #6C41D8 !important;
  --tag-color: #814CFF !important;
  --tag-color-hover: #814CFF !important;
  --tertiary: #814CFF !important;
  --text-accent: #814CFF !important;
  --text-highlight-bg: #6C41D8 !important;
  --textHighlight: #6C41D8 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
}

html body div#quartz-root {
  background-color: rgb(38, 38, 38);
}`,
    typography: `html body .text-highlight {
  background-color: rgb(108, 65, 216);
}`,
    links: `html body a.external, html footer a {
  color: rgb(129, 76, 255);
  outline: rgb(129, 76, 255) none 0px;
  text-decoration: underline rgb(129, 76, 255);
  text-decoration-color: rgb(129, 76, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 76, 255);
  outline: rgb(129, 76, 255) none 0px;
  text-decoration: underline rgb(129, 76, 255);
  text-decoration-color: rgb(129, 76, 255);
}

html body a.internal.broken {
  color: rgb(129, 76, 255);
  outline: rgb(129, 76, 255) none 0px;
  text-decoration: underline rgb(129, 76, 255);
  text-decoration-color: rgb(129, 76, 255);
}`,
    lists: `html body ol.overflow {
  background-color: rgb(38, 38, 38);
}

html body ul.overflow {
  background-color: rgb(38, 38, 38);
}`,
    tables: `html body .spacer {
  background-color: rgb(22, 22, 22);
}`,
    code: `html body code {
  border-bottom-color: rgb(251, 70, 59);
  border-left-color: rgb(251, 70, 59);
  border-right-color: rgb(251, 70, 59);
  border-top-color: rgb(251, 70, 59);
  color: rgb(251, 70, 59);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 22);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 22);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(22, 22, 22);
}

html body pre:has(> code) {
  background-color: rgb(22, 22, 22);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(22, 22, 22);
}

html body .transclude {
  border-left-color: rgb(108, 65, 216);
}

html body .transclude-inner {
  border-left-color: rgb(108, 65, 216);
}`,
    callouts: `html body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html body .callout > .callout-content {
  background-color: rgb(22, 22, 22);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 4px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="bug"] {
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 4px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="danger"] {
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 4px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="example"] {
  border-bottom-color: rgb(168, 130, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 4px;
  border-right-color: rgb(168, 130, 255);
  border-top-color: rgb(168, 130, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="failure"] {
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 4px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="info"] {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="note"] {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="question"] {
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 4px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="quote"] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="success"] {
  border-bottom-color: rgb(68, 207, 110);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 4px;
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="tip"] {
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 4px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="todo"] {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="warning"] {
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 4px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `html body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
}

html body a.internal.tag-link::before {
  color: rgb(129, 76, 255);
}`,
    scrollbars: `html body .callout {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 4px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html body ::-webkit-scrollbar-track {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}`,
    explorer: `html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(108, 65, 216);
}`,
    misc: `html body kbd {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(251, 70, 59);
  border-left-color: rgb(251, 70, 59);
  border-right-color: rgb(251, 70, 59);
  border-top-color: rgb(251, 70, 59);
  color: rgb(251, 70, 59);
}`,
  },
  light: {},
};
