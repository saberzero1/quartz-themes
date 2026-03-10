import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "proper-dark",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-hover: rgba(255, 255, 255, 0.09) !important;
  --background-primary: #161a1d !important;
  --background-secondary: #0b0d0f !important;
  --bases-cards-background: #161a1d !important;
  --bases-table-cell-background-active: #161a1d !important;
  --bases-table-header-background: #161a1d !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.09) !important;
  --bases-table-summary-background: #161a1d !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.09) !important;
  --canvas-background: #161a1d !important;
  --checkbox-marker-color: #161a1d !important;
  --code-background: #0b0d0f !important;
  --code-bracket-background: rgba(255, 255, 255, 0.09) !important;
  --divider-color: #30363d !important;
  --file-header-background: #161a1d !important;
  --file-header-background-focused: #161a1d !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.09) !important;
  --highlight: rgba(255, 255, 255, 0.09) !important;
  --indentation-guide-color: #161a1f !important;
  --inline-title-size: 3em !important;
  --inline-title-weight: normal !important;
  --light: #161a1d !important;
  --lightgray: #0b0d0f !important;
  --menu-background: #0b0d0f !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.09) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.09) !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.09) !important;
  --modal-background: #161a1d !important;
  --nav-indentation-guide-color: #161a1f !important;
  --nav-item-background-active: rgb(138, 92, 245) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.09) !important;
  --nav-item-color-active: white !important;
  --pdf-background: #161a1d !important;
  --pdf-page-background: #161a1d !important;
  --pdf-sidebar-background: #161a1d !important;
  --prompt-background: #161a1d !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #161a1d !important;
  --search-result-background: #161a1d !important;
  --status-bar-background: #0b0d0f !important;
  --status-bar-border-color: #30363d !important;
  --suggestion-background: #161a1d !important;
  --tab-background-active: #161a1d !important;
  --tab-container-background: #0b0d0f !important;
  --tab-outline-color: #30363d !important;
  --tab-switcher-background: #0b0d0f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0b0d0f, transparent) !important;
  --textHighlight: rgba(255, 255, 255, 0.09) !important;
  --titlebar-background: #0b0d0f !important;
  --titlebar-background-focused: #0b0d0f !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 13, 15);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 26, 29);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(11, 13, 15);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 54, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 13, 15);
  border-left-color: rgb(48, 54, 61);
}

body div#quartz-root {
  background-color: rgb(22, 26, 29);
}`,
    lists: `body ol.overflow {
  background-color: rgb(22, 26, 29);
}

body ul.overflow {
  background-color: rgb(22, 26, 29);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(11, 13, 15);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(11, 13, 15);
}

body pre > code, pre:has(> code) {
  background-color: rgb(11, 13, 15);
}

body pre:has(> code) {
  background-color: rgb(11, 13, 15);
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(11, 13, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.09);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(11, 13, 15);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.09);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.09);
}

body hr {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(22, 26, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 26, 29);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 26, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 26, 29);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 26, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 26, 29);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 26, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 26, 29);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 26, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 26, 29);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 26, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 26, 29);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(11, 13, 15);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(11, 13, 15);
}

body kbd {
  background-color: rgb(11, 13, 15);
}`,
  },
  light: {
    base: `:root:root {
  --nav-item-background-active: rgb(153, 115, 247) !important;
  --nav-item-color-active: white !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 246);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(152, 115, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
  },
};
