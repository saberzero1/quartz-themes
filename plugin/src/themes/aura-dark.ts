import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "aura-dark", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #61ffca !important;
  --background-primary: #15141b !important;
  --background-secondary: #110f18 !important;
  --background-secondary-alt: #61ffca !important;
  --bases-cards-background: #15141b !important;
  --bases-cards-shadow: 0 0 0 1px #61ffca !important;
  --bases-embed-border-color: #61ffca !important;
  --bases-table-border-color: #61ffca !important;
  --bases-table-cell-background-active: #15141b !important;
  --bases-table-header-background: #15141b !important;
  --bases-table-summary-background: #15141b !important;
  --blur-background: color-mix(in srgb, #61ffca 65%, transparent) linear-gradient(#61ffca, color-mix(in srgb, #61ffca 65%, transparent)) !important;
  --canvas-background: #15141b !important;
  --canvas-dot-pattern: #61ffca !important;
  --checkbox-marker-color: #15141b !important;
  --code-background: #110f18 !important;
  --code-border-color: #61ffca !important;
  --color-base-30: #61ffca !important;
  --divider-color: #61ffca !important;
  --dropdown-background: #61ffca !important;
  --embed-block-shadow-hover: 0 0 0 1px #61ffca, inset 0 0 0 1px #61ffca !important;
  --file-header-background: #15141b !important;
  --file-header-background-focused: #15141b !important;
  --flair-background: #61ffca !important;
  --footnote-divider-color: #61ffca !important;
  --hr-color: #61ffca !important;
  --indentation-guide-color: #edecee !important;
  --interactive-normal: #61ffca !important;
  --light: #15141b !important;
  --lightgray: #110f18 !important;
  --menu-background: #110f18 !important;
  --metadata-border-color: #61ffca !important;
  --metadata-divider-color: #61ffca !important;
  --modal-background: #15141b !important;
  --nav-indentation-guide-color: #edecee !important;
  --pdf-background: #15141b !important;
  --pdf-page-background: #15141b !important;
  --pdf-shadow: 0 0 0 1px #61ffca !important;
  --pdf-sidebar-background: #15141b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #61ffca !important;
  --pill-border-color: #61ffca !important;
  --prompt-background: #15141b !important;
  --raised-background: color-mix(in srgb, #61ffca 65%, transparent) linear-gradient(#61ffca, color-mix(in srgb, #61ffca 65%, transparent)) !important;
  --ribbon-background: #15141b !important;
  --ribbon-background-collapsed: #15141b !important;
  --search-result-background: #15141b !important;
  --setting-items-border-color: #61ffca !important;
  --slider-track-background: #61ffca !important;
  --status-bar-background: #110f18 !important;
  --status-bar-border-color: #61ffca !important;
  --suggestion-background: #15141b !important;
  --tab-background-active: #15141b !important;
  --tab-container-background: #110f18 !important;
  --tab-outline-color: #61ffca !important;
  --tab-switcher-background: #110f18 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #110f18, transparent) !important;
  --table-add-button-border-color: #61ffca !important;
  --table-border-color: #61ffca !important;
  --table-header-border-color: #61ffca !important;
  --titlebar-background: #110f18 !important;
  --titlebar-background-focused: #110f18 !important;
  --titlebar-border-color: #61ffca !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 15, 24);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(21, 20, 27);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 15, 24);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(97, 255, 202);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 15, 24);
  border-left-color: rgb(97, 255, 202);
}

html body div#quartz-root {
  background-color: rgb(21, 20, 27);
}`,
    tables: `html body td {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body th {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body pre:has(> code) {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body .search > .search-container > .search-space {
  background-color: rgb(21, 20, 27);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 15, 24);
}

html body hr {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}

html body ::-webkit-scrollbar-track {
  background: rgb(21, 20, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(21, 20, 27);
}`,
    explorer: `html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(162, 119, 255);
  border-left-color: rgb(162, 119, 255);
  border-right-color: rgb(162, 119, 255);
  border-top-color: rgb(162, 119, 255);
  color: rgb(162, 119, 255);
}`,
    footer: `html body footer {
  background-color: rgb(17, 15, 24);
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(97, 255, 202);
  border-left-color: rgb(97, 255, 202);
  border-right-color: rgb(97, 255, 202);
  border-top-color: rgb(97, 255, 202);
}

html body .navigation-progress {
  background-color: rgb(17, 15, 24);
}

html body kbd {
  background-color: rgb(17, 15, 24);
}`,
  },
  light: {},
};
