import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pale", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-error: #9e5245 !important;
  --background-primary: #323232 !important;
  --bases-cards-background: #323232 !important;
  --bases-table-border-color: #8c8c8cc7 !important;
  --bases-table-cell-background-active: #323232 !important;
  --bases-table-header-background: #323232 !important;
  --bases-table-summary-background: #323232 !important;
  --blur-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent)) !important;
  --canvas-background: #323232 !important;
  --checkbox-marker-color: #323232 !important;
  --checkbox-radius: 5px !important;
  --checkbox-size: 20px !important;
  --code-background: #232323 !important;
  --code-function: #dcbb59 !important;
  --code-keyword: #ff6347 !important;
  --code-normal: #c4c4c4 !important;
  --code-operator: #b89cdd !important;
  --code-property: #d29a8c !important;
  --code-string: #05a3a3 !important;
  --code-value: #e3b750 !important;
  --dropdown-background: #484848 !important;
  --file-header-background: #323232 !important;
  --file-header-background-focused: #323232 !important;
  --flair-background: #484848 !important;
  --h1-color: #d9d8d8 !important;
  --h2-color: #d4d4d4 !important;
  --h3-color: #b4b4b4 !important;
  --h4-color: #a6a6a6 !important;
  --h5-color: #9a9a9a !important;
  --h6-color: #929292 !important;
  --hr-color: #8c8c8c3c !important;
  --icon-color: #dddddd !important;
  --icon-l: 20px !important;
  --icon-stroke: 2.2px !important;
  --icon-xs: 15px !important;
  --inline-title-color: #d9d8d8 !important;
  --interactive-normal: #484848 !important;
  --light: #323232 !important;
  --modal-background: #323232 !important;
  --nav-item-color: #ffffff !important;
  --nav-item-color-active: #ffffffbb !important;
  --nav-item-color-hover: #dedede6e !important;
  --nav-item-size: 12px !important;
  --pdf-background: #323232 !important;
  --pdf-page-background: #323232 !important;
  --pdf-sidebar-background: #323232 !important;
  --prompt-background: #323232 !important;
  --raised-background: color-mix(in srgb, #484848 65%, transparent) linear-gradient(#484848, color-mix(in srgb, #484848 65%, transparent)) !important;
  --ribbon-background-collapsed: #323232 !important;
  --ribbon-width: 51px !important;
  --search-result-background: #323232 !important;
  --setting-bg: #2a2a2a98 !important;
  --shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.278) !important;
  --suggestion-background: #323232 !important;
  --tab-background-active: #4d4c4cf3 !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: transparent !important;
  --table-border-color: #8c8c8cc7 !important;
  --table-header-border-color: #8c8c8cc7 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(50, 50, 50);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 35, 35);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 35, 35);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 35, 35);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 35, 35);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 0px;
  margin-right: 6.66667px;
  width: 20px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(50, 50, 50);
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
}

html[saved-theme="dark"] body h1 {
  color: rgb(217, 216, 216);
}

html[saved-theme="dark"] body h2 {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(217, 216, 216);
}

