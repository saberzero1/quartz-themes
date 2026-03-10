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
  --background-modifier-hover: rgba(255, 255, 255, 0.09);
  --background-primary: #161a1d;
  --background-secondary: #0b0d0f;
  --bases-cards-background: #161a1d;
  --bases-table-cell-background-active: #161a1d;
  --bases-table-header-background: #161a1d;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.09);
  --bases-table-summary-background: #161a1d;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.09);
  --canvas-background: #161a1d;
  --checkbox-marker-color: #161a1d;
  --code-background: #0b0d0f;
  --code-bracket-background: rgba(255, 255, 255, 0.09);
  --divider-color: #30363d;
  --file-header-background: #161a1d;
  --file-header-background-focused: #161a1d;
  --footnote-input-background-active: rgba(255, 255, 255, 0.09);
  --highlight: var(--background-modifier-hover);
  --indentation-guide-color: #161a1f;
  --inline-title-size: 3em;
  --inline-title-weight: normal;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --menu-background: #0b0d0f;
  --metadata-input-background-active: rgba(255, 255, 255, 0.09);
  --metadata-label-background-active: rgba(255, 255, 255, 0.09);
  --metadata-property-background-active: rgba(255, 255, 255, 0.09);
  --modal-background: #161a1d;
  --nav-indentation-guide-color: #161a1f;
  --nav-item-background-active: rgb(138, 92, 245);
  --nav-item-background-hover: rgba(255, 255, 255, 0.09);
  --nav-item-color-active: white;
  --pdf-background: #161a1d;
  --pdf-page-background: #161a1d;
  --pdf-sidebar-background: #161a1d;
  --prompt-background: #161a1d;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #161a1d;
  --search-result-background: #161a1d;
  --status-bar-background: #0b0d0f;
  --status-bar-border-color: #30363d;
  --suggestion-background: #161a1d;
  --tab-background-active: #161a1d;
  --tab-container-background: #0b0d0f;
  --tab-outline-color: #30363d;
  --tab-switcher-background: #0b0d0f;
  --tab-switcher-menubar-background: linear-gradient(to top, #0b0d0f, transparent);
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #0b0d0f;
  --titlebar-background-focused: #0b0d0f;
  --quartz-icon-color: currentColor;
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
  --nav-item-background-active: rgb(153, 115, 247);
  --nav-item-color-active: white;
  --quartz-icon-color: currentColor;
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
