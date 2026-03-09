import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "sodalite", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --callout-padding: 18px;
  --callout-radius: 0;
  --file-header-justify: left;
  --file-line-width: 100%;
  --sdlt-accent: #8BA4CC;
  --sdlt-accent-muted: #304F80;
  --sdlt-accent-muted-selection: rgba(48, 79, 128, 0.99);
  --sdlt-accent-muted-transparent: rgba(48, 79, 128, 0.3);
  --sdlt-base-bg-end: #1B2020;
  --sdlt-base-bg-start: #202028;
  --sdlt-border: #1A1F28;
  --sdlt-content-bg-end: #212223;
  --sdlt-content-bg-end-transparent: rgba(33, 34, 35, 0.3);
  --sdlt-content-bg-start: #222832;
  --sdlt-content-bg-start-transparent: rgba(34, 40, 50, 0.3);
  --sdlt-gradient-base: linear-gradient(135deg, #202028, #1B2020);
  --sdlt-gradient-content: linear-gradient(135deg, #222832, #212223);
  --sdlt-gradient-subtle: linear-gradient(160deg, transparent, rgba(255, 255, 255, 0.02));
  --sdlt-graph-line: #404050;
  --sdlt-graph-line-highlight: #507090;
  --sdlt-header-height: 48px;
  --sdlt-markdown-header-height: 56px;
  --sdlt-overlay-bg: rgba(255, 255, 255, 0.05);
  --sdlt-overlay-border: rgba(255, 255, 255, 0.08);
  --sdlt-ribbon-width: 48px;
  --sdlt-search-border: #404040;
  --sdlt-shadow-active: 0 0 3px 1px rgba(0, 0, 0, 0.5);
  --sdlt-tag-indicator: #caca00;
  --sdlt-text-faint: #909090;
  --sdlt-text-muted: #cacaca;
  --sdlt-text-on-accent: #000000;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
}`,
    lists: `body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 18px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 18px;
}

body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(32, 32, 40), rgb(27, 32, 32)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-width: 0px;
}`,
    misc: `body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  font-family: "Futura Md BT", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
  },
  light: {},
};
