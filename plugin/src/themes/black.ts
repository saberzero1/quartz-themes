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
    checkboxes: `html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
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