html[saved-theme="dark"] body h3 {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body h4 {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body h5 {
  color: rgb(154, 154, 154);
}

html[saved-theme="dark"] body h6 {
  color: rgb(146, 146, 146);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(50, 50, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 50, 50);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(50, 50, 50);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  cursor: pointer;
}`,
    misc: `html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-error: #9e5245 !important;
  --background-primary: #efdcbc !important;
  --background-secondary: rgba(255, 255, 255, 0.062) !important;
  --bases-cards-background: #efdcbc !important;
  --bases-table-border-color: #8c8c8cc7 !important;
  --bases-table-cell-background-active: #efdcbc !important;
  --bases-table-header-background: #efdcbc !important;
  --bases-table-summary-background: #efdcbc !important;
  --blur-background: color-mix(in srgb, #efdcbc 65%, transparent) linear-gradient(#efdcbc, color-mix(in srgb, #efdcbc 65%, transparent)) !important;
  --canvas-background: #efdcbc !important;
  --checkbox-marker-color: #efdcbc !important;
  --checkbox-radius: 5px !important;
  --checkbox-size: 20px !important;
  --code-background: #292929 !important;
  --code-function: #dcbb59 !important;
  --code-keyword: #ff6347 !important;
  --code-normal: #c4c4c4 !important;
  --code-operator: #b89cdd !important;
  --code-property: #d29a8c !important;
  --code-string: #05a3a3 !important;
  --code-value: #e3b750 !important;
  --dropdown-background: #ecdfd2 !important;
  --file-header-background: #efdcbc !important;
  --file-header-background-focused: #efdcbc !important;
  --flair-background: #ecdfd2 !important;
  --h1-color: #242424c7 !important;
  --h2-color: #242424c7 !important;
  --h3-color: #2d2d2dc7 !important;
  --h4-color: #363636c7 !important;
  --h5-color: #3e3e3ec7 !important;
  --h6-color: #616161c7 !important;
  --hr-color: #8c8c8c46 !important;
  --icon-color: #525252 !important;
  --icon-l: 20px !important;
  --icon-stroke: 2.2px !important;
  --icon-xs: 15px !important;
  --inline-title-color: #242424c7 !important;
  --interactive-normal: #ecdfd2 !important;
  --light: #efdcbc !important;
  --lightgray: rgba(255, 255, 255, 0.062) !important;
  --menu-background: rgba(255, 255, 255, 0.062) !important;
  --modal-background: #efdcbc !important;
  --nav-item-color: #828282 !important;
  --nav-item-color-active: #191919bb !important;
  --nav-item-color-hover: #3e3e3e9c !important;
  --nav-item-size: 12px !important;
  --pdf-background: #efdcbc !important;
  --pdf-page-background: #efdcbc !important;
  --pdf-sidebar-background: #efdcbc !important;
  --prompt-background: #efdcbc !important;
  --raised-background: color-mix(in srgb, #efdcbc 65%, transparent) linear-gradient(#efdcbc, color-mix(in srgb, #efdcbc 65%, transparent)) !important;
  --ribbon-background: rgba(255, 255, 255, 0.062) !important;
  --ribbon-background-collapsed: #efdcbc !important;
  --ribbon-width: 51px !important;
  --search-result-background: #efdcbc !important;
  --setting-bg: #efdcbcb6 !important;
  --shadow: 0 2px 9px 1px rgba(71, 71, 71, 0.212) !important;
  --sidebar-forground-color: #b8b8b8bd !important;
  --status-bar-background: rgba(255, 255, 255, 0.062) !important;
  --suggestion-background: #efdcbc !important;
  --tab-background-active: #efdcbc !important;
  --tab-container-background: rgba(255, 255, 255, 0.062) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: rgba(255, 255, 255, 0.062) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgba(255, 255, 255, 0.062), transparent) !important;
  --tab-text-color: #242424c7 !important;
  --table-border-color: #8c8c8cc7 !important;
  --table-header-border-color: #8c8c8cc7 !important;
  --titlebar-background: rgba(255, 255, 255, 0.062) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(255, 255, 255, 0.063);
  border-left-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 220, 188);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(140, 140, 140, 0.78);
  border-left-color: rgba(140, 140, 140, 0.78);
  border-right-color: rgba(140, 140, 140, 0.78);
  border-top-color: rgba(140, 140, 140, 0.78);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 41, 41);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 41, 41);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(220, 187, 89);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 187, 89);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 187, 89);
  border-left-color: rgb(220, 187, 89);
  border-right-color: rgb(220, 187, 89);
  border-top-color: rgb(220, 187, 89);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(41, 41, 41);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(41, 41, 41);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 0px;
  margin-right: 6.66667px;
  width: 20px;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(239, 220, 188);
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
}

html[saved-theme="light"] body h1 {
  color: rgba(36, 36, 36, 0.78);
}

html[saved-theme="light"] body h2 {
  color: rgba(36, 36, 36, 0.78);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgba(36, 36, 36, 0.78);
}

html[saved-theme="light"] body h3 {
  color: rgba(45, 45, 45, 0.78);
}

html[saved-theme="light"] body h4 {
  color: rgba(54, 54, 54, 0.78);
}

html[saved-theme="light"] body h5 {
  color: rgba(62, 62, 62, 0.78);
}

html[saved-theme="light"] body h6 {
  color: rgba(97, 97, 97, 0.78);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 220, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 220, 188);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(82, 82, 82);
  border-left-color: rgb(82, 82, 82);
  border-right-color: rgb(82, 82, 82);
  border-top-color: rgb(82, 82, 82);
  color: rgb(82, 82, 82);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(255, 255, 255, 0.063);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 130, 130);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(130, 130, 130);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 130, 130);
  text-decoration: rgb(130, 130, 130);
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(239, 220, 188);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
  cursor: pointer;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(237, 237, 237);
  stroke: rgb(237, 237, 237);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(255, 255, 255, 0.063);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(41, 41, 41);
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(196, 196, 196);
  border-right-color: rgb(196, 196, 196);
  border-top-color: rgb(196, 196, 196);
  color: rgb(196, 196, 196);
}`,
  },
};
