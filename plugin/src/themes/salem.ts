import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "salem", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 45 !important;
  --accent-l: 60% !important;
  --accent-s: 41% !important;
  --active-bg: #2527229e !important;
  --background-modifier-active-hover: hsla(45, 41%, 60%, 0.1) !important;
  --background-primary: #110f0f !important;
  --background-secondary: #111111 !important;
  --bases-cards-background: #110f0f !important;
  --bases-group-heading-property-color: rgb(198 193 135) !important;
  --bases-table-cell-background-active: #110f0f !important;
  --bases-table-cell-background-selected: hsla(45, 41%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(45, 41%, 60%) !important;
  --bases-table-header-background: #110f0f !important;
  --bases-table-header-color: rgb(198 193 135) !important;
  --bases-table-summary-background: #110f0f !important;
  --blockquote-background-color: #1d1d1da4 !important;
  --blockquote-background-hover: #232323ef !important;
  --blockquote-border-color: hsl(45, 41%, 60%) !important;
  --blockquote-border-thickness: 3px !important;
  --button-radius: 8px !important;
  --callout-radius: 20px;
  --callout-tip: 241, 226, 25;
  --canvas-background: #110f0f !important;
  --canvas-color: 241, 226, 25 !important;
  --canvas-color-2: 165, 156, 103 !important;
  --canvas-color-3: transparent !important;
  --checkbox-border-color-hover: rgb(198 193 135) !important;
  --checkbox-color: hsl(45, 41%, 60%) !important;
  --checkbox-color-hover: hsl(42, 41.82%, 69%) !important;
  --checkbox-marker-color: #110f0f !important;
  --checkbox-radius: 16px !important;
  --checklist-done-color: rgb(198 193 135 / 45%) !important;
  --checklist-done-decoration: none !important;
  --cm-active: #2e2e1d39 !important;
  --code-background: black !important;
  --code-punctuation: rgb(198 193 135) !important;
  --code-radius: 12px !important;
  --collapse-icon-color-collapsed: hsl(42, 41.82%, 69%) !important;
  --color-accent: hsl(45, 41%, 60%) !important;
  --color-accent-1: hsl(42, 41.82%, 69%) !important;
  --color-accent-2: hsl(40, 43.05%, 77.4%) !important;
  --color-accent-hsl: 45, 41%, 60% !important;
  --color-crimson: rgb(172, 99, 99) !important;
  --color-crimson-rgb: 172, 99, 99 !important;
  --color-goldFusion-rgb: 165, 156, 103 !important;
  --color-starred: rgb(241, 226, 25) !important;
  --color-starred-rgb: 241, 226, 25 !important;
  --dark: rgb(198 193 135) !important;
  --darkgray: rgb(198 193 135) !important;
  --divider-color: #262626 !important;
  --divider-color-hover: hsl(45, 41%, 60%) !important;
  --embed-border-start: 2px solid hsl(45, 41%, 60%) !important;
  --file-header-background: #110f0f !important;
  --file-header-background-focused: #110f0f !important;
  --footnote-id-color: rgb(198 193 135) !important;
  --footnote-input-background-active: #111111 !important;
  --graph-node: rgb(198 193 135) !important;
  --graph-node-focused: hsl(42, 41.82%, 69%) !important;
  --gray: rgb(198 193 135) !important;
  --h1-size: 2em !important;
  --h2-size: 1.7em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1.1em !important;
  --highlight: hsla(45, 41%, 60%, 0.1) !important;
  --hr-color: rgb(198 193 135 / 10%) !important;
  --icon-color: rgb(198 193 135) !important;
  --icon-color-active: hsl(42, 41.82%, 69%) !important;
  --icon-color-hover: rgb(198 193 135) !important;
  --inline-title-color: #fb464c !important;
  --inline-title-size: 2.3em !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(45, 41%, 60%) !important;
  --interactive-accent-hover: hsl(42, 41.82%, 69%) !important;
  --interactive-accent-hsl: 45, 41%, 60% !important;
  --italic-color: rgb(172, 99, 99) !important;
  --light: #110f0f !important;
  --lightgray: #111111 !important;
  --line-height-tight: 1.8 !important;
  --link-color: hsl(42, 41.82%, 69%) !important;
  --link-color-hover: hsl(40, 43.05%, 77.4%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(42, 41.82%, 69%) !important;
  --link-external-color-hover: hsl(40, 43.05%, 77.4%) !important;
  --link-unresolved-color: hsl(42, 41.82%, 69%) !important;
  --link-unresolved-decoration-color: hsla(45, 41%, 60%, 0.3) !important;
  --list-bullet-border: 1px solid hsl(40, 43.05%, 77.4%) !important;
  --list-marker-color: hsl(45, 41%, 60%) !important;
  --list-marker-color-collapsed: hsl(42, 41.82%, 69%) !important;
  --list-marker-color-hover: rgb(198 193 135) !important;
  --menu-background: #111111 !important;
  --metadata-input-background-active: #111111 !important;
  --metadata-label-text-color: rgb(198 193 135) !important;
  --metadata-label-text-color-hover: rgb(198 193 135) !important;
  --metadata-property-background-hover: rgba(255, 255, 255, 0.03) !important;
  --modal-background: #110f0f !important;
  --muted-accent: rgb(198 193 135) !important;
  --muted-accent-rgb: 198 193 135 !important;
  --nav-heading-color-collapsed-hover: rgb(198 193 135) !important;
  --nav-item-background-selected: hsla(45, 41%, 60%, 0.15) !important;
  --nav-item-color: rgb(198 193 135) !important;
  --nav-item-color-highlighted: hsl(42, 41.82%, 69%) !important;
  --nav-tag-color-active: rgb(198 193 135) !important;
  --nav-tag-color-hover: rgb(198 193 135) !important;
  --pdf-background: #110f0f !important;
  --pdf-page-background: #110f0f !important;
  --pdf-sidebar-background: #110f0f !important;
  --pill-color: rgb(198 193 135) !important;
  --pill-color-remove-hover: hsl(42, 41.82%, 69%) !important;
  --primary-90: rgba(17, 15, 15, 0.9) !important;
  --prompt-background: #110f0f !important;
  --ribbon-background: #111111 !important;
  --ribbon-background-collapsed: #110f0f !important;
  --search-clear-button-color: rgb(198 193 135) !important;
  --search-icon-color: rgb(198 193 135) !important;
  --search-result-background: #110f0f !important;
  --secondary: hsl(42, 41.82%, 69%) !important;
  --status-bar-background: #111111 !important;
  --status-bar-border-color: #262626 !important;
  --status-bar-text-color: rgb(198 193 135) !important;
  --suggestion-background: #110f0f !important;
  --tab-background-active: #2527229e !important;
  --tab-container-background: #111111 !important;
  --tab-outline-color: transparent !important;
  --tab-radius-active: 12px !important;
  --tab-switcher-background: #111111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(45, 41%, 60%) !important;
  --tab-text-color-active: rgb(198 193 135) !important;
  --tab-text-color-focused: #666666 !important;
  --tab-text-color-focused-active: rgb(198 193 135) !important;
  --tab-text-color-focused-active-current: hsl(42, 41.82%, 69%) !important;
  --tab-text-color-focused-highlighted: hsl(42, 41.82%, 69%) !important;
  --tab-width: 180px !important;
  --table-drag-handle-background-active: hsl(45, 41%, 60%) !important;
  --table-drag-handle-color-active: rgb(59, 53, 34) !important;
  --table-header-color: rgb(198 193 135) !important;
  --table-line-height: 1.8 !important;
  --table-selection: hsla(45, 41%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(45, 41%, 60%) !important;
  --tag-background: hsla(45, 41%, 60%, 0.1) !important;
  --tag-background-hover: hsla(45, 41%, 60%, 0.2) !important;
  --tag-border-color: hsla(45, 41%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(45, 41%, 60%, 0.15) !important;
  --tag-color: hsl(42, 41.82%, 69%) !important;
  --tag-color-hover: hsl(42, 41.82%, 69%) !important;
  --tertiary: hsl(40, 43.05%, 77.4%) !important;
  --text-accent: hsl(42, 41.82%, 69%) !important;
  --text-accent-hover: hsl(40, 43.05%, 77.4%) !important;
  --text-muted: rgb(198 193 135) !important;
  --text-on-accent: rgb(59, 53, 34) !important;
  --text-on-accent-inverted: white !important;
  --text-selection: hsla(45, 41%, 60%, 0.33) !important;
  --text-stroke-color: hsl(45deg 100% 84%) !important;
  --textHighlight: hsla(45, 41%, 60%, 0.1) !important;
  --titlebar-background: #111111 !important;
  --titlebar-background-focused: #111111 !important;
  --titlebar-text-color: rgb(198 193 135) !important;
  --vault-name-font-size: 20px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(17, 15, 15);
}`,
    typography: `html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(68, 207, 110);
  font-weight: 500;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body p {
  color: rgb(198, 193, 135);
  outline: rgb(198, 193, 135) none 0px;
  text-decoration: rgb(198, 193, 135);
  text-decoration-color: rgb(198, 193, 135);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration: underline rgb(209, 189, 143);
  text-decoration-color: rgb(209, 189, 143);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration: rgb(209, 189, 143);
  text-decoration-color: rgb(209, 189, 143);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(209, 189, 143);
  outline: rgb(209, 189, 143) none 0px;
  text-decoration: rgba(195, 174, 111, 0.3);
  text-decoration-color: rgba(195, 174, 111, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(29, 29, 29, 0.643);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body th {
  color: rgb(198, 193, 135);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(195, 174, 111);
}

html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(195, 174, 111);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(198, 193, 135, 0.45);
  text-decoration: rgba(198, 193, 135, 0.45);
  text-decoration-color: rgba(198, 193, 135, 0.45);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(17, 15, 15);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(83, 223, 221);
  border-left-color: rgb(83, 223, 221);
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgba(17, 15, 15, 0.9);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 241, 226, 25;
  background-color: rgba(241, 226, 25, 0.1);
  border-bottom-color: rgba(241, 226, 25, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(241, 226, 25, 0.25);
  border-right-color: rgba(241, 226, 25, 0.25);
  border-top-color: rgba(241, 226, 25, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(209, 189, 143);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(17, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 15);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 193, 135);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 193, 135);
  text-decoration: rgb(198, 193, 135);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(198, 193, 135);
  stroke: rgb(198, 193, 135);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  color: rgb(198, 193, 135);
  margin-bottom: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(198, 193, 135);
  border-left-color: rgb(198, 193, 135);
  border-right-color: rgb(198, 193, 135);
  border-top-color: rgb(198, 193, 135);
  color: rgb(198, 193, 135);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(0, 0, 0);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 45 !important;
  --accent-l: 60% !important;
  --accent-s: 41% !important;
  --active-bg: #edffd19e !important;
  --background-modifier-active-hover: hsla(45, 41%, 60%, 0.1) !important;
  --background-primary: #fefff6 !important;
  --background-secondary: #fefff6 !important;
  --bases-cards-background: #fefff6 !important;
  --bases-group-heading-property-color: rgb(110 102 3) !important;
  --bases-table-cell-background-active: #fefff6 !important;
  --bases-table-cell-background-selected: hsla(45, 41%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(44, 41.41%, 64.5%) !important;
  --bases-table-header-background: #fefff6 !important;
  --bases-table-header-color: rgb(110 102 3) !important;
  --bases-table-summary-background: #fefff6 !important;
  --blockquote-background-color: #dae6c5a4 !important;
  --blockquote-background-hover: rgba(246, 246, 199, 0.937) !important;
  --blockquote-border-color: hsl(44, 41.41%, 64.5%) !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, #fefff6 65%, transparent) linear-gradient(#fefff6, color-mix(in srgb, #fefff6 65%, transparent)) !important;
  --button-radius: 8px !important;
  --callout-radius: 20px;
  --callout-tip: 241, 226, 25;
  --canvas-background: #fefff6 !important;
  --canvas-color: 241, 226, 25 !important;
  --canvas-color-2: 165, 156, 103 !important;
  --canvas-color-3: transparent !important;
  --checkbox-border-color-hover: rgb(110 102 3) !important;
  --checkbox-color: hsl(44, 41.41%, 64.5%) !important;
  --checkbox-color-hover: hsl(42, 41.82%, 69%) !important;
  --checkbox-marker-color: #fefff6 !important;
  --checkbox-radius: 16px !important;
  --checklist-done-color: rgb(110 102 3 / 45%) !important;
  --checklist-done-decoration: none !important;
  --cm-active: #f0f09839 !important;
  --code-background: black !important;
  --code-punctuation: rgb(110 102 3) !important;
  --code-radius: 12px !important;
  --collapse-icon-color-collapsed: hsl(45, 41%, 60%) !important;
  --color-accent: hsl(45, 41%, 60%) !important;
  --color-accent-1: hsl(44, 41.41%, 64.5%) !important;
  --color-accent-2: hsl(42, 41.82%, 69%) !important;
  --color-accent-hsl: 45, 41%, 60% !important;
  --color-crimson: rgb(172, 99, 99) !important;
  --color-crimson-rgb: 172, 99, 99 !important;
  --color-goldFusion-rgb: 165, 156, 103 !important;
  --color-starred: rgb(241, 226, 25) !important;
  --color-starred-rgb: 241, 226, 25 !important;
  --dark: rgb(110 102 3) !important;
  --darkgray: rgb(110 102 3) !important;
  --divider-color: #f6f6f6 !important;
  --divider-color-hover: hsl(44, 41.41%, 64.5%) !important;
  --embed-border-start: 2px solid hsl(44, 41.41%, 64.5%) !important;
  --file-header-background: #fefff6 !important;
  --file-header-background-focused: #fefff6 !important;
  --footnote-id-color: rgb(110 102 3) !important;
  --footnote-input-background-active: #fefff6 !important;
  --graph-node: rgb(110 102 3) !important;
  --graph-node-focused: hsl(45, 41%, 60%) !important;
  --gray: rgb(110 102 3) !important;
  --h1-size: 2em !important;
  --h2-size: 1.7em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1.1em !important;
  --highlight: hsla(45, 41%, 60%, 0.1) !important;
  --hr-color: rgb(110 102 3 / 10%) !important;
  --icon-color: rgb(110 102 3) !important;
  --icon-color-active: hsl(45, 41%, 60%) !important;
  --icon-color-hover: rgb(110 102 3) !important;
  --inline-title-color: #e93147 !important;
  --inline-title-size: 2.3em !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(44, 41.41%, 64.5%) !important;
  --interactive-accent-hover: hsl(42, 41.82%, 69%) !important;
  --interactive-accent-hsl: 45, 41%, 60% !important;
  --italic-color: rgb(172, 99, 99) !important;
  --light: #fefff6 !important;
  --lightgray: #fefff6 !important;
  --line-height-tight: 1.8 !important;
  --link-color: hsl(45, 41%, 60%) !important;
  --link-color-hover: hsl(42, 41.82%, 69%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(45, 41%, 60%) !important;
  --link-external-color-hover: hsl(42, 41.82%, 69%) !important;
  --link-unresolved-color: hsl(45, 41%, 60%) !important;
  --link-unresolved-decoration-color: hsla(45, 41%, 60%, 0.3) !important;
  --list-bullet-border: 1px solid hsl(42, 41.82%, 69%) !important;
  --list-marker-color: hsl(45, 41%, 60%) !important;
  --list-marker-color-collapsed: hsl(45, 41%, 60%) !important;
  --list-marker-color-hover: rgb(110 102 3) !important;
  --menu-background: #fefff6 !important;
  --metadata-input-background-active: #fefff6 !important;
  --metadata-label-text-color: rgb(110 102 3) !important;
  --metadata-label-text-color-hover: rgb(110 102 3) !important;
  --metadata-property-background-hover: rgba(0, 0, 0, 0.03) !important;
  --modal-background: #fefff6 !important;
  --muted-accent: rgb(110 102 3) !important;
  --muted-accent-rgb: 110 102 3 !important;
  --nav-heading-color-collapsed-hover: rgb(110 102 3) !important;
  --nav-item-background-selected: hsla(45, 41%, 60%, 0.15) !important;
  --nav-item-color: rgb(110 102 3) !important;
  --nav-item-color-highlighted: hsl(45, 41%, 60%) !important;
  --nav-tag-color-active: rgb(110 102 3) !important;
  --nav-tag-color-hover: rgb(110 102 3) !important;
  --pdf-background: #fefff6 !important;
  --pdf-page-background: #fefff6 !important;
  --pdf-sidebar-background: #fefff6 !important;
  --pill-color: rgb(110 102 3) !important;
  --pill-color-remove-hover: hsl(45, 41%, 60%) !important;
  --primary-90: rgb(254 255 246 / 0.9) !important;
  --prompt-background: #fefff6 !important;
  --raised-background: color-mix(in srgb, #fefff6 65%, transparent) linear-gradient(#fefff6, color-mix(in srgb, #fefff6 65%, transparent)) !important;
  --ribbon-background: #fefff6 !important;
  --ribbon-background-collapsed: #fefff6 !important;
  --search-clear-button-color: rgb(110 102 3) !important;
  --search-icon-color: rgb(110 102 3) !important;
  --search-result-background: #fefff6 !important;
  --secondary: hsl(45, 41%, 60%) !important;
  --status-bar-background: #fefff6 !important;
  --status-bar-border-color: #f6f6f6 !important;
  --status-bar-text-color: rgb(110 102 3) !important;
  --suggestion-background: #fefff6 !important;
  --tab-background-active: #edffd19e !important;
  --tab-container-background: #fefff6 !important;
  --tab-outline-color: transparent !important;
  --tab-radius-active: 12px !important;
  --tab-switcher-background: #fefff6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fefff6, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(45, 41%, 60%) !important;
  --tab-text-color-active: rgb(110 102 3) !important;
  --tab-text-color-focused: #ababab !important;
  --tab-text-color-focused-active: rgb(110 102 3) !important;
  --tab-text-color-focused-active-current: hsl(45, 41%, 60%) !important;
  --tab-text-color-focused-highlighted: hsl(45, 41%, 60%) !important;
  --tab-width: 180px !important;
  --table-drag-handle-background-active: hsl(44, 41.41%, 64.5%) !important;
  --table-drag-handle-color-active: rgb(59, 53, 34) !important;
  --table-header-color: rgb(110 102 3) !important;
  --table-line-height: 1.8 !important;
  --table-selection: hsla(45, 41%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(44, 41.41%, 64.5%) !important;
  --tag-background: hsla(45, 41%, 60%, 0.1) !important;
  --tag-background-hover: hsla(45, 41%, 60%, 0.2) !important;
  --tag-border-color: hsla(45, 41%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(45, 41%, 60%, 0.15) !important;
  --tag-color: hsl(45, 41%, 60%) !important;
  --tag-color-hover: hsl(45, 41%, 60%) !important;
  --tertiary: hsl(42, 41.82%, 69%) !important;
  --text-accent: hsl(45, 41%, 60%) !important;
  --text-accent-hover: hsl(42, 41.82%, 69%) !important;
  --text-muted: rgb(110 102 3) !important;
  --text-on-accent: rgb(59, 53, 34) !important;
  --text-on-accent-inverted: white !important;
  --text-selection: hsla(45, 41%, 60%, 0.2) !important;
  --text-stroke-color: #222222 !important;
  --textHighlight: hsla(45, 41%, 60%, 0.1) !important;
  --titlebar-background: #fefff6 !important;
  --titlebar-background-focused: #fefff6 !important;
  --titlebar-text-color: rgb(110 102 3) !important;
  --vault-name-font-size: 20px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(254, 255, 246);
  border-left-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 255, 246);
}`,
    typography: `html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(172, 99, 99);
  outline: rgb(172, 99, 99) none 0px;
  text-decoration: rgb(172, 99, 99);
  text-decoration-color: rgb(172, 99, 99);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(8, 185, 78);
  font-weight: 500;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration: rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body p {
  color: rgb(110, 102, 3);
  outline: rgb(110, 102, 3) none 0px;
  text-decoration: rgb(110, 102, 3);
  text-decoration-color: rgb(110, 102, 3);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration: underline rgb(195, 174, 111);
  text-decoration-color: rgb(195, 174, 111);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration: rgb(195, 174, 111);
  text-decoration-color: rgb(195, 174, 111);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(195, 174, 111);
  outline: rgb(195, 174, 111) none 0px;
  text-decoration: rgba(195, 174, 111, 0.3);
  text-decoration-color: rgba(195, 174, 111, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(218, 230, 197, 0.643);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body th {
  color: rgb(110, 102, 3);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(202, 182, 127);
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(202, 182, 127);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(110, 102, 3, 0.45);
  text-decoration: rgba(110, 102, 3, 0.45);
  text-decoration-color: rgba(110, 102, 3, 0.45);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(254, 255, 246);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 191, 188);
  border-left-color: rgb(0, 191, 188);
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgba(254, 255, 246, 0.9);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 241, 226, 25;
  background-color: rgba(241, 226, 25, 0.1);
  border-bottom-color: rgba(241, 226, 25, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(241, 226, 25, 0.25);
  border-right-color: rgba(241, 226, 25, 0.25);
  border-top-color: rgba(241, 226, 25, 0.25);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(195, 174, 111, 0.1);
  border-bottom-color: rgba(195, 174, 111, 0.15);
  border-left-color: rgba(195, 174, 111, 0.15);
  border-right-color: rgba(195, 174, 111, 0.15);
  border-top-color: rgba(195, 174, 111, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(195, 174, 111);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(233, 49, 71);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(254, 255, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 255, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(254, 255, 246);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 102, 3);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 102, 3);
  text-decoration: rgb(110, 102, 3);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(110, 102, 3);
  stroke: rgb(110, 102, 3);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  color: rgb(110, 102, 3);
  margin-bottom: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(254, 255, 246);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(110, 102, 3);
  border-left-color: rgb(110, 102, 3);
  border-right-color: rgb(110, 102, 3);
  border-top-color: rgb(110, 102, 3);
  color: rgb(110, 102, 3);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(0, 0, 0);
}`,
  },
};
