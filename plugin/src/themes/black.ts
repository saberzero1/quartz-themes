import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "black", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #000;
  --background-secondary: #000;
  --bases-cards-background: #000;
  --bases-table-cell-background-active: #000;
  --bases-table-header-background: #000;
  --bases-table-summary-background: #000;
  --canvas-background: #000;
  --checkbox-marker-color: #000;
  --file-header-background: #000;
  --file-header-background-focused: #000;
  --menu-background: #000;
  --modal-background: #000;
  --pdf-background: #000;
  --pdf-page-background: #000;
  --pdf-sidebar-background: #000;
  --prompt-background: #000;
  --ribbon-background: #000;
  --ribbon-background-collapsed: #000;
  --search-result-background: #000;
  --status-bar-background: #000;
  --suggestion-background: #000;
  --tab-background-active: #000;
  --tab-container-background: #000;
  --tab-switcher-background: #000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000, transparent);
  --titlebar-background: #000;
  --titlebar-background-focused: #000;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    lists: `body ol.overflow {
  background-color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(0, 0, 0);
}`,
  },
  light: {},
};
