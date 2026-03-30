import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "monochroyou",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: transparent !important;
  --background-primary: hsl(258, 20%, 7%) !important;
  --background-secondary: hsl(258, 30%, 12%) !important;
  --bases-cards-background: hsl(258, 20%, 7%) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 100px !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: hsl(258, 20%, 7%) !important;
  --bases-table-container-border-radius: 100px !important;
  --bases-table-header-background: hsl(258, 20%, 7%) !important;
  --bases-table-summary-background: hsl(258, 20%, 7%) !important;
  --button-radius: 100px !important;
  --callout-radius: 100px;
  --canvas-background: hsl(258, 20%, 7%) !important;
  --canvas-controls-radius: 100px !important;
  --checkbox-marker-color: hsl(258, 20%, 7%) !important;
  --checkbox-radius: 100px !important;
  --clickable-icon-radius: 100px !important;
  --code-background: hsl(258, 100%, 10%) !important;
  --code-border-color: transparent !important;
  --code-normal: hsl(258, 100%, 80%) !important;
  --code-radius: 100px !important;
  --colorBackgroundPrimary: hsl(258, 20%, 7%) !important;
  --colorBackgroundSecondary: hsl(258, 30%, 12%) !important;
  --colorOnPrimary: hsl(258, 30%, 12%) !important;
  --colorPrimary: hsl(258, 100%, 80%) !important;
  --colorPrimaryContainer: hsl(258, 100%, 10%) !important;
  --colorPrimaryContainerVariant: hsl(258, 100%, 20%) !important;
  --colorPrimaryContainerVariantHover: hsl(258, 100%, 10%) !important;
  --divider-color: transparent !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --file-header-background: hsl(258, 20%, 7%) !important;
  --file-header-background-focused: hsl(258, 20%, 7%) !important;
  --footnote-divider-color: transparent !important;
  --footnote-radius: 100px !important;
  --highlight: hsl(258, 100%, 20%) !important;
  --hr-color: transparent !important;
  --light: hsl(258, 20%, 7%) !important;
  --lightgray: hsl(258, 30%, 12%) !important;
  --link-external-color: hsl(258, 100%, 80%) !important;
  --link-external-color-hover: hsl(258, 100%, 80%) !important;
  --menu-background: hsl(258, 30%, 12%) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --modal-background: hsl(258, 20%, 7%) !important;
  --nav-item-background-active: hsl(258, 100%, 20%) !important;
  --nav-item-background-hover: hsl(258, 100%, 10%) !important;
  --nav-item-color: white !important;
  --nav-item-radius: 100px !important;
  --nav-tag-radius: 100px !important;
  --pdf-background: hsl(258, 20%, 7%) !important;
  --pdf-page-background: hsl(258, 20%, 7%) !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: hsl(258, 20%, 7%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --prompt-background: hsl(258, 20%, 7%) !important;
  --radius-s: 100px !important;
  --ribbon-background: hsl(258, 30%, 12%) !important;
  --ribbon-background-collapsed: hsl(258, 20%, 7%) !important;
  --search-result-background: hsl(258, 20%, 7%) !important;
  --setting-items-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: hsl(258, 30%, 12%) !important;
  --status-bar-border-color: transparent !important;
  --suggestion-background: hsl(258, 20%, 7%) !important;
  --tab-background-active: hsl(258, 100%, 20%) !important;
  --tab-container-background: hsl(258, 30%, 12%) !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 100px !important;
  --tab-switcher-background: hsl(258, 30%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 30%, 12%), transparent) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-color-active: hsl(258, 30%, 12%) !important;
  --table-header-border-color: transparent !important;
  --tag-background: hsl(258, 100%, 20%) !important;
  --tag-background-hover: hsl(258, 100%, 20%) !important;
  --tag-color: hsl(258, 100%, 80%) !important;
  --text-highlight-bg: hsl(258, 100%, 20%) !important;
  --text-on-accent: hsl(258, 30%, 12%) !important;
  --text-on-accent-inverted: hsl(258, 30%, 12%) !important;
  --textHighlight: hsl(258, 100%, 20%) !important;
  --titlebar-background: hsl(258, 30%, 12%) !important;
  --titlebar-background-focused: hsl(258, 30%, 12%) !important;
  --titlebar-border-color: transparent !important;
  --toggle-thumb-color: hsl(258, 30%, 12%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 21, 40);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 14, 21);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(31, 0, 102);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(184, 153, 255);
  outline: rgb(184, 153, 255) none 0px;
  text-decoration-color: rgb(184, 153, 255);
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(184, 153, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(184, 153, 255);
  border-right-color: rgb(184, 153, 255);
  border-top-color: rgb(184, 153, 255);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(16, 14, 21);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(31, 0, 102);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(27, 21, 40);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgb(184, 153, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(184, 153, 255);
  border-right-color: rgb(184, 153, 255);
  border-top-color: rgb(184, 153, 255);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(184, 153, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: transparent !important;
  --background-primary: hsl(258, 100%, 97%) !important;
  --background-secondary: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --bases-cards-background: hsl(258, 100%, 97%) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 100px !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: hsl(258, 100%, 97%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 100%, 31%) !important;
  --bases-table-container-border-radius: 100px !important;
  --bases-table-header-background: hsl(258, 100%, 97%) !important;
  --bases-table-summary-background: hsl(258, 100%, 97%) !important;
  --blockquote-border-color: hsl(258, 100%, 31%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent) linear-gradient(hsl(258, 100%, 97%), color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent)) !important;
  --button-radius: 100px !important;
  --callout-radius: 100px;
  --canvas-background: hsl(258, 100%, 97%) !important;
  --canvas-controls-radius: 100px !important;
  --checkbox-color: hsl(258, 100%, 31%) !important;
  --checkbox-color-hover: hsl(258, 100%, 31%) !important;
  --checkbox-marker-color: hsl(258, 100%, 97%) !important;
  --checkbox-radius: 100px !important;
  --clickable-icon-radius: 100px !important;
  --code-background: hsl(258, 100%, 93%) !important;
  --code-border-color: transparent !important;
  --code-normal: hsl(258, 100%, 31%) !important;
  --code-radius: 100px !important;
  --colorBackgroundPrimary: hsl(258, 100%, 97%) !important;
  --colorBackgroundSecondary: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --colorOnPrimary: white !important;
  --colorPrimary: hsl(258, 100%, 31%) !important;
  --colorPrimaryContainer: hsl(258, 100%, 93%) !important;
  --colorPrimaryContainerVariant: hsl(258, 100%, 85%) !important;
  --colorPrimaryContainerVariantHover: hsl(258, 100%, 91%) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(258, 100%, 31%) !important;
  --dropdown-background: hsl(258, 100%, 90%) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid hsl(258, 100%, 31%) !important;
  --file-header-background: hsl(258, 100%, 97%) !important;
  --file-header-background-focused: hsl(258, 100%, 97%) !important;
  --flair-background: hsl(258, 100%, 90%) !important;
  --footnote-divider-color: transparent !important;
  --footnote-radius: 100px !important;
  --highlight: hsl(258, 100%, 85%) !important;
  --hr-color: transparent !important;
  --interactive-accent: hsl(258, 100%, 31%) !important;
  --interactive-accent-hover: hsl(258, 100%, 31%) !important;
  --interactive-normal: hsl(258, 100%, 90%) !important;
  --light: hsl(258, 100%, 97%) !important;
  --lightgray: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --link-external-color: hsl(258, 100%, 31%) !important;
  --link-external-color-hover: hsl(258, 100%, 31%) !important;
  --menu-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --modal-background: hsl(258, 100%, 97%) !important;
  --nav-item-background-active: hsl(258, 100%, 85%) !important;
  --nav-item-background-hover: hsl(258, 100%, 91%) !important;
  --nav-item-color: black !important;
  --nav-item-radius: 100px !important;
  --nav-tag-radius: 100px !important;
  --pdf-background: hsl(258, 100%, 97%) !important;
  --pdf-page-background: hsl(258, 100%, 97%) !important;
  --pdf-sidebar-background: hsl(258, 100%, 97%) !important;
  --pill-border-color: transparent !important;
  --prompt-background: hsl(258, 100%, 97%) !important;
  --radius-s: 100px !important;
  --raised-background: color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent) linear-gradient(hsl(258, 100%, 97%), color-mix(in srgb, hsl(258, 100%, 97%) 65%, transparent)) !important;
  --ribbon-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --ribbon-background-collapsed: hsl(258, 100%, 97%) !important;
  --search-result-background: hsl(258, 100%, 97%) !important;
  --secondary: hsl(258, 100%, 31%) !important;
  --setting-items-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --status-bar-border-color: transparent !important;
  --suggestion-background: hsl(258, 100%, 97%) !important;
  --tab-background-active: hsl(258, 100%, 85%) !important;
  --tab-container-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 100px !important;
  --tab-switcher-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(
		258,
		88%,
		66%,
		2%
	), transparent) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: hsl(258, 100%, 31%) !important;
  --table-header-border-color: transparent !important;
  --table-selection-border-color: hsl(258, 100%, 31%) !important;
  --tag-background: hsl(258, 100%, 85%) !important;
  --tag-background-hover: hsl(258, 100%, 85%) !important;
  --tag-color: hsl(258, 100%, 31%) !important;
  --tertiary: hsl(258, 100%, 31%) !important;
  --text-highlight-bg: hsl(258, 100%, 85%) !important;
  --text-on-accent-inverted: white !important;
  --textHighlight: hsl(258, 100%, 85%) !important;
  --titlebar-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --titlebar-background-focused: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --titlebar-border-color: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(138, 92, 245, 0.02);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(244, 240, 255);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgb(201, 179, 255);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(47, 0, 158);
  outline: rgb(47, 0, 158) none 0px;
  text-decoration-color: rgb(47, 0, 158);
}`,
    tables: `html[saved-theme="light"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(47, 0, 158);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(47, 0, 158);
  border-right-color: rgb(47, 0, 158);
  border-top-color: rgb(47, 0, 158);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(47, 0, 158);
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(47, 0, 158);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(244, 240, 255);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(201, 179, 255);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgb(47, 0, 158);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(47, 0, 158);
  border-right-color: rgb(47, 0, 158);
  border-top-color: rgb(47, 0, 158);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(47, 0, 158);
}`,
  },
};
