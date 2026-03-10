import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "black", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #000 !important;
  --background-secondary: #000 !important;
  --bases-cards-background: #000 !important;
  --bases-table-cell-background-active: #000 !important;
  --bases-table-header-background: #000 !important;
  --bases-table-summary-background: #000 !important;
  --canvas-background: #000 !important;
  --checkbox-marker-color: #000 !important;
  --file-header-background: #000 !important;
  --file-header-background-focused: #000 !important;
  --light: #000 !important;
  --lightgray: #000 !important;
  --menu-background: #000 !important;
  --modal-background: #000 !important;
  --pdf-background: #000 !important;
  --pdf-page-background: #000 !important;
  --pdf-sidebar-background: #000 !important;
  --prompt-background: #000 !important;
  --ribbon-background: #000 !important;
  --ribbon-background-collapsed: #000 !important;
  --search-result-background: #000 !important;
  --status-bar-background: #000 !important;
  --suggestion-background: #000 !important;
  --tab-background-active: #000 !important;
  --tab-container-background: #000 !important;
  --tab-switcher-background: #000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000, transparent) !important;
  --titlebar-background: #000 !important;
  --titlebar-background-focused: #000 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    search: `html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
}`,
    misc: `html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}`,
  },
  light: {},
};
