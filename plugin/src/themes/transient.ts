import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "transient", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #191926;
  --background-modifier-border-focus: #151520;
  --background-primary: transparent;
  --background-secondary: transparent;
  --background-secondary-alt: #191926;
  --bases-cards-background: transparent;
  --bases-cards-shadow: 0 0 0 1px #191926;
  --bases-embed-border-color: #191926;
  --bases-table-border-color: #191926;
  --bases-table-cell-background-active: transparent;
  --bases-table-cell-shadow-active: 0 0 0 2px #151520;
  --bases-table-header-background: transparent;
  --bases-table-summary-background: transparent;
  --blur-background: color-mix(in srgb, #191926 65%, transparent) linear-gradient(#191926, color-mix(in srgb, #191926 65%, transparent));
  --canvas-background: transparent;
  --canvas-dot-pattern: #191926;
  --checkbox-marker-color: transparent;
  --code-background: #22223333;
  --code-border-color: #191926;
  --color-base-00: #0c0c11ee;
  --color-base-30: #191926;
  --color-base-40: #151520;
  --divider-color: #191926;
  --dropdown-background: #191926;
  --embed-block-shadow-hover: 0 0 0 1px #191926, inset 0 0 0 1px #191926;
  --file-header-background: transparent;
  --file-header-background-focused: transparent;
  --flair-background: #191926;
  --footnote-divider-color: #191926;
  --hr-color: #191926;
  --interactive-normal: #191926;
  --menu-background: transparent;
  --metadata-border-color: #191926;
  --metadata-divider-color: #191926;
  --metadata-property-box-shadow-focus: 0 0 0 2px #151520;
  --modal-background: #0c0c11ee;
  --modal-border-color: #151520;
  --pdf-background: transparent;
  --pdf-page-background: transparent;
  --pdf-shadow: 0 0 0 1px #191926;
  --pdf-sidebar-background: transparent;
  --pdf-thumbnail-shadow: 0 0 0 1px #191926;
  --pill-border-color: #191926;
  --prompt-background: transparent;
  --prompt-border-color: #151520;
  --raised-background: color-mix(in srgb, #191926 65%, transparent) linear-gradient(#191926, color-mix(in srgb, #191926 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --search-result-background: transparent;
  --setting-items-border-color: #191926;
  --slider-track-background: #191926;
  --status-bar-background: transparent;
  --status-bar-border-color: #191926;
  --suggestion-background: transparent;
  --tab-background-active: transparent;
  --tab-container-background: transparent;
  --tab-outline-color: #191926;
  --tab-switcher-background: transparent;
  --tab-switcher-menubar-background: linear-gradient(to top, transparent, transparent);
  --table-add-button-border-color: #191926;
  --table-border-color: #191926;
  --table-header-border-color: #191926;
  --titlebar-background: transparent;
  --titlebar-background-focused: #191926;
  --titlebar-border-color: #191926;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 25, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(25, 25, 38);
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
    tables: `body td {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

body th {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

body pre > code, pre:has(> code) {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

body pre:has(> code) {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

body .search > .search-container > .search-space {
  background-color: rgba(12, 12, 17, 0.933);
  border-bottom-color: rgb(21, 21, 32);
  border-left-color: rgb(21, 21, 32);
  border-right-color: rgb(21, 21, 32);
  border-top-color: rgb(21, 21, 32);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(21, 21, 32);
  border-left-color: rgb(21, 21, 32);
  border-right-color: rgb(21, 21, 32);
  border-top-color: rgb(21, 21, 32);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
}

body hr {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body kbd {
  background-color: rgba(34, 34, 51, 0.2);
}`,
  },
  light: {},
};
