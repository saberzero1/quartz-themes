import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "transient", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #191926 !important;
  --background-modifier-border-focus: #151520 !important;
  --background-primary: transparent !important;
  --background-secondary: transparent !important;
  --background-secondary-alt: #191926 !important;
  --bases-cards-background: transparent !important;
  --bases-cards-shadow: 0 0 0 1px #191926 !important;
  --bases-embed-border-color: #191926 !important;
  --bases-table-border-color: #191926 !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #151520 !important;
  --bases-table-header-background: transparent !important;
  --bases-table-summary-background: transparent !important;
  --blur-background: color-mix(in srgb, #191926 65%, transparent) linear-gradient(#191926, color-mix(in srgb, #191926 65%, transparent)) !important;
  --canvas-background: transparent !important;
  --canvas-dot-pattern: #191926 !important;
  --checkbox-marker-color: transparent !important;
  --code-background: #22223333 !important;
  --code-border-color: #191926 !important;
  --color-base-00: #0c0c11ee !important;
  --color-base-30: #191926 !important;
  --color-base-40: #151520 !important;
  --divider-color: #191926 !important;
  --dropdown-background: #191926 !important;
  --embed-block-shadow-hover: 0 0 0 1px #191926, inset 0 0 0 1px #191926 !important;
  --file-header-background: transparent !important;
  --file-header-background-focused: transparent !important;
  --flair-background: #191926 !important;
  --footnote-divider-color: #191926 !important;
  --hr-color: #191926 !important;
  --interactive-normal: #191926 !important;
  --light: transparent !important;
  --lightgray: transparent !important;
  --menu-background: transparent !important;
  --metadata-border-color: #191926 !important;
  --metadata-divider-color: #191926 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #151520 !important;
  --modal-background: #0c0c11ee !important;
  --modal-border-color: #151520 !important;
  --pdf-background: transparent !important;
  --pdf-page-background: transparent !important;
  --pdf-shadow: 0 0 0 1px #191926 !important;
  --pdf-sidebar-background: transparent !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #191926 !important;
  --pill-border-color: #191926 !important;
  --prompt-background: transparent !important;
  --prompt-border-color: #151520 !important;
  --raised-background: color-mix(in srgb, #191926 65%, transparent) linear-gradient(#191926, color-mix(in srgb, #191926 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --search-result-background: transparent !important;
  --setting-items-border-color: #191926 !important;
  --slider-track-background: #191926 !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: #191926 !important;
  --suggestion-background: transparent !important;
  --tab-background-active: transparent !important;
  --tab-container-background: transparent !important;
  --tab-outline-color: #191926 !important;
  --tab-switcher-background: transparent !important;
  --tab-switcher-menubar-background: linear-gradient(to top, transparent, transparent) !important;
  --table-add-button-border-color: #191926 !important;
  --table-border-color: #191926 !important;
  --table-header-border-color: #191926 !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: #191926 !important;
  --titlebar-border-color: #191926 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

html body .bases-table thead th {
  border-color: rgb(25, 25, 38);
}

html body .canvas-sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html body .note-properties {
  border-color: rgb(25, 25, 38);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(25, 25, 38);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(25, 25, 38);
}

html body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
}`,
    tables: `html body td {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body th {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    code: `html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body pre:has(> code) {
  background-color: rgba(34, 34, 51, 0.2);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body .search > .search-container > .search-space {
  background-color: rgba(12, 12, 17, 0.933);
  border-bottom-color: rgb(21, 21, 32);
  border-left-color: rgb(21, 21, 32);
  border-right-color: rgb(21, 21, 32);
  border-top-color: rgb(21, 21, 32);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(21, 21, 32);
  border-left-color: rgb(21, 21, 32);
  border-right-color: rgb(21, 21, 32);
  border-top-color: rgb(21, 21, 32);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
}

html body hr {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    footer: `html body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}`,
    misc: `html body .metadata {
  border-bottom-color: rgb(25, 25, 38);
  border-left-color: rgb(25, 25, 38);
  border-right-color: rgb(25, 25, 38);
  border-top-color: rgb(25, 25, 38);
}

html body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html body kbd {
  background-color: rgba(34, 34, 51, 0.2);
}`,
  },
  light: {},
};
