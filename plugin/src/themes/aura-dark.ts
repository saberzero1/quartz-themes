import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "aura-dark", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #61ffca;
  --background-primary: #15141b;
  --background-secondary: #110f18;
  --background-secondary-alt: #61ffca;
  --bases-cards-background: #15141b;
  --bases-cards-shadow: 0 0 0 1px #61ffca;
  --bases-embed-border-color: #61ffca;
  --bases-table-border-color: #61ffca;
  --bases-table-cell-background-active: #15141b;
  --bases-table-header-background: #15141b;
  --bases-table-summary-background: #15141b;
  --blur-background: color-mix(in srgb, #61ffca 65%, transparent) linear-gradient(#61ffca, color-mix(in srgb, #61ffca 65%, transparent));
  --canvas-background: #15141b;
  --canvas-dot-pattern: #61ffca;
  --checkbox-marker-color: #15141b;
  --code-background: #110f18;
  --code-border-color: #61ffca;
  --color-base-30: #61ffca;
  --divider-color: #61ffca;
  --dropdown-background: #61ffca;
  --embed-block-shadow-hover: 0 0 0 1px #61ffca, inset 0 0 0 1px #61ffca;
  --file-header-background: #15141b;
  --file-header-background-focused: #15141b;
  --flair-background: #61ffca;
  --footnote-divider-color: #61ffca;
  --hr-color: #61ffca;
  --indentation-guide-color: #edecee;
  --interactive-normal: #61ffca;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --menu-background: #110f18;
  --metadata-border-color: #61ffca;
  --metadata-divider-color: #61ffca;
  --modal-background: #15141b;
  --nav-indentation-guide-color: #edecee;
  --pdf-background: #15141b;
  --pdf-page-background: #15141b;
  --pdf-shadow: 0 0 0 1px #61ffca;
  --pdf-sidebar-background: #15141b;
  --pdf-thumbnail-shadow: 0 0 0 1px #61ffca;
  --pill-border-color: #61ffca;
  --prompt-background: #15141b;
  --raised-background: color-mix(in srgb, #61ffca 65%, transparent) linear-gradient(#61ffca, color-mix(in srgb, #61ffca 65%, transparent));
  --ribbon-background: #15141b;
  --ribbon-background-collapsed: #15141b;
  --search-result-background: #15141b;
  --setting-items-border-color: #61ffca;
  --slider-track-background: #61ffca;
  --status-bar-background: #110f18;
  --status-bar-border-color: #61ffca;
  --suggestion-background: #15141b;
  --tab-background-active: #15141b;
  --tab-container-background: #110f18;
  --tab-outline-color: #61ffca;
  --tab-switcher-background: #110f18;
  --tab-switcher-menubar-background: linear-gradient(to top, #110f18, transparent);
  --table-add-button-border-color: #61ffca;
  --table-border-color: #61ffca;
  --table-header-border-color: #61ffca;
  --titlebar-background: #110f18;
  --titlebar-background-focused: #110f18;
  --titlebar-border-color: #61ffca;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 15, 24);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(21, 20, 27);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 15, 24);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(97, 255, 202);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 15, 24);
  border-left-color: rgb(97, 255, 202);
}

body div#quartz-root {
  background-color: rgb(21, 20, 27);
}`,
    lists: `body ol.overflow {
  background-color: rgb(21, 20, 27);
}

body ul.overflow {
  background-color: rgb(21, 20, 27);
}`,
    tables: `body td {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

body th {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

body pre > code, pre:has(> code) {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

body pre:has(> code) {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

body .search > .search-container > .search-space {
  background-color: rgb(21, 20, 27);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 15, 24);
}

body hr {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(162, 119, 255);
  border-left-color: rgb(162, 119, 255);
  border-right-color: rgb(162, 119, 255);
  border-top-color: rgb(162, 119, 255);
  color: rgb(162, 119, 255);
}`,
    footer: `body footer {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

body .navigation-progress {
  background-color: rgb(17, 15, 24);
}

body kbd {
  background-color: rgb(17, 15, 24);
}`,
  },
  light: {},
};
