import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "simplicity",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 180 !important;
  --accent-l: 46% !important;
  --accent-s: 45% !important;
  --background-modifier-active-hover: hsla(180, 45%, 46%, 0.1) !important;
  --background-primary: hsl(180,45%,11.5%) !important;
  --background-secondary: hsla(180,45%,46%,0.06) !important;
  --bases-cards-background: hsl(180,45%,11.5%) !important;
  --bases-table-cell-background-active: hsl(180,45%,11.5%) !important;
  --bases-table-cell-background-selected: hsla(180, 45%, 46%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(180, 45%, 46%) !important;
  --bases-table-header-background: hsl(180,45%,11.5%) !important;
  --bases-table-summary-background: hsl(180,45%,11.5%) !important;
  --blockquote-border-color: hsl(180, 45%, 46%) !important;
  --canvas-background: hsl(180,45%,11.5%) !important;
  --checkbox-color: hsl(180, 45%, 46%) !important;
  --checkbox-color-hover: hsl(177, 45.9%, 52.9%) !important;
  --checkbox-marker-color: hsl(180,45%,11.5%) !important;
  --collapse-icon-color-collapsed: hsl(177, 45.9%, 52.9%) !important;
  --color-accent: hsl(180, 45%, 46%) !important;
  --color-accent-1: hsl(177, 45.9%, 52.9%) !important;
  --color-accent-2: hsl(175, 47.25%, 59.34%) !important;
  --color-accent-hsl: 180, 45%, 46% !important;
  --divider-color-hover: hsl(180, 45%, 46%) !important;
  --embed-border-start: 2px solid hsl(180, 45%, 46%) !important;
  --file-header-background: hsl(180,45%,11.5%) !important;
  --file-header-background-focused: hsl(180,45%,11.5%) !important;
  --graph-node-focused: hsl(177, 45.9%, 52.9%) !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-size: 1.5em !important;
  --h2-weight: 400 !important;
  --h3-size: 1.2em !important;
  --h3-weight: 400 !important;
  --h4-size: 1.1em !important;
  --h4-weight: 400 !important;
  --highlight: hsla(180,45%,46%,0.4) !important;
  --icon-color-active: hsl(177, 45.9%, 52.9%) !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: hsl(180, 45%, 46%) !important;
  --interactive-accent-hover: hsl(177, 45.9%, 52.9%) !important;
  --interactive-accent-hsl: 180, 45%, 46% !important;
  --light: hsl(180,45%,11.5%) !important;
  --lightgray: hsla(180,45%,46%,0.06) !important;
  --link-color: hsl(177, 45.9%, 52.9%) !important;
  --link-color-hover: hsl(175, 47.25%, 59.34%) !important;
  --link-external-color: hsl(177, 45.9%, 52.9%) !important;
  --link-external-color-hover: hsl(175, 47.25%, 59.34%) !important;
  --link-unresolved-color: hsl(177, 45.9%, 52.9%) !important;
  --link-unresolved-decoration-color: hsla(180, 45%, 46%, 0.3) !important;
  --list-marker-color-collapsed: hsl(177, 45.9%, 52.9%) !important;
  --menu-background: hsla(180,45%,46%,0.06) !important;
  --modal-background: hsl(180,45%,11.5%) !important;
  --nav-item-background-selected: hsla(180, 45%, 46%, 0.15) !important;
  --nav-item-color: #FFF !important;
  --nav-item-color-highlighted: hsl(177, 45.9%, 52.9%) !important;
  --pdf-background: hsl(180,45%,11.5%) !important;
  --pdf-page-background: hsl(180,45%,11.5%) !important;
  --pdf-sidebar-background: hsl(180,45%,11.5%) !important;
  --pill-color-remove-hover: hsl(177, 45.9%, 52.9%) !important;
  --prompt-background: hsl(180,45%,11.5%) !important;
  --ribbon-background: hsla(180,45%,46%,0.06) !important;
  --ribbon-background-collapsed: hsl(180,45%,11.5%) !important;
  --search-result-background: hsl(180,45%,11.5%) !important;
  --secondary: hsl(177, 45.9%, 52.9%) !important;
  --status-bar-background: hsla(180,45%,46%,0.06) !important;
  --suggestion-background: hsl(180,45%,11.5%) !important;
  --tab-background-active: hsl(180,45%,11.5%) !important;
  --tab-container-background: hsla(180,45%,46%,0.06) !important;
  --tab-outline-color: hsla(180,45%,46%,0.08) !important;
  --tab-switcher-background: hsla(180,45%,46%,0.06) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(180,45%,46%,0.06), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(180, 45%, 46%) !important;
  --tab-text-color-focused-highlighted: hsl(177, 45.9%, 52.9%) !important;
  --table-drag-handle-background-active: hsl(180, 45%, 46%) !important;
  --table-selection: hsla(180, 45%, 46%, 0.1) !important;
  --table-selection-border-color: hsl(180, 45%, 46%) !important;
  --tag-background: hsla(180, 45%, 46%, 0.1) !important;
  --tag-background-hover: hsla(180, 45%, 46%, 0.2) !important;
  --tag-border-color: hsla(180, 45%, 46%, 0.15) !important;
  --tag-border-color-hover: hsla(180, 45%, 46%, 0.15) !important;
  --tag-color: hsl(177, 45.9%, 52.9%) !important;
  --tag-color-hover: hsl(177, 45.9%, 52.9%) !important;
  --tertiary: hsl(175, 47.25%, 59.34%) !important;
  --text-accent: hsl(177, 45.9%, 52.9%) !important;
  --text-accent-hover: hsl(175, 47.25%, 59.34%) !important;
  --text-highlight-bg: hsla(180,45%,46%,0.4) !important;
  --text-selection: hsla(180, 45%, 46%, 0.33) !important;
  --textHighlight: hsla(180,45%,46%,0.4) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(65, 170, 170, 0.06);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(65, 170, 170, 0.06);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(65, 170, 170, 0.08);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(65, 170, 170, 0.06);
  border-left-color: rgba(65, 170, 170, 0.08);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 43, 43);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(65, 170, 170, 0.4);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(80, 190, 185);
  outline: rgb(80, 190, 185) none 0px;
  text-decoration: underline rgb(80, 190, 185);
  text-decoration-color: rgb(80, 190, 185);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(80, 190, 185);
  outline: rgb(80, 190, 185) none 0px;
  text-decoration: rgb(80, 190, 185);
  text-decoration-color: rgb(80, 190, 185);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(80, 190, 185);
  outline: rgb(80, 190, 185) none 0px;
  text-decoration: rgb(80, 190, 185);
  text-decoration-color: rgb(80, 190, 185);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `html[saved-theme="dark"] body table {
  width: 1780px;
}

html[saved-theme="dark"] body td {
  background-color: rgba(65, 170, 170, 0.08);
  border-bottom-color: rgb(16, 43, 43);
  border-bottom-width: 3px;
  border-left-color: rgb(16, 43, 43);
  border-left-width: 3px;
  border-right-color: rgb(16, 43, 43);
  border-right-width: 3px;
  border-top-color: rgb(16, 43, 43);
  border-top-width: 3px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}

html[saved-theme="dark"] body th {
  background-color: rgba(65, 170, 170, 0.15);
  border-bottom-color: rgb(16, 43, 43);
  border-bottom-width: 3px;
  border-left-color: rgb(16, 43, 43);
  border-left-width: 3px;
  border-right-color: rgb(16, 43, 43);
  border-right-width: 3px;
  border-top-color: rgb(16, 43, 43);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(65, 170, 170);
}

html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(65, 170, 170);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(16, 43, 43);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(16, 43, 43);
  border-bottom-color: rgba(65, 170, 170, 0.06);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(65, 170, 170, 0.1);
  border-bottom-color: rgba(65, 170, 170, 0.15);
  border-left-color: rgba(65, 170, 170, 0.15);
  border-right-color: rgba(65, 170, 170, 0.15);
  border-top-color: rgba(65, 170, 170, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(80, 190, 185);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(65, 170, 170, 0.08);
  border-left-color: rgba(65, 170, 170, 0.08);
  border-right-color: rgba(65, 170, 170, 0.08);
  border-top-color: rgba(65, 170, 170, 0.08);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(16, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 43, 43);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(65, 170, 170, 0.06);
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
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(65, 170, 170);
  border-left-color: rgb(65, 170, 170);
  border-right-color: rgb(65, 170, 170);
  border-top-color: rgb(65, 170, 170);
  color: rgb(65, 170, 170);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(65, 170, 170);
  stroke: rgb(65, 170, 170);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(65, 170, 170, 0.06);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(16, 43, 43);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 180 !important;
  --accent-l: 46% !important;
  --accent-s: 45% !important;
  --background-modifier-active-hover: hsla(180, 45%, 46%, 0.1) !important;
  --background-secondary: hsla(180,45%,46%,0.06) !important;
  --bases-table-cell-background-selected: hsla(180, 45%, 46%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(179, 45.45%, 49.45%) !important;
  --blockquote-border-color: hsl(179, 45.45%, 49.45%) !important;
  --caret-color: hsl(180,45%,18.4%) !important;
  --checkbox-color: hsl(179, 45.45%, 49.45%) !important;
  --checkbox-color-hover: hsl(177, 45.9%, 52.9%) !important;
  --code-normal: hsl(180,45%,18.4%) !important;
  --collapse-icon-color-collapsed: hsl(180,45%,46%) !important;
  --color-accent: hsl(180,45%,46%) !important;
  --color-accent-1: hsl(179, 45.45%, 49.45%) !important;
  --color-accent-2: hsl(177, 45.9%, 52.9%) !important;
  --color-accent-hsl: 180, 45%, 46% !important;
  --dark: hsl(180,45%,18.4%) !important;
  --darkgray: hsl(180,45%,18.4%) !important;
  --divider-color-hover: hsl(179, 45.45%, 49.45%) !important;
  --embed-border-start: 2px solid hsl(179, 45.45%, 49.45%) !important;
  --flair-color: hsl(180,45%,18.4%) !important;
  --graph-node-focused: hsl(180,45%,46%) !important;
  --graph-text: hsl(180,45%,18.4%) !important;
  --gray: hsl(180,45%,18.4%) !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-size: 1.5em !important;
  --h2-weight: 400 !important;
  --h3-size: 1.2em !important;
  --h3-weight: 400 !important;
  --h4-size: 1.1em !important;
  --h4-weight: 400 !important;
  --highlight: hsla(180,45%,46%,0.1) !important;
  --icon-color-active: hsl(180,45%,46%) !important;
  --icon-color-focused: hsl(180,45%,18.4%) !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: hsl(179, 45.45%, 49.45%) !important;
  --interactive-accent-hover: hsl(177, 45.9%, 52.9%) !important;
  --interactive-accent-hsl: 180, 45%, 46% !important;
  --lightgray: hsla(180,45%,46%,0.06) !important;
  --link-color: hsl(180,45%,46%) !important;
  --link-color-hover: hsl(177, 45.9%, 52.9%) !important;
  --link-external-color: hsl(180,45%,46%) !important;
  --link-external-color-hover: hsl(177, 45.9%, 52.9%) !important;
  --link-unresolved-color: hsl(180,45%,46%) !important;
  --link-unresolved-decoration-color: hsla(180, 45%, 46%, 0.3) !important;
  --list-marker-color-collapsed: hsl(180,45%,46%) !important;
  --menu-background: hsla(180,45%,46%,0.06) !important;
  --metadata-input-text-color: hsl(180,45%,18.4%) !important;
  --nav-heading-color: hsl(180,45%,18.4%) !important;
  --nav-heading-color-hover: hsl(180,45%,18.4%) !important;
  --nav-item-background-hover: hsla(180,45%,46%,0.03) !important;
  --nav-item-background-selected: hsla(180, 45%, 46%, 0.15) !important;
  --nav-item-color-active: hsl(180,45%,18.4%) !important;
  --nav-item-color-highlighted: hsl(180,45%,46%) !important;
  --nav-item-color-hover: hsl(180,45%,18.4%) !important;
  --nav-item-color-selected: hsl(180,45%,18.4%) !important;
  --pill-color-hover: hsl(180,45%,18.4%) !important;
  --pill-color-remove-hover: hsl(180,45%,46%) !important;
  --ribbon-background: hsla(180,45%,46%,0.06) !important;
  --secondary: hsl(180,45%,46%) !important;
  --setting-group-heading-color: hsl(180,45%,18.4%) !important;
  --status-bar-background: hsla(180,45%,46%,0.06) !important;
  --tab-container-background: #ffffff !important;
  --tab-outline-color: hsla(180,45%,46%,0.08) !important;
  --tab-switcher-background: hsla(180,45%,46%,0.06) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(180,45%,46%,0.06), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(180,45%,46%) !important;
  --tab-text-color-focused-active-current: hsl(180,45%,18.4%) !important;
  --tab-text-color-focused-highlighted: hsl(180,45%,46%) !important;
  --table-drag-handle-background-active: hsl(179, 45.45%, 49.45%) !important;
  --table-header-color: hsl(180,45%,18.4%) !important;
  --table-selection: hsla(180, 45%, 46%, 0.1) !important;
  --table-selection-border-color: hsl(179, 45.45%, 49.45%) !important;
  --tag-background: hsla(180, 45%, 46%, 0.1) !important;
  --tag-background-hover: hsla(180, 45%, 46%, 0.2) !important;
  --tag-border-color: hsla(180, 45%, 46%, 0.15) !important;
  --tag-border-color-hover: hsla(180, 45%, 46%, 0.15) !important;
  --tag-color: hsl(180,45%,46%) !important;
  --tag-color-hover: hsl(180,45%,46%) !important;
  --tertiary: hsl(177, 45.9%, 52.9%) !important;
  --text-accent: hsl(180,45%,46%) !important;
  --text-accent-hover: hsl(177, 45.9%, 52.9%) !important;
  --text-highlight-bg: hsla(180,45%,46%,0.1) !important;
  --text-normal: hsl(180,45%,18.4%) !important;
  --text-selection: hsla(180, 45%, 46%, 0.2) !important;
  --textHighlight: hsla(180,45%,46%,0.1) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-text-color-focused: hsl(180,45%,18.4%) !important;
  --vault-profile-color: hsl(180,45%,18.4%) !important;
  --vault-profile-color-hover: hsl(180,45%,18.4%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(65, 170, 170, 0.06);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(65, 170, 170, 0.08);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgba(65, 170, 170, 0.08);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(26, 68, 68);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(65, 170, 170, 0.1);
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body del {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: line-through rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(65, 170, 170);
  outline: rgb(65, 170, 170) none 0px;
  text-decoration: underline rgb(65, 170, 170);
  text-decoration-color: rgb(65, 170, 170);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(65, 170, 170);
  outline: rgb(65, 170, 170) none 0px;
  text-decoration: rgb(65, 170, 170);
  text-decoration-color: rgb(65, 170, 170);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(65, 170, 170);
  outline: rgb(65, 170, 170) none 0px;
  text-decoration: rgb(65, 170, 170);
  text-decoration-color: rgb(65, 170, 170);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body table {
  color: rgb(26, 68, 68);
  width: 1780px;
}

html[saved-theme="light"] body td {
  background-color: rgba(65, 170, 170, 0.08);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 3px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 3px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 3px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 3px;
  color: rgb(26, 68, 68);
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}

html[saved-theme="light"] body th {
  background-color: rgba(65, 170, 170, 0.15);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 3px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 3px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 3px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-width: 3px;
  color: rgb(26, 68, 68);
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  text-align: left;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(26, 68, 68);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(69, 183, 181);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(69, 183, 181);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 68, 68);
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 68, 68);
  outline: rgb(26, 68, 68) none 0px;
  text-decoration: rgb(26, 68, 68);
  text-decoration-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(65, 170, 170, 0.06);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(65, 170, 170, 0.1);
  border-bottom-color: rgba(65, 170, 170, 0.15);
  border-left-color: rgba(65, 170, 170, 0.15);
  border-right-color: rgba(65, 170, 170, 0.15);
  border-top-color: rgba(65, 170, 170, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(65, 170, 170);
}

html[saved-theme="light"] body h1 {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body h2 {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body h3 {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body h4 {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body h5 {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body h6 {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(65, 170, 170, 0.08);
  border-left-color: rgba(65, 170, 170, 0.08);
  border-right-color: rgba(65, 170, 170, 0.08);
  border-top-color: rgba(65, 170, 170, 0.08);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(65, 170, 170, 0.06);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(65, 170, 170);
  border-left-color: rgb(65, 170, 170);
  border-right-color: rgb(65, 170, 170);
  border-top-color: rgb(65, 170, 170);
  color: rgb(65, 170, 170);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(65, 170, 170);
  stroke: rgb(65, 170, 170);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(65, 170, 170, 0.06);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 68, 68);
  text-decoration: underline dotted rgb(26, 68, 68);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 68, 68);
  border-left-color: rgb(26, 68, 68);
  border-right-color: rgb(26, 68, 68);
  border-top-color: rgb(26, 68, 68);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 68, 68);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 68, 68);
}`,
  },
};
