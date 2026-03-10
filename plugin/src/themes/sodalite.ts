import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "sodalite", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --callout-padding: 18px;
  --callout-radius: 0;
  --file-header-justify: left !important;
  --file-line-width: 100% !important;
  --sdlt-accent: #8BA4CC !important;
  --sdlt-accent-muted: #304F80 !important;
  --sdlt-accent-muted-selection: rgba(48, 79, 128, 0.99) !important;
  --sdlt-accent-muted-transparent: rgba(48, 79, 128, 0.3) !important;
  --sdlt-base-bg-end: #1B2020 !important;
  --sdlt-base-bg-start: #202028 !important;
  --sdlt-border: #1A1F28 !important;
  --sdlt-content-bg-end: #212223 !important;
  --sdlt-content-bg-end-transparent: rgba(33, 34, 35, 0.3) !important;
  --sdlt-content-bg-start: #222832 !important;
  --sdlt-content-bg-start-transparent: rgba(34, 40, 50, 0.3) !important;
  --sdlt-gradient-base: linear-gradient(135deg, #202028, #1B2020) !important;
  --sdlt-gradient-content: linear-gradient(135deg, #222832, #212223) !important;
  --sdlt-gradient-subtle: linear-gradient(160deg, transparent, rgba(255, 255, 255, 0.02)) !important;
  --sdlt-graph-line: #404050 !important;
  --sdlt-graph-line-highlight: #507090 !important;
  --sdlt-header-height: 48px !important;
  --sdlt-markdown-header-height: 56px !important;
  --sdlt-overlay-bg: rgba(255, 255, 255, 0.05) !important;
  --sdlt-overlay-border: rgba(255, 255, 255, 0.08) !important;
  --sdlt-ribbon-width: 48px !important;
  --sdlt-search-border: #404040 !important;
  --sdlt-shadow-active: 0 0 3px 1px rgba(0, 0, 0, 0.5) !important;
  --sdlt-tag-indicator: #caca00 !important;
  --sdlt-text-faint: #909090 !important;
  --sdlt-text-muted: #cacaca !important;
  --sdlt-text-on-accent: #000000 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
}

html body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
}`,
    lists: `html body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

html body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 18px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 18px;
}

html body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.08);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.08);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.08);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.08);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    footer: `html body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-width: 0px;
}`,
    misc: `html body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html body .page-header h2.page-title {
  font-family: "Futura Md BT", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
  },
  light: {},
};
